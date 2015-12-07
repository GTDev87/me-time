// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__24026 = cljs.core._EQ_;
var expr__24027 = (function (){var or__16826__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__24026.call(null,"true",expr__24027))){
return true;
} else {
if(cljs.core.truth_(pred__24026.call(null,"false",expr__24027))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__24027)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__17891__auto__ = [];
var len__17884__auto___24030 = arguments.length;
var i__17885__auto___24031 = (0);
while(true){
if((i__17885__auto___24031 < len__17884__auto___24030)){
args__17891__auto__.push((arguments[i__17885__auto___24031]));

var G__24032 = (i__17885__auto___24031 + (1));
i__17885__auto___24031 = G__24032;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((0) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__17892__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq24029){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24029));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__24033){
var map__24036 = p__24033;
var map__24036__$1 = ((((!((map__24036 == null)))?((((map__24036.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24036.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24036):map__24036);
var message = cljs.core.get.call(null,map__24036__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__24036__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16826__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16814__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16814__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16814__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19750__auto___24198 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19750__auto___24198,ch){
return (function (){
var f__19751__auto__ = (function (){var switch__19638__auto__ = ((function (c__19750__auto___24198,ch){
return (function (state_24167){
var state_val_24168 = (state_24167[(1)]);
if((state_val_24168 === (7))){
var inst_24163 = (state_24167[(2)]);
var state_24167__$1 = state_24167;
var statearr_24169_24199 = state_24167__$1;
(statearr_24169_24199[(2)] = inst_24163);

(statearr_24169_24199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24168 === (1))){
var state_24167__$1 = state_24167;
var statearr_24170_24200 = state_24167__$1;
(statearr_24170_24200[(2)] = null);

(statearr_24170_24200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24168 === (4))){
var inst_24120 = (state_24167[(7)]);
var inst_24120__$1 = (state_24167[(2)]);
var state_24167__$1 = (function (){var statearr_24171 = state_24167;
(statearr_24171[(7)] = inst_24120__$1);

return statearr_24171;
})();
if(cljs.core.truth_(inst_24120__$1)){
var statearr_24172_24201 = state_24167__$1;
(statearr_24172_24201[(1)] = (5));

} else {
var statearr_24173_24202 = state_24167__$1;
(statearr_24173_24202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24168 === (15))){
var inst_24127 = (state_24167[(8)]);
var inst_24142 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24127);
var inst_24143 = cljs.core.first.call(null,inst_24142);
var inst_24144 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_24143);
var inst_24145 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_24144)].join('');
var inst_24146 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_24145);
var state_24167__$1 = state_24167;
var statearr_24174_24203 = state_24167__$1;
(statearr_24174_24203[(2)] = inst_24146);

(statearr_24174_24203[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24168 === (13))){
var inst_24151 = (state_24167[(2)]);
var state_24167__$1 = state_24167;
var statearr_24175_24204 = state_24167__$1;
(statearr_24175_24204[(2)] = inst_24151);

(statearr_24175_24204[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24168 === (6))){
var state_24167__$1 = state_24167;
var statearr_24176_24205 = state_24167__$1;
(statearr_24176_24205[(2)] = null);

(statearr_24176_24205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24168 === (17))){
var inst_24149 = (state_24167[(2)]);
var state_24167__$1 = state_24167;
var statearr_24177_24206 = state_24167__$1;
(statearr_24177_24206[(2)] = inst_24149);

(statearr_24177_24206[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24168 === (3))){
var inst_24165 = (state_24167[(2)]);
var state_24167__$1 = state_24167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24167__$1,inst_24165);
} else {
if((state_val_24168 === (12))){
var inst_24126 = (state_24167[(9)]);
var inst_24140 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_24126,opts);
var state_24167__$1 = state_24167;
if(cljs.core.truth_(inst_24140)){
var statearr_24178_24207 = state_24167__$1;
(statearr_24178_24207[(1)] = (15));

} else {
var statearr_24179_24208 = state_24167__$1;
(statearr_24179_24208[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24168 === (2))){
var state_24167__$1 = state_24167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24167__$1,(4),ch);
} else {
if((state_val_24168 === (11))){
var inst_24127 = (state_24167[(8)]);
var inst_24132 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24133 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_24127);
var inst_24134 = cljs.core.async.timeout.call(null,(1000));
var inst_24135 = [inst_24133,inst_24134];
var inst_24136 = (new cljs.core.PersistentVector(null,2,(5),inst_24132,inst_24135,null));
var state_24167__$1 = state_24167;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24167__$1,(14),inst_24136);
} else {
if((state_val_24168 === (9))){
var inst_24127 = (state_24167[(8)]);
var inst_24153 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_24154 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24127);
var inst_24155 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24154);
var inst_24156 = [cljs.core.str("Not loading: "),cljs.core.str(inst_24155)].join('');
var inst_24157 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_24156);
var state_24167__$1 = (function (){var statearr_24180 = state_24167;
(statearr_24180[(10)] = inst_24153);

return statearr_24180;
})();
var statearr_24181_24209 = state_24167__$1;
(statearr_24181_24209[(2)] = inst_24157);

(statearr_24181_24209[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24168 === (5))){
var inst_24120 = (state_24167[(7)]);
var inst_24122 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_24123 = (new cljs.core.PersistentArrayMap(null,2,inst_24122,null));
var inst_24124 = (new cljs.core.PersistentHashSet(null,inst_24123,null));
var inst_24125 = figwheel.client.focus_msgs.call(null,inst_24124,inst_24120);
var inst_24126 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_24125);
var inst_24127 = cljs.core.first.call(null,inst_24125);
var inst_24128 = figwheel.client.autoload_QMARK_.call(null);
var state_24167__$1 = (function (){var statearr_24182 = state_24167;
(statearr_24182[(8)] = inst_24127);

(statearr_24182[(9)] = inst_24126);

return statearr_24182;
})();
if(cljs.core.truth_(inst_24128)){
var statearr_24183_24210 = state_24167__$1;
(statearr_24183_24210[(1)] = (8));

} else {
var statearr_24184_24211 = state_24167__$1;
(statearr_24184_24211[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24168 === (14))){
var inst_24138 = (state_24167[(2)]);
var state_24167__$1 = state_24167;
var statearr_24185_24212 = state_24167__$1;
(statearr_24185_24212[(2)] = inst_24138);

(statearr_24185_24212[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24168 === (16))){
var state_24167__$1 = state_24167;
var statearr_24186_24213 = state_24167__$1;
(statearr_24186_24213[(2)] = null);

(statearr_24186_24213[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24168 === (10))){
var inst_24159 = (state_24167[(2)]);
var state_24167__$1 = (function (){var statearr_24187 = state_24167;
(statearr_24187[(11)] = inst_24159);

return statearr_24187;
})();
var statearr_24188_24214 = state_24167__$1;
(statearr_24188_24214[(2)] = null);

(statearr_24188_24214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24168 === (8))){
var inst_24126 = (state_24167[(9)]);
var inst_24130 = figwheel.client.reload_file_state_QMARK_.call(null,inst_24126,opts);
var state_24167__$1 = state_24167;
if(cljs.core.truth_(inst_24130)){
var statearr_24189_24215 = state_24167__$1;
(statearr_24189_24215[(1)] = (11));

} else {
var statearr_24190_24216 = state_24167__$1;
(statearr_24190_24216[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19750__auto___24198,ch))
;
return ((function (switch__19638__auto__,c__19750__auto___24198,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19639__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19639__auto____0 = (function (){
var statearr_24194 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24194[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19639__auto__);

(statearr_24194[(1)] = (1));

return statearr_24194;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19639__auto____1 = (function (state_24167){
while(true){
var ret_value__19640__auto__ = (function (){try{while(true){
var result__19641__auto__ = switch__19638__auto__.call(null,state_24167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19641__auto__;
}
break;
}
}catch (e24195){if((e24195 instanceof Object)){
var ex__19642__auto__ = e24195;
var statearr_24196_24217 = state_24167;
(statearr_24196_24217[(5)] = ex__19642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24195;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24218 = state_24167;
state_24167 = G__24218;
continue;
} else {
return ret_value__19640__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19639__auto__ = function(state_24167){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19639__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19639__auto____1.call(this,state_24167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19639__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19639__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19639__auto__;
})()
;})(switch__19638__auto__,c__19750__auto___24198,ch))
})();
var state__19752__auto__ = (function (){var statearr_24197 = f__19751__auto__.call(null);
(statearr_24197[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19750__auto___24198);

return statearr_24197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19752__auto__);
});})(c__19750__auto___24198,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__24219_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__24219_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_24226 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_24226){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_24224 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_24225 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_24225;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_24224;
}}catch (e24223){if((e24223 instanceof Error)){
var e = e24223;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_24226], null));
} else {
var e = e24223;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_24226))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__24227){
var map__24234 = p__24227;
var map__24234__$1 = ((((!((map__24234 == null)))?((((map__24234.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24234.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24234):map__24234);
var opts = map__24234__$1;
var build_id = cljs.core.get.call(null,map__24234__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__24234,map__24234__$1,opts,build_id){
return (function (p__24236){
var vec__24237 = p__24236;
var map__24238 = cljs.core.nth.call(null,vec__24237,(0),null);
var map__24238__$1 = ((((!((map__24238 == null)))?((((map__24238.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24238.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24238):map__24238);
var msg = map__24238__$1;
var msg_name = cljs.core.get.call(null,map__24238__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24237,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__24237,map__24238,map__24238__$1,msg,msg_name,_,map__24234,map__24234__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__24237,map__24238,map__24238__$1,msg,msg_name,_,map__24234,map__24234__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__24234,map__24234__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__24244){
var vec__24245 = p__24244;
var map__24246 = cljs.core.nth.call(null,vec__24245,(0),null);
var map__24246__$1 = ((((!((map__24246 == null)))?((((map__24246.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24246.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24246):map__24246);
var msg = map__24246__$1;
var msg_name = cljs.core.get.call(null,map__24246__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24245,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__24248){
var map__24258 = p__24248;
var map__24258__$1 = ((((!((map__24258 == null)))?((((map__24258.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24258.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24258):map__24258);
var on_compile_warning = cljs.core.get.call(null,map__24258__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__24258__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__24258,map__24258__$1,on_compile_warning,on_compile_fail){
return (function (p__24260){
var vec__24261 = p__24260;
var map__24262 = cljs.core.nth.call(null,vec__24261,(0),null);
var map__24262__$1 = ((((!((map__24262 == null)))?((((map__24262.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24262.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24262):map__24262);
var msg = map__24262__$1;
var msg_name = cljs.core.get.call(null,map__24262__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24261,(1));
var pred__24264 = cljs.core._EQ_;
var expr__24265 = msg_name;
if(cljs.core.truth_(pred__24264.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__24265))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__24264.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__24265))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__24258,map__24258__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19750__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19750__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19751__auto__ = (function (){var switch__19638__auto__ = ((function (c__19750__auto__,msg_hist,msg_names,msg){
return (function (state_24481){
var state_val_24482 = (state_24481[(1)]);
if((state_val_24482 === (7))){
var inst_24405 = (state_24481[(2)]);
var state_24481__$1 = state_24481;
if(cljs.core.truth_(inst_24405)){
var statearr_24483_24529 = state_24481__$1;
(statearr_24483_24529[(1)] = (8));

} else {
var statearr_24484_24530 = state_24481__$1;
(statearr_24484_24530[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24482 === (20))){
var inst_24475 = (state_24481[(2)]);
var state_24481__$1 = state_24481;
var statearr_24485_24531 = state_24481__$1;
(statearr_24485_24531[(2)] = inst_24475);

(statearr_24485_24531[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24482 === (27))){
var inst_24471 = (state_24481[(2)]);
var state_24481__$1 = state_24481;
var statearr_24486_24532 = state_24481__$1;
(statearr_24486_24532[(2)] = inst_24471);

(statearr_24486_24532[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24482 === (1))){
var inst_24398 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_24481__$1 = state_24481;
if(cljs.core.truth_(inst_24398)){
var statearr_24487_24533 = state_24481__$1;
(statearr_24487_24533[(1)] = (2));

} else {
var statearr_24488_24534 = state_24481__$1;
(statearr_24488_24534[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24482 === (24))){
var inst_24473 = (state_24481[(2)]);
var state_24481__$1 = state_24481;
var statearr_24489_24535 = state_24481__$1;
(statearr_24489_24535[(2)] = inst_24473);

(statearr_24489_24535[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24482 === (4))){
var inst_24479 = (state_24481[(2)]);
var state_24481__$1 = state_24481;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24481__$1,inst_24479);
} else {
if((state_val_24482 === (15))){
var inst_24477 = (state_24481[(2)]);
var state_24481__$1 = state_24481;
var statearr_24490_24536 = state_24481__$1;
(statearr_24490_24536[(2)] = inst_24477);

(statearr_24490_24536[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24482 === (21))){
var inst_24436 = (state_24481[(2)]);
var state_24481__$1 = state_24481;
var statearr_24491_24537 = state_24481__$1;
(statearr_24491_24537[(2)] = inst_24436);

(statearr_24491_24537[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24482 === (31))){
var inst_24460 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_24481__$1 = state_24481;
if(cljs.core.truth_(inst_24460)){
var statearr_24492_24538 = state_24481__$1;
(statearr_24492_24538[(1)] = (34));

} else {
var statearr_24493_24539 = state_24481__$1;
(statearr_24493_24539[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24482 === (32))){
var inst_24469 = (state_24481[(2)]);
var state_24481__$1 = state_24481;
var statearr_24494_24540 = state_24481__$1;
(statearr_24494_24540[(2)] = inst_24469);

(statearr_24494_24540[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24482 === (33))){
var inst_24458 = (state_24481[(2)]);
var state_24481__$1 = state_24481;
var statearr_24495_24541 = state_24481__$1;
(statearr_24495_24541[(2)] = inst_24458);

(statearr_24495_24541[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24482 === (13))){
var inst_24419 = figwheel.client.heads_up.clear.call(null);
var state_24481__$1 = state_24481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24481__$1,(16),inst_24419);
} else {
if((state_val_24482 === (22))){
var inst_24440 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24441 = figwheel.client.heads_up.append_message.call(null,inst_24440);
var state_24481__$1 = state_24481;
var statearr_24496_24542 = state_24481__$1;
(statearr_24496_24542[(2)] = inst_24441);

(statearr_24496_24542[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24482 === (36))){
var inst_24467 = (state_24481[(2)]);
var state_24481__$1 = state_24481;
var statearr_24497_24543 = state_24481__$1;
(statearr_24497_24543[(2)] = inst_24467);

(statearr_24497_24543[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24482 === (29))){
var inst_24451 = (state_24481[(2)]);
var state_24481__$1 = state_24481;
var statearr_24498_24544 = state_24481__$1;
(statearr_24498_24544[(2)] = inst_24451);

(statearr_24498_24544[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24482 === (6))){
var inst_24400 = (state_24481[(7)]);
var state_24481__$1 = state_24481;
var statearr_24499_24545 = state_24481__$1;
(statearr_24499_24545[(2)] = inst_24400);

(statearr_24499_24545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24482 === (28))){
var inst_24447 = (state_24481[(2)]);
var inst_24448 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24449 = figwheel.client.heads_up.display_warning.call(null,inst_24448);
var state_24481__$1 = (function (){var statearr_24500 = state_24481;
(statearr_24500[(8)] = inst_24447);

return statearr_24500;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24481__$1,(29),inst_24449);
} else {
if((state_val_24482 === (25))){
var inst_24445 = figwheel.client.heads_up.clear.call(null);
var state_24481__$1 = state_24481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24481__$1,(28),inst_24445);
} else {
if((state_val_24482 === (34))){
var inst_24462 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24481__$1 = state_24481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24481__$1,(37),inst_24462);
} else {
if((state_val_24482 === (17))){
var inst_24427 = (state_24481[(2)]);
var state_24481__$1 = state_24481;
var statearr_24501_24546 = state_24481__$1;
(statearr_24501_24546[(2)] = inst_24427);

(statearr_24501_24546[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24482 === (3))){
var inst_24417 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_24481__$1 = state_24481;
if(cljs.core.truth_(inst_24417)){
var statearr_24502_24547 = state_24481__$1;
(statearr_24502_24547[(1)] = (13));

} else {
var statearr_24503_24548 = state_24481__$1;
(statearr_24503_24548[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24482 === (12))){
var inst_24413 = (state_24481[(2)]);
var state_24481__$1 = state_24481;
var statearr_24504_24549 = state_24481__$1;
(statearr_24504_24549[(2)] = inst_24413);

(statearr_24504_24549[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24482 === (2))){
var inst_24400 = (state_24481[(7)]);
var inst_24400__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_24481__$1 = (function (){var statearr_24505 = state_24481;
(statearr_24505[(7)] = inst_24400__$1);

return statearr_24505;
})();
if(cljs.core.truth_(inst_24400__$1)){
var statearr_24506_24550 = state_24481__$1;
(statearr_24506_24550[(1)] = (5));

} else {
var statearr_24507_24551 = state_24481__$1;
(statearr_24507_24551[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24482 === (23))){
var inst_24443 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_24481__$1 = state_24481;
if(cljs.core.truth_(inst_24443)){
var statearr_24508_24552 = state_24481__$1;
(statearr_24508_24552[(1)] = (25));

} else {
var statearr_24509_24553 = state_24481__$1;
(statearr_24509_24553[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24482 === (35))){
var state_24481__$1 = state_24481;
var statearr_24510_24554 = state_24481__$1;
(statearr_24510_24554[(2)] = null);

(statearr_24510_24554[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24482 === (19))){
var inst_24438 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_24481__$1 = state_24481;
if(cljs.core.truth_(inst_24438)){
var statearr_24511_24555 = state_24481__$1;
(statearr_24511_24555[(1)] = (22));

} else {
var statearr_24512_24556 = state_24481__$1;
(statearr_24512_24556[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24482 === (11))){
var inst_24409 = (state_24481[(2)]);
var state_24481__$1 = state_24481;
var statearr_24513_24557 = state_24481__$1;
(statearr_24513_24557[(2)] = inst_24409);

(statearr_24513_24557[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24482 === (9))){
var inst_24411 = figwheel.client.heads_up.clear.call(null);
var state_24481__$1 = state_24481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24481__$1,(12),inst_24411);
} else {
if((state_val_24482 === (5))){
var inst_24402 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_24481__$1 = state_24481;
var statearr_24514_24558 = state_24481__$1;
(statearr_24514_24558[(2)] = inst_24402);

(statearr_24514_24558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24482 === (14))){
var inst_24429 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_24481__$1 = state_24481;
if(cljs.core.truth_(inst_24429)){
var statearr_24515_24559 = state_24481__$1;
(statearr_24515_24559[(1)] = (18));

} else {
var statearr_24516_24560 = state_24481__$1;
(statearr_24516_24560[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24482 === (26))){
var inst_24453 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_24481__$1 = state_24481;
if(cljs.core.truth_(inst_24453)){
var statearr_24517_24561 = state_24481__$1;
(statearr_24517_24561[(1)] = (30));

} else {
var statearr_24518_24562 = state_24481__$1;
(statearr_24518_24562[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24482 === (16))){
var inst_24421 = (state_24481[(2)]);
var inst_24422 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24423 = figwheel.client.format_messages.call(null,inst_24422);
var inst_24424 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24425 = figwheel.client.heads_up.display_error.call(null,inst_24423,inst_24424);
var state_24481__$1 = (function (){var statearr_24519 = state_24481;
(statearr_24519[(9)] = inst_24421);

return statearr_24519;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24481__$1,(17),inst_24425);
} else {
if((state_val_24482 === (30))){
var inst_24455 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24456 = figwheel.client.heads_up.display_warning.call(null,inst_24455);
var state_24481__$1 = state_24481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24481__$1,(33),inst_24456);
} else {
if((state_val_24482 === (10))){
var inst_24415 = (state_24481[(2)]);
var state_24481__$1 = state_24481;
var statearr_24520_24563 = state_24481__$1;
(statearr_24520_24563[(2)] = inst_24415);

(statearr_24520_24563[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24482 === (18))){
var inst_24431 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24432 = figwheel.client.format_messages.call(null,inst_24431);
var inst_24433 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24434 = figwheel.client.heads_up.display_error.call(null,inst_24432,inst_24433);
var state_24481__$1 = state_24481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24481__$1,(21),inst_24434);
} else {
if((state_val_24482 === (37))){
var inst_24464 = (state_24481[(2)]);
var state_24481__$1 = state_24481;
var statearr_24521_24564 = state_24481__$1;
(statearr_24521_24564[(2)] = inst_24464);

(statearr_24521_24564[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24482 === (8))){
var inst_24407 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24481__$1 = state_24481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24481__$1,(11),inst_24407);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19750__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19638__auto__,c__19750__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19639__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19639__auto____0 = (function (){
var statearr_24525 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24525[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19639__auto__);

(statearr_24525[(1)] = (1));

return statearr_24525;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19639__auto____1 = (function (state_24481){
while(true){
var ret_value__19640__auto__ = (function (){try{while(true){
var result__19641__auto__ = switch__19638__auto__.call(null,state_24481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19641__auto__;
}
break;
}
}catch (e24526){if((e24526 instanceof Object)){
var ex__19642__auto__ = e24526;
var statearr_24527_24565 = state_24481;
(statearr_24527_24565[(5)] = ex__19642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24566 = state_24481;
state_24481 = G__24566;
continue;
} else {
return ret_value__19640__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19639__auto__ = function(state_24481){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19639__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19639__auto____1.call(this,state_24481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19639__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19639__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19639__auto__;
})()
;})(switch__19638__auto__,c__19750__auto__,msg_hist,msg_names,msg))
})();
var state__19752__auto__ = (function (){var statearr_24528 = f__19751__auto__.call(null);
(statearr_24528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19750__auto__);

return statearr_24528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19752__auto__);
});})(c__19750__auto__,msg_hist,msg_names,msg))
);

return c__19750__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19750__auto___24629 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19750__auto___24629,ch){
return (function (){
var f__19751__auto__ = (function (){var switch__19638__auto__ = ((function (c__19750__auto___24629,ch){
return (function (state_24612){
var state_val_24613 = (state_24612[(1)]);
if((state_val_24613 === (1))){
var state_24612__$1 = state_24612;
var statearr_24614_24630 = state_24612__$1;
(statearr_24614_24630[(2)] = null);

(statearr_24614_24630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (2))){
var state_24612__$1 = state_24612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24612__$1,(4),ch);
} else {
if((state_val_24613 === (3))){
var inst_24610 = (state_24612[(2)]);
var state_24612__$1 = state_24612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24612__$1,inst_24610);
} else {
if((state_val_24613 === (4))){
var inst_24600 = (state_24612[(7)]);
var inst_24600__$1 = (state_24612[(2)]);
var state_24612__$1 = (function (){var statearr_24615 = state_24612;
(statearr_24615[(7)] = inst_24600__$1);

return statearr_24615;
})();
if(cljs.core.truth_(inst_24600__$1)){
var statearr_24616_24631 = state_24612__$1;
(statearr_24616_24631[(1)] = (5));

} else {
var statearr_24617_24632 = state_24612__$1;
(statearr_24617_24632[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (5))){
var inst_24600 = (state_24612[(7)]);
var inst_24602 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_24600);
var state_24612__$1 = state_24612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24612__$1,(8),inst_24602);
} else {
if((state_val_24613 === (6))){
var state_24612__$1 = state_24612;
var statearr_24618_24633 = state_24612__$1;
(statearr_24618_24633[(2)] = null);

(statearr_24618_24633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (7))){
var inst_24608 = (state_24612[(2)]);
var state_24612__$1 = state_24612;
var statearr_24619_24634 = state_24612__$1;
(statearr_24619_24634[(2)] = inst_24608);

(statearr_24619_24634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (8))){
var inst_24604 = (state_24612[(2)]);
var state_24612__$1 = (function (){var statearr_24620 = state_24612;
(statearr_24620[(8)] = inst_24604);

return statearr_24620;
})();
var statearr_24621_24635 = state_24612__$1;
(statearr_24621_24635[(2)] = null);

(statearr_24621_24635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__19750__auto___24629,ch))
;
return ((function (switch__19638__auto__,c__19750__auto___24629,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19639__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19639__auto____0 = (function (){
var statearr_24625 = [null,null,null,null,null,null,null,null,null];
(statearr_24625[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19639__auto__);

(statearr_24625[(1)] = (1));

return statearr_24625;
});
var figwheel$client$heads_up_plugin_$_state_machine__19639__auto____1 = (function (state_24612){
while(true){
var ret_value__19640__auto__ = (function (){try{while(true){
var result__19641__auto__ = switch__19638__auto__.call(null,state_24612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19641__auto__;
}
break;
}
}catch (e24626){if((e24626 instanceof Object)){
var ex__19642__auto__ = e24626;
var statearr_24627_24636 = state_24612;
(statearr_24627_24636[(5)] = ex__19642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24637 = state_24612;
state_24612 = G__24637;
continue;
} else {
return ret_value__19640__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19639__auto__ = function(state_24612){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19639__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19639__auto____1.call(this,state_24612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19639__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19639__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19639__auto__;
})()
;})(switch__19638__auto__,c__19750__auto___24629,ch))
})();
var state__19752__auto__ = (function (){var statearr_24628 = f__19751__auto__.call(null);
(statearr_24628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19750__auto___24629);

return statearr_24628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19752__auto__);
});})(c__19750__auto___24629,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19750__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19750__auto__){
return (function (){
var f__19751__auto__ = (function (){var switch__19638__auto__ = ((function (c__19750__auto__){
return (function (state_24658){
var state_val_24659 = (state_24658[(1)]);
if((state_val_24659 === (1))){
var inst_24653 = cljs.core.async.timeout.call(null,(3000));
var state_24658__$1 = state_24658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24658__$1,(2),inst_24653);
} else {
if((state_val_24659 === (2))){
var inst_24655 = (state_24658[(2)]);
var inst_24656 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_24658__$1 = (function (){var statearr_24660 = state_24658;
(statearr_24660[(7)] = inst_24655);

return statearr_24660;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24658__$1,inst_24656);
} else {
return null;
}
}
});})(c__19750__auto__))
;
return ((function (switch__19638__auto__,c__19750__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19639__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19639__auto____0 = (function (){
var statearr_24664 = [null,null,null,null,null,null,null,null];
(statearr_24664[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19639__auto__);

(statearr_24664[(1)] = (1));

return statearr_24664;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19639__auto____1 = (function (state_24658){
while(true){
var ret_value__19640__auto__ = (function (){try{while(true){
var result__19641__auto__ = switch__19638__auto__.call(null,state_24658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19641__auto__;
}
break;
}
}catch (e24665){if((e24665 instanceof Object)){
var ex__19642__auto__ = e24665;
var statearr_24666_24668 = state_24658;
(statearr_24666_24668[(5)] = ex__19642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24665;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24669 = state_24658;
state_24658 = G__24669;
continue;
} else {
return ret_value__19640__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19639__auto__ = function(state_24658){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19639__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19639__auto____1.call(this,state_24658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19639__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19639__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19639__auto__;
})()
;})(switch__19638__auto__,c__19750__auto__))
})();
var state__19752__auto__ = (function (){var statearr_24667 = f__19751__auto__.call(null);
(statearr_24667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19750__auto__);

return statearr_24667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19752__auto__);
});})(c__19750__auto__))
);

return c__19750__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__24670){
var map__24677 = p__24670;
var map__24677__$1 = ((((!((map__24677 == null)))?((((map__24677.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24677.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24677):map__24677);
var ed = map__24677__$1;
var formatted_exception = cljs.core.get.call(null,map__24677__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__24677__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__24677__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__24679_24683 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24680_24684 = null;
var count__24681_24685 = (0);
var i__24682_24686 = (0);
while(true){
if((i__24682_24686 < count__24681_24685)){
var msg_24687 = cljs.core._nth.call(null,chunk__24680_24684,i__24682_24686);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24687);

var G__24688 = seq__24679_24683;
var G__24689 = chunk__24680_24684;
var G__24690 = count__24681_24685;
var G__24691 = (i__24682_24686 + (1));
seq__24679_24683 = G__24688;
chunk__24680_24684 = G__24689;
count__24681_24685 = G__24690;
i__24682_24686 = G__24691;
continue;
} else {
var temp__4425__auto___24692 = cljs.core.seq.call(null,seq__24679_24683);
if(temp__4425__auto___24692){
var seq__24679_24693__$1 = temp__4425__auto___24692;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24679_24693__$1)){
var c__17629__auto___24694 = cljs.core.chunk_first.call(null,seq__24679_24693__$1);
var G__24695 = cljs.core.chunk_rest.call(null,seq__24679_24693__$1);
var G__24696 = c__17629__auto___24694;
var G__24697 = cljs.core.count.call(null,c__17629__auto___24694);
var G__24698 = (0);
seq__24679_24683 = G__24695;
chunk__24680_24684 = G__24696;
count__24681_24685 = G__24697;
i__24682_24686 = G__24698;
continue;
} else {
var msg_24699 = cljs.core.first.call(null,seq__24679_24693__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24699);

var G__24700 = cljs.core.next.call(null,seq__24679_24693__$1);
var G__24701 = null;
var G__24702 = (0);
var G__24703 = (0);
seq__24679_24683 = G__24700;
chunk__24680_24684 = G__24701;
count__24681_24685 = G__24702;
i__24682_24686 = G__24703;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__24704){
var map__24707 = p__24704;
var map__24707__$1 = ((((!((map__24707 == null)))?((((map__24707.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24707.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24707):map__24707);
var w = map__24707__$1;
var message = cljs.core.get.call(null,map__24707__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16814__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16814__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16814__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__24715 = cljs.core.seq.call(null,plugins);
var chunk__24716 = null;
var count__24717 = (0);
var i__24718 = (0);
while(true){
if((i__24718 < count__24717)){
var vec__24719 = cljs.core._nth.call(null,chunk__24716,i__24718);
var k = cljs.core.nth.call(null,vec__24719,(0),null);
var plugin = cljs.core.nth.call(null,vec__24719,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24721 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24715,chunk__24716,count__24717,i__24718,pl_24721,vec__24719,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24721.call(null,msg_hist);
});})(seq__24715,chunk__24716,count__24717,i__24718,pl_24721,vec__24719,k,plugin))
);
} else {
}

var G__24722 = seq__24715;
var G__24723 = chunk__24716;
var G__24724 = count__24717;
var G__24725 = (i__24718 + (1));
seq__24715 = G__24722;
chunk__24716 = G__24723;
count__24717 = G__24724;
i__24718 = G__24725;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24715);
if(temp__4425__auto__){
var seq__24715__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24715__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__24715__$1);
var G__24726 = cljs.core.chunk_rest.call(null,seq__24715__$1);
var G__24727 = c__17629__auto__;
var G__24728 = cljs.core.count.call(null,c__17629__auto__);
var G__24729 = (0);
seq__24715 = G__24726;
chunk__24716 = G__24727;
count__24717 = G__24728;
i__24718 = G__24729;
continue;
} else {
var vec__24720 = cljs.core.first.call(null,seq__24715__$1);
var k = cljs.core.nth.call(null,vec__24720,(0),null);
var plugin = cljs.core.nth.call(null,vec__24720,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24730 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24715,chunk__24716,count__24717,i__24718,pl_24730,vec__24720,k,plugin,seq__24715__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24730.call(null,msg_hist);
});})(seq__24715,chunk__24716,count__24717,i__24718,pl_24730,vec__24720,k,plugin,seq__24715__$1,temp__4425__auto__))
);
} else {
}

var G__24731 = cljs.core.next.call(null,seq__24715__$1);
var G__24732 = null;
var G__24733 = (0);
var G__24734 = (0);
seq__24715 = G__24731;
chunk__24716 = G__24732;
count__24717 = G__24733;
i__24718 = G__24734;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args24735 = [];
var len__17884__auto___24738 = arguments.length;
var i__17885__auto___24739 = (0);
while(true){
if((i__17885__auto___24739 < len__17884__auto___24738)){
args24735.push((arguments[i__17885__auto___24739]));

var G__24740 = (i__17885__auto___24739 + (1));
i__17885__auto___24739 = G__24740;
continue;
} else {
}
break;
}

var G__24737 = args24735.length;
switch (G__24737) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24735.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17891__auto__ = [];
var len__17884__auto___24746 = arguments.length;
var i__17885__auto___24747 = (0);
while(true){
if((i__17885__auto___24747 < len__17884__auto___24746)){
args__17891__auto__.push((arguments[i__17885__auto___24747]));

var G__24748 = (i__17885__auto___24747 + (1));
i__17885__auto___24747 = G__24748;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((0) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17892__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__24743){
var map__24744 = p__24743;
var map__24744__$1 = ((((!((map__24744 == null)))?((((map__24744.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24744.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24744):map__24744);
var opts = map__24744__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq24742){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24742));
});

//# sourceMappingURL=client.js.map