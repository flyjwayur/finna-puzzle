// Compiled by ClojureScript 1.9.229 {}
goog.provide('phzr.impl.extend.core');
goog.require('cljs.core');
goog.require('phzr.core');
goog.require('phzr.impl.utils.js');
cljs.core.enable_console_print_BANG_.call(null);
phzr.impl.extend.core.phaser_set_BANG_ = (function phzr$impl$extend$core$phaser_set_BANG_(o,k,set_properties,v){
var temp__4655__auto__ = cljs.core.get.call(null,set_properties,k);
if(cljs.core.truth_(temp__4655__auto__)){
var kstr = temp__4655__auto__;
return (o[kstr] = v);
} else {
return console.log([cljs.core.str("Attempted to set read-only property "),cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(" for Phaser object.")].join(''));
}
});
phzr.impl.extend.core.phaser_get = (function phzr$impl$extend$core$phaser_get(o,k,get_properties,not_found){
var temp__4655__auto__ = cljs.core.get.call(null,get_properties,k);
if(cljs.core.truth_(temp__4655__auto__)){
var kstr = temp__4655__auto__;
var temp__4655__auto____$1 = (o[kstr]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var v = temp__4655__auto____$1;
return v;
} else {
return not_found;
}
} else {
return not_found;
}
});
phzr.impl.extend.core.extend_phaser_class = (function phzr$impl$extend$core$extend_phaser_class(phaser_class,get_properties,set_properties,constants){
var get_keys = cljs.core.set.call(null,cljs.core.keys.call(null,get_properties));
var set_keys = cljs.core.set.call(null,cljs.core.keys.call(null,set_properties));
var get_set_keys = cljs.core.set.call(null,cljs.core.concat.call(null,get_keys,set_keys));
if(cljs.core.not.call(null,(phaser_class["prototype"]))){
return cljs.core.println.call(null,"WARNING: ATTEMPTING TO EXTEND NATIVE JS OBJECT",phaser_class);
} else {
phaser_class.prototype.phzr$core$IPhaserObj$ = true;

phaser_class.prototype.phzr$core$IPhaserObj$pset_BANG_$arity$3 = ((function (get_keys,set_keys,get_set_keys){
return (function (o,k,v){
var o__$1 = this;
return phzr.impl.extend.core.phaser_set_BANG_.call(null,o__$1,k,set_properties,v);
});})(get_keys,set_keys,get_set_keys))
;

phaser_class.prototype.cljs$core$ISeqable$ = true;

phaser_class.prototype.cljs$core$ISeqable$_seq$arity$1 = ((function (get_keys,set_keys,get_set_keys){
return (function (o){
var o__$1 = this;
return cljs.core.map.call(null,((function (o__$1,get_keys,set_keys,get_set_keys){
return (function (k){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get.call(null,o__$1,k)], null);
});})(o__$1,get_keys,set_keys,get_set_keys))
,get_set_keys);
});})(get_keys,set_keys,get_set_keys))
;

phaser_class.prototype.cljs$core$ILookup$ = true;

phaser_class.prototype.cljs$core$ILookup$_lookup$arity$2 = ((function (get_keys,set_keys,get_set_keys){
return (function (o,k){
var o__$1 = this;
return cljs.core._lookup.call(null,o__$1,k,null);
});})(get_keys,set_keys,get_set_keys))
;

return phaser_class.prototype.cljs$core$ILookup$_lookup$arity$3 = ((function (get_keys,set_keys,get_set_keys){
return (function (o,k,nf){
var o__$1 = this;
return phzr.impl.extend.core.phaser_get.call(null,o__$1,k,get_properties,nf);
});})(get_keys,set_keys,get_set_keys))
;
}
});

//# sourceMappingURL=core.js.map?rel=1485300062802