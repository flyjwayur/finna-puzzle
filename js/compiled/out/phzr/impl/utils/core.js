// Compiled by ClojureScript 1.9.229 {}
goog.provide('phzr.impl.utils.core');
goog.require('cljs.core');
goog.require('camel_snake_kebab.core');
phzr.impl.utils.core.name__GT_kebab_keyword = cljs.core.memoize.call(null,(function (s){
return camel_snake_kebab.core.__GT_kebab_case_keyword.call(null,s);
}));
phzr.impl.utils.core.js__GT_clj_STAR_ = (function phzr$impl$utils$core$js__GT_clj_STAR_(x){
var keyfn = phzr.impl.utils.core.name__GT_kebab_keyword;
var f = ((function (keyfn){
return (function phzr$impl$utils$core$js__GT_clj_STAR__$_thisfn(x__$1){
if(((!((x__$1 == null)))?(((false) || (x__$1.cljs$core$IEncodeClojure$))?true:(((!x__$1.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IEncodeClojure,x__$1):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IEncodeClojure,x__$1))){
return cljs.core._js__GT_clj.call(null,x__$1,null);
} else {
if(cljs.core.seq_QMARK_.call(null,x__$1)){
return cljs.core.doall.call(null,cljs.core.map.call(null,phzr$impl$utils$core$js__GT_clj_STAR__$_thisfn,x__$1));
} else {
if(cljs.core.coll_QMARK_.call(null,x__$1)){
return cljs.core.into.call(null,cljs.core.empty.call(null,x__$1),cljs.core.map.call(null,phzr$impl$utils$core$js__GT_clj_STAR__$_thisfn),x__$1);
} else {
if(cljs.core.array_QMARK_.call(null,x__$1)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (keyfn){
return (function (p1__31003_SHARP_,p2__31004_SHARP_){
return cljs.core.conj_BANG_.call(null,p1__31003_SHARP_,phzr$impl$utils$core$js__GT_clj_STAR__$_thisfn.call(null,p2__31004_SHARP_));
});})(keyfn))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),x__$1));
} else {
if((cljs.core.type.call(null,x__$1) === Object)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (keyfn){
return (function (r,k){
return cljs.core.assoc_BANG_.call(null,r,keyfn.call(null,k),phzr$impl$utils$core$js__GT_clj_STAR__$_thisfn.call(null,(x__$1[k])));
});})(keyfn))
,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.js_keys.call(null,x__$1)));
} else {
return x__$1;

}
}
}
}
}
});})(keyfn))
;
return f.call(null,x);
});
phzr.impl.utils.core.clj__GT_phaser = (function phzr$impl$utils$core$clj__GT_phaser(x){
return cljs.core.clj__GT_js.call(null,x);
});
phzr.impl.utils.core.phaser__GT_clj = (function phzr$impl$utils$core$phaser__GT_clj(x){
return phzr.impl.utils.core.js__GT_clj_STAR_.call(null,x);
});

//# sourceMappingURL=core.js.map?rel=1485300081059