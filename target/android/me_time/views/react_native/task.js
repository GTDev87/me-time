// Compiled by ClojureScript 1.7.170 {}
goog.provide('me_time.views.react_native.task');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('me_time.views.react_native.timer');
goog.require('me_time.models.task');
React = require("react-native/Libraries/react-native/react-native.js");
me_time.views.react_native.task.touchable_native_feedback = reagent.core.adapt_react_class.call(null,React.TouchableNativeFeedback);
me_time.views.react_native.task.text_input = reagent.core.adapt_react_class.call(null,React.TextInput);
me_time.views.react_native.task.view = reagent.core.adapt_react_class.call(null,React.View);
me_time.views.react_native.task.text = reagent.core.adapt_react_class.call(null,React.Text);
me_time.views.react_native.task.view_task = (function me_time$views$react_native$task$view_task(task_data,task_dispatch_partial){
var task = me_time.models.task.wrap_task.call(null,task_data);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [me_time.views.react_native.task.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flexDirection","flexDirection",1286039598),"row",new cljs.core.Keyword(null,"alignItems","alignItems",410331199),"center"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [me_time.views.react_native.task.touchable_native_feedback,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-press","on-press",-1763585856),((function (task){
return (function (){
return task_dispatch_partial.call(null,me_time.models.task.update_task_name,"New Name");
});})(task))
,new cljs.core.Keyword(null,"background","background",-863952629),React.TouchableNativeFeedback.SelectableBackground()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [me_time.views.react_native.task.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"red"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [me_time.views.react_native.task.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"center",new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),"bold"], null)], null),"Change"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (task){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [me_time.views.react_native.task.text_input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),(1),new cljs.core.Keyword(null,"width","width",-384071477),(2),new cljs.core.Keyword(null,"borderWidth","borderWidth",1775770350),(1)], null),new cljs.core.Keyword(null,"on-submit-editing","on-submit-editing",720563806),((function (task){
return (function (){
return cljs.core.List.EMPTY;
});})(task))
,new cljs.core.Keyword(null,"on-change-text","on-change-text",557439860),((function (task){
return (function (){
return reagent.core.flush.call(null);
});})(task))
,new cljs.core.Keyword(null,"value","value",305978217),(1)], null)], null);
});})(task))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [me_time.views.react_native.task.text,cljs.core.PersistentArrayMap.EMPTY,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(task)),cljs.core.str(" ")].join('')], null),me_time.views.react_native.timer.view_timer.call(null,new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(task),cljs.core.partial.call(null,task_dispatch_partial,me_time.models.task.update_timer))], null);
});

//# sourceMappingURL=task.js.map