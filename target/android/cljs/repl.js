// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23607_23621 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23608_23622 = null;
var count__23609_23623 = (0);
var i__23610_23624 = (0);
while(true){
if((i__23610_23624 < count__23609_23623)){
var f_23625 = cljs.core._nth.call(null,chunk__23608_23622,i__23610_23624);
cljs.core.println.call(null,"  ",f_23625);

var G__23626 = seq__23607_23621;
var G__23627 = chunk__23608_23622;
var G__23628 = count__23609_23623;
var G__23629 = (i__23610_23624 + (1));
seq__23607_23621 = G__23626;
chunk__23608_23622 = G__23627;
count__23609_23623 = G__23628;
i__23610_23624 = G__23629;
continue;
} else {
var temp__4425__auto___23630 = cljs.core.seq.call(null,seq__23607_23621);
if(temp__4425__auto___23630){
var seq__23607_23631__$1 = temp__4425__auto___23630;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23607_23631__$1)){
var c__17629__auto___23632 = cljs.core.chunk_first.call(null,seq__23607_23631__$1);
var G__23633 = cljs.core.chunk_rest.call(null,seq__23607_23631__$1);
var G__23634 = c__17629__auto___23632;
var G__23635 = cljs.core.count.call(null,c__17629__auto___23632);
var G__23636 = (0);
seq__23607_23621 = G__23633;
chunk__23608_23622 = G__23634;
count__23609_23623 = G__23635;
i__23610_23624 = G__23636;
continue;
} else {
var f_23637 = cljs.core.first.call(null,seq__23607_23631__$1);
cljs.core.println.call(null,"  ",f_23637);

var G__23638 = cljs.core.next.call(null,seq__23607_23631__$1);
var G__23639 = null;
var G__23640 = (0);
var G__23641 = (0);
seq__23607_23621 = G__23638;
chunk__23608_23622 = G__23639;
count__23609_23623 = G__23640;
i__23610_23624 = G__23641;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23642 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16826__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_23642);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_23642)))?cljs.core.second.call(null,arglists_23642):arglists_23642));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23611 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23612 = null;
var count__23613 = (0);
var i__23614 = (0);
while(true){
if((i__23614 < count__23613)){
var vec__23615 = cljs.core._nth.call(null,chunk__23612,i__23614);
var name = cljs.core.nth.call(null,vec__23615,(0),null);
var map__23616 = cljs.core.nth.call(null,vec__23615,(1),null);
var map__23616__$1 = ((((!((map__23616 == null)))?((((map__23616.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23616.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23616):map__23616);
var doc = cljs.core.get.call(null,map__23616__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23616__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23643 = seq__23611;
var G__23644 = chunk__23612;
var G__23645 = count__23613;
var G__23646 = (i__23614 + (1));
seq__23611 = G__23643;
chunk__23612 = G__23644;
count__23613 = G__23645;
i__23614 = G__23646;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23611);
if(temp__4425__auto__){
var seq__23611__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23611__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__23611__$1);
var G__23647 = cljs.core.chunk_rest.call(null,seq__23611__$1);
var G__23648 = c__17629__auto__;
var G__23649 = cljs.core.count.call(null,c__17629__auto__);
var G__23650 = (0);
seq__23611 = G__23647;
chunk__23612 = G__23648;
count__23613 = G__23649;
i__23614 = G__23650;
continue;
} else {
var vec__23618 = cljs.core.first.call(null,seq__23611__$1);
var name = cljs.core.nth.call(null,vec__23618,(0),null);
var map__23619 = cljs.core.nth.call(null,vec__23618,(1),null);
var map__23619__$1 = ((((!((map__23619 == null)))?((((map__23619.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23619.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23619):map__23619);
var doc = cljs.core.get.call(null,map__23619__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23619__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23651 = cljs.core.next.call(null,seq__23611__$1);
var G__23652 = null;
var G__23653 = (0);
var G__23654 = (0);
seq__23611 = G__23651;
chunk__23612 = G__23652;
count__23613 = G__23653;
i__23614 = G__23654;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map