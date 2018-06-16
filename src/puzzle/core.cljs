(ns puzzle.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [puzzle.game :as game]))

(go (let [response (<! (http/get "https://api.finna.fi/v1/search"
                                 {:with-credentials? false
                                  :query-params {"lookfor" "kirkko"}}))
          _ (-> (filter #(not (nil? (:images %))) (get-in response [:body :records]))
                              first
                              :images
                              first
                              println)]
      (cljs.pprint/pprint (-> (filter #(not (nil? (:images %))) (get-in response [:body :records]))
                              first
                              :images
                              first
                              game/start-puzzle))))
