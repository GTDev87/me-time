(ns me-time.models.task-list
  (:require [me-time.models.task :refer [create-task]]))

; Model
(defrecord TaskContext [task id])

(defrecord TaskList [task-contexts next-id])

; Init
(defn create-task-list [] (->TaskList [] 0))

(defn create-task-context [task id] (->TaskContext task id))

(defn wrap-task-list [task-list] (map->TaskList task-list))

; Update
(defn add-task [task-list name]
  (-> task-list
    (assoc :task-contexts (concat (:task-contexts task-list) [(create-task-context (create-task name) (:next-id task-list))]))
    (assoc :next-id (+ (:next-id task-list) 1))))

(defn remove-task [task-list id]
  (remove (fn [context] (= (:id context) id)) (:task-contexts task-list)))

(defn update-task-id [task-list id update-fn & args]
  (assoc 
    task-list 
    :task-contexts
    (map 
      (fn [task-context] 
        (let [task (:task task-context)]
          (if (= (:id task-context) id) 
            (assoc task-context :task (apply update-fn (cons task args)))
            task-context))) 
      (:task-contexts task-list))))

(defn update-all-task [task-list update-fn & args]
  (assoc 
    task-list 
    :task-contexts 
    (map 
      (fn [task-context] 
        (let [task (:task task-context)]
          (assoc task-context :task (apply update-fn (cons (:task task-context) args) ))))
      (:task-contexts task-list))))
