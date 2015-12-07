(ns me-time.views.react-native.timer
  (:require [reagent.core :as r]
            [me-time.models.timer :refer [wrap-timer start-timer stop-timer]]))

(set! js/React (js/require "react-native/Libraries/react-native/react-native.js"))

(def view (r/adapt-react-class (.-View js/React)))
(def text (r/adapt-react-class (.-Text js/React)))
(def touchable-native-feedback (r/adapt-react-class (.-TouchableNativeFeedback js/React)))

(defn view-timer [timer-data timer-dispatch]
  (let [timer (wrap-timer timer-data)
        click-functions (fn [] 
                            (if (:active timer) 
                                (timer-dispatch stop-timer) 
                                (timer-dispatch start-timer (.valueOf (js/Date.)))))]
    [view
      {:style {:flexDirection "row"}}
      [text 
          {}; :style {:fontSize 30 :fontWeight "100" :marginBottom 20 :textAlign "center"}
          (str " " (quot (:duration-milliseconds timer) 1000))]
      [view
        [touchable-native-feedback 
          {:on-press click-functions
           :on-long-press click-functions     ; :style {:backgroundColor "#999" }
           :background (.TouchableNativeFeedback/SelectableBackground js/React)
          }
          [view
            {:style {:backgroundColor "red"}}
            [text 
              {:style {:color "white" :textAlign "center" :fontWeight "bold"}}
              (if (:active timer) "stop" "start")]]]]]))

