(ns puzzle.core
  (:require [phzr.core :as p :refer [pset!]]
            [phzr.game :as pg]
            [phzr.game-object-factory :as pgof]
            [phzr.loader :as pl]
            [phzr.signal :as psg]
            [phzr.tween :as ptwn]))

(enable-console-print!)

;; define your game state so that it doesn't get over-written on reload
(defonce game-state (atom {:text         "Hello world!"
                           :world-width  800
                           :world-height 600
                           :game-div-id  "puzzle-game"
                           :piece-width  200
                           :piece-height 200
                           :piece-coords {}
                           :black-coord  []}))

(println (:text @game-state))

(defn ^:private preload
  [game]
  (let [loader (:load game)]
    (doto loader
      (pl/spritesheet "logo" "images/spritesheet.jpg" (:piece-width @game-state) (:piece-height @game-state)))))

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
      (ptwn/to tween {:x black-x :y black-y} 400 "Linear" true))))

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
        board-cols          (/ (:world-width @game-state) (:piece-width @game-state))
        board-rows          (/ (:world-height @game-state) (:piece-height @game-state))
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

(pg/->Game (:world-width @game-state)
           (:world-height @game-state)
           (p/phaser-constants :auto)
           (:game-div-id @game-state)
           build-states)
