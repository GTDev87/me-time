// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16826__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16826__auto__){
return or__16826__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16826__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__22583_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__22583_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__22588 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__22589 = null;
var count__22590 = (0);
var i__22591 = (0);
while(true){
if((i__22591 < count__22590)){
var n = cljs.core._nth.call(null,chunk__22589,i__22591);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22592 = seq__22588;
var G__22593 = chunk__22589;
var G__22594 = count__22590;
var G__22595 = (i__22591 + (1));
seq__22588 = G__22592;
chunk__22589 = G__22593;
count__22590 = G__22594;
i__22591 = G__22595;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22588);
if(temp__4425__auto__){
var seq__22588__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22588__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__22588__$1);
var G__22596 = cljs.core.chunk_rest.call(null,seq__22588__$1);
var G__22597 = c__17629__auto__;
var G__22598 = cljs.core.count.call(null,c__17629__auto__);
var G__22599 = (0);
seq__22588 = G__22596;
chunk__22589 = G__22597;
count__22590 = G__22598;
i__22591 = G__22599;
continue;
} else {
var n = cljs.core.first.call(null,seq__22588__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22600 = cljs.core.next.call(null,seq__22588__$1);
var G__22601 = null;
var G__22602 = (0);
var G__22603 = (0);
seq__22588 = G__22600;
chunk__22589 = G__22601;
count__22590 = G__22602;
i__22591 = G__22603;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__22642_22649 = cljs.core.seq.call(null,deps);
var chunk__22643_22650 = null;
var count__22644_22651 = (0);
var i__22645_22652 = (0);
while(true){
if((i__22645_22652 < count__22644_22651)){
var dep_22653 = cljs.core._nth.call(null,chunk__22643_22650,i__22645_22652);
topo_sort_helper_STAR_.call(null,dep_22653,(depth + (1)),state);

var G__22654 = seq__22642_22649;
var G__22655 = chunk__22643_22650;
var G__22656 = count__22644_22651;
var G__22657 = (i__22645_22652 + (1));
seq__22642_22649 = G__22654;
chunk__22643_22650 = G__22655;
count__22644_22651 = G__22656;
i__22645_22652 = G__22657;
continue;
} else {
var temp__4425__auto___22658 = cljs.core.seq.call(null,seq__22642_22649);
if(temp__4425__auto___22658){
var seq__22642_22659__$1 = temp__4425__auto___22658;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22642_22659__$1)){
var c__17629__auto___22660 = cljs.core.chunk_first.call(null,seq__22642_22659__$1);
var G__22661 = cljs.core.chunk_rest.call(null,seq__22642_22659__$1);
var G__22662 = c__17629__auto___22660;
var G__22663 = cljs.core.count.call(null,c__17629__auto___22660);
var G__22664 = (0);
seq__22642_22649 = G__22661;
chunk__22643_22650 = G__22662;
count__22644_22651 = G__22663;
i__22645_22652 = G__22664;
continue;
} else {
var dep_22665 = cljs.core.first.call(null,seq__22642_22659__$1);
topo_sort_helper_STAR_.call(null,dep_22665,(depth + (1)),state);

var G__22666 = cljs.core.next.call(null,seq__22642_22659__$1);
var G__22667 = null;
var G__22668 = (0);
var G__22669 = (0);
seq__22642_22649 = G__22666;
chunk__22643_22650 = G__22667;
count__22644_22651 = G__22668;
i__22645_22652 = G__22669;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__22646){
var vec__22648 = p__22646;
var x = cljs.core.nth.call(null,vec__22648,(0),null);
var xs = cljs.core.nthnext.call(null,vec__22648,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__22648,x,xs,get_deps__$1){
return (function (p1__22604_SHARP_){
return clojure.set.difference.call(null,p1__22604_SHARP_,x);
});})(vec__22648,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__22682 = cljs.core.seq.call(null,provides);
var chunk__22683 = null;
var count__22684 = (0);
var i__22685 = (0);
while(true){
if((i__22685 < count__22684)){
var prov = cljs.core._nth.call(null,chunk__22683,i__22685);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22686_22694 = cljs.core.seq.call(null,requires);
var chunk__22687_22695 = null;
var count__22688_22696 = (0);
var i__22689_22697 = (0);
while(true){
if((i__22689_22697 < count__22688_22696)){
var req_22698 = cljs.core._nth.call(null,chunk__22687_22695,i__22689_22697);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22698,prov);

var G__22699 = seq__22686_22694;
var G__22700 = chunk__22687_22695;
var G__22701 = count__22688_22696;
var G__22702 = (i__22689_22697 + (1));
seq__22686_22694 = G__22699;
chunk__22687_22695 = G__22700;
count__22688_22696 = G__22701;
i__22689_22697 = G__22702;
continue;
} else {
var temp__4425__auto___22703 = cljs.core.seq.call(null,seq__22686_22694);
if(temp__4425__auto___22703){
var seq__22686_22704__$1 = temp__4425__auto___22703;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22686_22704__$1)){
var c__17629__auto___22705 = cljs.core.chunk_first.call(null,seq__22686_22704__$1);
var G__22706 = cljs.core.chunk_rest.call(null,seq__22686_22704__$1);
var G__22707 = c__17629__auto___22705;
var G__22708 = cljs.core.count.call(null,c__17629__auto___22705);
var G__22709 = (0);
seq__22686_22694 = G__22706;
chunk__22687_22695 = G__22707;
count__22688_22696 = G__22708;
i__22689_22697 = G__22709;
continue;
} else {
var req_22710 = cljs.core.first.call(null,seq__22686_22704__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22710,prov);

var G__22711 = cljs.core.next.call(null,seq__22686_22704__$1);
var G__22712 = null;
var G__22713 = (0);
var G__22714 = (0);
seq__22686_22694 = G__22711;
chunk__22687_22695 = G__22712;
count__22688_22696 = G__22713;
i__22689_22697 = G__22714;
continue;
}
} else {
}
}
break;
}

var G__22715 = seq__22682;
var G__22716 = chunk__22683;
var G__22717 = count__22684;
var G__22718 = (i__22685 + (1));
seq__22682 = G__22715;
chunk__22683 = G__22716;
count__22684 = G__22717;
i__22685 = G__22718;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22682);
if(temp__4425__auto__){
var seq__22682__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22682__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__22682__$1);
var G__22719 = cljs.core.chunk_rest.call(null,seq__22682__$1);
var G__22720 = c__17629__auto__;
var G__22721 = cljs.core.count.call(null,c__17629__auto__);
var G__22722 = (0);
seq__22682 = G__22719;
chunk__22683 = G__22720;
count__22684 = G__22721;
i__22685 = G__22722;
continue;
} else {
var prov = cljs.core.first.call(null,seq__22682__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22690_22723 = cljs.core.seq.call(null,requires);
var chunk__22691_22724 = null;
var count__22692_22725 = (0);
var i__22693_22726 = (0);
while(true){
if((i__22693_22726 < count__22692_22725)){
var req_22727 = cljs.core._nth.call(null,chunk__22691_22724,i__22693_22726);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22727,prov);

var G__22728 = seq__22690_22723;
var G__22729 = chunk__22691_22724;
var G__22730 = count__22692_22725;
var G__22731 = (i__22693_22726 + (1));
seq__22690_22723 = G__22728;
chunk__22691_22724 = G__22729;
count__22692_22725 = G__22730;
i__22693_22726 = G__22731;
continue;
} else {
var temp__4425__auto___22732__$1 = cljs.core.seq.call(null,seq__22690_22723);
if(temp__4425__auto___22732__$1){
var seq__22690_22733__$1 = temp__4425__auto___22732__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22690_22733__$1)){
var c__17629__auto___22734 = cljs.core.chunk_first.call(null,seq__22690_22733__$1);
var G__22735 = cljs.core.chunk_rest.call(null,seq__22690_22733__$1);
var G__22736 = c__17629__auto___22734;
var G__22737 = cljs.core.count.call(null,c__17629__auto___22734);
var G__22738 = (0);
seq__22690_22723 = G__22735;
chunk__22691_22724 = G__22736;
count__22692_22725 = G__22737;
i__22693_22726 = G__22738;
continue;
} else {
var req_22739 = cljs.core.first.call(null,seq__22690_22733__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22739,prov);

var G__22740 = cljs.core.next.call(null,seq__22690_22733__$1);
var G__22741 = null;
var G__22742 = (0);
var G__22743 = (0);
seq__22690_22723 = G__22740;
chunk__22691_22724 = G__22741;
count__22692_22725 = G__22742;
i__22693_22726 = G__22743;
continue;
}
} else {
}
}
break;
}

var G__22744 = cljs.core.next.call(null,seq__22682__$1);
var G__22745 = null;
var G__22746 = (0);
var G__22747 = (0);
seq__22682 = G__22744;
chunk__22683 = G__22745;
count__22684 = G__22746;
i__22685 = G__22747;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__22752_22756 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__22753_22757 = null;
var count__22754_22758 = (0);
var i__22755_22759 = (0);
while(true){
if((i__22755_22759 < count__22754_22758)){
var ns_22760 = cljs.core._nth.call(null,chunk__22753_22757,i__22755_22759);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22760);

var G__22761 = seq__22752_22756;
var G__22762 = chunk__22753_22757;
var G__22763 = count__22754_22758;
var G__22764 = (i__22755_22759 + (1));
seq__22752_22756 = G__22761;
chunk__22753_22757 = G__22762;
count__22754_22758 = G__22763;
i__22755_22759 = G__22764;
continue;
} else {
var temp__4425__auto___22765 = cljs.core.seq.call(null,seq__22752_22756);
if(temp__4425__auto___22765){
var seq__22752_22766__$1 = temp__4425__auto___22765;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22752_22766__$1)){
var c__17629__auto___22767 = cljs.core.chunk_first.call(null,seq__22752_22766__$1);
var G__22768 = cljs.core.chunk_rest.call(null,seq__22752_22766__$1);
var G__22769 = c__17629__auto___22767;
var G__22770 = cljs.core.count.call(null,c__17629__auto___22767);
var G__22771 = (0);
seq__22752_22756 = G__22768;
chunk__22753_22757 = G__22769;
count__22754_22758 = G__22770;
i__22755_22759 = G__22771;
continue;
} else {
var ns_22772 = cljs.core.first.call(null,seq__22752_22766__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22772);

var G__22773 = cljs.core.next.call(null,seq__22752_22766__$1);
var G__22774 = null;
var G__22775 = (0);
var G__22776 = (0);
seq__22752_22756 = G__22773;
chunk__22753_22757 = G__22774;
count__22754_22758 = G__22775;
i__22755_22759 = G__22776;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16826__auto__ = goog.require__;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__22777__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__22777 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22778__i = 0, G__22778__a = new Array(arguments.length -  0);
while (G__22778__i < G__22778__a.length) {G__22778__a[G__22778__i] = arguments[G__22778__i + 0]; ++G__22778__i;}
  args = new cljs.core.IndexedSeq(G__22778__a,0);
} 
return G__22777__delegate.call(this,args);};
G__22777.cljs$lang$maxFixedArity = 0;
G__22777.cljs$lang$applyTo = (function (arglist__22779){
var args = cljs.core.seq(arglist__22779);
return G__22777__delegate(args);
});
G__22777.cljs$core$IFn$_invoke$arity$variadic = G__22777__delegate;
return G__22777;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__22781 = cljs.core._EQ_;
var expr__22782 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__22781.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__22782))){
var path_parts = ((function (pred__22781,expr__22782){
return (function (p1__22780_SHARP_){
return clojure.string.split.call(null,p1__22780_SHARP_,/[\/\\]/);
});})(pred__22781,expr__22782))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__22781,expr__22782){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e22784){if((e22784 instanceof Error)){
var e = e22784;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e22784;

}
}})());
});
;})(path_parts,sep,root,pred__22781,expr__22782))
} else {
if(cljs.core.truth_(pred__22781.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__22782))){
return ((function (pred__22781,expr__22782){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__22781,expr__22782){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__22781,expr__22782))
);

return deferred.addErrback(((function (deferred,pred__22781,expr__22782){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__22781,expr__22782))
);
});
;})(pred__22781,expr__22782))
} else {
return ((function (pred__22781,expr__22782){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__22781,expr__22782))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__22785,callback){
var map__22788 = p__22785;
var map__22788__$1 = ((((!((map__22788 == null)))?((((map__22788.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22788.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22788):map__22788);
var file_msg = map__22788__$1;
var request_url = cljs.core.get.call(null,map__22788__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__22788,map__22788__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__22788,map__22788__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__19750__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19750__auto__){
return (function (){
var f__19751__auto__ = (function (){var switch__19638__auto__ = ((function (c__19750__auto__){
return (function (state_22812){
var state_val_22813 = (state_22812[(1)]);
if((state_val_22813 === (7))){
var inst_22808 = (state_22812[(2)]);
var state_22812__$1 = state_22812;
var statearr_22814_22834 = state_22812__$1;
(statearr_22814_22834[(2)] = inst_22808);

(statearr_22814_22834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22813 === (1))){
var state_22812__$1 = state_22812;
var statearr_22815_22835 = state_22812__$1;
(statearr_22815_22835[(2)] = null);

(statearr_22815_22835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22813 === (4))){
var inst_22792 = (state_22812[(7)]);
var inst_22792__$1 = (state_22812[(2)]);
var state_22812__$1 = (function (){var statearr_22816 = state_22812;
(statearr_22816[(7)] = inst_22792__$1);

return statearr_22816;
})();
if(cljs.core.truth_(inst_22792__$1)){
var statearr_22817_22836 = state_22812__$1;
(statearr_22817_22836[(1)] = (5));

} else {
var statearr_22818_22837 = state_22812__$1;
(statearr_22818_22837[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22813 === (6))){
var state_22812__$1 = state_22812;
var statearr_22819_22838 = state_22812__$1;
(statearr_22819_22838[(2)] = null);

(statearr_22819_22838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22813 === (3))){
var inst_22810 = (state_22812[(2)]);
var state_22812__$1 = state_22812;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22812__$1,inst_22810);
} else {
if((state_val_22813 === (2))){
var state_22812__$1 = state_22812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22812__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_22813 === (11))){
var inst_22804 = (state_22812[(2)]);
var state_22812__$1 = (function (){var statearr_22820 = state_22812;
(statearr_22820[(8)] = inst_22804);

return statearr_22820;
})();
var statearr_22821_22839 = state_22812__$1;
(statearr_22821_22839[(2)] = null);

(statearr_22821_22839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22813 === (9))){
var inst_22798 = (state_22812[(9)]);
var inst_22796 = (state_22812[(10)]);
var inst_22800 = inst_22798.call(null,inst_22796);
var state_22812__$1 = state_22812;
var statearr_22822_22840 = state_22812__$1;
(statearr_22822_22840[(2)] = inst_22800);

(statearr_22822_22840[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22813 === (5))){
var inst_22792 = (state_22812[(7)]);
var inst_22794 = figwheel.client.file_reloading.blocking_load.call(null,inst_22792);
var state_22812__$1 = state_22812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22812__$1,(8),inst_22794);
} else {
if((state_val_22813 === (10))){
var inst_22796 = (state_22812[(10)]);
var inst_22802 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_22796);
var state_22812__$1 = state_22812;
var statearr_22823_22841 = state_22812__$1;
(statearr_22823_22841[(2)] = inst_22802);

(statearr_22823_22841[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22813 === (8))){
var inst_22792 = (state_22812[(7)]);
var inst_22798 = (state_22812[(9)]);
var inst_22796 = (state_22812[(2)]);
var inst_22797 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_22798__$1 = cljs.core.get.call(null,inst_22797,inst_22792);
var state_22812__$1 = (function (){var statearr_22824 = state_22812;
(statearr_22824[(9)] = inst_22798__$1);

(statearr_22824[(10)] = inst_22796);

return statearr_22824;
})();
if(cljs.core.truth_(inst_22798__$1)){
var statearr_22825_22842 = state_22812__$1;
(statearr_22825_22842[(1)] = (9));

} else {
var statearr_22826_22843 = state_22812__$1;
(statearr_22826_22843[(1)] = (10));

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
});})(c__19750__auto__))
;
return ((function (switch__19638__auto__,c__19750__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19639__auto__ = null;
var figwheel$client$file_reloading$state_machine__19639__auto____0 = (function (){
var statearr_22830 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22830[(0)] = figwheel$client$file_reloading$state_machine__19639__auto__);

(statearr_22830[(1)] = (1));

return statearr_22830;
});
var figwheel$client$file_reloading$state_machine__19639__auto____1 = (function (state_22812){
while(true){
var ret_value__19640__auto__ = (function (){try{while(true){
var result__19641__auto__ = switch__19638__auto__.call(null,state_22812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19641__auto__;
}
break;
}
}catch (e22831){if((e22831 instanceof Object)){
var ex__19642__auto__ = e22831;
var statearr_22832_22844 = state_22812;
(statearr_22832_22844[(5)] = ex__19642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22845 = state_22812;
state_22812 = G__22845;
continue;
} else {
return ret_value__19640__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19639__auto__ = function(state_22812){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19639__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19639__auto____1.call(this,state_22812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19639__auto____0;
figwheel$client$file_reloading$state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19639__auto____1;
return figwheel$client$file_reloading$state_machine__19639__auto__;
})()
;})(switch__19638__auto__,c__19750__auto__))
})();
var state__19752__auto__ = (function (){var statearr_22833 = f__19751__auto__.call(null);
(statearr_22833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19750__auto__);

return statearr_22833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19752__auto__);
});})(c__19750__auto__))
);

return c__19750__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__22846,callback){
var map__22849 = p__22846;
var map__22849__$1 = ((((!((map__22849 == null)))?((((map__22849.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22849.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22849):map__22849);
var file_msg = map__22849__$1;
var namespace = cljs.core.get.call(null,map__22849__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__22849,map__22849__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__22849,map__22849__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__22851){
var map__22854 = p__22851;
var map__22854__$1 = ((((!((map__22854 == null)))?((((map__22854.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22854.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22854):map__22854);
var file_msg = map__22854__$1;
var namespace = cljs.core.get.call(null,map__22854__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16814__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16814__auto__){
var or__16826__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
var or__16826__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16826__auto____$1)){
return or__16826__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16814__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__22856,callback){
var map__22859 = p__22856;
var map__22859__$1 = ((((!((map__22859 == null)))?((((map__22859.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22859.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22859):map__22859);
var file_msg = map__22859__$1;
var request_url = cljs.core.get.call(null,map__22859__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__22859__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19750__auto___22947 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19750__auto___22947,out){
return (function (){
var f__19751__auto__ = (function (){var switch__19638__auto__ = ((function (c__19750__auto___22947,out){
return (function (state_22929){
var state_val_22930 = (state_22929[(1)]);
if((state_val_22930 === (1))){
var inst_22907 = cljs.core.nth.call(null,files,(0),null);
var inst_22908 = cljs.core.nthnext.call(null,files,(1));
var inst_22909 = files;
var state_22929__$1 = (function (){var statearr_22931 = state_22929;
(statearr_22931[(7)] = inst_22907);

(statearr_22931[(8)] = inst_22909);

(statearr_22931[(9)] = inst_22908);

return statearr_22931;
})();
var statearr_22932_22948 = state_22929__$1;
(statearr_22932_22948[(2)] = null);

(statearr_22932_22948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22930 === (2))){
var inst_22909 = (state_22929[(8)]);
var inst_22912 = (state_22929[(10)]);
var inst_22912__$1 = cljs.core.nth.call(null,inst_22909,(0),null);
var inst_22913 = cljs.core.nthnext.call(null,inst_22909,(1));
var inst_22914 = (inst_22912__$1 == null);
var inst_22915 = cljs.core.not.call(null,inst_22914);
var state_22929__$1 = (function (){var statearr_22933 = state_22929;
(statearr_22933[(10)] = inst_22912__$1);

(statearr_22933[(11)] = inst_22913);

return statearr_22933;
})();
if(inst_22915){
var statearr_22934_22949 = state_22929__$1;
(statearr_22934_22949[(1)] = (4));

} else {
var statearr_22935_22950 = state_22929__$1;
(statearr_22935_22950[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22930 === (3))){
var inst_22927 = (state_22929[(2)]);
var state_22929__$1 = state_22929;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22929__$1,inst_22927);
} else {
if((state_val_22930 === (4))){
var inst_22912 = (state_22929[(10)]);
var inst_22917 = figwheel.client.file_reloading.reload_js_file.call(null,inst_22912);
var state_22929__$1 = state_22929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22929__$1,(7),inst_22917);
} else {
if((state_val_22930 === (5))){
var inst_22923 = cljs.core.async.close_BANG_.call(null,out);
var state_22929__$1 = state_22929;
var statearr_22936_22951 = state_22929__$1;
(statearr_22936_22951[(2)] = inst_22923);

(statearr_22936_22951[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22930 === (6))){
var inst_22925 = (state_22929[(2)]);
var state_22929__$1 = state_22929;
var statearr_22937_22952 = state_22929__$1;
(statearr_22937_22952[(2)] = inst_22925);

(statearr_22937_22952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22930 === (7))){
var inst_22913 = (state_22929[(11)]);
var inst_22919 = (state_22929[(2)]);
var inst_22920 = cljs.core.async.put_BANG_.call(null,out,inst_22919);
var inst_22909 = inst_22913;
var state_22929__$1 = (function (){var statearr_22938 = state_22929;
(statearr_22938[(8)] = inst_22909);

(statearr_22938[(12)] = inst_22920);

return statearr_22938;
})();
var statearr_22939_22953 = state_22929__$1;
(statearr_22939_22953[(2)] = null);

(statearr_22939_22953[(1)] = (2));


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
});})(c__19750__auto___22947,out))
;
return ((function (switch__19638__auto__,c__19750__auto___22947,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19639__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19639__auto____0 = (function (){
var statearr_22943 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22943[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19639__auto__);

(statearr_22943[(1)] = (1));

return statearr_22943;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19639__auto____1 = (function (state_22929){
while(true){
var ret_value__19640__auto__ = (function (){try{while(true){
var result__19641__auto__ = switch__19638__auto__.call(null,state_22929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19641__auto__;
}
break;
}
}catch (e22944){if((e22944 instanceof Object)){
var ex__19642__auto__ = e22944;
var statearr_22945_22954 = state_22929;
(statearr_22945_22954[(5)] = ex__19642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22955 = state_22929;
state_22929 = G__22955;
continue;
} else {
return ret_value__19640__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19639__auto__ = function(state_22929){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19639__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19639__auto____1.call(this,state_22929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19639__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19639__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19639__auto__;
})()
;})(switch__19638__auto__,c__19750__auto___22947,out))
})();
var state__19752__auto__ = (function (){var statearr_22946 = f__19751__auto__.call(null);
(statearr_22946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19750__auto___22947);

return statearr_22946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19752__auto__);
});})(c__19750__auto___22947,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__22956,opts){
var map__22960 = p__22956;
var map__22960__$1 = ((((!((map__22960 == null)))?((((map__22960.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22960.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22960):map__22960);
var eval_body__$1 = cljs.core.get.call(null,map__22960__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__22960__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16814__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16814__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16814__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e22962){var e = e22962;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__22963_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22963_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__22968){
var vec__22969 = p__22968;
var k = cljs.core.nth.call(null,vec__22969,(0),null);
var v = cljs.core.nth.call(null,vec__22969,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__22970){
var vec__22971 = p__22970;
var k = cljs.core.nth.call(null,vec__22971,(0),null);
var v = cljs.core.nth.call(null,vec__22971,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__22975,p__22976){
var map__23223 = p__22975;
var map__23223__$1 = ((((!((map__23223 == null)))?((((map__23223.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23223.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23223):map__23223);
var opts = map__23223__$1;
var before_jsload = cljs.core.get.call(null,map__23223__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__23223__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__23223__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__23224 = p__22976;
var map__23224__$1 = ((((!((map__23224 == null)))?((((map__23224.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23224.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23224):map__23224);
var msg = map__23224__$1;
var files = cljs.core.get.call(null,map__23224__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__23224__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__23224__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19750__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19750__auto__,map__23223,map__23223__$1,opts,before_jsload,on_jsload,reload_dependents,map__23224,map__23224__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19751__auto__ = (function (){var switch__19638__auto__ = ((function (c__19750__auto__,map__23223,map__23223__$1,opts,before_jsload,on_jsload,reload_dependents,map__23224,map__23224__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_23377){
var state_val_23378 = (state_23377[(1)]);
if((state_val_23378 === (7))){
var inst_23238 = (state_23377[(7)]);
var inst_23240 = (state_23377[(8)]);
var inst_23239 = (state_23377[(9)]);
var inst_23241 = (state_23377[(10)]);
var inst_23246 = cljs.core._nth.call(null,inst_23239,inst_23241);
var inst_23247 = figwheel.client.file_reloading.eval_body.call(null,inst_23246,opts);
var inst_23248 = (inst_23241 + (1));
var tmp23379 = inst_23238;
var tmp23380 = inst_23240;
var tmp23381 = inst_23239;
var inst_23238__$1 = tmp23379;
var inst_23239__$1 = tmp23381;
var inst_23240__$1 = tmp23380;
var inst_23241__$1 = inst_23248;
var state_23377__$1 = (function (){var statearr_23382 = state_23377;
(statearr_23382[(11)] = inst_23247);

(statearr_23382[(7)] = inst_23238__$1);

(statearr_23382[(8)] = inst_23240__$1);

(statearr_23382[(9)] = inst_23239__$1);

(statearr_23382[(10)] = inst_23241__$1);

return statearr_23382;
})();
var statearr_23383_23469 = state_23377__$1;
(statearr_23383_23469[(2)] = null);

(statearr_23383_23469[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (20))){
var inst_23281 = (state_23377[(12)]);
var inst_23289 = figwheel.client.file_reloading.sort_files.call(null,inst_23281);
var state_23377__$1 = state_23377;
var statearr_23384_23470 = state_23377__$1;
(statearr_23384_23470[(2)] = inst_23289);

(statearr_23384_23470[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (27))){
var state_23377__$1 = state_23377;
var statearr_23385_23471 = state_23377__$1;
(statearr_23385_23471[(2)] = null);

(statearr_23385_23471[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (1))){
var inst_23230 = (state_23377[(13)]);
var inst_23227 = before_jsload.call(null,files);
var inst_23228 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_23229 = (function (){return ((function (inst_23230,inst_23227,inst_23228,state_val_23378,c__19750__auto__,map__23223,map__23223__$1,opts,before_jsload,on_jsload,reload_dependents,map__23224,map__23224__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22972_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22972_SHARP_);
});
;})(inst_23230,inst_23227,inst_23228,state_val_23378,c__19750__auto__,map__23223,map__23223__$1,opts,before_jsload,on_jsload,reload_dependents,map__23224,map__23224__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23230__$1 = cljs.core.filter.call(null,inst_23229,files);
var inst_23231 = cljs.core.not_empty.call(null,inst_23230__$1);
var state_23377__$1 = (function (){var statearr_23386 = state_23377;
(statearr_23386[(13)] = inst_23230__$1);

(statearr_23386[(14)] = inst_23227);

(statearr_23386[(15)] = inst_23228);

return statearr_23386;
})();
if(cljs.core.truth_(inst_23231)){
var statearr_23387_23472 = state_23377__$1;
(statearr_23387_23472[(1)] = (2));

} else {
var statearr_23388_23473 = state_23377__$1;
(statearr_23388_23473[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (24))){
var state_23377__$1 = state_23377;
var statearr_23389_23474 = state_23377__$1;
(statearr_23389_23474[(2)] = null);

(statearr_23389_23474[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (39))){
var inst_23331 = (state_23377[(16)]);
var state_23377__$1 = state_23377;
var statearr_23390_23475 = state_23377__$1;
(statearr_23390_23475[(2)] = inst_23331);

(statearr_23390_23475[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (46))){
var inst_23372 = (state_23377[(2)]);
var state_23377__$1 = state_23377;
var statearr_23391_23476 = state_23377__$1;
(statearr_23391_23476[(2)] = inst_23372);

(statearr_23391_23476[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (4))){
var inst_23275 = (state_23377[(2)]);
var inst_23276 = cljs.core.List.EMPTY;
var inst_23277 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_23276);
var inst_23278 = (function (){return ((function (inst_23275,inst_23276,inst_23277,state_val_23378,c__19750__auto__,map__23223,map__23223__$1,opts,before_jsload,on_jsload,reload_dependents,map__23224,map__23224__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22973_SHARP_){
var and__16814__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22973_SHARP_);
if(cljs.core.truth_(and__16814__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22973_SHARP_));
} else {
return and__16814__auto__;
}
});
;})(inst_23275,inst_23276,inst_23277,state_val_23378,c__19750__auto__,map__23223,map__23223__$1,opts,before_jsload,on_jsload,reload_dependents,map__23224,map__23224__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23279 = cljs.core.filter.call(null,inst_23278,files);
var inst_23280 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_23281 = cljs.core.concat.call(null,inst_23279,inst_23280);
var state_23377__$1 = (function (){var statearr_23392 = state_23377;
(statearr_23392[(17)] = inst_23277);

(statearr_23392[(12)] = inst_23281);

(statearr_23392[(18)] = inst_23275);

return statearr_23392;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_23393_23477 = state_23377__$1;
(statearr_23393_23477[(1)] = (16));

} else {
var statearr_23394_23478 = state_23377__$1;
(statearr_23394_23478[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (15))){
var inst_23265 = (state_23377[(2)]);
var state_23377__$1 = state_23377;
var statearr_23395_23479 = state_23377__$1;
(statearr_23395_23479[(2)] = inst_23265);

(statearr_23395_23479[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (21))){
var inst_23291 = (state_23377[(19)]);
var inst_23291__$1 = (state_23377[(2)]);
var inst_23292 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_23291__$1);
var state_23377__$1 = (function (){var statearr_23396 = state_23377;
(statearr_23396[(19)] = inst_23291__$1);

return statearr_23396;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23377__$1,(22),inst_23292);
} else {
if((state_val_23378 === (31))){
var inst_23375 = (state_23377[(2)]);
var state_23377__$1 = state_23377;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23377__$1,inst_23375);
} else {
if((state_val_23378 === (32))){
var inst_23331 = (state_23377[(16)]);
var inst_23336 = inst_23331.cljs$lang$protocol_mask$partition0$;
var inst_23337 = (inst_23336 & (64));
var inst_23338 = inst_23331.cljs$core$ISeq$;
var inst_23339 = (inst_23337) || (inst_23338);
var state_23377__$1 = state_23377;
if(cljs.core.truth_(inst_23339)){
var statearr_23397_23480 = state_23377__$1;
(statearr_23397_23480[(1)] = (35));

} else {
var statearr_23398_23481 = state_23377__$1;
(statearr_23398_23481[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (40))){
var inst_23352 = (state_23377[(20)]);
var inst_23351 = (state_23377[(2)]);
var inst_23352__$1 = cljs.core.get.call(null,inst_23351,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_23353 = cljs.core.get.call(null,inst_23351,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_23354 = cljs.core.not_empty.call(null,inst_23352__$1);
var state_23377__$1 = (function (){var statearr_23399 = state_23377;
(statearr_23399[(21)] = inst_23353);

(statearr_23399[(20)] = inst_23352__$1);

return statearr_23399;
})();
if(cljs.core.truth_(inst_23354)){
var statearr_23400_23482 = state_23377__$1;
(statearr_23400_23482[(1)] = (41));

} else {
var statearr_23401_23483 = state_23377__$1;
(statearr_23401_23483[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (33))){
var state_23377__$1 = state_23377;
var statearr_23402_23484 = state_23377__$1;
(statearr_23402_23484[(2)] = false);

(statearr_23402_23484[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (13))){
var inst_23251 = (state_23377[(22)]);
var inst_23255 = cljs.core.chunk_first.call(null,inst_23251);
var inst_23256 = cljs.core.chunk_rest.call(null,inst_23251);
var inst_23257 = cljs.core.count.call(null,inst_23255);
var inst_23238 = inst_23256;
var inst_23239 = inst_23255;
var inst_23240 = inst_23257;
var inst_23241 = (0);
var state_23377__$1 = (function (){var statearr_23403 = state_23377;
(statearr_23403[(7)] = inst_23238);

(statearr_23403[(8)] = inst_23240);

(statearr_23403[(9)] = inst_23239);

(statearr_23403[(10)] = inst_23241);

return statearr_23403;
})();
var statearr_23404_23485 = state_23377__$1;
(statearr_23404_23485[(2)] = null);

(statearr_23404_23485[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (22))){
var inst_23291 = (state_23377[(19)]);
var inst_23294 = (state_23377[(23)]);
var inst_23299 = (state_23377[(24)]);
var inst_23295 = (state_23377[(25)]);
var inst_23294__$1 = (state_23377[(2)]);
var inst_23295__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23294__$1);
var inst_23296 = (function (){var all_files = inst_23291;
var res_SINGLEQUOTE_ = inst_23294__$1;
var res = inst_23295__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_23291,inst_23294,inst_23299,inst_23295,inst_23294__$1,inst_23295__$1,state_val_23378,c__19750__auto__,map__23223,map__23223__$1,opts,before_jsload,on_jsload,reload_dependents,map__23224,map__23224__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22974_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__22974_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_23291,inst_23294,inst_23299,inst_23295,inst_23294__$1,inst_23295__$1,state_val_23378,c__19750__auto__,map__23223,map__23223__$1,opts,before_jsload,on_jsload,reload_dependents,map__23224,map__23224__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23297 = cljs.core.filter.call(null,inst_23296,inst_23294__$1);
var inst_23298 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_23299__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23298);
var inst_23300 = cljs.core.not_empty.call(null,inst_23299__$1);
var state_23377__$1 = (function (){var statearr_23405 = state_23377;
(statearr_23405[(26)] = inst_23297);

(statearr_23405[(23)] = inst_23294__$1);

(statearr_23405[(24)] = inst_23299__$1);

(statearr_23405[(25)] = inst_23295__$1);

return statearr_23405;
})();
if(cljs.core.truth_(inst_23300)){
var statearr_23406_23486 = state_23377__$1;
(statearr_23406_23486[(1)] = (23));

} else {
var statearr_23407_23487 = state_23377__$1;
(statearr_23407_23487[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (36))){
var state_23377__$1 = state_23377;
var statearr_23408_23488 = state_23377__$1;
(statearr_23408_23488[(2)] = false);

(statearr_23408_23488[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (41))){
var inst_23352 = (state_23377[(20)]);
var inst_23356 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_23357 = cljs.core.map.call(null,inst_23356,inst_23352);
var inst_23358 = cljs.core.pr_str.call(null,inst_23357);
var inst_23359 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_23358)].join('');
var inst_23360 = figwheel.client.utils.log.call(null,inst_23359);
var state_23377__$1 = state_23377;
var statearr_23409_23489 = state_23377__$1;
(statearr_23409_23489[(2)] = inst_23360);

(statearr_23409_23489[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (43))){
var inst_23353 = (state_23377[(21)]);
var inst_23363 = (state_23377[(2)]);
var inst_23364 = cljs.core.not_empty.call(null,inst_23353);
var state_23377__$1 = (function (){var statearr_23410 = state_23377;
(statearr_23410[(27)] = inst_23363);

return statearr_23410;
})();
if(cljs.core.truth_(inst_23364)){
var statearr_23411_23490 = state_23377__$1;
(statearr_23411_23490[(1)] = (44));

} else {
var statearr_23412_23491 = state_23377__$1;
(statearr_23412_23491[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (29))){
var inst_23297 = (state_23377[(26)]);
var inst_23291 = (state_23377[(19)]);
var inst_23294 = (state_23377[(23)]);
var inst_23331 = (state_23377[(16)]);
var inst_23299 = (state_23377[(24)]);
var inst_23295 = (state_23377[(25)]);
var inst_23327 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_23330 = (function (){var all_files = inst_23291;
var res_SINGLEQUOTE_ = inst_23294;
var res = inst_23295;
var files_not_loaded = inst_23297;
var dependencies_that_loaded = inst_23299;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23297,inst_23291,inst_23294,inst_23331,inst_23299,inst_23295,inst_23327,state_val_23378,c__19750__auto__,map__23223,map__23223__$1,opts,before_jsload,on_jsload,reload_dependents,map__23224,map__23224__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23329){
var map__23413 = p__23329;
var map__23413__$1 = ((((!((map__23413 == null)))?((((map__23413.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23413.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23413):map__23413);
var namespace = cljs.core.get.call(null,map__23413__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23297,inst_23291,inst_23294,inst_23331,inst_23299,inst_23295,inst_23327,state_val_23378,c__19750__auto__,map__23223,map__23223__$1,opts,before_jsload,on_jsload,reload_dependents,map__23224,map__23224__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23331__$1 = cljs.core.group_by.call(null,inst_23330,inst_23297);
var inst_23333 = (inst_23331__$1 == null);
var inst_23334 = cljs.core.not.call(null,inst_23333);
var state_23377__$1 = (function (){var statearr_23415 = state_23377;
(statearr_23415[(28)] = inst_23327);

(statearr_23415[(16)] = inst_23331__$1);

return statearr_23415;
})();
if(inst_23334){
var statearr_23416_23492 = state_23377__$1;
(statearr_23416_23492[(1)] = (32));

} else {
var statearr_23417_23493 = state_23377__$1;
(statearr_23417_23493[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (44))){
var inst_23353 = (state_23377[(21)]);
var inst_23366 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23353);
var inst_23367 = cljs.core.pr_str.call(null,inst_23366);
var inst_23368 = [cljs.core.str("not required: "),cljs.core.str(inst_23367)].join('');
var inst_23369 = figwheel.client.utils.log.call(null,inst_23368);
var state_23377__$1 = state_23377;
var statearr_23418_23494 = state_23377__$1;
(statearr_23418_23494[(2)] = inst_23369);

(statearr_23418_23494[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (6))){
var inst_23272 = (state_23377[(2)]);
var state_23377__$1 = state_23377;
var statearr_23419_23495 = state_23377__$1;
(statearr_23419_23495[(2)] = inst_23272);

(statearr_23419_23495[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (28))){
var inst_23297 = (state_23377[(26)]);
var inst_23324 = (state_23377[(2)]);
var inst_23325 = cljs.core.not_empty.call(null,inst_23297);
var state_23377__$1 = (function (){var statearr_23420 = state_23377;
(statearr_23420[(29)] = inst_23324);

return statearr_23420;
})();
if(cljs.core.truth_(inst_23325)){
var statearr_23421_23496 = state_23377__$1;
(statearr_23421_23496[(1)] = (29));

} else {
var statearr_23422_23497 = state_23377__$1;
(statearr_23422_23497[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (25))){
var inst_23295 = (state_23377[(25)]);
var inst_23311 = (state_23377[(2)]);
var inst_23312 = cljs.core.not_empty.call(null,inst_23295);
var state_23377__$1 = (function (){var statearr_23423 = state_23377;
(statearr_23423[(30)] = inst_23311);

return statearr_23423;
})();
if(cljs.core.truth_(inst_23312)){
var statearr_23424_23498 = state_23377__$1;
(statearr_23424_23498[(1)] = (26));

} else {
var statearr_23425_23499 = state_23377__$1;
(statearr_23425_23499[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (34))){
var inst_23346 = (state_23377[(2)]);
var state_23377__$1 = state_23377;
if(cljs.core.truth_(inst_23346)){
var statearr_23426_23500 = state_23377__$1;
(statearr_23426_23500[(1)] = (38));

} else {
var statearr_23427_23501 = state_23377__$1;
(statearr_23427_23501[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (17))){
var state_23377__$1 = state_23377;
var statearr_23428_23502 = state_23377__$1;
(statearr_23428_23502[(2)] = recompile_dependents);

(statearr_23428_23502[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (3))){
var state_23377__$1 = state_23377;
var statearr_23429_23503 = state_23377__$1;
(statearr_23429_23503[(2)] = null);

(statearr_23429_23503[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (12))){
var inst_23268 = (state_23377[(2)]);
var state_23377__$1 = state_23377;
var statearr_23430_23504 = state_23377__$1;
(statearr_23430_23504[(2)] = inst_23268);

(statearr_23430_23504[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (2))){
var inst_23230 = (state_23377[(13)]);
var inst_23237 = cljs.core.seq.call(null,inst_23230);
var inst_23238 = inst_23237;
var inst_23239 = null;
var inst_23240 = (0);
var inst_23241 = (0);
var state_23377__$1 = (function (){var statearr_23431 = state_23377;
(statearr_23431[(7)] = inst_23238);

(statearr_23431[(8)] = inst_23240);

(statearr_23431[(9)] = inst_23239);

(statearr_23431[(10)] = inst_23241);

return statearr_23431;
})();
var statearr_23432_23505 = state_23377__$1;
(statearr_23432_23505[(2)] = null);

(statearr_23432_23505[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (23))){
var inst_23297 = (state_23377[(26)]);
var inst_23291 = (state_23377[(19)]);
var inst_23294 = (state_23377[(23)]);
var inst_23299 = (state_23377[(24)]);
var inst_23295 = (state_23377[(25)]);
var inst_23302 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_23304 = (function (){var all_files = inst_23291;
var res_SINGLEQUOTE_ = inst_23294;
var res = inst_23295;
var files_not_loaded = inst_23297;
var dependencies_that_loaded = inst_23299;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23297,inst_23291,inst_23294,inst_23299,inst_23295,inst_23302,state_val_23378,c__19750__auto__,map__23223,map__23223__$1,opts,before_jsload,on_jsload,reload_dependents,map__23224,map__23224__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23303){
var map__23433 = p__23303;
var map__23433__$1 = ((((!((map__23433 == null)))?((((map__23433.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23433.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23433):map__23433);
var request_url = cljs.core.get.call(null,map__23433__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23297,inst_23291,inst_23294,inst_23299,inst_23295,inst_23302,state_val_23378,c__19750__auto__,map__23223,map__23223__$1,opts,before_jsload,on_jsload,reload_dependents,map__23224,map__23224__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23305 = cljs.core.reverse.call(null,inst_23299);
var inst_23306 = cljs.core.map.call(null,inst_23304,inst_23305);
var inst_23307 = cljs.core.pr_str.call(null,inst_23306);
var inst_23308 = figwheel.client.utils.log.call(null,inst_23307);
var state_23377__$1 = (function (){var statearr_23435 = state_23377;
(statearr_23435[(31)] = inst_23302);

return statearr_23435;
})();
var statearr_23436_23506 = state_23377__$1;
(statearr_23436_23506[(2)] = inst_23308);

(statearr_23436_23506[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (35))){
var state_23377__$1 = state_23377;
var statearr_23437_23507 = state_23377__$1;
(statearr_23437_23507[(2)] = true);

(statearr_23437_23507[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (19))){
var inst_23281 = (state_23377[(12)]);
var inst_23287 = figwheel.client.file_reloading.expand_files.call(null,inst_23281);
var state_23377__$1 = state_23377;
var statearr_23438_23508 = state_23377__$1;
(statearr_23438_23508[(2)] = inst_23287);

(statearr_23438_23508[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (11))){
var state_23377__$1 = state_23377;
var statearr_23439_23509 = state_23377__$1;
(statearr_23439_23509[(2)] = null);

(statearr_23439_23509[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (9))){
var inst_23270 = (state_23377[(2)]);
var state_23377__$1 = state_23377;
var statearr_23440_23510 = state_23377__$1;
(statearr_23440_23510[(2)] = inst_23270);

(statearr_23440_23510[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (5))){
var inst_23240 = (state_23377[(8)]);
var inst_23241 = (state_23377[(10)]);
var inst_23243 = (inst_23241 < inst_23240);
var inst_23244 = inst_23243;
var state_23377__$1 = state_23377;
if(cljs.core.truth_(inst_23244)){
var statearr_23441_23511 = state_23377__$1;
(statearr_23441_23511[(1)] = (7));

} else {
var statearr_23442_23512 = state_23377__$1;
(statearr_23442_23512[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (14))){
var inst_23251 = (state_23377[(22)]);
var inst_23260 = cljs.core.first.call(null,inst_23251);
var inst_23261 = figwheel.client.file_reloading.eval_body.call(null,inst_23260,opts);
var inst_23262 = cljs.core.next.call(null,inst_23251);
var inst_23238 = inst_23262;
var inst_23239 = null;
var inst_23240 = (0);
var inst_23241 = (0);
var state_23377__$1 = (function (){var statearr_23443 = state_23377;
(statearr_23443[(7)] = inst_23238);

(statearr_23443[(8)] = inst_23240);

(statearr_23443[(9)] = inst_23239);

(statearr_23443[(10)] = inst_23241);

(statearr_23443[(32)] = inst_23261);

return statearr_23443;
})();
var statearr_23444_23513 = state_23377__$1;
(statearr_23444_23513[(2)] = null);

(statearr_23444_23513[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (45))){
var state_23377__$1 = state_23377;
var statearr_23445_23514 = state_23377__$1;
(statearr_23445_23514[(2)] = null);

(statearr_23445_23514[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (26))){
var inst_23297 = (state_23377[(26)]);
var inst_23291 = (state_23377[(19)]);
var inst_23294 = (state_23377[(23)]);
var inst_23299 = (state_23377[(24)]);
var inst_23295 = (state_23377[(25)]);
var inst_23314 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_23316 = (function (){var all_files = inst_23291;
var res_SINGLEQUOTE_ = inst_23294;
var res = inst_23295;
var files_not_loaded = inst_23297;
var dependencies_that_loaded = inst_23299;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23297,inst_23291,inst_23294,inst_23299,inst_23295,inst_23314,state_val_23378,c__19750__auto__,map__23223,map__23223__$1,opts,before_jsload,on_jsload,reload_dependents,map__23224,map__23224__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23315){
var map__23446 = p__23315;
var map__23446__$1 = ((((!((map__23446 == null)))?((((map__23446.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23446.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23446):map__23446);
var namespace = cljs.core.get.call(null,map__23446__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__23446__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23297,inst_23291,inst_23294,inst_23299,inst_23295,inst_23314,state_val_23378,c__19750__auto__,map__23223,map__23223__$1,opts,before_jsload,on_jsload,reload_dependents,map__23224,map__23224__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23317 = cljs.core.map.call(null,inst_23316,inst_23295);
var inst_23318 = cljs.core.pr_str.call(null,inst_23317);
var inst_23319 = figwheel.client.utils.log.call(null,inst_23318);
var inst_23320 = (function (){var all_files = inst_23291;
var res_SINGLEQUOTE_ = inst_23294;
var res = inst_23295;
var files_not_loaded = inst_23297;
var dependencies_that_loaded = inst_23299;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23297,inst_23291,inst_23294,inst_23299,inst_23295,inst_23314,inst_23316,inst_23317,inst_23318,inst_23319,state_val_23378,c__19750__auto__,map__23223,map__23223__$1,opts,before_jsload,on_jsload,reload_dependents,map__23224,map__23224__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23297,inst_23291,inst_23294,inst_23299,inst_23295,inst_23314,inst_23316,inst_23317,inst_23318,inst_23319,state_val_23378,c__19750__auto__,map__23223,map__23223__$1,opts,before_jsload,on_jsload,reload_dependents,map__23224,map__23224__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23321 = setTimeout(inst_23320,(10));
var state_23377__$1 = (function (){var statearr_23448 = state_23377;
(statearr_23448[(33)] = inst_23319);

(statearr_23448[(34)] = inst_23314);

return statearr_23448;
})();
var statearr_23449_23515 = state_23377__$1;
(statearr_23449_23515[(2)] = inst_23321);

(statearr_23449_23515[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (16))){
var state_23377__$1 = state_23377;
var statearr_23450_23516 = state_23377__$1;
(statearr_23450_23516[(2)] = reload_dependents);

(statearr_23450_23516[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (38))){
var inst_23331 = (state_23377[(16)]);
var inst_23348 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23331);
var state_23377__$1 = state_23377;
var statearr_23451_23517 = state_23377__$1;
(statearr_23451_23517[(2)] = inst_23348);

(statearr_23451_23517[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (30))){
var state_23377__$1 = state_23377;
var statearr_23452_23518 = state_23377__$1;
(statearr_23452_23518[(2)] = null);

(statearr_23452_23518[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (10))){
var inst_23251 = (state_23377[(22)]);
var inst_23253 = cljs.core.chunked_seq_QMARK_.call(null,inst_23251);
var state_23377__$1 = state_23377;
if(inst_23253){
var statearr_23453_23519 = state_23377__$1;
(statearr_23453_23519[(1)] = (13));

} else {
var statearr_23454_23520 = state_23377__$1;
(statearr_23454_23520[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (18))){
var inst_23285 = (state_23377[(2)]);
var state_23377__$1 = state_23377;
if(cljs.core.truth_(inst_23285)){
var statearr_23455_23521 = state_23377__$1;
(statearr_23455_23521[(1)] = (19));

} else {
var statearr_23456_23522 = state_23377__$1;
(statearr_23456_23522[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (42))){
var state_23377__$1 = state_23377;
var statearr_23457_23523 = state_23377__$1;
(statearr_23457_23523[(2)] = null);

(statearr_23457_23523[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (37))){
var inst_23343 = (state_23377[(2)]);
var state_23377__$1 = state_23377;
var statearr_23458_23524 = state_23377__$1;
(statearr_23458_23524[(2)] = inst_23343);

(statearr_23458_23524[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (8))){
var inst_23238 = (state_23377[(7)]);
var inst_23251 = (state_23377[(22)]);
var inst_23251__$1 = cljs.core.seq.call(null,inst_23238);
var state_23377__$1 = (function (){var statearr_23459 = state_23377;
(statearr_23459[(22)] = inst_23251__$1);

return statearr_23459;
})();
if(inst_23251__$1){
var statearr_23460_23525 = state_23377__$1;
(statearr_23460_23525[(1)] = (10));

} else {
var statearr_23461_23526 = state_23377__$1;
(statearr_23461_23526[(1)] = (11));

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
});})(c__19750__auto__,map__23223,map__23223__$1,opts,before_jsload,on_jsload,reload_dependents,map__23224,map__23224__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19638__auto__,c__19750__auto__,map__23223,map__23223__$1,opts,before_jsload,on_jsload,reload_dependents,map__23224,map__23224__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19639__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19639__auto____0 = (function (){
var statearr_23465 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23465[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19639__auto__);

(statearr_23465[(1)] = (1));

return statearr_23465;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19639__auto____1 = (function (state_23377){
while(true){
var ret_value__19640__auto__ = (function (){try{while(true){
var result__19641__auto__ = switch__19638__auto__.call(null,state_23377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19641__auto__;
}
break;
}
}catch (e23466){if((e23466 instanceof Object)){
var ex__19642__auto__ = e23466;
var statearr_23467_23527 = state_23377;
(statearr_23467_23527[(5)] = ex__19642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23528 = state_23377;
state_23377 = G__23528;
continue;
} else {
return ret_value__19640__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19639__auto__ = function(state_23377){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19639__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19639__auto____1.call(this,state_23377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19639__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19639__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19639__auto__;
})()
;})(switch__19638__auto__,c__19750__auto__,map__23223,map__23223__$1,opts,before_jsload,on_jsload,reload_dependents,map__23224,map__23224__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19752__auto__ = (function (){var statearr_23468 = f__19751__auto__.call(null);
(statearr_23468[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19750__auto__);

return statearr_23468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19752__auto__);
});})(c__19750__auto__,map__23223,map__23223__$1,opts,before_jsload,on_jsload,reload_dependents,map__23224,map__23224__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19750__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__23531,link){
var map__23534 = p__23531;
var map__23534__$1 = ((((!((map__23534 == null)))?((((map__23534.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23534.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23534):map__23534);
var file = cljs.core.get.call(null,map__23534__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__23534,map__23534__$1,file){
return (function (p1__23529_SHARP_,p2__23530_SHARP_){
if(cljs.core._EQ_.call(null,p1__23529_SHARP_,p2__23530_SHARP_)){
return p1__23529_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__23534,map__23534__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__23540){
var map__23541 = p__23540;
var map__23541__$1 = ((((!((map__23541 == null)))?((((map__23541.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23541.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23541):map__23541);
var match_length = cljs.core.get.call(null,map__23541__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__23541__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__23536_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__23536_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args23543 = [];
var len__17884__auto___23546 = arguments.length;
var i__17885__auto___23547 = (0);
while(true){
if((i__17885__auto___23547 < len__17884__auto___23546)){
args23543.push((arguments[i__17885__auto___23547]));

var G__23548 = (i__17885__auto___23547 + (1));
i__17885__auto___23547 = G__23548;
continue;
} else {
}
break;
}

var G__23545 = args23543.length;
switch (G__23545) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23543.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__23550_SHARP_,p2__23551_SHARP_){
return cljs.core.assoc.call(null,p1__23550_SHARP_,cljs.core.get.call(null,p2__23551_SHARP_,key),p2__23551_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__23552){
var map__23555 = p__23552;
var map__23555__$1 = ((((!((map__23555 == null)))?((((map__23555.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23555.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23555):map__23555);
var f_data = map__23555__$1;
var file = cljs.core.get.call(null,map__23555__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__23557,files_msg){
var map__23564 = p__23557;
var map__23564__$1 = ((((!((map__23564 == null)))?((((map__23564.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23564.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23564):map__23564);
var opts = map__23564__$1;
var on_cssload = cljs.core.get.call(null,map__23564__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__23566_23570 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__23567_23571 = null;
var count__23568_23572 = (0);
var i__23569_23573 = (0);
while(true){
if((i__23569_23573 < count__23568_23572)){
var f_23574 = cljs.core._nth.call(null,chunk__23567_23571,i__23569_23573);
figwheel.client.file_reloading.reload_css_file.call(null,f_23574);

var G__23575 = seq__23566_23570;
var G__23576 = chunk__23567_23571;
var G__23577 = count__23568_23572;
var G__23578 = (i__23569_23573 + (1));
seq__23566_23570 = G__23575;
chunk__23567_23571 = G__23576;
count__23568_23572 = G__23577;
i__23569_23573 = G__23578;
continue;
} else {
var temp__4425__auto___23579 = cljs.core.seq.call(null,seq__23566_23570);
if(temp__4425__auto___23579){
var seq__23566_23580__$1 = temp__4425__auto___23579;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23566_23580__$1)){
var c__17629__auto___23581 = cljs.core.chunk_first.call(null,seq__23566_23580__$1);
var G__23582 = cljs.core.chunk_rest.call(null,seq__23566_23580__$1);
var G__23583 = c__17629__auto___23581;
var G__23584 = cljs.core.count.call(null,c__17629__auto___23581);
var G__23585 = (0);
seq__23566_23570 = G__23582;
chunk__23567_23571 = G__23583;
count__23568_23572 = G__23584;
i__23569_23573 = G__23585;
continue;
} else {
var f_23586 = cljs.core.first.call(null,seq__23566_23580__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_23586);

var G__23587 = cljs.core.next.call(null,seq__23566_23580__$1);
var G__23588 = null;
var G__23589 = (0);
var G__23590 = (0);
seq__23566_23570 = G__23587;
chunk__23567_23571 = G__23588;
count__23568_23572 = G__23589;
i__23569_23573 = G__23590;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__23564,map__23564__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__23564,map__23564__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map