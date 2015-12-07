(ns me-time.models.timer)

; Model
(defrecord Timer [duration-milliseconds active start-time])

; Utility
(defn timer-running? [timer] (:active timer))

(defn wrap-timer [timer] (map->Timer timer))

; Init
(defn create-timer [] (->Timer 0 false 0))

; Updates
(defn update-tick [timer date-time-now]
  (if 
    (timer-running? timer)
    (assoc timer :duration-milliseconds (- date-time-now (:start-time timer)))
    timer))

(defn stop-timer [timer]
  (-> timer 
     (assoc :active false)
     (assoc :start-time 0)))

(defn start-timer [timer date-time-now]
  (-> timer 
     (assoc :active true)
     (assoc :start-time (- date-time-now (:duration-milliseconds timer)))))
