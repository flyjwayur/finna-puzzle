goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('puzzle.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__37379__delegate = function (x){
if(cljs.core.truth_(puzzle.core.on_js_reload)){
return cljs.core.apply.call(null,puzzle.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'puzzle.core/on-js-reload' is missing");
}
};
var G__37379 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__37380__i = 0, G__37380__a = new Array(arguments.length -  0);
while (G__37380__i < G__37380__a.length) {G__37380__a[G__37380__i] = arguments[G__37380__i + 0]; ++G__37380__i;}
  x = new cljs.core.IndexedSeq(G__37380__a,0);
} 
return G__37379__delegate.call(this,x);};
G__37379.cljs$lang$maxFixedArity = 0;
G__37379.cljs$lang$applyTo = (function (arglist__37381){
var x = cljs.core.seq(arglist__37381);
return G__37379__delegate(x);
});
G__37379.cljs$core$IFn$_invoke$arity$variadic = G__37379__delegate;
return G__37379;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
