// Compiled by ClojureScript 1.9.229 {}
goog.provide('phzr.core');
goog.require('cljs.core');

/**
 * @interface
 */
phzr.core.IPhaserObj = function(){};

phzr.core.pset_BANG_ = (function phzr$core$pset_BANG_(this$,k,v){
if((!((this$ == null))) && (!((this$.phzr$core$IPhaserObj$pset_BANG_$arity$3 == null)))){
return this$.phzr$core$IPhaserObj$pset_BANG_$arity$3(this$,k,v);
} else {
var x__25453__auto__ = (((this$ == null))?null:this$);
var m__25454__auto__ = (phzr.core.pset_BANG_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,this$,k,v);
} else {
var m__25454__auto____$1 = (phzr.core.pset_BANG_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,this$,k,v);
} else {
throw cljs.core.missing_protocol.call(null,"IPhaserObj.pset!",this$);
}
}
}
});

phzr.core.blend_modes = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"hue","hue",-508078848),new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"darken","darken",1770242949),new cljs.core.Keyword(null,"saturation","saturation",-14247929),new cljs.core.Keyword(null,"lighten","lighten",-234464980),new cljs.core.Keyword(null,"soft_light","soft_light",634266220),new cljs.core.Keyword(null,"normal","normal",-1519123858),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"difference","difference",1916101396),new cljs.core.Keyword(null,"luminosity","luminosity",-483901643),new cljs.core.Keyword(null,"exclusion","exclusion",531897910),new cljs.core.Keyword(null,"hard_light","hard_light",1273816982),new cljs.core.Keyword(null,"color_burn","color_burn",566198263),new cljs.core.Keyword(null,"multiply","multiply",-1036907048),new cljs.core.Keyword(null,"add","add",235287739),new cljs.core.Keyword(null,"color_dodge","color_dodge",1145649180)],[(13),(3),(15),(5),(14),(6),(10),(0),(4),(11),(16),(12),(9),(8),(2),(1),(7)]);
phzr.core.scale_modes = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default","default",-1987822328),(0),new cljs.core.Keyword(null,"linear","linear",872268697),(0),new cljs.core.Keyword(null,"nearest","nearest",1176353890),(1)], null);
phzr.core.phaser_constants = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"headless","headless",-1277667327),new cljs.core.Keyword(null,"retrofont","retrofont",-898057631),new cljs.core.Keyword(null,"tilesprite","tilesprite",1027698529),new cljs.core.Keyword(null,"video","video",156888130),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"rendertexture","rendertexture",705492866),new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"rope","rope",-884235289),new cljs.core.Keyword(null,"bitmaptext","bitmaptext",-424131609),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"bitmapdata","bitmapdata",-1101400853),new cljs.core.Keyword(null,"canvas-filter","canvas-filter",648916044),new cljs.core.Keyword(null,"scale-modes","scale-modes",239545100),new cljs.core.Keyword(null,"webgl","webgl",1974307887),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.Keyword(null,"creature","creature",-1010611920),new cljs.core.Keyword(null,"tilemaplayer","tilemaplayer",597734736),new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword(null,"matrix","matrix",803137200),new cljs.core.Keyword(null,"blend-modes","blend-modes",-1063850735),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"tilemap","tilemap",407449043),new cljs.core.Keyword(null,"graphics","graphics",-2079995979),new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"spritebatch","spritebatch",-1311405928),new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"point","point",1813198264),new cljs.core.Keyword(null,"emitter","emitter",-374320583),new cljs.core.Keyword(null,"version","version",425292698),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"rectangle","rectangle",293163262),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"roundedrectangle","roundedrectangle",87609118),new cljs.core.Keyword(null,"webgl-filter","webgl-filter",771126399),new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"text","text",-1790561697)],[(3),(18),(5),(28),(4),(8),(7),(1),(20),(6),(21),(13),(14),phzr.core.scale_modes,(2),(3),(1),(27),(10),(0),(24),phzr.core.blend_modes,(19),(23),(9),(3),(16),(2),(17),(2),(25),(11),"2.4.2",(0),(22),(0),(26),(15),(12),(1),(4)]);
phzr.core.games = (function phzr$core$games(){
return Phaser.GAMES;
});
phzr.core.const$ = (function phzr$core$const(k){
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"games","games",1927565374))){
return phzr.core.games.call(null);
} else {
return cljs.core.get.call(null,phzr.core.phaser_constants,k);
}
});

//# sourceMappingURL=core.js.map?rel=1485300059998