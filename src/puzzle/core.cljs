(ns puzzle.core
  (:require []))

(enable-console-print!)

;; define your app data so that it doesn't get over-written on reload
(defonce app-state (atom {:text "Hello world!"}))

(println (:text @app-state))
