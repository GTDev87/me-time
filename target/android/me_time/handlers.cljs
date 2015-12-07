(ns me-time.handlers
  (:require
    [re-frame.core :refer [register-handler path trim-v after dispatch]]
    [me-time.models.task-list :refer [create-task-list]]))

(def app-db {
  :day-start ""
  :greeting "Hello Clojure in iOS and Android!"
  :tasks (create-task-list)})

(register-handler
  :initialize-db
  (fn [_ _] app-db))

(register-handler
  :update-tasks
  (fn [db [id tasks]]
    (assoc db :tasks tasks)))

(register-handler
  :set-greeting
  (fn [db [_ value]]
    (assoc db :greeting value)))