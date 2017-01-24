// Compiled by ClojureScript 1.9.229 {}
goog.provide('camel_snake_kebab.internals.misc');
goog.require('cljs.core');
goog.require('camel_snake_kebab.internals.string_separator');
goog.require('clojure.string');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__25872__auto__ = [];
var len__25865__auto___26144 = arguments.length;
var i__25866__auto___26145 = (0);
while(true){
if((i__25866__auto___26145 < len__25865__auto___26144)){
args__25872__auto__.push((arguments[i__25866__auto___26145]));

var G__26146 = (i__25866__auto___26145 + (1));
i__25866__auto___26145 = G__26146;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((4) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__25873__auto__);
});

camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__26138){
var map__26139 = p__26138;
var map__26139__$1 = ((((!((map__26139 == null)))?((((map__26139.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26139.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26139):map__26139);
var separator = cljs.core.get.call(null,map__26139__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),camel_snake_kebab.internals.string_separator.generic_separator);
var vec__26141 = camel_snake_kebab.internals.string_separator.split.call(null,separator,s);
var seq__26142 = cljs.core.seq.call(null,vec__26141);
var first__26143 = cljs.core.first.call(null,seq__26142);
var seq__26142__$1 = cljs.core.next.call(null,seq__26142);
var first = first__26143;
var rest = seq__26142__$1;
return clojure.string.join.call(null,sep,cljs.core.cons.call(null,first_fn.call(null,first),cljs.core.map.call(null,rest_fn,rest)));
});

camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq26133){
var G__26134 = cljs.core.first.call(null,seq26133);
var seq26133__$1 = cljs.core.next.call(null,seq26133);
var G__26135 = cljs.core.first.call(null,seq26133__$1);
var seq26133__$2 = cljs.core.next.call(null,seq26133__$1);
var G__26136 = cljs.core.first.call(null,seq26133__$2);
var seq26133__$3 = cljs.core.next.call(null,seq26133__$2);
var G__26137 = cljs.core.first.call(null,seq26133__$3);
var seq26133__$4 = cljs.core.next.call(null,seq26133__$3);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__26134,G__26135,G__26136,G__26137,seq26133__$4);
});

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__24790__auto__ = camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,clojure.string.upper_case.call(null,s));
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return clojure.string.capitalize.call(null,s);
}
});

//# sourceMappingURL=misc.js.map?rel=1485300060804