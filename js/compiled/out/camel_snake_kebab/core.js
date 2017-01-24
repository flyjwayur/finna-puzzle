// Compiled by ClojureScript 1.9.229 {}
goog.provide('camel_snake_kebab.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('camel_snake_kebab.internals.misc');
goog.require('camel_snake_kebab.internals.alter_name');
/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__25872__auto__ = [];
var len__25865__auto___26327 = arguments.length;
var i__25866__auto___26328 = (0);
while(true){
if((i__25866__auto___26328 < len__25865__auto___26327)){
args__25872__auto__.push((arguments[i__25866__auto___26328]));

var G__26329 = (i__25866__auto___26328 + (1));
i__25866__auto___26328 = G__26329;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((4) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__25873__auto__);
});

camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,rest);
});

camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq26322){
var G__26323 = cljs.core.first.call(null,seq26322);
var seq26322__$1 = cljs.core.next.call(null,seq26322);
var G__26324 = cljs.core.first.call(null,seq26322__$1);
var seq26322__$2 = cljs.core.next.call(null,seq26322__$1);
var G__26325 = cljs.core.first.call(null,seq26322__$2);
var seq26322__$3 = cljs.core.next.call(null,seq26322__$2);
var G__26326 = cljs.core.first.call(null,seq26322__$3);
var seq26322__$4 = cljs.core.next.call(null,seq26322__$3);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__26323,G__26324,G__26325,G__26326,seq26322__$4);
});

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__25872__auto__ = [];
var len__25865__auto___26338 = arguments.length;
var i__25866__auto___26339 = (0);
while(true){
if((i__25866__auto___26339 < len__25865__auto___26338)){
args__25872__auto__.push((arguments[i__25866__auto___26339]));

var G__26340 = (i__25866__auto___26339 + (1));
i__25866__auto___26339 = G__26340;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__26289__auto__,rest__26290__auto__){
var convert_case__26291__auto__ = (function (p1__26288__26292__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__26288__26292__auto__,rest__26290__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__26289__auto__,convert_case__26291__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq26330){
var G__26331 = cljs.core.first.call(null,seq26330);
var seq26330__$1 = cljs.core.next.call(null,seq26330);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic(G__26331,seq26330__$1);
});


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__25872__auto__ = [];
var len__25865__auto___26341 = arguments.length;
var i__25866__auto___26342 = (0);
while(true){
if((i__25866__auto___26342 < len__25865__auto___26341)){
args__25872__auto__.push((arguments[i__25866__auto___26342]));

var G__26343 = (i__25866__auto___26342 + (1));
i__25866__auto___26342 = G__26343;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__26294__auto__,rest__26295__auto__){
if(!((s__26294__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26294__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__26294__auto__),rest__26295__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq26332){
var G__26333 = cljs.core.first.call(null,seq26332);
var seq26332__$1 = cljs.core.next.call(null,seq26332);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic(G__26333,seq26332__$1);
});


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__25872__auto__ = [];
var len__25865__auto___26344 = arguments.length;
var i__25866__auto___26345 = (0);
while(true){
if((i__25866__auto___26345 < len__25865__auto___26344)){
args__25872__auto__.push((arguments[i__25866__auto___26345]));

var G__26346 = (i__25866__auto___26345 + (1));
i__25866__auto___26345 = G__26346;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__26294__auto__,rest__26295__auto__){
if(!((s__26294__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26294__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__26294__auto__),rest__26295__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq26334){
var G__26335 = cljs.core.first.call(null,seq26334);
var seq26334__$1 = cljs.core.next.call(null,seq26334);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__26335,seq26334__$1);
});


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__25872__auto__ = [];
var len__25865__auto___26347 = arguments.length;
var i__25866__auto___26348 = (0);
while(true){
if((i__25866__auto___26348 < len__25865__auto___26347)){
args__25872__auto__.push((arguments[i__25866__auto___26348]));

var G__26349 = (i__25866__auto___26348 + (1));
i__25866__auto___26348 = G__26349;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__26294__auto__,rest__26295__auto__){
if(!((s__26294__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26294__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__26294__auto__),rest__26295__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq26336){
var G__26337 = cljs.core.first.call(null,seq26336);
var seq26336__$1 = cljs.core.next.call(null,seq26336);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__26337,seq26336__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__25872__auto__ = [];
var len__25865__auto___26358 = arguments.length;
var i__25866__auto___26359 = (0);
while(true){
if((i__25866__auto___26359 < len__25865__auto___26358)){
args__25872__auto__.push((arguments[i__25866__auto___26359]));

var G__26360 = (i__25866__auto___26359 + (1));
i__25866__auto___26359 = G__26360;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__26289__auto__,rest__26290__auto__){
var convert_case__26291__auto__ = (function (p1__26288__26292__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__26288__26292__auto__,rest__26290__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__26289__auto__,convert_case__26291__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq26350){
var G__26351 = cljs.core.first.call(null,seq26350);
var seq26350__$1 = cljs.core.next.call(null,seq26350);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic(G__26351,seq26350__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__25872__auto__ = [];
var len__25865__auto___26361 = arguments.length;
var i__25866__auto___26362 = (0);
while(true){
if((i__25866__auto___26362 < len__25865__auto___26361)){
args__25872__auto__.push((arguments[i__25866__auto___26362]));

var G__26363 = (i__25866__auto___26362 + (1));
i__25866__auto___26362 = G__26363;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__26294__auto__,rest__26295__auto__){
if(!((s__26294__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26294__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__26294__auto__),rest__26295__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq26352){
var G__26353 = cljs.core.first.call(null,seq26352);
var seq26352__$1 = cljs.core.next.call(null,seq26352);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__26353,seq26352__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__25872__auto__ = [];
var len__25865__auto___26364 = arguments.length;
var i__25866__auto___26365 = (0);
while(true){
if((i__25866__auto___26365 < len__25865__auto___26364)){
args__25872__auto__.push((arguments[i__25866__auto___26365]));

var G__26366 = (i__25866__auto___26365 + (1));
i__25866__auto___26365 = G__26366;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__26294__auto__,rest__26295__auto__){
if(!((s__26294__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26294__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__26294__auto__),rest__26295__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq26354){
var G__26355 = cljs.core.first.call(null,seq26354);
var seq26354__$1 = cljs.core.next.call(null,seq26354);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__26355,seq26354__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__25872__auto__ = [];
var len__25865__auto___26367 = arguments.length;
var i__25866__auto___26368 = (0);
while(true){
if((i__25866__auto___26368 < len__25865__auto___26367)){
args__25872__auto__.push((arguments[i__25866__auto___26368]));

var G__26369 = (i__25866__auto___26368 + (1));
i__25866__auto___26368 = G__26369;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__26294__auto__,rest__26295__auto__){
if(!((s__26294__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26294__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__26294__auto__),rest__26295__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq26356){
var G__26357 = cljs.core.first.call(null,seq26356);
var seq26356__$1 = cljs.core.next.call(null,seq26356);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__26357,seq26356__$1);
});

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__25872__auto__ = [];
var len__25865__auto___26378 = arguments.length;
var i__25866__auto___26379 = (0);
while(true){
if((i__25866__auto___26379 < len__25865__auto___26378)){
args__25872__auto__.push((arguments[i__25866__auto___26379]));

var G__26380 = (i__25866__auto___26379 + (1));
i__25866__auto___26379 = G__26380;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__26289__auto__,rest__26290__auto__){
var convert_case__26291__auto__ = (function (p1__26288__26292__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__26288__26292__auto__,rest__26290__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__26289__auto__,convert_case__26291__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq26370){
var G__26371 = cljs.core.first.call(null,seq26370);
var seq26370__$1 = cljs.core.next.call(null,seq26370);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic(G__26371,seq26370__$1);
});


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__25872__auto__ = [];
var len__25865__auto___26381 = arguments.length;
var i__25866__auto___26382 = (0);
while(true){
if((i__25866__auto___26382 < len__25865__auto___26381)){
args__25872__auto__.push((arguments[i__25866__auto___26382]));

var G__26383 = (i__25866__auto___26382 + (1));
i__25866__auto___26382 = G__26383;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__26294__auto__,rest__26295__auto__){
if(!((s__26294__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26294__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__26294__auto__),rest__26295__auto__));
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq26372){
var G__26373 = cljs.core.first.call(null,seq26372);
var seq26372__$1 = cljs.core.next.call(null,seq26372);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic(G__26373,seq26372__$1);
});


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__25872__auto__ = [];
var len__25865__auto___26384 = arguments.length;
var i__25866__auto___26385 = (0);
while(true){
if((i__25866__auto___26385 < len__25865__auto___26384)){
args__25872__auto__.push((arguments[i__25866__auto___26385]));

var G__26386 = (i__25866__auto___26385 + (1));
i__25866__auto___26385 = G__26386;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__26294__auto__,rest__26295__auto__){
if(!((s__26294__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26294__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__26294__auto__),rest__26295__auto__));
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq26374){
var G__26375 = cljs.core.first.call(null,seq26374);
var seq26374__$1 = cljs.core.next.call(null,seq26374);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__26375,seq26374__$1);
});


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__25872__auto__ = [];
var len__25865__auto___26387 = arguments.length;
var i__25866__auto___26388 = (0);
while(true){
if((i__25866__auto___26388 < len__25865__auto___26387)){
args__25872__auto__.push((arguments[i__25866__auto___26388]));

var G__26389 = (i__25866__auto___26388 + (1));
i__25866__auto___26388 = G__26389;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__26294__auto__,rest__26295__auto__){
if(!((s__26294__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26294__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__26294__auto__),rest__26295__auto__));
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq26376){
var G__26377 = cljs.core.first.call(null,seq26376);
var seq26376__$1 = cljs.core.next.call(null,seq26376);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__26377,seq26376__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__25872__auto__ = [];
var len__25865__auto___26398 = arguments.length;
var i__25866__auto___26399 = (0);
while(true){
if((i__25866__auto___26399 < len__25865__auto___26398)){
args__25872__auto__.push((arguments[i__25866__auto___26399]));

var G__26400 = (i__25866__auto___26399 + (1));
i__25866__auto___26399 = G__26400;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__26289__auto__,rest__26290__auto__){
var convert_case__26291__auto__ = (function (p1__26288__26292__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__26288__26292__auto__,rest__26290__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__26289__auto__,convert_case__26291__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq26390){
var G__26391 = cljs.core.first.call(null,seq26390);
var seq26390__$1 = cljs.core.next.call(null,seq26390);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic(G__26391,seq26390__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__25872__auto__ = [];
var len__25865__auto___26401 = arguments.length;
var i__25866__auto___26402 = (0);
while(true){
if((i__25866__auto___26402 < len__25865__auto___26401)){
args__25872__auto__.push((arguments[i__25866__auto___26402]));

var G__26403 = (i__25866__auto___26402 + (1));
i__25866__auto___26402 = G__26403;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__26294__auto__,rest__26295__auto__){
if(!((s__26294__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26294__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__26294__auto__),rest__26295__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq26392){
var G__26393 = cljs.core.first.call(null,seq26392);
var seq26392__$1 = cljs.core.next.call(null,seq26392);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic(G__26393,seq26392__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__25872__auto__ = [];
var len__25865__auto___26404 = arguments.length;
var i__25866__auto___26405 = (0);
while(true){
if((i__25866__auto___26405 < len__25865__auto___26404)){
args__25872__auto__.push((arguments[i__25866__auto___26405]));

var G__26406 = (i__25866__auto___26405 + (1));
i__25866__auto___26405 = G__26406;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__26294__auto__,rest__26295__auto__){
if(!((s__26294__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26294__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__26294__auto__),rest__26295__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq26394){
var G__26395 = cljs.core.first.call(null,seq26394);
var seq26394__$1 = cljs.core.next.call(null,seq26394);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic(G__26395,seq26394__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__25872__auto__ = [];
var len__25865__auto___26407 = arguments.length;
var i__25866__auto___26408 = (0);
while(true){
if((i__25866__auto___26408 < len__25865__auto___26407)){
args__25872__auto__.push((arguments[i__25866__auto___26408]));

var G__26409 = (i__25866__auto___26408 + (1));
i__25866__auto___26408 = G__26409;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__26294__auto__,rest__26295__auto__){
if(!((s__26294__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26294__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__26294__auto__),rest__26295__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq26396){
var G__26397 = cljs.core.first.call(null,seq26396);
var seq26396__$1 = cljs.core.next.call(null,seq26396);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic(G__26397,seq26396__$1);
});

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__25872__auto__ = [];
var len__25865__auto___26418 = arguments.length;
var i__25866__auto___26419 = (0);
while(true){
if((i__25866__auto___26419 < len__25865__auto___26418)){
args__25872__auto__.push((arguments[i__25866__auto___26419]));

var G__26420 = (i__25866__auto___26419 + (1));
i__25866__auto___26419 = G__26420;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__26289__auto__,rest__26290__auto__){
var convert_case__26291__auto__ = (function (p1__26288__26292__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__26288__26292__auto__,rest__26290__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__26289__auto__,convert_case__26291__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq26410){
var G__26411 = cljs.core.first.call(null,seq26410);
var seq26410__$1 = cljs.core.next.call(null,seq26410);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic(G__26411,seq26410__$1);
});


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__25872__auto__ = [];
var len__25865__auto___26421 = arguments.length;
var i__25866__auto___26422 = (0);
while(true){
if((i__25866__auto___26422 < len__25865__auto___26421)){
args__25872__auto__.push((arguments[i__25866__auto___26422]));

var G__26423 = (i__25866__auto___26422 + (1));
i__25866__auto___26422 = G__26423;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__26294__auto__,rest__26295__auto__){
if(!((s__26294__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26294__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__26294__auto__),rest__26295__auto__));
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq26412){
var G__26413 = cljs.core.first.call(null,seq26412);
var seq26412__$1 = cljs.core.next.call(null,seq26412);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic(G__26413,seq26412__$1);
});


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__25872__auto__ = [];
var len__25865__auto___26424 = arguments.length;
var i__25866__auto___26425 = (0);
while(true){
if((i__25866__auto___26425 < len__25865__auto___26424)){
args__25872__auto__.push((arguments[i__25866__auto___26425]));

var G__26426 = (i__25866__auto___26425 + (1));
i__25866__auto___26425 = G__26426;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__26294__auto__,rest__26295__auto__){
if(!((s__26294__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26294__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__26294__auto__),rest__26295__auto__));
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq26414){
var G__26415 = cljs.core.first.call(null,seq26414);
var seq26414__$1 = cljs.core.next.call(null,seq26414);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__26415,seq26414__$1);
});


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__25872__auto__ = [];
var len__25865__auto___26427 = arguments.length;
var i__25866__auto___26428 = (0);
while(true){
if((i__25866__auto___26428 < len__25865__auto___26427)){
args__25872__auto__.push((arguments[i__25866__auto___26428]));

var G__26429 = (i__25866__auto___26428 + (1));
i__25866__auto___26428 = G__26429;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__26294__auto__,rest__26295__auto__){
if(!((s__26294__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26294__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__26294__auto__),rest__26295__auto__));
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq26416){
var G__26417 = cljs.core.first.call(null,seq26416);
var seq26416__$1 = cljs.core.next.call(null,seq26416);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__26417,seq26416__$1);
});

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__25872__auto__ = [];
var len__25865__auto___26438 = arguments.length;
var i__25866__auto___26439 = (0);
while(true){
if((i__25866__auto___26439 < len__25865__auto___26438)){
args__25872__auto__.push((arguments[i__25866__auto___26439]));

var G__26440 = (i__25866__auto___26439 + (1));
i__25866__auto___26439 = G__26440;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__26289__auto__,rest__26290__auto__){
var convert_case__26291__auto__ = (function (p1__26288__26292__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__26288__26292__auto__,rest__26290__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__26289__auto__,convert_case__26291__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq26430){
var G__26431 = cljs.core.first.call(null,seq26430);
var seq26430__$1 = cljs.core.next.call(null,seq26430);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic(G__26431,seq26430__$1);
});


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__25872__auto__ = [];
var len__25865__auto___26441 = arguments.length;
var i__25866__auto___26442 = (0);
while(true){
if((i__25866__auto___26442 < len__25865__auto___26441)){
args__25872__auto__.push((arguments[i__25866__auto___26442]));

var G__26443 = (i__25866__auto___26442 + (1));
i__25866__auto___26442 = G__26443;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__26294__auto__,rest__26295__auto__){
if(!((s__26294__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26294__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__26294__auto__),rest__26295__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq26432){
var G__26433 = cljs.core.first.call(null,seq26432);
var seq26432__$1 = cljs.core.next.call(null,seq26432);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic(G__26433,seq26432__$1);
});


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__25872__auto__ = [];
var len__25865__auto___26444 = arguments.length;
var i__25866__auto___26445 = (0);
while(true){
if((i__25866__auto___26445 < len__25865__auto___26444)){
args__25872__auto__.push((arguments[i__25866__auto___26445]));

var G__26446 = (i__25866__auto___26445 + (1));
i__25866__auto___26445 = G__26446;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__26294__auto__,rest__26295__auto__){
if(!((s__26294__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26294__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__26294__auto__),rest__26295__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq26434){
var G__26435 = cljs.core.first.call(null,seq26434);
var seq26434__$1 = cljs.core.next.call(null,seq26434);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__26435,seq26434__$1);
});


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__25872__auto__ = [];
var len__25865__auto___26447 = arguments.length;
var i__25866__auto___26448 = (0);
while(true){
if((i__25866__auto___26448 < len__25865__auto___26447)){
args__25872__auto__.push((arguments[i__25866__auto___26448]));

var G__26449 = (i__25866__auto___26448 + (1));
i__25866__auto___26448 = G__26449;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__26294__auto__,rest__26295__auto__){
if(!((s__26294__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26294__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__26294__auto__),rest__26295__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq26436){
var G__26437 = cljs.core.first.call(null,seq26436);
var seq26436__$1 = cljs.core.next.call(null,seq26436);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__26437,seq26436__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__25872__auto__ = [];
var len__25865__auto___26458 = arguments.length;
var i__25866__auto___26459 = (0);
while(true){
if((i__25866__auto___26459 < len__25865__auto___26458)){
args__25872__auto__.push((arguments[i__25866__auto___26459]));

var G__26460 = (i__25866__auto___26459 + (1));
i__25866__auto___26459 = G__26460;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__26289__auto__,rest__26290__auto__){
var convert_case__26291__auto__ = (function (p1__26288__26292__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__26288__26292__auto__,rest__26290__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__26289__auto__,convert_case__26291__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq26450){
var G__26451 = cljs.core.first.call(null,seq26450);
var seq26450__$1 = cljs.core.next.call(null,seq26450);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic(G__26451,seq26450__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__25872__auto__ = [];
var len__25865__auto___26461 = arguments.length;
var i__25866__auto___26462 = (0);
while(true){
if((i__25866__auto___26462 < len__25865__auto___26461)){
args__25872__auto__.push((arguments[i__25866__auto___26462]));

var G__26463 = (i__25866__auto___26462 + (1));
i__25866__auto___26462 = G__26463;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__26294__auto__,rest__26295__auto__){
if(!((s__26294__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26294__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__26294__auto__),rest__26295__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq26452){
var G__26453 = cljs.core.first.call(null,seq26452);
var seq26452__$1 = cljs.core.next.call(null,seq26452);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__26453,seq26452__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__25872__auto__ = [];
var len__25865__auto___26464 = arguments.length;
var i__25866__auto___26465 = (0);
while(true){
if((i__25866__auto___26465 < len__25865__auto___26464)){
args__25872__auto__.push((arguments[i__25866__auto___26465]));

var G__26466 = (i__25866__auto___26465 + (1));
i__25866__auto___26465 = G__26466;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__26294__auto__,rest__26295__auto__){
if(!((s__26294__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26294__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__26294__auto__),rest__26295__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq26454){
var G__26455 = cljs.core.first.call(null,seq26454);
var seq26454__$1 = cljs.core.next.call(null,seq26454);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__26455,seq26454__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__25872__auto__ = [];
var len__25865__auto___26467 = arguments.length;
var i__25866__auto___26468 = (0);
while(true){
if((i__25866__auto___26468 < len__25865__auto___26467)){
args__25872__auto__.push((arguments[i__25866__auto___26468]));

var G__26469 = (i__25866__auto___26468 + (1));
i__25866__auto___26468 = G__26469;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__26294__auto__,rest__26295__auto__){
if(!((s__26294__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26294__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__26294__auto__),rest__26295__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq26456){
var G__26457 = cljs.core.first.call(null,seq26456);
var seq26456__$1 = cljs.core.next.call(null,seq26456);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__26457,seq26456__$1);
});


//# sourceMappingURL=core.js.map?rel=1485300062179