// Compiled by ClojureScript 1.7.170 {}
goog.provide('me_time.views.react_native.task_list');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('me_time.views.react_native.task');
goog.require('me_time.models.task_list');
React = require("react-native/Libraries/react-native/react-native.js");
me_time.views.react_native.task_list.view = reagent.core.adapt_react_class.call(null,React.View);
me_time.views.react_native.task_list.text = reagent.core.adapt_react_class.call(null,React.Text);
me_time.views.react_native.task_list.touchable_native_feedback = reagent.core.adapt_react_class.call(null,React.TouchableNativeFeedback);
me_time.views.react_native.task_list.view_task_context = (function me_time$views$react_native$task_list$view_task_context(task_context_data,task_context_dispatch_partial){
var task_dispatch_partial = cljs.core.partial.call(null,task_context_dispatch_partial,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task_context_data));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [me_time.views.react_native.task_list.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flexDirection","flexDirection",1286039598),"row"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [me_time.views.react_native.task_list.text,cljs.core.PersistentArrayMap.EMPTY,[cljs.core.str("Task # "),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task_context_data)),cljs.core.str(" = ")].join('')], null),me_time.views.react_native.task.view_task.call(null,new cljs.core.Keyword(null,"task","task",-1476607993).cljs$core$IFn$_invoke$arity$1(task_context_data),task_dispatch_partial)], null);
});
me_time.views.react_native.task_list.view_task_list = (function me_time$views$react_native$task_list$view_task_list(task_list_data,update_list_atom){
var task_list = me_time.models.task_list.wrap_task_list.call(null,task_list_data);
var list_dispatch_partial = cljs.core.partial.call(null,update_list_atom,task_list_data);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [me_time.views.react_native.task_list.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flexDirection","flexDirection",1286039598),"column",new cljs.core.Keyword(null,"margin","margin",-995903681),(40),new cljs.core.Keyword(null,"alignItems","alignItems",410331199),"center"], null)], null),cljs.core.map.call(null,((function (task_list,list_dispatch_partial){
return (function (element){
return me_time.views.react_native.task_list.view_task_context.call(null,element,cljs.core.partial.call(null,list_dispatch_partial,me_time.models.task_list.update_task_id));
});})(task_list,list_dispatch_partial))
,new cljs.core.Keyword(null,"task-contexts","task-contexts",-1866515389).cljs$core$IFn$_invoke$arity$1(task_list)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [me_time.views.react_native.task_list.touchable_native_feedback,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-press","on-press",-1763585856),((function (task_list,list_dispatch_partial){
return (function (){
return list_dispatch_partial.call(null,me_time.models.task_list.add_task,[cljs.core.str("TASK"),cljs.core.str(new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(task_list))].join(''));
});})(task_list,list_dispatch_partial))
,new cljs.core.Keyword(null,"background","background",-863952629),React.TouchableNativeFeedback.SelectableBackground()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [me_time.views.react_native.task_list.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"red"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [me_time.views.react_native.task_list.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"center",new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),"bold"], null)], null),"Add Task"], null)], null)], null)], null);
});

//# sourceMappingURL=task_list.js.map