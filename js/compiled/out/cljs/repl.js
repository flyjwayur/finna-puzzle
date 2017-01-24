// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34482){
var map__34507 = p__34482;
var map__34507__$1 = ((((!((map__34507 == null)))?((((map__34507.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34507.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34507):map__34507);
var m = map__34507__$1;
var n = cljs.core.get.call(null,map__34507__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__34507__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34509_34531 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34510_34532 = null;
var count__34511_34533 = (0);
var i__34512_34534 = (0);
while(true){
if((i__34512_34534 < count__34511_34533)){
var f_34535 = cljs.core._nth.call(null,chunk__34510_34532,i__34512_34534);
cljs.core.println.call(null,"  ",f_34535);

var G__34536 = seq__34509_34531;
var G__34537 = chunk__34510_34532;
var G__34538 = count__34511_34533;
var G__34539 = (i__34512_34534 + (1));
seq__34509_34531 = G__34536;
chunk__34510_34532 = G__34537;
count__34511_34533 = G__34538;
i__34512_34534 = G__34539;
continue;
} else {
var temp__4657__auto___34540 = cljs.core.seq.call(null,seq__34509_34531);
if(temp__4657__auto___34540){
var seq__34509_34541__$1 = temp__4657__auto___34540;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34509_34541__$1)){
var c__25601__auto___34542 = cljs.core.chunk_first.call(null,seq__34509_34541__$1);
var G__34543 = cljs.core.chunk_rest.call(null,seq__34509_34541__$1);
var G__34544 = c__25601__auto___34542;
var G__34545 = cljs.core.count.call(null,c__25601__auto___34542);
var G__34546 = (0);
seq__34509_34531 = G__34543;
chunk__34510_34532 = G__34544;
count__34511_34533 = G__34545;
i__34512_34534 = G__34546;
continue;
} else {
var f_34547 = cljs.core.first.call(null,seq__34509_34541__$1);
cljs.core.println.call(null,"  ",f_34547);

var G__34548 = cljs.core.next.call(null,seq__34509_34541__$1);
var G__34549 = null;
var G__34550 = (0);
var G__34551 = (0);
seq__34509_34531 = G__34548;
chunk__34510_34532 = G__34549;
count__34511_34533 = G__34550;
i__34512_34534 = G__34551;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34552 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24790__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_34552);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_34552)))?cljs.core.second.call(null,arglists_34552):arglists_34552));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34513_34553 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34514_34554 = null;
var count__34515_34555 = (0);
var i__34516_34556 = (0);
while(true){
if((i__34516_34556 < count__34515_34555)){
var vec__34517_34557 = cljs.core._nth.call(null,chunk__34514_34554,i__34516_34556);
var name_34558 = cljs.core.nth.call(null,vec__34517_34557,(0),null);
var map__34520_34559 = cljs.core.nth.call(null,vec__34517_34557,(1),null);
var map__34520_34560__$1 = ((((!((map__34520_34559 == null)))?((((map__34520_34559.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34520_34559.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34520_34559):map__34520_34559);
var doc_34561 = cljs.core.get.call(null,map__34520_34560__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34562 = cljs.core.get.call(null,map__34520_34560__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34558);

cljs.core.println.call(null," ",arglists_34562);

if(cljs.core.truth_(doc_34561)){
cljs.core.println.call(null," ",doc_34561);
} else {
}

var G__34563 = seq__34513_34553;
var G__34564 = chunk__34514_34554;
var G__34565 = count__34515_34555;
var G__34566 = (i__34516_34556 + (1));
seq__34513_34553 = G__34563;
chunk__34514_34554 = G__34564;
count__34515_34555 = G__34565;
i__34516_34556 = G__34566;
continue;
} else {
var temp__4657__auto___34567 = cljs.core.seq.call(null,seq__34513_34553);
if(temp__4657__auto___34567){
var seq__34513_34568__$1 = temp__4657__auto___34567;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34513_34568__$1)){
var c__25601__auto___34569 = cljs.core.chunk_first.call(null,seq__34513_34568__$1);
var G__34570 = cljs.core.chunk_rest.call(null,seq__34513_34568__$1);
var G__34571 = c__25601__auto___34569;
var G__34572 = cljs.core.count.call(null,c__25601__auto___34569);
var G__34573 = (0);
seq__34513_34553 = G__34570;
chunk__34514_34554 = G__34571;
count__34515_34555 = G__34572;
i__34516_34556 = G__34573;
continue;
} else {
var vec__34522_34574 = cljs.core.first.call(null,seq__34513_34568__$1);
var name_34575 = cljs.core.nth.call(null,vec__34522_34574,(0),null);
var map__34525_34576 = cljs.core.nth.call(null,vec__34522_34574,(1),null);
var map__34525_34577__$1 = ((((!((map__34525_34576 == null)))?((((map__34525_34576.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34525_34576.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34525_34576):map__34525_34576);
var doc_34578 = cljs.core.get.call(null,map__34525_34577__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34579 = cljs.core.get.call(null,map__34525_34577__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34575);

cljs.core.println.call(null," ",arglists_34579);

if(cljs.core.truth_(doc_34578)){
cljs.core.println.call(null," ",doc_34578);
} else {
}

var G__34580 = cljs.core.next.call(null,seq__34513_34568__$1);
var G__34581 = null;
var G__34582 = (0);
var G__34583 = (0);
seq__34513_34553 = G__34580;
chunk__34514_34554 = G__34581;
count__34515_34555 = G__34582;
i__34516_34556 = G__34583;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__34527 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34528 = null;
var count__34529 = (0);
var i__34530 = (0);
while(true){
if((i__34530 < count__34529)){
var role = cljs.core._nth.call(null,chunk__34528,i__34530);
var temp__4657__auto___34584__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___34584__$1)){
var spec_34585 = temp__4657__auto___34584__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_34585));
} else {
}

var G__34586 = seq__34527;
var G__34587 = chunk__34528;
var G__34588 = count__34529;
var G__34589 = (i__34530 + (1));
seq__34527 = G__34586;
chunk__34528 = G__34587;
count__34529 = G__34588;
i__34530 = G__34589;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__34527);
if(temp__4657__auto____$1){
var seq__34527__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34527__$1)){
var c__25601__auto__ = cljs.core.chunk_first.call(null,seq__34527__$1);
var G__34590 = cljs.core.chunk_rest.call(null,seq__34527__$1);
var G__34591 = c__25601__auto__;
var G__34592 = cljs.core.count.call(null,c__25601__auto__);
var G__34593 = (0);
seq__34527 = G__34590;
chunk__34528 = G__34591;
count__34529 = G__34592;
i__34530 = G__34593;
continue;
} else {
var role = cljs.core.first.call(null,seq__34527__$1);
var temp__4657__auto___34594__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___34594__$2)){
var spec_34595 = temp__4657__auto___34594__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_34595));
} else {
}

var G__34596 = cljs.core.next.call(null,seq__34527__$1);
var G__34597 = null;
var G__34598 = (0);
var G__34599 = (0);
seq__34527 = G__34596;
chunk__34528 = G__34597;
count__34529 = G__34598;
i__34530 = G__34599;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1485300102970