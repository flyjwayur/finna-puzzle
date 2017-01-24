// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x39910_39911 = value;
x39910_39911.devtools$protocols$IGroup$ = true;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$IGroup$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x39915_39916 = value;
x39915_39916.devtools$protocols$ITemplate$ = true;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ITemplate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x39920_39921 = value;
x39920_39921.devtools$protocols$ISurrogate$ = true;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ISurrogate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__24778__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__24778__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__24778__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__25872__auto__ = [];
var len__25865__auto___39929 = arguments.length;
var i__25866__auto___39930 = (0);
while(true){
if((i__25866__auto___39930 < len__25865__auto___39929)){
args__25872__auto__.push((arguments[i__25866__auto___39930]));

var G__39931 = (i__25866__auto___39930 + (1));
i__25866__auto___39930 = G__39931;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__39925_39932 = cljs.core.seq.call(null,items);
var chunk__39926_39933 = null;
var count__39927_39934 = (0);
var i__39928_39935 = (0);
while(true){
if((i__39928_39935 < count__39927_39934)){
var item_39936 = cljs.core._nth.call(null,chunk__39926_39933,i__39928_39935);
if(cljs.core.some_QMARK_.call(null,item_39936)){
if(cljs.core.coll_QMARK_.call(null,item_39936)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_39936)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_39936));
}
} else {
}

var G__39937 = seq__39925_39932;
var G__39938 = chunk__39926_39933;
var G__39939 = count__39927_39934;
var G__39940 = (i__39928_39935 + (1));
seq__39925_39932 = G__39937;
chunk__39926_39933 = G__39938;
count__39927_39934 = G__39939;
i__39928_39935 = G__39940;
continue;
} else {
var temp__4657__auto___39941 = cljs.core.seq.call(null,seq__39925_39932);
if(temp__4657__auto___39941){
var seq__39925_39942__$1 = temp__4657__auto___39941;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39925_39942__$1)){
var c__25601__auto___39943 = cljs.core.chunk_first.call(null,seq__39925_39942__$1);
var G__39944 = cljs.core.chunk_rest.call(null,seq__39925_39942__$1);
var G__39945 = c__25601__auto___39943;
var G__39946 = cljs.core.count.call(null,c__25601__auto___39943);
var G__39947 = (0);
seq__39925_39932 = G__39944;
chunk__39926_39933 = G__39945;
count__39927_39934 = G__39946;
i__39928_39935 = G__39947;
continue;
} else {
var item_39948 = cljs.core.first.call(null,seq__39925_39942__$1);
if(cljs.core.some_QMARK_.call(null,item_39948)){
if(cljs.core.coll_QMARK_.call(null,item_39948)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_39948)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_39948));
}
} else {
}

var G__39949 = cljs.core.next.call(null,seq__39925_39942__$1);
var G__39950 = null;
var G__39951 = (0);
var G__39952 = (0);
seq__39925_39932 = G__39949;
chunk__39926_39933 = G__39950;
count__39927_39934 = G__39951;
i__39928_39935 = G__39952;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq39924){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39924));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__25872__auto__ = [];
var len__25865__auto___39960 = arguments.length;
var i__25866__auto___39961 = (0);
while(true){
if((i__25866__auto___39961 < len__25865__auto___39960)){
args__25872__auto__.push((arguments[i__25866__auto___39961]));

var G__39962 = (i__25866__auto___39961 + (1));
i__25866__auto___39961 = G__39962;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((2) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25873__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__39956_39963 = cljs.core.seq.call(null,children);
var chunk__39957_39964 = null;
var count__39958_39965 = (0);
var i__39959_39966 = (0);
while(true){
if((i__39959_39966 < count__39958_39965)){
var child_39967 = cljs.core._nth.call(null,chunk__39957_39964,i__39959_39966);
if(cljs.core.some_QMARK_.call(null,child_39967)){
if(cljs.core.coll_QMARK_.call(null,child_39967)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_39967))));
} else {
var temp__4655__auto___39968 = devtools.formatters.helpers.pref.call(null,child_39967);
if(cljs.core.truth_(temp__4655__auto___39968)){
var child_value_39969 = temp__4655__auto___39968;
template.push(child_value_39969);
} else {
}
}
} else {
}

var G__39970 = seq__39956_39963;
var G__39971 = chunk__39957_39964;
var G__39972 = count__39958_39965;
var G__39973 = (i__39959_39966 + (1));
seq__39956_39963 = G__39970;
chunk__39957_39964 = G__39971;
count__39958_39965 = G__39972;
i__39959_39966 = G__39973;
continue;
} else {
var temp__4657__auto___39974 = cljs.core.seq.call(null,seq__39956_39963);
if(temp__4657__auto___39974){
var seq__39956_39975__$1 = temp__4657__auto___39974;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39956_39975__$1)){
var c__25601__auto___39976 = cljs.core.chunk_first.call(null,seq__39956_39975__$1);
var G__39977 = cljs.core.chunk_rest.call(null,seq__39956_39975__$1);
var G__39978 = c__25601__auto___39976;
var G__39979 = cljs.core.count.call(null,c__25601__auto___39976);
var G__39980 = (0);
seq__39956_39963 = G__39977;
chunk__39957_39964 = G__39978;
count__39958_39965 = G__39979;
i__39959_39966 = G__39980;
continue;
} else {
var child_39981 = cljs.core.first.call(null,seq__39956_39975__$1);
if(cljs.core.some_QMARK_.call(null,child_39981)){
if(cljs.core.coll_QMARK_.call(null,child_39981)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_39981))));
} else {
var temp__4655__auto___39982 = devtools.formatters.helpers.pref.call(null,child_39981);
if(cljs.core.truth_(temp__4655__auto___39982)){
var child_value_39983 = temp__4655__auto___39982;
template.push(child_value_39983);
} else {
}
}
} else {
}

var G__39984 = cljs.core.next.call(null,seq__39956_39975__$1);
var G__39985 = null;
var G__39986 = (0);
var G__39987 = (0);
seq__39956_39963 = G__39984;
chunk__39957_39964 = G__39985;
count__39958_39965 = G__39986;
i__39959_39966 = G__39987;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq39953){
var G__39954 = cljs.core.first.call(null,seq39953);
var seq39953__$1 = cljs.core.next.call(null,seq39953);
var G__39955 = cljs.core.first.call(null,seq39953__$1);
var seq39953__$2 = cljs.core.next.call(null,seq39953__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__39954,G__39955,seq39953__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__25872__auto__ = [];
var len__25865__auto___39990 = arguments.length;
var i__25866__auto___39991 = (0);
while(true){
if((i__25866__auto___39991 < len__25865__auto___39990)){
args__25872__auto__.push((arguments[i__25866__auto___39991]));

var G__39992 = (i__25866__auto___39991 + (1));
i__25866__auto___39991 = G__39992;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq39988){
var G__39989 = cljs.core.first.call(null,seq39988);
var seq39988__$1 = cljs.core.next.call(null,seq39988);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39989,seq39988__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__25872__auto__ = [];
var len__25865__auto___39995 = arguments.length;
var i__25866__auto___39996 = (0);
while(true){
if((i__25866__auto___39996 < len__25865__auto___39995)){
args__25872__auto__.push((arguments[i__25866__auto___39996]));

var G__39997 = (i__25866__auto___39996 + (1));
i__25866__auto___39996 = G__39997;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq39993){
var G__39994 = cljs.core.first.call(null,seq39993);
var seq39993__$1 = cljs.core.next.call(null,seq39993);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39994,seq39993__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args39998 = [];
var len__25865__auto___40003 = arguments.length;
var i__25866__auto___40004 = (0);
while(true){
if((i__25866__auto___40004 < len__25865__auto___40003)){
args39998.push((arguments[i__25866__auto___40004]));

var G__40005 = (i__25866__auto___40004 + (1));
i__25866__auto___40004 = G__40005;
continue;
} else {
}
break;
}

var G__40000 = args39998.length;
switch (G__40000) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39998.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj40002 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__24790__auto__ = start_index;
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return (0);
}
})()};
return obj40002;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"target");
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"header");
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"body");
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"startIndex");
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__25872__auto__ = [];
var len__25865__auto___40013 = arguments.length;
var i__25866__auto___40014 = (0);
while(true){
if((i__25866__auto___40014 < len__25865__auto___40013)){
args__25872__auto__.push((arguments[i__25866__auto___40014]));

var G__40015 = (i__25866__auto___40014 + (1));
i__25866__auto___40014 = G__40015;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__40009){
var vec__40010 = p__40009;
var state_override_fn = cljs.core.nth.call(null,vec__40010,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((cljs.core.some_QMARK_.call(null,state_override_fn))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq40007){
var G__40008 = cljs.core.first.call(null,seq40007);
var seq40007__$1 = cljs.core.next.call(null,seq40007);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__40008,seq40007__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__25776__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_40019_40022 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_40020_40023 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_40019_40022,_STAR_print_fn_STAR_40020_40023,sb__25776__auto__){
return (function (x__25777__auto__){
return sb__25776__auto__.append(x__25777__auto__);
});})(_STAR_print_newline_STAR_40019_40022,_STAR_print_fn_STAR_40020_40023,sb__25776__auto__))
;

try{var _STAR_print_level_STAR_40021_40024 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_40021_40024;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_40020_40023;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_40019_40022;
}
return [cljs.core.str(sb__25776__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_40026 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_40026;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.formatters.templating.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.formatters.templating.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str("\n"),cljs.core.str("Render path: "),cljs.core.str(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),cljs.core.str("\n"),cljs.core.str("Render stack:\n"),cljs.core.str(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__40028 = name;
switch (G__40028) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("no matching special tag name: '"),cljs.core.str(name),cljs.core.str("'")].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__40033 = tag;
var html_tag = cljs.core.nth.call(null,vec__40033,(0),null);
var style = cljs.core.nth.call(null,vec__40033,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_40037 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("invalid json-ml markup at "),cljs.core.str(devtools.formatters.templating.print_preview.call(null,markup)),cljs.core.str(":")].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_40037;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_40040 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_40041 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_40041;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_40040;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__40042 = initial_value;
var G__40043 = value.call(null);
initial_value = G__40042;
value = G__40043;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__40044 = initial_value;
var G__40045 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__40044;
value = G__40045;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__40046 = initial_value;
var G__40047 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__40046;
value = G__40047;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1485300136581