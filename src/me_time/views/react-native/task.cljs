(ns me-time.views.react-native.task
  (:require [reagent.core :as r]
            [re-frame.core :refer [subscribe dispatch dispatch-sync]]
            [me-time.views.react-native.timer :refer [view-timer]]
            [me-time.models.task :refer [wrap-task update-timer update-task-name]]))

(set! js/React (js/require "react-native/Libraries/react-native/react-native.js"))

(def touchable-native-feedback (r/adapt-react-class (.-TouchableNativeFeedback js/React)))

(def view (r/adapt-react-class (.-View js/React)))
(def text (r/adapt-react-class (.-Text js/React)))

(defn view-task [task-data task-dispatch-partial]
  (let [task (wrap-task task-data)]
    [view
      {:style {:flexDirection "row"}}
      [touchable-native-feedback 
        {:on-press (fn [] 
          (task-dispatch-partial update-task-name "New Name"))
         :background (.TouchableNativeFeedback/SelectableBackground js/React)
        }
        [view
          {:style {:backgroundColor "red"}}
          [text 
            {:style {:color "white" :textAlign "center" :fontWeight "bold"}}
            "Change"]]]
      [text 
          {}
          (str (:name task) "     ")]
      (view-timer (:timer task) (partial task-dispatch-partial update-timer))]))
