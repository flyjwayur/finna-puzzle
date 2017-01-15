(ns puzzle.core
  (:require [phzr.core :as p]
            [phzr.game :as pg]
            [phzr.game-object-factory :as pgof]
            [phzr.loader :as pl]))

(enable-console-print!)

;; define your app data so that it doesn't get over-written on reload
(defonce game-state (atom {:text         "Hello world!"
                           :world-width  800
                           :world-height 600
                           :game-div-id  "puzzle-game"
                           :piece-width  200
                           :piece-height 200}))

(println (:text @game-state))

(defn ^:private preload
  [game]
  (let [loader (:load game)]
    (doto loader
      (pl/spritesheet "logo" "images/spritesheet.jpg" (:piece-width @game-state) (:piece-height @game-state)))))

(defn ^:private create
  [game]
  (let [game-object-factory (:add game)
        board-rows (/ (:world-width @game-state) (:piece-width @game-state))
        board-cols (/ (:world-height @game-state) (:piece-height @game-state))]
    (doseq [col (range board-cols)
            row (range board-rows)]
      (pgof/sprite game-object-factory
                   (* row (:piece-width @game-state))
                   (* col (:piece-height @game-state))
                   "logo"
                   (+ (* col board-rows) row)))))

(def build-states
  {:preload preload
   :create  create})

(pg/->Game (:world-width @game-state)
           (:world-height @game-state)
           (p/phaser-constants :auto)
           (:game-div-id @game-state)
           build-states)
