(ns puzzle.game
  (:require [phzr.core :as p :refer [pset!]]
            [phzr.game :as pg]
            [phzr.game-object-factory :as pgof]
            [phzr.loader :as pl]
            [phzr.signal :as psg]
            [phzr.tween :as ptwn]
            [phzr.point :as ppo]))

(enable-console-print!)

;; define your game state so that it doesn't get over-written on reload
(defonce game-state (atom {:text         "Hello world!"
                           :puzzle-image ""
                           :world-width  0
                           :world-height 0
                           :game-div-id  "puzzle-game"
                           :board-cols   3
                           :board-rows   3
                           :piece-width  0
                           :piece-height 0
                           :piece-coords {}
                           :black-coord  []}))

(println (:text @game-state))

(defn ^:private preload
  [game]
  (let [loader (:load game)]
    (doto loader
      (pl/spritesheet "logo" (str "https://api.finna.fi" (:puzzle-image @game-state)) (:piece-width @game-state) (:piece-height @game-state)))))

(defn- display-success-text [game]
  (let [style   {:font "40px Arial" :fill "#ff0000" :align "center"}
        gof     (:add game)
        world-x (get-in game [:world :center-x])
        world-y (get-in game [:world :center-y])
        text    (pgof/text gof
                           world-x
                           world-y
                           "Congratulations! \nYou made it!"
                           style)]
    (pset! text :anchor (ppo/->Point 0.5 0.5))))

(defn- solved? []
  "Returns boolean for whether puzzle is solved"
  (every? (fn [[frame-num coord]]
            (let [board-cols (/ (:world-width @game-state) (:piece-width @game-state))]
              (= frame-num (+ (* (coord 0) board-cols) (coord 1)))))
          (:piece-coords @game-state)))

(defn- can-move [black-coord piece-coord]
  (or (and (= (inc (black-coord 0)) (piece-coord 0)) (= (black-coord 1) (piece-coord 1)))
      (and (= (dec (black-coord 0)) (piece-coord 0)) (= (black-coord 1) (piece-coord 1)))
      (and (= (inc (black-coord 1)) (piece-coord 1)) (= (black-coord 0) (piece-coord 0)))
      (and (= (dec (black-coord 1)) (piece-coord 1)) (= (black-coord 0) (piece-coord 0)))))

(defn- sprite-on-click
  [piece event game]
  (let [gof         (:add game)
        tween       (pgof/tween gof piece)
        black-coord (:black-coord @game-state)
        black-x     (* (:piece-width @game-state) (black-coord 1))
        black-y     (* (:piece-height @game-state) (black-coord 0))
        piece-coord (get-in @game-state [:piece-coords (:name piece)])]
    (when (can-move black-coord piece-coord)
      (swap! game-state assoc :black-coord piece-coord)
      (swap! game-state assoc-in [:piece-coords (:name piece)] black-coord)
      (ptwn/to tween {:x black-x :y black-y} 400 "Linear" true)
      (when (solved?) (display-success-text game)))))

(defn- create-black-piece! [gof col row]
  (let [black (pgof/sprite gof
                           (* col (:piece-width @game-state))
                           (* row (:piece-height @game-state)))]
    (swap! game-state assoc :black-coord [row col])))

(defn- create-puzzle-piece! [game col row sprite-key frame-number]
  (let [gof   (:add game)
        piece (pgof/sprite gof
                           (* col (:piece-width @game-state))
                           (* row (:piece-height @game-state))
                           sprite-key
                           frame-number)]
    (pset! piece :name frame-number)
    (swap! game-state assoc-in [:piece-coords (:name piece)] [row col])
    (pset! piece :input-enabled true)
    (psg/add (get-in piece [:events :on-input-down]) sprite-on-click piece 0 game)))

(defn ^:private init-board!
  "Create randomized puzzle board with one black piece"
  [game]
  (let [game-object-factory (:add game)
        board-cols          (:board-cols @game-state)
        board-rows          (:board-rows @game-state)
        shuffled-frame-nums (shuffle (range (* board-rows board-cols)))]
    (doseq [row (range board-rows)
            col (range board-cols)]
      (let [frame-number (shuffled-frame-nums (+ (* row board-cols) col))]
        (if (= 1 frame-number)
          (create-black-piece! game-object-factory col row)
          (create-puzzle-piece! game col row "logo" frame-number))))))

(defn- create [game]
  (init-board! game))

(def build-states
  {:preload preload
   :create  create})

(defn- start-game []
  (pg/->Game (:world-width @game-state)
             (:world-height @game-state)
             (p/phaser-constants :canvas)
             (:game-div-id @game-state)
             build-states))

(defn- get-image-size-and-start-game [url]
  (let [image (js/Image.)]
    (.addEventListener image
                       "load"
                       (fn [event]
                         (let [image-width  (.-naturalWidth (.-target event))
                               image-height (.-naturalHeight (.-target event))
                               board-rows   (:board-rows @game-state)
                               board-cols   (:board-cols @game-state)]
                           (swap! game-state assoc :world-width image-width)
                           (swap! game-state assoc :world-height image-height)
                           (swap! game-state assoc :piece-width (js/Math.floor (/ image-width board-cols)))
                           (swap! game-state assoc :piece-height (js/Math.floor (/ image-height board-rows)))
                           (start-game))))
    (set! (.-src image) (str "https://api.finna.fi" url))))

(defn start-puzzle [puzzle-image]
  (swap! game-state assoc :puzzle-image puzzle-image)
  (get-image-size-and-start-game puzzle-image))
