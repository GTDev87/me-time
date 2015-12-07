// Compiled by ClojureScript 1.7.170 {}
goog.provide('me_time.models.task_list');
goog.require('cljs.core');
goog.require('me_time.models.task');

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
me_time.models.task_list.TaskContext = (function (task,id,__meta,__extmap,__hash){
this.task = task;
this.id = id;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
me_time.models.task_list.TaskContext.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17440__auto__,k__17441__auto__){
var self__ = this;
var this__17440__auto____$1 = this;
return cljs.core._lookup.call(null,this__17440__auto____$1,k__17441__auto__,null);
});

me_time.models.task_list.TaskContext.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17442__auto__,k18431,else__17443__auto__){
var self__ = this;
var this__17442__auto____$1 = this;
var G__18433 = (((k18431 instanceof cljs.core.Keyword))?k18431.fqn:null);
switch (G__18433) {
case "task":
return self__.task;

break;
case "id":
return self__.id;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k18431,else__17443__auto__);

}
});

me_time.models.task_list.TaskContext.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17454__auto__,writer__17455__auto__,opts__17456__auto__){
var self__ = this;
var this__17454__auto____$1 = this;
var pr_pair__17457__auto__ = ((function (this__17454__auto____$1){
return (function (keyval__17458__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17455__auto__,cljs.core.pr_writer,""," ","",opts__17456__auto__,keyval__17458__auto__);
});})(this__17454__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17455__auto__,pr_pair__17457__auto__,"#me-time.models.task-list.TaskContext{",", ","}",opts__17456__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"task","task",-1476607993),self__.task],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null))], null),self__.__extmap));
});

me_time.models.task_list.TaskContext.prototype.cljs$core$IIterable$ = true;

me_time.models.task_list.TaskContext.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18430){
var self__ = this;
var G__18430__$1 = this;
return (new cljs.core.RecordIter((0),G__18430__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"task","task",-1476607993),new cljs.core.Keyword(null,"id","id",-1388402092)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

me_time.models.task_list.TaskContext.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17438__auto__){
var self__ = this;
var this__17438__auto____$1 = this;
return self__.__meta;
});

me_time.models.task_list.TaskContext.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17434__auto__){
var self__ = this;
var this__17434__auto____$1 = this;
return (new me_time.models.task_list.TaskContext(self__.task,self__.id,self__.__meta,self__.__extmap,self__.__hash));
});

me_time.models.task_list.TaskContext.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17444__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

me_time.models.task_list.TaskContext.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17435__auto__){
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

me_time.models.task_list.TaskContext.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17436__auto__,other__17437__auto__){
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

me_time.models.task_list.TaskContext.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17449__auto__,k__17450__auto__){
var self__ = this;
var this__17449__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"task","task",-1476607993),null,new cljs.core.Keyword(null,"id","id",-1388402092),null], null), null),k__17450__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17449__auto____$1),self__.__meta),k__17450__auto__);
} else {
return (new me_time.models.task_list.TaskContext(self__.task,self__.id,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17450__auto__)),null));
}
});

me_time.models.task_list.TaskContext.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17447__auto__,k__17448__auto__,G__18430){
var self__ = this;
var this__17447__auto____$1 = this;
var pred__18434 = cljs.core.keyword_identical_QMARK_;
var expr__18435 = k__17448__auto__;
if(cljs.core.truth_(pred__18434.call(null,new cljs.core.Keyword(null,"task","task",-1476607993),expr__18435))){
return (new me_time.models.task_list.TaskContext(G__18430,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18434.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__18435))){
return (new me_time.models.task_list.TaskContext(self__.task,G__18430,self__.__meta,self__.__extmap,null));
} else {
return (new me_time.models.task_list.TaskContext(self__.task,self__.id,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17448__auto__,G__18430),null));
}
}
});

me_time.models.task_list.TaskContext.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17452__auto__){
var self__ = this;
var this__17452__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"task","task",-1476607993),self__.task],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null))], null),self__.__extmap));
});

me_time.models.task_list.TaskContext.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17439__auto__,G__18430){
var self__ = this;
var this__17439__auto____$1 = this;
return (new me_time.models.task_list.TaskContext(self__.task,self__.id,G__18430,self__.__extmap,self__.__hash));
});

me_time.models.task_list.TaskContext.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17445__auto__,entry__17446__auto__){
var self__ = this;
var this__17445__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17446__auto__)){
return cljs.core._assoc.call(null,this__17445__auto____$1,cljs.core._nth.call(null,entry__17446__auto__,(0)),cljs.core._nth.call(null,entry__17446__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17445__auto____$1,entry__17446__auto__);
}
});

me_time.models.task_list.TaskContext.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"task","task",163923534,null),new cljs.core.Symbol(null,"id","id",252129435,null)], null);
});

me_time.models.task_list.TaskContext.cljs$lang$type = true;

me_time.models.task_list.TaskContext.cljs$lang$ctorPrSeq = (function (this__17474__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"me-time.models.task-list/TaskContext");
});

me_time.models.task_list.TaskContext.cljs$lang$ctorPrWriter = (function (this__17474__auto__,writer__17475__auto__){
return cljs.core._write.call(null,writer__17475__auto__,"me-time.models.task-list/TaskContext");
});

me_time.models.task_list.__GT_TaskContext = (function me_time$models$task_list$__GT_TaskContext(task,id){
return (new me_time.models.task_list.TaskContext(task,id,null,null,null));
});

me_time.models.task_list.map__GT_TaskContext = (function me_time$models$task_list$map__GT_TaskContext(G__18432){
return (new me_time.models.task_list.TaskContext(new cljs.core.Keyword(null,"task","task",-1476607993).cljs$core$IFn$_invoke$arity$1(G__18432),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__18432),null,cljs.core.dissoc.call(null,G__18432,new cljs.core.Keyword(null,"task","task",-1476607993),new cljs.core.Keyword(null,"id","id",-1388402092)),null));
});


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
me_time.models.task_list.TaskList = (function (task_contexts,next_id,__meta,__extmap,__hash){
this.task_contexts = task_contexts;
this.next_id = next_id;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
me_time.models.task_list.TaskList.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17440__auto__,k__17441__auto__){
var self__ = this;
var this__17440__auto____$1 = this;
return cljs.core._lookup.call(null,this__17440__auto____$1,k__17441__auto__,null);
});

me_time.models.task_list.TaskList.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17442__auto__,k18439,else__17443__auto__){
var self__ = this;
var this__17442__auto____$1 = this;
var G__18441 = (((k18439 instanceof cljs.core.Keyword))?k18439.fqn:null);
switch (G__18441) {
case "task-contexts":
return self__.task_contexts;

break;
case "next-id":
return self__.next_id;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k18439,else__17443__auto__);

}
});

me_time.models.task_list.TaskList.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17454__auto__,writer__17455__auto__,opts__17456__auto__){
var self__ = this;
var this__17454__auto____$1 = this;
var pr_pair__17457__auto__ = ((function (this__17454__auto____$1){
return (function (keyval__17458__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17455__auto__,cljs.core.pr_writer,""," ","",opts__17456__auto__,keyval__17458__auto__);
});})(this__17454__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17455__auto__,pr_pair__17457__auto__,"#me-time.models.task-list.TaskList{",", ","}",opts__17456__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"task-contexts","task-contexts",-1866515389),self__.task_contexts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"next-id","next-id",-224240762),self__.next_id],null))], null),self__.__extmap));
});

me_time.models.task_list.TaskList.prototype.cljs$core$IIterable$ = true;

me_time.models.task_list.TaskList.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18438){
var self__ = this;
var G__18438__$1 = this;
return (new cljs.core.RecordIter((0),G__18438__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"task-contexts","task-contexts",-1866515389),new cljs.core.Keyword(null,"next-id","next-id",-224240762)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

me_time.models.task_list.TaskList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17438__auto__){
var self__ = this;
var this__17438__auto____$1 = this;
return self__.__meta;
});

me_time.models.task_list.TaskList.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17434__auto__){
var self__ = this;
var this__17434__auto____$1 = this;
return (new me_time.models.task_list.TaskList(self__.task_contexts,self__.next_id,self__.__meta,self__.__extmap,self__.__hash));
});

me_time.models.task_list.TaskList.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17444__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

me_time.models.task_list.TaskList.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17435__auto__){
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

me_time.models.task_list.TaskList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17436__auto__,other__17437__auto__){
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

me_time.models.task_list.TaskList.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17449__auto__,k__17450__auto__){
var self__ = this;
var this__17449__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"task-contexts","task-contexts",-1866515389),null,new cljs.core.Keyword(null,"next-id","next-id",-224240762),null], null), null),k__17450__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17449__auto____$1),self__.__meta),k__17450__auto__);
} else {
return (new me_time.models.task_list.TaskList(self__.task_contexts,self__.next_id,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17450__auto__)),null));
}
});

me_time.models.task_list.TaskList.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17447__auto__,k__17448__auto__,G__18438){
var self__ = this;
var this__17447__auto____$1 = this;
var pred__18442 = cljs.core.keyword_identical_QMARK_;
var expr__18443 = k__17448__auto__;
if(cljs.core.truth_(pred__18442.call(null,new cljs.core.Keyword(null,"task-contexts","task-contexts",-1866515389),expr__18443))){
return (new me_time.models.task_list.TaskList(G__18438,self__.next_id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18442.call(null,new cljs.core.Keyword(null,"next-id","next-id",-224240762),expr__18443))){
return (new me_time.models.task_list.TaskList(self__.task_contexts,G__18438,self__.__meta,self__.__extmap,null));
} else {
return (new me_time.models.task_list.TaskList(self__.task_contexts,self__.next_id,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17448__auto__,G__18438),null));
}
}
});

me_time.models.task_list.TaskList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17452__auto__){
var self__ = this;
var this__17452__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"task-contexts","task-contexts",-1866515389),self__.task_contexts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"next-id","next-id",-224240762),self__.next_id],null))], null),self__.__extmap));
});

me_time.models.task_list.TaskList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17439__auto__,G__18438){
var self__ = this;
var this__17439__auto____$1 = this;
return (new me_time.models.task_list.TaskList(self__.task_contexts,self__.next_id,G__18438,self__.__extmap,self__.__hash));
});

me_time.models.task_list.TaskList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17445__auto__,entry__17446__auto__){
var self__ = this;
var this__17445__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17446__auto__)){
return cljs.core._assoc.call(null,this__17445__auto____$1,cljs.core._nth.call(null,entry__17446__auto__,(0)),cljs.core._nth.call(null,entry__17446__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17445__auto____$1,entry__17446__auto__);
}
});

me_time.models.task_list.TaskList.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"task-contexts","task-contexts",-225983862,null),new cljs.core.Symbol(null,"next-id","next-id",1416290765,null)], null);
});

me_time.models.task_list.TaskList.cljs$lang$type = true;

me_time.models.task_list.TaskList.cljs$lang$ctorPrSeq = (function (this__17474__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"me-time.models.task-list/TaskList");
});

me_time.models.task_list.TaskList.cljs$lang$ctorPrWriter = (function (this__17474__auto__,writer__17475__auto__){
return cljs.core._write.call(null,writer__17475__auto__,"me-time.models.task-list/TaskList");
});

me_time.models.task_list.__GT_TaskList = (function me_time$models$task_list$__GT_TaskList(task_contexts,next_id){
return (new me_time.models.task_list.TaskList(task_contexts,next_id,null,null,null));
});

me_time.models.task_list.map__GT_TaskList = (function me_time$models$task_list$map__GT_TaskList(G__18440){
return (new me_time.models.task_list.TaskList(new cljs.core.Keyword(null,"task-contexts","task-contexts",-1866515389).cljs$core$IFn$_invoke$arity$1(G__18440),new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(G__18440),null,cljs.core.dissoc.call(null,G__18440,new cljs.core.Keyword(null,"task-contexts","task-contexts",-1866515389),new cljs.core.Keyword(null,"next-id","next-id",-224240762)),null));
});

me_time.models.task_list.create_task_list = (function me_time$models$task_list$create_task_list(){
return me_time.models.task_list.__GT_TaskList.call(null,cljs.core.PersistentVector.EMPTY,(0));
});
me_time.models.task_list.create_task_context = (function me_time$models$task_list$create_task_context(task,id){
return me_time.models.task_list.__GT_TaskContext.call(null,task,id);
});
me_time.models.task_list.wrap_task_list = (function me_time$models$task_list$wrap_task_list(task_list){
return me_time.models.task_list.map__GT_TaskList.call(null,task_list);
});
me_time.models.task_list.add_task = (function me_time$models$task_list$add_task(task_list,name){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,task_list,new cljs.core.Keyword(null,"task-contexts","task-contexts",-1866515389),cljs.core.concat.call(null,new cljs.core.Keyword(null,"task-contexts","task-contexts",-1866515389).cljs$core$IFn$_invoke$arity$1(task_list),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [me_time.models.task_list.create_task_context.call(null,me_time.models.task.create_task.call(null,name),new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(task_list))], null))),new cljs.core.Keyword(null,"next-id","next-id",-224240762),(new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(task_list) + (1)));
});
me_time.models.task_list.remove_task = (function me_time$models$task_list$remove_task(task_list,id){
return cljs.core.remove.call(null,(function (context){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(context),id);
}),new cljs.core.Keyword(null,"task-contexts","task-contexts",-1866515389).cljs$core$IFn$_invoke$arity$1(task_list));
});
me_time.models.task_list.update_task_id = (function me_time$models$task_list$update_task_id(var_args){
var args__17891__auto__ = [];
var len__17884__auto___18450 = arguments.length;
var i__17885__auto___18451 = (0);
while(true){
if((i__17885__auto___18451 < len__17884__auto___18450)){
args__17891__auto__.push((arguments[i__17885__auto___18451]));

var G__18452 = (i__17885__auto___18451 + (1));
i__17885__auto___18451 = G__18452;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((3) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((3)),(0))):null);
return me_time.models.task_list.update_task_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17892__auto__);
});

me_time.models.task_list.update_task_id.cljs$core$IFn$_invoke$arity$variadic = (function (task_list,id,update_fn,args){
return cljs.core.assoc.call(null,task_list,new cljs.core.Keyword(null,"task-contexts","task-contexts",-1866515389),cljs.core.map.call(null,(function (task_context){
var task = new cljs.core.Keyword(null,"task","task",-1476607993).cljs$core$IFn$_invoke$arity$1(task_context);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task_context),id)){
return cljs.core.assoc.call(null,task_context,new cljs.core.Keyword(null,"task","task",-1476607993),cljs.core.apply.call(null,update_fn,cljs.core.cons.call(null,task,args)));
} else {
return task_context;
}
}),new cljs.core.Keyword(null,"task-contexts","task-contexts",-1866515389).cljs$core$IFn$_invoke$arity$1(task_list)));
});

me_time.models.task_list.update_task_id.cljs$lang$maxFixedArity = (3);

me_time.models.task_list.update_task_id.cljs$lang$applyTo = (function (seq18446){
var G__18447 = cljs.core.first.call(null,seq18446);
var seq18446__$1 = cljs.core.next.call(null,seq18446);
var G__18448 = cljs.core.first.call(null,seq18446__$1);
var seq18446__$2 = cljs.core.next.call(null,seq18446__$1);
var G__18449 = cljs.core.first.call(null,seq18446__$2);
var seq18446__$3 = cljs.core.next.call(null,seq18446__$2);
return me_time.models.task_list.update_task_id.cljs$core$IFn$_invoke$arity$variadic(G__18447,G__18448,G__18449,seq18446__$3);
});
me_time.models.task_list.update_all_task = (function me_time$models$task_list$update_all_task(var_args){
var args__17891__auto__ = [];
var len__17884__auto___18456 = arguments.length;
var i__17885__auto___18457 = (0);
while(true){
if((i__17885__auto___18457 < len__17884__auto___18456)){
args__17891__auto__.push((arguments[i__17885__auto___18457]));

var G__18458 = (i__17885__auto___18457 + (1));
i__17885__auto___18457 = G__18458;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((2) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((2)),(0))):null);
return me_time.models.task_list.update_all_task.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17892__auto__);
});

me_time.models.task_list.update_all_task.cljs$core$IFn$_invoke$arity$variadic = (function (task_list,update_fn,args){
return cljs.core.assoc.call(null,task_list,new cljs.core.Keyword(null,"task-contexts","task-contexts",-1866515389),cljs.core.map.call(null,(function (task_context){
var task = new cljs.core.Keyword(null,"task","task",-1476607993).cljs$core$IFn$_invoke$arity$1(task_context);
return cljs.core.assoc.call(null,task_context,new cljs.core.Keyword(null,"task","task",-1476607993),cljs.core.apply.call(null,update_fn,cljs.core.cons.call(null,new cljs.core.Keyword(null,"task","task",-1476607993).cljs$core$IFn$_invoke$arity$1(task_context),args)));
}),new cljs.core.Keyword(null,"task-contexts","task-contexts",-1866515389).cljs$core$IFn$_invoke$arity$1(task_list)));
});

me_time.models.task_list.update_all_task.cljs$lang$maxFixedArity = (2);

me_time.models.task_list.update_all_task.cljs$lang$applyTo = (function (seq18453){
var G__18454 = cljs.core.first.call(null,seq18453);
var seq18453__$1 = cljs.core.next.call(null,seq18453);
var G__18455 = cljs.core.first.call(null,seq18453__$1);
var seq18453__$2 = cljs.core.next.call(null,seq18453__$1);
return me_time.models.task_list.update_all_task.cljs$core$IFn$_invoke$arity$variadic(G__18454,G__18455,seq18453__$2);
});

//# sourceMappingURL=task_list.js.map