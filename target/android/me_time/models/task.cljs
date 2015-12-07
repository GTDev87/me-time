(ns me-time.models.task
  (:require [me-time.models.timer :refer [create-timer]]))

; Model
(defrecord Task [name goal-time timer])

; Utility
(defn wrap-task [task] (map->Task task))

; Init
(defn create-task [name] (->Task name 0 (create-timer)))

; Update
(defn update-task-name [task name]
  (assoc task :name name))

(defn update-goal-time [task goal-time]
  (assoc task :goal-time goal-time))

(defn update-timer [task update-fn & args]
  (-> task 
    (assoc :timer (apply update-fn (cons (:timer task) args) ))))
