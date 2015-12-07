// Compiled by ClojureScript 1.7.170 {}
goog.provide('me_time.views.react_native.timer');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('me_time.models.timer');
React = require("react-native/Libraries/react-native/react-native.js");
me_time.views.react_native.timer.view = reagent.core.adapt_react_class.call(null,React.View);
me_time.views.react_native.timer.text = reagent.core.adapt_react_class.call(null,React.Text);
me_time.views.react_native.timer.touchable_native_feedback = reagent.core.adapt_react_class.call(null,React.TouchableNativeFeedback);
me_time.views.react_native.timer.view_timer = (function me_time$views$react_native$timer$view_timer(timer_data,timer_dispatch){
var timer = me_time.models.timer.wrap_timer.call(null,timer_data);
var click_functions = ((function (timer){
return (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(timer))){
return timer_dispatch.call(null,me_time.models.timer.stop_timer);
} else {
return timer_dispatch.call(null,me_time.models.timer.start_timer,(new Date()).valueOf());
}
});})(timer))
;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [me_time.views.react_native.timer.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flexDirection","flexDirection",1286039598),"row"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [me_time.views.react_native.timer.text,cljs.core.PersistentArrayMap.EMPTY,[cljs.core.str(" "),cljs.core.str(cljs.core.quot.call(null,new cljs.core.Keyword(null,"duration-milliseconds","duration-milliseconds",650739461).cljs$core$IFn$_invoke$arity$1(timer),(1000)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [me_time.views.react_native.timer.view,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [me_time.views.react_native.timer.touchable_native_feedback,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-press","on-press",-1763585856),click_functions,new cljs.core.Keyword(null,"on-long-press","on-long-press",-1256774209),click_functions,new cljs.core.Keyword(null,"background","background",-863952629),React.TouchableNativeFeedback.SelectableBackground()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [me_time.views.react_native.timer.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"red"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [me_time.views.react_native.timer.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"center",new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),"bold"], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(timer))?"stop":"start")], null)], null)], null)], null)], null);
});

//# sourceMappingURL=timer.js.map