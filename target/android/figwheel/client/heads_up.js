// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__17891__auto__ = [];
var len__17884__auto___23792 = arguments.length;
var i__17885__auto___23793 = (0);
while(true){
if((i__17885__auto___23793 < len__17884__auto___23792)){
args__17891__auto__.push((arguments[i__17885__auto___23793]));

var G__23794 = (i__17885__auto___23793 + (1));
i__17885__auto___23793 = G__23794;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((2) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17892__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__23784_23795 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__23785_23796 = null;
var count__23786_23797 = (0);
var i__23787_23798 = (0);
while(true){
if((i__23787_23798 < count__23786_23797)){
var k_23799 = cljs.core._nth.call(null,chunk__23785_23796,i__23787_23798);
e.setAttribute(cljs.core.name.call(null,k_23799),cljs.core.get.call(null,attrs,k_23799));

var G__23800 = seq__23784_23795;
var G__23801 = chunk__23785_23796;
var G__23802 = count__23786_23797;
var G__23803 = (i__23787_23798 + (1));
seq__23784_23795 = G__23800;
chunk__23785_23796 = G__23801;
count__23786_23797 = G__23802;
i__23787_23798 = G__23803;
continue;
} else {
var temp__4425__auto___23804 = cljs.core.seq.call(null,seq__23784_23795);
if(temp__4425__auto___23804){
var seq__23784_23805__$1 = temp__4425__auto___23804;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23784_23805__$1)){
var c__17629__auto___23806 = cljs.core.chunk_first.call(null,seq__23784_23805__$1);
var G__23807 = cljs.core.chunk_rest.call(null,seq__23784_23805__$1);
var G__23808 = c__17629__auto___23806;
var G__23809 = cljs.core.count.call(null,c__17629__auto___23806);
var G__23810 = (0);
seq__23784_23795 = G__23807;
chunk__23785_23796 = G__23808;
count__23786_23797 = G__23809;
i__23787_23798 = G__23810;
continue;
} else {
var k_23811 = cljs.core.first.call(null,seq__23784_23805__$1);
e.setAttribute(cljs.core.name.call(null,k_23811),cljs.core.get.call(null,attrs,k_23811));

var G__23812 = cljs.core.next.call(null,seq__23784_23805__$1);
var G__23813 = null;
var G__23814 = (0);
var G__23815 = (0);
seq__23784_23795 = G__23812;
chunk__23785_23796 = G__23813;
count__23786_23797 = G__23814;
i__23787_23798 = G__23815;
continue;
}
} else {
}
}
break;
}

var seq__23788_23816 = cljs.core.seq.call(null,children);
var chunk__23789_23817 = null;
var count__23790_23818 = (0);
var i__23791_23819 = (0);
while(true){
if((i__23791_23819 < count__23790_23818)){
var ch_23820 = cljs.core._nth.call(null,chunk__23789_23817,i__23791_23819);
e.appendChild(ch_23820);

var G__23821 = seq__23788_23816;
var G__23822 = chunk__23789_23817;
var G__23823 = count__23790_23818;
var G__23824 = (i__23791_23819 + (1));
seq__23788_23816 = G__23821;
chunk__23789_23817 = G__23822;
count__23790_23818 = G__23823;
i__23791_23819 = G__23824;
continue;
} else {
var temp__4425__auto___23825 = cljs.core.seq.call(null,seq__23788_23816);
if(temp__4425__auto___23825){
var seq__23788_23826__$1 = temp__4425__auto___23825;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23788_23826__$1)){
var c__17629__auto___23827 = cljs.core.chunk_first.call(null,seq__23788_23826__$1);
var G__23828 = cljs.core.chunk_rest.call(null,seq__23788_23826__$1);
var G__23829 = c__17629__auto___23827;
var G__23830 = cljs.core.count.call(null,c__17629__auto___23827);
var G__23831 = (0);
seq__23788_23816 = G__23828;
chunk__23789_23817 = G__23829;
count__23790_23818 = G__23830;
i__23791_23819 = G__23831;
continue;
} else {
var ch_23832 = cljs.core.first.call(null,seq__23788_23826__$1);
e.appendChild(ch_23832);

var G__23833 = cljs.core.next.call(null,seq__23788_23826__$1);
var G__23834 = null;
var G__23835 = (0);
var G__23836 = (0);
seq__23788_23816 = G__23833;
chunk__23789_23817 = G__23834;
count__23790_23818 = G__23835;
i__23791_23819 = G__23836;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq23781){
var G__23782 = cljs.core.first.call(null,seq23781);
var seq23781__$1 = cljs.core.next.call(null,seq23781);
var G__23783 = cljs.core.first.call(null,seq23781__$1);
var seq23781__$2 = cljs.core.next.call(null,seq23781__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__23782,G__23783,seq23781__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17739__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17740__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17741__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17742__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17743__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17739__auto__,prefer_table__17740__auto__,method_cache__17741__auto__,cached_hierarchy__17742__auto__,hierarchy__17743__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17739__auto__,prefer_table__17740__auto__,method_cache__17741__auto__,cached_hierarchy__17742__auto__,hierarchy__17743__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17743__auto__,method_table__17739__auto__,prefer_table__17740__auto__,method_cache__17741__auto__,cached_hierarchy__17742__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_23837 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_23837.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_23837.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_23837.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_23837);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__23838,st_map){
var map__23843 = p__23838;
var map__23843__$1 = ((((!((map__23843 == null)))?((((map__23843.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23843.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23843):map__23843);
var container_el = cljs.core.get.call(null,map__23843__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__23843,map__23843__$1,container_el){
return (function (p__23845){
var vec__23846 = p__23845;
var k = cljs.core.nth.call(null,vec__23846,(0),null);
var v = cljs.core.nth.call(null,vec__23846,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__23843,map__23843__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__23847,dom_str){
var map__23850 = p__23847;
var map__23850__$1 = ((((!((map__23850 == null)))?((((map__23850.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23850.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23850):map__23850);
var c = map__23850__$1;
var content_area_el = cljs.core.get.call(null,map__23850__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__23852){
var map__23855 = p__23852;
var map__23855__$1 = ((((!((map__23855 == null)))?((((map__23855.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23855.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23855):map__23855);
var content_area_el = cljs.core.get.call(null,map__23855__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__19750__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19750__auto__){
return (function (){
var f__19751__auto__ = (function (){var switch__19638__auto__ = ((function (c__19750__auto__){
return (function (state_23898){
var state_val_23899 = (state_23898[(1)]);
if((state_val_23899 === (1))){
var inst_23883 = (state_23898[(7)]);
var inst_23883__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_23884 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_23885 = ["10px","10px","100%","68px","1.0"];
var inst_23886 = cljs.core.PersistentHashMap.fromArrays(inst_23884,inst_23885);
var inst_23887 = cljs.core.merge.call(null,inst_23886,style);
var inst_23888 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_23883__$1,inst_23887);
var inst_23889 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_23883__$1,msg);
var inst_23890 = cljs.core.async.timeout.call(null,(300));
var state_23898__$1 = (function (){var statearr_23900 = state_23898;
(statearr_23900[(8)] = inst_23889);

(statearr_23900[(9)] = inst_23888);

(statearr_23900[(7)] = inst_23883__$1);

return statearr_23900;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23898__$1,(2),inst_23890);
} else {
if((state_val_23899 === (2))){
var inst_23883 = (state_23898[(7)]);
var inst_23892 = (state_23898[(2)]);
var inst_23893 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_23894 = ["auto"];
var inst_23895 = cljs.core.PersistentHashMap.fromArrays(inst_23893,inst_23894);
var inst_23896 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_23883,inst_23895);
var state_23898__$1 = (function (){var statearr_23901 = state_23898;
(statearr_23901[(10)] = inst_23892);

return statearr_23901;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23898__$1,inst_23896);
} else {
return null;
}
}
});})(c__19750__auto__))
;
return ((function (switch__19638__auto__,c__19750__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__19639__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__19639__auto____0 = (function (){
var statearr_23905 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23905[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__19639__auto__);

(statearr_23905[(1)] = (1));

return statearr_23905;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__19639__auto____1 = (function (state_23898){
while(true){
var ret_value__19640__auto__ = (function (){try{while(true){
var result__19641__auto__ = switch__19638__auto__.call(null,state_23898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19641__auto__;
}
break;
}
}catch (e23906){if((e23906 instanceof Object)){
var ex__19642__auto__ = e23906;
var statearr_23907_23909 = state_23898;
(statearr_23907_23909[(5)] = ex__19642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23910 = state_23898;
state_23898 = G__23910;
continue;
} else {
return ret_value__19640__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__19639__auto__ = function(state_23898){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19639__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19639__auto____1.call(this,state_23898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__19639__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__19639__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__19639__auto__;
})()
;})(switch__19638__auto__,c__19750__auto__))
})();
var state__19752__auto__ = (function (){var statearr_23908 = f__19751__auto__.call(null);
(statearr_23908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19750__auto__);

return statearr_23908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19752__auto__);
});})(c__19750__auto__))
);

return c__19750__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__23912 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__23912,(0),null);
var ln = cljs.core.nth.call(null,vec__23912,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__23915 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__23915,(0),null);
var file_line = cljs.core.nth.call(null,vec__23915,(1),null);
var file_column = cljs.core.nth.call(null,vec__23915,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__23915,file_name,file_line,file_column){
return (function (p1__23913_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__23913_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__23915,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16826__auto__ = file_line;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
var and__16814__auto__ = cause;
if(cljs.core.truth_(and__16814__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16814__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__23918 = figwheel.client.heads_up.ensure_container.call(null);
var map__23918__$1 = ((((!((map__23918 == null)))?((((map__23918.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23918.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23918):map__23918);
var content_area_el = cljs.core.get.call(null,map__23918__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__19750__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19750__auto__){
return (function (){
var f__19751__auto__ = (function (){var switch__19638__auto__ = ((function (c__19750__auto__){
return (function (state_23966){
var state_val_23967 = (state_23966[(1)]);
if((state_val_23967 === (1))){
var inst_23949 = (state_23966[(7)]);
var inst_23949__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_23950 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_23951 = ["0.0"];
var inst_23952 = cljs.core.PersistentHashMap.fromArrays(inst_23950,inst_23951);
var inst_23953 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_23949__$1,inst_23952);
var inst_23954 = cljs.core.async.timeout.call(null,(300));
var state_23966__$1 = (function (){var statearr_23968 = state_23966;
(statearr_23968[(7)] = inst_23949__$1);

(statearr_23968[(8)] = inst_23953);

return statearr_23968;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23966__$1,(2),inst_23954);
} else {
if((state_val_23967 === (2))){
var inst_23949 = (state_23966[(7)]);
var inst_23956 = (state_23966[(2)]);
var inst_23957 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_23958 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_23959 = cljs.core.PersistentHashMap.fromArrays(inst_23957,inst_23958);
var inst_23960 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_23949,inst_23959);
var inst_23961 = cljs.core.async.timeout.call(null,(200));
var state_23966__$1 = (function (){var statearr_23969 = state_23966;
(statearr_23969[(9)] = inst_23956);

(statearr_23969[(10)] = inst_23960);

return statearr_23969;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23966__$1,(3),inst_23961);
} else {
if((state_val_23967 === (3))){
var inst_23949 = (state_23966[(7)]);
var inst_23963 = (state_23966[(2)]);
var inst_23964 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_23949,"");
var state_23966__$1 = (function (){var statearr_23970 = state_23966;
(statearr_23970[(11)] = inst_23963);

return statearr_23970;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23966__$1,inst_23964);
} else {
return null;
}
}
}
});})(c__19750__auto__))
;
return ((function (switch__19638__auto__,c__19750__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__19639__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__19639__auto____0 = (function (){
var statearr_23974 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23974[(0)] = figwheel$client$heads_up$clear_$_state_machine__19639__auto__);

(statearr_23974[(1)] = (1));

return statearr_23974;
});
var figwheel$client$heads_up$clear_$_state_machine__19639__auto____1 = (function (state_23966){
while(true){
var ret_value__19640__auto__ = (function (){try{while(true){
var result__19641__auto__ = switch__19638__auto__.call(null,state_23966);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19641__auto__;
}
break;
}
}catch (e23975){if((e23975 instanceof Object)){
var ex__19642__auto__ = e23975;
var statearr_23976_23978 = state_23966;
(statearr_23976_23978[(5)] = ex__19642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23966);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23979 = state_23966;
state_23966 = G__23979;
continue;
} else {
return ret_value__19640__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__19639__auto__ = function(state_23966){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__19639__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__19639__auto____1.call(this,state_23966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__19639__auto____0;
figwheel$client$heads_up$clear_$_state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__19639__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__19639__auto__;
})()
;})(switch__19638__auto__,c__19750__auto__))
})();
var state__19752__auto__ = (function (){var statearr_23977 = f__19751__auto__.call(null);
(statearr_23977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19750__auto__);

return statearr_23977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19752__auto__);
});})(c__19750__auto__))
);

return c__19750__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__19750__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19750__auto__){
return (function (){
var f__19751__auto__ = (function (){var switch__19638__auto__ = ((function (c__19750__auto__){
return (function (state_24011){
var state_val_24012 = (state_24011[(1)]);
if((state_val_24012 === (1))){
var inst_24001 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_24011__$1 = state_24011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24011__$1,(2),inst_24001);
} else {
if((state_val_24012 === (2))){
var inst_24003 = (state_24011[(2)]);
var inst_24004 = cljs.core.async.timeout.call(null,(400));
var state_24011__$1 = (function (){var statearr_24013 = state_24011;
(statearr_24013[(7)] = inst_24003);

return statearr_24013;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24011__$1,(3),inst_24004);
} else {
if((state_val_24012 === (3))){
var inst_24006 = (state_24011[(2)]);
var inst_24007 = figwheel.client.heads_up.clear.call(null);
var state_24011__$1 = (function (){var statearr_24014 = state_24011;
(statearr_24014[(8)] = inst_24006);

return statearr_24014;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24011__$1,(4),inst_24007);
} else {
if((state_val_24012 === (4))){
var inst_24009 = (state_24011[(2)]);
var state_24011__$1 = state_24011;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24011__$1,inst_24009);
} else {
return null;
}
}
}
}
});})(c__19750__auto__))
;
return ((function (switch__19638__auto__,c__19750__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__19639__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__19639__auto____0 = (function (){
var statearr_24018 = [null,null,null,null,null,null,null,null,null];
(statearr_24018[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__19639__auto__);

(statearr_24018[(1)] = (1));

return statearr_24018;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__19639__auto____1 = (function (state_24011){
while(true){
var ret_value__19640__auto__ = (function (){try{while(true){
var result__19641__auto__ = switch__19638__auto__.call(null,state_24011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19641__auto__;
}
break;
}
}catch (e24019){if((e24019 instanceof Object)){
var ex__19642__auto__ = e24019;
var statearr_24020_24022 = state_24011;
(statearr_24020_24022[(5)] = ex__19642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24023 = state_24011;
state_24011 = G__24023;
continue;
} else {
return ret_value__19640__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__19639__auto__ = function(state_24011){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19639__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19639__auto____1.call(this,state_24011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__19639__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__19639__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__19639__auto__;
})()
;})(switch__19638__auto__,c__19750__auto__))
})();
var state__19752__auto__ = (function (){var statearr_24021 = f__19751__auto__.call(null);
(statearr_24021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19750__auto__);

return statearr_24021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19752__auto__);
});})(c__19750__auto__))
);

return c__19750__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map