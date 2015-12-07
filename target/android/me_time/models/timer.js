// Compiled by ClojureScript 1.7.170 {}
goog.provide('me_time.models.timer');
goog.require('cljs.core');

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
me_time.models.timer.Timer = (function (duration_milliseconds,active,start_time,__meta,__extmap,__hash){
this.duration_milliseconds = duration_milliseconds;
this.active = active;
this.start_time = start_time;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
me_time.models.timer.Timer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17440__auto__,k__17441__auto__){
var self__ = this;
var this__17440__auto____$1 = this;
return cljs.core._lookup.call(null,this__17440__auto____$1,k__17441__auto__,null);
});

me_time.models.timer.Timer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17442__auto__,k18405,else__17443__auto__){
var self__ = this;
var this__17442__auto____$1 = this;
var G__18407 = (((k18405 instanceof cljs.core.Keyword))?k18405.fqn:null);
switch (G__18407) {
case "duration-milliseconds":
return self__.duration_milliseconds;

break;
case "active":
return self__.active;

break;
case "start-time":
return self__.start_time;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k18405,else__17443__auto__);

}
});

me_time.models.timer.Timer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17454__auto__,writer__17455__auto__,opts__17456__auto__){
var self__ = this;
var this__17454__auto____$1 = this;
var pr_pair__17457__auto__ = ((function (this__17454__auto____$1){
return (function (keyval__17458__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17455__auto__,cljs.core.pr_writer,""," ","",opts__17456__auto__,keyval__17458__auto__);
});})(this__17454__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17455__auto__,pr_pair__17457__auto__,"#me-time.models.timer.Timer{",", ","}",opts__17456__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"duration-milliseconds","duration-milliseconds",650739461),self__.duration_milliseconds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active","active",1895962068),self__.active],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-time","start-time",814801386),self__.start_time],null))], null),self__.__extmap));
});

me_time.models.timer.Timer.prototype.cljs$core$IIterable$ = true;

me_time.models.timer.Timer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18404){
var self__ = this;
var G__18404__$1 = this;
return (new cljs.core.RecordIter((0),G__18404__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"duration-milliseconds","duration-milliseconds",650739461),new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"start-time","start-time",814801386)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

me_time.models.timer.Timer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17438__auto__){
var self__ = this;
var this__17438__auto____$1 = this;
return self__.__meta;
});

me_time.models.timer.Timer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17434__auto__){
var self__ = this;
var this__17434__auto____$1 = this;
return (new me_time.models.timer.Timer(self__.duration_milliseconds,self__.active,self__.start_time,self__.__meta,self__.__extmap,self__.__hash));
});

me_time.models.timer.Timer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17444__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

me_time.models.timer.Timer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17435__auto__){
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

me_time.models.timer.Timer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17436__auto__,other__17437__auto__){
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

me_time.models.timer.Timer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17449__auto__,k__17450__auto__){
var self__ = this;
var this__17449__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"duration-milliseconds","duration-milliseconds",650739461),null,new cljs.core.Keyword(null,"start-time","start-time",814801386),null,new cljs.core.Keyword(null,"active","active",1895962068),null], null), null),k__17450__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17449__auto____$1),self__.__meta),k__17450__auto__);
} else {
return (new me_time.models.timer.Timer(self__.duration_milliseconds,self__.active,self__.start_time,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17450__auto__)),null));
}
});

me_time.models.timer.Timer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17447__auto__,k__17448__auto__,G__18404){
var self__ = this;
var this__17447__auto____$1 = this;
var pred__18408 = cljs.core.keyword_identical_QMARK_;
var expr__18409 = k__17448__auto__;
if(cljs.core.truth_(pred__18408.call(null,new cljs.core.Keyword(null,"duration-milliseconds","duration-milliseconds",650739461),expr__18409))){
return (new me_time.models.timer.Timer(G__18404,self__.active,self__.start_time,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18408.call(null,new cljs.core.Keyword(null,"active","active",1895962068),expr__18409))){
return (new me_time.models.timer.Timer(self__.duration_milliseconds,G__18404,self__.start_time,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18408.call(null,new cljs.core.Keyword(null,"start-time","start-time",814801386),expr__18409))){
return (new me_time.models.timer.Timer(self__.duration_milliseconds,self__.active,G__18404,self__.__meta,self__.__extmap,null));
} else {
return (new me_time.models.timer.Timer(self__.duration_milliseconds,self__.active,self__.start_time,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17448__auto__,G__18404),null));
}
}
}
});

me_time.models.timer.Timer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17452__auto__){
var self__ = this;
var this__17452__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"duration-milliseconds","duration-milliseconds",650739461),self__.duration_milliseconds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active","active",1895962068),self__.active],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-time","start-time",814801386),self__.start_time],null))], null),self__.__extmap));
});

me_time.models.timer.Timer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17439__auto__,G__18404){
var self__ = this;
var this__17439__auto____$1 = this;
return (new me_time.models.timer.Timer(self__.duration_milliseconds,self__.active,self__.start_time,G__18404,self__.__extmap,self__.__hash));
});

me_time.models.timer.Timer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17445__auto__,entry__17446__auto__){
var self__ = this;
var this__17445__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17446__auto__)){
return cljs.core._assoc.call(null,this__17445__auto____$1,cljs.core._nth.call(null,entry__17446__auto__,(0)),cljs.core._nth.call(null,entry__17446__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17445__auto____$1,entry__17446__auto__);
}
});

me_time.models.timer.Timer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"duration-milliseconds","duration-milliseconds",-2003696308,null),new cljs.core.Symbol(null,"active","active",-758473701,null),new cljs.core.Symbol(null,"start-time","start-time",-1839634383,null)], null);
});

me_time.models.timer.Timer.cljs$lang$type = true;

me_time.models.timer.Timer.cljs$lang$ctorPrSeq = (function (this__17474__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"me-time.models.timer/Timer");
});

me_time.models.timer.Timer.cljs$lang$ctorPrWriter = (function (this__17474__auto__,writer__17475__auto__){
return cljs.core._write.call(null,writer__17475__auto__,"me-time.models.timer/Timer");
});

me_time.models.timer.__GT_Timer = (function me_time$models$timer$__GT_Timer(duration_milliseconds,active,start_time){
return (new me_time.models.timer.Timer(duration_milliseconds,active,start_time,null,null,null));
});

me_time.models.timer.map__GT_Timer = (function me_time$models$timer$map__GT_Timer(G__18406){
return (new me_time.models.timer.Timer(new cljs.core.Keyword(null,"duration-milliseconds","duration-milliseconds",650739461).cljs$core$IFn$_invoke$arity$1(G__18406),new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(G__18406),new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(G__18406),null,cljs.core.dissoc.call(null,G__18406,new cljs.core.Keyword(null,"duration-milliseconds","duration-milliseconds",650739461),new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"start-time","start-time",814801386)),null));
});

me_time.models.timer.timer_running_QMARK_ = (function me_time$models$timer$timer_running_QMARK_(timer){
return new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(timer);
});
me_time.models.timer.wrap_timer = (function me_time$models$timer$wrap_timer(timer){
return me_time.models.timer.map__GT_Timer.call(null,timer);
});
me_time.models.timer.create_timer = (function me_time$models$timer$create_timer(){
return me_time.models.timer.__GT_Timer.call(null,(0),false,(0));
});
me_time.models.timer.update_tick = (function me_time$models$timer$update_tick(timer,date_time_now){
if(cljs.core.truth_(me_time.models.timer.timer_running_QMARK_.call(null,timer))){
return cljs.core.assoc.call(null,timer,new cljs.core.Keyword(null,"duration-milliseconds","duration-milliseconds",650739461),(date_time_now - new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(timer)));
} else {
return timer;
}
});
me_time.models.timer.stop_timer = (function me_time$models$timer$stop_timer(timer){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,timer,new cljs.core.Keyword(null,"active","active",1895962068),false),new cljs.core.Keyword(null,"start-time","start-time",814801386),(0));
});
me_time.models.timer.start_timer = (function me_time$models$timer$start_timer(timer,date_time_now){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,timer,new cljs.core.Keyword(null,"active","active",1895962068),true),new cljs.core.Keyword(null,"start-time","start-time",814801386),(date_time_now - new cljs.core.Keyword(null,"duration-milliseconds","duration-milliseconds",650739461).cljs$core$IFn$_invoke$arity$1(timer)));
});

//# sourceMappingURL=timer.js.map