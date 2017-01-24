// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.8";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args36502 = [];
var len__25865__auto___36505 = arguments.length;
var i__25866__auto___36506 = (0);
while(true){
if((i__25866__auto___36506 < len__25865__auto___36505)){
args36502.push((arguments[i__25866__auto___36506]));

var G__36507 = (i__25866__auto___36506 + (1));
i__25866__auto___36506 = G__36507;
continue;
} else {
}
break;
}

var G__36504 = args36502.length;
switch (G__36504) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36502.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__25872__auto__ = [];
var len__25865__auto___36510 = arguments.length;
var i__25866__auto___36511 = (0);
while(true){
if((i__25866__auto___36511 < len__25865__auto___36510)){
args__25872__auto__.push((arguments[i__25866__auto___36511]));

var G__36512 = (i__25866__auto___36511 + (1));
i__25866__auto___36511 = G__36512;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq36509){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36509));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25872__auto__ = [];
var len__25865__auto___36514 = arguments.length;
var i__25866__auto___36515 = (0);
while(true){
if((i__25866__auto___36515 < len__25865__auto___36514)){
args__25872__auto__.push((arguments[i__25866__auto___36515]));

var G__36516 = (i__25866__auto___36515 + (1));
i__25866__auto___36515 = G__36516;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq36513){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36513));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__36517 = cljs.core._EQ_;
var expr__36518 = (function (){var or__24790__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e36521){if((e36521 instanceof Error)){
var e = e36521;
return false;
} else {
throw e36521;

}
}})();
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__36517.call(null,"true",expr__36518))){
return true;
} else {
if(cljs.core.truth_(pred__36517.call(null,"false",expr__36518))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__36518)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e36523){if((e36523 instanceof Error)){
var e = e36523;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e36523;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36524){
var map__36527 = p__36524;
var map__36527__$1 = ((((!((map__36527 == null)))?((((map__36527.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36527.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36527):map__36527);
var message = cljs.core.get.call(null,map__36527__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36527__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24790__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24778__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24778__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24778__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__28082__auto___36689 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28082__auto___36689,ch){
return (function (){
var f__28083__auto__ = (function (){var switch__27970__auto__ = ((function (c__28082__auto___36689,ch){
return (function (state_36658){
var state_val_36659 = (state_36658[(1)]);
if((state_val_36659 === (7))){
var inst_36654 = (state_36658[(2)]);
var state_36658__$1 = state_36658;
var statearr_36660_36690 = state_36658__$1;
(statearr_36660_36690[(2)] = inst_36654);

(statearr_36660_36690[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36659 === (1))){
var state_36658__$1 = state_36658;
var statearr_36661_36691 = state_36658__$1;
(statearr_36661_36691[(2)] = null);

(statearr_36661_36691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36659 === (4))){
var inst_36611 = (state_36658[(7)]);
var inst_36611__$1 = (state_36658[(2)]);
var state_36658__$1 = (function (){var statearr_36662 = state_36658;
(statearr_36662[(7)] = inst_36611__$1);

return statearr_36662;
})();
if(cljs.core.truth_(inst_36611__$1)){
var statearr_36663_36692 = state_36658__$1;
(statearr_36663_36692[(1)] = (5));

} else {
var statearr_36664_36693 = state_36658__$1;
(statearr_36664_36693[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36659 === (15))){
var inst_36618 = (state_36658[(8)]);
var inst_36633 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36618);
var inst_36634 = cljs.core.first.call(null,inst_36633);
var inst_36635 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_36634);
var inst_36636 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_36635)].join('');
var inst_36637 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_36636);
var state_36658__$1 = state_36658;
var statearr_36665_36694 = state_36658__$1;
(statearr_36665_36694[(2)] = inst_36637);

(statearr_36665_36694[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36659 === (13))){
var inst_36642 = (state_36658[(2)]);
var state_36658__$1 = state_36658;
var statearr_36666_36695 = state_36658__$1;
(statearr_36666_36695[(2)] = inst_36642);

(statearr_36666_36695[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36659 === (6))){
var state_36658__$1 = state_36658;
var statearr_36667_36696 = state_36658__$1;
(statearr_36667_36696[(2)] = null);

(statearr_36667_36696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36659 === (17))){
var inst_36640 = (state_36658[(2)]);
var state_36658__$1 = state_36658;
var statearr_36668_36697 = state_36658__$1;
(statearr_36668_36697[(2)] = inst_36640);

(statearr_36668_36697[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36659 === (3))){
var inst_36656 = (state_36658[(2)]);
var state_36658__$1 = state_36658;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36658__$1,inst_36656);
} else {
if((state_val_36659 === (12))){
var inst_36617 = (state_36658[(9)]);
var inst_36631 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_36617,opts);
var state_36658__$1 = state_36658;
if(cljs.core.truth_(inst_36631)){
var statearr_36669_36698 = state_36658__$1;
(statearr_36669_36698[(1)] = (15));

} else {
var statearr_36670_36699 = state_36658__$1;
(statearr_36670_36699[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36659 === (2))){
var state_36658__$1 = state_36658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36658__$1,(4),ch);
} else {
if((state_val_36659 === (11))){
var inst_36618 = (state_36658[(8)]);
var inst_36623 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36624 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_36618);
var inst_36625 = cljs.core.async.timeout.call(null,(1000));
var inst_36626 = [inst_36624,inst_36625];
var inst_36627 = (new cljs.core.PersistentVector(null,2,(5),inst_36623,inst_36626,null));
var state_36658__$1 = state_36658;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36658__$1,(14),inst_36627);
} else {
if((state_val_36659 === (9))){
var inst_36618 = (state_36658[(8)]);
var inst_36644 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_36645 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36618);
var inst_36646 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36645);
var inst_36647 = [cljs.core.str("Not loading: "),cljs.core.str(inst_36646)].join('');
var inst_36648 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_36647);
var state_36658__$1 = (function (){var statearr_36671 = state_36658;
(statearr_36671[(10)] = inst_36644);

return statearr_36671;
})();
var statearr_36672_36700 = state_36658__$1;
(statearr_36672_36700[(2)] = inst_36648);

(statearr_36672_36700[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36659 === (5))){
var inst_36611 = (state_36658[(7)]);
var inst_36613 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_36614 = (new cljs.core.PersistentArrayMap(null,2,inst_36613,null));
var inst_36615 = (new cljs.core.PersistentHashSet(null,inst_36614,null));
var inst_36616 = figwheel.client.focus_msgs.call(null,inst_36615,inst_36611);
var inst_36617 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_36616);
var inst_36618 = cljs.core.first.call(null,inst_36616);
var inst_36619 = figwheel.client.autoload_QMARK_.call(null);
var state_36658__$1 = (function (){var statearr_36673 = state_36658;
(statearr_36673[(9)] = inst_36617);

(statearr_36673[(8)] = inst_36618);

return statearr_36673;
})();
if(cljs.core.truth_(inst_36619)){
var statearr_36674_36701 = state_36658__$1;
(statearr_36674_36701[(1)] = (8));

} else {
var statearr_36675_36702 = state_36658__$1;
(statearr_36675_36702[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36659 === (14))){
var inst_36629 = (state_36658[(2)]);
var state_36658__$1 = state_36658;
var statearr_36676_36703 = state_36658__$1;
(statearr_36676_36703[(2)] = inst_36629);

(statearr_36676_36703[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36659 === (16))){
var state_36658__$1 = state_36658;
var statearr_36677_36704 = state_36658__$1;
(statearr_36677_36704[(2)] = null);

(statearr_36677_36704[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36659 === (10))){
var inst_36650 = (state_36658[(2)]);
var state_36658__$1 = (function (){var statearr_36678 = state_36658;
(statearr_36678[(11)] = inst_36650);

return statearr_36678;
})();
var statearr_36679_36705 = state_36658__$1;
(statearr_36679_36705[(2)] = null);

(statearr_36679_36705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36659 === (8))){
var inst_36617 = (state_36658[(9)]);
var inst_36621 = figwheel.client.reload_file_state_QMARK_.call(null,inst_36617,opts);
var state_36658__$1 = state_36658;
if(cljs.core.truth_(inst_36621)){
var statearr_36680_36706 = state_36658__$1;
(statearr_36680_36706[(1)] = (11));

} else {
var statearr_36681_36707 = state_36658__$1;
(statearr_36681_36707[(1)] = (12));

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
});})(c__28082__auto___36689,ch))
;
return ((function (switch__27970__auto__,c__28082__auto___36689,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27971__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27971__auto____0 = (function (){
var statearr_36685 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36685[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27971__auto__);

(statearr_36685[(1)] = (1));

return statearr_36685;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27971__auto____1 = (function (state_36658){
while(true){
var ret_value__27972__auto__ = (function (){try{while(true){
var result__27973__auto__ = switch__27970__auto__.call(null,state_36658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27973__auto__;
}
break;
}
}catch (e36686){if((e36686 instanceof Object)){
var ex__27974__auto__ = e36686;
var statearr_36687_36708 = state_36658;
(statearr_36687_36708[(5)] = ex__27974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36686;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36709 = state_36658;
state_36658 = G__36709;
continue;
} else {
return ret_value__27972__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27971__auto__ = function(state_36658){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27971__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27971__auto____1.call(this,state_36658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27971__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27971__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27971__auto__;
})()
;})(switch__27970__auto__,c__28082__auto___36689,ch))
})();
var state__28084__auto__ = (function (){var statearr_36688 = f__28083__auto__.call(null);
(statearr_36688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28082__auto___36689);

return statearr_36688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28084__auto__);
});})(c__28082__auto___36689,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__36710_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__36710_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_36713 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_36713){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e36712){if((e36712 instanceof Error)){
var e = e36712;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_36713], null));
} else {
var e = e36712;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_36713))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__36714){
var map__36723 = p__36714;
var map__36723__$1 = ((((!((map__36723 == null)))?((((map__36723.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36723.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36723):map__36723);
var opts = map__36723__$1;
var build_id = cljs.core.get.call(null,map__36723__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__36723,map__36723__$1,opts,build_id){
return (function (p__36725){
var vec__36726 = p__36725;
var seq__36727 = cljs.core.seq.call(null,vec__36726);
var first__36728 = cljs.core.first.call(null,seq__36727);
var seq__36727__$1 = cljs.core.next.call(null,seq__36727);
var map__36729 = first__36728;
var map__36729__$1 = ((((!((map__36729 == null)))?((((map__36729.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36729.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36729):map__36729);
var msg = map__36729__$1;
var msg_name = cljs.core.get.call(null,map__36729__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36727__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__36726,seq__36727,first__36728,seq__36727__$1,map__36729,map__36729__$1,msg,msg_name,_,map__36723,map__36723__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__36726,seq__36727,first__36728,seq__36727__$1,map__36729,map__36729__$1,msg,msg_name,_,map__36723,map__36723__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__36723,map__36723__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__36737){
var vec__36738 = p__36737;
var seq__36739 = cljs.core.seq.call(null,vec__36738);
var first__36740 = cljs.core.first.call(null,seq__36739);
var seq__36739__$1 = cljs.core.next.call(null,seq__36739);
var map__36741 = first__36740;
var map__36741__$1 = ((((!((map__36741 == null)))?((((map__36741.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36741.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36741):map__36741);
var msg = map__36741__$1;
var msg_name = cljs.core.get.call(null,map__36741__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36739__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__36743){
var map__36755 = p__36743;
var map__36755__$1 = ((((!((map__36755 == null)))?((((map__36755.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36755.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36755):map__36755);
var on_compile_warning = cljs.core.get.call(null,map__36755__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__36755__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__36755,map__36755__$1,on_compile_warning,on_compile_fail){
return (function (p__36757){
var vec__36758 = p__36757;
var seq__36759 = cljs.core.seq.call(null,vec__36758);
var first__36760 = cljs.core.first.call(null,seq__36759);
var seq__36759__$1 = cljs.core.next.call(null,seq__36759);
var map__36761 = first__36760;
var map__36761__$1 = ((((!((map__36761 == null)))?((((map__36761.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36761.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36761):map__36761);
var msg = map__36761__$1;
var msg_name = cljs.core.get.call(null,map__36761__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36759__$1;
var pred__36763 = cljs.core._EQ_;
var expr__36764 = msg_name;
if(cljs.core.truth_(pred__36763.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__36764))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__36763.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__36764))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__36755,map__36755__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28082__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28082__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28083__auto__ = (function (){var switch__27970__auto__ = ((function (c__28082__auto__,msg_hist,msg_names,msg){
return (function (state_36992){
var state_val_36993 = (state_36992[(1)]);
if((state_val_36993 === (7))){
var inst_36912 = (state_36992[(2)]);
var state_36992__$1 = state_36992;
if(cljs.core.truth_(inst_36912)){
var statearr_36994_37044 = state_36992__$1;
(statearr_36994_37044[(1)] = (8));

} else {
var statearr_36995_37045 = state_36992__$1;
(statearr_36995_37045[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36993 === (20))){
var inst_36986 = (state_36992[(2)]);
var state_36992__$1 = state_36992;
var statearr_36996_37046 = state_36992__$1;
(statearr_36996_37046[(2)] = inst_36986);

(statearr_36996_37046[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36993 === (27))){
var inst_36982 = (state_36992[(2)]);
var state_36992__$1 = state_36992;
var statearr_36997_37047 = state_36992__$1;
(statearr_36997_37047[(2)] = inst_36982);

(statearr_36997_37047[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36993 === (1))){
var inst_36905 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_36992__$1 = state_36992;
if(cljs.core.truth_(inst_36905)){
var statearr_36998_37048 = state_36992__$1;
(statearr_36998_37048[(1)] = (2));

} else {
var statearr_36999_37049 = state_36992__$1;
(statearr_36999_37049[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36993 === (24))){
var inst_36984 = (state_36992[(2)]);
var state_36992__$1 = state_36992;
var statearr_37000_37050 = state_36992__$1;
(statearr_37000_37050[(2)] = inst_36984);

(statearr_37000_37050[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36993 === (4))){
var inst_36990 = (state_36992[(2)]);
var state_36992__$1 = state_36992;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36992__$1,inst_36990);
} else {
if((state_val_36993 === (15))){
var inst_36988 = (state_36992[(2)]);
var state_36992__$1 = state_36992;
var statearr_37001_37051 = state_36992__$1;
(statearr_37001_37051[(2)] = inst_36988);

(statearr_37001_37051[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36993 === (21))){
var inst_36941 = (state_36992[(2)]);
var inst_36942 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36943 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36942);
var state_36992__$1 = (function (){var statearr_37002 = state_36992;
(statearr_37002[(7)] = inst_36941);

return statearr_37002;
})();
var statearr_37003_37052 = state_36992__$1;
(statearr_37003_37052[(2)] = inst_36943);

(statearr_37003_37052[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36993 === (31))){
var inst_36971 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_36992__$1 = state_36992;
if(cljs.core.truth_(inst_36971)){
var statearr_37004_37053 = state_36992__$1;
(statearr_37004_37053[(1)] = (34));

} else {
var statearr_37005_37054 = state_36992__$1;
(statearr_37005_37054[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36993 === (32))){
var inst_36980 = (state_36992[(2)]);
var state_36992__$1 = state_36992;
var statearr_37006_37055 = state_36992__$1;
(statearr_37006_37055[(2)] = inst_36980);

(statearr_37006_37055[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36993 === (33))){
var inst_36967 = (state_36992[(2)]);
var inst_36968 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36969 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36968);
var state_36992__$1 = (function (){var statearr_37007 = state_36992;
(statearr_37007[(8)] = inst_36967);

return statearr_37007;
})();
var statearr_37008_37056 = state_36992__$1;
(statearr_37008_37056[(2)] = inst_36969);

(statearr_37008_37056[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36993 === (13))){
var inst_36926 = figwheel.client.heads_up.clear.call(null);
var state_36992__$1 = state_36992;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36992__$1,(16),inst_36926);
} else {
if((state_val_36993 === (22))){
var inst_36947 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36948 = figwheel.client.heads_up.append_warning_message.call(null,inst_36947);
var state_36992__$1 = state_36992;
var statearr_37009_37057 = state_36992__$1;
(statearr_37009_37057[(2)] = inst_36948);

(statearr_37009_37057[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36993 === (36))){
var inst_36978 = (state_36992[(2)]);
var state_36992__$1 = state_36992;
var statearr_37010_37058 = state_36992__$1;
(statearr_37010_37058[(2)] = inst_36978);

(statearr_37010_37058[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36993 === (29))){
var inst_36958 = (state_36992[(2)]);
var inst_36959 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36960 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36959);
var state_36992__$1 = (function (){var statearr_37011 = state_36992;
(statearr_37011[(9)] = inst_36958);

return statearr_37011;
})();
var statearr_37012_37059 = state_36992__$1;
(statearr_37012_37059[(2)] = inst_36960);

(statearr_37012_37059[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36993 === (6))){
var inst_36907 = (state_36992[(10)]);
var state_36992__$1 = state_36992;
var statearr_37013_37060 = state_36992__$1;
(statearr_37013_37060[(2)] = inst_36907);

(statearr_37013_37060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36993 === (28))){
var inst_36954 = (state_36992[(2)]);
var inst_36955 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36956 = figwheel.client.heads_up.display_warning.call(null,inst_36955);
var state_36992__$1 = (function (){var statearr_37014 = state_36992;
(statearr_37014[(11)] = inst_36954);

return statearr_37014;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36992__$1,(29),inst_36956);
} else {
if((state_val_36993 === (25))){
var inst_36952 = figwheel.client.heads_up.clear.call(null);
var state_36992__$1 = state_36992;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36992__$1,(28),inst_36952);
} else {
if((state_val_36993 === (34))){
var inst_36973 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36992__$1 = state_36992;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36992__$1,(37),inst_36973);
} else {
if((state_val_36993 === (17))){
var inst_36932 = (state_36992[(2)]);
var inst_36933 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36934 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36933);
var state_36992__$1 = (function (){var statearr_37015 = state_36992;
(statearr_37015[(12)] = inst_36932);

return statearr_37015;
})();
var statearr_37016_37061 = state_36992__$1;
(statearr_37016_37061[(2)] = inst_36934);

(statearr_37016_37061[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36993 === (3))){
var inst_36924 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_36992__$1 = state_36992;
if(cljs.core.truth_(inst_36924)){
var statearr_37017_37062 = state_36992__$1;
(statearr_37017_37062[(1)] = (13));

} else {
var statearr_37018_37063 = state_36992__$1;
(statearr_37018_37063[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36993 === (12))){
var inst_36920 = (state_36992[(2)]);
var state_36992__$1 = state_36992;
var statearr_37019_37064 = state_36992__$1;
(statearr_37019_37064[(2)] = inst_36920);

(statearr_37019_37064[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36993 === (2))){
var inst_36907 = (state_36992[(10)]);
var inst_36907__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_36992__$1 = (function (){var statearr_37020 = state_36992;
(statearr_37020[(10)] = inst_36907__$1);

return statearr_37020;
})();
if(cljs.core.truth_(inst_36907__$1)){
var statearr_37021_37065 = state_36992__$1;
(statearr_37021_37065[(1)] = (5));

} else {
var statearr_37022_37066 = state_36992__$1;
(statearr_37022_37066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36993 === (23))){
var inst_36950 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_36992__$1 = state_36992;
if(cljs.core.truth_(inst_36950)){
var statearr_37023_37067 = state_36992__$1;
(statearr_37023_37067[(1)] = (25));

} else {
var statearr_37024_37068 = state_36992__$1;
(statearr_37024_37068[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36993 === (35))){
var state_36992__$1 = state_36992;
var statearr_37025_37069 = state_36992__$1;
(statearr_37025_37069[(2)] = null);

(statearr_37025_37069[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36993 === (19))){
var inst_36945 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_36992__$1 = state_36992;
if(cljs.core.truth_(inst_36945)){
var statearr_37026_37070 = state_36992__$1;
(statearr_37026_37070[(1)] = (22));

} else {
var statearr_37027_37071 = state_36992__$1;
(statearr_37027_37071[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36993 === (11))){
var inst_36916 = (state_36992[(2)]);
var state_36992__$1 = state_36992;
var statearr_37028_37072 = state_36992__$1;
(statearr_37028_37072[(2)] = inst_36916);

(statearr_37028_37072[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36993 === (9))){
var inst_36918 = figwheel.client.heads_up.clear.call(null);
var state_36992__$1 = state_36992;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36992__$1,(12),inst_36918);
} else {
if((state_val_36993 === (5))){
var inst_36909 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_36992__$1 = state_36992;
var statearr_37029_37073 = state_36992__$1;
(statearr_37029_37073[(2)] = inst_36909);

(statearr_37029_37073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36993 === (14))){
var inst_36936 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_36992__$1 = state_36992;
if(cljs.core.truth_(inst_36936)){
var statearr_37030_37074 = state_36992__$1;
(statearr_37030_37074[(1)] = (18));

} else {
var statearr_37031_37075 = state_36992__$1;
(statearr_37031_37075[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36993 === (26))){
var inst_36962 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_36992__$1 = state_36992;
if(cljs.core.truth_(inst_36962)){
var statearr_37032_37076 = state_36992__$1;
(statearr_37032_37076[(1)] = (30));

} else {
var statearr_37033_37077 = state_36992__$1;
(statearr_37033_37077[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36993 === (16))){
var inst_36928 = (state_36992[(2)]);
var inst_36929 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36930 = figwheel.client.heads_up.display_exception.call(null,inst_36929);
var state_36992__$1 = (function (){var statearr_37034 = state_36992;
(statearr_37034[(13)] = inst_36928);

return statearr_37034;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36992__$1,(17),inst_36930);
} else {
if((state_val_36993 === (30))){
var inst_36964 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36965 = figwheel.client.heads_up.display_warning.call(null,inst_36964);
var state_36992__$1 = state_36992;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36992__$1,(33),inst_36965);
} else {
if((state_val_36993 === (10))){
var inst_36922 = (state_36992[(2)]);
var state_36992__$1 = state_36992;
var statearr_37035_37078 = state_36992__$1;
(statearr_37035_37078[(2)] = inst_36922);

(statearr_37035_37078[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36993 === (18))){
var inst_36938 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36939 = figwheel.client.heads_up.display_exception.call(null,inst_36938);
var state_36992__$1 = state_36992;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36992__$1,(21),inst_36939);
} else {
if((state_val_36993 === (37))){
var inst_36975 = (state_36992[(2)]);
var state_36992__$1 = state_36992;
var statearr_37036_37079 = state_36992__$1;
(statearr_37036_37079[(2)] = inst_36975);

(statearr_37036_37079[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36993 === (8))){
var inst_36914 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36992__$1 = state_36992;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36992__$1,(11),inst_36914);
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
});})(c__28082__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27970__auto__,c__28082__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27971__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27971__auto____0 = (function (){
var statearr_37040 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37040[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27971__auto__);

(statearr_37040[(1)] = (1));

return statearr_37040;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27971__auto____1 = (function (state_36992){
while(true){
var ret_value__27972__auto__ = (function (){try{while(true){
var result__27973__auto__ = switch__27970__auto__.call(null,state_36992);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27973__auto__;
}
break;
}
}catch (e37041){if((e37041 instanceof Object)){
var ex__27974__auto__ = e37041;
var statearr_37042_37080 = state_36992;
(statearr_37042_37080[(5)] = ex__27974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36992);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37081 = state_36992;
state_36992 = G__37081;
continue;
} else {
return ret_value__27972__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27971__auto__ = function(state_36992){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27971__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27971__auto____1.call(this,state_36992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27971__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27971__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27971__auto__;
})()
;})(switch__27970__auto__,c__28082__auto__,msg_hist,msg_names,msg))
})();
var state__28084__auto__ = (function (){var statearr_37043 = f__28083__auto__.call(null);
(statearr_37043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28082__auto__);

return statearr_37043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28084__auto__);
});})(c__28082__auto__,msg_hist,msg_names,msg))
);

return c__28082__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28082__auto___37144 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28082__auto___37144,ch){
return (function (){
var f__28083__auto__ = (function (){var switch__27970__auto__ = ((function (c__28082__auto___37144,ch){
return (function (state_37127){
var state_val_37128 = (state_37127[(1)]);
if((state_val_37128 === (1))){
var state_37127__$1 = state_37127;
var statearr_37129_37145 = state_37127__$1;
(statearr_37129_37145[(2)] = null);

(statearr_37129_37145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37128 === (2))){
var state_37127__$1 = state_37127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37127__$1,(4),ch);
} else {
if((state_val_37128 === (3))){
var inst_37125 = (state_37127[(2)]);
var state_37127__$1 = state_37127;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37127__$1,inst_37125);
} else {
if((state_val_37128 === (4))){
var inst_37115 = (state_37127[(7)]);
var inst_37115__$1 = (state_37127[(2)]);
var state_37127__$1 = (function (){var statearr_37130 = state_37127;
(statearr_37130[(7)] = inst_37115__$1);

return statearr_37130;
})();
if(cljs.core.truth_(inst_37115__$1)){
var statearr_37131_37146 = state_37127__$1;
(statearr_37131_37146[(1)] = (5));

} else {
var statearr_37132_37147 = state_37127__$1;
(statearr_37132_37147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37128 === (5))){
var inst_37115 = (state_37127[(7)]);
var inst_37117 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37115);
var state_37127__$1 = state_37127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37127__$1,(8),inst_37117);
} else {
if((state_val_37128 === (6))){
var state_37127__$1 = state_37127;
var statearr_37133_37148 = state_37127__$1;
(statearr_37133_37148[(2)] = null);

(statearr_37133_37148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37128 === (7))){
var inst_37123 = (state_37127[(2)]);
var state_37127__$1 = state_37127;
var statearr_37134_37149 = state_37127__$1;
(statearr_37134_37149[(2)] = inst_37123);

(statearr_37134_37149[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37128 === (8))){
var inst_37119 = (state_37127[(2)]);
var state_37127__$1 = (function (){var statearr_37135 = state_37127;
(statearr_37135[(8)] = inst_37119);

return statearr_37135;
})();
var statearr_37136_37150 = state_37127__$1;
(statearr_37136_37150[(2)] = null);

(statearr_37136_37150[(1)] = (2));


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
});})(c__28082__auto___37144,ch))
;
return ((function (switch__27970__auto__,c__28082__auto___37144,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27971__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27971__auto____0 = (function (){
var statearr_37140 = [null,null,null,null,null,null,null,null,null];
(statearr_37140[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27971__auto__);

(statearr_37140[(1)] = (1));

return statearr_37140;
});
var figwheel$client$heads_up_plugin_$_state_machine__27971__auto____1 = (function (state_37127){
while(true){
var ret_value__27972__auto__ = (function (){try{while(true){
var result__27973__auto__ = switch__27970__auto__.call(null,state_37127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27973__auto__;
}
break;
}
}catch (e37141){if((e37141 instanceof Object)){
var ex__27974__auto__ = e37141;
var statearr_37142_37151 = state_37127;
(statearr_37142_37151[(5)] = ex__27974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37141;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37152 = state_37127;
state_37127 = G__37152;
continue;
} else {
return ret_value__27972__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27971__auto__ = function(state_37127){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27971__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27971__auto____1.call(this,state_37127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27971__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27971__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27971__auto__;
})()
;})(switch__27970__auto__,c__28082__auto___37144,ch))
})();
var state__28084__auto__ = (function (){var statearr_37143 = f__28083__auto__.call(null);
(statearr_37143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28082__auto___37144);

return statearr_37143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28084__auto__);
});})(c__28082__auto___37144,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28082__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28082__auto__){
return (function (){
var f__28083__auto__ = (function (){var switch__27970__auto__ = ((function (c__28082__auto__){
return (function (state_37173){
var state_val_37174 = (state_37173[(1)]);
if((state_val_37174 === (1))){
var inst_37168 = cljs.core.async.timeout.call(null,(3000));
var state_37173__$1 = state_37173;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37173__$1,(2),inst_37168);
} else {
if((state_val_37174 === (2))){
var inst_37170 = (state_37173[(2)]);
var inst_37171 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37173__$1 = (function (){var statearr_37175 = state_37173;
(statearr_37175[(7)] = inst_37170);

return statearr_37175;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37173__$1,inst_37171);
} else {
return null;
}
}
});})(c__28082__auto__))
;
return ((function (switch__27970__auto__,c__28082__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27971__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27971__auto____0 = (function (){
var statearr_37179 = [null,null,null,null,null,null,null,null];
(statearr_37179[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27971__auto__);

(statearr_37179[(1)] = (1));

return statearr_37179;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27971__auto____1 = (function (state_37173){
while(true){
var ret_value__27972__auto__ = (function (){try{while(true){
var result__27973__auto__ = switch__27970__auto__.call(null,state_37173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27973__auto__;
}
break;
}
}catch (e37180){if((e37180 instanceof Object)){
var ex__27974__auto__ = e37180;
var statearr_37181_37183 = state_37173;
(statearr_37181_37183[(5)] = ex__27974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37184 = state_37173;
state_37173 = G__37184;
continue;
} else {
return ret_value__27972__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27971__auto__ = function(state_37173){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27971__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27971__auto____1.call(this,state_37173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27971__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27971__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27971__auto__;
})()
;})(switch__27970__auto__,c__28082__auto__))
})();
var state__28084__auto__ = (function (){var statearr_37182 = f__28083__auto__.call(null);
(statearr_37182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28082__auto__);

return statearr_37182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28084__auto__);
});})(c__28082__auto__))
);

return c__28082__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28082__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28082__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__28083__auto__ = (function (){var switch__27970__auto__ = ((function (c__28082__auto__,figwheel_version,temp__4657__auto__){
return (function (state_37207){
var state_val_37208 = (state_37207[(1)]);
if((state_val_37208 === (1))){
var inst_37201 = cljs.core.async.timeout.call(null,(2000));
var state_37207__$1 = state_37207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37207__$1,(2),inst_37201);
} else {
if((state_val_37208 === (2))){
var inst_37203 = (state_37207[(2)]);
var inst_37204 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_37205 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37204);
var state_37207__$1 = (function (){var statearr_37209 = state_37207;
(statearr_37209[(7)] = inst_37203);

return statearr_37209;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37207__$1,inst_37205);
} else {
return null;
}
}
});})(c__28082__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__27970__auto__,c__28082__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27971__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27971__auto____0 = (function (){
var statearr_37213 = [null,null,null,null,null,null,null,null];
(statearr_37213[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27971__auto__);

(statearr_37213[(1)] = (1));

return statearr_37213;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27971__auto____1 = (function (state_37207){
while(true){
var ret_value__27972__auto__ = (function (){try{while(true){
var result__27973__auto__ = switch__27970__auto__.call(null,state_37207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27973__auto__;
}
break;
}
}catch (e37214){if((e37214 instanceof Object)){
var ex__27974__auto__ = e37214;
var statearr_37215_37217 = state_37207;
(statearr_37215_37217[(5)] = ex__27974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37214;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37218 = state_37207;
state_37207 = G__37218;
continue;
} else {
return ret_value__27972__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27971__auto__ = function(state_37207){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27971__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27971__auto____1.call(this,state_37207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27971__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27971__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27971__auto__;
})()
;})(switch__27970__auto__,c__28082__auto__,figwheel_version,temp__4657__auto__))
})();
var state__28084__auto__ = (function (){var statearr_37216 = f__28083__auto__.call(null);
(statearr_37216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28082__auto__);

return statearr_37216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28084__auto__);
});})(c__28082__auto__,figwheel_version,temp__4657__auto__))
);

return c__28082__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37219){
var map__37223 = p__37219;
var map__37223__$1 = ((((!((map__37223 == null)))?((((map__37223.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37223.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37223):map__37223);
var file = cljs.core.get.call(null,map__37223__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37223__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37223__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37225 = "";
var G__37225__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__37225),cljs.core.str("file "),cljs.core.str(file)].join(''):G__37225);
var G__37225__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__37225__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__37225__$1);
if(cljs.core.truth_((function (){var and__24778__auto__ = line;
if(cljs.core.truth_(and__24778__auto__)){
return column;
} else {
return and__24778__auto__;
}
})())){
return [cljs.core.str(G__37225__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__37225__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37226){
var map__37233 = p__37226;
var map__37233__$1 = ((((!((map__37233 == null)))?((((map__37233.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37233.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37233):map__37233);
var ed = map__37233__$1;
var formatted_exception = cljs.core.get.call(null,map__37233__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37233__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37233__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37235_37239 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37236_37240 = null;
var count__37237_37241 = (0);
var i__37238_37242 = (0);
while(true){
if((i__37238_37242 < count__37237_37241)){
var msg_37243 = cljs.core._nth.call(null,chunk__37236_37240,i__37238_37242);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37243);

var G__37244 = seq__37235_37239;
var G__37245 = chunk__37236_37240;
var G__37246 = count__37237_37241;
var G__37247 = (i__37238_37242 + (1));
seq__37235_37239 = G__37244;
chunk__37236_37240 = G__37245;
count__37237_37241 = G__37246;
i__37238_37242 = G__37247;
continue;
} else {
var temp__4657__auto___37248 = cljs.core.seq.call(null,seq__37235_37239);
if(temp__4657__auto___37248){
var seq__37235_37249__$1 = temp__4657__auto___37248;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37235_37249__$1)){
var c__25601__auto___37250 = cljs.core.chunk_first.call(null,seq__37235_37249__$1);
var G__37251 = cljs.core.chunk_rest.call(null,seq__37235_37249__$1);
var G__37252 = c__25601__auto___37250;
var G__37253 = cljs.core.count.call(null,c__25601__auto___37250);
var G__37254 = (0);
seq__37235_37239 = G__37251;
chunk__37236_37240 = G__37252;
count__37237_37241 = G__37253;
i__37238_37242 = G__37254;
continue;
} else {
var msg_37255 = cljs.core.first.call(null,seq__37235_37249__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37255);

var G__37256 = cljs.core.next.call(null,seq__37235_37249__$1);
var G__37257 = null;
var G__37258 = (0);
var G__37259 = (0);
seq__37235_37239 = G__37256;
chunk__37236_37240 = G__37257;
count__37237_37241 = G__37258;
i__37238_37242 = G__37259;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37260){
var map__37263 = p__37260;
var map__37263__$1 = ((((!((map__37263 == null)))?((((map__37263.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37263.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37263):map__37263);
var w = map__37263__$1;
var message = cljs.core.get.call(null,map__37263__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__24778__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24778__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24778__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__37275 = cljs.core.seq.call(null,plugins);
var chunk__37276 = null;
var count__37277 = (0);
var i__37278 = (0);
while(true){
if((i__37278 < count__37277)){
var vec__37279 = cljs.core._nth.call(null,chunk__37276,i__37278);
var k = cljs.core.nth.call(null,vec__37279,(0),null);
var plugin = cljs.core.nth.call(null,vec__37279,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37285 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37275,chunk__37276,count__37277,i__37278,pl_37285,vec__37279,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37285.call(null,msg_hist);
});})(seq__37275,chunk__37276,count__37277,i__37278,pl_37285,vec__37279,k,plugin))
);
} else {
}

var G__37286 = seq__37275;
var G__37287 = chunk__37276;
var G__37288 = count__37277;
var G__37289 = (i__37278 + (1));
seq__37275 = G__37286;
chunk__37276 = G__37287;
count__37277 = G__37288;
i__37278 = G__37289;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37275);
if(temp__4657__auto__){
var seq__37275__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37275__$1)){
var c__25601__auto__ = cljs.core.chunk_first.call(null,seq__37275__$1);
var G__37290 = cljs.core.chunk_rest.call(null,seq__37275__$1);
var G__37291 = c__25601__auto__;
var G__37292 = cljs.core.count.call(null,c__25601__auto__);
var G__37293 = (0);
seq__37275 = G__37290;
chunk__37276 = G__37291;
count__37277 = G__37292;
i__37278 = G__37293;
continue;
} else {
var vec__37282 = cljs.core.first.call(null,seq__37275__$1);
var k = cljs.core.nth.call(null,vec__37282,(0),null);
var plugin = cljs.core.nth.call(null,vec__37282,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37294 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37275,chunk__37276,count__37277,i__37278,pl_37294,vec__37282,k,plugin,seq__37275__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37294.call(null,msg_hist);
});})(seq__37275,chunk__37276,count__37277,i__37278,pl_37294,vec__37282,k,plugin,seq__37275__$1,temp__4657__auto__))
);
} else {
}

var G__37295 = cljs.core.next.call(null,seq__37275__$1);
var G__37296 = null;
var G__37297 = (0);
var G__37298 = (0);
seq__37275 = G__37295;
chunk__37276 = G__37296;
count__37277 = G__37297;
i__37278 = G__37298;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args37299 = [];
var len__25865__auto___37306 = arguments.length;
var i__25866__auto___37307 = (0);
while(true){
if((i__25866__auto___37307 < len__25865__auto___37306)){
args37299.push((arguments[i__25866__auto___37307]));

var G__37308 = (i__25866__auto___37307 + (1));
i__25866__auto___37307 = G__37308;
continue;
} else {
}
break;
}

var G__37301 = args37299.length;
switch (G__37301) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37299.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__37302_37310 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37303_37311 = null;
var count__37304_37312 = (0);
var i__37305_37313 = (0);
while(true){
if((i__37305_37313 < count__37304_37312)){
var msg_37314 = cljs.core._nth.call(null,chunk__37303_37311,i__37305_37313);
figwheel.client.socket.handle_incoming_message.call(null,msg_37314);

var G__37315 = seq__37302_37310;
var G__37316 = chunk__37303_37311;
var G__37317 = count__37304_37312;
var G__37318 = (i__37305_37313 + (1));
seq__37302_37310 = G__37315;
chunk__37303_37311 = G__37316;
count__37304_37312 = G__37317;
i__37305_37313 = G__37318;
continue;
} else {
var temp__4657__auto___37319 = cljs.core.seq.call(null,seq__37302_37310);
if(temp__4657__auto___37319){
var seq__37302_37320__$1 = temp__4657__auto___37319;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37302_37320__$1)){
var c__25601__auto___37321 = cljs.core.chunk_first.call(null,seq__37302_37320__$1);
var G__37322 = cljs.core.chunk_rest.call(null,seq__37302_37320__$1);
var G__37323 = c__25601__auto___37321;
var G__37324 = cljs.core.count.call(null,c__25601__auto___37321);
var G__37325 = (0);
seq__37302_37310 = G__37322;
chunk__37303_37311 = G__37323;
count__37304_37312 = G__37324;
i__37305_37313 = G__37325;
continue;
} else {
var msg_37326 = cljs.core.first.call(null,seq__37302_37320__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37326);

var G__37327 = cljs.core.next.call(null,seq__37302_37320__$1);
var G__37328 = null;
var G__37329 = (0);
var G__37330 = (0);
seq__37302_37310 = G__37327;
chunk__37303_37311 = G__37328;
count__37304_37312 = G__37329;
i__37305_37313 = G__37330;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__25872__auto__ = [];
var len__25865__auto___37335 = arguments.length;
var i__25866__auto___37336 = (0);
while(true){
if((i__25866__auto___37336 < len__25865__auto___37335)){
args__25872__auto__.push((arguments[i__25866__auto___37336]));

var G__37337 = (i__25866__auto___37336 + (1));
i__25866__auto___37336 = G__37337;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37332){
var map__37333 = p__37332;
var map__37333__$1 = ((((!((map__37333 == null)))?((((map__37333.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37333.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37333):map__37333);
var opts = map__37333__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37331){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37331));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37339){if((e37339 instanceof Error)){
var e = e37339;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37339;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__37343){
var map__37344 = p__37343;
var map__37344__$1 = ((((!((map__37344 == null)))?((((map__37344.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37344.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37344):map__37344);
var msg_name = cljs.core.get.call(null,map__37344__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1485300117932