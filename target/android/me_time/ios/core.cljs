(ns ^:figwheel-load me-time.ios.core
  (:require-macros [env.require-img :refer [require-img]])
  (:require [reagent.core :as r :refer [atom]]
            [re-frame.core :refer [subscribe dispatch dispatch-sync]]
            [me-time.handlers]
            [me-time.subs]
            [me-time.models.task :refer [update-timer]]
            [me-time.models.timer :refer [update-tick]]
            [me-time.models.task-list :refer [update-all-task]]
            [me-time.views.react-native.task-list :refer [view-task-list]]))

(enable-console-print!)

(set! js/React (js/require "react-native/Libraries/react-native/react-native.js"))

(def app-registry (.-AppRegistry js/React))
(def text (r/adapt-react-class (.-Text js/React)))
(def view (r/adapt-react-class (.-View js/React)))
(def image (r/adapt-react-class (.-Image js/React)))
(def touchable-highlight (r/adapt-react-class (.-TouchableHighlight js/React)))

(def logo-img (require-img "./images/cljs.png"))

(defn update-list-atom [task-list update-fn & args]
  (let [result (apply update-fn (cons task-list args))]
    (dispatch-sync [:update-tasks result])))

(defonce time-updater 
  (js/setInterval
    (fn []
      (let [task-list (subscribe [:get-tasks])
            now-milliseconds (.valueOf (js/Date.))]
        (doall 
          (dispatch-sync [:update-tasks (update-all-task @task-list update-timer update-tick now-milliseconds)])))) 
    500))

(defn widget []
  (let [task-list (subscribe [:get-tasks])]
    (fn [] 
      [view {:style {:flexDirection "column" :margin 40 :alignItems "center"}}
        [image {:source {:uri "https://raw.githubusercontent.com/cljsinfo/logo.cljs/master/cljs.png"}
                :style  {:width 80 :height 80 :marginBottom 30}}]
        (view-task-list @task-list update-list-atom)])))

(defn mount-root []
      (r/render [widget] 1))

(defn ^:export init []
      (dispatch-sync [:initialize-db])
      (.registerRunnable app-registry "MeTime" #(mount-root)))