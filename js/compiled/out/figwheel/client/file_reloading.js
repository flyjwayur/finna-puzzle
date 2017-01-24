// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__24790__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24790__auto__){
return or__24790__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__24790__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__32112_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__32112_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__32117 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__32118 = null;
var count__32119 = (0);
var i__32120 = (0);
while(true){
if((i__32120 < count__32119)){
var n = cljs.core._nth.call(null,chunk__32118,i__32120);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__32121 = seq__32117;
var G__32122 = chunk__32118;
var G__32123 = count__32119;
var G__32124 = (i__32120 + (1));
seq__32117 = G__32121;
chunk__32118 = G__32122;
count__32119 = G__32123;
i__32120 = G__32124;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32117);
if(temp__4657__auto__){
var seq__32117__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32117__$1)){
var c__25601__auto__ = cljs.core.chunk_first.call(null,seq__32117__$1);
var G__32125 = cljs.core.chunk_rest.call(null,seq__32117__$1);
var G__32126 = c__25601__auto__;
var G__32127 = cljs.core.count.call(null,c__25601__auto__);
var G__32128 = (0);
seq__32117 = G__32125;
chunk__32118 = G__32126;
count__32119 = G__32127;
i__32120 = G__32128;
continue;
} else {
var n = cljs.core.first.call(null,seq__32117__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__32129 = cljs.core.next.call(null,seq__32117__$1);
var G__32130 = null;
var G__32131 = (0);
var G__32132 = (0);
seq__32117 = G__32129;
chunk__32118 = G__32130;
count__32119 = G__32131;
i__32120 = G__32132;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__32183_32194 = cljs.core.seq.call(null,deps);
var chunk__32184_32195 = null;
var count__32185_32196 = (0);
var i__32186_32197 = (0);
while(true){
if((i__32186_32197 < count__32185_32196)){
var dep_32198 = cljs.core._nth.call(null,chunk__32184_32195,i__32186_32197);
topo_sort_helper_STAR_.call(null,dep_32198,(depth + (1)),state);

var G__32199 = seq__32183_32194;
var G__32200 = chunk__32184_32195;
var G__32201 = count__32185_32196;
var G__32202 = (i__32186_32197 + (1));
seq__32183_32194 = G__32199;
chunk__32184_32195 = G__32200;
count__32185_32196 = G__32201;
i__32186_32197 = G__32202;
continue;
} else {
var temp__4657__auto___32203 = cljs.core.seq.call(null,seq__32183_32194);
if(temp__4657__auto___32203){
var seq__32183_32204__$1 = temp__4657__auto___32203;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32183_32204__$1)){
var c__25601__auto___32205 = cljs.core.chunk_first.call(null,seq__32183_32204__$1);
var G__32206 = cljs.core.chunk_rest.call(null,seq__32183_32204__$1);
var G__32207 = c__25601__auto___32205;
var G__32208 = cljs.core.count.call(null,c__25601__auto___32205);
var G__32209 = (0);
seq__32183_32194 = G__32206;
chunk__32184_32195 = G__32207;
count__32185_32196 = G__32208;
i__32186_32197 = G__32209;
continue;
} else {
var dep_32210 = cljs.core.first.call(null,seq__32183_32204__$1);
topo_sort_helper_STAR_.call(null,dep_32210,(depth + (1)),state);

var G__32211 = cljs.core.next.call(null,seq__32183_32204__$1);
var G__32212 = null;
var G__32213 = (0);
var G__32214 = (0);
seq__32183_32194 = G__32211;
chunk__32184_32195 = G__32212;
count__32185_32196 = G__32213;
i__32186_32197 = G__32214;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__32187){
var vec__32191 = p__32187;
var seq__32192 = cljs.core.seq.call(null,vec__32191);
var first__32193 = cljs.core.first.call(null,seq__32192);
var seq__32192__$1 = cljs.core.next.call(null,seq__32192);
var x = first__32193;
var xs = seq__32192__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__32191,seq__32192,first__32193,seq__32192__$1,x,xs,get_deps__$1){
return (function (p1__32133_SHARP_){
return clojure.set.difference.call(null,p1__32133_SHARP_,x);
});})(vec__32191,seq__32192,first__32193,seq__32192__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__32227 = cljs.core.seq.call(null,provides);
var chunk__32228 = null;
var count__32229 = (0);
var i__32230 = (0);
while(true){
if((i__32230 < count__32229)){
var prov = cljs.core._nth.call(null,chunk__32228,i__32230);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32231_32239 = cljs.core.seq.call(null,requires);
var chunk__32232_32240 = null;
var count__32233_32241 = (0);
var i__32234_32242 = (0);
while(true){
if((i__32234_32242 < count__32233_32241)){
var req_32243 = cljs.core._nth.call(null,chunk__32232_32240,i__32234_32242);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32243,prov);

var G__32244 = seq__32231_32239;
var G__32245 = chunk__32232_32240;
var G__32246 = count__32233_32241;
var G__32247 = (i__32234_32242 + (1));
seq__32231_32239 = G__32244;
chunk__32232_32240 = G__32245;
count__32233_32241 = G__32246;
i__32234_32242 = G__32247;
continue;
} else {
var temp__4657__auto___32248 = cljs.core.seq.call(null,seq__32231_32239);
if(temp__4657__auto___32248){
var seq__32231_32249__$1 = temp__4657__auto___32248;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32231_32249__$1)){
var c__25601__auto___32250 = cljs.core.chunk_first.call(null,seq__32231_32249__$1);
var G__32251 = cljs.core.chunk_rest.call(null,seq__32231_32249__$1);
var G__32252 = c__25601__auto___32250;
var G__32253 = cljs.core.count.call(null,c__25601__auto___32250);
var G__32254 = (0);
seq__32231_32239 = G__32251;
chunk__32232_32240 = G__32252;
count__32233_32241 = G__32253;
i__32234_32242 = G__32254;
continue;
} else {
var req_32255 = cljs.core.first.call(null,seq__32231_32249__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32255,prov);

var G__32256 = cljs.core.next.call(null,seq__32231_32249__$1);
var G__32257 = null;
var G__32258 = (0);
var G__32259 = (0);
seq__32231_32239 = G__32256;
chunk__32232_32240 = G__32257;
count__32233_32241 = G__32258;
i__32234_32242 = G__32259;
continue;
}
} else {
}
}
break;
}

var G__32260 = seq__32227;
var G__32261 = chunk__32228;
var G__32262 = count__32229;
var G__32263 = (i__32230 + (1));
seq__32227 = G__32260;
chunk__32228 = G__32261;
count__32229 = G__32262;
i__32230 = G__32263;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32227);
if(temp__4657__auto__){
var seq__32227__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32227__$1)){
var c__25601__auto__ = cljs.core.chunk_first.call(null,seq__32227__$1);
var G__32264 = cljs.core.chunk_rest.call(null,seq__32227__$1);
var G__32265 = c__25601__auto__;
var G__32266 = cljs.core.count.call(null,c__25601__auto__);
var G__32267 = (0);
seq__32227 = G__32264;
chunk__32228 = G__32265;
count__32229 = G__32266;
i__32230 = G__32267;
continue;
} else {
var prov = cljs.core.first.call(null,seq__32227__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32235_32268 = cljs.core.seq.call(null,requires);
var chunk__32236_32269 = null;
var count__32237_32270 = (0);
var i__32238_32271 = (0);
while(true){
if((i__32238_32271 < count__32237_32270)){
var req_32272 = cljs.core._nth.call(null,chunk__32236_32269,i__32238_32271);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32272,prov);

var G__32273 = seq__32235_32268;
var G__32274 = chunk__32236_32269;
var G__32275 = count__32237_32270;
var G__32276 = (i__32238_32271 + (1));
seq__32235_32268 = G__32273;
chunk__32236_32269 = G__32274;
count__32237_32270 = G__32275;
i__32238_32271 = G__32276;
continue;
} else {
var temp__4657__auto___32277__$1 = cljs.core.seq.call(null,seq__32235_32268);
if(temp__4657__auto___32277__$1){
var seq__32235_32278__$1 = temp__4657__auto___32277__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32235_32278__$1)){
var c__25601__auto___32279 = cljs.core.chunk_first.call(null,seq__32235_32278__$1);
var G__32280 = cljs.core.chunk_rest.call(null,seq__32235_32278__$1);
var G__32281 = c__25601__auto___32279;
var G__32282 = cljs.core.count.call(null,c__25601__auto___32279);
var G__32283 = (0);
seq__32235_32268 = G__32280;
chunk__32236_32269 = G__32281;
count__32237_32270 = G__32282;
i__32238_32271 = G__32283;
continue;
} else {
var req_32284 = cljs.core.first.call(null,seq__32235_32278__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32284,prov);

var G__32285 = cljs.core.next.call(null,seq__32235_32278__$1);
var G__32286 = null;
var G__32287 = (0);
var G__32288 = (0);
seq__32235_32268 = G__32285;
chunk__32236_32269 = G__32286;
count__32237_32270 = G__32287;
i__32238_32271 = G__32288;
continue;
}
} else {
}
}
break;
}

var G__32289 = cljs.core.next.call(null,seq__32227__$1);
var G__32290 = null;
var G__32291 = (0);
var G__32292 = (0);
seq__32227 = G__32289;
chunk__32228 = G__32290;
count__32229 = G__32291;
i__32230 = G__32292;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__32297_32301 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__32298_32302 = null;
var count__32299_32303 = (0);
var i__32300_32304 = (0);
while(true){
if((i__32300_32304 < count__32299_32303)){
var ns_32305 = cljs.core._nth.call(null,chunk__32298_32302,i__32300_32304);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32305);

var G__32306 = seq__32297_32301;
var G__32307 = chunk__32298_32302;
var G__32308 = count__32299_32303;
var G__32309 = (i__32300_32304 + (1));
seq__32297_32301 = G__32306;
chunk__32298_32302 = G__32307;
count__32299_32303 = G__32308;
i__32300_32304 = G__32309;
continue;
} else {
var temp__4657__auto___32310 = cljs.core.seq.call(null,seq__32297_32301);
if(temp__4657__auto___32310){
var seq__32297_32311__$1 = temp__4657__auto___32310;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32297_32311__$1)){
var c__25601__auto___32312 = cljs.core.chunk_first.call(null,seq__32297_32311__$1);
var G__32313 = cljs.core.chunk_rest.call(null,seq__32297_32311__$1);
var G__32314 = c__25601__auto___32312;
var G__32315 = cljs.core.count.call(null,c__25601__auto___32312);
var G__32316 = (0);
seq__32297_32301 = G__32313;
chunk__32298_32302 = G__32314;
count__32299_32303 = G__32315;
i__32300_32304 = G__32316;
continue;
} else {
var ns_32317 = cljs.core.first.call(null,seq__32297_32311__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32317);

var G__32318 = cljs.core.next.call(null,seq__32297_32311__$1);
var G__32319 = null;
var G__32320 = (0);
var G__32321 = (0);
seq__32297_32301 = G__32318;
chunk__32298_32302 = G__32319;
count__32299_32303 = G__32320;
i__32300_32304 = G__32321;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__24790__auto__ = goog.require__;
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__32322__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__32322 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32323__i = 0, G__32323__a = new Array(arguments.length -  0);
while (G__32323__i < G__32323__a.length) {G__32323__a[G__32323__i] = arguments[G__32323__i + 0]; ++G__32323__i;}
  args = new cljs.core.IndexedSeq(G__32323__a,0);
} 
return G__32322__delegate.call(this,args);};
G__32322.cljs$lang$maxFixedArity = 0;
G__32322.cljs$lang$applyTo = (function (arglist__32324){
var args = cljs.core.seq(arglist__32324);
return G__32322__delegate(args);
});
G__32322.cljs$core$IFn$_invoke$arity$variadic = G__32322__delegate;
return G__32322;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__32326 = cljs.core._EQ_;
var expr__32327 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__32326.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__32327))){
var path_parts = ((function (pred__32326,expr__32327){
return (function (p1__32325_SHARP_){
return clojure.string.split.call(null,p1__32325_SHARP_,/[\/\\]/);
});})(pred__32326,expr__32327))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__32326,expr__32327){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e32329){if((e32329 instanceof Error)){
var e = e32329;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32329;

}
}})());
});
;})(path_parts,sep,root,pred__32326,expr__32327))
} else {
if(cljs.core.truth_(pred__32326.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__32327))){
return ((function (pred__32326,expr__32327){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__32326,expr__32327){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__32326,expr__32327))
);

return deferred.addErrback(((function (deferred,pred__32326,expr__32327){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__32326,expr__32327))
);
});
;})(pred__32326,expr__32327))
} else {
return ((function (pred__32326,expr__32327){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__32326,expr__32327))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__32330,callback){
var map__32333 = p__32330;
var map__32333__$1 = ((((!((map__32333 == null)))?((((map__32333.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32333.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32333):map__32333);
var file_msg = map__32333__$1;
var request_url = cljs.core.get.call(null,map__32333__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__32333,map__32333__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__32333,map__32333__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__28082__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28082__auto__){
return (function (){
var f__28083__auto__ = (function (){var switch__27970__auto__ = ((function (c__28082__auto__){
return (function (state_32357){
var state_val_32358 = (state_32357[(1)]);
if((state_val_32358 === (7))){
var inst_32353 = (state_32357[(2)]);
var state_32357__$1 = state_32357;
var statearr_32359_32379 = state_32357__$1;
(statearr_32359_32379[(2)] = inst_32353);

(statearr_32359_32379[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32358 === (1))){
var state_32357__$1 = state_32357;
var statearr_32360_32380 = state_32357__$1;
(statearr_32360_32380[(2)] = null);

(statearr_32360_32380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32358 === (4))){
var inst_32337 = (state_32357[(7)]);
var inst_32337__$1 = (state_32357[(2)]);
var state_32357__$1 = (function (){var statearr_32361 = state_32357;
(statearr_32361[(7)] = inst_32337__$1);

return statearr_32361;
})();
if(cljs.core.truth_(inst_32337__$1)){
var statearr_32362_32381 = state_32357__$1;
(statearr_32362_32381[(1)] = (5));

} else {
var statearr_32363_32382 = state_32357__$1;
(statearr_32363_32382[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32358 === (6))){
var state_32357__$1 = state_32357;
var statearr_32364_32383 = state_32357__$1;
(statearr_32364_32383[(2)] = null);

(statearr_32364_32383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32358 === (3))){
var inst_32355 = (state_32357[(2)]);
var state_32357__$1 = state_32357;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32357__$1,inst_32355);
} else {
if((state_val_32358 === (2))){
var state_32357__$1 = state_32357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32357__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_32358 === (11))){
var inst_32349 = (state_32357[(2)]);
var state_32357__$1 = (function (){var statearr_32365 = state_32357;
(statearr_32365[(8)] = inst_32349);

return statearr_32365;
})();
var statearr_32366_32384 = state_32357__$1;
(statearr_32366_32384[(2)] = null);

(statearr_32366_32384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32358 === (9))){
var inst_32343 = (state_32357[(9)]);
var inst_32341 = (state_32357[(10)]);
var inst_32345 = inst_32343.call(null,inst_32341);
var state_32357__$1 = state_32357;
var statearr_32367_32385 = state_32357__$1;
(statearr_32367_32385[(2)] = inst_32345);

(statearr_32367_32385[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32358 === (5))){
var inst_32337 = (state_32357[(7)]);
var inst_32339 = figwheel.client.file_reloading.blocking_load.call(null,inst_32337);
var state_32357__$1 = state_32357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32357__$1,(8),inst_32339);
} else {
if((state_val_32358 === (10))){
var inst_32341 = (state_32357[(10)]);
var inst_32347 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_32341);
var state_32357__$1 = state_32357;
var statearr_32368_32386 = state_32357__$1;
(statearr_32368_32386[(2)] = inst_32347);

(statearr_32368_32386[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32358 === (8))){
var inst_32337 = (state_32357[(7)]);
var inst_32343 = (state_32357[(9)]);
var inst_32341 = (state_32357[(2)]);
var inst_32342 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_32343__$1 = cljs.core.get.call(null,inst_32342,inst_32337);
var state_32357__$1 = (function (){var statearr_32369 = state_32357;
(statearr_32369[(9)] = inst_32343__$1);

(statearr_32369[(10)] = inst_32341);

return statearr_32369;
})();
if(cljs.core.truth_(inst_32343__$1)){
var statearr_32370_32387 = state_32357__$1;
(statearr_32370_32387[(1)] = (9));

} else {
var statearr_32371_32388 = state_32357__$1;
(statearr_32371_32388[(1)] = (10));

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
});})(c__28082__auto__))
;
return ((function (switch__27970__auto__,c__28082__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27971__auto__ = null;
var figwheel$client$file_reloading$state_machine__27971__auto____0 = (function (){
var statearr_32375 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32375[(0)] = figwheel$client$file_reloading$state_machine__27971__auto__);

(statearr_32375[(1)] = (1));

return statearr_32375;
});
var figwheel$client$file_reloading$state_machine__27971__auto____1 = (function (state_32357){
while(true){
var ret_value__27972__auto__ = (function (){try{while(true){
var result__27973__auto__ = switch__27970__auto__.call(null,state_32357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27973__auto__;
}
break;
}
}catch (e32376){if((e32376 instanceof Object)){
var ex__27974__auto__ = e32376;
var statearr_32377_32389 = state_32357;
(statearr_32377_32389[(5)] = ex__27974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32376;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32390 = state_32357;
state_32357 = G__32390;
continue;
} else {
return ret_value__27972__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27971__auto__ = function(state_32357){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27971__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27971__auto____1.call(this,state_32357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27971__auto____0;
figwheel$client$file_reloading$state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27971__auto____1;
return figwheel$client$file_reloading$state_machine__27971__auto__;
})()
;})(switch__27970__auto__,c__28082__auto__))
})();
var state__28084__auto__ = (function (){var statearr_32378 = f__28083__auto__.call(null);
(statearr_32378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28082__auto__);

return statearr_32378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28084__auto__);
});})(c__28082__auto__))
);

return c__28082__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__32391,callback){
var map__32394 = p__32391;
var map__32394__$1 = ((((!((map__32394 == null)))?((((map__32394.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32394.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32394):map__32394);
var file_msg = map__32394__$1;
var namespace = cljs.core.get.call(null,map__32394__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__32394,map__32394__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__32394,map__32394__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__32396){
var map__32399 = p__32396;
var map__32399__$1 = ((((!((map__32399 == null)))?((((map__32399.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32399.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32399):map__32399);
var file_msg = map__32399__$1;
var namespace = cljs.core.get.call(null,map__32399__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24778__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__24778__auto__){
var or__24790__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
var or__24790__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24790__auto____$1)){
return or__24790__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24778__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__32401,callback){
var map__32404 = p__32401;
var map__32404__$1 = ((((!((map__32404 == null)))?((((map__32404.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32404.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32404):map__32404);
var file_msg = map__32404__$1;
var request_url = cljs.core.get.call(null,map__32404__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__32404__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__28082__auto___32508 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28082__auto___32508,out){
return (function (){
var f__28083__auto__ = (function (){var switch__27970__auto__ = ((function (c__28082__auto___32508,out){
return (function (state_32490){
var state_val_32491 = (state_32490[(1)]);
if((state_val_32491 === (1))){
var inst_32464 = cljs.core.seq.call(null,files);
var inst_32465 = cljs.core.first.call(null,inst_32464);
var inst_32466 = cljs.core.next.call(null,inst_32464);
var inst_32467 = files;
var state_32490__$1 = (function (){var statearr_32492 = state_32490;
(statearr_32492[(7)] = inst_32465);

(statearr_32492[(8)] = inst_32467);

(statearr_32492[(9)] = inst_32466);

return statearr_32492;
})();
var statearr_32493_32509 = state_32490__$1;
(statearr_32493_32509[(2)] = null);

(statearr_32493_32509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32491 === (2))){
var inst_32473 = (state_32490[(10)]);
var inst_32467 = (state_32490[(8)]);
var inst_32472 = cljs.core.seq.call(null,inst_32467);
var inst_32473__$1 = cljs.core.first.call(null,inst_32472);
var inst_32474 = cljs.core.next.call(null,inst_32472);
var inst_32475 = (inst_32473__$1 == null);
var inst_32476 = cljs.core.not.call(null,inst_32475);
var state_32490__$1 = (function (){var statearr_32494 = state_32490;
(statearr_32494[(11)] = inst_32474);

(statearr_32494[(10)] = inst_32473__$1);

return statearr_32494;
})();
if(inst_32476){
var statearr_32495_32510 = state_32490__$1;
(statearr_32495_32510[(1)] = (4));

} else {
var statearr_32496_32511 = state_32490__$1;
(statearr_32496_32511[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32491 === (3))){
var inst_32488 = (state_32490[(2)]);
var state_32490__$1 = state_32490;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32490__$1,inst_32488);
} else {
if((state_val_32491 === (4))){
var inst_32473 = (state_32490[(10)]);
var inst_32478 = figwheel.client.file_reloading.reload_js_file.call(null,inst_32473);
var state_32490__$1 = state_32490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32490__$1,(7),inst_32478);
} else {
if((state_val_32491 === (5))){
var inst_32484 = cljs.core.async.close_BANG_.call(null,out);
var state_32490__$1 = state_32490;
var statearr_32497_32512 = state_32490__$1;
(statearr_32497_32512[(2)] = inst_32484);

(statearr_32497_32512[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32491 === (6))){
var inst_32486 = (state_32490[(2)]);
var state_32490__$1 = state_32490;
var statearr_32498_32513 = state_32490__$1;
(statearr_32498_32513[(2)] = inst_32486);

(statearr_32498_32513[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32491 === (7))){
var inst_32474 = (state_32490[(11)]);
var inst_32480 = (state_32490[(2)]);
var inst_32481 = cljs.core.async.put_BANG_.call(null,out,inst_32480);
var inst_32467 = inst_32474;
var state_32490__$1 = (function (){var statearr_32499 = state_32490;
(statearr_32499[(8)] = inst_32467);

(statearr_32499[(12)] = inst_32481);

return statearr_32499;
})();
var statearr_32500_32514 = state_32490__$1;
(statearr_32500_32514[(2)] = null);

(statearr_32500_32514[(1)] = (2));


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
});})(c__28082__auto___32508,out))
;
return ((function (switch__27970__auto__,c__28082__auto___32508,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27971__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27971__auto____0 = (function (){
var statearr_32504 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32504[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27971__auto__);

(statearr_32504[(1)] = (1));

return statearr_32504;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27971__auto____1 = (function (state_32490){
while(true){
var ret_value__27972__auto__ = (function (){try{while(true){
var result__27973__auto__ = switch__27970__auto__.call(null,state_32490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27973__auto__;
}
break;
}
}catch (e32505){if((e32505 instanceof Object)){
var ex__27974__auto__ = e32505;
var statearr_32506_32515 = state_32490;
(statearr_32506_32515[(5)] = ex__27974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32516 = state_32490;
state_32490 = G__32516;
continue;
} else {
return ret_value__27972__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27971__auto__ = function(state_32490){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27971__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27971__auto____1.call(this,state_32490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27971__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27971__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27971__auto__;
})()
;})(switch__27970__auto__,c__28082__auto___32508,out))
})();
var state__28084__auto__ = (function (){var statearr_32507 = f__28083__auto__.call(null);
(statearr_32507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28082__auto___32508);

return statearr_32507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28084__auto__);
});})(c__28082__auto___32508,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__32517,opts){
var map__32521 = p__32517;
var map__32521__$1 = ((((!((map__32521 == null)))?((((map__32521.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32521.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32521):map__32521);
var eval_body__$1 = cljs.core.get.call(null,map__32521__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__32521__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24778__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24778__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24778__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e32523){var e = e32523;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__32524_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32524_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__32533){
var vec__32534 = p__32533;
var k = cljs.core.nth.call(null,vec__32534,(0),null);
var v = cljs.core.nth.call(null,vec__32534,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__32537){
var vec__32538 = p__32537;
var k = cljs.core.nth.call(null,vec__32538,(0),null);
var v = cljs.core.nth.call(null,vec__32538,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__32544,p__32545){
var map__32792 = p__32544;
var map__32792__$1 = ((((!((map__32792 == null)))?((((map__32792.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32792.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32792):map__32792);
var opts = map__32792__$1;
var before_jsload = cljs.core.get.call(null,map__32792__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__32792__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__32792__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__32793 = p__32545;
var map__32793__$1 = ((((!((map__32793 == null)))?((((map__32793.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32793.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32793):map__32793);
var msg = map__32793__$1;
var files = cljs.core.get.call(null,map__32793__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__32793__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__32793__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28082__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28082__auto__,map__32792,map__32792__$1,opts,before_jsload,on_jsload,reload_dependents,map__32793,map__32793__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28083__auto__ = (function (){var switch__27970__auto__ = ((function (c__28082__auto__,map__32792,map__32792__$1,opts,before_jsload,on_jsload,reload_dependents,map__32793,map__32793__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_32946){
var state_val_32947 = (state_32946[(1)]);
if((state_val_32947 === (7))){
var inst_32807 = (state_32946[(7)]);
var inst_32810 = (state_32946[(8)]);
var inst_32809 = (state_32946[(9)]);
var inst_32808 = (state_32946[(10)]);
var inst_32815 = cljs.core._nth.call(null,inst_32808,inst_32810);
var inst_32816 = figwheel.client.file_reloading.eval_body.call(null,inst_32815,opts);
var inst_32817 = (inst_32810 + (1));
var tmp32948 = inst_32807;
var tmp32949 = inst_32809;
var tmp32950 = inst_32808;
var inst_32807__$1 = tmp32948;
var inst_32808__$1 = tmp32950;
var inst_32809__$1 = tmp32949;
var inst_32810__$1 = inst_32817;
var state_32946__$1 = (function (){var statearr_32951 = state_32946;
(statearr_32951[(7)] = inst_32807__$1);

(statearr_32951[(8)] = inst_32810__$1);

(statearr_32951[(9)] = inst_32809__$1);

(statearr_32951[(10)] = inst_32808__$1);

(statearr_32951[(11)] = inst_32816);

return statearr_32951;
})();
var statearr_32952_33038 = state_32946__$1;
(statearr_32952_33038[(2)] = null);

(statearr_32952_33038[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (20))){
var inst_32850 = (state_32946[(12)]);
var inst_32858 = figwheel.client.file_reloading.sort_files.call(null,inst_32850);
var state_32946__$1 = state_32946;
var statearr_32953_33039 = state_32946__$1;
(statearr_32953_33039[(2)] = inst_32858);

(statearr_32953_33039[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (27))){
var state_32946__$1 = state_32946;
var statearr_32954_33040 = state_32946__$1;
(statearr_32954_33040[(2)] = null);

(statearr_32954_33040[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (1))){
var inst_32799 = (state_32946[(13)]);
var inst_32796 = before_jsload.call(null,files);
var inst_32797 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_32798 = (function (){return ((function (inst_32799,inst_32796,inst_32797,state_val_32947,c__28082__auto__,map__32792,map__32792__$1,opts,before_jsload,on_jsload,reload_dependents,map__32793,map__32793__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32541_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32541_SHARP_);
});
;})(inst_32799,inst_32796,inst_32797,state_val_32947,c__28082__auto__,map__32792,map__32792__$1,opts,before_jsload,on_jsload,reload_dependents,map__32793,map__32793__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32799__$1 = cljs.core.filter.call(null,inst_32798,files);
var inst_32800 = cljs.core.not_empty.call(null,inst_32799__$1);
var state_32946__$1 = (function (){var statearr_32955 = state_32946;
(statearr_32955[(13)] = inst_32799__$1);

(statearr_32955[(14)] = inst_32797);

(statearr_32955[(15)] = inst_32796);

return statearr_32955;
})();
if(cljs.core.truth_(inst_32800)){
var statearr_32956_33041 = state_32946__$1;
(statearr_32956_33041[(1)] = (2));

} else {
var statearr_32957_33042 = state_32946__$1;
(statearr_32957_33042[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (24))){
var state_32946__$1 = state_32946;
var statearr_32958_33043 = state_32946__$1;
(statearr_32958_33043[(2)] = null);

(statearr_32958_33043[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (39))){
var inst_32900 = (state_32946[(16)]);
var state_32946__$1 = state_32946;
var statearr_32959_33044 = state_32946__$1;
(statearr_32959_33044[(2)] = inst_32900);

(statearr_32959_33044[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (46))){
var inst_32941 = (state_32946[(2)]);
var state_32946__$1 = state_32946;
var statearr_32960_33045 = state_32946__$1;
(statearr_32960_33045[(2)] = inst_32941);

(statearr_32960_33045[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (4))){
var inst_32844 = (state_32946[(2)]);
var inst_32845 = cljs.core.List.EMPTY;
var inst_32846 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_32845);
var inst_32847 = (function (){return ((function (inst_32844,inst_32845,inst_32846,state_val_32947,c__28082__auto__,map__32792,map__32792__$1,opts,before_jsload,on_jsload,reload_dependents,map__32793,map__32793__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32542_SHARP_){
var and__24778__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32542_SHARP_);
if(cljs.core.truth_(and__24778__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32542_SHARP_));
} else {
return and__24778__auto__;
}
});
;})(inst_32844,inst_32845,inst_32846,state_val_32947,c__28082__auto__,map__32792,map__32792__$1,opts,before_jsload,on_jsload,reload_dependents,map__32793,map__32793__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32848 = cljs.core.filter.call(null,inst_32847,files);
var inst_32849 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_32850 = cljs.core.concat.call(null,inst_32848,inst_32849);
var state_32946__$1 = (function (){var statearr_32961 = state_32946;
(statearr_32961[(17)] = inst_32846);

(statearr_32961[(12)] = inst_32850);

(statearr_32961[(18)] = inst_32844);

return statearr_32961;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_32962_33046 = state_32946__$1;
(statearr_32962_33046[(1)] = (16));

} else {
var statearr_32963_33047 = state_32946__$1;
(statearr_32963_33047[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (15))){
var inst_32834 = (state_32946[(2)]);
var state_32946__$1 = state_32946;
var statearr_32964_33048 = state_32946__$1;
(statearr_32964_33048[(2)] = inst_32834);

(statearr_32964_33048[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (21))){
var inst_32860 = (state_32946[(19)]);
var inst_32860__$1 = (state_32946[(2)]);
var inst_32861 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_32860__$1);
var state_32946__$1 = (function (){var statearr_32965 = state_32946;
(statearr_32965[(19)] = inst_32860__$1);

return statearr_32965;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32946__$1,(22),inst_32861);
} else {
if((state_val_32947 === (31))){
var inst_32944 = (state_32946[(2)]);
var state_32946__$1 = state_32946;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32946__$1,inst_32944);
} else {
if((state_val_32947 === (32))){
var inst_32900 = (state_32946[(16)]);
var inst_32905 = inst_32900.cljs$lang$protocol_mask$partition0$;
var inst_32906 = (inst_32905 & (64));
var inst_32907 = inst_32900.cljs$core$ISeq$;
var inst_32908 = (inst_32906) || (inst_32907);
var state_32946__$1 = state_32946;
if(cljs.core.truth_(inst_32908)){
var statearr_32966_33049 = state_32946__$1;
(statearr_32966_33049[(1)] = (35));

} else {
var statearr_32967_33050 = state_32946__$1;
(statearr_32967_33050[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (40))){
var inst_32921 = (state_32946[(20)]);
var inst_32920 = (state_32946[(2)]);
var inst_32921__$1 = cljs.core.get.call(null,inst_32920,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_32922 = cljs.core.get.call(null,inst_32920,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_32923 = cljs.core.not_empty.call(null,inst_32921__$1);
var state_32946__$1 = (function (){var statearr_32968 = state_32946;
(statearr_32968[(20)] = inst_32921__$1);

(statearr_32968[(21)] = inst_32922);

return statearr_32968;
})();
if(cljs.core.truth_(inst_32923)){
var statearr_32969_33051 = state_32946__$1;
(statearr_32969_33051[(1)] = (41));

} else {
var statearr_32970_33052 = state_32946__$1;
(statearr_32970_33052[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (33))){
var state_32946__$1 = state_32946;
var statearr_32971_33053 = state_32946__$1;
(statearr_32971_33053[(2)] = false);

(statearr_32971_33053[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (13))){
var inst_32820 = (state_32946[(22)]);
var inst_32824 = cljs.core.chunk_first.call(null,inst_32820);
var inst_32825 = cljs.core.chunk_rest.call(null,inst_32820);
var inst_32826 = cljs.core.count.call(null,inst_32824);
var inst_32807 = inst_32825;
var inst_32808 = inst_32824;
var inst_32809 = inst_32826;
var inst_32810 = (0);
var state_32946__$1 = (function (){var statearr_32972 = state_32946;
(statearr_32972[(7)] = inst_32807);

(statearr_32972[(8)] = inst_32810);

(statearr_32972[(9)] = inst_32809);

(statearr_32972[(10)] = inst_32808);

return statearr_32972;
})();
var statearr_32973_33054 = state_32946__$1;
(statearr_32973_33054[(2)] = null);

(statearr_32973_33054[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (22))){
var inst_32864 = (state_32946[(23)]);
var inst_32868 = (state_32946[(24)]);
var inst_32860 = (state_32946[(19)]);
var inst_32863 = (state_32946[(25)]);
var inst_32863__$1 = (state_32946[(2)]);
var inst_32864__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32863__$1);
var inst_32865 = (function (){var all_files = inst_32860;
var res_SINGLEQUOTE_ = inst_32863__$1;
var res = inst_32864__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_32864,inst_32868,inst_32860,inst_32863,inst_32863__$1,inst_32864__$1,state_val_32947,c__28082__auto__,map__32792,map__32792__$1,opts,before_jsload,on_jsload,reload_dependents,map__32793,map__32793__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32543_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__32543_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_32864,inst_32868,inst_32860,inst_32863,inst_32863__$1,inst_32864__$1,state_val_32947,c__28082__auto__,map__32792,map__32792__$1,opts,before_jsload,on_jsload,reload_dependents,map__32793,map__32793__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32866 = cljs.core.filter.call(null,inst_32865,inst_32863__$1);
var inst_32867 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_32868__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32867);
var inst_32869 = cljs.core.not_empty.call(null,inst_32868__$1);
var state_32946__$1 = (function (){var statearr_32974 = state_32946;
(statearr_32974[(26)] = inst_32866);

(statearr_32974[(23)] = inst_32864__$1);

(statearr_32974[(24)] = inst_32868__$1);

(statearr_32974[(25)] = inst_32863__$1);

return statearr_32974;
})();
if(cljs.core.truth_(inst_32869)){
var statearr_32975_33055 = state_32946__$1;
(statearr_32975_33055[(1)] = (23));

} else {
var statearr_32976_33056 = state_32946__$1;
(statearr_32976_33056[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (36))){
var state_32946__$1 = state_32946;
var statearr_32977_33057 = state_32946__$1;
(statearr_32977_33057[(2)] = false);

(statearr_32977_33057[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (41))){
var inst_32921 = (state_32946[(20)]);
var inst_32925 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_32926 = cljs.core.map.call(null,inst_32925,inst_32921);
var inst_32927 = cljs.core.pr_str.call(null,inst_32926);
var inst_32928 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_32927)].join('');
var inst_32929 = figwheel.client.utils.log.call(null,inst_32928);
var state_32946__$1 = state_32946;
var statearr_32978_33058 = state_32946__$1;
(statearr_32978_33058[(2)] = inst_32929);

(statearr_32978_33058[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (43))){
var inst_32922 = (state_32946[(21)]);
var inst_32932 = (state_32946[(2)]);
var inst_32933 = cljs.core.not_empty.call(null,inst_32922);
var state_32946__$1 = (function (){var statearr_32979 = state_32946;
(statearr_32979[(27)] = inst_32932);

return statearr_32979;
})();
if(cljs.core.truth_(inst_32933)){
var statearr_32980_33059 = state_32946__$1;
(statearr_32980_33059[(1)] = (44));

} else {
var statearr_32981_33060 = state_32946__$1;
(statearr_32981_33060[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (29))){
var inst_32866 = (state_32946[(26)]);
var inst_32864 = (state_32946[(23)]);
var inst_32868 = (state_32946[(24)]);
var inst_32860 = (state_32946[(19)]);
var inst_32863 = (state_32946[(25)]);
var inst_32900 = (state_32946[(16)]);
var inst_32896 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_32899 = (function (){var all_files = inst_32860;
var res_SINGLEQUOTE_ = inst_32863;
var res = inst_32864;
var files_not_loaded = inst_32866;
var dependencies_that_loaded = inst_32868;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32866,inst_32864,inst_32868,inst_32860,inst_32863,inst_32900,inst_32896,state_val_32947,c__28082__auto__,map__32792,map__32792__$1,opts,before_jsload,on_jsload,reload_dependents,map__32793,map__32793__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32898){
var map__32982 = p__32898;
var map__32982__$1 = ((((!((map__32982 == null)))?((((map__32982.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32982.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32982):map__32982);
var namespace = cljs.core.get.call(null,map__32982__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32866,inst_32864,inst_32868,inst_32860,inst_32863,inst_32900,inst_32896,state_val_32947,c__28082__auto__,map__32792,map__32792__$1,opts,before_jsload,on_jsload,reload_dependents,map__32793,map__32793__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32900__$1 = cljs.core.group_by.call(null,inst_32899,inst_32866);
var inst_32902 = (inst_32900__$1 == null);
var inst_32903 = cljs.core.not.call(null,inst_32902);
var state_32946__$1 = (function (){var statearr_32984 = state_32946;
(statearr_32984[(16)] = inst_32900__$1);

(statearr_32984[(28)] = inst_32896);

return statearr_32984;
})();
if(inst_32903){
var statearr_32985_33061 = state_32946__$1;
(statearr_32985_33061[(1)] = (32));

} else {
var statearr_32986_33062 = state_32946__$1;
(statearr_32986_33062[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (44))){
var inst_32922 = (state_32946[(21)]);
var inst_32935 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32922);
var inst_32936 = cljs.core.pr_str.call(null,inst_32935);
var inst_32937 = [cljs.core.str("not required: "),cljs.core.str(inst_32936)].join('');
var inst_32938 = figwheel.client.utils.log.call(null,inst_32937);
var state_32946__$1 = state_32946;
var statearr_32987_33063 = state_32946__$1;
(statearr_32987_33063[(2)] = inst_32938);

(statearr_32987_33063[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (6))){
var inst_32841 = (state_32946[(2)]);
var state_32946__$1 = state_32946;
var statearr_32988_33064 = state_32946__$1;
(statearr_32988_33064[(2)] = inst_32841);

(statearr_32988_33064[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (28))){
var inst_32866 = (state_32946[(26)]);
var inst_32893 = (state_32946[(2)]);
var inst_32894 = cljs.core.not_empty.call(null,inst_32866);
var state_32946__$1 = (function (){var statearr_32989 = state_32946;
(statearr_32989[(29)] = inst_32893);

return statearr_32989;
})();
if(cljs.core.truth_(inst_32894)){
var statearr_32990_33065 = state_32946__$1;
(statearr_32990_33065[(1)] = (29));

} else {
var statearr_32991_33066 = state_32946__$1;
(statearr_32991_33066[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (25))){
var inst_32864 = (state_32946[(23)]);
var inst_32880 = (state_32946[(2)]);
var inst_32881 = cljs.core.not_empty.call(null,inst_32864);
var state_32946__$1 = (function (){var statearr_32992 = state_32946;
(statearr_32992[(30)] = inst_32880);

return statearr_32992;
})();
if(cljs.core.truth_(inst_32881)){
var statearr_32993_33067 = state_32946__$1;
(statearr_32993_33067[(1)] = (26));

} else {
var statearr_32994_33068 = state_32946__$1;
(statearr_32994_33068[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (34))){
var inst_32915 = (state_32946[(2)]);
var state_32946__$1 = state_32946;
if(cljs.core.truth_(inst_32915)){
var statearr_32995_33069 = state_32946__$1;
(statearr_32995_33069[(1)] = (38));

} else {
var statearr_32996_33070 = state_32946__$1;
(statearr_32996_33070[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (17))){
var state_32946__$1 = state_32946;
var statearr_32997_33071 = state_32946__$1;
(statearr_32997_33071[(2)] = recompile_dependents);

(statearr_32997_33071[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (3))){
var state_32946__$1 = state_32946;
var statearr_32998_33072 = state_32946__$1;
(statearr_32998_33072[(2)] = null);

(statearr_32998_33072[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (12))){
var inst_32837 = (state_32946[(2)]);
var state_32946__$1 = state_32946;
var statearr_32999_33073 = state_32946__$1;
(statearr_32999_33073[(2)] = inst_32837);

(statearr_32999_33073[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (2))){
var inst_32799 = (state_32946[(13)]);
var inst_32806 = cljs.core.seq.call(null,inst_32799);
var inst_32807 = inst_32806;
var inst_32808 = null;
var inst_32809 = (0);
var inst_32810 = (0);
var state_32946__$1 = (function (){var statearr_33000 = state_32946;
(statearr_33000[(7)] = inst_32807);

(statearr_33000[(8)] = inst_32810);

(statearr_33000[(9)] = inst_32809);

(statearr_33000[(10)] = inst_32808);

return statearr_33000;
})();
var statearr_33001_33074 = state_32946__$1;
(statearr_33001_33074[(2)] = null);

(statearr_33001_33074[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (23))){
var inst_32866 = (state_32946[(26)]);
var inst_32864 = (state_32946[(23)]);
var inst_32868 = (state_32946[(24)]);
var inst_32860 = (state_32946[(19)]);
var inst_32863 = (state_32946[(25)]);
var inst_32871 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_32873 = (function (){var all_files = inst_32860;
var res_SINGLEQUOTE_ = inst_32863;
var res = inst_32864;
var files_not_loaded = inst_32866;
var dependencies_that_loaded = inst_32868;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32866,inst_32864,inst_32868,inst_32860,inst_32863,inst_32871,state_val_32947,c__28082__auto__,map__32792,map__32792__$1,opts,before_jsload,on_jsload,reload_dependents,map__32793,map__32793__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32872){
var map__33002 = p__32872;
var map__33002__$1 = ((((!((map__33002 == null)))?((((map__33002.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33002.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33002):map__33002);
var request_url = cljs.core.get.call(null,map__33002__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32866,inst_32864,inst_32868,inst_32860,inst_32863,inst_32871,state_val_32947,c__28082__auto__,map__32792,map__32792__$1,opts,before_jsload,on_jsload,reload_dependents,map__32793,map__32793__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32874 = cljs.core.reverse.call(null,inst_32868);
var inst_32875 = cljs.core.map.call(null,inst_32873,inst_32874);
var inst_32876 = cljs.core.pr_str.call(null,inst_32875);
var inst_32877 = figwheel.client.utils.log.call(null,inst_32876);
var state_32946__$1 = (function (){var statearr_33004 = state_32946;
(statearr_33004[(31)] = inst_32871);

return statearr_33004;
})();
var statearr_33005_33075 = state_32946__$1;
(statearr_33005_33075[(2)] = inst_32877);

(statearr_33005_33075[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (35))){
var state_32946__$1 = state_32946;
var statearr_33006_33076 = state_32946__$1;
(statearr_33006_33076[(2)] = true);

(statearr_33006_33076[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (19))){
var inst_32850 = (state_32946[(12)]);
var inst_32856 = figwheel.client.file_reloading.expand_files.call(null,inst_32850);
var state_32946__$1 = state_32946;
var statearr_33007_33077 = state_32946__$1;
(statearr_33007_33077[(2)] = inst_32856);

(statearr_33007_33077[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (11))){
var state_32946__$1 = state_32946;
var statearr_33008_33078 = state_32946__$1;
(statearr_33008_33078[(2)] = null);

(statearr_33008_33078[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (9))){
var inst_32839 = (state_32946[(2)]);
var state_32946__$1 = state_32946;
var statearr_33009_33079 = state_32946__$1;
(statearr_33009_33079[(2)] = inst_32839);

(statearr_33009_33079[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (5))){
var inst_32810 = (state_32946[(8)]);
var inst_32809 = (state_32946[(9)]);
var inst_32812 = (inst_32810 < inst_32809);
var inst_32813 = inst_32812;
var state_32946__$1 = state_32946;
if(cljs.core.truth_(inst_32813)){
var statearr_33010_33080 = state_32946__$1;
(statearr_33010_33080[(1)] = (7));

} else {
var statearr_33011_33081 = state_32946__$1;
(statearr_33011_33081[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (14))){
var inst_32820 = (state_32946[(22)]);
var inst_32829 = cljs.core.first.call(null,inst_32820);
var inst_32830 = figwheel.client.file_reloading.eval_body.call(null,inst_32829,opts);
var inst_32831 = cljs.core.next.call(null,inst_32820);
var inst_32807 = inst_32831;
var inst_32808 = null;
var inst_32809 = (0);
var inst_32810 = (0);
var state_32946__$1 = (function (){var statearr_33012 = state_32946;
(statearr_33012[(7)] = inst_32807);

(statearr_33012[(32)] = inst_32830);

(statearr_33012[(8)] = inst_32810);

(statearr_33012[(9)] = inst_32809);

(statearr_33012[(10)] = inst_32808);

return statearr_33012;
})();
var statearr_33013_33082 = state_32946__$1;
(statearr_33013_33082[(2)] = null);

(statearr_33013_33082[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (45))){
var state_32946__$1 = state_32946;
var statearr_33014_33083 = state_32946__$1;
(statearr_33014_33083[(2)] = null);

(statearr_33014_33083[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (26))){
var inst_32866 = (state_32946[(26)]);
var inst_32864 = (state_32946[(23)]);
var inst_32868 = (state_32946[(24)]);
var inst_32860 = (state_32946[(19)]);
var inst_32863 = (state_32946[(25)]);
var inst_32883 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_32885 = (function (){var all_files = inst_32860;
var res_SINGLEQUOTE_ = inst_32863;
var res = inst_32864;
var files_not_loaded = inst_32866;
var dependencies_that_loaded = inst_32868;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32866,inst_32864,inst_32868,inst_32860,inst_32863,inst_32883,state_val_32947,c__28082__auto__,map__32792,map__32792__$1,opts,before_jsload,on_jsload,reload_dependents,map__32793,map__32793__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32884){
var map__33015 = p__32884;
var map__33015__$1 = ((((!((map__33015 == null)))?((((map__33015.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33015.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33015):map__33015);
var namespace = cljs.core.get.call(null,map__33015__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__33015__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32866,inst_32864,inst_32868,inst_32860,inst_32863,inst_32883,state_val_32947,c__28082__auto__,map__32792,map__32792__$1,opts,before_jsload,on_jsload,reload_dependents,map__32793,map__32793__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32886 = cljs.core.map.call(null,inst_32885,inst_32864);
var inst_32887 = cljs.core.pr_str.call(null,inst_32886);
var inst_32888 = figwheel.client.utils.log.call(null,inst_32887);
var inst_32889 = (function (){var all_files = inst_32860;
var res_SINGLEQUOTE_ = inst_32863;
var res = inst_32864;
var files_not_loaded = inst_32866;
var dependencies_that_loaded = inst_32868;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32866,inst_32864,inst_32868,inst_32860,inst_32863,inst_32883,inst_32885,inst_32886,inst_32887,inst_32888,state_val_32947,c__28082__auto__,map__32792,map__32792__$1,opts,before_jsload,on_jsload,reload_dependents,map__32793,map__32793__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32866,inst_32864,inst_32868,inst_32860,inst_32863,inst_32883,inst_32885,inst_32886,inst_32887,inst_32888,state_val_32947,c__28082__auto__,map__32792,map__32792__$1,opts,before_jsload,on_jsload,reload_dependents,map__32793,map__32793__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32890 = setTimeout(inst_32889,(10));
var state_32946__$1 = (function (){var statearr_33017 = state_32946;
(statearr_33017[(33)] = inst_32888);

(statearr_33017[(34)] = inst_32883);

return statearr_33017;
})();
var statearr_33018_33084 = state_32946__$1;
(statearr_33018_33084[(2)] = inst_32890);

(statearr_33018_33084[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (16))){
var state_32946__$1 = state_32946;
var statearr_33019_33085 = state_32946__$1;
(statearr_33019_33085[(2)] = reload_dependents);

(statearr_33019_33085[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (38))){
var inst_32900 = (state_32946[(16)]);
var inst_32917 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32900);
var state_32946__$1 = state_32946;
var statearr_33020_33086 = state_32946__$1;
(statearr_33020_33086[(2)] = inst_32917);

(statearr_33020_33086[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (30))){
var state_32946__$1 = state_32946;
var statearr_33021_33087 = state_32946__$1;
(statearr_33021_33087[(2)] = null);

(statearr_33021_33087[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (10))){
var inst_32820 = (state_32946[(22)]);
var inst_32822 = cljs.core.chunked_seq_QMARK_.call(null,inst_32820);
var state_32946__$1 = state_32946;
if(inst_32822){
var statearr_33022_33088 = state_32946__$1;
(statearr_33022_33088[(1)] = (13));

} else {
var statearr_33023_33089 = state_32946__$1;
(statearr_33023_33089[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (18))){
var inst_32854 = (state_32946[(2)]);
var state_32946__$1 = state_32946;
if(cljs.core.truth_(inst_32854)){
var statearr_33024_33090 = state_32946__$1;
(statearr_33024_33090[(1)] = (19));

} else {
var statearr_33025_33091 = state_32946__$1;
(statearr_33025_33091[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (42))){
var state_32946__$1 = state_32946;
var statearr_33026_33092 = state_32946__$1;
(statearr_33026_33092[(2)] = null);

(statearr_33026_33092[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (37))){
var inst_32912 = (state_32946[(2)]);
var state_32946__$1 = state_32946;
var statearr_33027_33093 = state_32946__$1;
(statearr_33027_33093[(2)] = inst_32912);

(statearr_33027_33093[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (8))){
var inst_32807 = (state_32946[(7)]);
var inst_32820 = (state_32946[(22)]);
var inst_32820__$1 = cljs.core.seq.call(null,inst_32807);
var state_32946__$1 = (function (){var statearr_33028 = state_32946;
(statearr_33028[(22)] = inst_32820__$1);

return statearr_33028;
})();
if(inst_32820__$1){
var statearr_33029_33094 = state_32946__$1;
(statearr_33029_33094[(1)] = (10));

} else {
var statearr_33030_33095 = state_32946__$1;
(statearr_33030_33095[(1)] = (11));

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
}
});})(c__28082__auto__,map__32792,map__32792__$1,opts,before_jsload,on_jsload,reload_dependents,map__32793,map__32793__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27970__auto__,c__28082__auto__,map__32792,map__32792__$1,opts,before_jsload,on_jsload,reload_dependents,map__32793,map__32793__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27971__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27971__auto____0 = (function (){
var statearr_33034 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33034[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27971__auto__);

(statearr_33034[(1)] = (1));

return statearr_33034;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27971__auto____1 = (function (state_32946){
while(true){
var ret_value__27972__auto__ = (function (){try{while(true){
var result__27973__auto__ = switch__27970__auto__.call(null,state_32946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27973__auto__;
}
break;
}
}catch (e33035){if((e33035 instanceof Object)){
var ex__27974__auto__ = e33035;
var statearr_33036_33096 = state_32946;
(statearr_33036_33096[(5)] = ex__27974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33097 = state_32946;
state_32946 = G__33097;
continue;
} else {
return ret_value__27972__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27971__auto__ = function(state_32946){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27971__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27971__auto____1.call(this,state_32946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27971__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27971__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27971__auto__;
})()
;})(switch__27970__auto__,c__28082__auto__,map__32792,map__32792__$1,opts,before_jsload,on_jsload,reload_dependents,map__32793,map__32793__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28084__auto__ = (function (){var statearr_33037 = f__28083__auto__.call(null);
(statearr_33037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28082__auto__);

return statearr_33037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28084__auto__);
});})(c__28082__auto__,map__32792,map__32792__$1,opts,before_jsload,on_jsload,reload_dependents,map__32793,map__32793__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28082__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__33100,link){
var map__33103 = p__33100;
var map__33103__$1 = ((((!((map__33103 == null)))?((((map__33103.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33103.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33103):map__33103);
var file = cljs.core.get.call(null,map__33103__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__33103,map__33103__$1,file){
return (function (p1__33098_SHARP_,p2__33099_SHARP_){
if(cljs.core._EQ_.call(null,p1__33098_SHARP_,p2__33099_SHARP_)){
return p1__33098_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__33103,map__33103__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__33109){
var map__33110 = p__33109;
var map__33110__$1 = ((((!((map__33110 == null)))?((((map__33110.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33110.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33110):map__33110);
var match_length = cljs.core.get.call(null,map__33110__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__33110__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__33105_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__33105_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args33112 = [];
var len__25865__auto___33115 = arguments.length;
var i__25866__auto___33116 = (0);
while(true){
if((i__25866__auto___33116 < len__25865__auto___33115)){
args33112.push((arguments[i__25866__auto___33116]));

var G__33117 = (i__25866__auto___33116 + (1));
i__25866__auto___33116 = G__33117;
continue;
} else {
}
break;
}

var G__33114 = args33112.length;
switch (G__33114) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33112.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__33119_SHARP_,p2__33120_SHARP_){
return cljs.core.assoc.call(null,p1__33119_SHARP_,cljs.core.get.call(null,p2__33120_SHARP_,key),p2__33120_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__33121){
var map__33124 = p__33121;
var map__33124__$1 = ((((!((map__33124 == null)))?((((map__33124.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33124.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33124):map__33124);
var f_data = map__33124__$1;
var file = cljs.core.get.call(null,map__33124__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__33126,p__33127){
var map__33136 = p__33126;
var map__33136__$1 = ((((!((map__33136 == null)))?((((map__33136.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33136.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33136):map__33136);
var opts = map__33136__$1;
var on_cssload = cljs.core.get.call(null,map__33136__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__33137 = p__33127;
var map__33137__$1 = ((((!((map__33137 == null)))?((((map__33137.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33137.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33137):map__33137);
var files_msg = map__33137__$1;
var files = cljs.core.get.call(null,map__33137__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__33140_33144 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__33141_33145 = null;
var count__33142_33146 = (0);
var i__33143_33147 = (0);
while(true){
if((i__33143_33147 < count__33142_33146)){
var f_33148 = cljs.core._nth.call(null,chunk__33141_33145,i__33143_33147);
figwheel.client.file_reloading.reload_css_file.call(null,f_33148);

var G__33149 = seq__33140_33144;
var G__33150 = chunk__33141_33145;
var G__33151 = count__33142_33146;
var G__33152 = (i__33143_33147 + (1));
seq__33140_33144 = G__33149;
chunk__33141_33145 = G__33150;
count__33142_33146 = G__33151;
i__33143_33147 = G__33152;
continue;
} else {
var temp__4657__auto___33153 = cljs.core.seq.call(null,seq__33140_33144);
if(temp__4657__auto___33153){
var seq__33140_33154__$1 = temp__4657__auto___33153;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33140_33154__$1)){
var c__25601__auto___33155 = cljs.core.chunk_first.call(null,seq__33140_33154__$1);
var G__33156 = cljs.core.chunk_rest.call(null,seq__33140_33154__$1);
var G__33157 = c__25601__auto___33155;
var G__33158 = cljs.core.count.call(null,c__25601__auto___33155);
var G__33159 = (0);
seq__33140_33144 = G__33156;
chunk__33141_33145 = G__33157;
count__33142_33146 = G__33158;
i__33143_33147 = G__33159;
continue;
} else {
var f_33160 = cljs.core.first.call(null,seq__33140_33154__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_33160);

var G__33161 = cljs.core.next.call(null,seq__33140_33154__$1);
var G__33162 = null;
var G__33163 = (0);
var G__33164 = (0);
seq__33140_33144 = G__33161;
chunk__33141_33145 = G__33162;
count__33142_33146 = G__33163;
i__33143_33147 = G__33164;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__33136,map__33136__$1,opts,on_cssload,map__33137,map__33137__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__33136,map__33136__$1,opts,on_cssload,map__33137,map__33137__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1485300092248