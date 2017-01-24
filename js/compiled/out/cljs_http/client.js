// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__24778__auto__ = v;
if(cljs.core.truth_(and__24778__auto__)){
return (v > (0));
} else {
return and__24778__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(!(clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__31726_SHARP_,p2__31725_SHARP_){
var vec__31730 = clojure.string.split.call(null,p2__31725_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__31730,(0),null);
var v = cljs.core.nth.call(null,vec__31730,(1),null);
return cljs.core.assoc.call(null,p1__31726_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode.call(null,[cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__31733_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__31733_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__31734){
var vec__31738 = p__31734;
var k = cljs.core.nth.call(null,vec__31738,(0),null);
var v = cljs.core.nth.call(null,vec__31738,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__31741_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__31741_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__24778__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__24778__auto__){
var and__24778__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__24778__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__24778__auto____$1;
}
} else {
return and__24778__auto__;
}
})())){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__31742_SHARP_){
return cljs_http.client.decode_body.call(null,p1__31742_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__25872__auto__ = [];
var len__25865__auto___31749 = arguments.length;
var i__25866__auto___31750 = (0);
while(true){
if((i__25866__auto___31750 < len__25865__auto___31749)){
args__25872__auto__.push((arguments[i__25866__auto___31750]));

var G__31751 = (i__25866__auto___31750 + (1));
i__25866__auto___31750 = G__31751;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__31745){
var vec__31746 = p__31745;
var default_headers = cljs.core.nth.call(null,vec__31746,(0),null);
return ((function (vec__31746,default_headers){
return (function (request){
var temp__4655__auto__ = (function (){var or__24790__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var default_headers__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
;})(vec__31746,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq31743){
var G__31744 = cljs.core.first.call(null,seq31743);
var seq31743__$1 = cljs.core.next.call(null,seq31743);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__31744,seq31743__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__25872__auto__ = [];
var len__25865__auto___31758 = arguments.length;
var i__25866__auto___31759 = (0);
while(true){
if((i__25866__auto___31759 < len__25865__auto___31758)){
args__25872__auto__.push((arguments[i__25866__auto___31759]));

var G__31760 = (i__25866__auto___31759 + (1));
i__25866__auto___31759 = G__31760;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__31754){
var vec__31755 = p__31754;
var accept = cljs.core.nth.call(null,vec__31755,(0),null);
return ((function (vec__31755,accept){
return (function (request){
var temp__4655__auto__ = (function (){var or__24790__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var accept__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__31755,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq31752){
var G__31753 = cljs.core.first.call(null,seq31752);
var seq31752__$1 = cljs.core.next.call(null,seq31752);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__31753,seq31752__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__25872__auto__ = [];
var len__25865__auto___31767 = arguments.length;
var i__25866__auto___31768 = (0);
while(true){
if((i__25866__auto___31768 < len__25865__auto___31767)){
args__25872__auto__.push((arguments[i__25866__auto___31768]));

var G__31769 = (i__25866__auto___31768 + (1));
i__25866__auto___31768 = G__31769;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__31763){
var vec__31764 = p__31763;
var content_type = cljs.core.nth.call(null,vec__31764,(0),null);
return ((function (vec__31764,content_type){
return (function (request){
var temp__4655__auto__ = (function (){var or__24790__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var content_type__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__31764,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq31761){
var G__31762 = cljs.core.first.call(null,seq31761);
var seq31761__$1 = cljs.core.next.call(null,seq31761);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__31762,seq31761__$1);
});

cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var map__31772 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__31772__$1 = ((((!((map__31772 == null)))?((((map__31772.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31772.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31772):map__31772);
var encoding = cljs.core.get.call(null,map__31772__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__31772__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__31778 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__31778__$1 = ((((!((map__31778 == null)))?((((map__31778.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31778.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31778):map__31778);
var decoding = cljs.core.get.call(null,map__31778__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__31778__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__31778,map__31778__$1,decoding,decoding_opts){
return (function (p1__31774_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__31774_SHARP_,decoding,decoding_opts);
});})(map__31778,map__31778__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__31778,map__31778__$1,decoding,decoding_opts,transit_decode){
return (function (p1__31775_SHARP_){
return cljs_http.client.decode_body.call(null,p1__31775_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__31778,map__31778__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__31780_SHARP_){
return cljs_http.client.decode_body.call(null,p1__31780_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__31784){
var map__31785 = p__31784;
var map__31785__$1 = ((((!((map__31785 == null)))?((((map__31785.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31785.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31785):map__31785);
var req = map__31785__$1;
var query_params = cljs.core.get.call(null,map__31785__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__31790){
var map__31791 = p__31790;
var map__31791__$1 = ((((!((map__31791 == null)))?((((map__31791.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31791.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31791):map__31791);
var request = map__31791__$1;
var form_params = cljs.core.get.call(null,map__31791__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__31791__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__31791__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__24778__auto__ = form_params;
if(cljs.core.truth_(and__24778__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__24778__auto__;
}
})())){
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers);
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__31803_31813 = cljs.core.seq.call(null,params);
var chunk__31804_31814 = null;
var count__31805_31815 = (0);
var i__31806_31816 = (0);
while(true){
if((i__31806_31816 < count__31805_31815)){
var vec__31807_31817 = cljs.core._nth.call(null,chunk__31804_31814,i__31806_31816);
var k_31818 = cljs.core.nth.call(null,vec__31807_31817,(0),null);
var v_31819 = cljs.core.nth.call(null,vec__31807_31817,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_31819)){
form_data.append(cljs.core.name.call(null,k_31818),cljs.core.first.call(null,v_31819),cljs.core.second.call(null,v_31819));
} else {
form_data.append(cljs.core.name.call(null,k_31818),v_31819);
}

var G__31820 = seq__31803_31813;
var G__31821 = chunk__31804_31814;
var G__31822 = count__31805_31815;
var G__31823 = (i__31806_31816 + (1));
seq__31803_31813 = G__31820;
chunk__31804_31814 = G__31821;
count__31805_31815 = G__31822;
i__31806_31816 = G__31823;
continue;
} else {
var temp__4657__auto___31824 = cljs.core.seq.call(null,seq__31803_31813);
if(temp__4657__auto___31824){
var seq__31803_31825__$1 = temp__4657__auto___31824;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31803_31825__$1)){
var c__25601__auto___31826 = cljs.core.chunk_first.call(null,seq__31803_31825__$1);
var G__31827 = cljs.core.chunk_rest.call(null,seq__31803_31825__$1);
var G__31828 = c__25601__auto___31826;
var G__31829 = cljs.core.count.call(null,c__25601__auto___31826);
var G__31830 = (0);
seq__31803_31813 = G__31827;
chunk__31804_31814 = G__31828;
count__31805_31815 = G__31829;
i__31806_31816 = G__31830;
continue;
} else {
var vec__31810_31831 = cljs.core.first.call(null,seq__31803_31825__$1);
var k_31832 = cljs.core.nth.call(null,vec__31810_31831,(0),null);
var v_31833 = cljs.core.nth.call(null,vec__31810_31831,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_31833)){
form_data.append(cljs.core.name.call(null,k_31832),cljs.core.first.call(null,v_31833),cljs.core.second.call(null,v_31833));
} else {
form_data.append(cljs.core.name.call(null,k_31832),v_31833);
}

var G__31834 = cljs.core.next.call(null,seq__31803_31825__$1);
var G__31835 = null;
var G__31836 = (0);
var G__31837 = (0);
seq__31803_31813 = G__31834;
chunk__31804_31814 = G__31835;
count__31805_31815 = G__31836;
i__31806_31816 = G__31837;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__31841){
var map__31842 = p__31841;
var map__31842__$1 = ((((!((map__31842 == null)))?((((map__31842.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31842.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31842):map__31842);
var request = map__31842__$1;
var multipart_params = cljs.core.get.call(null,map__31842__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__31842__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__24778__auto__ = multipart_params;
if(cljs.core.truth_(and__24778__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__24778__auto__;
}
})())){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data.call(null,multipart_params)));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__4655__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var m = temp__4655__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__31844_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__31844_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__31849){
var map__31850 = p__31849;
var map__31850__$1 = ((((!((map__31850 == null)))?((((map__31850.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31850.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31850):map__31850);
var req = map__31850__$1;
var query_params = cljs.core.get.call(null,map__31850__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4655__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4655__auto__,map__31850,map__31850__$1,req,query_params){
return (function (p1__31845_SHARP_){
return cljs.core.merge.call(null,p1__31845_SHARP_,query_params);
});})(spec,temp__4655__auto__,map__31850,map__31850__$1,req,query_params))
));
} else {
return client.call(null,req);
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__25872__auto__ = [];
var len__25865__auto___31858 = arguments.length;
var i__25866__auto___31859 = (0);
while(true){
if((i__25866__auto___31859 < len__25865__auto___31858)){
args__25872__auto__.push((arguments[i__25866__auto___31859]));

var G__31860 = (i__25866__auto___31859 + (1));
i__25866__auto___31859 = G__31860;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__31854){
var vec__31855 = p__31854;
var credentials = cljs.core.nth.call(null,vec__31855,(0),null);
return ((function (vec__31855,credentials){
return (function (req){
var credentials__$1 = (function (){var or__24790__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__31855,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq31852){
var G__31853 = cljs.core.first.call(null,seq31852);
var seq31852__$1 = cljs.core.next.call(null,seq31852);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__31853,seq31852__$1);
});

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4655__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var oauth_token = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var custom_channel = temp__4655__auto__;
return cljs.core.async.pipe.call(null,client.call(null,request),custom_channel);
} else {
return client.call(null,request);
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers.call(null,cljs_http.client.wrap_channel_from_request_map.call(null,cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_multipart_params.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__25872__auto__ = [];
var len__25865__auto___31867 = arguments.length;
var i__25866__auto___31868 = (0);
while(true){
if((i__25866__auto___31868 < len__25865__auto___31867)){
args__25872__auto__.push((arguments[i__25866__auto___31868]));

var G__31869 = (i__25866__auto___31868 + (1));
i__25866__auto___31868 = G__31869;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__31863){
var vec__31864 = p__31863;
var req = cljs.core.nth.call(null,vec__31864,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq31861){
var G__31862 = cljs.core.first.call(null,seq31861);
var seq31861__$1 = cljs.core.next.call(null,seq31861);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__31862,seq31861__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__25872__auto__ = [];
var len__25865__auto___31876 = arguments.length;
var i__25866__auto___31877 = (0);
while(true){
if((i__25866__auto___31877 < len__25865__auto___31876)){
args__25872__auto__.push((arguments[i__25866__auto___31877]));

var G__31878 = (i__25866__auto___31877 + (1));
i__25866__auto___31877 = G__31878;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__31872){
var vec__31873 = p__31872;
var req = cljs.core.nth.call(null,vec__31873,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq31870){
var G__31871 = cljs.core.first.call(null,seq31870);
var seq31870__$1 = cljs.core.next.call(null,seq31870);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__31871,seq31870__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__25872__auto__ = [];
var len__25865__auto___31885 = arguments.length;
var i__25866__auto___31886 = (0);
while(true){
if((i__25866__auto___31886 < len__25865__auto___31885)){
args__25872__auto__.push((arguments[i__25866__auto___31886]));

var G__31887 = (i__25866__auto___31886 + (1));
i__25866__auto___31886 = G__31887;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__31881){
var vec__31882 = p__31881;
var req = cljs.core.nth.call(null,vec__31882,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq31879){
var G__31880 = cljs.core.first.call(null,seq31879);
var seq31879__$1 = cljs.core.next.call(null,seq31879);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__31880,seq31879__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__25872__auto__ = [];
var len__25865__auto___31894 = arguments.length;
var i__25866__auto___31895 = (0);
while(true){
if((i__25866__auto___31895 < len__25865__auto___31894)){
args__25872__auto__.push((arguments[i__25866__auto___31895]));

var G__31896 = (i__25866__auto___31895 + (1));
i__25866__auto___31895 = G__31896;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__31890){
var vec__31891 = p__31890;
var req = cljs.core.nth.call(null,vec__31891,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq31888){
var G__31889 = cljs.core.first.call(null,seq31888);
var seq31888__$1 = cljs.core.next.call(null,seq31888);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__31889,seq31888__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__25872__auto__ = [];
var len__25865__auto___31903 = arguments.length;
var i__25866__auto___31904 = (0);
while(true){
if((i__25866__auto___31904 < len__25865__auto___31903)){
args__25872__auto__.push((arguments[i__25866__auto___31904]));

var G__31905 = (i__25866__auto___31904 + (1));
i__25866__auto___31904 = G__31905;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__31899){
var vec__31900 = p__31899;
var req = cljs.core.nth.call(null,vec__31900,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq31897){
var G__31898 = cljs.core.first.call(null,seq31897);
var seq31897__$1 = cljs.core.next.call(null,seq31897);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__31898,seq31897__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__25872__auto__ = [];
var len__25865__auto___31912 = arguments.length;
var i__25866__auto___31913 = (0);
while(true){
if((i__25866__auto___31913 < len__25865__auto___31912)){
args__25872__auto__.push((arguments[i__25866__auto___31913]));

var G__31914 = (i__25866__auto___31913 + (1));
i__25866__auto___31913 = G__31914;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__31908){
var vec__31909 = p__31908;
var req = cljs.core.nth.call(null,vec__31909,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq31906){
var G__31907 = cljs.core.first.call(null,seq31906);
var seq31906__$1 = cljs.core.next.call(null,seq31906);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__31907,seq31906__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__25872__auto__ = [];
var len__25865__auto___31921 = arguments.length;
var i__25866__auto___31922 = (0);
while(true){
if((i__25866__auto___31922 < len__25865__auto___31921)){
args__25872__auto__.push((arguments[i__25866__auto___31922]));

var G__31923 = (i__25866__auto___31922 + (1));
i__25866__auto___31922 = G__31923;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__31917){
var vec__31918 = p__31917;
var req = cljs.core.nth.call(null,vec__31918,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq31915){
var G__31916 = cljs.core.first.call(null,seq31915);
var seq31915__$1 = cljs.core.next.call(null,seq31915);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__31916,seq31915__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__25872__auto__ = [];
var len__25865__auto___31930 = arguments.length;
var i__25866__auto___31931 = (0);
while(true){
if((i__25866__auto___31931 < len__25865__auto___31930)){
args__25872__auto__.push((arguments[i__25866__auto___31931]));

var G__31932 = (i__25866__auto___31931 + (1));
i__25866__auto___31931 = G__31932;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__31926){
var vec__31927 = p__31926;
var req = cljs.core.nth.call(null,vec__31927,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq31924){
var G__31925 = cljs.core.first.call(null,seq31924);
var seq31924__$1 = cljs.core.next.call(null,seq31924);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__31925,seq31924__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__25872__auto__ = [];
var len__25865__auto___31939 = arguments.length;
var i__25866__auto___31940 = (0);
while(true){
if((i__25866__auto___31940 < len__25865__auto___31939)){
args__25872__auto__.push((arguments[i__25866__auto___31940]));

var G__31941 = (i__25866__auto___31940 + (1));
i__25866__auto___31940 = G__31941;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__31935){
var vec__31936 = p__31935;
var req = cljs.core.nth.call(null,vec__31936,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq31933){
var G__31934 = cljs.core.first.call(null,seq31933);
var seq31933__$1 = cljs.core.next.call(null,seq31933);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__31934,seq31933__$1);
});


//# sourceMappingURL=client.js.map?rel=1485300088113