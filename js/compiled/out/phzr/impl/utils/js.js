// Compiled by ClojureScript 1.9.229 {}
goog.provide('phzr.impl.utils.js');
goog.require('cljs.core');
goog.require('camel_snake_kebab.core');
goog.require('clojure.string');
goog.require('goog.array');
goog.require('goog.object');
phzr.impl.utils.js.js_type = (function phzr$impl$utils$js$js_type(o){
var ty = cljs.core.type.call(null,o);
var ty__$1 = (cljs.core.truth_((function (){var and__24778__auto__ = ty;
if(cljs.core.truth_(and__24778__auto__)){
return ty.cljs$lang$type;
} else {
return and__24778__auto__;
}
})())?ty.cljs$lang$ctorStr:goog.typeOf(o));
return ty__$1;
});
phzr.impl.utils.js.js_obj_QMARK_ = (function phzr$impl$utils$js$js_obj_QMARK_(o){
return (cljs.core.type.call(null,o) === Object);
});
phzr.impl.utils.js.obj_only = (function phzr$impl$utils$js$obj_only(o,method){
if(cljs.core.truth_(phzr.impl.utils.js.js_obj_QMARK_.call(null,o))){
return null;
} else {
throw (new TypeError([cljs.core.str(phzr.impl.utils.js.js_type.call(null,o)),cljs.core.str(" does not implement '"),cljs.core.str(cljs.core.name.call(null,method)),cljs.core.str("'")].join('')));
}
});
phzr.impl.utils.js.name_kebab_touchup = (function phzr$impl$utils$js$name_kebab_touchup(s){
return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,s,/web\-gl/,"webgl"),/p\-2js/,"p2-js"),/p\-2/,"p2"),/palette\-c\-64/,"palette-c64"),/box\-2\-d/,"box-2d");
});
phzr.impl.utils.js.name__GT_kebab = cljs.core.memoize.call(null,(function (s){
return phzr.impl.utils.js.name_kebab_touchup.call(null,clojure.string.lower_case.call(null,camel_snake_kebab.core.__GT_kebab_case_string.call(null,s)));
}));
phzr.impl.utils.js.camel_name_touchup = (function phzr$impl$utils$js$camel_name_touchup(s){
return s;
});
phzr.impl.utils.js.kebab__GT_name = cljs.core.memoize.call(null,(function (s){
return phzr.impl.utils.js.camel_name_touchup.call(null,camel_snake_kebab.core.__GT_camelCaseString.call(null,s));
}));
phzr.impl.utils.js.js_strkey = (function phzr$impl$utils$js$js_strkey(x){
if(typeof x === 'string'){
return phzr.impl.utils.js.kebab__GT_name.call(null,x);
} else {
if((x instanceof cljs.core.Keyword)){
return phzr.impl.utils.js.kebab__GT_name.call(null,cljs.core.name.call(null,x));
} else {
return [cljs.core.str(x)].join('');

}
}
});
phzr.impl.utils.js.js_lookup = (function phzr$impl$utils$js$js_lookup(var_args){
var args26472 = [];
var len__25865__auto___26475 = arguments.length;
var i__25866__auto___26476 = (0);
while(true){
if((i__25866__auto___26476 < len__25865__auto___26475)){
args26472.push((arguments[i__25866__auto___26476]));

var G__26477 = (i__25866__auto___26476 + (1));
i__25866__auto___26476 = G__26477;
continue;
} else {
}
break;
}

var G__26474 = args26472.length;
switch (G__26474) {
case 2:
return phzr.impl.utils.js.js_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.impl.utils.js.js_lookup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26472.length)].join('')));

}
});

phzr.impl.utils.js.js_lookup.cljs$core$IFn$_invoke$arity$2 = (function (o,k){
return (o[phzr.impl.utils.js.js_strkey.call(null,k)]);
});

phzr.impl.utils.js.js_lookup.cljs$core$IFn$_invoke$arity$3 = (function (o,k,not_found){
var s = phzr.impl.utils.js.js_strkey.call(null,k);
var temp__4655__auto__ = (o[s]);
if(cljs.core.truth_(temp__4655__auto__)){
var res = temp__4655__auto__;
return res;
} else {
return not_found;
}
});

phzr.impl.utils.js.js_lookup.cljs$lang$maxFixedArity = 3;

phzr.impl.utils.js.js_assoc = (function phzr$impl$utils$js$js_assoc(var_args){
var args26480 = [];
var len__25865__auto___26487 = arguments.length;
var i__25866__auto___26488 = (0);
while(true){
if((i__25866__auto___26488 < len__25865__auto___26487)){
args26480.push((arguments[i__25866__auto___26488]));

var G__26489 = (i__25866__auto___26488 + (1));
i__25866__auto___26488 = G__26489;
continue;
} else {
}
break;
}

var G__26486 = args26480.length;
switch (G__26486) {
case 3:
return phzr.impl.utils.js.js_assoc.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__25884__auto__ = (new cljs.core.IndexedSeq(args26480.slice((3)),(0),null));
return phzr.impl.utils.js.js_assoc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25884__auto__);

}
});

phzr.impl.utils.js.js_assoc.cljs$core$IFn$_invoke$arity$3 = (function (o,k,v){
(o[phzr.impl.utils.js.js_strkey.call(null,k)] = v);

return o;
});

phzr.impl.utils.js.js_assoc.cljs$core$IFn$_invoke$arity$variadic = (function (o,k,v,more){
while(true){
phzr.impl.utils.js.js_assoc.call(null,o,k,v);

if(cljs.core.truth_(more)){
var G__26491 = o;
var G__26492 = cljs.core.first.call(null,more);
var G__26493 = cljs.core.second.call(null,more);
var G__26494 = cljs.core.nnext.call(null,more);
o = G__26491;
k = G__26492;
v = G__26493;
more = G__26494;
continue;
} else {
return o;
}
break;
}
});

phzr.impl.utils.js.js_assoc.cljs$lang$applyTo = (function (seq26481){
var G__26482 = cljs.core.first.call(null,seq26481);
var seq26481__$1 = cljs.core.next.call(null,seq26481);
var G__26483 = cljs.core.first.call(null,seq26481__$1);
var seq26481__$2 = cljs.core.next.call(null,seq26481__$1);
var G__26484 = cljs.core.first.call(null,seq26481__$2);
var seq26481__$3 = cljs.core.next.call(null,seq26481__$2);
return phzr.impl.utils.js.js_assoc.cljs$core$IFn$_invoke$arity$variadic(G__26482,G__26483,G__26484,seq26481__$3);
});

phzr.impl.utils.js.js_assoc.cljs$lang$maxFixedArity = (3);

phzr.impl.utils.js.js_dissoc = (function phzr$impl$utils$js$js_dissoc(var_args){
var args__25872__auto__ = [];
var len__25865__auto___26498 = arguments.length;
var i__25866__auto___26499 = (0);
while(true){
if((i__25866__auto___26499 < len__25865__auto___26498)){
args__25872__auto__.push((arguments[i__25866__auto___26499]));

var G__26500 = (i__25866__auto___26499 + (1));
i__25866__auto___26499 = G__26500;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((2) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((2)),(0),null)):null);
return phzr.impl.utils.js.js_dissoc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25873__auto__);
});

phzr.impl.utils.js.js_dissoc.cljs$core$IFn$_invoke$arity$variadic = (function (o,k,more){
while(true){
delete o[phzr.impl.utils.js.js_strkey.call(null,k)];

if(cljs.core.truth_(more)){
var G__26501 = o;
var G__26502 = cljs.core.first.call(null,more);
var G__26503 = cljs.core.next.call(null,more);
o = G__26501;
k = G__26502;
more = G__26503;
continue;
} else {
return o;
}
break;
}
});

phzr.impl.utils.js.js_dissoc.cljs$lang$maxFixedArity = (2);

phzr.impl.utils.js.js_dissoc.cljs$lang$applyTo = (function (seq26495){
var G__26496 = cljs.core.first.call(null,seq26495);
var seq26495__$1 = cljs.core.next.call(null,seq26495);
var G__26497 = cljs.core.first.call(null,seq26495__$1);
var seq26495__$2 = cljs.core.next.call(null,seq26495__$1);
return phzr.impl.utils.js.js_dissoc.cljs$core$IFn$_invoke$arity$variadic(G__26496,G__26497,seq26495__$2);
});

phzr.impl.utils.js.js_copy = (function phzr$impl$utils$js$js_copy(o){
var t = goog.typeOf(o);
if(cljs.core._EQ_.call(null,t,"array")){
return goog.array.clone(o);
} else {
return goog.object.clone(o);

}
});
phzr.impl.utils.js.js_conj_object = (function phzr$impl$utils$js$js_conj_object(parent,p__26504){
var vec__26508 = p__26504;
var k = cljs.core.nth.call(null,vec__26508,(0),null);
var v = cljs.core.nth.call(null,vec__26508,(1),null);
var o = goog.object.clone(parent);
return phzr.impl.utils.js.js_assoc.call(null,o,k,v);
});

//# sourceMappingURL=js.js.map?rel=1485300062642