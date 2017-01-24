// Compiled by ClojureScript 1.9.229 {}
goog.provide('puzzle.core');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('puzzle.game');
var c__28082__auto___31975 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28082__auto___31975){
return (function (){
var f__28083__auto__ = (function (){var switch__27970__auto__ = ((function (c__28082__auto___31975){
return (function (state_31966){
var state_val_31967 = (state_31966[(1)]);
if((state_val_31967 === (1))){
var inst_31945 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"query-params","query-params",900640534)];
var inst_31946 = ["lookfor"];
var inst_31947 = ["kirkko"];
var inst_31948 = cljs.core.PersistentHashMap.fromArrays(inst_31946,inst_31947);
var inst_31949 = [false,inst_31948];
var inst_31950 = cljs.core.PersistentHashMap.fromArrays(inst_31945,inst_31949);
var inst_31951 = cljs_http.client.get.call(null,"https://api.finna.fi/v1/search",inst_31950);
var state_31966__$1 = state_31966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31966__$1,(2),inst_31951);
} else {
if((state_val_31967 === (2))){
var inst_31953 = (state_31966[(2)]);
var inst_31954 = (function (){var response = inst_31953;
return ((function (response,inst_31953,state_val_31967,c__28082__auto___31975){
return (function (p1__31944_SHARP_){
return !((new cljs.core.Keyword(null,"images","images",1757475080).cljs$core$IFn$_invoke$arity$1(p1__31944_SHARP_) == null));
});
;})(response,inst_31953,state_val_31967,c__28082__auto___31975))
})();
var inst_31955 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31956 = [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"records","records",1326822832)];
var inst_31957 = (new cljs.core.PersistentVector(null,2,(5),inst_31955,inst_31956,null));
var inst_31958 = cljs.core.get_in.call(null,inst_31953,inst_31957);
var inst_31959 = cljs.core.filter.call(null,inst_31954,inst_31958);
var inst_31960 = cljs.core.first.call(null,inst_31959);
var inst_31961 = new cljs.core.Keyword(null,"images","images",1757475080).cljs$core$IFn$_invoke$arity$1(inst_31960);
var inst_31962 = cljs.core.first.call(null,inst_31961);
var inst_31963 = puzzle.game.start_puzzle.call(null,inst_31962);
var inst_31964 = cljs.pprint.pprint.call(null,inst_31963);
var state_31966__$1 = state_31966;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31966__$1,inst_31964);
} else {
return null;
}
}
});})(c__28082__auto___31975))
;
return ((function (switch__27970__auto__,c__28082__auto___31975){
return (function() {
var puzzle$core$state_machine__27971__auto__ = null;
var puzzle$core$state_machine__27971__auto____0 = (function (){
var statearr_31971 = [null,null,null,null,null,null,null];
(statearr_31971[(0)] = puzzle$core$state_machine__27971__auto__);

(statearr_31971[(1)] = (1));

return statearr_31971;
});
var puzzle$core$state_machine__27971__auto____1 = (function (state_31966){
while(true){
var ret_value__27972__auto__ = (function (){try{while(true){
var result__27973__auto__ = switch__27970__auto__.call(null,state_31966);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27973__auto__;
}
break;
}
}catch (e31972){if((e31972 instanceof Object)){
var ex__27974__auto__ = e31972;
var statearr_31973_31976 = state_31966;
(statearr_31973_31976[(5)] = ex__27974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31966);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31972;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31977 = state_31966;
state_31966 = G__31977;
continue;
} else {
return ret_value__27972__auto__;
}
break;
}
});
puzzle$core$state_machine__27971__auto__ = function(state_31966){
switch(arguments.length){
case 0:
return puzzle$core$state_machine__27971__auto____0.call(this);
case 1:
return puzzle$core$state_machine__27971__auto____1.call(this,state_31966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
puzzle$core$state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$0 = puzzle$core$state_machine__27971__auto____0;
puzzle$core$state_machine__27971__auto__.cljs$core$IFn$_invoke$arity$1 = puzzle$core$state_machine__27971__auto____1;
return puzzle$core$state_machine__27971__auto__;
})()
;})(switch__27970__auto__,c__28082__auto___31975))
})();
var state__28084__auto__ = (function (){var statearr_31974 = f__28083__auto__.call(null);
(statearr_31974[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28082__auto___31975);

return statearr_31974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28084__auto__);
});})(c__28082__auto___31975))
);


//# sourceMappingURL=core.js.map?rel=1485300088363