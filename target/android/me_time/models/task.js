// Compiled by ClojureScript 1.7.170 {}
goog.provide('me_time.models.task');
goog.require('cljs.core');
goog.require('me_time.models.timer');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
me_time.models.task.Task = (function (name,goal_time,timer,__meta,__extmap,__hash){
this.name = name;
this.goal_time = goal_time;
this.timer = timer;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
me_time.models.task.Task.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17440__auto__,k__17441__auto__){
var self__ = this;
var this__17440__auto____$1 = this;
return cljs.core._lookup.call(null,this__17440__auto____$1,k__17441__auto__,null);
});

me_time.models.task.Task.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17442__auto__,k18415,else__17443__auto__){
var self__ = this;
var this__17442__auto____$1 = this;
var G__18417 = (((k18415 instanceof cljs.core.Keyword))?k18415.fqn:null);
switch (G__18417) {
case "name":
return self__.name;

break;
case "goal-time":
return self__.goal_time;

break;
case "timer":
return self__.timer;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k18415,else__17443__auto__);

}
});

me_time.models.task.Task.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17454__auto__,writer__17455__auto__,opts__17456__auto__){
var self__ = this;
var this__17454__auto____$1 = this;
var pr_pair__17457__auto__ = ((function (this__17454__auto____$1){
return (function (keyval__17458__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17455__auto__,cljs.core.pr_writer,""," ","",opts__17456__auto__,keyval__17458__auto__);
});})(this__17454__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17455__auto__,pr_pair__17457__auto__,"#me-time.models.task.Task{",", ","}",opts__17456__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"goal-time","goal-time",-131578641),self__.goal_time],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timer","timer",-1266967739),self__.timer],null))], null),self__.__extmap));
});

me_time.models.task.Task.prototype.cljs$core$IIterable$ = true;

me_time.models.task.Task.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18414){
var self__ = this;
var G__18414__$1 = this;
return (new cljs.core.RecordIter((0),G__18414__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"goal-time","goal-time",-131578641),new cljs.core.Keyword(null,"timer","timer",-1266967739)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

me_time.models.task.Task.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17438__auto__){
var self__ = this;
var this__17438__auto____$1 = this;
return self__.__meta;
});

me_time.models.task.Task.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17434__auto__){
var self__ = this;
var this__17434__auto____$1 = this;
return (new me_time.models.task.Task(self__.name,self__.goal_time,self__.timer,self__.__meta,self__.__extmap,self__.__hash));
});

me_time.models.task.Task.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17444__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

me_time.models.task.Task.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17435__auto__){
var self__ = this;
var this__17435__auto____$1 = this;
var h__17261__auto__ = self__.__hash;
if(!((h__17261__auto__ == null))){
return h__17261__auto__;
} else {
var h__17261__auto____$1 = cljs.core.hash_imap.call(null,this__17435__auto____$1);
self__.__hash = h__17261__auto____$1;

return h__17261__auto____$1;
}
});

me_time.models.task.Task.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17436__auto__,other__17437__auto__){
var self__ = this;
var this__17436__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16814__auto__ = other__17437__auto__;
if(cljs.core.truth_(and__16814__auto__)){
var and__16814__auto____$1 = (this__17436__auto____$1.constructor === other__17437__auto__.constructor);
if(and__16814__auto____$1){
return cljs.core.equiv_map.call(null,this__17436__auto____$1,other__17437__auto__);
} else {
return and__16814__auto____$1;
}
} else {
return and__16814__auto__;
}
})())){
return true;
} else {
return false;
}
});

me_time.models.task.Task.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17449__auto__,k__17450__auto__){
var self__ = this;
var this__17449__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"timer","timer",-1266967739),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"goal-time","goal-time",-131578641),null], null), null),k__17450__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17449__auto____$1),self__.__meta),k__17450__auto__);
} else {
return (new me_time.models.task.Task(self__.name,self__.goal_time,self__.timer,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17450__auto__)),null));
}
});

me_time.models.task.Task.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17447__auto__,k__17448__auto__,G__18414){
var self__ = this;
var this__17447__auto____$1 = this;
var pred__18418 = cljs.core.keyword_identical_QMARK_;
var expr__18419 = k__17448__auto__;
if(cljs.core.truth_(pred__18418.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__18419))){
return (new me_time.models.task.Task(G__18414,self__.goal_time,self__.timer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18418.call(null,new cljs.core.Keyword(null,"goal-time","goal-time",-131578641),expr__18419))){
return (new me_time.models.task.Task(self__.name,G__18414,self__.timer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18418.call(null,new cljs.core.Keyword(null,"timer","timer",-1266967739),expr__18419))){
return (new me_time.models.task.Task(self__.name,self__.goal_time,G__18414,self__.__meta,self__.__extmap,null));
} else {
return (new me_time.models.task.Task(self__.name,self__.goal_time,self__.timer,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17448__auto__,G__18414),null));
}
}
}
});

me_time.models.task.Task.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17452__auto__){
var self__ = this;
var this__17452__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"goal-time","goal-time",-131578641),self__.goal_time],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timer","timer",-1266967739),self__.timer],null))], null),self__.__extmap));
});

me_time.models.task.Task.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17439__auto__,G__18414){
var self__ = this;
var this__17439__auto____$1 = this;
return (new me_time.models.task.Task(self__.name,self__.goal_time,self__.timer,G__18414,self__.__extmap,self__.__hash));
});

me_time.models.task.Task.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17445__auto__,entry__17446__auto__){
var self__ = this;
var this__17445__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17446__auto__)){
return cljs.core._assoc.call(null,this__17445__auto____$1,cljs.core._nth.call(null,entry__17446__auto__,(0)),cljs.core._nth.call(null,entry__17446__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17445__auto____$1,entry__17446__auto__);
}
});

me_time.models.task.Task.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"goal-time","goal-time",1508952886,null),new cljs.core.Symbol(null,"timer","timer",373563788,null)], null);
});

me_time.models.task.Task.cljs$lang$type = true;

me_time.models.task.Task.cljs$lang$ctorPrSeq = (function (this__17474__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"me-time.models.task/Task");
});

me_time.models.task.Task.cljs$lang$ctorPrWriter = (function (this__17474__auto__,writer__17475__auto__){
return cljs.core._write.call(null,writer__17475__auto__,"me-time.models.task/Task");
});

me_time.models.task.__GT_Task = (function me_time$models$task$__GT_Task(name,goal_time,timer){
return (new me_time.models.task.Task(name,goal_time,timer,null,null,null));
});

me_time.models.task.map__GT_Task = (function me_time$models$task$map__GT_Task(G__18416){
return (new me_time.models.task.Task(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__18416),new cljs.core.Keyword(null,"goal-time","goal-time",-131578641).cljs$core$IFn$_invoke$arity$1(G__18416),new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(G__18416),null,cljs.core.dissoc.call(null,G__18416,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"goal-time","goal-time",-131578641),new cljs.core.Keyword(null,"timer","timer",-1266967739)),null));
});

me_time.models.task.wrap_task = (function me_time$models$task$wrap_task(task){
return me_time.models.task.map__GT_Task.call(null,task);
});
me_time.models.task.create_task = (function me_time$models$task$create_task(name){
return me_time.models.task.__GT_Task.call(null,name,(0),me_time.models.timer.create_timer.call(null));
});
me_time.models.task.update_task_name = (function me_time$models$task$update_task_name(task,name){
return cljs.core.assoc.call(null,task,new cljs.core.Keyword(null,"name","name",1843675177),name);
});
me_time.models.task.update_goal_time = (function me_time$models$task$update_goal_time(task,goal_time){
return cljs.core.assoc.call(null,task,new cljs.core.Keyword(null,"goal-time","goal-time",-131578641),goal_time);
});
me_time.models.task.update_timer = (function me_time$models$task$update_timer(var_args){
var args__17891__auto__ = [];
var len__17884__auto___18425 = arguments.length;
var i__17885__auto___18426 = (0);
while(true){
if((i__17885__auto___18426 < len__17884__auto___18425)){
args__17891__auto__.push((arguments[i__17885__auto___18426]));

var G__18427 = (i__17885__auto___18426 + (1));
i__17885__auto___18426 = G__18427;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((2) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((2)),(0))):null);
return me_time.models.task.update_timer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17892__auto__);
});

me_time.models.task.update_timer.cljs$core$IFn$_invoke$arity$variadic = (function (task,update_fn,args){
return cljs.core.assoc.call(null,task,new cljs.core.Keyword(null,"timer","timer",-1266967739),cljs.core.apply.call(null,update_fn,cljs.core.cons.call(null,new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(task),args)));
});

me_time.models.task.update_timer.cljs$lang$maxFixedArity = (2);

me_time.models.task.update_timer.cljs$lang$applyTo = (function (seq18422){
var G__18423 = cljs.core.first.call(null,seq18422);
var seq18422__$1 = cljs.core.next.call(null,seq18422);
var G__18424 = cljs.core.first.call(null,seq18422__$1);
var seq18422__$2 = cljs.core.next.call(null,seq18422__$1);
return me_time.models.task.update_timer.cljs$core$IFn$_invoke$arity$variadic(G__18423,G__18424,seq18422__$2);
});

//# sourceMappingURL=task.js.map