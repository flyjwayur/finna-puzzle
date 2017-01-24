// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.utils');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.userAgent.product');
figwheel.client.utils._STAR_print_debug_STAR_ = false;
figwheel.client.utils.html_env_QMARK_ = (function figwheel$client$utils$html_env_QMARK_(){
return !((goog.global.document == null));
});
figwheel.client.utils.node_env_QMARK_ = (function figwheel$client$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
figwheel.client.utils.host_env_QMARK_ = (function figwheel$client$utils$host_env_QMARK_(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"node","node",581201198);
} else {
return new cljs.core.Keyword(null,"html","html",-998796897);
}
});
figwheel.client.utils.base_url_path = (function figwheel$client$utils$base_url_path(){
return clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,"$1");
});
figwheel.client.utils.create_custom_event = (function figwheel$client$utils$create_custom_event(event_name,data){
if(cljs.core.not.call(null,goog.userAgent.product.IE)){
return (new CustomEvent(event_name,(function (){var obj32056 = {"detail":data};
return obj32056;
})()));
} else {
var event = document.createEvent("CustomEvent");
event.initCustomEvent(event_name,false,false,data);

return event;
}
});
figwheel.client.utils.dispatch_custom_event = (function figwheel$client$utils$dispatch_custom_event(event_name,data){
if(cljs.core.truth_((function (){var and__24778__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__24778__auto__)){
var and__24778__auto____$1 = (window["CustomEvent"]);
if(cljs.core.truth_(and__24778__auto____$1)){
return typeof document !== 'undefined';
} else {
return and__24778__auto____$1;
}
} else {
return and__24778__auto__;
}
})())){
return document.body.dispatchEvent(figwheel.client.utils.create_custom_event.call(null,event_name,data));
} else {
return null;
}
});
figwheel.client.utils.debug_prn = (function figwheel$client$utils$debug_prn(o){
if(cljs.core.truth_(figwheel.client.utils._STAR_print_debug_STAR_)){
var o__$1 = (((cljs.core.map_QMARK_.call(null,o)) || (cljs.core.seq_QMARK_.call(null,o)))?cljs.core.prn_str.call(null,o):o);
return console.log(o__$1);
} else {
return null;
}
});
figwheel.client.utils.log = (function figwheel$client$utils$log(var_args){
var args32061 = [];
var len__25865__auto___32067 = arguments.length;
var i__25866__auto___32068 = (0);
while(true){
if((i__25866__auto___32068 < len__25865__auto___32067)){
args32061.push((arguments[i__25866__auto___32068]));

var G__32069 = (i__25866__auto___32068 + (1));
i__25866__auto___32068 = G__32069;
continue;
} else {
}
break;
}

var G__32063 = args32061.length;
switch (G__32063) {
case 1:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32061.length)].join('')));

}
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1 = (function (x){
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),x);
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2 = (function (level,arg){
var f = (function (){var pred__32064 = cljs.core._EQ_;
var expr__32065 = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?level:new cljs.core.Keyword(null,"info","info",-317069002));
if(cljs.core.truth_(pred__32064.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),expr__32065))){
return ((function (pred__32064,expr__32065){
return (function (p1__32057_SHARP_){
return console.warn(p1__32057_SHARP_);
});
;})(pred__32064,expr__32065))
} else {
if(cljs.core.truth_(pred__32064.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),expr__32065))){
return ((function (pred__32064,expr__32065){
return (function (p1__32058_SHARP_){
return console.debug(p1__32058_SHARP_);
});
;})(pred__32064,expr__32065))
} else {
if(cljs.core.truth_(pred__32064.call(null,new cljs.core.Keyword(null,"error","error",-978969032),expr__32065))){
return ((function (pred__32064,expr__32065){
return (function (p1__32059_SHARP_){
return console.error(p1__32059_SHARP_);
});
;})(pred__32064,expr__32065))
} else {
return ((function (pred__32064,expr__32065){
return (function (p1__32060_SHARP_){
return console.log(p1__32060_SHARP_);
});
;})(pred__32064,expr__32065))
}
}
}
})();
return f.call(null,arg);
});

figwheel.client.utils.log.cljs$lang$maxFixedArity = 2;

figwheel.client.utils.eval_helper = (function figwheel$client$utils$eval_helper(code,p__32071){
var map__32074 = p__32071;
var map__32074__$1 = ((((!((map__32074 == null)))?((((map__32074.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32074.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32074):map__32074);
var opts = map__32074__$1;
var eval_fn = cljs.core.get.call(null,map__32074__$1,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
if(cljs.core.truth_(eval_fn)){
return eval_fn.call(null,code,opts);
} else {
return eval(code);
}
});

//# sourceMappingURL=utils.js.map?rel=1485300088963