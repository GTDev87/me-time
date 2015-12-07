(ns me-time.views.react-native.task-list
  (:require [reagent.core :as r]
            [re-frame.core :refer [subscribe dispatch dispatch-sync]]
            [me-time.views.react-native.task :refer [view-task]]
            [me-time.models.task-list :refer [wrap-task-list add-task update-task-id]]))

(set! js/React (js/require "react-native/Libraries/react-native/react-native.js"))

(def view (r/adapt-react-class (.-View js/React)))
(def text (r/adapt-react-class (.-Text js/React)))
(def touchable-native-feedback (r/adapt-react-class (.-TouchableNativeFeedback js/React)))

(defn view-task-context [task-context-data task-context-dispatch-partial]
  (let [task-dispatch-partial (partial task-context-dispatch-partial (:id task-context-data))]
    [view
      {:style {:flexDirection "row"}}
      [text 
          {}
          (str "Task # " (:id task-context-data) " = ")]
      (view-task (:task task-context-data) task-dispatch-partial)]))

(defn view-task-list [task-list-data update-list-atom]
  (let [task-list (wrap-task-list task-list-data)
        list-dispatch-partial (partial update-list-atom task-list-data)]
    [view {:style {:flexDirection "column" :margin 40 :alignItems "center"}}

      (map 
        (fn [element] (view-task-context element (partial list-dispatch-partial update-task-id))) 
        (:task-contexts task-list))
      [touchable-native-feedback 
        {:on-press (fn [] 
          (list-dispatch-partial add-task (str "TASK" (:next-id task-list))))
          ; :style {:backgroundColor "#999" }
         :background (.TouchableNativeFeedback/SelectableBackground js/React)
        }
        [view
          {:style {:backgroundColor "red"}}
          [text 
            {:style {:color "white" :textAlign "center" :fontWeight "bold"}}
            "Add Task"]]]]))
