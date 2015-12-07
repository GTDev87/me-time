(ns me-time.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :refer [register-sub]]))

;OUTPUTS FROM DATABASE

(register-sub
  :get-tasks
  (fn [db _]
    (reaction
      (get @db :tasks))))

(register-sub
  :get-greeting
  (fn [db _]
    (reaction
      (get @db :greeting))))