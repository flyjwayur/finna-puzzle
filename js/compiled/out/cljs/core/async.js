// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args28127 = [];
var len__25865__auto___28133 = arguments.length;
var i__25866__auto___28134 = (0);
while(true){
if((i__25866__auto___28134 < len__25865__auto___28133)){
args28127.push((arguments[i__25866__auto___28134]));

var G__28135 = (i__25866__auto___28134 + (1));
i__25866__auto___28134 = G__28135;
continue;
} else {
}
break;
}

var G__28129 = args28127.length;
switch (G__28129) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28127.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async28130 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28130 = (function (f,blockable,meta28131){
this.f = f;
this.blockable = blockable;
this.meta28131 = meta28131;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28132,meta28131__$1){
var self__ = this;
var _28132__$1 = this;
return (new cljs.core.async.t_cljs$core$async28130(self__.f,self__.blockable,meta28131__$1));
});

cljs.core.async.t_cljs$core$async28130.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28132){
var self__ = this;
var _28132__$1 = this;
return self__.meta28131;
});

cljs.core.async.t_cljs$core$async28130.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28130.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28130.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async28130.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28130.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28131","meta28131",1863788140,null)], null);
});

cljs.core.async.t_cljs$core$async28130.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28130.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28130";

cljs.core.async.t_cljs$core$async28130.cljs$lang$ctorPrWriter = (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async28130");
});

cljs.core.async.__GT_t_cljs$core$async28130 = (function cljs$core$async$__GT_t_cljs$core$async28130(f__$1,blockable__$1,meta28131){
return (new cljs.core.async.t_cljs$core$async28130(f__$1,blockable__$1,meta28131));
});

}

return (new cljs.core.async.t_cljs$core$async28130(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args28139 = [];
var len__25865__auto___28142 = arguments.length;
var i__25866__auto___28143 = (0);
while(true){
if((i__25866__auto___28143 < len__25865__auto___28142)){
args28139.push((arguments[i__25866__auto___28143]));

var G__28144 = (i__25866__auto___28143 + (1));
i__25866__auto___28143 = G__28144;
continue;
} else {
}
break;
}

var G__28141 = args28139.length;
switch (G__28141) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28139.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
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
var args28146 = [];
var len__25865__auto___28149 = arguments.length;
var i__25866__auto___28150 = (0);
while(true){
if((i__25866__auto___28150 < len__25865__auto___28149)){
args28146.push((arguments[i__25866__auto___28150]));

var G__28151 = (i__25866__auto___28150 + (1));
i__25866__auto___28150 = G__28151;
continue;
} else {
}
break;
}

var G__28148 = args28146.length;
switch (G__28148) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28146.length)].join('')));

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
var args28153 = [];
var len__25865__auto___28156 = arguments.length;
var i__25866__auto___28157 = (0);
while(true){
if((i__25866__auto___28157 < len__25865__auto___28156)){
args28153.push((arguments[i__25866__auto___28157]));

var G__28158 = (i__25866__auto___28157 + (1));
i__25866__auto___28157 = G__28158;
continue;
} else {
}
break;
}

var G__28155 = args28153.length;
switch (G__28155) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28153.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28160 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28160);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28160,ret){
return (function (){
return fn1.call(null,val_28160);
});})(val_28160,ret))
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
var args28161 = [];
var len__25865__auto___28164 = arguments.length;
var i__25866__auto___28165 = (0);
while(true){
if((i__25866__auto___28165 < len__25865__auto___28164)){
args28161.push((arguments[i__25866__auto___28165]));

var G__28166 = (i__25866__auto___28165 + (1));
i__25866__auto___28165 = G__28166;
continue;
} else {
}
break;
}

var G__28163 = args28161.length;
switch (G__28163) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28161.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
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
var n__25705__auto___28168 = n;
var x_28169 = (0);
while(true){
if((x_28169 < n__25705__auto___28168)){
(a[x_28169] = (0));

var G__28170 = (x_28169 + (1));
x_28169 = G__28170;
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

var G__28171 = (i + (1));
i = G__28171;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async28175 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28175 = (function (alt_flag,flag,meta28176){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta28176 = meta28176;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28177,meta28176__$1){
var self__ = this;
var _28177__$1 = this;
return (new cljs.core.async.t_cljs$core$async28175(self__.alt_flag,self__.flag,meta28176__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28175.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28177){
var self__ = this;
var _28177__$1 = this;
return self__.meta28176;
});})(flag))
;

cljs.core.async.t_cljs$core$async28175.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28175.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28175.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28175.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28175.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28176","meta28176",-1327855106,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28175.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28175.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28175";

cljs.core.async.t_cljs$core$async28175.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async28175");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async28175 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28175(alt_flag__$1,flag__$1,meta28176){
return (new cljs.core.async.t_cljs$core$async28175(alt_flag__$1,flag__$1,meta28176));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28175(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async28181 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28181 = (function (alt_handler,flag,cb,meta28182){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta28182 = meta28182;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28181.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28183,meta28182__$1){
var self__ = this;
var _28183__$1 = this;
return (new cljs.core.async.t_cljs$core$async28181(self__.alt_handler,self__.flag,self__.cb,meta28182__$1));
});

cljs.core.async.t_cljs$core$async28181.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28183){
var self__ = this;
var _28183__$1 = this;
return self__.meta28182;
});

cljs.core.async.t_cljs$core$async28181.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28181.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28181.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28181.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28181.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28182","meta28182",1051757354,null)], null);
});

cljs.core.async.t_cljs$core$async28181.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28181.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28181";

cljs.core.async.t_cljs$core$async28181.cljs$lang$ctorPrWriter = (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async28181");
});

cljs.core.async.__GT_t_cljs$core$async28181 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28181(alt_handler__$1,flag__$1,cb__$1,meta28182){
return (new cljs.core.async.t_cljs$core$async28181(alt_handler__$1,flag__$1,cb__$1,meta28182));
});

}

return (new cljs.core.async.t_cljs$core$async28181(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__28184_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28184_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28185_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28185_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24790__auto__ = wport;
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28186 = (i + (1));
i = G__28186;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24790__auto__ = ret;
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24778__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24778__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24778__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
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
var args__25872__auto__ = [];
var len__25865__auto___28192 = arguments.length;
var i__25866__auto___28193 = (0);
while(true){
if((i__25866__auto___28193 < len__25865__auto___28192)){
args__25872__auto__.push((arguments[i__25866__auto___28193]));

var G__28194 = (i__25866__auto___28193 + (1));
i__25866__auto___28193 = G__28194;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28189){
var map__28190 = p__28189;
var map__28190__$1 = ((((!((map__28190 == null)))?((((map__28190.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28190.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28190):map__28190);
var opts = map__28190__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28187){
var G__28188 = cljs.core.first.call(null,seq28187);
var seq28187__$1 = cljs.core.next.call(null,seq28187);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28188,seq28187__$1);
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
var args28195 = [];
var len__25865__auto___28245 = arguments.length;
var i__25866__auto___28246 = (0);
while(true){
if((i__25866__auto___28246 < len__25865__auto___28245)){
args28195.push((arguments[i__25866__auto___28246]));

var G__28247 = (i__25866__auto___28246 + (1));
i__25866__auto___28246 = G__28247;
continue;
} else {
}
break;
}

var G__28197 = args28195.length;
switch (G__28197) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28195.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28082__auto___28249 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28082__auto___28249){
return (function (){
var f__28083__auto__ = (function (){var switch__27970__auto__ = ((function (c__28082__auto___28249){
return (function (state_28221){
var state_val_28222 = (state_28221[(1)]);
if((state_val_28222 === (7))){
var inst_28217 = (state_28221[(2)]);
var state_28221__$1 = state_28221;
var statearr_28223_28250 = state_28221__$1;
(statearr_28223_28250[(2)] = inst_28217);

(statearr_28223_28250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (1))){
var state_28221__$1 = state_28221;
var statearr_28224_28251 = state_28221__$1;
(statearr_28224_28251[(2)] = null);

(statearr_28224_28251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (4))){
var inst_28200 = (state_28221[(7)]);
var inst_28200__$1 = (state_28221[(2)]);
var inst_28201 = (inst_28200__$1 == null);
var state_28221__$1 = (function (){var statearr_28225 = state_28221;
(statearr_28225[(7)] = inst_28200__$1);

return statearr_28225;
})();
if(cljs.core.truth_(inst_28201)){
var statearr_28226_28252 = state_28221__$1;
(statearr_28226_28252[(1)] = (5));

} else {
var statearr_28227_28253 = state_28221__$1;
(statearr_28227_28253[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (13))){
var state_28221__$1 = state_28221;
var statearr_28228_28254 = state_28221__$1;
(statearr_28228_28254[(2)] = null);

(statearr_28228_28254[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (6))){
var inst_28200 = (state_28221[(7)]);
var state_28221__$1 = state_28221;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28221__$1,(11),to,inst_28200);
} else {
if((state_val_28222 === (3))){
var inst_28219 = (state_28221[(2)]);
var state_28221__$1 = state_28221;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28221__$1,inst_28219);
} else {
if((state_val_28222 === (12))){
var state_28221__$1 = state_28221;
var statearr_28229_28255 = state_28221__$1;
(statearr_28229_28255[(2)] = null);

(statearr_28229_28255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (2))){
var state_28221__$1 = state_28221;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28221__$1,(4),from);
} else {
if((state_val_28222 === (11))){
var inst_28210 = (state_28221[(2)]);
var state_28221__$1 = state_28221;
if(cljs.core.truth_(inst_28210)){
var statearr_28230_28256 = state_28221__$1;
(statearr_28230_28256[(1)] = (12));

} else {
var statearr_28231_28257 = state_28221__$1;
(statearr_28231_28257[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (9))){
var state_28221__$1 = state_28221;
var statearr_28232_28258 = state_28221__$1;
(statearr_28232_28258[(2)] = null);

(statearr_28232_28258[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (5))){
var state_28221__$1 = state_28221;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28233_28259 = state_28221__$1;
(statearr_28233_28259[(1)] = (8));

} else {
var statearr_28234_28260 = state_28221__$1;
(statearr_28234_28260[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (14))){
var inst_28215 = (state_28221[(2)]);
var state_28221__$1 = state_28221;
var statearr_28235_28261 = state_28221__$1;
(statearr_28235_28261[(2)] = inst_28215);

(statearr_28235_28261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (10))){
var inst_28207 = (state_28221[(2)]);
var state_28221__$1 = state_28221;
var statearr_28236_28262 = state_28221__$1;
(statearr_28236_28262[(2)] = inst_28207);

(statearr_28236_28262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (8))){
var inst_28204 = cljs.core.async.close_BANG_.call(null,to);
var state_28221__$1 = state_28221;
var statearr_28237_28263 = state_28221__$1;
(statearr_28237_28263[(2)] = inst_28204);

(statearr_28237_28263[(1)] = (10));


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
});})(c__28082__auto___28249))
;
return ((function (switch__27970__auto__,c__28082__auto___28249){
return (function() {
var cljs$core$async$state_machine__27971__auto__ = null;
var cljs$core$async$state_machine__27971__auto____0 = (function (){
var statearr_28241 = [null,null,null,null,null,null,null,null];
(statearr_28241[(0)] = cljs$core$async$state_machine__27971__auto__);

(statearr_28241[(1)] = (1));

return statearr_28241;
});
var cljs$core$async$state_machine__27971__auto____1 = (function (state_28221){
while(true){
var ret_value__27972__auto__ = (function (){try{while(true){
var result__27973__auto__ = switch__27970__auto__.call(null,state_28221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27973__auto__;
}
break;
}
}catch (e28242){if((e28242 instanceof Object)){
var ex__27974__auto__ = e28242;
var statearr_28243_28264 = state_28221;
(statearr_28243_28264[(5)] = ex__27974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28265 = state_28221;
state_28221 = G__28265;
continue;
} else {
return ret_value__27972__auto__;
}
break;
}
});
cljs$core$async$state_machine__27971__auto__ = function(state_28221){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27971__auto____1.call(this,state_28221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27971__auto____0;
cljs$core$async$state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27971__auto____1;
return cljs$core$async$state_machine__27971__auto__;
})()
;})(switch__27970__auto__,c__28082__auto___28249))
})();
var state__28084__auto__ = (function (){var statearr_28244 = f__28083__auto__.call(null);
(statearr_28244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28082__auto___28249);

return statearr_28244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28084__auto__);
});})(c__28082__auto___28249))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__28453){
var vec__28454 = p__28453;
var v = cljs.core.nth.call(null,vec__28454,(0),null);
var p = cljs.core.nth.call(null,vec__28454,(1),null);
var job = vec__28454;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28082__auto___28640 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28082__auto___28640,res,vec__28454,v,p,job,jobs,results){
return (function (){
var f__28083__auto__ = (function (){var switch__27970__auto__ = ((function (c__28082__auto___28640,res,vec__28454,v,p,job,jobs,results){
return (function (state_28461){
var state_val_28462 = (state_28461[(1)]);
if((state_val_28462 === (1))){
var state_28461__$1 = state_28461;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28461__$1,(2),res,v);
} else {
if((state_val_28462 === (2))){
var inst_28458 = (state_28461[(2)]);
var inst_28459 = cljs.core.async.close_BANG_.call(null,res);
var state_28461__$1 = (function (){var statearr_28463 = state_28461;
(statearr_28463[(7)] = inst_28458);

return statearr_28463;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28461__$1,inst_28459);
} else {
return null;
}
}
});})(c__28082__auto___28640,res,vec__28454,v,p,job,jobs,results))
;
return ((function (switch__27970__auto__,c__28082__auto___28640,res,vec__28454,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27971__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27971__auto____0 = (function (){
var statearr_28467 = [null,null,null,null,null,null,null,null];
(statearr_28467[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27971__auto__);

(statearr_28467[(1)] = (1));

return statearr_28467;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27971__auto____1 = (function (state_28461){
while(true){
var ret_value__27972__auto__ = (function (){try{while(true){
var result__27973__auto__ = switch__27970__auto__.call(null,state_28461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27973__auto__;
}
break;
}
}catch (e28468){if((e28468 instanceof Object)){
var ex__27974__auto__ = e28468;
var statearr_28469_28641 = state_28461;
(statearr_28469_28641[(5)] = ex__27974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28642 = state_28461;
state_28461 = G__28642;
continue;
} else {
return ret_value__27972__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27971__auto__ = function(state_28461){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27971__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27971__auto____1.call(this,state_28461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27971__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27971__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27971__auto__;
})()
;})(switch__27970__auto__,c__28082__auto___28640,res,vec__28454,v,p,job,jobs,results))
})();
var state__28084__auto__ = (function (){var statearr_28470 = f__28083__auto__.call(null);
(statearr_28470[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28082__auto___28640);

return statearr_28470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28084__auto__);
});})(c__28082__auto___28640,res,vec__28454,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28471){
var vec__28472 = p__28471;
var v = cljs.core.nth.call(null,vec__28472,(0),null);
var p = cljs.core.nth.call(null,vec__28472,(1),null);
var job = vec__28472;
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
var n__25705__auto___28643 = n;
var __28644 = (0);
while(true){
if((__28644 < n__25705__auto___28643)){
var G__28475_28645 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28475_28645) {
case "compute":
var c__28082__auto___28647 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28644,c__28082__auto___28647,G__28475_28645,n__25705__auto___28643,jobs,results,process,async){
return (function (){
var f__28083__auto__ = (function (){var switch__27970__auto__ = ((function (__28644,c__28082__auto___28647,G__28475_28645,n__25705__auto___28643,jobs,results,process,async){
return (function (state_28488){
var state_val_28489 = (state_28488[(1)]);
if((state_val_28489 === (1))){
var state_28488__$1 = state_28488;
var statearr_28490_28648 = state_28488__$1;
(statearr_28490_28648[(2)] = null);

(statearr_28490_28648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28489 === (2))){
var state_28488__$1 = state_28488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28488__$1,(4),jobs);
} else {
if((state_val_28489 === (3))){
var inst_28486 = (state_28488[(2)]);
var state_28488__$1 = state_28488;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28488__$1,inst_28486);
} else {
if((state_val_28489 === (4))){
var inst_28478 = (state_28488[(2)]);
var inst_28479 = process.call(null,inst_28478);
var state_28488__$1 = state_28488;
if(cljs.core.truth_(inst_28479)){
var statearr_28491_28649 = state_28488__$1;
(statearr_28491_28649[(1)] = (5));

} else {
var statearr_28492_28650 = state_28488__$1;
(statearr_28492_28650[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28489 === (5))){
var state_28488__$1 = state_28488;
var statearr_28493_28651 = state_28488__$1;
(statearr_28493_28651[(2)] = null);

(statearr_28493_28651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28489 === (6))){
var state_28488__$1 = state_28488;
var statearr_28494_28652 = state_28488__$1;
(statearr_28494_28652[(2)] = null);

(statearr_28494_28652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28489 === (7))){
var inst_28484 = (state_28488[(2)]);
var state_28488__$1 = state_28488;
var statearr_28495_28653 = state_28488__$1;
(statearr_28495_28653[(2)] = inst_28484);

(statearr_28495_28653[(1)] = (3));


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
});})(__28644,c__28082__auto___28647,G__28475_28645,n__25705__auto___28643,jobs,results,process,async))
;
return ((function (__28644,switch__27970__auto__,c__28082__auto___28647,G__28475_28645,n__25705__auto___28643,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27971__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27971__auto____0 = (function (){
var statearr_28499 = [null,null,null,null,null,null,null];
(statearr_28499[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27971__auto__);

(statearr_28499[(1)] = (1));

return statearr_28499;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27971__auto____1 = (function (state_28488){
while(true){
var ret_value__27972__auto__ = (function (){try{while(true){
var result__27973__auto__ = switch__27970__auto__.call(null,state_28488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27973__auto__;
}
break;
}
}catch (e28500){if((e28500 instanceof Object)){
var ex__27974__auto__ = e28500;
var statearr_28501_28654 = state_28488;
(statearr_28501_28654[(5)] = ex__27974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28655 = state_28488;
state_28488 = G__28655;
continue;
} else {
return ret_value__27972__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27971__auto__ = function(state_28488){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27971__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27971__auto____1.call(this,state_28488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27971__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27971__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27971__auto__;
})()
;})(__28644,switch__27970__auto__,c__28082__auto___28647,G__28475_28645,n__25705__auto___28643,jobs,results,process,async))
})();
var state__28084__auto__ = (function (){var statearr_28502 = f__28083__auto__.call(null);
(statearr_28502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28082__auto___28647);

return statearr_28502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28084__auto__);
});})(__28644,c__28082__auto___28647,G__28475_28645,n__25705__auto___28643,jobs,results,process,async))
);


break;
case "async":
var c__28082__auto___28656 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28644,c__28082__auto___28656,G__28475_28645,n__25705__auto___28643,jobs,results,process,async){
return (function (){
var f__28083__auto__ = (function (){var switch__27970__auto__ = ((function (__28644,c__28082__auto___28656,G__28475_28645,n__25705__auto___28643,jobs,results,process,async){
return (function (state_28515){
var state_val_28516 = (state_28515[(1)]);
if((state_val_28516 === (1))){
var state_28515__$1 = state_28515;
var statearr_28517_28657 = state_28515__$1;
(statearr_28517_28657[(2)] = null);

(statearr_28517_28657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28516 === (2))){
var state_28515__$1 = state_28515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28515__$1,(4),jobs);
} else {
if((state_val_28516 === (3))){
var inst_28513 = (state_28515[(2)]);
var state_28515__$1 = state_28515;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28515__$1,inst_28513);
} else {
if((state_val_28516 === (4))){
var inst_28505 = (state_28515[(2)]);
var inst_28506 = async.call(null,inst_28505);
var state_28515__$1 = state_28515;
if(cljs.core.truth_(inst_28506)){
var statearr_28518_28658 = state_28515__$1;
(statearr_28518_28658[(1)] = (5));

} else {
var statearr_28519_28659 = state_28515__$1;
(statearr_28519_28659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28516 === (5))){
var state_28515__$1 = state_28515;
var statearr_28520_28660 = state_28515__$1;
(statearr_28520_28660[(2)] = null);

(statearr_28520_28660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28516 === (6))){
var state_28515__$1 = state_28515;
var statearr_28521_28661 = state_28515__$1;
(statearr_28521_28661[(2)] = null);

(statearr_28521_28661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28516 === (7))){
var inst_28511 = (state_28515[(2)]);
var state_28515__$1 = state_28515;
var statearr_28522_28662 = state_28515__$1;
(statearr_28522_28662[(2)] = inst_28511);

(statearr_28522_28662[(1)] = (3));


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
});})(__28644,c__28082__auto___28656,G__28475_28645,n__25705__auto___28643,jobs,results,process,async))
;
return ((function (__28644,switch__27970__auto__,c__28082__auto___28656,G__28475_28645,n__25705__auto___28643,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27971__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27971__auto____0 = (function (){
var statearr_28526 = [null,null,null,null,null,null,null];
(statearr_28526[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27971__auto__);

(statearr_28526[(1)] = (1));

return statearr_28526;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27971__auto____1 = (function (state_28515){
while(true){
var ret_value__27972__auto__ = (function (){try{while(true){
var result__27973__auto__ = switch__27970__auto__.call(null,state_28515);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27973__auto__;
}
break;
}
}catch (e28527){if((e28527 instanceof Object)){
var ex__27974__auto__ = e28527;
var statearr_28528_28663 = state_28515;
(statearr_28528_28663[(5)] = ex__27974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28527;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28664 = state_28515;
state_28515 = G__28664;
continue;
} else {
return ret_value__27972__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27971__auto__ = function(state_28515){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27971__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27971__auto____1.call(this,state_28515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27971__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27971__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27971__auto__;
})()
;})(__28644,switch__27970__auto__,c__28082__auto___28656,G__28475_28645,n__25705__auto___28643,jobs,results,process,async))
})();
var state__28084__auto__ = (function (){var statearr_28529 = f__28083__auto__.call(null);
(statearr_28529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28082__auto___28656);

return statearr_28529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28084__auto__);
});})(__28644,c__28082__auto___28656,G__28475_28645,n__25705__auto___28643,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28665 = (__28644 + (1));
__28644 = G__28665;
continue;
} else {
}
break;
}

var c__28082__auto___28666 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28082__auto___28666,jobs,results,process,async){
return (function (){
var f__28083__auto__ = (function (){var switch__27970__auto__ = ((function (c__28082__auto___28666,jobs,results,process,async){
return (function (state_28551){
var state_val_28552 = (state_28551[(1)]);
if((state_val_28552 === (1))){
var state_28551__$1 = state_28551;
var statearr_28553_28667 = state_28551__$1;
(statearr_28553_28667[(2)] = null);

(statearr_28553_28667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28552 === (2))){
var state_28551__$1 = state_28551;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28551__$1,(4),from);
} else {
if((state_val_28552 === (3))){
var inst_28549 = (state_28551[(2)]);
var state_28551__$1 = state_28551;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28551__$1,inst_28549);
} else {
if((state_val_28552 === (4))){
var inst_28532 = (state_28551[(7)]);
var inst_28532__$1 = (state_28551[(2)]);
var inst_28533 = (inst_28532__$1 == null);
var state_28551__$1 = (function (){var statearr_28554 = state_28551;
(statearr_28554[(7)] = inst_28532__$1);

return statearr_28554;
})();
if(cljs.core.truth_(inst_28533)){
var statearr_28555_28668 = state_28551__$1;
(statearr_28555_28668[(1)] = (5));

} else {
var statearr_28556_28669 = state_28551__$1;
(statearr_28556_28669[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28552 === (5))){
var inst_28535 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28551__$1 = state_28551;
var statearr_28557_28670 = state_28551__$1;
(statearr_28557_28670[(2)] = inst_28535);

(statearr_28557_28670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28552 === (6))){
var inst_28532 = (state_28551[(7)]);
var inst_28537 = (state_28551[(8)]);
var inst_28537__$1 = cljs.core.async.chan.call(null,(1));
var inst_28538 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28539 = [inst_28532,inst_28537__$1];
var inst_28540 = (new cljs.core.PersistentVector(null,2,(5),inst_28538,inst_28539,null));
var state_28551__$1 = (function (){var statearr_28558 = state_28551;
(statearr_28558[(8)] = inst_28537__$1);

return statearr_28558;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28551__$1,(8),jobs,inst_28540);
} else {
if((state_val_28552 === (7))){
var inst_28547 = (state_28551[(2)]);
var state_28551__$1 = state_28551;
var statearr_28559_28671 = state_28551__$1;
(statearr_28559_28671[(2)] = inst_28547);

(statearr_28559_28671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28552 === (8))){
var inst_28537 = (state_28551[(8)]);
var inst_28542 = (state_28551[(2)]);
var state_28551__$1 = (function (){var statearr_28560 = state_28551;
(statearr_28560[(9)] = inst_28542);

return statearr_28560;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28551__$1,(9),results,inst_28537);
} else {
if((state_val_28552 === (9))){
var inst_28544 = (state_28551[(2)]);
var state_28551__$1 = (function (){var statearr_28561 = state_28551;
(statearr_28561[(10)] = inst_28544);

return statearr_28561;
})();
var statearr_28562_28672 = state_28551__$1;
(statearr_28562_28672[(2)] = null);

(statearr_28562_28672[(1)] = (2));


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
});})(c__28082__auto___28666,jobs,results,process,async))
;
return ((function (switch__27970__auto__,c__28082__auto___28666,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27971__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27971__auto____0 = (function (){
var statearr_28566 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28566[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27971__auto__);

(statearr_28566[(1)] = (1));

return statearr_28566;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27971__auto____1 = (function (state_28551){
while(true){
var ret_value__27972__auto__ = (function (){try{while(true){
var result__27973__auto__ = switch__27970__auto__.call(null,state_28551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27973__auto__;
}
break;
}
}catch (e28567){if((e28567 instanceof Object)){
var ex__27974__auto__ = e28567;
var statearr_28568_28673 = state_28551;
(statearr_28568_28673[(5)] = ex__27974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28674 = state_28551;
state_28551 = G__28674;
continue;
} else {
return ret_value__27972__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27971__auto__ = function(state_28551){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27971__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27971__auto____1.call(this,state_28551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27971__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27971__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27971__auto__;
})()
;})(switch__27970__auto__,c__28082__auto___28666,jobs,results,process,async))
})();
var state__28084__auto__ = (function (){var statearr_28569 = f__28083__auto__.call(null);
(statearr_28569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28082__auto___28666);

return statearr_28569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28084__auto__);
});})(c__28082__auto___28666,jobs,results,process,async))
);


var c__28082__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28082__auto__,jobs,results,process,async){
return (function (){
var f__28083__auto__ = (function (){var switch__27970__auto__ = ((function (c__28082__auto__,jobs,results,process,async){
return (function (state_28607){
var state_val_28608 = (state_28607[(1)]);
if((state_val_28608 === (7))){
var inst_28603 = (state_28607[(2)]);
var state_28607__$1 = state_28607;
var statearr_28609_28675 = state_28607__$1;
(statearr_28609_28675[(2)] = inst_28603);

(statearr_28609_28675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28608 === (20))){
var state_28607__$1 = state_28607;
var statearr_28610_28676 = state_28607__$1;
(statearr_28610_28676[(2)] = null);

(statearr_28610_28676[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28608 === (1))){
var state_28607__$1 = state_28607;
var statearr_28611_28677 = state_28607__$1;
(statearr_28611_28677[(2)] = null);

(statearr_28611_28677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28608 === (4))){
var inst_28572 = (state_28607[(7)]);
var inst_28572__$1 = (state_28607[(2)]);
var inst_28573 = (inst_28572__$1 == null);
var state_28607__$1 = (function (){var statearr_28612 = state_28607;
(statearr_28612[(7)] = inst_28572__$1);

return statearr_28612;
})();
if(cljs.core.truth_(inst_28573)){
var statearr_28613_28678 = state_28607__$1;
(statearr_28613_28678[(1)] = (5));

} else {
var statearr_28614_28679 = state_28607__$1;
(statearr_28614_28679[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28608 === (15))){
var inst_28585 = (state_28607[(8)]);
var state_28607__$1 = state_28607;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28607__$1,(18),to,inst_28585);
} else {
if((state_val_28608 === (21))){
var inst_28598 = (state_28607[(2)]);
var state_28607__$1 = state_28607;
var statearr_28615_28680 = state_28607__$1;
(statearr_28615_28680[(2)] = inst_28598);

(statearr_28615_28680[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28608 === (13))){
var inst_28600 = (state_28607[(2)]);
var state_28607__$1 = (function (){var statearr_28616 = state_28607;
(statearr_28616[(9)] = inst_28600);

return statearr_28616;
})();
var statearr_28617_28681 = state_28607__$1;
(statearr_28617_28681[(2)] = null);

(statearr_28617_28681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28608 === (6))){
var inst_28572 = (state_28607[(7)]);
var state_28607__$1 = state_28607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28607__$1,(11),inst_28572);
} else {
if((state_val_28608 === (17))){
var inst_28593 = (state_28607[(2)]);
var state_28607__$1 = state_28607;
if(cljs.core.truth_(inst_28593)){
var statearr_28618_28682 = state_28607__$1;
(statearr_28618_28682[(1)] = (19));

} else {
var statearr_28619_28683 = state_28607__$1;
(statearr_28619_28683[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28608 === (3))){
var inst_28605 = (state_28607[(2)]);
var state_28607__$1 = state_28607;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28607__$1,inst_28605);
} else {
if((state_val_28608 === (12))){
var inst_28582 = (state_28607[(10)]);
var state_28607__$1 = state_28607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28607__$1,(14),inst_28582);
} else {
if((state_val_28608 === (2))){
var state_28607__$1 = state_28607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28607__$1,(4),results);
} else {
if((state_val_28608 === (19))){
var state_28607__$1 = state_28607;
var statearr_28620_28684 = state_28607__$1;
(statearr_28620_28684[(2)] = null);

(statearr_28620_28684[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28608 === (11))){
var inst_28582 = (state_28607[(2)]);
var state_28607__$1 = (function (){var statearr_28621 = state_28607;
(statearr_28621[(10)] = inst_28582);

return statearr_28621;
})();
var statearr_28622_28685 = state_28607__$1;
(statearr_28622_28685[(2)] = null);

(statearr_28622_28685[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28608 === (9))){
var state_28607__$1 = state_28607;
var statearr_28623_28686 = state_28607__$1;
(statearr_28623_28686[(2)] = null);

(statearr_28623_28686[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28608 === (5))){
var state_28607__$1 = state_28607;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28624_28687 = state_28607__$1;
(statearr_28624_28687[(1)] = (8));

} else {
var statearr_28625_28688 = state_28607__$1;
(statearr_28625_28688[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28608 === (14))){
var inst_28585 = (state_28607[(8)]);
var inst_28587 = (state_28607[(11)]);
var inst_28585__$1 = (state_28607[(2)]);
var inst_28586 = (inst_28585__$1 == null);
var inst_28587__$1 = cljs.core.not.call(null,inst_28586);
var state_28607__$1 = (function (){var statearr_28626 = state_28607;
(statearr_28626[(8)] = inst_28585__$1);

(statearr_28626[(11)] = inst_28587__$1);

return statearr_28626;
})();
if(inst_28587__$1){
var statearr_28627_28689 = state_28607__$1;
(statearr_28627_28689[(1)] = (15));

} else {
var statearr_28628_28690 = state_28607__$1;
(statearr_28628_28690[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28608 === (16))){
var inst_28587 = (state_28607[(11)]);
var state_28607__$1 = state_28607;
var statearr_28629_28691 = state_28607__$1;
(statearr_28629_28691[(2)] = inst_28587);

(statearr_28629_28691[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28608 === (10))){
var inst_28579 = (state_28607[(2)]);
var state_28607__$1 = state_28607;
var statearr_28630_28692 = state_28607__$1;
(statearr_28630_28692[(2)] = inst_28579);

(statearr_28630_28692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28608 === (18))){
var inst_28590 = (state_28607[(2)]);
var state_28607__$1 = state_28607;
var statearr_28631_28693 = state_28607__$1;
(statearr_28631_28693[(2)] = inst_28590);

(statearr_28631_28693[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28608 === (8))){
var inst_28576 = cljs.core.async.close_BANG_.call(null,to);
var state_28607__$1 = state_28607;
var statearr_28632_28694 = state_28607__$1;
(statearr_28632_28694[(2)] = inst_28576);

(statearr_28632_28694[(1)] = (10));


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
});})(c__28082__auto__,jobs,results,process,async))
;
return ((function (switch__27970__auto__,c__28082__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27971__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27971__auto____0 = (function (){
var statearr_28636 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28636[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27971__auto__);

(statearr_28636[(1)] = (1));

return statearr_28636;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27971__auto____1 = (function (state_28607){
while(true){
var ret_value__27972__auto__ = (function (){try{while(true){
var result__27973__auto__ = switch__27970__auto__.call(null,state_28607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27973__auto__;
}
break;
}
}catch (e28637){if((e28637 instanceof Object)){
var ex__27974__auto__ = e28637;
var statearr_28638_28695 = state_28607;
(statearr_28638_28695[(5)] = ex__27974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28696 = state_28607;
state_28607 = G__28696;
continue;
} else {
return ret_value__27972__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27971__auto__ = function(state_28607){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27971__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27971__auto____1.call(this,state_28607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27971__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27971__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27971__auto__;
})()
;})(switch__27970__auto__,c__28082__auto__,jobs,results,process,async))
})();
var state__28084__auto__ = (function (){var statearr_28639 = f__28083__auto__.call(null);
(statearr_28639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28082__auto__);

return statearr_28639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28084__auto__);
});})(c__28082__auto__,jobs,results,process,async))
);

return c__28082__auto__;
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
var args28697 = [];
var len__25865__auto___28700 = arguments.length;
var i__25866__auto___28701 = (0);
while(true){
if((i__25866__auto___28701 < len__25865__auto___28700)){
args28697.push((arguments[i__25866__auto___28701]));

var G__28702 = (i__25866__auto___28701 + (1));
i__25866__auto___28701 = G__28702;
continue;
} else {
}
break;
}

var G__28699 = args28697.length;
switch (G__28699) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28697.length)].join('')));

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
var args28704 = [];
var len__25865__auto___28707 = arguments.length;
var i__25866__auto___28708 = (0);
while(true){
if((i__25866__auto___28708 < len__25865__auto___28707)){
args28704.push((arguments[i__25866__auto___28708]));

var G__28709 = (i__25866__auto___28708 + (1));
i__25866__auto___28708 = G__28709;
continue;
} else {
}
break;
}

var G__28706 = args28704.length;
switch (G__28706) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28704.length)].join('')));

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
var args28711 = [];
var len__25865__auto___28764 = arguments.length;
var i__25866__auto___28765 = (0);
while(true){
if((i__25866__auto___28765 < len__25865__auto___28764)){
args28711.push((arguments[i__25866__auto___28765]));

var G__28766 = (i__25866__auto___28765 + (1));
i__25866__auto___28765 = G__28766;
continue;
} else {
}
break;
}

var G__28713 = args28711.length;
switch (G__28713) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28711.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28082__auto___28768 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28082__auto___28768,tc,fc){
return (function (){
var f__28083__auto__ = (function (){var switch__27970__auto__ = ((function (c__28082__auto___28768,tc,fc){
return (function (state_28739){
var state_val_28740 = (state_28739[(1)]);
if((state_val_28740 === (7))){
var inst_28735 = (state_28739[(2)]);
var state_28739__$1 = state_28739;
var statearr_28741_28769 = state_28739__$1;
(statearr_28741_28769[(2)] = inst_28735);

(statearr_28741_28769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (1))){
var state_28739__$1 = state_28739;
var statearr_28742_28770 = state_28739__$1;
(statearr_28742_28770[(2)] = null);

(statearr_28742_28770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (4))){
var inst_28716 = (state_28739[(7)]);
var inst_28716__$1 = (state_28739[(2)]);
var inst_28717 = (inst_28716__$1 == null);
var state_28739__$1 = (function (){var statearr_28743 = state_28739;
(statearr_28743[(7)] = inst_28716__$1);

return statearr_28743;
})();
if(cljs.core.truth_(inst_28717)){
var statearr_28744_28771 = state_28739__$1;
(statearr_28744_28771[(1)] = (5));

} else {
var statearr_28745_28772 = state_28739__$1;
(statearr_28745_28772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (13))){
var state_28739__$1 = state_28739;
var statearr_28746_28773 = state_28739__$1;
(statearr_28746_28773[(2)] = null);

(statearr_28746_28773[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (6))){
var inst_28716 = (state_28739[(7)]);
var inst_28722 = p.call(null,inst_28716);
var state_28739__$1 = state_28739;
if(cljs.core.truth_(inst_28722)){
var statearr_28747_28774 = state_28739__$1;
(statearr_28747_28774[(1)] = (9));

} else {
var statearr_28748_28775 = state_28739__$1;
(statearr_28748_28775[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (3))){
var inst_28737 = (state_28739[(2)]);
var state_28739__$1 = state_28739;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28739__$1,inst_28737);
} else {
if((state_val_28740 === (12))){
var state_28739__$1 = state_28739;
var statearr_28749_28776 = state_28739__$1;
(statearr_28749_28776[(2)] = null);

(statearr_28749_28776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (2))){
var state_28739__$1 = state_28739;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28739__$1,(4),ch);
} else {
if((state_val_28740 === (11))){
var inst_28716 = (state_28739[(7)]);
var inst_28726 = (state_28739[(2)]);
var state_28739__$1 = state_28739;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28739__$1,(8),inst_28726,inst_28716);
} else {
if((state_val_28740 === (9))){
var state_28739__$1 = state_28739;
var statearr_28750_28777 = state_28739__$1;
(statearr_28750_28777[(2)] = tc);

(statearr_28750_28777[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (5))){
var inst_28719 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28720 = cljs.core.async.close_BANG_.call(null,fc);
var state_28739__$1 = (function (){var statearr_28751 = state_28739;
(statearr_28751[(8)] = inst_28719);

return statearr_28751;
})();
var statearr_28752_28778 = state_28739__$1;
(statearr_28752_28778[(2)] = inst_28720);

(statearr_28752_28778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (14))){
var inst_28733 = (state_28739[(2)]);
var state_28739__$1 = state_28739;
var statearr_28753_28779 = state_28739__$1;
(statearr_28753_28779[(2)] = inst_28733);

(statearr_28753_28779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (10))){
var state_28739__$1 = state_28739;
var statearr_28754_28780 = state_28739__$1;
(statearr_28754_28780[(2)] = fc);

(statearr_28754_28780[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (8))){
var inst_28728 = (state_28739[(2)]);
var state_28739__$1 = state_28739;
if(cljs.core.truth_(inst_28728)){
var statearr_28755_28781 = state_28739__$1;
(statearr_28755_28781[(1)] = (12));

} else {
var statearr_28756_28782 = state_28739__$1;
(statearr_28756_28782[(1)] = (13));

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
});})(c__28082__auto___28768,tc,fc))
;
return ((function (switch__27970__auto__,c__28082__auto___28768,tc,fc){
return (function() {
var cljs$core$async$state_machine__27971__auto__ = null;
var cljs$core$async$state_machine__27971__auto____0 = (function (){
var statearr_28760 = [null,null,null,null,null,null,null,null,null];
(statearr_28760[(0)] = cljs$core$async$state_machine__27971__auto__);

(statearr_28760[(1)] = (1));

return statearr_28760;
});
var cljs$core$async$state_machine__27971__auto____1 = (function (state_28739){
while(true){
var ret_value__27972__auto__ = (function (){try{while(true){
var result__27973__auto__ = switch__27970__auto__.call(null,state_28739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27973__auto__;
}
break;
}
}catch (e28761){if((e28761 instanceof Object)){
var ex__27974__auto__ = e28761;
var statearr_28762_28783 = state_28739;
(statearr_28762_28783[(5)] = ex__27974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28784 = state_28739;
state_28739 = G__28784;
continue;
} else {
return ret_value__27972__auto__;
}
break;
}
});
cljs$core$async$state_machine__27971__auto__ = function(state_28739){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27971__auto____1.call(this,state_28739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27971__auto____0;
cljs$core$async$state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27971__auto____1;
return cljs$core$async$state_machine__27971__auto__;
})()
;})(switch__27970__auto__,c__28082__auto___28768,tc,fc))
})();
var state__28084__auto__ = (function (){var statearr_28763 = f__28083__auto__.call(null);
(statearr_28763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28082__auto___28768);

return statearr_28763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28084__auto__);
});})(c__28082__auto___28768,tc,fc))
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
var c__28082__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28082__auto__){
return (function (){
var f__28083__auto__ = (function (){var switch__27970__auto__ = ((function (c__28082__auto__){
return (function (state_28848){
var state_val_28849 = (state_28848[(1)]);
if((state_val_28849 === (7))){
var inst_28844 = (state_28848[(2)]);
var state_28848__$1 = state_28848;
var statearr_28850_28871 = state_28848__$1;
(statearr_28850_28871[(2)] = inst_28844);

(statearr_28850_28871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28849 === (1))){
var inst_28828 = init;
var state_28848__$1 = (function (){var statearr_28851 = state_28848;
(statearr_28851[(7)] = inst_28828);

return statearr_28851;
})();
var statearr_28852_28872 = state_28848__$1;
(statearr_28852_28872[(2)] = null);

(statearr_28852_28872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28849 === (4))){
var inst_28831 = (state_28848[(8)]);
var inst_28831__$1 = (state_28848[(2)]);
var inst_28832 = (inst_28831__$1 == null);
var state_28848__$1 = (function (){var statearr_28853 = state_28848;
(statearr_28853[(8)] = inst_28831__$1);

return statearr_28853;
})();
if(cljs.core.truth_(inst_28832)){
var statearr_28854_28873 = state_28848__$1;
(statearr_28854_28873[(1)] = (5));

} else {
var statearr_28855_28874 = state_28848__$1;
(statearr_28855_28874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28849 === (6))){
var inst_28831 = (state_28848[(8)]);
var inst_28835 = (state_28848[(9)]);
var inst_28828 = (state_28848[(7)]);
var inst_28835__$1 = f.call(null,inst_28828,inst_28831);
var inst_28836 = cljs.core.reduced_QMARK_.call(null,inst_28835__$1);
var state_28848__$1 = (function (){var statearr_28856 = state_28848;
(statearr_28856[(9)] = inst_28835__$1);

return statearr_28856;
})();
if(inst_28836){
var statearr_28857_28875 = state_28848__$1;
(statearr_28857_28875[(1)] = (8));

} else {
var statearr_28858_28876 = state_28848__$1;
(statearr_28858_28876[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28849 === (3))){
var inst_28846 = (state_28848[(2)]);
var state_28848__$1 = state_28848;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28848__$1,inst_28846);
} else {
if((state_val_28849 === (2))){
var state_28848__$1 = state_28848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28848__$1,(4),ch);
} else {
if((state_val_28849 === (9))){
var inst_28835 = (state_28848[(9)]);
var inst_28828 = inst_28835;
var state_28848__$1 = (function (){var statearr_28859 = state_28848;
(statearr_28859[(7)] = inst_28828);

return statearr_28859;
})();
var statearr_28860_28877 = state_28848__$1;
(statearr_28860_28877[(2)] = null);

(statearr_28860_28877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28849 === (5))){
var inst_28828 = (state_28848[(7)]);
var state_28848__$1 = state_28848;
var statearr_28861_28878 = state_28848__$1;
(statearr_28861_28878[(2)] = inst_28828);

(statearr_28861_28878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28849 === (10))){
var inst_28842 = (state_28848[(2)]);
var state_28848__$1 = state_28848;
var statearr_28862_28879 = state_28848__$1;
(statearr_28862_28879[(2)] = inst_28842);

(statearr_28862_28879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28849 === (8))){
var inst_28835 = (state_28848[(9)]);
var inst_28838 = cljs.core.deref.call(null,inst_28835);
var state_28848__$1 = state_28848;
var statearr_28863_28880 = state_28848__$1;
(statearr_28863_28880[(2)] = inst_28838);

(statearr_28863_28880[(1)] = (10));


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
});})(c__28082__auto__))
;
return ((function (switch__27970__auto__,c__28082__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27971__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27971__auto____0 = (function (){
var statearr_28867 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28867[(0)] = cljs$core$async$reduce_$_state_machine__27971__auto__);

(statearr_28867[(1)] = (1));

return statearr_28867;
});
var cljs$core$async$reduce_$_state_machine__27971__auto____1 = (function (state_28848){
while(true){
var ret_value__27972__auto__ = (function (){try{while(true){
var result__27973__auto__ = switch__27970__auto__.call(null,state_28848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27973__auto__;
}
break;
}
}catch (e28868){if((e28868 instanceof Object)){
var ex__27974__auto__ = e28868;
var statearr_28869_28881 = state_28848;
(statearr_28869_28881[(5)] = ex__27974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28882 = state_28848;
state_28848 = G__28882;
continue;
} else {
return ret_value__27972__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27971__auto__ = function(state_28848){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27971__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27971__auto____1.call(this,state_28848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27971__auto____0;
cljs$core$async$reduce_$_state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27971__auto____1;
return cljs$core$async$reduce_$_state_machine__27971__auto__;
})()
;})(switch__27970__auto__,c__28082__auto__))
})();
var state__28084__auto__ = (function (){var statearr_28870 = f__28083__auto__.call(null);
(statearr_28870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28082__auto__);

return statearr_28870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28084__auto__);
});})(c__28082__auto__))
);

return c__28082__auto__;
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
var args28883 = [];
var len__25865__auto___28935 = arguments.length;
var i__25866__auto___28936 = (0);
while(true){
if((i__25866__auto___28936 < len__25865__auto___28935)){
args28883.push((arguments[i__25866__auto___28936]));

var G__28937 = (i__25866__auto___28936 + (1));
i__25866__auto___28936 = G__28937;
continue;
} else {
}
break;
}

var G__28885 = args28883.length;
switch (G__28885) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28883.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28082__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28082__auto__){
return (function (){
var f__28083__auto__ = (function (){var switch__27970__auto__ = ((function (c__28082__auto__){
return (function (state_28910){
var state_val_28911 = (state_28910[(1)]);
if((state_val_28911 === (7))){
var inst_28892 = (state_28910[(2)]);
var state_28910__$1 = state_28910;
var statearr_28912_28939 = state_28910__$1;
(statearr_28912_28939[(2)] = inst_28892);

(statearr_28912_28939[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28911 === (1))){
var inst_28886 = cljs.core.seq.call(null,coll);
var inst_28887 = inst_28886;
var state_28910__$1 = (function (){var statearr_28913 = state_28910;
(statearr_28913[(7)] = inst_28887);

return statearr_28913;
})();
var statearr_28914_28940 = state_28910__$1;
(statearr_28914_28940[(2)] = null);

(statearr_28914_28940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28911 === (4))){
var inst_28887 = (state_28910[(7)]);
var inst_28890 = cljs.core.first.call(null,inst_28887);
var state_28910__$1 = state_28910;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28910__$1,(7),ch,inst_28890);
} else {
if((state_val_28911 === (13))){
var inst_28904 = (state_28910[(2)]);
var state_28910__$1 = state_28910;
var statearr_28915_28941 = state_28910__$1;
(statearr_28915_28941[(2)] = inst_28904);

(statearr_28915_28941[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28911 === (6))){
var inst_28895 = (state_28910[(2)]);
var state_28910__$1 = state_28910;
if(cljs.core.truth_(inst_28895)){
var statearr_28916_28942 = state_28910__$1;
(statearr_28916_28942[(1)] = (8));

} else {
var statearr_28917_28943 = state_28910__$1;
(statearr_28917_28943[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28911 === (3))){
var inst_28908 = (state_28910[(2)]);
var state_28910__$1 = state_28910;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28910__$1,inst_28908);
} else {
if((state_val_28911 === (12))){
var state_28910__$1 = state_28910;
var statearr_28918_28944 = state_28910__$1;
(statearr_28918_28944[(2)] = null);

(statearr_28918_28944[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28911 === (2))){
var inst_28887 = (state_28910[(7)]);
var state_28910__$1 = state_28910;
if(cljs.core.truth_(inst_28887)){
var statearr_28919_28945 = state_28910__$1;
(statearr_28919_28945[(1)] = (4));

} else {
var statearr_28920_28946 = state_28910__$1;
(statearr_28920_28946[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28911 === (11))){
var inst_28901 = cljs.core.async.close_BANG_.call(null,ch);
var state_28910__$1 = state_28910;
var statearr_28921_28947 = state_28910__$1;
(statearr_28921_28947[(2)] = inst_28901);

(statearr_28921_28947[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28911 === (9))){
var state_28910__$1 = state_28910;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28922_28948 = state_28910__$1;
(statearr_28922_28948[(1)] = (11));

} else {
var statearr_28923_28949 = state_28910__$1;
(statearr_28923_28949[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28911 === (5))){
var inst_28887 = (state_28910[(7)]);
var state_28910__$1 = state_28910;
var statearr_28924_28950 = state_28910__$1;
(statearr_28924_28950[(2)] = inst_28887);

(statearr_28924_28950[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28911 === (10))){
var inst_28906 = (state_28910[(2)]);
var state_28910__$1 = state_28910;
var statearr_28925_28951 = state_28910__$1;
(statearr_28925_28951[(2)] = inst_28906);

(statearr_28925_28951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28911 === (8))){
var inst_28887 = (state_28910[(7)]);
var inst_28897 = cljs.core.next.call(null,inst_28887);
var inst_28887__$1 = inst_28897;
var state_28910__$1 = (function (){var statearr_28926 = state_28910;
(statearr_28926[(7)] = inst_28887__$1);

return statearr_28926;
})();
var statearr_28927_28952 = state_28910__$1;
(statearr_28927_28952[(2)] = null);

(statearr_28927_28952[(1)] = (2));


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
});})(c__28082__auto__))
;
return ((function (switch__27970__auto__,c__28082__auto__){
return (function() {
var cljs$core$async$state_machine__27971__auto__ = null;
var cljs$core$async$state_machine__27971__auto____0 = (function (){
var statearr_28931 = [null,null,null,null,null,null,null,null];
(statearr_28931[(0)] = cljs$core$async$state_machine__27971__auto__);

(statearr_28931[(1)] = (1));

return statearr_28931;
});
var cljs$core$async$state_machine__27971__auto____1 = (function (state_28910){
while(true){
var ret_value__27972__auto__ = (function (){try{while(true){
var result__27973__auto__ = switch__27970__auto__.call(null,state_28910);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27973__auto__;
}
break;
}
}catch (e28932){if((e28932 instanceof Object)){
var ex__27974__auto__ = e28932;
var statearr_28933_28953 = state_28910;
(statearr_28933_28953[(5)] = ex__27974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28954 = state_28910;
state_28910 = G__28954;
continue;
} else {
return ret_value__27972__auto__;
}
break;
}
});
cljs$core$async$state_machine__27971__auto__ = function(state_28910){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27971__auto____1.call(this,state_28910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27971__auto____0;
cljs$core$async$state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27971__auto____1;
return cljs$core$async$state_machine__27971__auto__;
})()
;})(switch__27970__auto__,c__28082__auto__))
})();
var state__28084__auto__ = (function (){var statearr_28934 = f__28083__auto__.call(null);
(statearr_28934[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28082__auto__);

return statearr_28934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28084__auto__);
});})(c__28082__auto__))
);

return c__28082__auto__;
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
var x__25453__auto__ = (((_ == null))?null:_);
var m__25454__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,_);
} else {
var m__25454__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,_);
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
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25454__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m,ch);
} else {
var m__25454__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m,ch);
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
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m);
} else {
var m__25454__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async29180 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29180 = (function (mult,ch,cs,meta29181){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta29181 = meta29181;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29182,meta29181__$1){
var self__ = this;
var _29182__$1 = this;
return (new cljs.core.async.t_cljs$core$async29180(self__.mult,self__.ch,self__.cs,meta29181__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29180.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29182){
var self__ = this;
var _29182__$1 = this;
return self__.meta29181;
});})(cs))
;

cljs.core.async.t_cljs$core$async29180.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29180.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29180.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async29180.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29180.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29180.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29180.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29181","meta29181",1079164497,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29180.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29180.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29180";

cljs.core.async.t_cljs$core$async29180.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async29180");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async29180 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29180(mult__$1,ch__$1,cs__$1,meta29181){
return (new cljs.core.async.t_cljs$core$async29180(mult__$1,ch__$1,cs__$1,meta29181));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29180(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__28082__auto___29405 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28082__auto___29405,cs,m,dchan,dctr,done){
return (function (){
var f__28083__auto__ = (function (){var switch__27970__auto__ = ((function (c__28082__auto___29405,cs,m,dchan,dctr,done){
return (function (state_29317){
var state_val_29318 = (state_29317[(1)]);
if((state_val_29318 === (7))){
var inst_29313 = (state_29317[(2)]);
var state_29317__$1 = state_29317;
var statearr_29319_29406 = state_29317__$1;
(statearr_29319_29406[(2)] = inst_29313);

(statearr_29319_29406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (20))){
var inst_29216 = (state_29317[(7)]);
var inst_29228 = cljs.core.first.call(null,inst_29216);
var inst_29229 = cljs.core.nth.call(null,inst_29228,(0),null);
var inst_29230 = cljs.core.nth.call(null,inst_29228,(1),null);
var state_29317__$1 = (function (){var statearr_29320 = state_29317;
(statearr_29320[(8)] = inst_29229);

return statearr_29320;
})();
if(cljs.core.truth_(inst_29230)){
var statearr_29321_29407 = state_29317__$1;
(statearr_29321_29407[(1)] = (22));

} else {
var statearr_29322_29408 = state_29317__$1;
(statearr_29322_29408[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (27))){
var inst_29265 = (state_29317[(9)]);
var inst_29260 = (state_29317[(10)]);
var inst_29258 = (state_29317[(11)]);
var inst_29185 = (state_29317[(12)]);
var inst_29265__$1 = cljs.core._nth.call(null,inst_29258,inst_29260);
var inst_29266 = cljs.core.async.put_BANG_.call(null,inst_29265__$1,inst_29185,done);
var state_29317__$1 = (function (){var statearr_29323 = state_29317;
(statearr_29323[(9)] = inst_29265__$1);

return statearr_29323;
})();
if(cljs.core.truth_(inst_29266)){
var statearr_29324_29409 = state_29317__$1;
(statearr_29324_29409[(1)] = (30));

} else {
var statearr_29325_29410 = state_29317__$1;
(statearr_29325_29410[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (1))){
var state_29317__$1 = state_29317;
var statearr_29326_29411 = state_29317__$1;
(statearr_29326_29411[(2)] = null);

(statearr_29326_29411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (24))){
var inst_29216 = (state_29317[(7)]);
var inst_29235 = (state_29317[(2)]);
var inst_29236 = cljs.core.next.call(null,inst_29216);
var inst_29194 = inst_29236;
var inst_29195 = null;
var inst_29196 = (0);
var inst_29197 = (0);
var state_29317__$1 = (function (){var statearr_29327 = state_29317;
(statearr_29327[(13)] = inst_29194);

(statearr_29327[(14)] = inst_29195);

(statearr_29327[(15)] = inst_29197);

(statearr_29327[(16)] = inst_29235);

(statearr_29327[(17)] = inst_29196);

return statearr_29327;
})();
var statearr_29328_29412 = state_29317__$1;
(statearr_29328_29412[(2)] = null);

(statearr_29328_29412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (39))){
var state_29317__$1 = state_29317;
var statearr_29332_29413 = state_29317__$1;
(statearr_29332_29413[(2)] = null);

(statearr_29332_29413[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (4))){
var inst_29185 = (state_29317[(12)]);
var inst_29185__$1 = (state_29317[(2)]);
var inst_29186 = (inst_29185__$1 == null);
var state_29317__$1 = (function (){var statearr_29333 = state_29317;
(statearr_29333[(12)] = inst_29185__$1);

return statearr_29333;
})();
if(cljs.core.truth_(inst_29186)){
var statearr_29334_29414 = state_29317__$1;
(statearr_29334_29414[(1)] = (5));

} else {
var statearr_29335_29415 = state_29317__$1;
(statearr_29335_29415[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (15))){
var inst_29194 = (state_29317[(13)]);
var inst_29195 = (state_29317[(14)]);
var inst_29197 = (state_29317[(15)]);
var inst_29196 = (state_29317[(17)]);
var inst_29212 = (state_29317[(2)]);
var inst_29213 = (inst_29197 + (1));
var tmp29329 = inst_29194;
var tmp29330 = inst_29195;
var tmp29331 = inst_29196;
var inst_29194__$1 = tmp29329;
var inst_29195__$1 = tmp29330;
var inst_29196__$1 = tmp29331;
var inst_29197__$1 = inst_29213;
var state_29317__$1 = (function (){var statearr_29336 = state_29317;
(statearr_29336[(13)] = inst_29194__$1);

(statearr_29336[(14)] = inst_29195__$1);

(statearr_29336[(15)] = inst_29197__$1);

(statearr_29336[(18)] = inst_29212);

(statearr_29336[(17)] = inst_29196__$1);

return statearr_29336;
})();
var statearr_29337_29416 = state_29317__$1;
(statearr_29337_29416[(2)] = null);

(statearr_29337_29416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (21))){
var inst_29239 = (state_29317[(2)]);
var state_29317__$1 = state_29317;
var statearr_29341_29417 = state_29317__$1;
(statearr_29341_29417[(2)] = inst_29239);

(statearr_29341_29417[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (31))){
var inst_29265 = (state_29317[(9)]);
var inst_29269 = done.call(null,null);
var inst_29270 = cljs.core.async.untap_STAR_.call(null,m,inst_29265);
var state_29317__$1 = (function (){var statearr_29342 = state_29317;
(statearr_29342[(19)] = inst_29269);

return statearr_29342;
})();
var statearr_29343_29418 = state_29317__$1;
(statearr_29343_29418[(2)] = inst_29270);

(statearr_29343_29418[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (32))){
var inst_29260 = (state_29317[(10)]);
var inst_29258 = (state_29317[(11)]);
var inst_29257 = (state_29317[(20)]);
var inst_29259 = (state_29317[(21)]);
var inst_29272 = (state_29317[(2)]);
var inst_29273 = (inst_29260 + (1));
var tmp29338 = inst_29258;
var tmp29339 = inst_29257;
var tmp29340 = inst_29259;
var inst_29257__$1 = tmp29339;
var inst_29258__$1 = tmp29338;
var inst_29259__$1 = tmp29340;
var inst_29260__$1 = inst_29273;
var state_29317__$1 = (function (){var statearr_29344 = state_29317;
(statearr_29344[(10)] = inst_29260__$1);

(statearr_29344[(11)] = inst_29258__$1);

(statearr_29344[(20)] = inst_29257__$1);

(statearr_29344[(22)] = inst_29272);

(statearr_29344[(21)] = inst_29259__$1);

return statearr_29344;
})();
var statearr_29345_29419 = state_29317__$1;
(statearr_29345_29419[(2)] = null);

(statearr_29345_29419[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (40))){
var inst_29285 = (state_29317[(23)]);
var inst_29289 = done.call(null,null);
var inst_29290 = cljs.core.async.untap_STAR_.call(null,m,inst_29285);
var state_29317__$1 = (function (){var statearr_29346 = state_29317;
(statearr_29346[(24)] = inst_29289);

return statearr_29346;
})();
var statearr_29347_29420 = state_29317__$1;
(statearr_29347_29420[(2)] = inst_29290);

(statearr_29347_29420[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (33))){
var inst_29276 = (state_29317[(25)]);
var inst_29278 = cljs.core.chunked_seq_QMARK_.call(null,inst_29276);
var state_29317__$1 = state_29317;
if(inst_29278){
var statearr_29348_29421 = state_29317__$1;
(statearr_29348_29421[(1)] = (36));

} else {
var statearr_29349_29422 = state_29317__$1;
(statearr_29349_29422[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (13))){
var inst_29206 = (state_29317[(26)]);
var inst_29209 = cljs.core.async.close_BANG_.call(null,inst_29206);
var state_29317__$1 = state_29317;
var statearr_29350_29423 = state_29317__$1;
(statearr_29350_29423[(2)] = inst_29209);

(statearr_29350_29423[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (22))){
var inst_29229 = (state_29317[(8)]);
var inst_29232 = cljs.core.async.close_BANG_.call(null,inst_29229);
var state_29317__$1 = state_29317;
var statearr_29351_29424 = state_29317__$1;
(statearr_29351_29424[(2)] = inst_29232);

(statearr_29351_29424[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (36))){
var inst_29276 = (state_29317[(25)]);
var inst_29280 = cljs.core.chunk_first.call(null,inst_29276);
var inst_29281 = cljs.core.chunk_rest.call(null,inst_29276);
var inst_29282 = cljs.core.count.call(null,inst_29280);
var inst_29257 = inst_29281;
var inst_29258 = inst_29280;
var inst_29259 = inst_29282;
var inst_29260 = (0);
var state_29317__$1 = (function (){var statearr_29352 = state_29317;
(statearr_29352[(10)] = inst_29260);

(statearr_29352[(11)] = inst_29258);

(statearr_29352[(20)] = inst_29257);

(statearr_29352[(21)] = inst_29259);

return statearr_29352;
})();
var statearr_29353_29425 = state_29317__$1;
(statearr_29353_29425[(2)] = null);

(statearr_29353_29425[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (41))){
var inst_29276 = (state_29317[(25)]);
var inst_29292 = (state_29317[(2)]);
var inst_29293 = cljs.core.next.call(null,inst_29276);
var inst_29257 = inst_29293;
var inst_29258 = null;
var inst_29259 = (0);
var inst_29260 = (0);
var state_29317__$1 = (function (){var statearr_29354 = state_29317;
(statearr_29354[(10)] = inst_29260);

(statearr_29354[(11)] = inst_29258);

(statearr_29354[(20)] = inst_29257);

(statearr_29354[(27)] = inst_29292);

(statearr_29354[(21)] = inst_29259);

return statearr_29354;
})();
var statearr_29355_29426 = state_29317__$1;
(statearr_29355_29426[(2)] = null);

(statearr_29355_29426[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (43))){
var state_29317__$1 = state_29317;
var statearr_29356_29427 = state_29317__$1;
(statearr_29356_29427[(2)] = null);

(statearr_29356_29427[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (29))){
var inst_29301 = (state_29317[(2)]);
var state_29317__$1 = state_29317;
var statearr_29357_29428 = state_29317__$1;
(statearr_29357_29428[(2)] = inst_29301);

(statearr_29357_29428[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (44))){
var inst_29310 = (state_29317[(2)]);
var state_29317__$1 = (function (){var statearr_29358 = state_29317;
(statearr_29358[(28)] = inst_29310);

return statearr_29358;
})();
var statearr_29359_29429 = state_29317__$1;
(statearr_29359_29429[(2)] = null);

(statearr_29359_29429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (6))){
var inst_29249 = (state_29317[(29)]);
var inst_29248 = cljs.core.deref.call(null,cs);
var inst_29249__$1 = cljs.core.keys.call(null,inst_29248);
var inst_29250 = cljs.core.count.call(null,inst_29249__$1);
var inst_29251 = cljs.core.reset_BANG_.call(null,dctr,inst_29250);
var inst_29256 = cljs.core.seq.call(null,inst_29249__$1);
var inst_29257 = inst_29256;
var inst_29258 = null;
var inst_29259 = (0);
var inst_29260 = (0);
var state_29317__$1 = (function (){var statearr_29360 = state_29317;
(statearr_29360[(10)] = inst_29260);

(statearr_29360[(11)] = inst_29258);

(statearr_29360[(20)] = inst_29257);

(statearr_29360[(29)] = inst_29249__$1);

(statearr_29360[(30)] = inst_29251);

(statearr_29360[(21)] = inst_29259);

return statearr_29360;
})();
var statearr_29361_29430 = state_29317__$1;
(statearr_29361_29430[(2)] = null);

(statearr_29361_29430[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (28))){
var inst_29257 = (state_29317[(20)]);
var inst_29276 = (state_29317[(25)]);
var inst_29276__$1 = cljs.core.seq.call(null,inst_29257);
var state_29317__$1 = (function (){var statearr_29362 = state_29317;
(statearr_29362[(25)] = inst_29276__$1);

return statearr_29362;
})();
if(inst_29276__$1){
var statearr_29363_29431 = state_29317__$1;
(statearr_29363_29431[(1)] = (33));

} else {
var statearr_29364_29432 = state_29317__$1;
(statearr_29364_29432[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (25))){
var inst_29260 = (state_29317[(10)]);
var inst_29259 = (state_29317[(21)]);
var inst_29262 = (inst_29260 < inst_29259);
var inst_29263 = inst_29262;
var state_29317__$1 = state_29317;
if(cljs.core.truth_(inst_29263)){
var statearr_29365_29433 = state_29317__$1;
(statearr_29365_29433[(1)] = (27));

} else {
var statearr_29366_29434 = state_29317__$1;
(statearr_29366_29434[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (34))){
var state_29317__$1 = state_29317;
var statearr_29367_29435 = state_29317__$1;
(statearr_29367_29435[(2)] = null);

(statearr_29367_29435[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (17))){
var state_29317__$1 = state_29317;
var statearr_29368_29436 = state_29317__$1;
(statearr_29368_29436[(2)] = null);

(statearr_29368_29436[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (3))){
var inst_29315 = (state_29317[(2)]);
var state_29317__$1 = state_29317;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29317__$1,inst_29315);
} else {
if((state_val_29318 === (12))){
var inst_29244 = (state_29317[(2)]);
var state_29317__$1 = state_29317;
var statearr_29369_29437 = state_29317__$1;
(statearr_29369_29437[(2)] = inst_29244);

(statearr_29369_29437[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (2))){
var state_29317__$1 = state_29317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29317__$1,(4),ch);
} else {
if((state_val_29318 === (23))){
var state_29317__$1 = state_29317;
var statearr_29370_29438 = state_29317__$1;
(statearr_29370_29438[(2)] = null);

(statearr_29370_29438[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (35))){
var inst_29299 = (state_29317[(2)]);
var state_29317__$1 = state_29317;
var statearr_29371_29439 = state_29317__$1;
(statearr_29371_29439[(2)] = inst_29299);

(statearr_29371_29439[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (19))){
var inst_29216 = (state_29317[(7)]);
var inst_29220 = cljs.core.chunk_first.call(null,inst_29216);
var inst_29221 = cljs.core.chunk_rest.call(null,inst_29216);
var inst_29222 = cljs.core.count.call(null,inst_29220);
var inst_29194 = inst_29221;
var inst_29195 = inst_29220;
var inst_29196 = inst_29222;
var inst_29197 = (0);
var state_29317__$1 = (function (){var statearr_29372 = state_29317;
(statearr_29372[(13)] = inst_29194);

(statearr_29372[(14)] = inst_29195);

(statearr_29372[(15)] = inst_29197);

(statearr_29372[(17)] = inst_29196);

return statearr_29372;
})();
var statearr_29373_29440 = state_29317__$1;
(statearr_29373_29440[(2)] = null);

(statearr_29373_29440[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (11))){
var inst_29194 = (state_29317[(13)]);
var inst_29216 = (state_29317[(7)]);
var inst_29216__$1 = cljs.core.seq.call(null,inst_29194);
var state_29317__$1 = (function (){var statearr_29374 = state_29317;
(statearr_29374[(7)] = inst_29216__$1);

return statearr_29374;
})();
if(inst_29216__$1){
var statearr_29375_29441 = state_29317__$1;
(statearr_29375_29441[(1)] = (16));

} else {
var statearr_29376_29442 = state_29317__$1;
(statearr_29376_29442[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (9))){
var inst_29246 = (state_29317[(2)]);
var state_29317__$1 = state_29317;
var statearr_29377_29443 = state_29317__$1;
(statearr_29377_29443[(2)] = inst_29246);

(statearr_29377_29443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (5))){
var inst_29192 = cljs.core.deref.call(null,cs);
var inst_29193 = cljs.core.seq.call(null,inst_29192);
var inst_29194 = inst_29193;
var inst_29195 = null;
var inst_29196 = (0);
var inst_29197 = (0);
var state_29317__$1 = (function (){var statearr_29378 = state_29317;
(statearr_29378[(13)] = inst_29194);

(statearr_29378[(14)] = inst_29195);

(statearr_29378[(15)] = inst_29197);

(statearr_29378[(17)] = inst_29196);

return statearr_29378;
})();
var statearr_29379_29444 = state_29317__$1;
(statearr_29379_29444[(2)] = null);

(statearr_29379_29444[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (14))){
var state_29317__$1 = state_29317;
var statearr_29380_29445 = state_29317__$1;
(statearr_29380_29445[(2)] = null);

(statearr_29380_29445[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (45))){
var inst_29307 = (state_29317[(2)]);
var state_29317__$1 = state_29317;
var statearr_29381_29446 = state_29317__$1;
(statearr_29381_29446[(2)] = inst_29307);

(statearr_29381_29446[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (26))){
var inst_29249 = (state_29317[(29)]);
var inst_29303 = (state_29317[(2)]);
var inst_29304 = cljs.core.seq.call(null,inst_29249);
var state_29317__$1 = (function (){var statearr_29382 = state_29317;
(statearr_29382[(31)] = inst_29303);

return statearr_29382;
})();
if(inst_29304){
var statearr_29383_29447 = state_29317__$1;
(statearr_29383_29447[(1)] = (42));

} else {
var statearr_29384_29448 = state_29317__$1;
(statearr_29384_29448[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (16))){
var inst_29216 = (state_29317[(7)]);
var inst_29218 = cljs.core.chunked_seq_QMARK_.call(null,inst_29216);
var state_29317__$1 = state_29317;
if(inst_29218){
var statearr_29385_29449 = state_29317__$1;
(statearr_29385_29449[(1)] = (19));

} else {
var statearr_29386_29450 = state_29317__$1;
(statearr_29386_29450[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (38))){
var inst_29296 = (state_29317[(2)]);
var state_29317__$1 = state_29317;
var statearr_29387_29451 = state_29317__$1;
(statearr_29387_29451[(2)] = inst_29296);

(statearr_29387_29451[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (30))){
var state_29317__$1 = state_29317;
var statearr_29388_29452 = state_29317__$1;
(statearr_29388_29452[(2)] = null);

(statearr_29388_29452[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (10))){
var inst_29195 = (state_29317[(14)]);
var inst_29197 = (state_29317[(15)]);
var inst_29205 = cljs.core._nth.call(null,inst_29195,inst_29197);
var inst_29206 = cljs.core.nth.call(null,inst_29205,(0),null);
var inst_29207 = cljs.core.nth.call(null,inst_29205,(1),null);
var state_29317__$1 = (function (){var statearr_29389 = state_29317;
(statearr_29389[(26)] = inst_29206);

return statearr_29389;
})();
if(cljs.core.truth_(inst_29207)){
var statearr_29390_29453 = state_29317__$1;
(statearr_29390_29453[(1)] = (13));

} else {
var statearr_29391_29454 = state_29317__$1;
(statearr_29391_29454[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (18))){
var inst_29242 = (state_29317[(2)]);
var state_29317__$1 = state_29317;
var statearr_29392_29455 = state_29317__$1;
(statearr_29392_29455[(2)] = inst_29242);

(statearr_29392_29455[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (42))){
var state_29317__$1 = state_29317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29317__$1,(45),dchan);
} else {
if((state_val_29318 === (37))){
var inst_29185 = (state_29317[(12)]);
var inst_29285 = (state_29317[(23)]);
var inst_29276 = (state_29317[(25)]);
var inst_29285__$1 = cljs.core.first.call(null,inst_29276);
var inst_29286 = cljs.core.async.put_BANG_.call(null,inst_29285__$1,inst_29185,done);
var state_29317__$1 = (function (){var statearr_29393 = state_29317;
(statearr_29393[(23)] = inst_29285__$1);

return statearr_29393;
})();
if(cljs.core.truth_(inst_29286)){
var statearr_29394_29456 = state_29317__$1;
(statearr_29394_29456[(1)] = (39));

} else {
var statearr_29395_29457 = state_29317__$1;
(statearr_29395_29457[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (8))){
var inst_29197 = (state_29317[(15)]);
var inst_29196 = (state_29317[(17)]);
var inst_29199 = (inst_29197 < inst_29196);
var inst_29200 = inst_29199;
var state_29317__$1 = state_29317;
if(cljs.core.truth_(inst_29200)){
var statearr_29396_29458 = state_29317__$1;
(statearr_29396_29458[(1)] = (10));

} else {
var statearr_29397_29459 = state_29317__$1;
(statearr_29397_29459[(1)] = (11));

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
});})(c__28082__auto___29405,cs,m,dchan,dctr,done))
;
return ((function (switch__27970__auto__,c__28082__auto___29405,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27971__auto__ = null;
var cljs$core$async$mult_$_state_machine__27971__auto____0 = (function (){
var statearr_29401 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29401[(0)] = cljs$core$async$mult_$_state_machine__27971__auto__);

(statearr_29401[(1)] = (1));

return statearr_29401;
});
var cljs$core$async$mult_$_state_machine__27971__auto____1 = (function (state_29317){
while(true){
var ret_value__27972__auto__ = (function (){try{while(true){
var result__27973__auto__ = switch__27970__auto__.call(null,state_29317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27973__auto__;
}
break;
}
}catch (e29402){if((e29402 instanceof Object)){
var ex__27974__auto__ = e29402;
var statearr_29403_29460 = state_29317;
(statearr_29403_29460[(5)] = ex__27974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29461 = state_29317;
state_29317 = G__29461;
continue;
} else {
return ret_value__27972__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27971__auto__ = function(state_29317){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27971__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27971__auto____1.call(this,state_29317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27971__auto____0;
cljs$core$async$mult_$_state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27971__auto____1;
return cljs$core$async$mult_$_state_machine__27971__auto__;
})()
;})(switch__27970__auto__,c__28082__auto___29405,cs,m,dchan,dctr,done))
})();
var state__28084__auto__ = (function (){var statearr_29404 = f__28083__auto__.call(null);
(statearr_29404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28082__auto___29405);

return statearr_29404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28084__auto__);
});})(c__28082__auto___29405,cs,m,dchan,dctr,done))
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
var args29462 = [];
var len__25865__auto___29465 = arguments.length;
var i__25866__auto___29466 = (0);
while(true){
if((i__25866__auto___29466 < len__25865__auto___29465)){
args29462.push((arguments[i__25866__auto___29466]));

var G__29467 = (i__25866__auto___29466 + (1));
i__25866__auto___29466 = G__29467;
continue;
} else {
}
break;
}

var G__29464 = args29462.length;
switch (G__29464) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29462.length)].join('')));

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
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m,ch);
} else {
var m__25454__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m,ch);
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
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m,ch);
} else {
var m__25454__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m,ch);
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
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m);
} else {
var m__25454__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m);
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
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m,state_map);
} else {
var m__25454__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m,state_map);
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
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m,mode);
} else {
var m__25454__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25872__auto__ = [];
var len__25865__auto___29479 = arguments.length;
var i__25866__auto___29480 = (0);
while(true){
if((i__25866__auto___29480 < len__25865__auto___29479)){
args__25872__auto__.push((arguments[i__25866__auto___29480]));

var G__29481 = (i__25866__auto___29480 + (1));
i__25866__auto___29480 = G__29481;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((3) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25873__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29473){
var map__29474 = p__29473;
var map__29474__$1 = ((((!((map__29474 == null)))?((((map__29474.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29474.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29474):map__29474);
var opts = map__29474__$1;
var statearr_29476_29482 = state;
(statearr_29476_29482[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__29474,map__29474__$1,opts){
return (function (val){
var statearr_29477_29483 = state;
(statearr_29477_29483[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29474,map__29474__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_29478_29484 = state;
(statearr_29478_29484[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29469){
var G__29470 = cljs.core.first.call(null,seq29469);
var seq29469__$1 = cljs.core.next.call(null,seq29469);
var G__29471 = cljs.core.first.call(null,seq29469__$1);
var seq29469__$2 = cljs.core.next.call(null,seq29469__$1);
var G__29472 = cljs.core.first.call(null,seq29469__$2);
var seq29469__$3 = cljs.core.next.call(null,seq29469__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29470,G__29471,G__29472,seq29469__$3);
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
if(typeof cljs.core.async.t_cljs$core$async29650 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29650 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29651){
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
this.meta29651 = meta29651;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29652,meta29651__$1){
var self__ = this;
var _29652__$1 = this;
return (new cljs.core.async.t_cljs$core$async29650(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29651__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29650.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29652){
var self__ = this;
var _29652__$1 = this;
return self__.meta29651;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29650.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29650.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29650.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async29650.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29650.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29650.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29650.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29650.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29650.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29651","meta29651",787095140,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29650.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29650.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29650";

cljs.core.async.t_cljs$core$async29650.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async29650");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async29650 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29650(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29651){
return (new cljs.core.async.t_cljs$core$async29650(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29651));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29650(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28082__auto___29815 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28082__auto___29815,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28083__auto__ = (function (){var switch__27970__auto__ = ((function (c__28082__auto___29815,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29752){
var state_val_29753 = (state_29752[(1)]);
if((state_val_29753 === (7))){
var inst_29668 = (state_29752[(2)]);
var state_29752__$1 = state_29752;
var statearr_29754_29816 = state_29752__$1;
(statearr_29754_29816[(2)] = inst_29668);

(statearr_29754_29816[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29753 === (20))){
var inst_29680 = (state_29752[(7)]);
var state_29752__$1 = state_29752;
var statearr_29755_29817 = state_29752__$1;
(statearr_29755_29817[(2)] = inst_29680);

(statearr_29755_29817[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29753 === (27))){
var state_29752__$1 = state_29752;
var statearr_29756_29818 = state_29752__$1;
(statearr_29756_29818[(2)] = null);

(statearr_29756_29818[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29753 === (1))){
var inst_29656 = (state_29752[(8)]);
var inst_29656__$1 = calc_state.call(null);
var inst_29658 = (inst_29656__$1 == null);
var inst_29659 = cljs.core.not.call(null,inst_29658);
var state_29752__$1 = (function (){var statearr_29757 = state_29752;
(statearr_29757[(8)] = inst_29656__$1);

return statearr_29757;
})();
if(inst_29659){
var statearr_29758_29819 = state_29752__$1;
(statearr_29758_29819[(1)] = (2));

} else {
var statearr_29759_29820 = state_29752__$1;
(statearr_29759_29820[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29753 === (24))){
var inst_29726 = (state_29752[(9)]);
var inst_29703 = (state_29752[(10)]);
var inst_29712 = (state_29752[(11)]);
var inst_29726__$1 = inst_29703.call(null,inst_29712);
var state_29752__$1 = (function (){var statearr_29760 = state_29752;
(statearr_29760[(9)] = inst_29726__$1);

return statearr_29760;
})();
if(cljs.core.truth_(inst_29726__$1)){
var statearr_29761_29821 = state_29752__$1;
(statearr_29761_29821[(1)] = (29));

} else {
var statearr_29762_29822 = state_29752__$1;
(statearr_29762_29822[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29753 === (4))){
var inst_29671 = (state_29752[(2)]);
var state_29752__$1 = state_29752;
if(cljs.core.truth_(inst_29671)){
var statearr_29763_29823 = state_29752__$1;
(statearr_29763_29823[(1)] = (8));

} else {
var statearr_29764_29824 = state_29752__$1;
(statearr_29764_29824[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29753 === (15))){
var inst_29697 = (state_29752[(2)]);
var state_29752__$1 = state_29752;
if(cljs.core.truth_(inst_29697)){
var statearr_29765_29825 = state_29752__$1;
(statearr_29765_29825[(1)] = (19));

} else {
var statearr_29766_29826 = state_29752__$1;
(statearr_29766_29826[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29753 === (21))){
var inst_29702 = (state_29752[(12)]);
var inst_29702__$1 = (state_29752[(2)]);
var inst_29703 = cljs.core.get.call(null,inst_29702__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29704 = cljs.core.get.call(null,inst_29702__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29705 = cljs.core.get.call(null,inst_29702__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29752__$1 = (function (){var statearr_29767 = state_29752;
(statearr_29767[(10)] = inst_29703);

(statearr_29767[(12)] = inst_29702__$1);

(statearr_29767[(13)] = inst_29704);

return statearr_29767;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29752__$1,(22),inst_29705);
} else {
if((state_val_29753 === (31))){
var inst_29734 = (state_29752[(2)]);
var state_29752__$1 = state_29752;
if(cljs.core.truth_(inst_29734)){
var statearr_29768_29827 = state_29752__$1;
(statearr_29768_29827[(1)] = (32));

} else {
var statearr_29769_29828 = state_29752__$1;
(statearr_29769_29828[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29753 === (32))){
var inst_29711 = (state_29752[(14)]);
var state_29752__$1 = state_29752;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29752__$1,(35),out,inst_29711);
} else {
if((state_val_29753 === (33))){
var inst_29702 = (state_29752[(12)]);
var inst_29680 = inst_29702;
var state_29752__$1 = (function (){var statearr_29770 = state_29752;
(statearr_29770[(7)] = inst_29680);

return statearr_29770;
})();
var statearr_29771_29829 = state_29752__$1;
(statearr_29771_29829[(2)] = null);

(statearr_29771_29829[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29753 === (13))){
var inst_29680 = (state_29752[(7)]);
var inst_29687 = inst_29680.cljs$lang$protocol_mask$partition0$;
var inst_29688 = (inst_29687 & (64));
var inst_29689 = inst_29680.cljs$core$ISeq$;
var inst_29690 = (inst_29688) || (inst_29689);
var state_29752__$1 = state_29752;
if(cljs.core.truth_(inst_29690)){
var statearr_29772_29830 = state_29752__$1;
(statearr_29772_29830[(1)] = (16));

} else {
var statearr_29773_29831 = state_29752__$1;
(statearr_29773_29831[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29753 === (22))){
var inst_29712 = (state_29752[(11)]);
var inst_29711 = (state_29752[(14)]);
var inst_29710 = (state_29752[(2)]);
var inst_29711__$1 = cljs.core.nth.call(null,inst_29710,(0),null);
var inst_29712__$1 = cljs.core.nth.call(null,inst_29710,(1),null);
var inst_29713 = (inst_29711__$1 == null);
var inst_29714 = cljs.core._EQ_.call(null,inst_29712__$1,change);
var inst_29715 = (inst_29713) || (inst_29714);
var state_29752__$1 = (function (){var statearr_29774 = state_29752;
(statearr_29774[(11)] = inst_29712__$1);

(statearr_29774[(14)] = inst_29711__$1);

return statearr_29774;
})();
if(cljs.core.truth_(inst_29715)){
var statearr_29775_29832 = state_29752__$1;
(statearr_29775_29832[(1)] = (23));

} else {
var statearr_29776_29833 = state_29752__$1;
(statearr_29776_29833[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29753 === (36))){
var inst_29702 = (state_29752[(12)]);
var inst_29680 = inst_29702;
var state_29752__$1 = (function (){var statearr_29777 = state_29752;
(statearr_29777[(7)] = inst_29680);

return statearr_29777;
})();
var statearr_29778_29834 = state_29752__$1;
(statearr_29778_29834[(2)] = null);

(statearr_29778_29834[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29753 === (29))){
var inst_29726 = (state_29752[(9)]);
var state_29752__$1 = state_29752;
var statearr_29779_29835 = state_29752__$1;
(statearr_29779_29835[(2)] = inst_29726);

(statearr_29779_29835[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29753 === (6))){
var state_29752__$1 = state_29752;
var statearr_29780_29836 = state_29752__$1;
(statearr_29780_29836[(2)] = false);

(statearr_29780_29836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29753 === (28))){
var inst_29722 = (state_29752[(2)]);
var inst_29723 = calc_state.call(null);
var inst_29680 = inst_29723;
var state_29752__$1 = (function (){var statearr_29781 = state_29752;
(statearr_29781[(7)] = inst_29680);

(statearr_29781[(15)] = inst_29722);

return statearr_29781;
})();
var statearr_29782_29837 = state_29752__$1;
(statearr_29782_29837[(2)] = null);

(statearr_29782_29837[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29753 === (25))){
var inst_29748 = (state_29752[(2)]);
var state_29752__$1 = state_29752;
var statearr_29783_29838 = state_29752__$1;
(statearr_29783_29838[(2)] = inst_29748);

(statearr_29783_29838[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29753 === (34))){
var inst_29746 = (state_29752[(2)]);
var state_29752__$1 = state_29752;
var statearr_29784_29839 = state_29752__$1;
(statearr_29784_29839[(2)] = inst_29746);

(statearr_29784_29839[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29753 === (17))){
var state_29752__$1 = state_29752;
var statearr_29785_29840 = state_29752__$1;
(statearr_29785_29840[(2)] = false);

(statearr_29785_29840[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29753 === (3))){
var state_29752__$1 = state_29752;
var statearr_29786_29841 = state_29752__$1;
(statearr_29786_29841[(2)] = false);

(statearr_29786_29841[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29753 === (12))){
var inst_29750 = (state_29752[(2)]);
var state_29752__$1 = state_29752;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29752__$1,inst_29750);
} else {
if((state_val_29753 === (2))){
var inst_29656 = (state_29752[(8)]);
var inst_29661 = inst_29656.cljs$lang$protocol_mask$partition0$;
var inst_29662 = (inst_29661 & (64));
var inst_29663 = inst_29656.cljs$core$ISeq$;
var inst_29664 = (inst_29662) || (inst_29663);
var state_29752__$1 = state_29752;
if(cljs.core.truth_(inst_29664)){
var statearr_29787_29842 = state_29752__$1;
(statearr_29787_29842[(1)] = (5));

} else {
var statearr_29788_29843 = state_29752__$1;
(statearr_29788_29843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29753 === (23))){
var inst_29711 = (state_29752[(14)]);
var inst_29717 = (inst_29711 == null);
var state_29752__$1 = state_29752;
if(cljs.core.truth_(inst_29717)){
var statearr_29789_29844 = state_29752__$1;
(statearr_29789_29844[(1)] = (26));

} else {
var statearr_29790_29845 = state_29752__$1;
(statearr_29790_29845[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29753 === (35))){
var inst_29737 = (state_29752[(2)]);
var state_29752__$1 = state_29752;
if(cljs.core.truth_(inst_29737)){
var statearr_29791_29846 = state_29752__$1;
(statearr_29791_29846[(1)] = (36));

} else {
var statearr_29792_29847 = state_29752__$1;
(statearr_29792_29847[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29753 === (19))){
var inst_29680 = (state_29752[(7)]);
var inst_29699 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29680);
var state_29752__$1 = state_29752;
var statearr_29793_29848 = state_29752__$1;
(statearr_29793_29848[(2)] = inst_29699);

(statearr_29793_29848[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29753 === (11))){
var inst_29680 = (state_29752[(7)]);
var inst_29684 = (inst_29680 == null);
var inst_29685 = cljs.core.not.call(null,inst_29684);
var state_29752__$1 = state_29752;
if(inst_29685){
var statearr_29794_29849 = state_29752__$1;
(statearr_29794_29849[(1)] = (13));

} else {
var statearr_29795_29850 = state_29752__$1;
(statearr_29795_29850[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29753 === (9))){
var inst_29656 = (state_29752[(8)]);
var state_29752__$1 = state_29752;
var statearr_29796_29851 = state_29752__$1;
(statearr_29796_29851[(2)] = inst_29656);

(statearr_29796_29851[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29753 === (5))){
var state_29752__$1 = state_29752;
var statearr_29797_29852 = state_29752__$1;
(statearr_29797_29852[(2)] = true);

(statearr_29797_29852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29753 === (14))){
var state_29752__$1 = state_29752;
var statearr_29798_29853 = state_29752__$1;
(statearr_29798_29853[(2)] = false);

(statearr_29798_29853[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29753 === (26))){
var inst_29712 = (state_29752[(11)]);
var inst_29719 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29712);
var state_29752__$1 = state_29752;
var statearr_29799_29854 = state_29752__$1;
(statearr_29799_29854[(2)] = inst_29719);

(statearr_29799_29854[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29753 === (16))){
var state_29752__$1 = state_29752;
var statearr_29800_29855 = state_29752__$1;
(statearr_29800_29855[(2)] = true);

(statearr_29800_29855[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29753 === (38))){
var inst_29742 = (state_29752[(2)]);
var state_29752__$1 = state_29752;
var statearr_29801_29856 = state_29752__$1;
(statearr_29801_29856[(2)] = inst_29742);

(statearr_29801_29856[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29753 === (30))){
var inst_29703 = (state_29752[(10)]);
var inst_29712 = (state_29752[(11)]);
var inst_29704 = (state_29752[(13)]);
var inst_29729 = cljs.core.empty_QMARK_.call(null,inst_29703);
var inst_29730 = inst_29704.call(null,inst_29712);
var inst_29731 = cljs.core.not.call(null,inst_29730);
var inst_29732 = (inst_29729) && (inst_29731);
var state_29752__$1 = state_29752;
var statearr_29802_29857 = state_29752__$1;
(statearr_29802_29857[(2)] = inst_29732);

(statearr_29802_29857[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29753 === (10))){
var inst_29656 = (state_29752[(8)]);
var inst_29676 = (state_29752[(2)]);
var inst_29677 = cljs.core.get.call(null,inst_29676,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29678 = cljs.core.get.call(null,inst_29676,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29679 = cljs.core.get.call(null,inst_29676,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29680 = inst_29656;
var state_29752__$1 = (function (){var statearr_29803 = state_29752;
(statearr_29803[(7)] = inst_29680);

(statearr_29803[(16)] = inst_29679);

(statearr_29803[(17)] = inst_29677);

(statearr_29803[(18)] = inst_29678);

return statearr_29803;
})();
var statearr_29804_29858 = state_29752__$1;
(statearr_29804_29858[(2)] = null);

(statearr_29804_29858[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29753 === (18))){
var inst_29694 = (state_29752[(2)]);
var state_29752__$1 = state_29752;
var statearr_29805_29859 = state_29752__$1;
(statearr_29805_29859[(2)] = inst_29694);

(statearr_29805_29859[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29753 === (37))){
var state_29752__$1 = state_29752;
var statearr_29806_29860 = state_29752__$1;
(statearr_29806_29860[(2)] = null);

(statearr_29806_29860[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29753 === (8))){
var inst_29656 = (state_29752[(8)]);
var inst_29673 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29656);
var state_29752__$1 = state_29752;
var statearr_29807_29861 = state_29752__$1;
(statearr_29807_29861[(2)] = inst_29673);

(statearr_29807_29861[(1)] = (10));


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
});})(c__28082__auto___29815,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27970__auto__,c__28082__auto___29815,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27971__auto__ = null;
var cljs$core$async$mix_$_state_machine__27971__auto____0 = (function (){
var statearr_29811 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29811[(0)] = cljs$core$async$mix_$_state_machine__27971__auto__);

(statearr_29811[(1)] = (1));

return statearr_29811;
});
var cljs$core$async$mix_$_state_machine__27971__auto____1 = (function (state_29752){
while(true){
var ret_value__27972__auto__ = (function (){try{while(true){
var result__27973__auto__ = switch__27970__auto__.call(null,state_29752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27973__auto__;
}
break;
}
}catch (e29812){if((e29812 instanceof Object)){
var ex__27974__auto__ = e29812;
var statearr_29813_29862 = state_29752;
(statearr_29813_29862[(5)] = ex__27974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29812;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29863 = state_29752;
state_29752 = G__29863;
continue;
} else {
return ret_value__27972__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27971__auto__ = function(state_29752){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27971__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27971__auto____1.call(this,state_29752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27971__auto____0;
cljs$core$async$mix_$_state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27971__auto____1;
return cljs$core$async$mix_$_state_machine__27971__auto__;
})()
;})(switch__27970__auto__,c__28082__auto___29815,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28084__auto__ = (function (){var statearr_29814 = f__28083__auto__.call(null);
(statearr_29814[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28082__auto___29815);

return statearr_29814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28084__auto__);
});})(c__28082__auto___29815,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__25453__auto__ = (((p == null))?null:p);
var m__25454__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25454__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__25453__auto__ = (((p == null))?null:p);
var m__25454__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,p,v,ch);
} else {
var m__25454__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args29864 = [];
var len__25865__auto___29867 = arguments.length;
var i__25866__auto___29868 = (0);
while(true){
if((i__25866__auto___29868 < len__25865__auto___29867)){
args29864.push((arguments[i__25866__auto___29868]));

var G__29869 = (i__25866__auto___29868 + (1));
i__25866__auto___29868 = G__29869;
continue;
} else {
}
break;
}

var G__29866 = args29864.length;
switch (G__29866) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29864.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25453__auto__ = (((p == null))?null:p);
var m__25454__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,p);
} else {
var m__25454__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,p);
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
var x__25453__auto__ = (((p == null))?null:p);
var m__25454__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,p,v);
} else {
var m__25454__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,p,v);
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
var args29872 = [];
var len__25865__auto___29997 = arguments.length;
var i__25866__auto___29998 = (0);
while(true){
if((i__25866__auto___29998 < len__25865__auto___29997)){
args29872.push((arguments[i__25866__auto___29998]));

var G__29999 = (i__25866__auto___29998 + (1));
i__25866__auto___29998 = G__29999;
continue;
} else {
}
break;
}

var G__29874 = args29872.length;
switch (G__29874) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29872.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24790__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24790__auto__,mults){
return (function (p1__29871_SHARP_){
if(cljs.core.truth_(p1__29871_SHARP_.call(null,topic))){
return p1__29871_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29871_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24790__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async29875 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29875 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29876){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29876 = meta29876;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29877,meta29876__$1){
var self__ = this;
var _29877__$1 = this;
return (new cljs.core.async.t_cljs$core$async29875(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29876__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29875.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29877){
var self__ = this;
var _29877__$1 = this;
return self__.meta29876;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29875.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29875.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29875.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async29875.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29875.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29875.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29875.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29875.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29876","meta29876",-1361043205,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29875.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29875.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29875";

cljs.core.async.t_cljs$core$async29875.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async29875");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async29875 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29875(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29876){
return (new cljs.core.async.t_cljs$core$async29875(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29876));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29875(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28082__auto___30001 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28082__auto___30001,mults,ensure_mult,p){
return (function (){
var f__28083__auto__ = (function (){var switch__27970__auto__ = ((function (c__28082__auto___30001,mults,ensure_mult,p){
return (function (state_29949){
var state_val_29950 = (state_29949[(1)]);
if((state_val_29950 === (7))){
var inst_29945 = (state_29949[(2)]);
var state_29949__$1 = state_29949;
var statearr_29951_30002 = state_29949__$1;
(statearr_29951_30002[(2)] = inst_29945);

(statearr_29951_30002[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29950 === (20))){
var state_29949__$1 = state_29949;
var statearr_29952_30003 = state_29949__$1;
(statearr_29952_30003[(2)] = null);

(statearr_29952_30003[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29950 === (1))){
var state_29949__$1 = state_29949;
var statearr_29953_30004 = state_29949__$1;
(statearr_29953_30004[(2)] = null);

(statearr_29953_30004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29950 === (24))){
var inst_29928 = (state_29949[(7)]);
var inst_29937 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29928);
var state_29949__$1 = state_29949;
var statearr_29954_30005 = state_29949__$1;
(statearr_29954_30005[(2)] = inst_29937);

(statearr_29954_30005[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29950 === (4))){
var inst_29880 = (state_29949[(8)]);
var inst_29880__$1 = (state_29949[(2)]);
var inst_29881 = (inst_29880__$1 == null);
var state_29949__$1 = (function (){var statearr_29955 = state_29949;
(statearr_29955[(8)] = inst_29880__$1);

return statearr_29955;
})();
if(cljs.core.truth_(inst_29881)){
var statearr_29956_30006 = state_29949__$1;
(statearr_29956_30006[(1)] = (5));

} else {
var statearr_29957_30007 = state_29949__$1;
(statearr_29957_30007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29950 === (15))){
var inst_29922 = (state_29949[(2)]);
var state_29949__$1 = state_29949;
var statearr_29958_30008 = state_29949__$1;
(statearr_29958_30008[(2)] = inst_29922);

(statearr_29958_30008[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29950 === (21))){
var inst_29942 = (state_29949[(2)]);
var state_29949__$1 = (function (){var statearr_29959 = state_29949;
(statearr_29959[(9)] = inst_29942);

return statearr_29959;
})();
var statearr_29960_30009 = state_29949__$1;
(statearr_29960_30009[(2)] = null);

(statearr_29960_30009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29950 === (13))){
var inst_29904 = (state_29949[(10)]);
var inst_29906 = cljs.core.chunked_seq_QMARK_.call(null,inst_29904);
var state_29949__$1 = state_29949;
if(inst_29906){
var statearr_29961_30010 = state_29949__$1;
(statearr_29961_30010[(1)] = (16));

} else {
var statearr_29962_30011 = state_29949__$1;
(statearr_29962_30011[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29950 === (22))){
var inst_29934 = (state_29949[(2)]);
var state_29949__$1 = state_29949;
if(cljs.core.truth_(inst_29934)){
var statearr_29963_30012 = state_29949__$1;
(statearr_29963_30012[(1)] = (23));

} else {
var statearr_29964_30013 = state_29949__$1;
(statearr_29964_30013[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29950 === (6))){
var inst_29930 = (state_29949[(11)]);
var inst_29928 = (state_29949[(7)]);
var inst_29880 = (state_29949[(8)]);
var inst_29928__$1 = topic_fn.call(null,inst_29880);
var inst_29929 = cljs.core.deref.call(null,mults);
var inst_29930__$1 = cljs.core.get.call(null,inst_29929,inst_29928__$1);
var state_29949__$1 = (function (){var statearr_29965 = state_29949;
(statearr_29965[(11)] = inst_29930__$1);

(statearr_29965[(7)] = inst_29928__$1);

return statearr_29965;
})();
if(cljs.core.truth_(inst_29930__$1)){
var statearr_29966_30014 = state_29949__$1;
(statearr_29966_30014[(1)] = (19));

} else {
var statearr_29967_30015 = state_29949__$1;
(statearr_29967_30015[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29950 === (25))){
var inst_29939 = (state_29949[(2)]);
var state_29949__$1 = state_29949;
var statearr_29968_30016 = state_29949__$1;
(statearr_29968_30016[(2)] = inst_29939);

(statearr_29968_30016[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29950 === (17))){
var inst_29904 = (state_29949[(10)]);
var inst_29913 = cljs.core.first.call(null,inst_29904);
var inst_29914 = cljs.core.async.muxch_STAR_.call(null,inst_29913);
var inst_29915 = cljs.core.async.close_BANG_.call(null,inst_29914);
var inst_29916 = cljs.core.next.call(null,inst_29904);
var inst_29890 = inst_29916;
var inst_29891 = null;
var inst_29892 = (0);
var inst_29893 = (0);
var state_29949__$1 = (function (){var statearr_29969 = state_29949;
(statearr_29969[(12)] = inst_29891);

(statearr_29969[(13)] = inst_29890);

(statearr_29969[(14)] = inst_29915);

(statearr_29969[(15)] = inst_29893);

(statearr_29969[(16)] = inst_29892);

return statearr_29969;
})();
var statearr_29970_30017 = state_29949__$1;
(statearr_29970_30017[(2)] = null);

(statearr_29970_30017[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29950 === (3))){
var inst_29947 = (state_29949[(2)]);
var state_29949__$1 = state_29949;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29949__$1,inst_29947);
} else {
if((state_val_29950 === (12))){
var inst_29924 = (state_29949[(2)]);
var state_29949__$1 = state_29949;
var statearr_29971_30018 = state_29949__$1;
(statearr_29971_30018[(2)] = inst_29924);

(statearr_29971_30018[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29950 === (2))){
var state_29949__$1 = state_29949;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29949__$1,(4),ch);
} else {
if((state_val_29950 === (23))){
var state_29949__$1 = state_29949;
var statearr_29972_30019 = state_29949__$1;
(statearr_29972_30019[(2)] = null);

(statearr_29972_30019[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29950 === (19))){
var inst_29930 = (state_29949[(11)]);
var inst_29880 = (state_29949[(8)]);
var inst_29932 = cljs.core.async.muxch_STAR_.call(null,inst_29930);
var state_29949__$1 = state_29949;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29949__$1,(22),inst_29932,inst_29880);
} else {
if((state_val_29950 === (11))){
var inst_29904 = (state_29949[(10)]);
var inst_29890 = (state_29949[(13)]);
var inst_29904__$1 = cljs.core.seq.call(null,inst_29890);
var state_29949__$1 = (function (){var statearr_29973 = state_29949;
(statearr_29973[(10)] = inst_29904__$1);

return statearr_29973;
})();
if(inst_29904__$1){
var statearr_29974_30020 = state_29949__$1;
(statearr_29974_30020[(1)] = (13));

} else {
var statearr_29975_30021 = state_29949__$1;
(statearr_29975_30021[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29950 === (9))){
var inst_29926 = (state_29949[(2)]);
var state_29949__$1 = state_29949;
var statearr_29976_30022 = state_29949__$1;
(statearr_29976_30022[(2)] = inst_29926);

(statearr_29976_30022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29950 === (5))){
var inst_29887 = cljs.core.deref.call(null,mults);
var inst_29888 = cljs.core.vals.call(null,inst_29887);
var inst_29889 = cljs.core.seq.call(null,inst_29888);
var inst_29890 = inst_29889;
var inst_29891 = null;
var inst_29892 = (0);
var inst_29893 = (0);
var state_29949__$1 = (function (){var statearr_29977 = state_29949;
(statearr_29977[(12)] = inst_29891);

(statearr_29977[(13)] = inst_29890);

(statearr_29977[(15)] = inst_29893);

(statearr_29977[(16)] = inst_29892);

return statearr_29977;
})();
var statearr_29978_30023 = state_29949__$1;
(statearr_29978_30023[(2)] = null);

(statearr_29978_30023[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29950 === (14))){
var state_29949__$1 = state_29949;
var statearr_29982_30024 = state_29949__$1;
(statearr_29982_30024[(2)] = null);

(statearr_29982_30024[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29950 === (16))){
var inst_29904 = (state_29949[(10)]);
var inst_29908 = cljs.core.chunk_first.call(null,inst_29904);
var inst_29909 = cljs.core.chunk_rest.call(null,inst_29904);
var inst_29910 = cljs.core.count.call(null,inst_29908);
var inst_29890 = inst_29909;
var inst_29891 = inst_29908;
var inst_29892 = inst_29910;
var inst_29893 = (0);
var state_29949__$1 = (function (){var statearr_29983 = state_29949;
(statearr_29983[(12)] = inst_29891);

(statearr_29983[(13)] = inst_29890);

(statearr_29983[(15)] = inst_29893);

(statearr_29983[(16)] = inst_29892);

return statearr_29983;
})();
var statearr_29984_30025 = state_29949__$1;
(statearr_29984_30025[(2)] = null);

(statearr_29984_30025[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29950 === (10))){
var inst_29891 = (state_29949[(12)]);
var inst_29890 = (state_29949[(13)]);
var inst_29893 = (state_29949[(15)]);
var inst_29892 = (state_29949[(16)]);
var inst_29898 = cljs.core._nth.call(null,inst_29891,inst_29893);
var inst_29899 = cljs.core.async.muxch_STAR_.call(null,inst_29898);
var inst_29900 = cljs.core.async.close_BANG_.call(null,inst_29899);
var inst_29901 = (inst_29893 + (1));
var tmp29979 = inst_29891;
var tmp29980 = inst_29890;
var tmp29981 = inst_29892;
var inst_29890__$1 = tmp29980;
var inst_29891__$1 = tmp29979;
var inst_29892__$1 = tmp29981;
var inst_29893__$1 = inst_29901;
var state_29949__$1 = (function (){var statearr_29985 = state_29949;
(statearr_29985[(12)] = inst_29891__$1);

(statearr_29985[(17)] = inst_29900);

(statearr_29985[(13)] = inst_29890__$1);

(statearr_29985[(15)] = inst_29893__$1);

(statearr_29985[(16)] = inst_29892__$1);

return statearr_29985;
})();
var statearr_29986_30026 = state_29949__$1;
(statearr_29986_30026[(2)] = null);

(statearr_29986_30026[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29950 === (18))){
var inst_29919 = (state_29949[(2)]);
var state_29949__$1 = state_29949;
var statearr_29987_30027 = state_29949__$1;
(statearr_29987_30027[(2)] = inst_29919);

(statearr_29987_30027[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29950 === (8))){
var inst_29893 = (state_29949[(15)]);
var inst_29892 = (state_29949[(16)]);
var inst_29895 = (inst_29893 < inst_29892);
var inst_29896 = inst_29895;
var state_29949__$1 = state_29949;
if(cljs.core.truth_(inst_29896)){
var statearr_29988_30028 = state_29949__$1;
(statearr_29988_30028[(1)] = (10));

} else {
var statearr_29989_30029 = state_29949__$1;
(statearr_29989_30029[(1)] = (11));

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
});})(c__28082__auto___30001,mults,ensure_mult,p))
;
return ((function (switch__27970__auto__,c__28082__auto___30001,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27971__auto__ = null;
var cljs$core$async$state_machine__27971__auto____0 = (function (){
var statearr_29993 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29993[(0)] = cljs$core$async$state_machine__27971__auto__);

(statearr_29993[(1)] = (1));

return statearr_29993;
});
var cljs$core$async$state_machine__27971__auto____1 = (function (state_29949){
while(true){
var ret_value__27972__auto__ = (function (){try{while(true){
var result__27973__auto__ = switch__27970__auto__.call(null,state_29949);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27973__auto__;
}
break;
}
}catch (e29994){if((e29994 instanceof Object)){
var ex__27974__auto__ = e29994;
var statearr_29995_30030 = state_29949;
(statearr_29995_30030[(5)] = ex__27974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29994;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30031 = state_29949;
state_29949 = G__30031;
continue;
} else {
return ret_value__27972__auto__;
}
break;
}
});
cljs$core$async$state_machine__27971__auto__ = function(state_29949){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27971__auto____1.call(this,state_29949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27971__auto____0;
cljs$core$async$state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27971__auto____1;
return cljs$core$async$state_machine__27971__auto__;
})()
;})(switch__27970__auto__,c__28082__auto___30001,mults,ensure_mult,p))
})();
var state__28084__auto__ = (function (){var statearr_29996 = f__28083__auto__.call(null);
(statearr_29996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28082__auto___30001);

return statearr_29996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28084__auto__);
});})(c__28082__auto___30001,mults,ensure_mult,p))
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
var args30032 = [];
var len__25865__auto___30035 = arguments.length;
var i__25866__auto___30036 = (0);
while(true){
if((i__25866__auto___30036 < len__25865__auto___30035)){
args30032.push((arguments[i__25866__auto___30036]));

var G__30037 = (i__25866__auto___30036 + (1));
i__25866__auto___30036 = G__30037;
continue;
} else {
}
break;
}

var G__30034 = args30032.length;
switch (G__30034) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30032.length)].join('')));

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
var args30039 = [];
var len__25865__auto___30042 = arguments.length;
var i__25866__auto___30043 = (0);
while(true){
if((i__25866__auto___30043 < len__25865__auto___30042)){
args30039.push((arguments[i__25866__auto___30043]));

var G__30044 = (i__25866__auto___30043 + (1));
i__25866__auto___30043 = G__30044;
continue;
} else {
}
break;
}

var G__30041 = args30039.length;
switch (G__30041) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30039.length)].join('')));

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
var args30046 = [];
var len__25865__auto___30117 = arguments.length;
var i__25866__auto___30118 = (0);
while(true){
if((i__25866__auto___30118 < len__25865__auto___30117)){
args30046.push((arguments[i__25866__auto___30118]));

var G__30119 = (i__25866__auto___30118 + (1));
i__25866__auto___30118 = G__30119;
continue;
} else {
}
break;
}

var G__30048 = args30046.length;
switch (G__30048) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30046.length)].join('')));

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
var c__28082__auto___30121 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28082__auto___30121,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28083__auto__ = (function (){var switch__27970__auto__ = ((function (c__28082__auto___30121,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30087){
var state_val_30088 = (state_30087[(1)]);
if((state_val_30088 === (7))){
var state_30087__$1 = state_30087;
var statearr_30089_30122 = state_30087__$1;
(statearr_30089_30122[(2)] = null);

(statearr_30089_30122[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (1))){
var state_30087__$1 = state_30087;
var statearr_30090_30123 = state_30087__$1;
(statearr_30090_30123[(2)] = null);

(statearr_30090_30123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (4))){
var inst_30051 = (state_30087[(7)]);
var inst_30053 = (inst_30051 < cnt);
var state_30087__$1 = state_30087;
if(cljs.core.truth_(inst_30053)){
var statearr_30091_30124 = state_30087__$1;
(statearr_30091_30124[(1)] = (6));

} else {
var statearr_30092_30125 = state_30087__$1;
(statearr_30092_30125[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (15))){
var inst_30083 = (state_30087[(2)]);
var state_30087__$1 = state_30087;
var statearr_30093_30126 = state_30087__$1;
(statearr_30093_30126[(2)] = inst_30083);

(statearr_30093_30126[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (13))){
var inst_30076 = cljs.core.async.close_BANG_.call(null,out);
var state_30087__$1 = state_30087;
var statearr_30094_30127 = state_30087__$1;
(statearr_30094_30127[(2)] = inst_30076);

(statearr_30094_30127[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (6))){
var state_30087__$1 = state_30087;
var statearr_30095_30128 = state_30087__$1;
(statearr_30095_30128[(2)] = null);

(statearr_30095_30128[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (3))){
var inst_30085 = (state_30087[(2)]);
var state_30087__$1 = state_30087;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30087__$1,inst_30085);
} else {
if((state_val_30088 === (12))){
var inst_30073 = (state_30087[(8)]);
var inst_30073__$1 = (state_30087[(2)]);
var inst_30074 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30073__$1);
var state_30087__$1 = (function (){var statearr_30096 = state_30087;
(statearr_30096[(8)] = inst_30073__$1);

return statearr_30096;
})();
if(cljs.core.truth_(inst_30074)){
var statearr_30097_30129 = state_30087__$1;
(statearr_30097_30129[(1)] = (13));

} else {
var statearr_30098_30130 = state_30087__$1;
(statearr_30098_30130[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (2))){
var inst_30050 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30051 = (0);
var state_30087__$1 = (function (){var statearr_30099 = state_30087;
(statearr_30099[(9)] = inst_30050);

(statearr_30099[(7)] = inst_30051);

return statearr_30099;
})();
var statearr_30100_30131 = state_30087__$1;
(statearr_30100_30131[(2)] = null);

(statearr_30100_30131[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (11))){
var inst_30051 = (state_30087[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30087,(10),Object,null,(9));
var inst_30060 = chs__$1.call(null,inst_30051);
var inst_30061 = done.call(null,inst_30051);
var inst_30062 = cljs.core.async.take_BANG_.call(null,inst_30060,inst_30061);
var state_30087__$1 = state_30087;
var statearr_30101_30132 = state_30087__$1;
(statearr_30101_30132[(2)] = inst_30062);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30087__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (9))){
var inst_30051 = (state_30087[(7)]);
var inst_30064 = (state_30087[(2)]);
var inst_30065 = (inst_30051 + (1));
var inst_30051__$1 = inst_30065;
var state_30087__$1 = (function (){var statearr_30102 = state_30087;
(statearr_30102[(7)] = inst_30051__$1);

(statearr_30102[(10)] = inst_30064);

return statearr_30102;
})();
var statearr_30103_30133 = state_30087__$1;
(statearr_30103_30133[(2)] = null);

(statearr_30103_30133[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (5))){
var inst_30071 = (state_30087[(2)]);
var state_30087__$1 = (function (){var statearr_30104 = state_30087;
(statearr_30104[(11)] = inst_30071);

return statearr_30104;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30087__$1,(12),dchan);
} else {
if((state_val_30088 === (14))){
var inst_30073 = (state_30087[(8)]);
var inst_30078 = cljs.core.apply.call(null,f,inst_30073);
var state_30087__$1 = state_30087;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30087__$1,(16),out,inst_30078);
} else {
if((state_val_30088 === (16))){
var inst_30080 = (state_30087[(2)]);
var state_30087__$1 = (function (){var statearr_30105 = state_30087;
(statearr_30105[(12)] = inst_30080);

return statearr_30105;
})();
var statearr_30106_30134 = state_30087__$1;
(statearr_30106_30134[(2)] = null);

(statearr_30106_30134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (10))){
var inst_30055 = (state_30087[(2)]);
var inst_30056 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30087__$1 = (function (){var statearr_30107 = state_30087;
(statearr_30107[(13)] = inst_30055);

return statearr_30107;
})();
var statearr_30108_30135 = state_30087__$1;
(statearr_30108_30135[(2)] = inst_30056);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30087__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (8))){
var inst_30069 = (state_30087[(2)]);
var state_30087__$1 = state_30087;
var statearr_30109_30136 = state_30087__$1;
(statearr_30109_30136[(2)] = inst_30069);

(statearr_30109_30136[(1)] = (5));


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
});})(c__28082__auto___30121,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27970__auto__,c__28082__auto___30121,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27971__auto__ = null;
var cljs$core$async$state_machine__27971__auto____0 = (function (){
var statearr_30113 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30113[(0)] = cljs$core$async$state_machine__27971__auto__);

(statearr_30113[(1)] = (1));

return statearr_30113;
});
var cljs$core$async$state_machine__27971__auto____1 = (function (state_30087){
while(true){
var ret_value__27972__auto__ = (function (){try{while(true){
var result__27973__auto__ = switch__27970__auto__.call(null,state_30087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27973__auto__;
}
break;
}
}catch (e30114){if((e30114 instanceof Object)){
var ex__27974__auto__ = e30114;
var statearr_30115_30137 = state_30087;
(statearr_30115_30137[(5)] = ex__27974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30138 = state_30087;
state_30087 = G__30138;
continue;
} else {
return ret_value__27972__auto__;
}
break;
}
});
cljs$core$async$state_machine__27971__auto__ = function(state_30087){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27971__auto____1.call(this,state_30087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27971__auto____0;
cljs$core$async$state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27971__auto____1;
return cljs$core$async$state_machine__27971__auto__;
})()
;})(switch__27970__auto__,c__28082__auto___30121,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28084__auto__ = (function (){var statearr_30116 = f__28083__auto__.call(null);
(statearr_30116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28082__auto___30121);

return statearr_30116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28084__auto__);
});})(c__28082__auto___30121,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args30140 = [];
var len__25865__auto___30198 = arguments.length;
var i__25866__auto___30199 = (0);
while(true){
if((i__25866__auto___30199 < len__25865__auto___30198)){
args30140.push((arguments[i__25866__auto___30199]));

var G__30200 = (i__25866__auto___30199 + (1));
i__25866__auto___30199 = G__30200;
continue;
} else {
}
break;
}

var G__30142 = args30140.length;
switch (G__30142) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30140.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28082__auto___30202 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28082__auto___30202,out){
return (function (){
var f__28083__auto__ = (function (){var switch__27970__auto__ = ((function (c__28082__auto___30202,out){
return (function (state_30174){
var state_val_30175 = (state_30174[(1)]);
if((state_val_30175 === (7))){
var inst_30154 = (state_30174[(7)]);
var inst_30153 = (state_30174[(8)]);
var inst_30153__$1 = (state_30174[(2)]);
var inst_30154__$1 = cljs.core.nth.call(null,inst_30153__$1,(0),null);
var inst_30155 = cljs.core.nth.call(null,inst_30153__$1,(1),null);
var inst_30156 = (inst_30154__$1 == null);
var state_30174__$1 = (function (){var statearr_30176 = state_30174;
(statearr_30176[(7)] = inst_30154__$1);

(statearr_30176[(8)] = inst_30153__$1);

(statearr_30176[(9)] = inst_30155);

return statearr_30176;
})();
if(cljs.core.truth_(inst_30156)){
var statearr_30177_30203 = state_30174__$1;
(statearr_30177_30203[(1)] = (8));

} else {
var statearr_30178_30204 = state_30174__$1;
(statearr_30178_30204[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30175 === (1))){
var inst_30143 = cljs.core.vec.call(null,chs);
var inst_30144 = inst_30143;
var state_30174__$1 = (function (){var statearr_30179 = state_30174;
(statearr_30179[(10)] = inst_30144);

return statearr_30179;
})();
var statearr_30180_30205 = state_30174__$1;
(statearr_30180_30205[(2)] = null);

(statearr_30180_30205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30175 === (4))){
var inst_30144 = (state_30174[(10)]);
var state_30174__$1 = state_30174;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30174__$1,(7),inst_30144);
} else {
if((state_val_30175 === (6))){
var inst_30170 = (state_30174[(2)]);
var state_30174__$1 = state_30174;
var statearr_30181_30206 = state_30174__$1;
(statearr_30181_30206[(2)] = inst_30170);

(statearr_30181_30206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30175 === (3))){
var inst_30172 = (state_30174[(2)]);
var state_30174__$1 = state_30174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30174__$1,inst_30172);
} else {
if((state_val_30175 === (2))){
var inst_30144 = (state_30174[(10)]);
var inst_30146 = cljs.core.count.call(null,inst_30144);
var inst_30147 = (inst_30146 > (0));
var state_30174__$1 = state_30174;
if(cljs.core.truth_(inst_30147)){
var statearr_30183_30207 = state_30174__$1;
(statearr_30183_30207[(1)] = (4));

} else {
var statearr_30184_30208 = state_30174__$1;
(statearr_30184_30208[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30175 === (11))){
var inst_30144 = (state_30174[(10)]);
var inst_30163 = (state_30174[(2)]);
var tmp30182 = inst_30144;
var inst_30144__$1 = tmp30182;
var state_30174__$1 = (function (){var statearr_30185 = state_30174;
(statearr_30185[(10)] = inst_30144__$1);

(statearr_30185[(11)] = inst_30163);

return statearr_30185;
})();
var statearr_30186_30209 = state_30174__$1;
(statearr_30186_30209[(2)] = null);

(statearr_30186_30209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30175 === (9))){
var inst_30154 = (state_30174[(7)]);
var state_30174__$1 = state_30174;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30174__$1,(11),out,inst_30154);
} else {
if((state_val_30175 === (5))){
var inst_30168 = cljs.core.async.close_BANG_.call(null,out);
var state_30174__$1 = state_30174;
var statearr_30187_30210 = state_30174__$1;
(statearr_30187_30210[(2)] = inst_30168);

(statearr_30187_30210[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30175 === (10))){
var inst_30166 = (state_30174[(2)]);
var state_30174__$1 = state_30174;
var statearr_30188_30211 = state_30174__$1;
(statearr_30188_30211[(2)] = inst_30166);

(statearr_30188_30211[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30175 === (8))){
var inst_30154 = (state_30174[(7)]);
var inst_30144 = (state_30174[(10)]);
var inst_30153 = (state_30174[(8)]);
var inst_30155 = (state_30174[(9)]);
var inst_30158 = (function (){var cs = inst_30144;
var vec__30149 = inst_30153;
var v = inst_30154;
var c = inst_30155;
return ((function (cs,vec__30149,v,c,inst_30154,inst_30144,inst_30153,inst_30155,state_val_30175,c__28082__auto___30202,out){
return (function (p1__30139_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30139_SHARP_);
});
;})(cs,vec__30149,v,c,inst_30154,inst_30144,inst_30153,inst_30155,state_val_30175,c__28082__auto___30202,out))
})();
var inst_30159 = cljs.core.filterv.call(null,inst_30158,inst_30144);
var inst_30144__$1 = inst_30159;
var state_30174__$1 = (function (){var statearr_30189 = state_30174;
(statearr_30189[(10)] = inst_30144__$1);

return statearr_30189;
})();
var statearr_30190_30212 = state_30174__$1;
(statearr_30190_30212[(2)] = null);

(statearr_30190_30212[(1)] = (2));


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
});})(c__28082__auto___30202,out))
;
return ((function (switch__27970__auto__,c__28082__auto___30202,out){
return (function() {
var cljs$core$async$state_machine__27971__auto__ = null;
var cljs$core$async$state_machine__27971__auto____0 = (function (){
var statearr_30194 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30194[(0)] = cljs$core$async$state_machine__27971__auto__);

(statearr_30194[(1)] = (1));

return statearr_30194;
});
var cljs$core$async$state_machine__27971__auto____1 = (function (state_30174){
while(true){
var ret_value__27972__auto__ = (function (){try{while(true){
var result__27973__auto__ = switch__27970__auto__.call(null,state_30174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27973__auto__;
}
break;
}
}catch (e30195){if((e30195 instanceof Object)){
var ex__27974__auto__ = e30195;
var statearr_30196_30213 = state_30174;
(statearr_30196_30213[(5)] = ex__27974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30195;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30214 = state_30174;
state_30174 = G__30214;
continue;
} else {
return ret_value__27972__auto__;
}
break;
}
});
cljs$core$async$state_machine__27971__auto__ = function(state_30174){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27971__auto____1.call(this,state_30174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27971__auto____0;
cljs$core$async$state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27971__auto____1;
return cljs$core$async$state_machine__27971__auto__;
})()
;})(switch__27970__auto__,c__28082__auto___30202,out))
})();
var state__28084__auto__ = (function (){var statearr_30197 = f__28083__auto__.call(null);
(statearr_30197[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28082__auto___30202);

return statearr_30197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28084__auto__);
});})(c__28082__auto___30202,out))
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
var args30215 = [];
var len__25865__auto___30264 = arguments.length;
var i__25866__auto___30265 = (0);
while(true){
if((i__25866__auto___30265 < len__25865__auto___30264)){
args30215.push((arguments[i__25866__auto___30265]));

var G__30266 = (i__25866__auto___30265 + (1));
i__25866__auto___30265 = G__30266;
continue;
} else {
}
break;
}

var G__30217 = args30215.length;
switch (G__30217) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30215.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28082__auto___30268 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28082__auto___30268,out){
return (function (){
var f__28083__auto__ = (function (){var switch__27970__auto__ = ((function (c__28082__auto___30268,out){
return (function (state_30241){
var state_val_30242 = (state_30241[(1)]);
if((state_val_30242 === (7))){
var inst_30223 = (state_30241[(7)]);
var inst_30223__$1 = (state_30241[(2)]);
var inst_30224 = (inst_30223__$1 == null);
var inst_30225 = cljs.core.not.call(null,inst_30224);
var state_30241__$1 = (function (){var statearr_30243 = state_30241;
(statearr_30243[(7)] = inst_30223__$1);

return statearr_30243;
})();
if(inst_30225){
var statearr_30244_30269 = state_30241__$1;
(statearr_30244_30269[(1)] = (8));

} else {
var statearr_30245_30270 = state_30241__$1;
(statearr_30245_30270[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30242 === (1))){
var inst_30218 = (0);
var state_30241__$1 = (function (){var statearr_30246 = state_30241;
(statearr_30246[(8)] = inst_30218);

return statearr_30246;
})();
var statearr_30247_30271 = state_30241__$1;
(statearr_30247_30271[(2)] = null);

(statearr_30247_30271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30242 === (4))){
var state_30241__$1 = state_30241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30241__$1,(7),ch);
} else {
if((state_val_30242 === (6))){
var inst_30236 = (state_30241[(2)]);
var state_30241__$1 = state_30241;
var statearr_30248_30272 = state_30241__$1;
(statearr_30248_30272[(2)] = inst_30236);

(statearr_30248_30272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30242 === (3))){
var inst_30238 = (state_30241[(2)]);
var inst_30239 = cljs.core.async.close_BANG_.call(null,out);
var state_30241__$1 = (function (){var statearr_30249 = state_30241;
(statearr_30249[(9)] = inst_30238);

return statearr_30249;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30241__$1,inst_30239);
} else {
if((state_val_30242 === (2))){
var inst_30218 = (state_30241[(8)]);
var inst_30220 = (inst_30218 < n);
var state_30241__$1 = state_30241;
if(cljs.core.truth_(inst_30220)){
var statearr_30250_30273 = state_30241__$1;
(statearr_30250_30273[(1)] = (4));

} else {
var statearr_30251_30274 = state_30241__$1;
(statearr_30251_30274[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30242 === (11))){
var inst_30218 = (state_30241[(8)]);
var inst_30228 = (state_30241[(2)]);
var inst_30229 = (inst_30218 + (1));
var inst_30218__$1 = inst_30229;
var state_30241__$1 = (function (){var statearr_30252 = state_30241;
(statearr_30252[(8)] = inst_30218__$1);

(statearr_30252[(10)] = inst_30228);

return statearr_30252;
})();
var statearr_30253_30275 = state_30241__$1;
(statearr_30253_30275[(2)] = null);

(statearr_30253_30275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30242 === (9))){
var state_30241__$1 = state_30241;
var statearr_30254_30276 = state_30241__$1;
(statearr_30254_30276[(2)] = null);

(statearr_30254_30276[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30242 === (5))){
var state_30241__$1 = state_30241;
var statearr_30255_30277 = state_30241__$1;
(statearr_30255_30277[(2)] = null);

(statearr_30255_30277[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30242 === (10))){
var inst_30233 = (state_30241[(2)]);
var state_30241__$1 = state_30241;
var statearr_30256_30278 = state_30241__$1;
(statearr_30256_30278[(2)] = inst_30233);

(statearr_30256_30278[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30242 === (8))){
var inst_30223 = (state_30241[(7)]);
var state_30241__$1 = state_30241;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30241__$1,(11),out,inst_30223);
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
});})(c__28082__auto___30268,out))
;
return ((function (switch__27970__auto__,c__28082__auto___30268,out){
return (function() {
var cljs$core$async$state_machine__27971__auto__ = null;
var cljs$core$async$state_machine__27971__auto____0 = (function (){
var statearr_30260 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30260[(0)] = cljs$core$async$state_machine__27971__auto__);

(statearr_30260[(1)] = (1));

return statearr_30260;
});
var cljs$core$async$state_machine__27971__auto____1 = (function (state_30241){
while(true){
var ret_value__27972__auto__ = (function (){try{while(true){
var result__27973__auto__ = switch__27970__auto__.call(null,state_30241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27973__auto__;
}
break;
}
}catch (e30261){if((e30261 instanceof Object)){
var ex__27974__auto__ = e30261;
var statearr_30262_30279 = state_30241;
(statearr_30262_30279[(5)] = ex__27974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30280 = state_30241;
state_30241 = G__30280;
continue;
} else {
return ret_value__27972__auto__;
}
break;
}
});
cljs$core$async$state_machine__27971__auto__ = function(state_30241){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27971__auto____1.call(this,state_30241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27971__auto____0;
cljs$core$async$state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27971__auto____1;
return cljs$core$async$state_machine__27971__auto__;
})()
;})(switch__27970__auto__,c__28082__auto___30268,out))
})();
var state__28084__auto__ = (function (){var statearr_30263 = f__28083__auto__.call(null);
(statearr_30263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28082__auto___30268);

return statearr_30263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28084__auto__);
});})(c__28082__auto___30268,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30288 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30288 = (function (map_LT_,f,ch,meta30289){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30289 = meta30289;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30290,meta30289__$1){
var self__ = this;
var _30290__$1 = this;
return (new cljs.core.async.t_cljs$core$async30288(self__.map_LT_,self__.f,self__.ch,meta30289__$1));
});

cljs.core.async.t_cljs$core$async30288.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30290){
var self__ = this;
var _30290__$1 = this;
return self__.meta30289;
});

cljs.core.async.t_cljs$core$async30288.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30288.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30288.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30288.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30288.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async30291 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30291 = (function (map_LT_,f,ch,meta30289,_,fn1,meta30292){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30289 = meta30289;
this._ = _;
this.fn1 = fn1;
this.meta30292 = meta30292;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30291.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30293,meta30292__$1){
var self__ = this;
var _30293__$1 = this;
return (new cljs.core.async.t_cljs$core$async30291(self__.map_LT_,self__.f,self__.ch,self__.meta30289,self__._,self__.fn1,meta30292__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async30291.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30293){
var self__ = this;
var _30293__$1 = this;
return self__.meta30292;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30291.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30291.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30291.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30291.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30281_SHARP_){
return f1.call(null,(((p1__30281_SHARP_ == null))?null:self__.f.call(null,p1__30281_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async30291.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30289","meta30289",-1644439517,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30288","cljs.core.async/t_cljs$core$async30288",684084992,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30292","meta30292",-539077853,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30291.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30291.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30291";

cljs.core.async.t_cljs$core$async30291.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async30291");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async30291 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30291(map_LT___$1,f__$1,ch__$1,meta30289__$1,___$2,fn1__$1,meta30292){
return (new cljs.core.async.t_cljs$core$async30291(map_LT___$1,f__$1,ch__$1,meta30289__$1,___$2,fn1__$1,meta30292));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async30291(self__.map_LT_,self__.f,self__.ch,self__.meta30289,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24778__auto__ = ret;
if(cljs.core.truth_(and__24778__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24778__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async30288.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30288.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async30288.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30289","meta30289",-1644439517,null)], null);
});

cljs.core.async.t_cljs$core$async30288.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30288.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30288";

cljs.core.async.t_cljs$core$async30288.cljs$lang$ctorPrWriter = (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async30288");
});

cljs.core.async.__GT_t_cljs$core$async30288 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30288(map_LT___$1,f__$1,ch__$1,meta30289){
return (new cljs.core.async.t_cljs$core$async30288(map_LT___$1,f__$1,ch__$1,meta30289));
});

}

return (new cljs.core.async.t_cljs$core$async30288(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30297 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30297 = (function (map_GT_,f,ch,meta30298){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta30298 = meta30298;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30299,meta30298__$1){
var self__ = this;
var _30299__$1 = this;
return (new cljs.core.async.t_cljs$core$async30297(self__.map_GT_,self__.f,self__.ch,meta30298__$1));
});

cljs.core.async.t_cljs$core$async30297.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30299){
var self__ = this;
var _30299__$1 = this;
return self__.meta30298;
});

cljs.core.async.t_cljs$core$async30297.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30297.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30297.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30297.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30297.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30297.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async30297.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30298","meta30298",1805416211,null)], null);
});

cljs.core.async.t_cljs$core$async30297.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30297.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30297";

cljs.core.async.t_cljs$core$async30297.cljs$lang$ctorPrWriter = (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async30297");
});

cljs.core.async.__GT_t_cljs$core$async30297 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30297(map_GT___$1,f__$1,ch__$1,meta30298){
return (new cljs.core.async.t_cljs$core$async30297(map_GT___$1,f__$1,ch__$1,meta30298));
});

}

return (new cljs.core.async.t_cljs$core$async30297(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async30303 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30303 = (function (filter_GT_,p,ch,meta30304){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta30304 = meta30304;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30303.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30305,meta30304__$1){
var self__ = this;
var _30305__$1 = this;
return (new cljs.core.async.t_cljs$core$async30303(self__.filter_GT_,self__.p,self__.ch,meta30304__$1));
});

cljs.core.async.t_cljs$core$async30303.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30305){
var self__ = this;
var _30305__$1 = this;
return self__.meta30304;
});

cljs.core.async.t_cljs$core$async30303.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30303.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30303.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30303.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30303.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30303.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30303.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async30303.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30304","meta30304",460770804,null)], null);
});

cljs.core.async.t_cljs$core$async30303.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30303.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30303";

cljs.core.async.t_cljs$core$async30303.cljs$lang$ctorPrWriter = (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async30303");
});

cljs.core.async.__GT_t_cljs$core$async30303 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30303(filter_GT___$1,p__$1,ch__$1,meta30304){
return (new cljs.core.async.t_cljs$core$async30303(filter_GT___$1,p__$1,ch__$1,meta30304));
});

}

return (new cljs.core.async.t_cljs$core$async30303(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args30306 = [];
var len__25865__auto___30350 = arguments.length;
var i__25866__auto___30351 = (0);
while(true){
if((i__25866__auto___30351 < len__25865__auto___30350)){
args30306.push((arguments[i__25866__auto___30351]));

var G__30352 = (i__25866__auto___30351 + (1));
i__25866__auto___30351 = G__30352;
continue;
} else {
}
break;
}

var G__30308 = args30306.length;
switch (G__30308) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30306.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28082__auto___30354 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28082__auto___30354,out){
return (function (){
var f__28083__auto__ = (function (){var switch__27970__auto__ = ((function (c__28082__auto___30354,out){
return (function (state_30329){
var state_val_30330 = (state_30329[(1)]);
if((state_val_30330 === (7))){
var inst_30325 = (state_30329[(2)]);
var state_30329__$1 = state_30329;
var statearr_30331_30355 = state_30329__$1;
(statearr_30331_30355[(2)] = inst_30325);

(statearr_30331_30355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (1))){
var state_30329__$1 = state_30329;
var statearr_30332_30356 = state_30329__$1;
(statearr_30332_30356[(2)] = null);

(statearr_30332_30356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (4))){
var inst_30311 = (state_30329[(7)]);
var inst_30311__$1 = (state_30329[(2)]);
var inst_30312 = (inst_30311__$1 == null);
var state_30329__$1 = (function (){var statearr_30333 = state_30329;
(statearr_30333[(7)] = inst_30311__$1);

return statearr_30333;
})();
if(cljs.core.truth_(inst_30312)){
var statearr_30334_30357 = state_30329__$1;
(statearr_30334_30357[(1)] = (5));

} else {
var statearr_30335_30358 = state_30329__$1;
(statearr_30335_30358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (6))){
var inst_30311 = (state_30329[(7)]);
var inst_30316 = p.call(null,inst_30311);
var state_30329__$1 = state_30329;
if(cljs.core.truth_(inst_30316)){
var statearr_30336_30359 = state_30329__$1;
(statearr_30336_30359[(1)] = (8));

} else {
var statearr_30337_30360 = state_30329__$1;
(statearr_30337_30360[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (3))){
var inst_30327 = (state_30329[(2)]);
var state_30329__$1 = state_30329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30329__$1,inst_30327);
} else {
if((state_val_30330 === (2))){
var state_30329__$1 = state_30329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30329__$1,(4),ch);
} else {
if((state_val_30330 === (11))){
var inst_30319 = (state_30329[(2)]);
var state_30329__$1 = state_30329;
var statearr_30338_30361 = state_30329__$1;
(statearr_30338_30361[(2)] = inst_30319);

(statearr_30338_30361[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (9))){
var state_30329__$1 = state_30329;
var statearr_30339_30362 = state_30329__$1;
(statearr_30339_30362[(2)] = null);

(statearr_30339_30362[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (5))){
var inst_30314 = cljs.core.async.close_BANG_.call(null,out);
var state_30329__$1 = state_30329;
var statearr_30340_30363 = state_30329__$1;
(statearr_30340_30363[(2)] = inst_30314);

(statearr_30340_30363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (10))){
var inst_30322 = (state_30329[(2)]);
var state_30329__$1 = (function (){var statearr_30341 = state_30329;
(statearr_30341[(8)] = inst_30322);

return statearr_30341;
})();
var statearr_30342_30364 = state_30329__$1;
(statearr_30342_30364[(2)] = null);

(statearr_30342_30364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (8))){
var inst_30311 = (state_30329[(7)]);
var state_30329__$1 = state_30329;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30329__$1,(11),out,inst_30311);
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
});})(c__28082__auto___30354,out))
;
return ((function (switch__27970__auto__,c__28082__auto___30354,out){
return (function() {
var cljs$core$async$state_machine__27971__auto__ = null;
var cljs$core$async$state_machine__27971__auto____0 = (function (){
var statearr_30346 = [null,null,null,null,null,null,null,null,null];
(statearr_30346[(0)] = cljs$core$async$state_machine__27971__auto__);

(statearr_30346[(1)] = (1));

return statearr_30346;
});
var cljs$core$async$state_machine__27971__auto____1 = (function (state_30329){
while(true){
var ret_value__27972__auto__ = (function (){try{while(true){
var result__27973__auto__ = switch__27970__auto__.call(null,state_30329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27973__auto__;
}
break;
}
}catch (e30347){if((e30347 instanceof Object)){
var ex__27974__auto__ = e30347;
var statearr_30348_30365 = state_30329;
(statearr_30348_30365[(5)] = ex__27974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30366 = state_30329;
state_30329 = G__30366;
continue;
} else {
return ret_value__27972__auto__;
}
break;
}
});
cljs$core$async$state_machine__27971__auto__ = function(state_30329){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27971__auto____1.call(this,state_30329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27971__auto____0;
cljs$core$async$state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27971__auto____1;
return cljs$core$async$state_machine__27971__auto__;
})()
;})(switch__27970__auto__,c__28082__auto___30354,out))
})();
var state__28084__auto__ = (function (){var statearr_30349 = f__28083__auto__.call(null);
(statearr_30349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28082__auto___30354);

return statearr_30349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28084__auto__);
});})(c__28082__auto___30354,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args30367 = [];
var len__25865__auto___30370 = arguments.length;
var i__25866__auto___30371 = (0);
while(true){
if((i__25866__auto___30371 < len__25865__auto___30370)){
args30367.push((arguments[i__25866__auto___30371]));

var G__30372 = (i__25866__auto___30371 + (1));
i__25866__auto___30371 = G__30372;
continue;
} else {
}
break;
}

var G__30369 = args30367.length;
switch (G__30369) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30367.length)].join('')));

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
var c__28082__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28082__auto__){
return (function (){
var f__28083__auto__ = (function (){var switch__27970__auto__ = ((function (c__28082__auto__){
return (function (state_30539){
var state_val_30540 = (state_30539[(1)]);
if((state_val_30540 === (7))){
var inst_30535 = (state_30539[(2)]);
var state_30539__$1 = state_30539;
var statearr_30541_30582 = state_30539__$1;
(statearr_30541_30582[(2)] = inst_30535);

(statearr_30541_30582[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30540 === (20))){
var inst_30505 = (state_30539[(7)]);
var inst_30516 = (state_30539[(2)]);
var inst_30517 = cljs.core.next.call(null,inst_30505);
var inst_30491 = inst_30517;
var inst_30492 = null;
var inst_30493 = (0);
var inst_30494 = (0);
var state_30539__$1 = (function (){var statearr_30542 = state_30539;
(statearr_30542[(8)] = inst_30491);

(statearr_30542[(9)] = inst_30492);

(statearr_30542[(10)] = inst_30494);

(statearr_30542[(11)] = inst_30516);

(statearr_30542[(12)] = inst_30493);

return statearr_30542;
})();
var statearr_30543_30583 = state_30539__$1;
(statearr_30543_30583[(2)] = null);

(statearr_30543_30583[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30540 === (1))){
var state_30539__$1 = state_30539;
var statearr_30544_30584 = state_30539__$1;
(statearr_30544_30584[(2)] = null);

(statearr_30544_30584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30540 === (4))){
var inst_30480 = (state_30539[(13)]);
var inst_30480__$1 = (state_30539[(2)]);
var inst_30481 = (inst_30480__$1 == null);
var state_30539__$1 = (function (){var statearr_30545 = state_30539;
(statearr_30545[(13)] = inst_30480__$1);

return statearr_30545;
})();
if(cljs.core.truth_(inst_30481)){
var statearr_30546_30585 = state_30539__$1;
(statearr_30546_30585[(1)] = (5));

} else {
var statearr_30547_30586 = state_30539__$1;
(statearr_30547_30586[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30540 === (15))){
var state_30539__$1 = state_30539;
var statearr_30551_30587 = state_30539__$1;
(statearr_30551_30587[(2)] = null);

(statearr_30551_30587[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30540 === (21))){
var state_30539__$1 = state_30539;
var statearr_30552_30588 = state_30539__$1;
(statearr_30552_30588[(2)] = null);

(statearr_30552_30588[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30540 === (13))){
var inst_30491 = (state_30539[(8)]);
var inst_30492 = (state_30539[(9)]);
var inst_30494 = (state_30539[(10)]);
var inst_30493 = (state_30539[(12)]);
var inst_30501 = (state_30539[(2)]);
var inst_30502 = (inst_30494 + (1));
var tmp30548 = inst_30491;
var tmp30549 = inst_30492;
var tmp30550 = inst_30493;
var inst_30491__$1 = tmp30548;
var inst_30492__$1 = tmp30549;
var inst_30493__$1 = tmp30550;
var inst_30494__$1 = inst_30502;
var state_30539__$1 = (function (){var statearr_30553 = state_30539;
(statearr_30553[(8)] = inst_30491__$1);

(statearr_30553[(9)] = inst_30492__$1);

(statearr_30553[(10)] = inst_30494__$1);

(statearr_30553[(14)] = inst_30501);

(statearr_30553[(12)] = inst_30493__$1);

return statearr_30553;
})();
var statearr_30554_30589 = state_30539__$1;
(statearr_30554_30589[(2)] = null);

(statearr_30554_30589[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30540 === (22))){
var state_30539__$1 = state_30539;
var statearr_30555_30590 = state_30539__$1;
(statearr_30555_30590[(2)] = null);

(statearr_30555_30590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30540 === (6))){
var inst_30480 = (state_30539[(13)]);
var inst_30489 = f.call(null,inst_30480);
var inst_30490 = cljs.core.seq.call(null,inst_30489);
var inst_30491 = inst_30490;
var inst_30492 = null;
var inst_30493 = (0);
var inst_30494 = (0);
var state_30539__$1 = (function (){var statearr_30556 = state_30539;
(statearr_30556[(8)] = inst_30491);

(statearr_30556[(9)] = inst_30492);

(statearr_30556[(10)] = inst_30494);

(statearr_30556[(12)] = inst_30493);

return statearr_30556;
})();
var statearr_30557_30591 = state_30539__$1;
(statearr_30557_30591[(2)] = null);

(statearr_30557_30591[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30540 === (17))){
var inst_30505 = (state_30539[(7)]);
var inst_30509 = cljs.core.chunk_first.call(null,inst_30505);
var inst_30510 = cljs.core.chunk_rest.call(null,inst_30505);
var inst_30511 = cljs.core.count.call(null,inst_30509);
var inst_30491 = inst_30510;
var inst_30492 = inst_30509;
var inst_30493 = inst_30511;
var inst_30494 = (0);
var state_30539__$1 = (function (){var statearr_30558 = state_30539;
(statearr_30558[(8)] = inst_30491);

(statearr_30558[(9)] = inst_30492);

(statearr_30558[(10)] = inst_30494);

(statearr_30558[(12)] = inst_30493);

return statearr_30558;
})();
var statearr_30559_30592 = state_30539__$1;
(statearr_30559_30592[(2)] = null);

(statearr_30559_30592[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30540 === (3))){
var inst_30537 = (state_30539[(2)]);
var state_30539__$1 = state_30539;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30539__$1,inst_30537);
} else {
if((state_val_30540 === (12))){
var inst_30525 = (state_30539[(2)]);
var state_30539__$1 = state_30539;
var statearr_30560_30593 = state_30539__$1;
(statearr_30560_30593[(2)] = inst_30525);

(statearr_30560_30593[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30540 === (2))){
var state_30539__$1 = state_30539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30539__$1,(4),in$);
} else {
if((state_val_30540 === (23))){
var inst_30533 = (state_30539[(2)]);
var state_30539__$1 = state_30539;
var statearr_30561_30594 = state_30539__$1;
(statearr_30561_30594[(2)] = inst_30533);

(statearr_30561_30594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30540 === (19))){
var inst_30520 = (state_30539[(2)]);
var state_30539__$1 = state_30539;
var statearr_30562_30595 = state_30539__$1;
(statearr_30562_30595[(2)] = inst_30520);

(statearr_30562_30595[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30540 === (11))){
var inst_30491 = (state_30539[(8)]);
var inst_30505 = (state_30539[(7)]);
var inst_30505__$1 = cljs.core.seq.call(null,inst_30491);
var state_30539__$1 = (function (){var statearr_30563 = state_30539;
(statearr_30563[(7)] = inst_30505__$1);

return statearr_30563;
})();
if(inst_30505__$1){
var statearr_30564_30596 = state_30539__$1;
(statearr_30564_30596[(1)] = (14));

} else {
var statearr_30565_30597 = state_30539__$1;
(statearr_30565_30597[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30540 === (9))){
var inst_30527 = (state_30539[(2)]);
var inst_30528 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30539__$1 = (function (){var statearr_30566 = state_30539;
(statearr_30566[(15)] = inst_30527);

return statearr_30566;
})();
if(cljs.core.truth_(inst_30528)){
var statearr_30567_30598 = state_30539__$1;
(statearr_30567_30598[(1)] = (21));

} else {
var statearr_30568_30599 = state_30539__$1;
(statearr_30568_30599[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30540 === (5))){
var inst_30483 = cljs.core.async.close_BANG_.call(null,out);
var state_30539__$1 = state_30539;
var statearr_30569_30600 = state_30539__$1;
(statearr_30569_30600[(2)] = inst_30483);

(statearr_30569_30600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30540 === (14))){
var inst_30505 = (state_30539[(7)]);
var inst_30507 = cljs.core.chunked_seq_QMARK_.call(null,inst_30505);
var state_30539__$1 = state_30539;
if(inst_30507){
var statearr_30570_30601 = state_30539__$1;
(statearr_30570_30601[(1)] = (17));

} else {
var statearr_30571_30602 = state_30539__$1;
(statearr_30571_30602[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30540 === (16))){
var inst_30523 = (state_30539[(2)]);
var state_30539__$1 = state_30539;
var statearr_30572_30603 = state_30539__$1;
(statearr_30572_30603[(2)] = inst_30523);

(statearr_30572_30603[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30540 === (10))){
var inst_30492 = (state_30539[(9)]);
var inst_30494 = (state_30539[(10)]);
var inst_30499 = cljs.core._nth.call(null,inst_30492,inst_30494);
var state_30539__$1 = state_30539;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30539__$1,(13),out,inst_30499);
} else {
if((state_val_30540 === (18))){
var inst_30505 = (state_30539[(7)]);
var inst_30514 = cljs.core.first.call(null,inst_30505);
var state_30539__$1 = state_30539;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30539__$1,(20),out,inst_30514);
} else {
if((state_val_30540 === (8))){
var inst_30494 = (state_30539[(10)]);
var inst_30493 = (state_30539[(12)]);
var inst_30496 = (inst_30494 < inst_30493);
var inst_30497 = inst_30496;
var state_30539__$1 = state_30539;
if(cljs.core.truth_(inst_30497)){
var statearr_30573_30604 = state_30539__$1;
(statearr_30573_30604[(1)] = (10));

} else {
var statearr_30574_30605 = state_30539__$1;
(statearr_30574_30605[(1)] = (11));

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
});})(c__28082__auto__))
;
return ((function (switch__27970__auto__,c__28082__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27971__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27971__auto____0 = (function (){
var statearr_30578 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30578[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27971__auto__);

(statearr_30578[(1)] = (1));

return statearr_30578;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27971__auto____1 = (function (state_30539){
while(true){
var ret_value__27972__auto__ = (function (){try{while(true){
var result__27973__auto__ = switch__27970__auto__.call(null,state_30539);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27973__auto__;
}
break;
}
}catch (e30579){if((e30579 instanceof Object)){
var ex__27974__auto__ = e30579;
var statearr_30580_30606 = state_30539;
(statearr_30580_30606[(5)] = ex__27974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30607 = state_30539;
state_30539 = G__30607;
continue;
} else {
return ret_value__27972__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27971__auto__ = function(state_30539){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27971__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27971__auto____1.call(this,state_30539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27971__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27971__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27971__auto__;
})()
;})(switch__27970__auto__,c__28082__auto__))
})();
var state__28084__auto__ = (function (){var statearr_30581 = f__28083__auto__.call(null);
(statearr_30581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28082__auto__);

return statearr_30581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28084__auto__);
});})(c__28082__auto__))
);

return c__28082__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args30608 = [];
var len__25865__auto___30611 = arguments.length;
var i__25866__auto___30612 = (0);
while(true){
if((i__25866__auto___30612 < len__25865__auto___30611)){
args30608.push((arguments[i__25866__auto___30612]));

var G__30613 = (i__25866__auto___30612 + (1));
i__25866__auto___30612 = G__30613;
continue;
} else {
}
break;
}

var G__30610 = args30608.length;
switch (G__30610) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30608.length)].join('')));

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
var args30615 = [];
var len__25865__auto___30618 = arguments.length;
var i__25866__auto___30619 = (0);
while(true){
if((i__25866__auto___30619 < len__25865__auto___30618)){
args30615.push((arguments[i__25866__auto___30619]));

var G__30620 = (i__25866__auto___30619 + (1));
i__25866__auto___30619 = G__30620;
continue;
} else {
}
break;
}

var G__30617 = args30615.length;
switch (G__30617) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30615.length)].join('')));

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
var args30622 = [];
var len__25865__auto___30673 = arguments.length;
var i__25866__auto___30674 = (0);
while(true){
if((i__25866__auto___30674 < len__25865__auto___30673)){
args30622.push((arguments[i__25866__auto___30674]));

var G__30675 = (i__25866__auto___30674 + (1));
i__25866__auto___30674 = G__30675;
continue;
} else {
}
break;
}

var G__30624 = args30622.length;
switch (G__30624) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30622.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28082__auto___30677 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28082__auto___30677,out){
return (function (){
var f__28083__auto__ = (function (){var switch__27970__auto__ = ((function (c__28082__auto___30677,out){
return (function (state_30648){
var state_val_30649 = (state_30648[(1)]);
if((state_val_30649 === (7))){
var inst_30643 = (state_30648[(2)]);
var state_30648__$1 = state_30648;
var statearr_30650_30678 = state_30648__$1;
(statearr_30650_30678[(2)] = inst_30643);

(statearr_30650_30678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (1))){
var inst_30625 = null;
var state_30648__$1 = (function (){var statearr_30651 = state_30648;
(statearr_30651[(7)] = inst_30625);

return statearr_30651;
})();
var statearr_30652_30679 = state_30648__$1;
(statearr_30652_30679[(2)] = null);

(statearr_30652_30679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (4))){
var inst_30628 = (state_30648[(8)]);
var inst_30628__$1 = (state_30648[(2)]);
var inst_30629 = (inst_30628__$1 == null);
var inst_30630 = cljs.core.not.call(null,inst_30629);
var state_30648__$1 = (function (){var statearr_30653 = state_30648;
(statearr_30653[(8)] = inst_30628__$1);

return statearr_30653;
})();
if(inst_30630){
var statearr_30654_30680 = state_30648__$1;
(statearr_30654_30680[(1)] = (5));

} else {
var statearr_30655_30681 = state_30648__$1;
(statearr_30655_30681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (6))){
var state_30648__$1 = state_30648;
var statearr_30656_30682 = state_30648__$1;
(statearr_30656_30682[(2)] = null);

(statearr_30656_30682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (3))){
var inst_30645 = (state_30648[(2)]);
var inst_30646 = cljs.core.async.close_BANG_.call(null,out);
var state_30648__$1 = (function (){var statearr_30657 = state_30648;
(statearr_30657[(9)] = inst_30645);

return statearr_30657;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30648__$1,inst_30646);
} else {
if((state_val_30649 === (2))){
var state_30648__$1 = state_30648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30648__$1,(4),ch);
} else {
if((state_val_30649 === (11))){
var inst_30628 = (state_30648[(8)]);
var inst_30637 = (state_30648[(2)]);
var inst_30625 = inst_30628;
var state_30648__$1 = (function (){var statearr_30658 = state_30648;
(statearr_30658[(10)] = inst_30637);

(statearr_30658[(7)] = inst_30625);

return statearr_30658;
})();
var statearr_30659_30683 = state_30648__$1;
(statearr_30659_30683[(2)] = null);

(statearr_30659_30683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (9))){
var inst_30628 = (state_30648[(8)]);
var state_30648__$1 = state_30648;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30648__$1,(11),out,inst_30628);
} else {
if((state_val_30649 === (5))){
var inst_30628 = (state_30648[(8)]);
var inst_30625 = (state_30648[(7)]);
var inst_30632 = cljs.core._EQ_.call(null,inst_30628,inst_30625);
var state_30648__$1 = state_30648;
if(inst_30632){
var statearr_30661_30684 = state_30648__$1;
(statearr_30661_30684[(1)] = (8));

} else {
var statearr_30662_30685 = state_30648__$1;
(statearr_30662_30685[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (10))){
var inst_30640 = (state_30648[(2)]);
var state_30648__$1 = state_30648;
var statearr_30663_30686 = state_30648__$1;
(statearr_30663_30686[(2)] = inst_30640);

(statearr_30663_30686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (8))){
var inst_30625 = (state_30648[(7)]);
var tmp30660 = inst_30625;
var inst_30625__$1 = tmp30660;
var state_30648__$1 = (function (){var statearr_30664 = state_30648;
(statearr_30664[(7)] = inst_30625__$1);

return statearr_30664;
})();
var statearr_30665_30687 = state_30648__$1;
(statearr_30665_30687[(2)] = null);

(statearr_30665_30687[(1)] = (2));


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
});})(c__28082__auto___30677,out))
;
return ((function (switch__27970__auto__,c__28082__auto___30677,out){
return (function() {
var cljs$core$async$state_machine__27971__auto__ = null;
var cljs$core$async$state_machine__27971__auto____0 = (function (){
var statearr_30669 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30669[(0)] = cljs$core$async$state_machine__27971__auto__);

(statearr_30669[(1)] = (1));

return statearr_30669;
});
var cljs$core$async$state_machine__27971__auto____1 = (function (state_30648){
while(true){
var ret_value__27972__auto__ = (function (){try{while(true){
var result__27973__auto__ = switch__27970__auto__.call(null,state_30648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27973__auto__;
}
break;
}
}catch (e30670){if((e30670 instanceof Object)){
var ex__27974__auto__ = e30670;
var statearr_30671_30688 = state_30648;
(statearr_30671_30688[(5)] = ex__27974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30689 = state_30648;
state_30648 = G__30689;
continue;
} else {
return ret_value__27972__auto__;
}
break;
}
});
cljs$core$async$state_machine__27971__auto__ = function(state_30648){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27971__auto____1.call(this,state_30648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27971__auto____0;
cljs$core$async$state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27971__auto____1;
return cljs$core$async$state_machine__27971__auto__;
})()
;})(switch__27970__auto__,c__28082__auto___30677,out))
})();
var state__28084__auto__ = (function (){var statearr_30672 = f__28083__auto__.call(null);
(statearr_30672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28082__auto___30677);

return statearr_30672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28084__auto__);
});})(c__28082__auto___30677,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args30690 = [];
var len__25865__auto___30760 = arguments.length;
var i__25866__auto___30761 = (0);
while(true){
if((i__25866__auto___30761 < len__25865__auto___30760)){
args30690.push((arguments[i__25866__auto___30761]));

var G__30762 = (i__25866__auto___30761 + (1));
i__25866__auto___30761 = G__30762;
continue;
} else {
}
break;
}

var G__30692 = args30690.length;
switch (G__30692) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30690.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28082__auto___30764 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28082__auto___30764,out){
return (function (){
var f__28083__auto__ = (function (){var switch__27970__auto__ = ((function (c__28082__auto___30764,out){
return (function (state_30730){
var state_val_30731 = (state_30730[(1)]);
if((state_val_30731 === (7))){
var inst_30726 = (state_30730[(2)]);
var state_30730__$1 = state_30730;
var statearr_30732_30765 = state_30730__$1;
(statearr_30732_30765[(2)] = inst_30726);

(statearr_30732_30765[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (1))){
var inst_30693 = (new Array(n));
var inst_30694 = inst_30693;
var inst_30695 = (0);
var state_30730__$1 = (function (){var statearr_30733 = state_30730;
(statearr_30733[(7)] = inst_30694);

(statearr_30733[(8)] = inst_30695);

return statearr_30733;
})();
var statearr_30734_30766 = state_30730__$1;
(statearr_30734_30766[(2)] = null);

(statearr_30734_30766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (4))){
var inst_30698 = (state_30730[(9)]);
var inst_30698__$1 = (state_30730[(2)]);
var inst_30699 = (inst_30698__$1 == null);
var inst_30700 = cljs.core.not.call(null,inst_30699);
var state_30730__$1 = (function (){var statearr_30735 = state_30730;
(statearr_30735[(9)] = inst_30698__$1);

return statearr_30735;
})();
if(inst_30700){
var statearr_30736_30767 = state_30730__$1;
(statearr_30736_30767[(1)] = (5));

} else {
var statearr_30737_30768 = state_30730__$1;
(statearr_30737_30768[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (15))){
var inst_30720 = (state_30730[(2)]);
var state_30730__$1 = state_30730;
var statearr_30738_30769 = state_30730__$1;
(statearr_30738_30769[(2)] = inst_30720);

(statearr_30738_30769[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (13))){
var state_30730__$1 = state_30730;
var statearr_30739_30770 = state_30730__$1;
(statearr_30739_30770[(2)] = null);

(statearr_30739_30770[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (6))){
var inst_30695 = (state_30730[(8)]);
var inst_30716 = (inst_30695 > (0));
var state_30730__$1 = state_30730;
if(cljs.core.truth_(inst_30716)){
var statearr_30740_30771 = state_30730__$1;
(statearr_30740_30771[(1)] = (12));

} else {
var statearr_30741_30772 = state_30730__$1;
(statearr_30741_30772[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (3))){
var inst_30728 = (state_30730[(2)]);
var state_30730__$1 = state_30730;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30730__$1,inst_30728);
} else {
if((state_val_30731 === (12))){
var inst_30694 = (state_30730[(7)]);
var inst_30718 = cljs.core.vec.call(null,inst_30694);
var state_30730__$1 = state_30730;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30730__$1,(15),out,inst_30718);
} else {
if((state_val_30731 === (2))){
var state_30730__$1 = state_30730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30730__$1,(4),ch);
} else {
if((state_val_30731 === (11))){
var inst_30710 = (state_30730[(2)]);
var inst_30711 = (new Array(n));
var inst_30694 = inst_30711;
var inst_30695 = (0);
var state_30730__$1 = (function (){var statearr_30742 = state_30730;
(statearr_30742[(7)] = inst_30694);

(statearr_30742[(10)] = inst_30710);

(statearr_30742[(8)] = inst_30695);

return statearr_30742;
})();
var statearr_30743_30773 = state_30730__$1;
(statearr_30743_30773[(2)] = null);

(statearr_30743_30773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (9))){
var inst_30694 = (state_30730[(7)]);
var inst_30708 = cljs.core.vec.call(null,inst_30694);
var state_30730__$1 = state_30730;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30730__$1,(11),out,inst_30708);
} else {
if((state_val_30731 === (5))){
var inst_30694 = (state_30730[(7)]);
var inst_30698 = (state_30730[(9)]);
var inst_30703 = (state_30730[(11)]);
var inst_30695 = (state_30730[(8)]);
var inst_30702 = (inst_30694[inst_30695] = inst_30698);
var inst_30703__$1 = (inst_30695 + (1));
var inst_30704 = (inst_30703__$1 < n);
var state_30730__$1 = (function (){var statearr_30744 = state_30730;
(statearr_30744[(12)] = inst_30702);

(statearr_30744[(11)] = inst_30703__$1);

return statearr_30744;
})();
if(cljs.core.truth_(inst_30704)){
var statearr_30745_30774 = state_30730__$1;
(statearr_30745_30774[(1)] = (8));

} else {
var statearr_30746_30775 = state_30730__$1;
(statearr_30746_30775[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (14))){
var inst_30723 = (state_30730[(2)]);
var inst_30724 = cljs.core.async.close_BANG_.call(null,out);
var state_30730__$1 = (function (){var statearr_30748 = state_30730;
(statearr_30748[(13)] = inst_30723);

return statearr_30748;
})();
var statearr_30749_30776 = state_30730__$1;
(statearr_30749_30776[(2)] = inst_30724);

(statearr_30749_30776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (10))){
var inst_30714 = (state_30730[(2)]);
var state_30730__$1 = state_30730;
var statearr_30750_30777 = state_30730__$1;
(statearr_30750_30777[(2)] = inst_30714);

(statearr_30750_30777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (8))){
var inst_30694 = (state_30730[(7)]);
var inst_30703 = (state_30730[(11)]);
var tmp30747 = inst_30694;
var inst_30694__$1 = tmp30747;
var inst_30695 = inst_30703;
var state_30730__$1 = (function (){var statearr_30751 = state_30730;
(statearr_30751[(7)] = inst_30694__$1);

(statearr_30751[(8)] = inst_30695);

return statearr_30751;
})();
var statearr_30752_30778 = state_30730__$1;
(statearr_30752_30778[(2)] = null);

(statearr_30752_30778[(1)] = (2));


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
});})(c__28082__auto___30764,out))
;
return ((function (switch__27970__auto__,c__28082__auto___30764,out){
return (function() {
var cljs$core$async$state_machine__27971__auto__ = null;
var cljs$core$async$state_machine__27971__auto____0 = (function (){
var statearr_30756 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30756[(0)] = cljs$core$async$state_machine__27971__auto__);

(statearr_30756[(1)] = (1));

return statearr_30756;
});
var cljs$core$async$state_machine__27971__auto____1 = (function (state_30730){
while(true){
var ret_value__27972__auto__ = (function (){try{while(true){
var result__27973__auto__ = switch__27970__auto__.call(null,state_30730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27973__auto__;
}
break;
}
}catch (e30757){if((e30757 instanceof Object)){
var ex__27974__auto__ = e30757;
var statearr_30758_30779 = state_30730;
(statearr_30758_30779[(5)] = ex__27974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30780 = state_30730;
state_30730 = G__30780;
continue;
} else {
return ret_value__27972__auto__;
}
break;
}
});
cljs$core$async$state_machine__27971__auto__ = function(state_30730){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27971__auto____1.call(this,state_30730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27971__auto____0;
cljs$core$async$state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27971__auto____1;
return cljs$core$async$state_machine__27971__auto__;
})()
;})(switch__27970__auto__,c__28082__auto___30764,out))
})();
var state__28084__auto__ = (function (){var statearr_30759 = f__28083__auto__.call(null);
(statearr_30759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28082__auto___30764);

return statearr_30759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28084__auto__);
});})(c__28082__auto___30764,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args30781 = [];
var len__25865__auto___30855 = arguments.length;
var i__25866__auto___30856 = (0);
while(true){
if((i__25866__auto___30856 < len__25865__auto___30855)){
args30781.push((arguments[i__25866__auto___30856]));

var G__30857 = (i__25866__auto___30856 + (1));
i__25866__auto___30856 = G__30857;
continue;
} else {
}
break;
}

var G__30783 = args30781.length;
switch (G__30783) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30781.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28082__auto___30859 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28082__auto___30859,out){
return (function (){
var f__28083__auto__ = (function (){var switch__27970__auto__ = ((function (c__28082__auto___30859,out){
return (function (state_30825){
var state_val_30826 = (state_30825[(1)]);
if((state_val_30826 === (7))){
var inst_30821 = (state_30825[(2)]);
var state_30825__$1 = state_30825;
var statearr_30827_30860 = state_30825__$1;
(statearr_30827_30860[(2)] = inst_30821);

(statearr_30827_30860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30826 === (1))){
var inst_30784 = [];
var inst_30785 = inst_30784;
var inst_30786 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30825__$1 = (function (){var statearr_30828 = state_30825;
(statearr_30828[(7)] = inst_30786);

(statearr_30828[(8)] = inst_30785);

return statearr_30828;
})();
var statearr_30829_30861 = state_30825__$1;
(statearr_30829_30861[(2)] = null);

(statearr_30829_30861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30826 === (4))){
var inst_30789 = (state_30825[(9)]);
var inst_30789__$1 = (state_30825[(2)]);
var inst_30790 = (inst_30789__$1 == null);
var inst_30791 = cljs.core.not.call(null,inst_30790);
var state_30825__$1 = (function (){var statearr_30830 = state_30825;
(statearr_30830[(9)] = inst_30789__$1);

return statearr_30830;
})();
if(inst_30791){
var statearr_30831_30862 = state_30825__$1;
(statearr_30831_30862[(1)] = (5));

} else {
var statearr_30832_30863 = state_30825__$1;
(statearr_30832_30863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30826 === (15))){
var inst_30815 = (state_30825[(2)]);
var state_30825__$1 = state_30825;
var statearr_30833_30864 = state_30825__$1;
(statearr_30833_30864[(2)] = inst_30815);

(statearr_30833_30864[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30826 === (13))){
var state_30825__$1 = state_30825;
var statearr_30834_30865 = state_30825__$1;
(statearr_30834_30865[(2)] = null);

(statearr_30834_30865[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30826 === (6))){
var inst_30785 = (state_30825[(8)]);
var inst_30810 = inst_30785.length;
var inst_30811 = (inst_30810 > (0));
var state_30825__$1 = state_30825;
if(cljs.core.truth_(inst_30811)){
var statearr_30835_30866 = state_30825__$1;
(statearr_30835_30866[(1)] = (12));

} else {
var statearr_30836_30867 = state_30825__$1;
(statearr_30836_30867[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30826 === (3))){
var inst_30823 = (state_30825[(2)]);
var state_30825__$1 = state_30825;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30825__$1,inst_30823);
} else {
if((state_val_30826 === (12))){
var inst_30785 = (state_30825[(8)]);
var inst_30813 = cljs.core.vec.call(null,inst_30785);
var state_30825__$1 = state_30825;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30825__$1,(15),out,inst_30813);
} else {
if((state_val_30826 === (2))){
var state_30825__$1 = state_30825;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30825__$1,(4),ch);
} else {
if((state_val_30826 === (11))){
var inst_30789 = (state_30825[(9)]);
var inst_30793 = (state_30825[(10)]);
var inst_30803 = (state_30825[(2)]);
var inst_30804 = [];
var inst_30805 = inst_30804.push(inst_30789);
var inst_30785 = inst_30804;
var inst_30786 = inst_30793;
var state_30825__$1 = (function (){var statearr_30837 = state_30825;
(statearr_30837[(11)] = inst_30803);

(statearr_30837[(7)] = inst_30786);

(statearr_30837[(8)] = inst_30785);

(statearr_30837[(12)] = inst_30805);

return statearr_30837;
})();
var statearr_30838_30868 = state_30825__$1;
(statearr_30838_30868[(2)] = null);

(statearr_30838_30868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30826 === (9))){
var inst_30785 = (state_30825[(8)]);
var inst_30801 = cljs.core.vec.call(null,inst_30785);
var state_30825__$1 = state_30825;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30825__$1,(11),out,inst_30801);
} else {
if((state_val_30826 === (5))){
var inst_30786 = (state_30825[(7)]);
var inst_30789 = (state_30825[(9)]);
var inst_30793 = (state_30825[(10)]);
var inst_30793__$1 = f.call(null,inst_30789);
var inst_30794 = cljs.core._EQ_.call(null,inst_30793__$1,inst_30786);
var inst_30795 = cljs.core.keyword_identical_QMARK_.call(null,inst_30786,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30796 = (inst_30794) || (inst_30795);
var state_30825__$1 = (function (){var statearr_30839 = state_30825;
(statearr_30839[(10)] = inst_30793__$1);

return statearr_30839;
})();
if(cljs.core.truth_(inst_30796)){
var statearr_30840_30869 = state_30825__$1;
(statearr_30840_30869[(1)] = (8));

} else {
var statearr_30841_30870 = state_30825__$1;
(statearr_30841_30870[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30826 === (14))){
var inst_30818 = (state_30825[(2)]);
var inst_30819 = cljs.core.async.close_BANG_.call(null,out);
var state_30825__$1 = (function (){var statearr_30843 = state_30825;
(statearr_30843[(13)] = inst_30818);

return statearr_30843;
})();
var statearr_30844_30871 = state_30825__$1;
(statearr_30844_30871[(2)] = inst_30819);

(statearr_30844_30871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30826 === (10))){
var inst_30808 = (state_30825[(2)]);
var state_30825__$1 = state_30825;
var statearr_30845_30872 = state_30825__$1;
(statearr_30845_30872[(2)] = inst_30808);

(statearr_30845_30872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30826 === (8))){
var inst_30789 = (state_30825[(9)]);
var inst_30785 = (state_30825[(8)]);
var inst_30793 = (state_30825[(10)]);
var inst_30798 = inst_30785.push(inst_30789);
var tmp30842 = inst_30785;
var inst_30785__$1 = tmp30842;
var inst_30786 = inst_30793;
var state_30825__$1 = (function (){var statearr_30846 = state_30825;
(statearr_30846[(7)] = inst_30786);

(statearr_30846[(8)] = inst_30785__$1);

(statearr_30846[(14)] = inst_30798);

return statearr_30846;
})();
var statearr_30847_30873 = state_30825__$1;
(statearr_30847_30873[(2)] = null);

(statearr_30847_30873[(1)] = (2));


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
});})(c__28082__auto___30859,out))
;
return ((function (switch__27970__auto__,c__28082__auto___30859,out){
return (function() {
var cljs$core$async$state_machine__27971__auto__ = null;
var cljs$core$async$state_machine__27971__auto____0 = (function (){
var statearr_30851 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30851[(0)] = cljs$core$async$state_machine__27971__auto__);

(statearr_30851[(1)] = (1));

return statearr_30851;
});
var cljs$core$async$state_machine__27971__auto____1 = (function (state_30825){
while(true){
var ret_value__27972__auto__ = (function (){try{while(true){
var result__27973__auto__ = switch__27970__auto__.call(null,state_30825);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27973__auto__;
}
break;
}
}catch (e30852){if((e30852 instanceof Object)){
var ex__27974__auto__ = e30852;
var statearr_30853_30874 = state_30825;
(statearr_30853_30874[(5)] = ex__27974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30875 = state_30825;
state_30825 = G__30875;
continue;
} else {
return ret_value__27972__auto__;
}
break;
}
});
cljs$core$async$state_machine__27971__auto__ = function(state_30825){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27971__auto____1.call(this,state_30825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27971__auto____0;
cljs$core$async$state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27971__auto____1;
return cljs$core$async$state_machine__27971__auto__;
})()
;})(switch__27970__auto__,c__28082__auto___30859,out))
})();
var state__28084__auto__ = (function (){var statearr_30854 = f__28083__auto__.call(null);
(statearr_30854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28082__auto___30859);

return statearr_30854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28084__auto__);
});})(c__28082__auto___30859,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1485300080186