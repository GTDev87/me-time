// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args19795 = [];
var len__17884__auto___19801 = arguments.length;
var i__17885__auto___19802 = (0);
while(true){
if((i__17885__auto___19802 < len__17884__auto___19801)){
args19795.push((arguments[i__17885__auto___19802]));

var G__19803 = (i__17885__auto___19802 + (1));
i__17885__auto___19802 = G__19803;
continue;
} else {
}
break;
}

var G__19797 = args19795.length;
switch (G__19797) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19795.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async19798 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19798 = (function (f,blockable,meta19799){
this.f = f;
this.blockable = blockable;
this.meta19799 = meta19799;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19800,meta19799__$1){
var self__ = this;
var _19800__$1 = this;
return (new cljs.core.async.t_cljs$core$async19798(self__.f,self__.blockable,meta19799__$1));
});

cljs.core.async.t_cljs$core$async19798.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19800){
var self__ = this;
var _19800__$1 = this;
return self__.meta19799;
});

cljs.core.async.t_cljs$core$async19798.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19798.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19798.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async19798.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async19798.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta19799","meta19799",1287175355,null)], null);
});

cljs.core.async.t_cljs$core$async19798.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19798.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19798";

cljs.core.async.t_cljs$core$async19798.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async19798");
});

cljs.core.async.__GT_t_cljs$core$async19798 = (function cljs$core$async$__GT_t_cljs$core$async19798(f__$1,blockable__$1,meta19799){
return (new cljs.core.async.t_cljs$core$async19798(f__$1,blockable__$1,meta19799));
});

}

return (new cljs.core.async.t_cljs$core$async19798(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args19807 = [];
var len__17884__auto___19810 = arguments.length;
var i__17885__auto___19811 = (0);
while(true){
if((i__17885__auto___19811 < len__17884__auto___19810)){
args19807.push((arguments[i__17885__auto___19811]));

var G__19812 = (i__17885__auto___19811 + (1));
i__17885__auto___19811 = G__19812;
continue;
} else {
}
break;
}

var G__19809 = args19807.length;
switch (G__19809) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19807.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args19814 = [];
var len__17884__auto___19817 = arguments.length;
var i__17885__auto___19818 = (0);
while(true){
if((i__17885__auto___19818 < len__17884__auto___19817)){
args19814.push((arguments[i__17885__auto___19818]));

var G__19819 = (i__17885__auto___19818 + (1));
i__17885__auto___19818 = G__19819;
continue;
} else {
}
break;
}

var G__19816 = args19814.length;
switch (G__19816) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19814.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args19821 = [];
var len__17884__auto___19824 = arguments.length;
var i__17885__auto___19825 = (0);
while(true){
if((i__17885__auto___19825 < len__17884__auto___19824)){
args19821.push((arguments[i__17885__auto___19825]));

var G__19826 = (i__17885__auto___19825 + (1));
i__17885__auto___19825 = G__19826;
continue;
} else {
}
break;
}

var G__19823 = args19821.length;
switch (G__19823) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19821.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_19828 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_19828);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_19828,ret){
return (function (){
return fn1.call(null,val_19828);
});})(val_19828,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args19829 = [];
var len__17884__auto___19832 = arguments.length;
var i__17885__auto___19833 = (0);
while(true){
if((i__17885__auto___19833 < len__17884__auto___19832)){
args19829.push((arguments[i__17885__auto___19833]));

var G__19834 = (i__17885__auto___19833 + (1));
i__17885__auto___19833 = G__19834;
continue;
} else {
}
break;
}

var G__19831 = args19829.length;
switch (G__19831) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19829.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17729__auto___19836 = n;
var x_19837 = (0);
while(true){
if((x_19837 < n__17729__auto___19836)){
(a[x_19837] = (0));

var G__19838 = (x_19837 + (1));
x_19837 = G__19838;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__19839 = (i + (1));
i = G__19839;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async19843 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19843 = (function (alt_flag,flag,meta19844){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta19844 = meta19844;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19845,meta19844__$1){
var self__ = this;
var _19845__$1 = this;
return (new cljs.core.async.t_cljs$core$async19843(self__.alt_flag,self__.flag,meta19844__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async19843.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19845){
var self__ = this;
var _19845__$1 = this;
return self__.meta19844;
});})(flag))
;

cljs.core.async.t_cljs$core$async19843.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19843.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async19843.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19843.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19843.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta19844","meta19844",906223831,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async19843.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19843.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19843";

cljs.core.async.t_cljs$core$async19843.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async19843");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async19843 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async19843(alt_flag__$1,flag__$1,meta19844){
return (new cljs.core.async.t_cljs$core$async19843(alt_flag__$1,flag__$1,meta19844));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async19843(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async19849 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19849 = (function (alt_handler,flag,cb,meta19850){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta19850 = meta19850;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19851,meta19850__$1){
var self__ = this;
var _19851__$1 = this;
return (new cljs.core.async.t_cljs$core$async19849(self__.alt_handler,self__.flag,self__.cb,meta19850__$1));
});

cljs.core.async.t_cljs$core$async19849.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19851){
var self__ = this;
var _19851__$1 = this;
return self__.meta19850;
});

cljs.core.async.t_cljs$core$async19849.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19849.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async19849.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19849.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async19849.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta19850","meta19850",-631118183,null)], null);
});

cljs.core.async.t_cljs$core$async19849.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19849.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19849";

cljs.core.async.t_cljs$core$async19849.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async19849");
});

cljs.core.async.__GT_t_cljs$core$async19849 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async19849(alt_handler__$1,flag__$1,cb__$1,meta19850){
return (new cljs.core.async.t_cljs$core$async19849(alt_handler__$1,flag__$1,cb__$1,meta19850));
});

}

return (new cljs.core.async.t_cljs$core$async19849(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19852_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19852_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19853_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19853_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16826__auto__ = wport;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19854 = (i + (1));
i = G__19854;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16826__auto__ = ret;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16814__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16814__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16814__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17891__auto__ = [];
var len__17884__auto___19860 = arguments.length;
var i__17885__auto___19861 = (0);
while(true){
if((i__17885__auto___19861 < len__17884__auto___19860)){
args__17891__auto__.push((arguments[i__17885__auto___19861]));

var G__19862 = (i__17885__auto___19861 + (1));
i__17885__auto___19861 = G__19862;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((1) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17892__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__19857){
var map__19858 = p__19857;
var map__19858__$1 = ((((!((map__19858 == null)))?((((map__19858.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19858.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19858):map__19858);
var opts = map__19858__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq19855){
var G__19856 = cljs.core.first.call(null,seq19855);
var seq19855__$1 = cljs.core.next.call(null,seq19855);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19856,seq19855__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args19863 = [];
var len__17884__auto___19913 = arguments.length;
var i__17885__auto___19914 = (0);
while(true){
if((i__17885__auto___19914 < len__17884__auto___19913)){
args19863.push((arguments[i__17885__auto___19914]));

var G__19915 = (i__17885__auto___19914 + (1));
i__17885__auto___19914 = G__19915;
continue;
} else {
}
break;
}

var G__19865 = args19863.length;
switch (G__19865) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19863.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19750__auto___19917 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19750__auto___19917){
return (function (){
var f__19751__auto__ = (function (){var switch__19638__auto__ = ((function (c__19750__auto___19917){
return (function (state_19889){
var state_val_19890 = (state_19889[(1)]);
if((state_val_19890 === (7))){
var inst_19885 = (state_19889[(2)]);
var state_19889__$1 = state_19889;
var statearr_19891_19918 = state_19889__$1;
(statearr_19891_19918[(2)] = inst_19885);

(statearr_19891_19918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19890 === (1))){
var state_19889__$1 = state_19889;
var statearr_19892_19919 = state_19889__$1;
(statearr_19892_19919[(2)] = null);

(statearr_19892_19919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19890 === (4))){
var inst_19868 = (state_19889[(7)]);
var inst_19868__$1 = (state_19889[(2)]);
var inst_19869 = (inst_19868__$1 == null);
var state_19889__$1 = (function (){var statearr_19893 = state_19889;
(statearr_19893[(7)] = inst_19868__$1);

return statearr_19893;
})();
if(cljs.core.truth_(inst_19869)){
var statearr_19894_19920 = state_19889__$1;
(statearr_19894_19920[(1)] = (5));

} else {
var statearr_19895_19921 = state_19889__$1;
(statearr_19895_19921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19890 === (13))){
var state_19889__$1 = state_19889;
var statearr_19896_19922 = state_19889__$1;
(statearr_19896_19922[(2)] = null);

(statearr_19896_19922[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19890 === (6))){
var inst_19868 = (state_19889[(7)]);
var state_19889__$1 = state_19889;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19889__$1,(11),to,inst_19868);
} else {
if((state_val_19890 === (3))){
var inst_19887 = (state_19889[(2)]);
var state_19889__$1 = state_19889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19889__$1,inst_19887);
} else {
if((state_val_19890 === (12))){
var state_19889__$1 = state_19889;
var statearr_19897_19923 = state_19889__$1;
(statearr_19897_19923[(2)] = null);

(statearr_19897_19923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19890 === (2))){
var state_19889__$1 = state_19889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19889__$1,(4),from);
} else {
if((state_val_19890 === (11))){
var inst_19878 = (state_19889[(2)]);
var state_19889__$1 = state_19889;
if(cljs.core.truth_(inst_19878)){
var statearr_19898_19924 = state_19889__$1;
(statearr_19898_19924[(1)] = (12));

} else {
var statearr_19899_19925 = state_19889__$1;
(statearr_19899_19925[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19890 === (9))){
var state_19889__$1 = state_19889;
var statearr_19900_19926 = state_19889__$1;
(statearr_19900_19926[(2)] = null);

(statearr_19900_19926[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19890 === (5))){
var state_19889__$1 = state_19889;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19901_19927 = state_19889__$1;
(statearr_19901_19927[(1)] = (8));

} else {
var statearr_19902_19928 = state_19889__$1;
(statearr_19902_19928[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19890 === (14))){
var inst_19883 = (state_19889[(2)]);
var state_19889__$1 = state_19889;
var statearr_19903_19929 = state_19889__$1;
(statearr_19903_19929[(2)] = inst_19883);

(statearr_19903_19929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19890 === (10))){
var inst_19875 = (state_19889[(2)]);
var state_19889__$1 = state_19889;
var statearr_19904_19930 = state_19889__$1;
(statearr_19904_19930[(2)] = inst_19875);

(statearr_19904_19930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19890 === (8))){
var inst_19872 = cljs.core.async.close_BANG_.call(null,to);
var state_19889__$1 = state_19889;
var statearr_19905_19931 = state_19889__$1;
(statearr_19905_19931[(2)] = inst_19872);

(statearr_19905_19931[(1)] = (10));


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
});})(c__19750__auto___19917))
;
return ((function (switch__19638__auto__,c__19750__auto___19917){
return (function() {
var cljs$core$async$state_machine__19639__auto__ = null;
var cljs$core$async$state_machine__19639__auto____0 = (function (){
var statearr_19909 = [null,null,null,null,null,null,null,null];
(statearr_19909[(0)] = cljs$core$async$state_machine__19639__auto__);

(statearr_19909[(1)] = (1));

return statearr_19909;
});
var cljs$core$async$state_machine__19639__auto____1 = (function (state_19889){
while(true){
var ret_value__19640__auto__ = (function (){try{while(true){
var result__19641__auto__ = switch__19638__auto__.call(null,state_19889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19641__auto__;
}
break;
}
}catch (e19910){if((e19910 instanceof Object)){
var ex__19642__auto__ = e19910;
var statearr_19911_19932 = state_19889;
(statearr_19911_19932[(5)] = ex__19642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19933 = state_19889;
state_19889 = G__19933;
continue;
} else {
return ret_value__19640__auto__;
}
break;
}
});
cljs$core$async$state_machine__19639__auto__ = function(state_19889){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19639__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19639__auto____1.call(this,state_19889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19639__auto____0;
cljs$core$async$state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19639__auto____1;
return cljs$core$async$state_machine__19639__auto__;
})()
;})(switch__19638__auto__,c__19750__auto___19917))
})();
var state__19752__auto__ = (function (){var statearr_19912 = f__19751__auto__.call(null);
(statearr_19912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19750__auto___19917);

return statearr_19912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19752__auto__);
});})(c__19750__auto___19917))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__20117){
var vec__20118 = p__20117;
var v = cljs.core.nth.call(null,vec__20118,(0),null);
var p = cljs.core.nth.call(null,vec__20118,(1),null);
var job = vec__20118;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19750__auto___20300 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19750__auto___20300,res,vec__20118,v,p,job,jobs,results){
return (function (){
var f__19751__auto__ = (function (){var switch__19638__auto__ = ((function (c__19750__auto___20300,res,vec__20118,v,p,job,jobs,results){
return (function (state_20123){
var state_val_20124 = (state_20123[(1)]);
if((state_val_20124 === (1))){
var state_20123__$1 = state_20123;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20123__$1,(2),res,v);
} else {
if((state_val_20124 === (2))){
var inst_20120 = (state_20123[(2)]);
var inst_20121 = cljs.core.async.close_BANG_.call(null,res);
var state_20123__$1 = (function (){var statearr_20125 = state_20123;
(statearr_20125[(7)] = inst_20120);

return statearr_20125;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20123__$1,inst_20121);
} else {
return null;
}
}
});})(c__19750__auto___20300,res,vec__20118,v,p,job,jobs,results))
;
return ((function (switch__19638__auto__,c__19750__auto___20300,res,vec__20118,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19639__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19639__auto____0 = (function (){
var statearr_20129 = [null,null,null,null,null,null,null,null];
(statearr_20129[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19639__auto__);

(statearr_20129[(1)] = (1));

return statearr_20129;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19639__auto____1 = (function (state_20123){
while(true){
var ret_value__19640__auto__ = (function (){try{while(true){
var result__19641__auto__ = switch__19638__auto__.call(null,state_20123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19641__auto__;
}
break;
}
}catch (e20130){if((e20130 instanceof Object)){
var ex__19642__auto__ = e20130;
var statearr_20131_20301 = state_20123;
(statearr_20131_20301[(5)] = ex__19642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20302 = state_20123;
state_20123 = G__20302;
continue;
} else {
return ret_value__19640__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19639__auto__ = function(state_20123){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19639__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19639__auto____1.call(this,state_20123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19639__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19639__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19639__auto__;
})()
;})(switch__19638__auto__,c__19750__auto___20300,res,vec__20118,v,p,job,jobs,results))
})();
var state__19752__auto__ = (function (){var statearr_20132 = f__19751__auto__.call(null);
(statearr_20132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19750__auto___20300);

return statearr_20132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19752__auto__);
});})(c__19750__auto___20300,res,vec__20118,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20133){
var vec__20134 = p__20133;
var v = cljs.core.nth.call(null,vec__20134,(0),null);
var p = cljs.core.nth.call(null,vec__20134,(1),null);
var job = vec__20134;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17729__auto___20303 = n;
var __20304 = (0);
while(true){
if((__20304 < n__17729__auto___20303)){
var G__20135_20305 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20135_20305) {
case "compute":
var c__19750__auto___20307 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20304,c__19750__auto___20307,G__20135_20305,n__17729__auto___20303,jobs,results,process,async){
return (function (){
var f__19751__auto__ = (function (){var switch__19638__auto__ = ((function (__20304,c__19750__auto___20307,G__20135_20305,n__17729__auto___20303,jobs,results,process,async){
return (function (state_20148){
var state_val_20149 = (state_20148[(1)]);
if((state_val_20149 === (1))){
var state_20148__$1 = state_20148;
var statearr_20150_20308 = state_20148__$1;
(statearr_20150_20308[(2)] = null);

(statearr_20150_20308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20149 === (2))){
var state_20148__$1 = state_20148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20148__$1,(4),jobs);
} else {
if((state_val_20149 === (3))){
var inst_20146 = (state_20148[(2)]);
var state_20148__$1 = state_20148;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20148__$1,inst_20146);
} else {
if((state_val_20149 === (4))){
var inst_20138 = (state_20148[(2)]);
var inst_20139 = process.call(null,inst_20138);
var state_20148__$1 = state_20148;
if(cljs.core.truth_(inst_20139)){
var statearr_20151_20309 = state_20148__$1;
(statearr_20151_20309[(1)] = (5));

} else {
var statearr_20152_20310 = state_20148__$1;
(statearr_20152_20310[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20149 === (5))){
var state_20148__$1 = state_20148;
var statearr_20153_20311 = state_20148__$1;
(statearr_20153_20311[(2)] = null);

(statearr_20153_20311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20149 === (6))){
var state_20148__$1 = state_20148;
var statearr_20154_20312 = state_20148__$1;
(statearr_20154_20312[(2)] = null);

(statearr_20154_20312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20149 === (7))){
var inst_20144 = (state_20148[(2)]);
var state_20148__$1 = state_20148;
var statearr_20155_20313 = state_20148__$1;
(statearr_20155_20313[(2)] = inst_20144);

(statearr_20155_20313[(1)] = (3));


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
});})(__20304,c__19750__auto___20307,G__20135_20305,n__17729__auto___20303,jobs,results,process,async))
;
return ((function (__20304,switch__19638__auto__,c__19750__auto___20307,G__20135_20305,n__17729__auto___20303,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19639__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19639__auto____0 = (function (){
var statearr_20159 = [null,null,null,null,null,null,null];
(statearr_20159[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19639__auto__);

(statearr_20159[(1)] = (1));

return statearr_20159;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19639__auto____1 = (function (state_20148){
while(true){
var ret_value__19640__auto__ = (function (){try{while(true){
var result__19641__auto__ = switch__19638__auto__.call(null,state_20148);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19641__auto__;
}
break;
}
}catch (e20160){if((e20160 instanceof Object)){
var ex__19642__auto__ = e20160;
var statearr_20161_20314 = state_20148;
(statearr_20161_20314[(5)] = ex__19642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20148);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20315 = state_20148;
state_20148 = G__20315;
continue;
} else {
return ret_value__19640__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19639__auto__ = function(state_20148){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19639__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19639__auto____1.call(this,state_20148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19639__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19639__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19639__auto__;
})()
;})(__20304,switch__19638__auto__,c__19750__auto___20307,G__20135_20305,n__17729__auto___20303,jobs,results,process,async))
})();
var state__19752__auto__ = (function (){var statearr_20162 = f__19751__auto__.call(null);
(statearr_20162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19750__auto___20307);

return statearr_20162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19752__auto__);
});})(__20304,c__19750__auto___20307,G__20135_20305,n__17729__auto___20303,jobs,results,process,async))
);


break;
case "async":
var c__19750__auto___20316 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20304,c__19750__auto___20316,G__20135_20305,n__17729__auto___20303,jobs,results,process,async){
return (function (){
var f__19751__auto__ = (function (){var switch__19638__auto__ = ((function (__20304,c__19750__auto___20316,G__20135_20305,n__17729__auto___20303,jobs,results,process,async){
return (function (state_20175){
var state_val_20176 = (state_20175[(1)]);
if((state_val_20176 === (1))){
var state_20175__$1 = state_20175;
var statearr_20177_20317 = state_20175__$1;
(statearr_20177_20317[(2)] = null);

(statearr_20177_20317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20176 === (2))){
var state_20175__$1 = state_20175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20175__$1,(4),jobs);
} else {
if((state_val_20176 === (3))){
var inst_20173 = (state_20175[(2)]);
var state_20175__$1 = state_20175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20175__$1,inst_20173);
} else {
if((state_val_20176 === (4))){
var inst_20165 = (state_20175[(2)]);
var inst_20166 = async.call(null,inst_20165);
var state_20175__$1 = state_20175;
if(cljs.core.truth_(inst_20166)){
var statearr_20178_20318 = state_20175__$1;
(statearr_20178_20318[(1)] = (5));

} else {
var statearr_20179_20319 = state_20175__$1;
(statearr_20179_20319[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20176 === (5))){
var state_20175__$1 = state_20175;
var statearr_20180_20320 = state_20175__$1;
(statearr_20180_20320[(2)] = null);

(statearr_20180_20320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20176 === (6))){
var state_20175__$1 = state_20175;
var statearr_20181_20321 = state_20175__$1;
(statearr_20181_20321[(2)] = null);

(statearr_20181_20321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20176 === (7))){
var inst_20171 = (state_20175[(2)]);
var state_20175__$1 = state_20175;
var statearr_20182_20322 = state_20175__$1;
(statearr_20182_20322[(2)] = inst_20171);

(statearr_20182_20322[(1)] = (3));


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
});})(__20304,c__19750__auto___20316,G__20135_20305,n__17729__auto___20303,jobs,results,process,async))
;
return ((function (__20304,switch__19638__auto__,c__19750__auto___20316,G__20135_20305,n__17729__auto___20303,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19639__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19639__auto____0 = (function (){
var statearr_20186 = [null,null,null,null,null,null,null];
(statearr_20186[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19639__auto__);

(statearr_20186[(1)] = (1));

return statearr_20186;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19639__auto____1 = (function (state_20175){
while(true){
var ret_value__19640__auto__ = (function (){try{while(true){
var result__19641__auto__ = switch__19638__auto__.call(null,state_20175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19641__auto__;
}
break;
}
}catch (e20187){if((e20187 instanceof Object)){
var ex__19642__auto__ = e20187;
var statearr_20188_20323 = state_20175;
(statearr_20188_20323[(5)] = ex__19642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20187;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20324 = state_20175;
state_20175 = G__20324;
continue;
} else {
return ret_value__19640__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19639__auto__ = function(state_20175){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19639__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19639__auto____1.call(this,state_20175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19639__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19639__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19639__auto__;
})()
;})(__20304,switch__19638__auto__,c__19750__auto___20316,G__20135_20305,n__17729__auto___20303,jobs,results,process,async))
})();
var state__19752__auto__ = (function (){var statearr_20189 = f__19751__auto__.call(null);
(statearr_20189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19750__auto___20316);

return statearr_20189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19752__auto__);
});})(__20304,c__19750__auto___20316,G__20135_20305,n__17729__auto___20303,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__20325 = (__20304 + (1));
__20304 = G__20325;
continue;
} else {
}
break;
}

var c__19750__auto___20326 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19750__auto___20326,jobs,results,process,async){
return (function (){
var f__19751__auto__ = (function (){var switch__19638__auto__ = ((function (c__19750__auto___20326,jobs,results,process,async){
return (function (state_20211){
var state_val_20212 = (state_20211[(1)]);
if((state_val_20212 === (1))){
var state_20211__$1 = state_20211;
var statearr_20213_20327 = state_20211__$1;
(statearr_20213_20327[(2)] = null);

(statearr_20213_20327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20212 === (2))){
var state_20211__$1 = state_20211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20211__$1,(4),from);
} else {
if((state_val_20212 === (3))){
var inst_20209 = (state_20211[(2)]);
var state_20211__$1 = state_20211;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20211__$1,inst_20209);
} else {
if((state_val_20212 === (4))){
var inst_20192 = (state_20211[(7)]);
var inst_20192__$1 = (state_20211[(2)]);
var inst_20193 = (inst_20192__$1 == null);
var state_20211__$1 = (function (){var statearr_20214 = state_20211;
(statearr_20214[(7)] = inst_20192__$1);

return statearr_20214;
})();
if(cljs.core.truth_(inst_20193)){
var statearr_20215_20328 = state_20211__$1;
(statearr_20215_20328[(1)] = (5));

} else {
var statearr_20216_20329 = state_20211__$1;
(statearr_20216_20329[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20212 === (5))){
var inst_20195 = cljs.core.async.close_BANG_.call(null,jobs);
var state_20211__$1 = state_20211;
var statearr_20217_20330 = state_20211__$1;
(statearr_20217_20330[(2)] = inst_20195);

(statearr_20217_20330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20212 === (6))){
var inst_20192 = (state_20211[(7)]);
var inst_20197 = (state_20211[(8)]);
var inst_20197__$1 = cljs.core.async.chan.call(null,(1));
var inst_20198 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20199 = [inst_20192,inst_20197__$1];
var inst_20200 = (new cljs.core.PersistentVector(null,2,(5),inst_20198,inst_20199,null));
var state_20211__$1 = (function (){var statearr_20218 = state_20211;
(statearr_20218[(8)] = inst_20197__$1);

return statearr_20218;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20211__$1,(8),jobs,inst_20200);
} else {
if((state_val_20212 === (7))){
var inst_20207 = (state_20211[(2)]);
var state_20211__$1 = state_20211;
var statearr_20219_20331 = state_20211__$1;
(statearr_20219_20331[(2)] = inst_20207);

(statearr_20219_20331[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20212 === (8))){
var inst_20197 = (state_20211[(8)]);
var inst_20202 = (state_20211[(2)]);
var state_20211__$1 = (function (){var statearr_20220 = state_20211;
(statearr_20220[(9)] = inst_20202);

return statearr_20220;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20211__$1,(9),results,inst_20197);
} else {
if((state_val_20212 === (9))){
var inst_20204 = (state_20211[(2)]);
var state_20211__$1 = (function (){var statearr_20221 = state_20211;
(statearr_20221[(10)] = inst_20204);

return statearr_20221;
})();
var statearr_20222_20332 = state_20211__$1;
(statearr_20222_20332[(2)] = null);

(statearr_20222_20332[(1)] = (2));


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
});})(c__19750__auto___20326,jobs,results,process,async))
;
return ((function (switch__19638__auto__,c__19750__auto___20326,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19639__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19639__auto____0 = (function (){
var statearr_20226 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20226[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19639__auto__);

(statearr_20226[(1)] = (1));

return statearr_20226;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19639__auto____1 = (function (state_20211){
while(true){
var ret_value__19640__auto__ = (function (){try{while(true){
var result__19641__auto__ = switch__19638__auto__.call(null,state_20211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19641__auto__;
}
break;
}
}catch (e20227){if((e20227 instanceof Object)){
var ex__19642__auto__ = e20227;
var statearr_20228_20333 = state_20211;
(statearr_20228_20333[(5)] = ex__19642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20334 = state_20211;
state_20211 = G__20334;
continue;
} else {
return ret_value__19640__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19639__auto__ = function(state_20211){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19639__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19639__auto____1.call(this,state_20211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19639__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19639__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19639__auto__;
})()
;})(switch__19638__auto__,c__19750__auto___20326,jobs,results,process,async))
})();
var state__19752__auto__ = (function (){var statearr_20229 = f__19751__auto__.call(null);
(statearr_20229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19750__auto___20326);

return statearr_20229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19752__auto__);
});})(c__19750__auto___20326,jobs,results,process,async))
);


var c__19750__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19750__auto__,jobs,results,process,async){
return (function (){
var f__19751__auto__ = (function (){var switch__19638__auto__ = ((function (c__19750__auto__,jobs,results,process,async){
return (function (state_20267){
var state_val_20268 = (state_20267[(1)]);
if((state_val_20268 === (7))){
var inst_20263 = (state_20267[(2)]);
var state_20267__$1 = state_20267;
var statearr_20269_20335 = state_20267__$1;
(statearr_20269_20335[(2)] = inst_20263);

(statearr_20269_20335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20268 === (20))){
var state_20267__$1 = state_20267;
var statearr_20270_20336 = state_20267__$1;
(statearr_20270_20336[(2)] = null);

(statearr_20270_20336[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20268 === (1))){
var state_20267__$1 = state_20267;
var statearr_20271_20337 = state_20267__$1;
(statearr_20271_20337[(2)] = null);

(statearr_20271_20337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20268 === (4))){
var inst_20232 = (state_20267[(7)]);
var inst_20232__$1 = (state_20267[(2)]);
var inst_20233 = (inst_20232__$1 == null);
var state_20267__$1 = (function (){var statearr_20272 = state_20267;
(statearr_20272[(7)] = inst_20232__$1);

return statearr_20272;
})();
if(cljs.core.truth_(inst_20233)){
var statearr_20273_20338 = state_20267__$1;
(statearr_20273_20338[(1)] = (5));

} else {
var statearr_20274_20339 = state_20267__$1;
(statearr_20274_20339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20268 === (15))){
var inst_20245 = (state_20267[(8)]);
var state_20267__$1 = state_20267;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20267__$1,(18),to,inst_20245);
} else {
if((state_val_20268 === (21))){
var inst_20258 = (state_20267[(2)]);
var state_20267__$1 = state_20267;
var statearr_20275_20340 = state_20267__$1;
(statearr_20275_20340[(2)] = inst_20258);

(statearr_20275_20340[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20268 === (13))){
var inst_20260 = (state_20267[(2)]);
var state_20267__$1 = (function (){var statearr_20276 = state_20267;
(statearr_20276[(9)] = inst_20260);

return statearr_20276;
})();
var statearr_20277_20341 = state_20267__$1;
(statearr_20277_20341[(2)] = null);

(statearr_20277_20341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20268 === (6))){
var inst_20232 = (state_20267[(7)]);
var state_20267__$1 = state_20267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20267__$1,(11),inst_20232);
} else {
if((state_val_20268 === (17))){
var inst_20253 = (state_20267[(2)]);
var state_20267__$1 = state_20267;
if(cljs.core.truth_(inst_20253)){
var statearr_20278_20342 = state_20267__$1;
(statearr_20278_20342[(1)] = (19));

} else {
var statearr_20279_20343 = state_20267__$1;
(statearr_20279_20343[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20268 === (3))){
var inst_20265 = (state_20267[(2)]);
var state_20267__$1 = state_20267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20267__$1,inst_20265);
} else {
if((state_val_20268 === (12))){
var inst_20242 = (state_20267[(10)]);
var state_20267__$1 = state_20267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20267__$1,(14),inst_20242);
} else {
if((state_val_20268 === (2))){
var state_20267__$1 = state_20267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20267__$1,(4),results);
} else {
if((state_val_20268 === (19))){
var state_20267__$1 = state_20267;
var statearr_20280_20344 = state_20267__$1;
(statearr_20280_20344[(2)] = null);

(statearr_20280_20344[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20268 === (11))){
var inst_20242 = (state_20267[(2)]);
var state_20267__$1 = (function (){var statearr_20281 = state_20267;
(statearr_20281[(10)] = inst_20242);

return statearr_20281;
})();
var statearr_20282_20345 = state_20267__$1;
(statearr_20282_20345[(2)] = null);

(statearr_20282_20345[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20268 === (9))){
var state_20267__$1 = state_20267;
var statearr_20283_20346 = state_20267__$1;
(statearr_20283_20346[(2)] = null);

(statearr_20283_20346[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20268 === (5))){
var state_20267__$1 = state_20267;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20284_20347 = state_20267__$1;
(statearr_20284_20347[(1)] = (8));

} else {
var statearr_20285_20348 = state_20267__$1;
(statearr_20285_20348[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20268 === (14))){
var inst_20247 = (state_20267[(11)]);
var inst_20245 = (state_20267[(8)]);
var inst_20245__$1 = (state_20267[(2)]);
var inst_20246 = (inst_20245__$1 == null);
var inst_20247__$1 = cljs.core.not.call(null,inst_20246);
var state_20267__$1 = (function (){var statearr_20286 = state_20267;
(statearr_20286[(11)] = inst_20247__$1);

(statearr_20286[(8)] = inst_20245__$1);

return statearr_20286;
})();
if(inst_20247__$1){
var statearr_20287_20349 = state_20267__$1;
(statearr_20287_20349[(1)] = (15));

} else {
var statearr_20288_20350 = state_20267__$1;
(statearr_20288_20350[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20268 === (16))){
var inst_20247 = (state_20267[(11)]);
var state_20267__$1 = state_20267;
var statearr_20289_20351 = state_20267__$1;
(statearr_20289_20351[(2)] = inst_20247);

(statearr_20289_20351[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20268 === (10))){
var inst_20239 = (state_20267[(2)]);
var state_20267__$1 = state_20267;
var statearr_20290_20352 = state_20267__$1;
(statearr_20290_20352[(2)] = inst_20239);

(statearr_20290_20352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20268 === (18))){
var inst_20250 = (state_20267[(2)]);
var state_20267__$1 = state_20267;
var statearr_20291_20353 = state_20267__$1;
(statearr_20291_20353[(2)] = inst_20250);

(statearr_20291_20353[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20268 === (8))){
var inst_20236 = cljs.core.async.close_BANG_.call(null,to);
var state_20267__$1 = state_20267;
var statearr_20292_20354 = state_20267__$1;
(statearr_20292_20354[(2)] = inst_20236);

(statearr_20292_20354[(1)] = (10));


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
});})(c__19750__auto__,jobs,results,process,async))
;
return ((function (switch__19638__auto__,c__19750__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19639__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19639__auto____0 = (function (){
var statearr_20296 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20296[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19639__auto__);

(statearr_20296[(1)] = (1));

return statearr_20296;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19639__auto____1 = (function (state_20267){
while(true){
var ret_value__19640__auto__ = (function (){try{while(true){
var result__19641__auto__ = switch__19638__auto__.call(null,state_20267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19641__auto__;
}
break;
}
}catch (e20297){if((e20297 instanceof Object)){
var ex__19642__auto__ = e20297;
var statearr_20298_20355 = state_20267;
(statearr_20298_20355[(5)] = ex__19642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20356 = state_20267;
state_20267 = G__20356;
continue;
} else {
return ret_value__19640__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19639__auto__ = function(state_20267){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19639__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19639__auto____1.call(this,state_20267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19639__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19639__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19639__auto__;
})()
;})(switch__19638__auto__,c__19750__auto__,jobs,results,process,async))
})();
var state__19752__auto__ = (function (){var statearr_20299 = f__19751__auto__.call(null);
(statearr_20299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19750__auto__);

return statearr_20299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19752__auto__);
});})(c__19750__auto__,jobs,results,process,async))
);

return c__19750__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args20357 = [];
var len__17884__auto___20360 = arguments.length;
var i__17885__auto___20361 = (0);
while(true){
if((i__17885__auto___20361 < len__17884__auto___20360)){
args20357.push((arguments[i__17885__auto___20361]));

var G__20362 = (i__17885__auto___20361 + (1));
i__17885__auto___20361 = G__20362;
continue;
} else {
}
break;
}

var G__20359 = args20357.length;
switch (G__20359) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20357.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args20364 = [];
var len__17884__auto___20367 = arguments.length;
var i__17885__auto___20368 = (0);
while(true){
if((i__17885__auto___20368 < len__17884__auto___20367)){
args20364.push((arguments[i__17885__auto___20368]));

var G__20369 = (i__17885__auto___20368 + (1));
i__17885__auto___20368 = G__20369;
continue;
} else {
}
break;
}

var G__20366 = args20364.length;
switch (G__20366) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20364.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args20371 = [];
var len__17884__auto___20424 = arguments.length;
var i__17885__auto___20425 = (0);
while(true){
if((i__17885__auto___20425 < len__17884__auto___20424)){
args20371.push((arguments[i__17885__auto___20425]));

var G__20426 = (i__17885__auto___20425 + (1));
i__17885__auto___20425 = G__20426;
continue;
} else {
}
break;
}

var G__20373 = args20371.length;
switch (G__20373) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20371.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19750__auto___20428 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19750__auto___20428,tc,fc){
return (function (){
var f__19751__auto__ = (function (){var switch__19638__auto__ = ((function (c__19750__auto___20428,tc,fc){
return (function (state_20399){
var state_val_20400 = (state_20399[(1)]);
if((state_val_20400 === (7))){
var inst_20395 = (state_20399[(2)]);
var state_20399__$1 = state_20399;
var statearr_20401_20429 = state_20399__$1;
(statearr_20401_20429[(2)] = inst_20395);

(statearr_20401_20429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20400 === (1))){
var state_20399__$1 = state_20399;
var statearr_20402_20430 = state_20399__$1;
(statearr_20402_20430[(2)] = null);

(statearr_20402_20430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20400 === (4))){
var inst_20376 = (state_20399[(7)]);
var inst_20376__$1 = (state_20399[(2)]);
var inst_20377 = (inst_20376__$1 == null);
var state_20399__$1 = (function (){var statearr_20403 = state_20399;
(statearr_20403[(7)] = inst_20376__$1);

return statearr_20403;
})();
if(cljs.core.truth_(inst_20377)){
var statearr_20404_20431 = state_20399__$1;
(statearr_20404_20431[(1)] = (5));

} else {
var statearr_20405_20432 = state_20399__$1;
(statearr_20405_20432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20400 === (13))){
var state_20399__$1 = state_20399;
var statearr_20406_20433 = state_20399__$1;
(statearr_20406_20433[(2)] = null);

(statearr_20406_20433[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20400 === (6))){
var inst_20376 = (state_20399[(7)]);
var inst_20382 = p.call(null,inst_20376);
var state_20399__$1 = state_20399;
if(cljs.core.truth_(inst_20382)){
var statearr_20407_20434 = state_20399__$1;
(statearr_20407_20434[(1)] = (9));

} else {
var statearr_20408_20435 = state_20399__$1;
(statearr_20408_20435[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20400 === (3))){
var inst_20397 = (state_20399[(2)]);
var state_20399__$1 = state_20399;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20399__$1,inst_20397);
} else {
if((state_val_20400 === (12))){
var state_20399__$1 = state_20399;
var statearr_20409_20436 = state_20399__$1;
(statearr_20409_20436[(2)] = null);

(statearr_20409_20436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20400 === (2))){
var state_20399__$1 = state_20399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20399__$1,(4),ch);
} else {
if((state_val_20400 === (11))){
var inst_20376 = (state_20399[(7)]);
var inst_20386 = (state_20399[(2)]);
var state_20399__$1 = state_20399;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20399__$1,(8),inst_20386,inst_20376);
} else {
if((state_val_20400 === (9))){
var state_20399__$1 = state_20399;
var statearr_20410_20437 = state_20399__$1;
(statearr_20410_20437[(2)] = tc);

(statearr_20410_20437[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20400 === (5))){
var inst_20379 = cljs.core.async.close_BANG_.call(null,tc);
var inst_20380 = cljs.core.async.close_BANG_.call(null,fc);
var state_20399__$1 = (function (){var statearr_20411 = state_20399;
(statearr_20411[(8)] = inst_20379);

return statearr_20411;
})();
var statearr_20412_20438 = state_20399__$1;
(statearr_20412_20438[(2)] = inst_20380);

(statearr_20412_20438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20400 === (14))){
var inst_20393 = (state_20399[(2)]);
var state_20399__$1 = state_20399;
var statearr_20413_20439 = state_20399__$1;
(statearr_20413_20439[(2)] = inst_20393);

(statearr_20413_20439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20400 === (10))){
var state_20399__$1 = state_20399;
var statearr_20414_20440 = state_20399__$1;
(statearr_20414_20440[(2)] = fc);

(statearr_20414_20440[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20400 === (8))){
var inst_20388 = (state_20399[(2)]);
var state_20399__$1 = state_20399;
if(cljs.core.truth_(inst_20388)){
var statearr_20415_20441 = state_20399__$1;
(statearr_20415_20441[(1)] = (12));

} else {
var statearr_20416_20442 = state_20399__$1;
(statearr_20416_20442[(1)] = (13));

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
});})(c__19750__auto___20428,tc,fc))
;
return ((function (switch__19638__auto__,c__19750__auto___20428,tc,fc){
return (function() {
var cljs$core$async$state_machine__19639__auto__ = null;
var cljs$core$async$state_machine__19639__auto____0 = (function (){
var statearr_20420 = [null,null,null,null,null,null,null,null,null];
(statearr_20420[(0)] = cljs$core$async$state_machine__19639__auto__);

(statearr_20420[(1)] = (1));

return statearr_20420;
});
var cljs$core$async$state_machine__19639__auto____1 = (function (state_20399){
while(true){
var ret_value__19640__auto__ = (function (){try{while(true){
var result__19641__auto__ = switch__19638__auto__.call(null,state_20399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19641__auto__;
}
break;
}
}catch (e20421){if((e20421 instanceof Object)){
var ex__19642__auto__ = e20421;
var statearr_20422_20443 = state_20399;
(statearr_20422_20443[(5)] = ex__19642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20421;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20444 = state_20399;
state_20399 = G__20444;
continue;
} else {
return ret_value__19640__auto__;
}
break;
}
});
cljs$core$async$state_machine__19639__auto__ = function(state_20399){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19639__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19639__auto____1.call(this,state_20399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19639__auto____0;
cljs$core$async$state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19639__auto____1;
return cljs$core$async$state_machine__19639__auto__;
})()
;})(switch__19638__auto__,c__19750__auto___20428,tc,fc))
})();
var state__19752__auto__ = (function (){var statearr_20423 = f__19751__auto__.call(null);
(statearr_20423[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19750__auto___20428);

return statearr_20423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19752__auto__);
});})(c__19750__auto___20428,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19750__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19750__auto__){
return (function (){
var f__19751__auto__ = (function (){var switch__19638__auto__ = ((function (c__19750__auto__){
return (function (state_20508){
var state_val_20509 = (state_20508[(1)]);
if((state_val_20509 === (7))){
var inst_20504 = (state_20508[(2)]);
var state_20508__$1 = state_20508;
var statearr_20510_20531 = state_20508__$1;
(statearr_20510_20531[(2)] = inst_20504);

(statearr_20510_20531[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20509 === (1))){
var inst_20488 = init;
var state_20508__$1 = (function (){var statearr_20511 = state_20508;
(statearr_20511[(7)] = inst_20488);

return statearr_20511;
})();
var statearr_20512_20532 = state_20508__$1;
(statearr_20512_20532[(2)] = null);

(statearr_20512_20532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20509 === (4))){
var inst_20491 = (state_20508[(8)]);
var inst_20491__$1 = (state_20508[(2)]);
var inst_20492 = (inst_20491__$1 == null);
var state_20508__$1 = (function (){var statearr_20513 = state_20508;
(statearr_20513[(8)] = inst_20491__$1);

return statearr_20513;
})();
if(cljs.core.truth_(inst_20492)){
var statearr_20514_20533 = state_20508__$1;
(statearr_20514_20533[(1)] = (5));

} else {
var statearr_20515_20534 = state_20508__$1;
(statearr_20515_20534[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20509 === (6))){
var inst_20491 = (state_20508[(8)]);
var inst_20488 = (state_20508[(7)]);
var inst_20495 = (state_20508[(9)]);
var inst_20495__$1 = f.call(null,inst_20488,inst_20491);
var inst_20496 = cljs.core.reduced_QMARK_.call(null,inst_20495__$1);
var state_20508__$1 = (function (){var statearr_20516 = state_20508;
(statearr_20516[(9)] = inst_20495__$1);

return statearr_20516;
})();
if(inst_20496){
var statearr_20517_20535 = state_20508__$1;
(statearr_20517_20535[(1)] = (8));

} else {
var statearr_20518_20536 = state_20508__$1;
(statearr_20518_20536[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20509 === (3))){
var inst_20506 = (state_20508[(2)]);
var state_20508__$1 = state_20508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20508__$1,inst_20506);
} else {
if((state_val_20509 === (2))){
var state_20508__$1 = state_20508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20508__$1,(4),ch);
} else {
if((state_val_20509 === (9))){
var inst_20495 = (state_20508[(9)]);
var inst_20488 = inst_20495;
var state_20508__$1 = (function (){var statearr_20519 = state_20508;
(statearr_20519[(7)] = inst_20488);

return statearr_20519;
})();
var statearr_20520_20537 = state_20508__$1;
(statearr_20520_20537[(2)] = null);

(statearr_20520_20537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20509 === (5))){
var inst_20488 = (state_20508[(7)]);
var state_20508__$1 = state_20508;
var statearr_20521_20538 = state_20508__$1;
(statearr_20521_20538[(2)] = inst_20488);

(statearr_20521_20538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20509 === (10))){
var inst_20502 = (state_20508[(2)]);
var state_20508__$1 = state_20508;
var statearr_20522_20539 = state_20508__$1;
(statearr_20522_20539[(2)] = inst_20502);

(statearr_20522_20539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20509 === (8))){
var inst_20495 = (state_20508[(9)]);
var inst_20498 = cljs.core.deref.call(null,inst_20495);
var state_20508__$1 = state_20508;
var statearr_20523_20540 = state_20508__$1;
(statearr_20523_20540[(2)] = inst_20498);

(statearr_20523_20540[(1)] = (10));


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
});})(c__19750__auto__))
;
return ((function (switch__19638__auto__,c__19750__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19639__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19639__auto____0 = (function (){
var statearr_20527 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20527[(0)] = cljs$core$async$reduce_$_state_machine__19639__auto__);

(statearr_20527[(1)] = (1));

return statearr_20527;
});
var cljs$core$async$reduce_$_state_machine__19639__auto____1 = (function (state_20508){
while(true){
var ret_value__19640__auto__ = (function (){try{while(true){
var result__19641__auto__ = switch__19638__auto__.call(null,state_20508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19641__auto__;
}
break;
}
}catch (e20528){if((e20528 instanceof Object)){
var ex__19642__auto__ = e20528;
var statearr_20529_20541 = state_20508;
(statearr_20529_20541[(5)] = ex__19642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20542 = state_20508;
state_20508 = G__20542;
continue;
} else {
return ret_value__19640__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19639__auto__ = function(state_20508){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19639__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19639__auto____1.call(this,state_20508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19639__auto____0;
cljs$core$async$reduce_$_state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19639__auto____1;
return cljs$core$async$reduce_$_state_machine__19639__auto__;
})()
;})(switch__19638__auto__,c__19750__auto__))
})();
var state__19752__auto__ = (function (){var statearr_20530 = f__19751__auto__.call(null);
(statearr_20530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19750__auto__);

return statearr_20530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19752__auto__);
});})(c__19750__auto__))
);

return c__19750__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args20543 = [];
var len__17884__auto___20595 = arguments.length;
var i__17885__auto___20596 = (0);
while(true){
if((i__17885__auto___20596 < len__17884__auto___20595)){
args20543.push((arguments[i__17885__auto___20596]));

var G__20597 = (i__17885__auto___20596 + (1));
i__17885__auto___20596 = G__20597;
continue;
} else {
}
break;
}

var G__20545 = args20543.length;
switch (G__20545) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20543.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19750__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19750__auto__){
return (function (){
var f__19751__auto__ = (function (){var switch__19638__auto__ = ((function (c__19750__auto__){
return (function (state_20570){
var state_val_20571 = (state_20570[(1)]);
if((state_val_20571 === (7))){
var inst_20552 = (state_20570[(2)]);
var state_20570__$1 = state_20570;
var statearr_20572_20599 = state_20570__$1;
(statearr_20572_20599[(2)] = inst_20552);

(statearr_20572_20599[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20571 === (1))){
var inst_20546 = cljs.core.seq.call(null,coll);
var inst_20547 = inst_20546;
var state_20570__$1 = (function (){var statearr_20573 = state_20570;
(statearr_20573[(7)] = inst_20547);

return statearr_20573;
})();
var statearr_20574_20600 = state_20570__$1;
(statearr_20574_20600[(2)] = null);

(statearr_20574_20600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20571 === (4))){
var inst_20547 = (state_20570[(7)]);
var inst_20550 = cljs.core.first.call(null,inst_20547);
var state_20570__$1 = state_20570;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20570__$1,(7),ch,inst_20550);
} else {
if((state_val_20571 === (13))){
var inst_20564 = (state_20570[(2)]);
var state_20570__$1 = state_20570;
var statearr_20575_20601 = state_20570__$1;
(statearr_20575_20601[(2)] = inst_20564);

(statearr_20575_20601[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20571 === (6))){
var inst_20555 = (state_20570[(2)]);
var state_20570__$1 = state_20570;
if(cljs.core.truth_(inst_20555)){
var statearr_20576_20602 = state_20570__$1;
(statearr_20576_20602[(1)] = (8));

} else {
var statearr_20577_20603 = state_20570__$1;
(statearr_20577_20603[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20571 === (3))){
var inst_20568 = (state_20570[(2)]);
var state_20570__$1 = state_20570;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20570__$1,inst_20568);
} else {
if((state_val_20571 === (12))){
var state_20570__$1 = state_20570;
var statearr_20578_20604 = state_20570__$1;
(statearr_20578_20604[(2)] = null);

(statearr_20578_20604[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20571 === (2))){
var inst_20547 = (state_20570[(7)]);
var state_20570__$1 = state_20570;
if(cljs.core.truth_(inst_20547)){
var statearr_20579_20605 = state_20570__$1;
(statearr_20579_20605[(1)] = (4));

} else {
var statearr_20580_20606 = state_20570__$1;
(statearr_20580_20606[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20571 === (11))){
var inst_20561 = cljs.core.async.close_BANG_.call(null,ch);
var state_20570__$1 = state_20570;
var statearr_20581_20607 = state_20570__$1;
(statearr_20581_20607[(2)] = inst_20561);

(statearr_20581_20607[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20571 === (9))){
var state_20570__$1 = state_20570;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20582_20608 = state_20570__$1;
(statearr_20582_20608[(1)] = (11));

} else {
var statearr_20583_20609 = state_20570__$1;
(statearr_20583_20609[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20571 === (5))){
var inst_20547 = (state_20570[(7)]);
var state_20570__$1 = state_20570;
var statearr_20584_20610 = state_20570__$1;
(statearr_20584_20610[(2)] = inst_20547);

(statearr_20584_20610[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20571 === (10))){
var inst_20566 = (state_20570[(2)]);
var state_20570__$1 = state_20570;
var statearr_20585_20611 = state_20570__$1;
(statearr_20585_20611[(2)] = inst_20566);

(statearr_20585_20611[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20571 === (8))){
var inst_20547 = (state_20570[(7)]);
var inst_20557 = cljs.core.next.call(null,inst_20547);
var inst_20547__$1 = inst_20557;
var state_20570__$1 = (function (){var statearr_20586 = state_20570;
(statearr_20586[(7)] = inst_20547__$1);

return statearr_20586;
})();
var statearr_20587_20612 = state_20570__$1;
(statearr_20587_20612[(2)] = null);

(statearr_20587_20612[(1)] = (2));


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
});})(c__19750__auto__))
;
return ((function (switch__19638__auto__,c__19750__auto__){
return (function() {
var cljs$core$async$state_machine__19639__auto__ = null;
var cljs$core$async$state_machine__19639__auto____0 = (function (){
var statearr_20591 = [null,null,null,null,null,null,null,null];
(statearr_20591[(0)] = cljs$core$async$state_machine__19639__auto__);

(statearr_20591[(1)] = (1));

return statearr_20591;
});
var cljs$core$async$state_machine__19639__auto____1 = (function (state_20570){
while(true){
var ret_value__19640__auto__ = (function (){try{while(true){
var result__19641__auto__ = switch__19638__auto__.call(null,state_20570);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19641__auto__;
}
break;
}
}catch (e20592){if((e20592 instanceof Object)){
var ex__19642__auto__ = e20592;
var statearr_20593_20613 = state_20570;
(statearr_20593_20613[(5)] = ex__19642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20614 = state_20570;
state_20570 = G__20614;
continue;
} else {
return ret_value__19640__auto__;
}
break;
}
});
cljs$core$async$state_machine__19639__auto__ = function(state_20570){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19639__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19639__auto____1.call(this,state_20570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19639__auto____0;
cljs$core$async$state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19639__auto____1;
return cljs$core$async$state_machine__19639__auto__;
})()
;})(switch__19638__auto__,c__19750__auto__))
})();
var state__19752__auto__ = (function (){var statearr_20594 = f__19751__auto__.call(null);
(statearr_20594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19750__auto__);

return statearr_20594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19752__auto__);
});})(c__19750__auto__))
);

return c__19750__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17481__auto__ = (((_ == null))?null:_);
var m__17482__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,_);
} else {
var m__17482__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17482__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m);
} else {
var m__17482__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async20836 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20836 = (function (mult,ch,cs,meta20837){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta20837 = meta20837;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20838,meta20837__$1){
var self__ = this;
var _20838__$1 = this;
return (new cljs.core.async.t_cljs$core$async20836(self__.mult,self__.ch,self__.cs,meta20837__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async20836.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20838){
var self__ = this;
var _20838__$1 = this;
return self__.meta20837;
});})(cs))
;

cljs.core.async.t_cljs$core$async20836.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20836.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async20836.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async20836.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20836.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20836.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20836.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta20837","meta20837",829973602,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async20836.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20836.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20836";

cljs.core.async.t_cljs$core$async20836.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async20836");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async20836 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async20836(mult__$1,ch__$1,cs__$1,meta20837){
return (new cljs.core.async.t_cljs$core$async20836(mult__$1,ch__$1,cs__$1,meta20837));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async20836(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19750__auto___21057 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19750__auto___21057,cs,m,dchan,dctr,done){
return (function (){
var f__19751__auto__ = (function (){var switch__19638__auto__ = ((function (c__19750__auto___21057,cs,m,dchan,dctr,done){
return (function (state_20969){
var state_val_20970 = (state_20969[(1)]);
if((state_val_20970 === (7))){
var inst_20965 = (state_20969[(2)]);
var state_20969__$1 = state_20969;
var statearr_20971_21058 = state_20969__$1;
(statearr_20971_21058[(2)] = inst_20965);

(statearr_20971_21058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20970 === (20))){
var inst_20870 = (state_20969[(7)]);
var inst_20880 = cljs.core.first.call(null,inst_20870);
var inst_20881 = cljs.core.nth.call(null,inst_20880,(0),null);
var inst_20882 = cljs.core.nth.call(null,inst_20880,(1),null);
var state_20969__$1 = (function (){var statearr_20972 = state_20969;
(statearr_20972[(8)] = inst_20881);

return statearr_20972;
})();
if(cljs.core.truth_(inst_20882)){
var statearr_20973_21059 = state_20969__$1;
(statearr_20973_21059[(1)] = (22));

} else {
var statearr_20974_21060 = state_20969__$1;
(statearr_20974_21060[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20970 === (27))){
var inst_20910 = (state_20969[(9)]);
var inst_20841 = (state_20969[(10)]);
var inst_20912 = (state_20969[(11)]);
var inst_20917 = (state_20969[(12)]);
var inst_20917__$1 = cljs.core._nth.call(null,inst_20910,inst_20912);
var inst_20918 = cljs.core.async.put_BANG_.call(null,inst_20917__$1,inst_20841,done);
var state_20969__$1 = (function (){var statearr_20975 = state_20969;
(statearr_20975[(12)] = inst_20917__$1);

return statearr_20975;
})();
if(cljs.core.truth_(inst_20918)){
var statearr_20976_21061 = state_20969__$1;
(statearr_20976_21061[(1)] = (30));

} else {
var statearr_20977_21062 = state_20969__$1;
(statearr_20977_21062[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20970 === (1))){
var state_20969__$1 = state_20969;
var statearr_20978_21063 = state_20969__$1;
(statearr_20978_21063[(2)] = null);

(statearr_20978_21063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20970 === (24))){
var inst_20870 = (state_20969[(7)]);
var inst_20887 = (state_20969[(2)]);
var inst_20888 = cljs.core.next.call(null,inst_20870);
var inst_20850 = inst_20888;
var inst_20851 = null;
var inst_20852 = (0);
var inst_20853 = (0);
var state_20969__$1 = (function (){var statearr_20979 = state_20969;
(statearr_20979[(13)] = inst_20887);

(statearr_20979[(14)] = inst_20851);

(statearr_20979[(15)] = inst_20852);

(statearr_20979[(16)] = inst_20853);

(statearr_20979[(17)] = inst_20850);

return statearr_20979;
})();
var statearr_20980_21064 = state_20969__$1;
(statearr_20980_21064[(2)] = null);

(statearr_20980_21064[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20970 === (39))){
var state_20969__$1 = state_20969;
var statearr_20984_21065 = state_20969__$1;
(statearr_20984_21065[(2)] = null);

(statearr_20984_21065[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20970 === (4))){
var inst_20841 = (state_20969[(10)]);
var inst_20841__$1 = (state_20969[(2)]);
var inst_20842 = (inst_20841__$1 == null);
var state_20969__$1 = (function (){var statearr_20985 = state_20969;
(statearr_20985[(10)] = inst_20841__$1);

return statearr_20985;
})();
if(cljs.core.truth_(inst_20842)){
var statearr_20986_21066 = state_20969__$1;
(statearr_20986_21066[(1)] = (5));

} else {
var statearr_20987_21067 = state_20969__$1;
(statearr_20987_21067[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20970 === (15))){
var inst_20851 = (state_20969[(14)]);
var inst_20852 = (state_20969[(15)]);
var inst_20853 = (state_20969[(16)]);
var inst_20850 = (state_20969[(17)]);
var inst_20866 = (state_20969[(2)]);
var inst_20867 = (inst_20853 + (1));
var tmp20981 = inst_20851;
var tmp20982 = inst_20852;
var tmp20983 = inst_20850;
var inst_20850__$1 = tmp20983;
var inst_20851__$1 = tmp20981;
var inst_20852__$1 = tmp20982;
var inst_20853__$1 = inst_20867;
var state_20969__$1 = (function (){var statearr_20988 = state_20969;
(statearr_20988[(14)] = inst_20851__$1);

(statearr_20988[(18)] = inst_20866);

(statearr_20988[(15)] = inst_20852__$1);

(statearr_20988[(16)] = inst_20853__$1);

(statearr_20988[(17)] = inst_20850__$1);

return statearr_20988;
})();
var statearr_20989_21068 = state_20969__$1;
(statearr_20989_21068[(2)] = null);

(statearr_20989_21068[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20970 === (21))){
var inst_20891 = (state_20969[(2)]);
var state_20969__$1 = state_20969;
var statearr_20993_21069 = state_20969__$1;
(statearr_20993_21069[(2)] = inst_20891);

(statearr_20993_21069[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20970 === (31))){
var inst_20917 = (state_20969[(12)]);
var inst_20921 = done.call(null,null);
var inst_20922 = cljs.core.async.untap_STAR_.call(null,m,inst_20917);
var state_20969__$1 = (function (){var statearr_20994 = state_20969;
(statearr_20994[(19)] = inst_20921);

return statearr_20994;
})();
var statearr_20995_21070 = state_20969__$1;
(statearr_20995_21070[(2)] = inst_20922);

(statearr_20995_21070[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20970 === (32))){
var inst_20910 = (state_20969[(9)]);
var inst_20911 = (state_20969[(20)]);
var inst_20909 = (state_20969[(21)]);
var inst_20912 = (state_20969[(11)]);
var inst_20924 = (state_20969[(2)]);
var inst_20925 = (inst_20912 + (1));
var tmp20990 = inst_20910;
var tmp20991 = inst_20911;
var tmp20992 = inst_20909;
var inst_20909__$1 = tmp20992;
var inst_20910__$1 = tmp20990;
var inst_20911__$1 = tmp20991;
var inst_20912__$1 = inst_20925;
var state_20969__$1 = (function (){var statearr_20996 = state_20969;
(statearr_20996[(22)] = inst_20924);

(statearr_20996[(9)] = inst_20910__$1);

(statearr_20996[(20)] = inst_20911__$1);

(statearr_20996[(21)] = inst_20909__$1);

(statearr_20996[(11)] = inst_20912__$1);

return statearr_20996;
})();
var statearr_20997_21071 = state_20969__$1;
(statearr_20997_21071[(2)] = null);

(statearr_20997_21071[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20970 === (40))){
var inst_20937 = (state_20969[(23)]);
var inst_20941 = done.call(null,null);
var inst_20942 = cljs.core.async.untap_STAR_.call(null,m,inst_20937);
var state_20969__$1 = (function (){var statearr_20998 = state_20969;
(statearr_20998[(24)] = inst_20941);

return statearr_20998;
})();
var statearr_20999_21072 = state_20969__$1;
(statearr_20999_21072[(2)] = inst_20942);

(statearr_20999_21072[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20970 === (33))){
var inst_20928 = (state_20969[(25)]);
var inst_20930 = cljs.core.chunked_seq_QMARK_.call(null,inst_20928);
var state_20969__$1 = state_20969;
if(inst_20930){
var statearr_21000_21073 = state_20969__$1;
(statearr_21000_21073[(1)] = (36));

} else {
var statearr_21001_21074 = state_20969__$1;
(statearr_21001_21074[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20970 === (13))){
var inst_20860 = (state_20969[(26)]);
var inst_20863 = cljs.core.async.close_BANG_.call(null,inst_20860);
var state_20969__$1 = state_20969;
var statearr_21002_21075 = state_20969__$1;
(statearr_21002_21075[(2)] = inst_20863);

(statearr_21002_21075[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20970 === (22))){
var inst_20881 = (state_20969[(8)]);
var inst_20884 = cljs.core.async.close_BANG_.call(null,inst_20881);
var state_20969__$1 = state_20969;
var statearr_21003_21076 = state_20969__$1;
(statearr_21003_21076[(2)] = inst_20884);

(statearr_21003_21076[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20970 === (36))){
var inst_20928 = (state_20969[(25)]);
var inst_20932 = cljs.core.chunk_first.call(null,inst_20928);
var inst_20933 = cljs.core.chunk_rest.call(null,inst_20928);
var inst_20934 = cljs.core.count.call(null,inst_20932);
var inst_20909 = inst_20933;
var inst_20910 = inst_20932;
var inst_20911 = inst_20934;
var inst_20912 = (0);
var state_20969__$1 = (function (){var statearr_21004 = state_20969;
(statearr_21004[(9)] = inst_20910);

(statearr_21004[(20)] = inst_20911);

(statearr_21004[(21)] = inst_20909);

(statearr_21004[(11)] = inst_20912);

return statearr_21004;
})();
var statearr_21005_21077 = state_20969__$1;
(statearr_21005_21077[(2)] = null);

(statearr_21005_21077[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20970 === (41))){
var inst_20928 = (state_20969[(25)]);
var inst_20944 = (state_20969[(2)]);
var inst_20945 = cljs.core.next.call(null,inst_20928);
var inst_20909 = inst_20945;
var inst_20910 = null;
var inst_20911 = (0);
var inst_20912 = (0);
var state_20969__$1 = (function (){var statearr_21006 = state_20969;
(statearr_21006[(9)] = inst_20910);

(statearr_21006[(20)] = inst_20911);

(statearr_21006[(21)] = inst_20909);

(statearr_21006[(27)] = inst_20944);

(statearr_21006[(11)] = inst_20912);

return statearr_21006;
})();
var statearr_21007_21078 = state_20969__$1;
(statearr_21007_21078[(2)] = null);

(statearr_21007_21078[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20970 === (43))){
var state_20969__$1 = state_20969;
var statearr_21008_21079 = state_20969__$1;
(statearr_21008_21079[(2)] = null);

(statearr_21008_21079[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20970 === (29))){
var inst_20953 = (state_20969[(2)]);
var state_20969__$1 = state_20969;
var statearr_21009_21080 = state_20969__$1;
(statearr_21009_21080[(2)] = inst_20953);

(statearr_21009_21080[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20970 === (44))){
var inst_20962 = (state_20969[(2)]);
var state_20969__$1 = (function (){var statearr_21010 = state_20969;
(statearr_21010[(28)] = inst_20962);

return statearr_21010;
})();
var statearr_21011_21081 = state_20969__$1;
(statearr_21011_21081[(2)] = null);

(statearr_21011_21081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20970 === (6))){
var inst_20901 = (state_20969[(29)]);
var inst_20900 = cljs.core.deref.call(null,cs);
var inst_20901__$1 = cljs.core.keys.call(null,inst_20900);
var inst_20902 = cljs.core.count.call(null,inst_20901__$1);
var inst_20903 = cljs.core.reset_BANG_.call(null,dctr,inst_20902);
var inst_20908 = cljs.core.seq.call(null,inst_20901__$1);
var inst_20909 = inst_20908;
var inst_20910 = null;
var inst_20911 = (0);
var inst_20912 = (0);
var state_20969__$1 = (function (){var statearr_21012 = state_20969;
(statearr_21012[(9)] = inst_20910);

(statearr_21012[(30)] = inst_20903);

(statearr_21012[(20)] = inst_20911);

(statearr_21012[(21)] = inst_20909);

(statearr_21012[(11)] = inst_20912);

(statearr_21012[(29)] = inst_20901__$1);

return statearr_21012;
})();
var statearr_21013_21082 = state_20969__$1;
(statearr_21013_21082[(2)] = null);

(statearr_21013_21082[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20970 === (28))){
var inst_20909 = (state_20969[(21)]);
var inst_20928 = (state_20969[(25)]);
var inst_20928__$1 = cljs.core.seq.call(null,inst_20909);
var state_20969__$1 = (function (){var statearr_21014 = state_20969;
(statearr_21014[(25)] = inst_20928__$1);

return statearr_21014;
})();
if(inst_20928__$1){
var statearr_21015_21083 = state_20969__$1;
(statearr_21015_21083[(1)] = (33));

} else {
var statearr_21016_21084 = state_20969__$1;
(statearr_21016_21084[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20970 === (25))){
var inst_20911 = (state_20969[(20)]);
var inst_20912 = (state_20969[(11)]);
var inst_20914 = (inst_20912 < inst_20911);
var inst_20915 = inst_20914;
var state_20969__$1 = state_20969;
if(cljs.core.truth_(inst_20915)){
var statearr_21017_21085 = state_20969__$1;
(statearr_21017_21085[(1)] = (27));

} else {
var statearr_21018_21086 = state_20969__$1;
(statearr_21018_21086[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20970 === (34))){
var state_20969__$1 = state_20969;
var statearr_21019_21087 = state_20969__$1;
(statearr_21019_21087[(2)] = null);

(statearr_21019_21087[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20970 === (17))){
var state_20969__$1 = state_20969;
var statearr_21020_21088 = state_20969__$1;
(statearr_21020_21088[(2)] = null);

(statearr_21020_21088[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20970 === (3))){
var inst_20967 = (state_20969[(2)]);
var state_20969__$1 = state_20969;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20969__$1,inst_20967);
} else {
if((state_val_20970 === (12))){
var inst_20896 = (state_20969[(2)]);
var state_20969__$1 = state_20969;
var statearr_21021_21089 = state_20969__$1;
(statearr_21021_21089[(2)] = inst_20896);

(statearr_21021_21089[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20970 === (2))){
var state_20969__$1 = state_20969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20969__$1,(4),ch);
} else {
if((state_val_20970 === (23))){
var state_20969__$1 = state_20969;
var statearr_21022_21090 = state_20969__$1;
(statearr_21022_21090[(2)] = null);

(statearr_21022_21090[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20970 === (35))){
var inst_20951 = (state_20969[(2)]);
var state_20969__$1 = state_20969;
var statearr_21023_21091 = state_20969__$1;
(statearr_21023_21091[(2)] = inst_20951);

(statearr_21023_21091[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20970 === (19))){
var inst_20870 = (state_20969[(7)]);
var inst_20874 = cljs.core.chunk_first.call(null,inst_20870);
var inst_20875 = cljs.core.chunk_rest.call(null,inst_20870);
var inst_20876 = cljs.core.count.call(null,inst_20874);
var inst_20850 = inst_20875;
var inst_20851 = inst_20874;
var inst_20852 = inst_20876;
var inst_20853 = (0);
var state_20969__$1 = (function (){var statearr_21024 = state_20969;
(statearr_21024[(14)] = inst_20851);

(statearr_21024[(15)] = inst_20852);

(statearr_21024[(16)] = inst_20853);

(statearr_21024[(17)] = inst_20850);

return statearr_21024;
})();
var statearr_21025_21092 = state_20969__$1;
(statearr_21025_21092[(2)] = null);

(statearr_21025_21092[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20970 === (11))){
var inst_20870 = (state_20969[(7)]);
var inst_20850 = (state_20969[(17)]);
var inst_20870__$1 = cljs.core.seq.call(null,inst_20850);
var state_20969__$1 = (function (){var statearr_21026 = state_20969;
(statearr_21026[(7)] = inst_20870__$1);

return statearr_21026;
})();
if(inst_20870__$1){
var statearr_21027_21093 = state_20969__$1;
(statearr_21027_21093[(1)] = (16));

} else {
var statearr_21028_21094 = state_20969__$1;
(statearr_21028_21094[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20970 === (9))){
var inst_20898 = (state_20969[(2)]);
var state_20969__$1 = state_20969;
var statearr_21029_21095 = state_20969__$1;
(statearr_21029_21095[(2)] = inst_20898);

(statearr_21029_21095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20970 === (5))){
var inst_20848 = cljs.core.deref.call(null,cs);
var inst_20849 = cljs.core.seq.call(null,inst_20848);
var inst_20850 = inst_20849;
var inst_20851 = null;
var inst_20852 = (0);
var inst_20853 = (0);
var state_20969__$1 = (function (){var statearr_21030 = state_20969;
(statearr_21030[(14)] = inst_20851);

(statearr_21030[(15)] = inst_20852);

(statearr_21030[(16)] = inst_20853);

(statearr_21030[(17)] = inst_20850);

return statearr_21030;
})();
var statearr_21031_21096 = state_20969__$1;
(statearr_21031_21096[(2)] = null);

(statearr_21031_21096[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20970 === (14))){
var state_20969__$1 = state_20969;
var statearr_21032_21097 = state_20969__$1;
(statearr_21032_21097[(2)] = null);

(statearr_21032_21097[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20970 === (45))){
var inst_20959 = (state_20969[(2)]);
var state_20969__$1 = state_20969;
var statearr_21033_21098 = state_20969__$1;
(statearr_21033_21098[(2)] = inst_20959);

(statearr_21033_21098[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20970 === (26))){
var inst_20901 = (state_20969[(29)]);
var inst_20955 = (state_20969[(2)]);
var inst_20956 = cljs.core.seq.call(null,inst_20901);
var state_20969__$1 = (function (){var statearr_21034 = state_20969;
(statearr_21034[(31)] = inst_20955);

return statearr_21034;
})();
if(inst_20956){
var statearr_21035_21099 = state_20969__$1;
(statearr_21035_21099[(1)] = (42));

} else {
var statearr_21036_21100 = state_20969__$1;
(statearr_21036_21100[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20970 === (16))){
var inst_20870 = (state_20969[(7)]);
var inst_20872 = cljs.core.chunked_seq_QMARK_.call(null,inst_20870);
var state_20969__$1 = state_20969;
if(inst_20872){
var statearr_21037_21101 = state_20969__$1;
(statearr_21037_21101[(1)] = (19));

} else {
var statearr_21038_21102 = state_20969__$1;
(statearr_21038_21102[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20970 === (38))){
var inst_20948 = (state_20969[(2)]);
var state_20969__$1 = state_20969;
var statearr_21039_21103 = state_20969__$1;
(statearr_21039_21103[(2)] = inst_20948);

(statearr_21039_21103[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20970 === (30))){
var state_20969__$1 = state_20969;
var statearr_21040_21104 = state_20969__$1;
(statearr_21040_21104[(2)] = null);

(statearr_21040_21104[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20970 === (10))){
var inst_20851 = (state_20969[(14)]);
var inst_20853 = (state_20969[(16)]);
var inst_20859 = cljs.core._nth.call(null,inst_20851,inst_20853);
var inst_20860 = cljs.core.nth.call(null,inst_20859,(0),null);
var inst_20861 = cljs.core.nth.call(null,inst_20859,(1),null);
var state_20969__$1 = (function (){var statearr_21041 = state_20969;
(statearr_21041[(26)] = inst_20860);

return statearr_21041;
})();
if(cljs.core.truth_(inst_20861)){
var statearr_21042_21105 = state_20969__$1;
(statearr_21042_21105[(1)] = (13));

} else {
var statearr_21043_21106 = state_20969__$1;
(statearr_21043_21106[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20970 === (18))){
var inst_20894 = (state_20969[(2)]);
var state_20969__$1 = state_20969;
var statearr_21044_21107 = state_20969__$1;
(statearr_21044_21107[(2)] = inst_20894);

(statearr_21044_21107[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20970 === (42))){
var state_20969__$1 = state_20969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20969__$1,(45),dchan);
} else {
if((state_val_20970 === (37))){
var inst_20841 = (state_20969[(10)]);
var inst_20937 = (state_20969[(23)]);
var inst_20928 = (state_20969[(25)]);
var inst_20937__$1 = cljs.core.first.call(null,inst_20928);
var inst_20938 = cljs.core.async.put_BANG_.call(null,inst_20937__$1,inst_20841,done);
var state_20969__$1 = (function (){var statearr_21045 = state_20969;
(statearr_21045[(23)] = inst_20937__$1);

return statearr_21045;
})();
if(cljs.core.truth_(inst_20938)){
var statearr_21046_21108 = state_20969__$1;
(statearr_21046_21108[(1)] = (39));

} else {
var statearr_21047_21109 = state_20969__$1;
(statearr_21047_21109[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20970 === (8))){
var inst_20852 = (state_20969[(15)]);
var inst_20853 = (state_20969[(16)]);
var inst_20855 = (inst_20853 < inst_20852);
var inst_20856 = inst_20855;
var state_20969__$1 = state_20969;
if(cljs.core.truth_(inst_20856)){
var statearr_21048_21110 = state_20969__$1;
(statearr_21048_21110[(1)] = (10));

} else {
var statearr_21049_21111 = state_20969__$1;
(statearr_21049_21111[(1)] = (11));

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
});})(c__19750__auto___21057,cs,m,dchan,dctr,done))
;
return ((function (switch__19638__auto__,c__19750__auto___21057,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19639__auto__ = null;
var cljs$core$async$mult_$_state_machine__19639__auto____0 = (function (){
var statearr_21053 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21053[(0)] = cljs$core$async$mult_$_state_machine__19639__auto__);

(statearr_21053[(1)] = (1));

return statearr_21053;
});
var cljs$core$async$mult_$_state_machine__19639__auto____1 = (function (state_20969){
while(true){
var ret_value__19640__auto__ = (function (){try{while(true){
var result__19641__auto__ = switch__19638__auto__.call(null,state_20969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19641__auto__;
}
break;
}
}catch (e21054){if((e21054 instanceof Object)){
var ex__19642__auto__ = e21054;
var statearr_21055_21112 = state_20969;
(statearr_21055_21112[(5)] = ex__19642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21113 = state_20969;
state_20969 = G__21113;
continue;
} else {
return ret_value__19640__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19639__auto__ = function(state_20969){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19639__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19639__auto____1.call(this,state_20969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19639__auto____0;
cljs$core$async$mult_$_state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19639__auto____1;
return cljs$core$async$mult_$_state_machine__19639__auto__;
})()
;})(switch__19638__auto__,c__19750__auto___21057,cs,m,dchan,dctr,done))
})();
var state__19752__auto__ = (function (){var statearr_21056 = f__19751__auto__.call(null);
(statearr_21056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19750__auto___21057);

return statearr_21056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19752__auto__);
});})(c__19750__auto___21057,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args21114 = [];
var len__17884__auto___21117 = arguments.length;
var i__17885__auto___21118 = (0);
while(true){
if((i__17885__auto___21118 < len__17884__auto___21117)){
args21114.push((arguments[i__17885__auto___21118]));

var G__21119 = (i__17885__auto___21118 + (1));
i__17885__auto___21118 = G__21119;
continue;
} else {
}
break;
}

var G__21116 = args21114.length;
switch (G__21116) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21114.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m);
} else {
var m__17482__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,state_map);
} else {
var m__17482__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,mode);
} else {
var m__17482__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17891__auto__ = [];
var len__17884__auto___21131 = arguments.length;
var i__17885__auto___21132 = (0);
while(true){
if((i__17885__auto___21132 < len__17884__auto___21131)){
args__17891__auto__.push((arguments[i__17885__auto___21132]));

var G__21133 = (i__17885__auto___21132 + (1));
i__17885__auto___21132 = G__21133;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((3) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17892__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__21125){
var map__21126 = p__21125;
var map__21126__$1 = ((((!((map__21126 == null)))?((((map__21126.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21126.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21126):map__21126);
var opts = map__21126__$1;
var statearr_21128_21134 = state;
(statearr_21128_21134[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__21126,map__21126__$1,opts){
return (function (val){
var statearr_21129_21135 = state;
(statearr_21129_21135[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__21126,map__21126__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_21130_21136 = state;
(statearr_21130_21136[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq21121){
var G__21122 = cljs.core.first.call(null,seq21121);
var seq21121__$1 = cljs.core.next.call(null,seq21121);
var G__21123 = cljs.core.first.call(null,seq21121__$1);
var seq21121__$2 = cljs.core.next.call(null,seq21121__$1);
var G__21124 = cljs.core.first.call(null,seq21121__$2);
var seq21121__$3 = cljs.core.next.call(null,seq21121__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21122,G__21123,G__21124,seq21121__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21300 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21300 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21301){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta21301 = meta21301;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21300.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21302,meta21301__$1){
var self__ = this;
var _21302__$1 = this;
return (new cljs.core.async.t_cljs$core$async21300(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21301__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21300.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21302){
var self__ = this;
var _21302__$1 = this;
return self__.meta21301;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21300.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21300.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21300.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async21300.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21300.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21300.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21300.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21300.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21300.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta21301","meta21301",1657619018,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21300.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21300.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21300";

cljs.core.async.t_cljs$core$async21300.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async21300");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async21300 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async21300(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21301){
return (new cljs.core.async.t_cljs$core$async21300(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21301));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async21300(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19750__auto___21463 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19750__auto___21463,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19751__auto__ = (function (){var switch__19638__auto__ = ((function (c__19750__auto___21463,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_21400){
var state_val_21401 = (state_21400[(1)]);
if((state_val_21401 === (7))){
var inst_21318 = (state_21400[(2)]);
var state_21400__$1 = state_21400;
var statearr_21402_21464 = state_21400__$1;
(statearr_21402_21464[(2)] = inst_21318);

(statearr_21402_21464[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21401 === (20))){
var inst_21330 = (state_21400[(7)]);
var state_21400__$1 = state_21400;
var statearr_21403_21465 = state_21400__$1;
(statearr_21403_21465[(2)] = inst_21330);

(statearr_21403_21465[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21401 === (27))){
var state_21400__$1 = state_21400;
var statearr_21404_21466 = state_21400__$1;
(statearr_21404_21466[(2)] = null);

(statearr_21404_21466[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21401 === (1))){
var inst_21306 = (state_21400[(8)]);
var inst_21306__$1 = calc_state.call(null);
var inst_21308 = (inst_21306__$1 == null);
var inst_21309 = cljs.core.not.call(null,inst_21308);
var state_21400__$1 = (function (){var statearr_21405 = state_21400;
(statearr_21405[(8)] = inst_21306__$1);

return statearr_21405;
})();
if(inst_21309){
var statearr_21406_21467 = state_21400__$1;
(statearr_21406_21467[(1)] = (2));

} else {
var statearr_21407_21468 = state_21400__$1;
(statearr_21407_21468[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21401 === (24))){
var inst_21353 = (state_21400[(9)]);
var inst_21360 = (state_21400[(10)]);
var inst_21374 = (state_21400[(11)]);
var inst_21374__$1 = inst_21353.call(null,inst_21360);
var state_21400__$1 = (function (){var statearr_21408 = state_21400;
(statearr_21408[(11)] = inst_21374__$1);

return statearr_21408;
})();
if(cljs.core.truth_(inst_21374__$1)){
var statearr_21409_21469 = state_21400__$1;
(statearr_21409_21469[(1)] = (29));

} else {
var statearr_21410_21470 = state_21400__$1;
(statearr_21410_21470[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21401 === (4))){
var inst_21321 = (state_21400[(2)]);
var state_21400__$1 = state_21400;
if(cljs.core.truth_(inst_21321)){
var statearr_21411_21471 = state_21400__$1;
(statearr_21411_21471[(1)] = (8));

} else {
var statearr_21412_21472 = state_21400__$1;
(statearr_21412_21472[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21401 === (15))){
var inst_21347 = (state_21400[(2)]);
var state_21400__$1 = state_21400;
if(cljs.core.truth_(inst_21347)){
var statearr_21413_21473 = state_21400__$1;
(statearr_21413_21473[(1)] = (19));

} else {
var statearr_21414_21474 = state_21400__$1;
(statearr_21414_21474[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21401 === (21))){
var inst_21352 = (state_21400[(12)]);
var inst_21352__$1 = (state_21400[(2)]);
var inst_21353 = cljs.core.get.call(null,inst_21352__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21354 = cljs.core.get.call(null,inst_21352__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21355 = cljs.core.get.call(null,inst_21352__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_21400__$1 = (function (){var statearr_21415 = state_21400;
(statearr_21415[(13)] = inst_21354);

(statearr_21415[(12)] = inst_21352__$1);

(statearr_21415[(9)] = inst_21353);

return statearr_21415;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_21400__$1,(22),inst_21355);
} else {
if((state_val_21401 === (31))){
var inst_21382 = (state_21400[(2)]);
var state_21400__$1 = state_21400;
if(cljs.core.truth_(inst_21382)){
var statearr_21416_21475 = state_21400__$1;
(statearr_21416_21475[(1)] = (32));

} else {
var statearr_21417_21476 = state_21400__$1;
(statearr_21417_21476[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21401 === (32))){
var inst_21359 = (state_21400[(14)]);
var state_21400__$1 = state_21400;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21400__$1,(35),out,inst_21359);
} else {
if((state_val_21401 === (33))){
var inst_21352 = (state_21400[(12)]);
var inst_21330 = inst_21352;
var state_21400__$1 = (function (){var statearr_21418 = state_21400;
(statearr_21418[(7)] = inst_21330);

return statearr_21418;
})();
var statearr_21419_21477 = state_21400__$1;
(statearr_21419_21477[(2)] = null);

(statearr_21419_21477[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21401 === (13))){
var inst_21330 = (state_21400[(7)]);
var inst_21337 = inst_21330.cljs$lang$protocol_mask$partition0$;
var inst_21338 = (inst_21337 & (64));
var inst_21339 = inst_21330.cljs$core$ISeq$;
var inst_21340 = (inst_21338) || (inst_21339);
var state_21400__$1 = state_21400;
if(cljs.core.truth_(inst_21340)){
var statearr_21420_21478 = state_21400__$1;
(statearr_21420_21478[(1)] = (16));

} else {
var statearr_21421_21479 = state_21400__$1;
(statearr_21421_21479[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21401 === (22))){
var inst_21359 = (state_21400[(14)]);
var inst_21360 = (state_21400[(10)]);
var inst_21358 = (state_21400[(2)]);
var inst_21359__$1 = cljs.core.nth.call(null,inst_21358,(0),null);
var inst_21360__$1 = cljs.core.nth.call(null,inst_21358,(1),null);
var inst_21361 = (inst_21359__$1 == null);
var inst_21362 = cljs.core._EQ_.call(null,inst_21360__$1,change);
var inst_21363 = (inst_21361) || (inst_21362);
var state_21400__$1 = (function (){var statearr_21422 = state_21400;
(statearr_21422[(14)] = inst_21359__$1);

(statearr_21422[(10)] = inst_21360__$1);

return statearr_21422;
})();
if(cljs.core.truth_(inst_21363)){
var statearr_21423_21480 = state_21400__$1;
(statearr_21423_21480[(1)] = (23));

} else {
var statearr_21424_21481 = state_21400__$1;
(statearr_21424_21481[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21401 === (36))){
var inst_21352 = (state_21400[(12)]);
var inst_21330 = inst_21352;
var state_21400__$1 = (function (){var statearr_21425 = state_21400;
(statearr_21425[(7)] = inst_21330);

return statearr_21425;
})();
var statearr_21426_21482 = state_21400__$1;
(statearr_21426_21482[(2)] = null);

(statearr_21426_21482[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21401 === (29))){
var inst_21374 = (state_21400[(11)]);
var state_21400__$1 = state_21400;
var statearr_21427_21483 = state_21400__$1;
(statearr_21427_21483[(2)] = inst_21374);

(statearr_21427_21483[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21401 === (6))){
var state_21400__$1 = state_21400;
var statearr_21428_21484 = state_21400__$1;
(statearr_21428_21484[(2)] = false);

(statearr_21428_21484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21401 === (28))){
var inst_21370 = (state_21400[(2)]);
var inst_21371 = calc_state.call(null);
var inst_21330 = inst_21371;
var state_21400__$1 = (function (){var statearr_21429 = state_21400;
(statearr_21429[(15)] = inst_21370);

(statearr_21429[(7)] = inst_21330);

return statearr_21429;
})();
var statearr_21430_21485 = state_21400__$1;
(statearr_21430_21485[(2)] = null);

(statearr_21430_21485[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21401 === (25))){
var inst_21396 = (state_21400[(2)]);
var state_21400__$1 = state_21400;
var statearr_21431_21486 = state_21400__$1;
(statearr_21431_21486[(2)] = inst_21396);

(statearr_21431_21486[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21401 === (34))){
var inst_21394 = (state_21400[(2)]);
var state_21400__$1 = state_21400;
var statearr_21432_21487 = state_21400__$1;
(statearr_21432_21487[(2)] = inst_21394);

(statearr_21432_21487[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21401 === (17))){
var state_21400__$1 = state_21400;
var statearr_21433_21488 = state_21400__$1;
(statearr_21433_21488[(2)] = false);

(statearr_21433_21488[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21401 === (3))){
var state_21400__$1 = state_21400;
var statearr_21434_21489 = state_21400__$1;
(statearr_21434_21489[(2)] = false);

(statearr_21434_21489[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21401 === (12))){
var inst_21398 = (state_21400[(2)]);
var state_21400__$1 = state_21400;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21400__$1,inst_21398);
} else {
if((state_val_21401 === (2))){
var inst_21306 = (state_21400[(8)]);
var inst_21311 = inst_21306.cljs$lang$protocol_mask$partition0$;
var inst_21312 = (inst_21311 & (64));
var inst_21313 = inst_21306.cljs$core$ISeq$;
var inst_21314 = (inst_21312) || (inst_21313);
var state_21400__$1 = state_21400;
if(cljs.core.truth_(inst_21314)){
var statearr_21435_21490 = state_21400__$1;
(statearr_21435_21490[(1)] = (5));

} else {
var statearr_21436_21491 = state_21400__$1;
(statearr_21436_21491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21401 === (23))){
var inst_21359 = (state_21400[(14)]);
var inst_21365 = (inst_21359 == null);
var state_21400__$1 = state_21400;
if(cljs.core.truth_(inst_21365)){
var statearr_21437_21492 = state_21400__$1;
(statearr_21437_21492[(1)] = (26));

} else {
var statearr_21438_21493 = state_21400__$1;
(statearr_21438_21493[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21401 === (35))){
var inst_21385 = (state_21400[(2)]);
var state_21400__$1 = state_21400;
if(cljs.core.truth_(inst_21385)){
var statearr_21439_21494 = state_21400__$1;
(statearr_21439_21494[(1)] = (36));

} else {
var statearr_21440_21495 = state_21400__$1;
(statearr_21440_21495[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21401 === (19))){
var inst_21330 = (state_21400[(7)]);
var inst_21349 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21330);
var state_21400__$1 = state_21400;
var statearr_21441_21496 = state_21400__$1;
(statearr_21441_21496[(2)] = inst_21349);

(statearr_21441_21496[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21401 === (11))){
var inst_21330 = (state_21400[(7)]);
var inst_21334 = (inst_21330 == null);
var inst_21335 = cljs.core.not.call(null,inst_21334);
var state_21400__$1 = state_21400;
if(inst_21335){
var statearr_21442_21497 = state_21400__$1;
(statearr_21442_21497[(1)] = (13));

} else {
var statearr_21443_21498 = state_21400__$1;
(statearr_21443_21498[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21401 === (9))){
var inst_21306 = (state_21400[(8)]);
var state_21400__$1 = state_21400;
var statearr_21444_21499 = state_21400__$1;
(statearr_21444_21499[(2)] = inst_21306);

(statearr_21444_21499[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21401 === (5))){
var state_21400__$1 = state_21400;
var statearr_21445_21500 = state_21400__$1;
(statearr_21445_21500[(2)] = true);

(statearr_21445_21500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21401 === (14))){
var state_21400__$1 = state_21400;
var statearr_21446_21501 = state_21400__$1;
(statearr_21446_21501[(2)] = false);

(statearr_21446_21501[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21401 === (26))){
var inst_21360 = (state_21400[(10)]);
var inst_21367 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_21360);
var state_21400__$1 = state_21400;
var statearr_21447_21502 = state_21400__$1;
(statearr_21447_21502[(2)] = inst_21367);

(statearr_21447_21502[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21401 === (16))){
var state_21400__$1 = state_21400;
var statearr_21448_21503 = state_21400__$1;
(statearr_21448_21503[(2)] = true);

(statearr_21448_21503[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21401 === (38))){
var inst_21390 = (state_21400[(2)]);
var state_21400__$1 = state_21400;
var statearr_21449_21504 = state_21400__$1;
(statearr_21449_21504[(2)] = inst_21390);

(statearr_21449_21504[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21401 === (30))){
var inst_21354 = (state_21400[(13)]);
var inst_21353 = (state_21400[(9)]);
var inst_21360 = (state_21400[(10)]);
var inst_21377 = cljs.core.empty_QMARK_.call(null,inst_21353);
var inst_21378 = inst_21354.call(null,inst_21360);
var inst_21379 = cljs.core.not.call(null,inst_21378);
var inst_21380 = (inst_21377) && (inst_21379);
var state_21400__$1 = state_21400;
var statearr_21450_21505 = state_21400__$1;
(statearr_21450_21505[(2)] = inst_21380);

(statearr_21450_21505[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21401 === (10))){
var inst_21306 = (state_21400[(8)]);
var inst_21326 = (state_21400[(2)]);
var inst_21327 = cljs.core.get.call(null,inst_21326,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21328 = cljs.core.get.call(null,inst_21326,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21329 = cljs.core.get.call(null,inst_21326,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21330 = inst_21306;
var state_21400__$1 = (function (){var statearr_21451 = state_21400;
(statearr_21451[(16)] = inst_21328);

(statearr_21451[(17)] = inst_21329);

(statearr_21451[(18)] = inst_21327);

(statearr_21451[(7)] = inst_21330);

return statearr_21451;
})();
var statearr_21452_21506 = state_21400__$1;
(statearr_21452_21506[(2)] = null);

(statearr_21452_21506[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21401 === (18))){
var inst_21344 = (state_21400[(2)]);
var state_21400__$1 = state_21400;
var statearr_21453_21507 = state_21400__$1;
(statearr_21453_21507[(2)] = inst_21344);

(statearr_21453_21507[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21401 === (37))){
var state_21400__$1 = state_21400;
var statearr_21454_21508 = state_21400__$1;
(statearr_21454_21508[(2)] = null);

(statearr_21454_21508[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21401 === (8))){
var inst_21306 = (state_21400[(8)]);
var inst_21323 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21306);
var state_21400__$1 = state_21400;
var statearr_21455_21509 = state_21400__$1;
(statearr_21455_21509[(2)] = inst_21323);

(statearr_21455_21509[(1)] = (10));


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
});})(c__19750__auto___21463,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19638__auto__,c__19750__auto___21463,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19639__auto__ = null;
var cljs$core$async$mix_$_state_machine__19639__auto____0 = (function (){
var statearr_21459 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21459[(0)] = cljs$core$async$mix_$_state_machine__19639__auto__);

(statearr_21459[(1)] = (1));

return statearr_21459;
});
var cljs$core$async$mix_$_state_machine__19639__auto____1 = (function (state_21400){
while(true){
var ret_value__19640__auto__ = (function (){try{while(true){
var result__19641__auto__ = switch__19638__auto__.call(null,state_21400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19641__auto__;
}
break;
}
}catch (e21460){if((e21460 instanceof Object)){
var ex__19642__auto__ = e21460;
var statearr_21461_21510 = state_21400;
(statearr_21461_21510[(5)] = ex__19642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21511 = state_21400;
state_21400 = G__21511;
continue;
} else {
return ret_value__19640__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19639__auto__ = function(state_21400){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19639__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19639__auto____1.call(this,state_21400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19639__auto____0;
cljs$core$async$mix_$_state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19639__auto____1;
return cljs$core$async$mix_$_state_machine__19639__auto__;
})()
;})(switch__19638__auto__,c__19750__auto___21463,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19752__auto__ = (function (){var statearr_21462 = f__19751__auto__.call(null);
(statearr_21462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19750__auto___21463);

return statearr_21462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19752__auto__);
});})(c__19750__auto___21463,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17482__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p,v,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args21512 = [];
var len__17884__auto___21515 = arguments.length;
var i__17885__auto___21516 = (0);
while(true){
if((i__17885__auto___21516 < len__17884__auto___21515)){
args21512.push((arguments[i__17885__auto___21516]));

var G__21517 = (i__17885__auto___21516 + (1));
i__17885__auto___21516 = G__21517;
continue;
} else {
}
break;
}

var G__21514 = args21512.length;
switch (G__21514) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21512.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p);
} else {
var m__17482__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p,v);
} else {
var m__17482__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args21520 = [];
var len__17884__auto___21645 = arguments.length;
var i__17885__auto___21646 = (0);
while(true){
if((i__17885__auto___21646 < len__17884__auto___21645)){
args21520.push((arguments[i__17885__auto___21646]));

var G__21647 = (i__17885__auto___21646 + (1));
i__17885__auto___21646 = G__21647;
continue;
} else {
}
break;
}

var G__21522 = args21520.length;
switch (G__21522) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21520.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16826__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16826__auto__,mults){
return (function (p1__21519_SHARP_){
if(cljs.core.truth_(p1__21519_SHARP_.call(null,topic))){
return p1__21519_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__21519_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16826__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async21523 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21523 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta21524){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta21524 = meta21524;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21523.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_21525,meta21524__$1){
var self__ = this;
var _21525__$1 = this;
return (new cljs.core.async.t_cljs$core$async21523(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta21524__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21523.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_21525){
var self__ = this;
var _21525__$1 = this;
return self__.meta21524;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21523.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21523.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21523.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async21523.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21523.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21523.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21523.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21523.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta21524","meta21524",974236711,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21523.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21523.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21523";

cljs.core.async.t_cljs$core$async21523.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async21523");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async21523 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async21523(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21524){
return (new cljs.core.async.t_cljs$core$async21523(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21524));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async21523(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19750__auto___21649 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19750__auto___21649,mults,ensure_mult,p){
return (function (){
var f__19751__auto__ = (function (){var switch__19638__auto__ = ((function (c__19750__auto___21649,mults,ensure_mult,p){
return (function (state_21597){
var state_val_21598 = (state_21597[(1)]);
if((state_val_21598 === (7))){
var inst_21593 = (state_21597[(2)]);
var state_21597__$1 = state_21597;
var statearr_21599_21650 = state_21597__$1;
(statearr_21599_21650[(2)] = inst_21593);

(statearr_21599_21650[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21598 === (20))){
var state_21597__$1 = state_21597;
var statearr_21600_21651 = state_21597__$1;
(statearr_21600_21651[(2)] = null);

(statearr_21600_21651[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21598 === (1))){
var state_21597__$1 = state_21597;
var statearr_21601_21652 = state_21597__$1;
(statearr_21601_21652[(2)] = null);

(statearr_21601_21652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21598 === (24))){
var inst_21576 = (state_21597[(7)]);
var inst_21585 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_21576);
var state_21597__$1 = state_21597;
var statearr_21602_21653 = state_21597__$1;
(statearr_21602_21653[(2)] = inst_21585);

(statearr_21602_21653[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21598 === (4))){
var inst_21528 = (state_21597[(8)]);
var inst_21528__$1 = (state_21597[(2)]);
var inst_21529 = (inst_21528__$1 == null);
var state_21597__$1 = (function (){var statearr_21603 = state_21597;
(statearr_21603[(8)] = inst_21528__$1);

return statearr_21603;
})();
if(cljs.core.truth_(inst_21529)){
var statearr_21604_21654 = state_21597__$1;
(statearr_21604_21654[(1)] = (5));

} else {
var statearr_21605_21655 = state_21597__$1;
(statearr_21605_21655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21598 === (15))){
var inst_21570 = (state_21597[(2)]);
var state_21597__$1 = state_21597;
var statearr_21606_21656 = state_21597__$1;
(statearr_21606_21656[(2)] = inst_21570);

(statearr_21606_21656[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21598 === (21))){
var inst_21590 = (state_21597[(2)]);
var state_21597__$1 = (function (){var statearr_21607 = state_21597;
(statearr_21607[(9)] = inst_21590);

return statearr_21607;
})();
var statearr_21608_21657 = state_21597__$1;
(statearr_21608_21657[(2)] = null);

(statearr_21608_21657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21598 === (13))){
var inst_21552 = (state_21597[(10)]);
var inst_21554 = cljs.core.chunked_seq_QMARK_.call(null,inst_21552);
var state_21597__$1 = state_21597;
if(inst_21554){
var statearr_21609_21658 = state_21597__$1;
(statearr_21609_21658[(1)] = (16));

} else {
var statearr_21610_21659 = state_21597__$1;
(statearr_21610_21659[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21598 === (22))){
var inst_21582 = (state_21597[(2)]);
var state_21597__$1 = state_21597;
if(cljs.core.truth_(inst_21582)){
var statearr_21611_21660 = state_21597__$1;
(statearr_21611_21660[(1)] = (23));

} else {
var statearr_21612_21661 = state_21597__$1;
(statearr_21612_21661[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21598 === (6))){
var inst_21578 = (state_21597[(11)]);
var inst_21528 = (state_21597[(8)]);
var inst_21576 = (state_21597[(7)]);
var inst_21576__$1 = topic_fn.call(null,inst_21528);
var inst_21577 = cljs.core.deref.call(null,mults);
var inst_21578__$1 = cljs.core.get.call(null,inst_21577,inst_21576__$1);
var state_21597__$1 = (function (){var statearr_21613 = state_21597;
(statearr_21613[(11)] = inst_21578__$1);

(statearr_21613[(7)] = inst_21576__$1);

return statearr_21613;
})();
if(cljs.core.truth_(inst_21578__$1)){
var statearr_21614_21662 = state_21597__$1;
(statearr_21614_21662[(1)] = (19));

} else {
var statearr_21615_21663 = state_21597__$1;
(statearr_21615_21663[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21598 === (25))){
var inst_21587 = (state_21597[(2)]);
var state_21597__$1 = state_21597;
var statearr_21616_21664 = state_21597__$1;
(statearr_21616_21664[(2)] = inst_21587);

(statearr_21616_21664[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21598 === (17))){
var inst_21552 = (state_21597[(10)]);
var inst_21561 = cljs.core.first.call(null,inst_21552);
var inst_21562 = cljs.core.async.muxch_STAR_.call(null,inst_21561);
var inst_21563 = cljs.core.async.close_BANG_.call(null,inst_21562);
var inst_21564 = cljs.core.next.call(null,inst_21552);
var inst_21538 = inst_21564;
var inst_21539 = null;
var inst_21540 = (0);
var inst_21541 = (0);
var state_21597__$1 = (function (){var statearr_21617 = state_21597;
(statearr_21617[(12)] = inst_21538);

(statearr_21617[(13)] = inst_21540);

(statearr_21617[(14)] = inst_21541);

(statearr_21617[(15)] = inst_21539);

(statearr_21617[(16)] = inst_21563);

return statearr_21617;
})();
var statearr_21618_21665 = state_21597__$1;
(statearr_21618_21665[(2)] = null);

(statearr_21618_21665[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21598 === (3))){
var inst_21595 = (state_21597[(2)]);
var state_21597__$1 = state_21597;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21597__$1,inst_21595);
} else {
if((state_val_21598 === (12))){
var inst_21572 = (state_21597[(2)]);
var state_21597__$1 = state_21597;
var statearr_21619_21666 = state_21597__$1;
(statearr_21619_21666[(2)] = inst_21572);

(statearr_21619_21666[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21598 === (2))){
var state_21597__$1 = state_21597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21597__$1,(4),ch);
} else {
if((state_val_21598 === (23))){
var state_21597__$1 = state_21597;
var statearr_21620_21667 = state_21597__$1;
(statearr_21620_21667[(2)] = null);

(statearr_21620_21667[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21598 === (19))){
var inst_21578 = (state_21597[(11)]);
var inst_21528 = (state_21597[(8)]);
var inst_21580 = cljs.core.async.muxch_STAR_.call(null,inst_21578);
var state_21597__$1 = state_21597;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21597__$1,(22),inst_21580,inst_21528);
} else {
if((state_val_21598 === (11))){
var inst_21538 = (state_21597[(12)]);
var inst_21552 = (state_21597[(10)]);
var inst_21552__$1 = cljs.core.seq.call(null,inst_21538);
var state_21597__$1 = (function (){var statearr_21621 = state_21597;
(statearr_21621[(10)] = inst_21552__$1);

return statearr_21621;
})();
if(inst_21552__$1){
var statearr_21622_21668 = state_21597__$1;
(statearr_21622_21668[(1)] = (13));

} else {
var statearr_21623_21669 = state_21597__$1;
(statearr_21623_21669[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21598 === (9))){
var inst_21574 = (state_21597[(2)]);
var state_21597__$1 = state_21597;
var statearr_21624_21670 = state_21597__$1;
(statearr_21624_21670[(2)] = inst_21574);

(statearr_21624_21670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21598 === (5))){
var inst_21535 = cljs.core.deref.call(null,mults);
var inst_21536 = cljs.core.vals.call(null,inst_21535);
var inst_21537 = cljs.core.seq.call(null,inst_21536);
var inst_21538 = inst_21537;
var inst_21539 = null;
var inst_21540 = (0);
var inst_21541 = (0);
var state_21597__$1 = (function (){var statearr_21625 = state_21597;
(statearr_21625[(12)] = inst_21538);

(statearr_21625[(13)] = inst_21540);

(statearr_21625[(14)] = inst_21541);

(statearr_21625[(15)] = inst_21539);

return statearr_21625;
})();
var statearr_21626_21671 = state_21597__$1;
(statearr_21626_21671[(2)] = null);

(statearr_21626_21671[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21598 === (14))){
var state_21597__$1 = state_21597;
var statearr_21630_21672 = state_21597__$1;
(statearr_21630_21672[(2)] = null);

(statearr_21630_21672[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21598 === (16))){
var inst_21552 = (state_21597[(10)]);
var inst_21556 = cljs.core.chunk_first.call(null,inst_21552);
var inst_21557 = cljs.core.chunk_rest.call(null,inst_21552);
var inst_21558 = cljs.core.count.call(null,inst_21556);
var inst_21538 = inst_21557;
var inst_21539 = inst_21556;
var inst_21540 = inst_21558;
var inst_21541 = (0);
var state_21597__$1 = (function (){var statearr_21631 = state_21597;
(statearr_21631[(12)] = inst_21538);

(statearr_21631[(13)] = inst_21540);

(statearr_21631[(14)] = inst_21541);

(statearr_21631[(15)] = inst_21539);

return statearr_21631;
})();
var statearr_21632_21673 = state_21597__$1;
(statearr_21632_21673[(2)] = null);

(statearr_21632_21673[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21598 === (10))){
var inst_21538 = (state_21597[(12)]);
var inst_21540 = (state_21597[(13)]);
var inst_21541 = (state_21597[(14)]);
var inst_21539 = (state_21597[(15)]);
var inst_21546 = cljs.core._nth.call(null,inst_21539,inst_21541);
var inst_21547 = cljs.core.async.muxch_STAR_.call(null,inst_21546);
var inst_21548 = cljs.core.async.close_BANG_.call(null,inst_21547);
var inst_21549 = (inst_21541 + (1));
var tmp21627 = inst_21538;
var tmp21628 = inst_21540;
var tmp21629 = inst_21539;
var inst_21538__$1 = tmp21627;
var inst_21539__$1 = tmp21629;
var inst_21540__$1 = tmp21628;
var inst_21541__$1 = inst_21549;
var state_21597__$1 = (function (){var statearr_21633 = state_21597;
(statearr_21633[(17)] = inst_21548);

(statearr_21633[(12)] = inst_21538__$1);

(statearr_21633[(13)] = inst_21540__$1);

(statearr_21633[(14)] = inst_21541__$1);

(statearr_21633[(15)] = inst_21539__$1);

return statearr_21633;
})();
var statearr_21634_21674 = state_21597__$1;
(statearr_21634_21674[(2)] = null);

(statearr_21634_21674[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21598 === (18))){
var inst_21567 = (state_21597[(2)]);
var state_21597__$1 = state_21597;
var statearr_21635_21675 = state_21597__$1;
(statearr_21635_21675[(2)] = inst_21567);

(statearr_21635_21675[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21598 === (8))){
var inst_21540 = (state_21597[(13)]);
var inst_21541 = (state_21597[(14)]);
var inst_21543 = (inst_21541 < inst_21540);
var inst_21544 = inst_21543;
var state_21597__$1 = state_21597;
if(cljs.core.truth_(inst_21544)){
var statearr_21636_21676 = state_21597__$1;
(statearr_21636_21676[(1)] = (10));

} else {
var statearr_21637_21677 = state_21597__$1;
(statearr_21637_21677[(1)] = (11));

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
});})(c__19750__auto___21649,mults,ensure_mult,p))
;
return ((function (switch__19638__auto__,c__19750__auto___21649,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19639__auto__ = null;
var cljs$core$async$state_machine__19639__auto____0 = (function (){
var statearr_21641 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21641[(0)] = cljs$core$async$state_machine__19639__auto__);

(statearr_21641[(1)] = (1));

return statearr_21641;
});
var cljs$core$async$state_machine__19639__auto____1 = (function (state_21597){
while(true){
var ret_value__19640__auto__ = (function (){try{while(true){
var result__19641__auto__ = switch__19638__auto__.call(null,state_21597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19641__auto__;
}
break;
}
}catch (e21642){if((e21642 instanceof Object)){
var ex__19642__auto__ = e21642;
var statearr_21643_21678 = state_21597;
(statearr_21643_21678[(5)] = ex__19642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21679 = state_21597;
state_21597 = G__21679;
continue;
} else {
return ret_value__19640__auto__;
}
break;
}
});
cljs$core$async$state_machine__19639__auto__ = function(state_21597){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19639__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19639__auto____1.call(this,state_21597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19639__auto____0;
cljs$core$async$state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19639__auto____1;
return cljs$core$async$state_machine__19639__auto__;
})()
;})(switch__19638__auto__,c__19750__auto___21649,mults,ensure_mult,p))
})();
var state__19752__auto__ = (function (){var statearr_21644 = f__19751__auto__.call(null);
(statearr_21644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19750__auto___21649);

return statearr_21644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19752__auto__);
});})(c__19750__auto___21649,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args21680 = [];
var len__17884__auto___21683 = arguments.length;
var i__17885__auto___21684 = (0);
while(true){
if((i__17885__auto___21684 < len__17884__auto___21683)){
args21680.push((arguments[i__17885__auto___21684]));

var G__21685 = (i__17885__auto___21684 + (1));
i__17885__auto___21684 = G__21685;
continue;
} else {
}
break;
}

var G__21682 = args21680.length;
switch (G__21682) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21680.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args21687 = [];
var len__17884__auto___21690 = arguments.length;
var i__17885__auto___21691 = (0);
while(true){
if((i__17885__auto___21691 < len__17884__auto___21690)){
args21687.push((arguments[i__17885__auto___21691]));

var G__21692 = (i__17885__auto___21691 + (1));
i__17885__auto___21691 = G__21692;
continue;
} else {
}
break;
}

var G__21689 = args21687.length;
switch (G__21689) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21687.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args21694 = [];
var len__17884__auto___21765 = arguments.length;
var i__17885__auto___21766 = (0);
while(true){
if((i__17885__auto___21766 < len__17884__auto___21765)){
args21694.push((arguments[i__17885__auto___21766]));

var G__21767 = (i__17885__auto___21766 + (1));
i__17885__auto___21766 = G__21767;
continue;
} else {
}
break;
}

var G__21696 = args21694.length;
switch (G__21696) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21694.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19750__auto___21769 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19750__auto___21769,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19751__auto__ = (function (){var switch__19638__auto__ = ((function (c__19750__auto___21769,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_21735){
var state_val_21736 = (state_21735[(1)]);
if((state_val_21736 === (7))){
var state_21735__$1 = state_21735;
var statearr_21737_21770 = state_21735__$1;
(statearr_21737_21770[(2)] = null);

(statearr_21737_21770[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21736 === (1))){
var state_21735__$1 = state_21735;
var statearr_21738_21771 = state_21735__$1;
(statearr_21738_21771[(2)] = null);

(statearr_21738_21771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21736 === (4))){
var inst_21699 = (state_21735[(7)]);
var inst_21701 = (inst_21699 < cnt);
var state_21735__$1 = state_21735;
if(cljs.core.truth_(inst_21701)){
var statearr_21739_21772 = state_21735__$1;
(statearr_21739_21772[(1)] = (6));

} else {
var statearr_21740_21773 = state_21735__$1;
(statearr_21740_21773[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21736 === (15))){
var inst_21731 = (state_21735[(2)]);
var state_21735__$1 = state_21735;
var statearr_21741_21774 = state_21735__$1;
(statearr_21741_21774[(2)] = inst_21731);

(statearr_21741_21774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21736 === (13))){
var inst_21724 = cljs.core.async.close_BANG_.call(null,out);
var state_21735__$1 = state_21735;
var statearr_21742_21775 = state_21735__$1;
(statearr_21742_21775[(2)] = inst_21724);

(statearr_21742_21775[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21736 === (6))){
var state_21735__$1 = state_21735;
var statearr_21743_21776 = state_21735__$1;
(statearr_21743_21776[(2)] = null);

(statearr_21743_21776[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21736 === (3))){
var inst_21733 = (state_21735[(2)]);
var state_21735__$1 = state_21735;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21735__$1,inst_21733);
} else {
if((state_val_21736 === (12))){
var inst_21721 = (state_21735[(8)]);
var inst_21721__$1 = (state_21735[(2)]);
var inst_21722 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_21721__$1);
var state_21735__$1 = (function (){var statearr_21744 = state_21735;
(statearr_21744[(8)] = inst_21721__$1);

return statearr_21744;
})();
if(cljs.core.truth_(inst_21722)){
var statearr_21745_21777 = state_21735__$1;
(statearr_21745_21777[(1)] = (13));

} else {
var statearr_21746_21778 = state_21735__$1;
(statearr_21746_21778[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21736 === (2))){
var inst_21698 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_21699 = (0);
var state_21735__$1 = (function (){var statearr_21747 = state_21735;
(statearr_21747[(7)] = inst_21699);

(statearr_21747[(9)] = inst_21698);

return statearr_21747;
})();
var statearr_21748_21779 = state_21735__$1;
(statearr_21748_21779[(2)] = null);

(statearr_21748_21779[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21736 === (11))){
var inst_21699 = (state_21735[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21735,(10),Object,null,(9));
var inst_21708 = chs__$1.call(null,inst_21699);
var inst_21709 = done.call(null,inst_21699);
var inst_21710 = cljs.core.async.take_BANG_.call(null,inst_21708,inst_21709);
var state_21735__$1 = state_21735;
var statearr_21749_21780 = state_21735__$1;
(statearr_21749_21780[(2)] = inst_21710);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21735__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21736 === (9))){
var inst_21699 = (state_21735[(7)]);
var inst_21712 = (state_21735[(2)]);
var inst_21713 = (inst_21699 + (1));
var inst_21699__$1 = inst_21713;
var state_21735__$1 = (function (){var statearr_21750 = state_21735;
(statearr_21750[(7)] = inst_21699__$1);

(statearr_21750[(10)] = inst_21712);

return statearr_21750;
})();
var statearr_21751_21781 = state_21735__$1;
(statearr_21751_21781[(2)] = null);

(statearr_21751_21781[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21736 === (5))){
var inst_21719 = (state_21735[(2)]);
var state_21735__$1 = (function (){var statearr_21752 = state_21735;
(statearr_21752[(11)] = inst_21719);

return statearr_21752;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21735__$1,(12),dchan);
} else {
if((state_val_21736 === (14))){
var inst_21721 = (state_21735[(8)]);
var inst_21726 = cljs.core.apply.call(null,f,inst_21721);
var state_21735__$1 = state_21735;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21735__$1,(16),out,inst_21726);
} else {
if((state_val_21736 === (16))){
var inst_21728 = (state_21735[(2)]);
var state_21735__$1 = (function (){var statearr_21753 = state_21735;
(statearr_21753[(12)] = inst_21728);

return statearr_21753;
})();
var statearr_21754_21782 = state_21735__$1;
(statearr_21754_21782[(2)] = null);

(statearr_21754_21782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21736 === (10))){
var inst_21703 = (state_21735[(2)]);
var inst_21704 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_21735__$1 = (function (){var statearr_21755 = state_21735;
(statearr_21755[(13)] = inst_21703);

return statearr_21755;
})();
var statearr_21756_21783 = state_21735__$1;
(statearr_21756_21783[(2)] = inst_21704);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21735__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21736 === (8))){
var inst_21717 = (state_21735[(2)]);
var state_21735__$1 = state_21735;
var statearr_21757_21784 = state_21735__$1;
(statearr_21757_21784[(2)] = inst_21717);

(statearr_21757_21784[(1)] = (5));


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
});})(c__19750__auto___21769,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19638__auto__,c__19750__auto___21769,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19639__auto__ = null;
var cljs$core$async$state_machine__19639__auto____0 = (function (){
var statearr_21761 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21761[(0)] = cljs$core$async$state_machine__19639__auto__);

(statearr_21761[(1)] = (1));

return statearr_21761;
});
var cljs$core$async$state_machine__19639__auto____1 = (function (state_21735){
while(true){
var ret_value__19640__auto__ = (function (){try{while(true){
var result__19641__auto__ = switch__19638__auto__.call(null,state_21735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19641__auto__;
}
break;
}
}catch (e21762){if((e21762 instanceof Object)){
var ex__19642__auto__ = e21762;
var statearr_21763_21785 = state_21735;
(statearr_21763_21785[(5)] = ex__19642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21786 = state_21735;
state_21735 = G__21786;
continue;
} else {
return ret_value__19640__auto__;
}
break;
}
});
cljs$core$async$state_machine__19639__auto__ = function(state_21735){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19639__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19639__auto____1.call(this,state_21735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19639__auto____0;
cljs$core$async$state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19639__auto____1;
return cljs$core$async$state_machine__19639__auto__;
})()
;})(switch__19638__auto__,c__19750__auto___21769,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19752__auto__ = (function (){var statearr_21764 = f__19751__auto__.call(null);
(statearr_21764[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19750__auto___21769);

return statearr_21764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19752__auto__);
});})(c__19750__auto___21769,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args21788 = [];
var len__17884__auto___21844 = arguments.length;
var i__17885__auto___21845 = (0);
while(true){
if((i__17885__auto___21845 < len__17884__auto___21844)){
args21788.push((arguments[i__17885__auto___21845]));

var G__21846 = (i__17885__auto___21845 + (1));
i__17885__auto___21845 = G__21846;
continue;
} else {
}
break;
}

var G__21790 = args21788.length;
switch (G__21790) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21788.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19750__auto___21848 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19750__auto___21848,out){
return (function (){
var f__19751__auto__ = (function (){var switch__19638__auto__ = ((function (c__19750__auto___21848,out){
return (function (state_21820){
var state_val_21821 = (state_21820[(1)]);
if((state_val_21821 === (7))){
var inst_21799 = (state_21820[(7)]);
var inst_21800 = (state_21820[(8)]);
var inst_21799__$1 = (state_21820[(2)]);
var inst_21800__$1 = cljs.core.nth.call(null,inst_21799__$1,(0),null);
var inst_21801 = cljs.core.nth.call(null,inst_21799__$1,(1),null);
var inst_21802 = (inst_21800__$1 == null);
var state_21820__$1 = (function (){var statearr_21822 = state_21820;
(statearr_21822[(7)] = inst_21799__$1);

(statearr_21822[(8)] = inst_21800__$1);

(statearr_21822[(9)] = inst_21801);

return statearr_21822;
})();
if(cljs.core.truth_(inst_21802)){
var statearr_21823_21849 = state_21820__$1;
(statearr_21823_21849[(1)] = (8));

} else {
var statearr_21824_21850 = state_21820__$1;
(statearr_21824_21850[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21821 === (1))){
var inst_21791 = cljs.core.vec.call(null,chs);
var inst_21792 = inst_21791;
var state_21820__$1 = (function (){var statearr_21825 = state_21820;
(statearr_21825[(10)] = inst_21792);

return statearr_21825;
})();
var statearr_21826_21851 = state_21820__$1;
(statearr_21826_21851[(2)] = null);

(statearr_21826_21851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21821 === (4))){
var inst_21792 = (state_21820[(10)]);
var state_21820__$1 = state_21820;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21820__$1,(7),inst_21792);
} else {
if((state_val_21821 === (6))){
var inst_21816 = (state_21820[(2)]);
var state_21820__$1 = state_21820;
var statearr_21827_21852 = state_21820__$1;
(statearr_21827_21852[(2)] = inst_21816);

(statearr_21827_21852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21821 === (3))){
var inst_21818 = (state_21820[(2)]);
var state_21820__$1 = state_21820;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21820__$1,inst_21818);
} else {
if((state_val_21821 === (2))){
var inst_21792 = (state_21820[(10)]);
var inst_21794 = cljs.core.count.call(null,inst_21792);
var inst_21795 = (inst_21794 > (0));
var state_21820__$1 = state_21820;
if(cljs.core.truth_(inst_21795)){
var statearr_21829_21853 = state_21820__$1;
(statearr_21829_21853[(1)] = (4));

} else {
var statearr_21830_21854 = state_21820__$1;
(statearr_21830_21854[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21821 === (11))){
var inst_21792 = (state_21820[(10)]);
var inst_21809 = (state_21820[(2)]);
var tmp21828 = inst_21792;
var inst_21792__$1 = tmp21828;
var state_21820__$1 = (function (){var statearr_21831 = state_21820;
(statearr_21831[(11)] = inst_21809);

(statearr_21831[(10)] = inst_21792__$1);

return statearr_21831;
})();
var statearr_21832_21855 = state_21820__$1;
(statearr_21832_21855[(2)] = null);

(statearr_21832_21855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21821 === (9))){
var inst_21800 = (state_21820[(8)]);
var state_21820__$1 = state_21820;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21820__$1,(11),out,inst_21800);
} else {
if((state_val_21821 === (5))){
var inst_21814 = cljs.core.async.close_BANG_.call(null,out);
var state_21820__$1 = state_21820;
var statearr_21833_21856 = state_21820__$1;
(statearr_21833_21856[(2)] = inst_21814);

(statearr_21833_21856[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21821 === (10))){
var inst_21812 = (state_21820[(2)]);
var state_21820__$1 = state_21820;
var statearr_21834_21857 = state_21820__$1;
(statearr_21834_21857[(2)] = inst_21812);

(statearr_21834_21857[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21821 === (8))){
var inst_21799 = (state_21820[(7)]);
var inst_21800 = (state_21820[(8)]);
var inst_21801 = (state_21820[(9)]);
var inst_21792 = (state_21820[(10)]);
var inst_21804 = (function (){var cs = inst_21792;
var vec__21797 = inst_21799;
var v = inst_21800;
var c = inst_21801;
return ((function (cs,vec__21797,v,c,inst_21799,inst_21800,inst_21801,inst_21792,state_val_21821,c__19750__auto___21848,out){
return (function (p1__21787_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__21787_SHARP_);
});
;})(cs,vec__21797,v,c,inst_21799,inst_21800,inst_21801,inst_21792,state_val_21821,c__19750__auto___21848,out))
})();
var inst_21805 = cljs.core.filterv.call(null,inst_21804,inst_21792);
var inst_21792__$1 = inst_21805;
var state_21820__$1 = (function (){var statearr_21835 = state_21820;
(statearr_21835[(10)] = inst_21792__$1);

return statearr_21835;
})();
var statearr_21836_21858 = state_21820__$1;
(statearr_21836_21858[(2)] = null);

(statearr_21836_21858[(1)] = (2));


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
});})(c__19750__auto___21848,out))
;
return ((function (switch__19638__auto__,c__19750__auto___21848,out){
return (function() {
var cljs$core$async$state_machine__19639__auto__ = null;
var cljs$core$async$state_machine__19639__auto____0 = (function (){
var statearr_21840 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21840[(0)] = cljs$core$async$state_machine__19639__auto__);

(statearr_21840[(1)] = (1));

return statearr_21840;
});
var cljs$core$async$state_machine__19639__auto____1 = (function (state_21820){
while(true){
var ret_value__19640__auto__ = (function (){try{while(true){
var result__19641__auto__ = switch__19638__auto__.call(null,state_21820);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19641__auto__;
}
break;
}
}catch (e21841){if((e21841 instanceof Object)){
var ex__19642__auto__ = e21841;
var statearr_21842_21859 = state_21820;
(statearr_21842_21859[(5)] = ex__19642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21860 = state_21820;
state_21820 = G__21860;
continue;
} else {
return ret_value__19640__auto__;
}
break;
}
});
cljs$core$async$state_machine__19639__auto__ = function(state_21820){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19639__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19639__auto____1.call(this,state_21820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19639__auto____0;
cljs$core$async$state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19639__auto____1;
return cljs$core$async$state_machine__19639__auto__;
})()
;})(switch__19638__auto__,c__19750__auto___21848,out))
})();
var state__19752__auto__ = (function (){var statearr_21843 = f__19751__auto__.call(null);
(statearr_21843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19750__auto___21848);

return statearr_21843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19752__auto__);
});})(c__19750__auto___21848,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args21861 = [];
var len__17884__auto___21910 = arguments.length;
var i__17885__auto___21911 = (0);
while(true){
if((i__17885__auto___21911 < len__17884__auto___21910)){
args21861.push((arguments[i__17885__auto___21911]));

var G__21912 = (i__17885__auto___21911 + (1));
i__17885__auto___21911 = G__21912;
continue;
} else {
}
break;
}

var G__21863 = args21861.length;
switch (G__21863) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21861.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19750__auto___21914 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19750__auto___21914,out){
return (function (){
var f__19751__auto__ = (function (){var switch__19638__auto__ = ((function (c__19750__auto___21914,out){
return (function (state_21887){
var state_val_21888 = (state_21887[(1)]);
if((state_val_21888 === (7))){
var inst_21869 = (state_21887[(7)]);
var inst_21869__$1 = (state_21887[(2)]);
var inst_21870 = (inst_21869__$1 == null);
var inst_21871 = cljs.core.not.call(null,inst_21870);
var state_21887__$1 = (function (){var statearr_21889 = state_21887;
(statearr_21889[(7)] = inst_21869__$1);

return statearr_21889;
})();
if(inst_21871){
var statearr_21890_21915 = state_21887__$1;
(statearr_21890_21915[(1)] = (8));

} else {
var statearr_21891_21916 = state_21887__$1;
(statearr_21891_21916[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21888 === (1))){
var inst_21864 = (0);
var state_21887__$1 = (function (){var statearr_21892 = state_21887;
(statearr_21892[(8)] = inst_21864);

return statearr_21892;
})();
var statearr_21893_21917 = state_21887__$1;
(statearr_21893_21917[(2)] = null);

(statearr_21893_21917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21888 === (4))){
var state_21887__$1 = state_21887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21887__$1,(7),ch);
} else {
if((state_val_21888 === (6))){
var inst_21882 = (state_21887[(2)]);
var state_21887__$1 = state_21887;
var statearr_21894_21918 = state_21887__$1;
(statearr_21894_21918[(2)] = inst_21882);

(statearr_21894_21918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21888 === (3))){
var inst_21884 = (state_21887[(2)]);
var inst_21885 = cljs.core.async.close_BANG_.call(null,out);
var state_21887__$1 = (function (){var statearr_21895 = state_21887;
(statearr_21895[(9)] = inst_21884);

return statearr_21895;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21887__$1,inst_21885);
} else {
if((state_val_21888 === (2))){
var inst_21864 = (state_21887[(8)]);
var inst_21866 = (inst_21864 < n);
var state_21887__$1 = state_21887;
if(cljs.core.truth_(inst_21866)){
var statearr_21896_21919 = state_21887__$1;
(statearr_21896_21919[(1)] = (4));

} else {
var statearr_21897_21920 = state_21887__$1;
(statearr_21897_21920[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21888 === (11))){
var inst_21864 = (state_21887[(8)]);
var inst_21874 = (state_21887[(2)]);
var inst_21875 = (inst_21864 + (1));
var inst_21864__$1 = inst_21875;
var state_21887__$1 = (function (){var statearr_21898 = state_21887;
(statearr_21898[(8)] = inst_21864__$1);

(statearr_21898[(10)] = inst_21874);

return statearr_21898;
})();
var statearr_21899_21921 = state_21887__$1;
(statearr_21899_21921[(2)] = null);

(statearr_21899_21921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21888 === (9))){
var state_21887__$1 = state_21887;
var statearr_21900_21922 = state_21887__$1;
(statearr_21900_21922[(2)] = null);

(statearr_21900_21922[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21888 === (5))){
var state_21887__$1 = state_21887;
var statearr_21901_21923 = state_21887__$1;
(statearr_21901_21923[(2)] = null);

(statearr_21901_21923[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21888 === (10))){
var inst_21879 = (state_21887[(2)]);
var state_21887__$1 = state_21887;
var statearr_21902_21924 = state_21887__$1;
(statearr_21902_21924[(2)] = inst_21879);

(statearr_21902_21924[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21888 === (8))){
var inst_21869 = (state_21887[(7)]);
var state_21887__$1 = state_21887;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21887__$1,(11),out,inst_21869);
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
});})(c__19750__auto___21914,out))
;
return ((function (switch__19638__auto__,c__19750__auto___21914,out){
return (function() {
var cljs$core$async$state_machine__19639__auto__ = null;
var cljs$core$async$state_machine__19639__auto____0 = (function (){
var statearr_21906 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21906[(0)] = cljs$core$async$state_machine__19639__auto__);

(statearr_21906[(1)] = (1));

return statearr_21906;
});
var cljs$core$async$state_machine__19639__auto____1 = (function (state_21887){
while(true){
var ret_value__19640__auto__ = (function (){try{while(true){
var result__19641__auto__ = switch__19638__auto__.call(null,state_21887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19641__auto__;
}
break;
}
}catch (e21907){if((e21907 instanceof Object)){
var ex__19642__auto__ = e21907;
var statearr_21908_21925 = state_21887;
(statearr_21908_21925[(5)] = ex__19642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21926 = state_21887;
state_21887 = G__21926;
continue;
} else {
return ret_value__19640__auto__;
}
break;
}
});
cljs$core$async$state_machine__19639__auto__ = function(state_21887){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19639__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19639__auto____1.call(this,state_21887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19639__auto____0;
cljs$core$async$state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19639__auto____1;
return cljs$core$async$state_machine__19639__auto__;
})()
;})(switch__19638__auto__,c__19750__auto___21914,out))
})();
var state__19752__auto__ = (function (){var statearr_21909 = f__19751__auto__.call(null);
(statearr_21909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19750__auto___21914);

return statearr_21909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19752__auto__);
});})(c__19750__auto___21914,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21934 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21934 = (function (map_LT_,f,ch,meta21935){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21935 = meta21935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21936,meta21935__$1){
var self__ = this;
var _21936__$1 = this;
return (new cljs.core.async.t_cljs$core$async21934(self__.map_LT_,self__.f,self__.ch,meta21935__$1));
});

cljs.core.async.t_cljs$core$async21934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21936){
var self__ = this;
var _21936__$1 = this;
return self__.meta21935;
});

cljs.core.async.t_cljs$core$async21934.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21934.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21934.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21934.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21934.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async21937 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21937 = (function (map_LT_,f,ch,meta21935,_,fn1,meta21938){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21935 = meta21935;
this._ = _;
this.fn1 = fn1;
this.meta21938 = meta21938;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21939,meta21938__$1){
var self__ = this;
var _21939__$1 = this;
return (new cljs.core.async.t_cljs$core$async21937(self__.map_LT_,self__.f,self__.ch,self__.meta21935,self__._,self__.fn1,meta21938__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async21937.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21939){
var self__ = this;
var _21939__$1 = this;
return self__.meta21938;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21937.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21937.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21937.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21937.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__21927_SHARP_){
return f1.call(null,(((p1__21927_SHARP_ == null))?null:self__.f.call(null,p1__21927_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async21937.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21935","meta21935",849359436,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async21934","cljs.core.async/t_cljs$core$async21934",777021193,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta21938","meta21938",-621819069,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21937.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21937.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21937";

cljs.core.async.t_cljs$core$async21937.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async21937");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async21937 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21937(map_LT___$1,f__$1,ch__$1,meta21935__$1,___$2,fn1__$1,meta21938){
return (new cljs.core.async.t_cljs$core$async21937(map_LT___$1,f__$1,ch__$1,meta21935__$1,___$2,fn1__$1,meta21938));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async21937(self__.map_LT_,self__.f,self__.ch,self__.meta21935,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16814__auto__ = ret;
if(cljs.core.truth_(and__16814__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16814__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async21934.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21934.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async21934.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21935","meta21935",849359436,null)], null);
});

cljs.core.async.t_cljs$core$async21934.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21934.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21934";

cljs.core.async.t_cljs$core$async21934.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async21934");
});

cljs.core.async.__GT_t_cljs$core$async21934 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21934(map_LT___$1,f__$1,ch__$1,meta21935){
return (new cljs.core.async.t_cljs$core$async21934(map_LT___$1,f__$1,ch__$1,meta21935));
});

}

return (new cljs.core.async.t_cljs$core$async21934(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21943 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21943 = (function (map_GT_,f,ch,meta21944){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta21944 = meta21944;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21945,meta21944__$1){
var self__ = this;
var _21945__$1 = this;
return (new cljs.core.async.t_cljs$core$async21943(self__.map_GT_,self__.f,self__.ch,meta21944__$1));
});

cljs.core.async.t_cljs$core$async21943.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21945){
var self__ = this;
var _21945__$1 = this;
return self__.meta21944;
});

cljs.core.async.t_cljs$core$async21943.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21943.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21943.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21943.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21943.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21943.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async21943.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21944","meta21944",-1083430222,null)], null);
});

cljs.core.async.t_cljs$core$async21943.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21943.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21943";

cljs.core.async.t_cljs$core$async21943.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async21943");
});

cljs.core.async.__GT_t_cljs$core$async21943 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async21943(map_GT___$1,f__$1,ch__$1,meta21944){
return (new cljs.core.async.t_cljs$core$async21943(map_GT___$1,f__$1,ch__$1,meta21944));
});

}

return (new cljs.core.async.t_cljs$core$async21943(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async21949 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21949 = (function (filter_GT_,p,ch,meta21950){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta21950 = meta21950;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21949.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21951,meta21950__$1){
var self__ = this;
var _21951__$1 = this;
return (new cljs.core.async.t_cljs$core$async21949(self__.filter_GT_,self__.p,self__.ch,meta21950__$1));
});

cljs.core.async.t_cljs$core$async21949.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21951){
var self__ = this;
var _21951__$1 = this;
return self__.meta21950;
});

cljs.core.async.t_cljs$core$async21949.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21949.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21949.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21949.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21949.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21949.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21949.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async21949.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21950","meta21950",993875612,null)], null);
});

cljs.core.async.t_cljs$core$async21949.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21949.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21949";

cljs.core.async.t_cljs$core$async21949.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async21949");
});

cljs.core.async.__GT_t_cljs$core$async21949 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async21949(filter_GT___$1,p__$1,ch__$1,meta21950){
return (new cljs.core.async.t_cljs$core$async21949(filter_GT___$1,p__$1,ch__$1,meta21950));
});

}

return (new cljs.core.async.t_cljs$core$async21949(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args21952 = [];
var len__17884__auto___21996 = arguments.length;
var i__17885__auto___21997 = (0);
while(true){
if((i__17885__auto___21997 < len__17884__auto___21996)){
args21952.push((arguments[i__17885__auto___21997]));

var G__21998 = (i__17885__auto___21997 + (1));
i__17885__auto___21997 = G__21998;
continue;
} else {
}
break;
}

var G__21954 = args21952.length;
switch (G__21954) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21952.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19750__auto___22000 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19750__auto___22000,out){
return (function (){
var f__19751__auto__ = (function (){var switch__19638__auto__ = ((function (c__19750__auto___22000,out){
return (function (state_21975){
var state_val_21976 = (state_21975[(1)]);
if((state_val_21976 === (7))){
var inst_21971 = (state_21975[(2)]);
var state_21975__$1 = state_21975;
var statearr_21977_22001 = state_21975__$1;
(statearr_21977_22001[(2)] = inst_21971);

(statearr_21977_22001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21976 === (1))){
var state_21975__$1 = state_21975;
var statearr_21978_22002 = state_21975__$1;
(statearr_21978_22002[(2)] = null);

(statearr_21978_22002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21976 === (4))){
var inst_21957 = (state_21975[(7)]);
var inst_21957__$1 = (state_21975[(2)]);
var inst_21958 = (inst_21957__$1 == null);
var state_21975__$1 = (function (){var statearr_21979 = state_21975;
(statearr_21979[(7)] = inst_21957__$1);

return statearr_21979;
})();
if(cljs.core.truth_(inst_21958)){
var statearr_21980_22003 = state_21975__$1;
(statearr_21980_22003[(1)] = (5));

} else {
var statearr_21981_22004 = state_21975__$1;
(statearr_21981_22004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21976 === (6))){
var inst_21957 = (state_21975[(7)]);
var inst_21962 = p.call(null,inst_21957);
var state_21975__$1 = state_21975;
if(cljs.core.truth_(inst_21962)){
var statearr_21982_22005 = state_21975__$1;
(statearr_21982_22005[(1)] = (8));

} else {
var statearr_21983_22006 = state_21975__$1;
(statearr_21983_22006[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21976 === (3))){
var inst_21973 = (state_21975[(2)]);
var state_21975__$1 = state_21975;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21975__$1,inst_21973);
} else {
if((state_val_21976 === (2))){
var state_21975__$1 = state_21975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21975__$1,(4),ch);
} else {
if((state_val_21976 === (11))){
var inst_21965 = (state_21975[(2)]);
var state_21975__$1 = state_21975;
var statearr_21984_22007 = state_21975__$1;
(statearr_21984_22007[(2)] = inst_21965);

(statearr_21984_22007[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21976 === (9))){
var state_21975__$1 = state_21975;
var statearr_21985_22008 = state_21975__$1;
(statearr_21985_22008[(2)] = null);

(statearr_21985_22008[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21976 === (5))){
var inst_21960 = cljs.core.async.close_BANG_.call(null,out);
var state_21975__$1 = state_21975;
var statearr_21986_22009 = state_21975__$1;
(statearr_21986_22009[(2)] = inst_21960);

(statearr_21986_22009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21976 === (10))){
var inst_21968 = (state_21975[(2)]);
var state_21975__$1 = (function (){var statearr_21987 = state_21975;
(statearr_21987[(8)] = inst_21968);

return statearr_21987;
})();
var statearr_21988_22010 = state_21975__$1;
(statearr_21988_22010[(2)] = null);

(statearr_21988_22010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21976 === (8))){
var inst_21957 = (state_21975[(7)]);
var state_21975__$1 = state_21975;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21975__$1,(11),out,inst_21957);
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
});})(c__19750__auto___22000,out))
;
return ((function (switch__19638__auto__,c__19750__auto___22000,out){
return (function() {
var cljs$core$async$state_machine__19639__auto__ = null;
var cljs$core$async$state_machine__19639__auto____0 = (function (){
var statearr_21992 = [null,null,null,null,null,null,null,null,null];
(statearr_21992[(0)] = cljs$core$async$state_machine__19639__auto__);

(statearr_21992[(1)] = (1));

return statearr_21992;
});
var cljs$core$async$state_machine__19639__auto____1 = (function (state_21975){
while(true){
var ret_value__19640__auto__ = (function (){try{while(true){
var result__19641__auto__ = switch__19638__auto__.call(null,state_21975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19641__auto__;
}
break;
}
}catch (e21993){if((e21993 instanceof Object)){
var ex__19642__auto__ = e21993;
var statearr_21994_22011 = state_21975;
(statearr_21994_22011[(5)] = ex__19642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21993;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22012 = state_21975;
state_21975 = G__22012;
continue;
} else {
return ret_value__19640__auto__;
}
break;
}
});
cljs$core$async$state_machine__19639__auto__ = function(state_21975){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19639__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19639__auto____1.call(this,state_21975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19639__auto____0;
cljs$core$async$state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19639__auto____1;
return cljs$core$async$state_machine__19639__auto__;
})()
;})(switch__19638__auto__,c__19750__auto___22000,out))
})();
var state__19752__auto__ = (function (){var statearr_21995 = f__19751__auto__.call(null);
(statearr_21995[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19750__auto___22000);

return statearr_21995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19752__auto__);
});})(c__19750__auto___22000,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args22013 = [];
var len__17884__auto___22016 = arguments.length;
var i__17885__auto___22017 = (0);
while(true){
if((i__17885__auto___22017 < len__17884__auto___22016)){
args22013.push((arguments[i__17885__auto___22017]));

var G__22018 = (i__17885__auto___22017 + (1));
i__17885__auto___22017 = G__22018;
continue;
} else {
}
break;
}

var G__22015 = args22013.length;
switch (G__22015) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22013.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19750__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19750__auto__){
return (function (){
var f__19751__auto__ = (function (){var switch__19638__auto__ = ((function (c__19750__auto__){
return (function (state_22185){
var state_val_22186 = (state_22185[(1)]);
if((state_val_22186 === (7))){
var inst_22181 = (state_22185[(2)]);
var state_22185__$1 = state_22185;
var statearr_22187_22228 = state_22185__$1;
(statearr_22187_22228[(2)] = inst_22181);

(statearr_22187_22228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22186 === (20))){
var inst_22151 = (state_22185[(7)]);
var inst_22162 = (state_22185[(2)]);
var inst_22163 = cljs.core.next.call(null,inst_22151);
var inst_22137 = inst_22163;
var inst_22138 = null;
var inst_22139 = (0);
var inst_22140 = (0);
var state_22185__$1 = (function (){var statearr_22188 = state_22185;
(statearr_22188[(8)] = inst_22140);

(statearr_22188[(9)] = inst_22138);

(statearr_22188[(10)] = inst_22137);

(statearr_22188[(11)] = inst_22139);

(statearr_22188[(12)] = inst_22162);

return statearr_22188;
})();
var statearr_22189_22229 = state_22185__$1;
(statearr_22189_22229[(2)] = null);

(statearr_22189_22229[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22186 === (1))){
var state_22185__$1 = state_22185;
var statearr_22190_22230 = state_22185__$1;
(statearr_22190_22230[(2)] = null);

(statearr_22190_22230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22186 === (4))){
var inst_22126 = (state_22185[(13)]);
var inst_22126__$1 = (state_22185[(2)]);
var inst_22127 = (inst_22126__$1 == null);
var state_22185__$1 = (function (){var statearr_22191 = state_22185;
(statearr_22191[(13)] = inst_22126__$1);

return statearr_22191;
})();
if(cljs.core.truth_(inst_22127)){
var statearr_22192_22231 = state_22185__$1;
(statearr_22192_22231[(1)] = (5));

} else {
var statearr_22193_22232 = state_22185__$1;
(statearr_22193_22232[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22186 === (15))){
var state_22185__$1 = state_22185;
var statearr_22197_22233 = state_22185__$1;
(statearr_22197_22233[(2)] = null);

(statearr_22197_22233[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22186 === (21))){
var state_22185__$1 = state_22185;
var statearr_22198_22234 = state_22185__$1;
(statearr_22198_22234[(2)] = null);

(statearr_22198_22234[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22186 === (13))){
var inst_22140 = (state_22185[(8)]);
var inst_22138 = (state_22185[(9)]);
var inst_22137 = (state_22185[(10)]);
var inst_22139 = (state_22185[(11)]);
var inst_22147 = (state_22185[(2)]);
var inst_22148 = (inst_22140 + (1));
var tmp22194 = inst_22138;
var tmp22195 = inst_22137;
var tmp22196 = inst_22139;
var inst_22137__$1 = tmp22195;
var inst_22138__$1 = tmp22194;
var inst_22139__$1 = tmp22196;
var inst_22140__$1 = inst_22148;
var state_22185__$1 = (function (){var statearr_22199 = state_22185;
(statearr_22199[(14)] = inst_22147);

(statearr_22199[(8)] = inst_22140__$1);

(statearr_22199[(9)] = inst_22138__$1);

(statearr_22199[(10)] = inst_22137__$1);

(statearr_22199[(11)] = inst_22139__$1);

return statearr_22199;
})();
var statearr_22200_22235 = state_22185__$1;
(statearr_22200_22235[(2)] = null);

(statearr_22200_22235[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22186 === (22))){
var state_22185__$1 = state_22185;
var statearr_22201_22236 = state_22185__$1;
(statearr_22201_22236[(2)] = null);

(statearr_22201_22236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22186 === (6))){
var inst_22126 = (state_22185[(13)]);
var inst_22135 = f.call(null,inst_22126);
var inst_22136 = cljs.core.seq.call(null,inst_22135);
var inst_22137 = inst_22136;
var inst_22138 = null;
var inst_22139 = (0);
var inst_22140 = (0);
var state_22185__$1 = (function (){var statearr_22202 = state_22185;
(statearr_22202[(8)] = inst_22140);

(statearr_22202[(9)] = inst_22138);

(statearr_22202[(10)] = inst_22137);

(statearr_22202[(11)] = inst_22139);

return statearr_22202;
})();
var statearr_22203_22237 = state_22185__$1;
(statearr_22203_22237[(2)] = null);

(statearr_22203_22237[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22186 === (17))){
var inst_22151 = (state_22185[(7)]);
var inst_22155 = cljs.core.chunk_first.call(null,inst_22151);
var inst_22156 = cljs.core.chunk_rest.call(null,inst_22151);
var inst_22157 = cljs.core.count.call(null,inst_22155);
var inst_22137 = inst_22156;
var inst_22138 = inst_22155;
var inst_22139 = inst_22157;
var inst_22140 = (0);
var state_22185__$1 = (function (){var statearr_22204 = state_22185;
(statearr_22204[(8)] = inst_22140);

(statearr_22204[(9)] = inst_22138);

(statearr_22204[(10)] = inst_22137);

(statearr_22204[(11)] = inst_22139);

return statearr_22204;
})();
var statearr_22205_22238 = state_22185__$1;
(statearr_22205_22238[(2)] = null);

(statearr_22205_22238[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22186 === (3))){
var inst_22183 = (state_22185[(2)]);
var state_22185__$1 = state_22185;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22185__$1,inst_22183);
} else {
if((state_val_22186 === (12))){
var inst_22171 = (state_22185[(2)]);
var state_22185__$1 = state_22185;
var statearr_22206_22239 = state_22185__$1;
(statearr_22206_22239[(2)] = inst_22171);

(statearr_22206_22239[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22186 === (2))){
var state_22185__$1 = state_22185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22185__$1,(4),in$);
} else {
if((state_val_22186 === (23))){
var inst_22179 = (state_22185[(2)]);
var state_22185__$1 = state_22185;
var statearr_22207_22240 = state_22185__$1;
(statearr_22207_22240[(2)] = inst_22179);

(statearr_22207_22240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22186 === (19))){
var inst_22166 = (state_22185[(2)]);
var state_22185__$1 = state_22185;
var statearr_22208_22241 = state_22185__$1;
(statearr_22208_22241[(2)] = inst_22166);

(statearr_22208_22241[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22186 === (11))){
var inst_22151 = (state_22185[(7)]);
var inst_22137 = (state_22185[(10)]);
var inst_22151__$1 = cljs.core.seq.call(null,inst_22137);
var state_22185__$1 = (function (){var statearr_22209 = state_22185;
(statearr_22209[(7)] = inst_22151__$1);

return statearr_22209;
})();
if(inst_22151__$1){
var statearr_22210_22242 = state_22185__$1;
(statearr_22210_22242[(1)] = (14));

} else {
var statearr_22211_22243 = state_22185__$1;
(statearr_22211_22243[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22186 === (9))){
var inst_22173 = (state_22185[(2)]);
var inst_22174 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_22185__$1 = (function (){var statearr_22212 = state_22185;
(statearr_22212[(15)] = inst_22173);

return statearr_22212;
})();
if(cljs.core.truth_(inst_22174)){
var statearr_22213_22244 = state_22185__$1;
(statearr_22213_22244[(1)] = (21));

} else {
var statearr_22214_22245 = state_22185__$1;
(statearr_22214_22245[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22186 === (5))){
var inst_22129 = cljs.core.async.close_BANG_.call(null,out);
var state_22185__$1 = state_22185;
var statearr_22215_22246 = state_22185__$1;
(statearr_22215_22246[(2)] = inst_22129);

(statearr_22215_22246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22186 === (14))){
var inst_22151 = (state_22185[(7)]);
var inst_22153 = cljs.core.chunked_seq_QMARK_.call(null,inst_22151);
var state_22185__$1 = state_22185;
if(inst_22153){
var statearr_22216_22247 = state_22185__$1;
(statearr_22216_22247[(1)] = (17));

} else {
var statearr_22217_22248 = state_22185__$1;
(statearr_22217_22248[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22186 === (16))){
var inst_22169 = (state_22185[(2)]);
var state_22185__$1 = state_22185;
var statearr_22218_22249 = state_22185__$1;
(statearr_22218_22249[(2)] = inst_22169);

(statearr_22218_22249[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22186 === (10))){
var inst_22140 = (state_22185[(8)]);
var inst_22138 = (state_22185[(9)]);
var inst_22145 = cljs.core._nth.call(null,inst_22138,inst_22140);
var state_22185__$1 = state_22185;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22185__$1,(13),out,inst_22145);
} else {
if((state_val_22186 === (18))){
var inst_22151 = (state_22185[(7)]);
var inst_22160 = cljs.core.first.call(null,inst_22151);
var state_22185__$1 = state_22185;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22185__$1,(20),out,inst_22160);
} else {
if((state_val_22186 === (8))){
var inst_22140 = (state_22185[(8)]);
var inst_22139 = (state_22185[(11)]);
var inst_22142 = (inst_22140 < inst_22139);
var inst_22143 = inst_22142;
var state_22185__$1 = state_22185;
if(cljs.core.truth_(inst_22143)){
var statearr_22219_22250 = state_22185__$1;
(statearr_22219_22250[(1)] = (10));

} else {
var statearr_22220_22251 = state_22185__$1;
(statearr_22220_22251[(1)] = (11));

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
});})(c__19750__auto__))
;
return ((function (switch__19638__auto__,c__19750__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19639__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19639__auto____0 = (function (){
var statearr_22224 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22224[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19639__auto__);

(statearr_22224[(1)] = (1));

return statearr_22224;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19639__auto____1 = (function (state_22185){
while(true){
var ret_value__19640__auto__ = (function (){try{while(true){
var result__19641__auto__ = switch__19638__auto__.call(null,state_22185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19641__auto__;
}
break;
}
}catch (e22225){if((e22225 instanceof Object)){
var ex__19642__auto__ = e22225;
var statearr_22226_22252 = state_22185;
(statearr_22226_22252[(5)] = ex__19642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22253 = state_22185;
state_22185 = G__22253;
continue;
} else {
return ret_value__19640__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19639__auto__ = function(state_22185){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19639__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19639__auto____1.call(this,state_22185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19639__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19639__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19639__auto__;
})()
;})(switch__19638__auto__,c__19750__auto__))
})();
var state__19752__auto__ = (function (){var statearr_22227 = f__19751__auto__.call(null);
(statearr_22227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19750__auto__);

return statearr_22227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19752__auto__);
});})(c__19750__auto__))
);

return c__19750__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args22254 = [];
var len__17884__auto___22257 = arguments.length;
var i__17885__auto___22258 = (0);
while(true){
if((i__17885__auto___22258 < len__17884__auto___22257)){
args22254.push((arguments[i__17885__auto___22258]));

var G__22259 = (i__17885__auto___22258 + (1));
i__17885__auto___22258 = G__22259;
continue;
} else {
}
break;
}

var G__22256 = args22254.length;
switch (G__22256) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22254.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args22261 = [];
var len__17884__auto___22264 = arguments.length;
var i__17885__auto___22265 = (0);
while(true){
if((i__17885__auto___22265 < len__17884__auto___22264)){
args22261.push((arguments[i__17885__auto___22265]));

var G__22266 = (i__17885__auto___22265 + (1));
i__17885__auto___22265 = G__22266;
continue;
} else {
}
break;
}

var G__22263 = args22261.length;
switch (G__22263) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22261.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args22268 = [];
var len__17884__auto___22319 = arguments.length;
var i__17885__auto___22320 = (0);
while(true){
if((i__17885__auto___22320 < len__17884__auto___22319)){
args22268.push((arguments[i__17885__auto___22320]));

var G__22321 = (i__17885__auto___22320 + (1));
i__17885__auto___22320 = G__22321;
continue;
} else {
}
break;
}

var G__22270 = args22268.length;
switch (G__22270) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22268.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19750__auto___22323 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19750__auto___22323,out){
return (function (){
var f__19751__auto__ = (function (){var switch__19638__auto__ = ((function (c__19750__auto___22323,out){
return (function (state_22294){
var state_val_22295 = (state_22294[(1)]);
if((state_val_22295 === (7))){
var inst_22289 = (state_22294[(2)]);
var state_22294__$1 = state_22294;
var statearr_22296_22324 = state_22294__$1;
(statearr_22296_22324[(2)] = inst_22289);

(statearr_22296_22324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22295 === (1))){
var inst_22271 = null;
var state_22294__$1 = (function (){var statearr_22297 = state_22294;
(statearr_22297[(7)] = inst_22271);

return statearr_22297;
})();
var statearr_22298_22325 = state_22294__$1;
(statearr_22298_22325[(2)] = null);

(statearr_22298_22325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22295 === (4))){
var inst_22274 = (state_22294[(8)]);
var inst_22274__$1 = (state_22294[(2)]);
var inst_22275 = (inst_22274__$1 == null);
var inst_22276 = cljs.core.not.call(null,inst_22275);
var state_22294__$1 = (function (){var statearr_22299 = state_22294;
(statearr_22299[(8)] = inst_22274__$1);

return statearr_22299;
})();
if(inst_22276){
var statearr_22300_22326 = state_22294__$1;
(statearr_22300_22326[(1)] = (5));

} else {
var statearr_22301_22327 = state_22294__$1;
(statearr_22301_22327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22295 === (6))){
var state_22294__$1 = state_22294;
var statearr_22302_22328 = state_22294__$1;
(statearr_22302_22328[(2)] = null);

(statearr_22302_22328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22295 === (3))){
var inst_22291 = (state_22294[(2)]);
var inst_22292 = cljs.core.async.close_BANG_.call(null,out);
var state_22294__$1 = (function (){var statearr_22303 = state_22294;
(statearr_22303[(9)] = inst_22291);

return statearr_22303;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22294__$1,inst_22292);
} else {
if((state_val_22295 === (2))){
var state_22294__$1 = state_22294;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22294__$1,(4),ch);
} else {
if((state_val_22295 === (11))){
var inst_22274 = (state_22294[(8)]);
var inst_22283 = (state_22294[(2)]);
var inst_22271 = inst_22274;
var state_22294__$1 = (function (){var statearr_22304 = state_22294;
(statearr_22304[(10)] = inst_22283);

(statearr_22304[(7)] = inst_22271);

return statearr_22304;
})();
var statearr_22305_22329 = state_22294__$1;
(statearr_22305_22329[(2)] = null);

(statearr_22305_22329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22295 === (9))){
var inst_22274 = (state_22294[(8)]);
var state_22294__$1 = state_22294;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22294__$1,(11),out,inst_22274);
} else {
if((state_val_22295 === (5))){
var inst_22274 = (state_22294[(8)]);
var inst_22271 = (state_22294[(7)]);
var inst_22278 = cljs.core._EQ_.call(null,inst_22274,inst_22271);
var state_22294__$1 = state_22294;
if(inst_22278){
var statearr_22307_22330 = state_22294__$1;
(statearr_22307_22330[(1)] = (8));

} else {
var statearr_22308_22331 = state_22294__$1;
(statearr_22308_22331[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22295 === (10))){
var inst_22286 = (state_22294[(2)]);
var state_22294__$1 = state_22294;
var statearr_22309_22332 = state_22294__$1;
(statearr_22309_22332[(2)] = inst_22286);

(statearr_22309_22332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22295 === (8))){
var inst_22271 = (state_22294[(7)]);
var tmp22306 = inst_22271;
var inst_22271__$1 = tmp22306;
var state_22294__$1 = (function (){var statearr_22310 = state_22294;
(statearr_22310[(7)] = inst_22271__$1);

return statearr_22310;
})();
var statearr_22311_22333 = state_22294__$1;
(statearr_22311_22333[(2)] = null);

(statearr_22311_22333[(1)] = (2));


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
});})(c__19750__auto___22323,out))
;
return ((function (switch__19638__auto__,c__19750__auto___22323,out){
return (function() {
var cljs$core$async$state_machine__19639__auto__ = null;
var cljs$core$async$state_machine__19639__auto____0 = (function (){
var statearr_22315 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22315[(0)] = cljs$core$async$state_machine__19639__auto__);

(statearr_22315[(1)] = (1));

return statearr_22315;
});
var cljs$core$async$state_machine__19639__auto____1 = (function (state_22294){
while(true){
var ret_value__19640__auto__ = (function (){try{while(true){
var result__19641__auto__ = switch__19638__auto__.call(null,state_22294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19641__auto__;
}
break;
}
}catch (e22316){if((e22316 instanceof Object)){
var ex__19642__auto__ = e22316;
var statearr_22317_22334 = state_22294;
(statearr_22317_22334[(5)] = ex__19642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22335 = state_22294;
state_22294 = G__22335;
continue;
} else {
return ret_value__19640__auto__;
}
break;
}
});
cljs$core$async$state_machine__19639__auto__ = function(state_22294){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19639__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19639__auto____1.call(this,state_22294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19639__auto____0;
cljs$core$async$state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19639__auto____1;
return cljs$core$async$state_machine__19639__auto__;
})()
;})(switch__19638__auto__,c__19750__auto___22323,out))
})();
var state__19752__auto__ = (function (){var statearr_22318 = f__19751__auto__.call(null);
(statearr_22318[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19750__auto___22323);

return statearr_22318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19752__auto__);
});})(c__19750__auto___22323,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args22336 = [];
var len__17884__auto___22406 = arguments.length;
var i__17885__auto___22407 = (0);
while(true){
if((i__17885__auto___22407 < len__17884__auto___22406)){
args22336.push((arguments[i__17885__auto___22407]));

var G__22408 = (i__17885__auto___22407 + (1));
i__17885__auto___22407 = G__22408;
continue;
} else {
}
break;
}

var G__22338 = args22336.length;
switch (G__22338) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22336.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19750__auto___22410 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19750__auto___22410,out){
return (function (){
var f__19751__auto__ = (function (){var switch__19638__auto__ = ((function (c__19750__auto___22410,out){
return (function (state_22376){
var state_val_22377 = (state_22376[(1)]);
if((state_val_22377 === (7))){
var inst_22372 = (state_22376[(2)]);
var state_22376__$1 = state_22376;
var statearr_22378_22411 = state_22376__$1;
(statearr_22378_22411[(2)] = inst_22372);

(statearr_22378_22411[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22377 === (1))){
var inst_22339 = (new Array(n));
var inst_22340 = inst_22339;
var inst_22341 = (0);
var state_22376__$1 = (function (){var statearr_22379 = state_22376;
(statearr_22379[(7)] = inst_22340);

(statearr_22379[(8)] = inst_22341);

return statearr_22379;
})();
var statearr_22380_22412 = state_22376__$1;
(statearr_22380_22412[(2)] = null);

(statearr_22380_22412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22377 === (4))){
var inst_22344 = (state_22376[(9)]);
var inst_22344__$1 = (state_22376[(2)]);
var inst_22345 = (inst_22344__$1 == null);
var inst_22346 = cljs.core.not.call(null,inst_22345);
var state_22376__$1 = (function (){var statearr_22381 = state_22376;
(statearr_22381[(9)] = inst_22344__$1);

return statearr_22381;
})();
if(inst_22346){
var statearr_22382_22413 = state_22376__$1;
(statearr_22382_22413[(1)] = (5));

} else {
var statearr_22383_22414 = state_22376__$1;
(statearr_22383_22414[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22377 === (15))){
var inst_22366 = (state_22376[(2)]);
var state_22376__$1 = state_22376;
var statearr_22384_22415 = state_22376__$1;
(statearr_22384_22415[(2)] = inst_22366);

(statearr_22384_22415[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22377 === (13))){
var state_22376__$1 = state_22376;
var statearr_22385_22416 = state_22376__$1;
(statearr_22385_22416[(2)] = null);

(statearr_22385_22416[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22377 === (6))){
var inst_22341 = (state_22376[(8)]);
var inst_22362 = (inst_22341 > (0));
var state_22376__$1 = state_22376;
if(cljs.core.truth_(inst_22362)){
var statearr_22386_22417 = state_22376__$1;
(statearr_22386_22417[(1)] = (12));

} else {
var statearr_22387_22418 = state_22376__$1;
(statearr_22387_22418[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22377 === (3))){
var inst_22374 = (state_22376[(2)]);
var state_22376__$1 = state_22376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22376__$1,inst_22374);
} else {
if((state_val_22377 === (12))){
var inst_22340 = (state_22376[(7)]);
var inst_22364 = cljs.core.vec.call(null,inst_22340);
var state_22376__$1 = state_22376;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22376__$1,(15),out,inst_22364);
} else {
if((state_val_22377 === (2))){
var state_22376__$1 = state_22376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22376__$1,(4),ch);
} else {
if((state_val_22377 === (11))){
var inst_22356 = (state_22376[(2)]);
var inst_22357 = (new Array(n));
var inst_22340 = inst_22357;
var inst_22341 = (0);
var state_22376__$1 = (function (){var statearr_22388 = state_22376;
(statearr_22388[(7)] = inst_22340);

(statearr_22388[(10)] = inst_22356);

(statearr_22388[(8)] = inst_22341);

return statearr_22388;
})();
var statearr_22389_22419 = state_22376__$1;
(statearr_22389_22419[(2)] = null);

(statearr_22389_22419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22377 === (9))){
var inst_22340 = (state_22376[(7)]);
var inst_22354 = cljs.core.vec.call(null,inst_22340);
var state_22376__$1 = state_22376;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22376__$1,(11),out,inst_22354);
} else {
if((state_val_22377 === (5))){
var inst_22344 = (state_22376[(9)]);
var inst_22340 = (state_22376[(7)]);
var inst_22349 = (state_22376[(11)]);
var inst_22341 = (state_22376[(8)]);
var inst_22348 = (inst_22340[inst_22341] = inst_22344);
var inst_22349__$1 = (inst_22341 + (1));
var inst_22350 = (inst_22349__$1 < n);
var state_22376__$1 = (function (){var statearr_22390 = state_22376;
(statearr_22390[(12)] = inst_22348);

(statearr_22390[(11)] = inst_22349__$1);

return statearr_22390;
})();
if(cljs.core.truth_(inst_22350)){
var statearr_22391_22420 = state_22376__$1;
(statearr_22391_22420[(1)] = (8));

} else {
var statearr_22392_22421 = state_22376__$1;
(statearr_22392_22421[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22377 === (14))){
var inst_22369 = (state_22376[(2)]);
var inst_22370 = cljs.core.async.close_BANG_.call(null,out);
var state_22376__$1 = (function (){var statearr_22394 = state_22376;
(statearr_22394[(13)] = inst_22369);

return statearr_22394;
})();
var statearr_22395_22422 = state_22376__$1;
(statearr_22395_22422[(2)] = inst_22370);

(statearr_22395_22422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22377 === (10))){
var inst_22360 = (state_22376[(2)]);
var state_22376__$1 = state_22376;
var statearr_22396_22423 = state_22376__$1;
(statearr_22396_22423[(2)] = inst_22360);

(statearr_22396_22423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22377 === (8))){
var inst_22340 = (state_22376[(7)]);
var inst_22349 = (state_22376[(11)]);
var tmp22393 = inst_22340;
var inst_22340__$1 = tmp22393;
var inst_22341 = inst_22349;
var state_22376__$1 = (function (){var statearr_22397 = state_22376;
(statearr_22397[(7)] = inst_22340__$1);

(statearr_22397[(8)] = inst_22341);

return statearr_22397;
})();
var statearr_22398_22424 = state_22376__$1;
(statearr_22398_22424[(2)] = null);

(statearr_22398_22424[(1)] = (2));


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
});})(c__19750__auto___22410,out))
;
return ((function (switch__19638__auto__,c__19750__auto___22410,out){
return (function() {
var cljs$core$async$state_machine__19639__auto__ = null;
var cljs$core$async$state_machine__19639__auto____0 = (function (){
var statearr_22402 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22402[(0)] = cljs$core$async$state_machine__19639__auto__);

(statearr_22402[(1)] = (1));

return statearr_22402;
});
var cljs$core$async$state_machine__19639__auto____1 = (function (state_22376){
while(true){
var ret_value__19640__auto__ = (function (){try{while(true){
var result__19641__auto__ = switch__19638__auto__.call(null,state_22376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19641__auto__;
}
break;
}
}catch (e22403){if((e22403 instanceof Object)){
var ex__19642__auto__ = e22403;
var statearr_22404_22425 = state_22376;
(statearr_22404_22425[(5)] = ex__19642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22403;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22426 = state_22376;
state_22376 = G__22426;
continue;
} else {
return ret_value__19640__auto__;
}
break;
}
});
cljs$core$async$state_machine__19639__auto__ = function(state_22376){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19639__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19639__auto____1.call(this,state_22376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19639__auto____0;
cljs$core$async$state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19639__auto____1;
return cljs$core$async$state_machine__19639__auto__;
})()
;})(switch__19638__auto__,c__19750__auto___22410,out))
})();
var state__19752__auto__ = (function (){var statearr_22405 = f__19751__auto__.call(null);
(statearr_22405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19750__auto___22410);

return statearr_22405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19752__auto__);
});})(c__19750__auto___22410,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args22427 = [];
var len__17884__auto___22501 = arguments.length;
var i__17885__auto___22502 = (0);
while(true){
if((i__17885__auto___22502 < len__17884__auto___22501)){
args22427.push((arguments[i__17885__auto___22502]));

var G__22503 = (i__17885__auto___22502 + (1));
i__17885__auto___22502 = G__22503;
continue;
} else {
}
break;
}

var G__22429 = args22427.length;
switch (G__22429) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22427.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19750__auto___22505 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19750__auto___22505,out){
return (function (){
var f__19751__auto__ = (function (){var switch__19638__auto__ = ((function (c__19750__auto___22505,out){
return (function (state_22471){
var state_val_22472 = (state_22471[(1)]);
if((state_val_22472 === (7))){
var inst_22467 = (state_22471[(2)]);
var state_22471__$1 = state_22471;
var statearr_22473_22506 = state_22471__$1;
(statearr_22473_22506[(2)] = inst_22467);

(statearr_22473_22506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (1))){
var inst_22430 = [];
var inst_22431 = inst_22430;
var inst_22432 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_22471__$1 = (function (){var statearr_22474 = state_22471;
(statearr_22474[(7)] = inst_22431);

(statearr_22474[(8)] = inst_22432);

return statearr_22474;
})();
var statearr_22475_22507 = state_22471__$1;
(statearr_22475_22507[(2)] = null);

(statearr_22475_22507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (4))){
var inst_22435 = (state_22471[(9)]);
var inst_22435__$1 = (state_22471[(2)]);
var inst_22436 = (inst_22435__$1 == null);
var inst_22437 = cljs.core.not.call(null,inst_22436);
var state_22471__$1 = (function (){var statearr_22476 = state_22471;
(statearr_22476[(9)] = inst_22435__$1);

return statearr_22476;
})();
if(inst_22437){
var statearr_22477_22508 = state_22471__$1;
(statearr_22477_22508[(1)] = (5));

} else {
var statearr_22478_22509 = state_22471__$1;
(statearr_22478_22509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (15))){
var inst_22461 = (state_22471[(2)]);
var state_22471__$1 = state_22471;
var statearr_22479_22510 = state_22471__$1;
(statearr_22479_22510[(2)] = inst_22461);

(statearr_22479_22510[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (13))){
var state_22471__$1 = state_22471;
var statearr_22480_22511 = state_22471__$1;
(statearr_22480_22511[(2)] = null);

(statearr_22480_22511[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (6))){
var inst_22431 = (state_22471[(7)]);
var inst_22456 = inst_22431.length;
var inst_22457 = (inst_22456 > (0));
var state_22471__$1 = state_22471;
if(cljs.core.truth_(inst_22457)){
var statearr_22481_22512 = state_22471__$1;
(statearr_22481_22512[(1)] = (12));

} else {
var statearr_22482_22513 = state_22471__$1;
(statearr_22482_22513[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (3))){
var inst_22469 = (state_22471[(2)]);
var state_22471__$1 = state_22471;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22471__$1,inst_22469);
} else {
if((state_val_22472 === (12))){
var inst_22431 = (state_22471[(7)]);
var inst_22459 = cljs.core.vec.call(null,inst_22431);
var state_22471__$1 = state_22471;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22471__$1,(15),out,inst_22459);
} else {
if((state_val_22472 === (2))){
var state_22471__$1 = state_22471;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22471__$1,(4),ch);
} else {
if((state_val_22472 === (11))){
var inst_22439 = (state_22471[(10)]);
var inst_22435 = (state_22471[(9)]);
var inst_22449 = (state_22471[(2)]);
var inst_22450 = [];
var inst_22451 = inst_22450.push(inst_22435);
var inst_22431 = inst_22450;
var inst_22432 = inst_22439;
var state_22471__$1 = (function (){var statearr_22483 = state_22471;
(statearr_22483[(11)] = inst_22449);

(statearr_22483[(7)] = inst_22431);

(statearr_22483[(12)] = inst_22451);

(statearr_22483[(8)] = inst_22432);

return statearr_22483;
})();
var statearr_22484_22514 = state_22471__$1;
(statearr_22484_22514[(2)] = null);

(statearr_22484_22514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (9))){
var inst_22431 = (state_22471[(7)]);
var inst_22447 = cljs.core.vec.call(null,inst_22431);
var state_22471__$1 = state_22471;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22471__$1,(11),out,inst_22447);
} else {
if((state_val_22472 === (5))){
var inst_22439 = (state_22471[(10)]);
var inst_22435 = (state_22471[(9)]);
var inst_22432 = (state_22471[(8)]);
var inst_22439__$1 = f.call(null,inst_22435);
var inst_22440 = cljs.core._EQ_.call(null,inst_22439__$1,inst_22432);
var inst_22441 = cljs.core.keyword_identical_QMARK_.call(null,inst_22432,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_22442 = (inst_22440) || (inst_22441);
var state_22471__$1 = (function (){var statearr_22485 = state_22471;
(statearr_22485[(10)] = inst_22439__$1);

return statearr_22485;
})();
if(cljs.core.truth_(inst_22442)){
var statearr_22486_22515 = state_22471__$1;
(statearr_22486_22515[(1)] = (8));

} else {
var statearr_22487_22516 = state_22471__$1;
(statearr_22487_22516[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (14))){
var inst_22464 = (state_22471[(2)]);
var inst_22465 = cljs.core.async.close_BANG_.call(null,out);
var state_22471__$1 = (function (){var statearr_22489 = state_22471;
(statearr_22489[(13)] = inst_22464);

return statearr_22489;
})();
var statearr_22490_22517 = state_22471__$1;
(statearr_22490_22517[(2)] = inst_22465);

(statearr_22490_22517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (10))){
var inst_22454 = (state_22471[(2)]);
var state_22471__$1 = state_22471;
var statearr_22491_22518 = state_22471__$1;
(statearr_22491_22518[(2)] = inst_22454);

(statearr_22491_22518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (8))){
var inst_22439 = (state_22471[(10)]);
var inst_22431 = (state_22471[(7)]);
var inst_22435 = (state_22471[(9)]);
var inst_22444 = inst_22431.push(inst_22435);
var tmp22488 = inst_22431;
var inst_22431__$1 = tmp22488;
var inst_22432 = inst_22439;
var state_22471__$1 = (function (){var statearr_22492 = state_22471;
(statearr_22492[(14)] = inst_22444);

(statearr_22492[(7)] = inst_22431__$1);

(statearr_22492[(8)] = inst_22432);

return statearr_22492;
})();
var statearr_22493_22519 = state_22471__$1;
(statearr_22493_22519[(2)] = null);

(statearr_22493_22519[(1)] = (2));


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
});})(c__19750__auto___22505,out))
;
return ((function (switch__19638__auto__,c__19750__auto___22505,out){
return (function() {
var cljs$core$async$state_machine__19639__auto__ = null;
var cljs$core$async$state_machine__19639__auto____0 = (function (){
var statearr_22497 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22497[(0)] = cljs$core$async$state_machine__19639__auto__);

(statearr_22497[(1)] = (1));

return statearr_22497;
});
var cljs$core$async$state_machine__19639__auto____1 = (function (state_22471){
while(true){
var ret_value__19640__auto__ = (function (){try{while(true){
var result__19641__auto__ = switch__19638__auto__.call(null,state_22471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19641__auto__;
}
break;
}
}catch (e22498){if((e22498 instanceof Object)){
var ex__19642__auto__ = e22498;
var statearr_22499_22520 = state_22471;
(statearr_22499_22520[(5)] = ex__19642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22521 = state_22471;
state_22471 = G__22521;
continue;
} else {
return ret_value__19640__auto__;
}
break;
}
});
cljs$core$async$state_machine__19639__auto__ = function(state_22471){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19639__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19639__auto____1.call(this,state_22471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19639__auto____0;
cljs$core$async$state_machine__19639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19639__auto____1;
return cljs$core$async$state_machine__19639__auto__;
})()
;})(switch__19638__auto__,c__19750__auto___22505,out))
})();
var state__19752__auto__ = (function (){var statearr_22500 = f__19751__auto__.call(null);
(statearr_22500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19750__auto___22505);

return statearr_22500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19752__auto__);
});})(c__19750__auto___22505,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map