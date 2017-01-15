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
                           :piece_width 200
                           :piece_height 200}))

(println (:text @game-state))

(defn ^:private preload
  [game]
  (let [loader (:load game)]
    (doto loader
      (pl/spritesheet "logo" "images/phaser.png" (:piece_width @game-state) (:piece_height @game-state)))))

(defn ^:private create
  [game]
  (let [game-object-factory (:add game)
        sprite (pgof/sprite game-object-factory 300 200 "logo")]))

(def build-states
  {:preload preload
   :create  create})

(pg/->Game (:world-width @game-state)
           (:world-height @game-state)
           (p/phaser-constants :auto)
           (:game-div-id @game-state)
           build-states)
