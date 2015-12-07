// Compiled by ClojureScript 1.7.170 {}
goog.provide('me_time.ios.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('me_time.handlers');
goog.require('me_time.subs');
goog.require('me_time.models.task');
goog.require('me_time.models.timer');
goog.require('me_time.models.task_list');
goog.require('me_time.views.react_native.task_list');
cljs.core.enable_console_print_BANG_.call(null);
React = require("react-native/Libraries/react-native/react-native.js");
me_time.ios.core.app_registry = React.AppRegistry;
me_time.ios.core.text = reagent.core.adapt_react_class.call(null,React.Text);
me_time.ios.core.view = reagent.core.adapt_react_class.call(null,React.View);
me_time.ios.core.image = reagent.core.adapt_react_class.call(null,React.Image);
me_time.ios.core.touchable_highlight = reagent.core.adapt_react_class.call(null,React.TouchableHighlight);
me_time.ios.core.logo_img = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uri","uri",-774711847),"http://10.0.2.2:8081/./images/cljs.png"], null);
me_time.ios.core.update_list_atom = (function me_time$ios$core$update_list_atom(var_args){
var args__17891__auto__ = [];
var len__17884__auto___29883 = arguments.length;
var i__17885__auto___29884 = (0);
while(true){
if((i__17885__auto___29884 < len__17884__auto___29883)){
args__17891__auto__.push((arguments[i__17885__auto___29884]));

var G__29885 = (i__17885__auto___29884 + (1));
i__17885__auto___29884 = G__29885;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((2) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((2)),(0))):null);
return me_time.ios.core.update_list_atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17892__auto__);
});

me_time.ios.core.update_list_atom.cljs$core$IFn$_invoke$arity$variadic = (function (task_list,update_fn,args){
var result = cljs.core.apply.call(null,update_fn,cljs.core.cons.call(null,task_list,args));
return re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-tasks","update-tasks",-1159303169),result], null));
});

me_time.ios.core.update_list_atom.cljs$lang$maxFixedArity = (2);

me_time.ios.core.update_list_atom.cljs$lang$applyTo = (function (seq29880){
var G__29881 = cljs.core.first.call(null,seq29880);
var seq29880__$1 = cljs.core.next.call(null,seq29880);
var G__29882 = cljs.core.first.call(null,seq29880__$1);
var seq29880__$2 = cljs.core.next.call(null,seq29880__$1);
return me_time.ios.core.update_list_atom.cljs$core$IFn$_invoke$arity$variadic(G__29881,G__29882,seq29880__$2);
});
if(typeof me_time.ios.core.time_updater !== 'undefined'){
} else {
me_time.ios.core.time_updater = setInterval((function (){
var task_list = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-tasks","get-tasks",-1984554960)], null));
var now_milliseconds = (new Date()).valueOf();
return cljs.core.doall.call(null,re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-tasks","update-tasks",-1159303169),me_time.models.task_list.update_all_task.call(null,cljs.core.deref.call(null,task_list),me_time.models.task.update_timer,me_time.models.timer.update_tick,now_milliseconds)], null)));
}),(500));
}
me_time.ios.core.widget = (function me_time$ios$core$widget(){
var task_list = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-tasks","get-tasks",-1984554960)], null));
return ((function (task_list){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [me_time.ios.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flexDirection","flexDirection",1286039598),"column",new cljs.core.Keyword(null,"margin","margin",-995903681),(40),new cljs.core.Keyword(null,"alignItems","alignItems",410331199),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [me_time.ios.core.image,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uri","uri",-774711847),"https://raw.githubusercontent.com/cljsinfo/logo.cljs/master/cljs.png"], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(80),new cljs.core.Keyword(null,"height","height",1025178622),(80),new cljs.core.Keyword(null,"marginBottom","marginBottom",1236079031),(30)], null)], null)], null),me_time.views.react_native.task_list.view_task_list.call(null,cljs.core.deref.call(null,task_list),me_time.ios.core.update_list_atom)], null);
});
;})(task_list))
});
me_time.ios.core.mount_root = (function me_time$ios$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [me_time.ios.core.widget], null),(1));
});
me_time.ios.core.init = (function me_time$ios$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

return me_time.ios.core.app_registry.registerRunnable("MeTime",(function (){
return me_time.ios.core.mount_root.call(null);
}));
});
goog.exportSymbol('me_time.ios.core.init', me_time.ios.core.init);

//# sourceMappingURL=core.js.map