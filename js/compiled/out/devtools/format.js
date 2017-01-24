// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.format');
goog.require('cljs.core');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__25453__auto__ = (((value == null))?null:value);
var m__25454__auto__ = (devtools.format._header[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,value);
} else {
var m__25454__auto____$1 = (devtools.format._header["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__25453__auto__ = (((value == null))?null:value);
var m__25454__auto__ = (devtools.format._has_body[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,value);
} else {
var m__25454__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__25453__auto__ = (((value == null))?null:value);
var m__25454__auto__ = (devtools.format._body[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,value);
} else {
var m__25454__auto____$1 = (devtools.format._body["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__38949__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__38949__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__38949__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__38949__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__38948__auto__ = temp__4657__auto____$2;
return goog.object.get(o__38948__auto__,"make_template");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__38949__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__38949__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__38949__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__38949__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__38948__auto__ = temp__4657__auto____$2;
return goog.object.get(o__38948__auto__,"make_group");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__38949__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__38949__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__38949__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__38949__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__38948__auto__ = temp__4657__auto____$2;
return goog.object.get(o__38948__auto__,"make_reference");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__38949__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__38949__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__38949__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__38949__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__38948__auto__ = temp__4657__auto____$2;
return goog.object.get(o__38948__auto__,"make_surrogate");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__38949__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__38949__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__38949__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__38949__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__38948__auto__ = temp__4657__auto____$2;
return goog.object.get(o__38948__auto__,"render_markup");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__38949__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__38949__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__38949__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__38949__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__38948__auto__ = temp__4657__auto____$2;
return goog.object.get(o__38948__auto__,"_LT_header_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__38949__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__38949__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__38949__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__38949__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__38948__auto__ = temp__4657__auto____$2;
return goog.object.get(o__38948__auto__,"_LT_standard_body_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__25872__auto__ = [];
var len__25865__auto___38970 = arguments.length;
var i__25866__auto___38971 = (0);
while(true){
if((i__25866__auto___38971 < len__25865__auto___38970)){
args__25872__auto__.push((arguments[i__25866__auto___38971]));

var G__38972 = (i__25866__auto___38971 + (1));
i__25866__auto___38971 = G__38972;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq38969){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38969));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__25872__auto__ = [];
var len__25865__auto___38974 = arguments.length;
var i__25866__auto___38975 = (0);
while(true){
if((i__25866__auto___38975 < len__25865__auto___38974)){
args__25872__auto__.push((arguments[i__25866__auto___38975]));

var G__38976 = (i__25866__auto___38975 + (1));
i__25866__auto___38975 = G__38976;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq38973){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38973));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__25872__auto__ = [];
var len__25865__auto___38978 = arguments.length;
var i__25866__auto___38979 = (0);
while(true){
if((i__25866__auto___38979 < len__25865__auto___38978)){
args__25872__auto__.push((arguments[i__25866__auto___38979]));

var G__38980 = (i__25866__auto___38979 + (1));
i__25866__auto___38979 = G__38980;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq38977){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38977));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__25872__auto__ = [];
var len__25865__auto___38982 = arguments.length;
var i__25866__auto___38983 = (0);
while(true){
if((i__25866__auto___38983 < len__25865__auto___38982)){
args__25872__auto__.push((arguments[i__25866__auto___38983]));

var G__38984 = (i__25866__auto___38983 + (1));
i__25866__auto___38983 = G__38984;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq38981){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38981));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__25872__auto__ = [];
var len__25865__auto___38986 = arguments.length;
var i__25866__auto___38987 = (0);
while(true){
if((i__25866__auto___38987 < len__25865__auto___38986)){
args__25872__auto__.push((arguments[i__25866__auto___38987]));

var G__38988 = (i__25866__auto___38987 + (1));
i__25866__auto___38987 = G__38988;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq38985){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38985));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__25872__auto__ = [];
var len__25865__auto___38990 = arguments.length;
var i__25866__auto___38991 = (0);
while(true){
if((i__25866__auto___38991 < len__25865__auto___38990)){
args__25872__auto__.push((arguments[i__25866__auto___38991]));

var G__38992 = (i__25866__auto___38991 + (1));
i__25866__auto___38991 = G__38992;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq38989){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38989));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__25872__auto__ = [];
var len__25865__auto___38994 = arguments.length;
var i__25866__auto___38995 = (0);
while(true){
if((i__25866__auto___38995 < len__25865__auto___38994)){
args__25872__auto__.push((arguments[i__25866__auto___38995]));

var G__38996 = (i__25866__auto___38995 + (1));
i__25866__auto___38995 = G__38996;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq38993){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38993));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__25872__auto__ = [];
var len__25865__auto___39004 = arguments.length;
var i__25866__auto___39005 = (0);
while(true){
if((i__25866__auto___39005 < len__25865__auto___39004)){
args__25872__auto__.push((arguments[i__25866__auto___39005]));

var G__39006 = (i__25866__auto___39005 + (1));
i__25866__auto___39005 = G__39006;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__39000){
var vec__39001 = p__39000;
var state_override = cljs.core.nth.call(null,vec__39001,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__39001,state_override){
return (function (p1__38997_SHARP_){
return cljs.core.merge.call(null,p1__38997_SHARP_,state_override);
});})(vec__39001,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq38998){
var G__38999 = cljs.core.first.call(null,seq38998);
var seq38998__$1 = cljs.core.next.call(null,seq38998);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__38999,seq38998__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__25872__auto__ = [];
var len__25865__auto___39008 = arguments.length;
var i__25866__auto___39009 = (0);
while(true){
if((i__25866__auto___39009 < len__25865__auto___39008)){
args__25872__auto__.push((arguments[i__25866__auto___39009]));

var G__39010 = (i__25866__auto___39009 + (1));
i__25866__auto___39009 = G__39010;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq39007){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39007));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__25872__auto__ = [];
var len__25865__auto___39013 = arguments.length;
var i__25866__auto___39014 = (0);
while(true){
if((i__25866__auto___39014 < len__25865__auto___39013)){
args__25872__auto__.push((arguments[i__25866__auto___39014]));

var G__39015 = (i__25866__auto___39014 + (1));
i__25866__auto___39014 = G__39015;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq39011){
var G__39012 = cljs.core.first.call(null,seq39011);
var seq39011__$1 = cljs.core.next.call(null,seq39011);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__39012,seq39011__$1);
});


//# sourceMappingURL=format.js.map?rel=1485300131892