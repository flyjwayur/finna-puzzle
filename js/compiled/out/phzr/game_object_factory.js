// Compiled by ClojureScript 1.9.229 {}
goog.provide('phzr.game_object_factory');
goog.require('cljs.core');
goog.require('phzr.impl.utils.core');
goog.require('phzr.impl.extend');
goog.require('cljsjs.phaser');
/**
 * The GameObjectFactory is a quick way to create many common game objects
 *   using {@linkcode Phaser.Game#add `game.add`}.
 * 
 *   Created objects are _automatically added_ to the appropriate Manager, World, or manually specified parent Group.
 * 
 *   Parameters:
 *  * game (Phaser.Game) - A reference to the currently running game.
 */
phzr.game_object_factory.__GT_GameObjectFactory = (function phzr$game_object_factory$__GT_GameObjectFactory(game){
return (new Phaser.GameObjectFactory(phzr.impl.utils.core.clj__GT_phaser.call(null,game)));
});
/**
 * Creates a new Sound object.
 * 
 *   Parameters:
 *  * game-object-factory (Phaser.GameObjectFactory) - Targeted instance for method
 *  * key (string) - The Game.cache key of the sound that this object will use.
 *  * volume (number) {optional} - The volume at which the sound will be played.
 *  * loop (boolean) {optional} - Whether or not the sound will loop.
 *  * connect (boolean) {optional} - Controls if the created Sound object will connect to the master gainNode of the SoundManager when running under WebAudio.
 * 
 *   Returns:  Phaser.Sound - The newly created sound object.
 */
phzr.game_object_factory.audio = (function phzr$game_object_factory$audio(var_args){
var args31011 = [];
var len__25865__auto___31014 = arguments.length;
var i__25866__auto___31015 = (0);
while(true){
if((i__25866__auto___31015 < len__25865__auto___31014)){
args31011.push((arguments[i__25866__auto___31015]));

var G__31016 = (i__25866__auto___31015 + (1));
i__25866__auto___31015 = G__31016;
continue;
} else {
}
break;
}

var G__31013 = args31011.length;
switch (G__31013) {
case 2:
return phzr.game_object_factory.audio.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.game_object_factory.audio.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.game_object_factory.audio.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.game_object_factory.audio.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31011.length)].join('')));

}
});

phzr.game_object_factory.audio.cljs$core$IFn$_invoke$arity$2 = (function (game_object_factory,key){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.audio(phzr.impl.utils.core.clj__GT_phaser.call(null,key)));
});

phzr.game_object_factory.audio.cljs$core$IFn$_invoke$arity$3 = (function (game_object_factory,key,volume){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.audio(phzr.impl.utils.core.clj__GT_phaser.call(null,key),phzr.impl.utils.core.clj__GT_phaser.call(null,volume)));
});

phzr.game_object_factory.audio.cljs$core$IFn$_invoke$arity$4 = (function (game_object_factory,key,volume,loop){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.audio(phzr.impl.utils.core.clj__GT_phaser.call(null,key),phzr.impl.utils.core.clj__GT_phaser.call(null,volume),phzr.impl.utils.core.clj__GT_phaser.call(null,loop)));
});

phzr.game_object_factory.audio.cljs$core$IFn$_invoke$arity$5 = (function (game_object_factory,key,volume,loop,connect){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.audio(phzr.impl.utils.core.clj__GT_phaser.call(null,key),phzr.impl.utils.core.clj__GT_phaser.call(null,volume),phzr.impl.utils.core.clj__GT_phaser.call(null,loop),phzr.impl.utils.core.clj__GT_phaser.call(null,connect)));
});

phzr.game_object_factory.audio.cljs$lang$maxFixedArity = 5;

/**
 * Creates a new AudioSprite object.
 * 
 *   Parameters:
 *  * game-object-factory (Phaser.GameObjectFactory) - Targeted instance for method
 *  * key (string) - The Game.cache key of the sound that this object will use.
 * 
 *   Returns:  Phaser.AudioSprite - The newly created AudioSprite object.
 */
phzr.game_object_factory.audio_sprite = (function phzr$game_object_factory$audio_sprite(game_object_factory,key){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.audioSprite(phzr.impl.utils.core.clj__GT_phaser.call(null,key)));
});
/**
 * Create a BitmapData object.
 * 
 *   A BitmapData object can be manipulated and drawn to like a traditional Canvas object and used to texture Sprites.
 * 
 *   Parameters:
 *  * game-object-factory (Phaser.GameObjectFactory) - Targeted instance for method
 *  * width (number) {optional} - The width of the BitmapData in pixels.
 *  * height (number) {optional} - The height of the BitmapData in pixels.
 *  * key (string) {optional} - Asset key for the BitmapData when stored in the Cache (see addToCache parameter).
 *  * add-to-cache (boolean) {optional} - Should this BitmapData be added to the Game.Cache? If so you can retrieve it with Cache.getBitmapData(key)
 * 
 *   Returns:  Phaser.BitmapData - The newly created BitmapData object.
 */
phzr.game_object_factory.bitmap_data = (function phzr$game_object_factory$bitmap_data(var_args){
var args31018 = [];
var len__25865__auto___31021 = arguments.length;
var i__25866__auto___31022 = (0);
while(true){
if((i__25866__auto___31022 < len__25865__auto___31021)){
args31018.push((arguments[i__25866__auto___31022]));

var G__31023 = (i__25866__auto___31022 + (1));
i__25866__auto___31022 = G__31023;
continue;
} else {
}
break;
}

var G__31020 = args31018.length;
switch (G__31020) {
case 1:
return phzr.game_object_factory.bitmap_data.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.game_object_factory.bitmap_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.game_object_factory.bitmap_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.game_object_factory.bitmap_data.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.game_object_factory.bitmap_data.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31018.length)].join('')));

}
});

phzr.game_object_factory.bitmap_data.cljs$core$IFn$_invoke$arity$1 = (function (game_object_factory){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.bitmapData());
});

phzr.game_object_factory.bitmap_data.cljs$core$IFn$_invoke$arity$2 = (function (game_object_factory,width){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.bitmapData(phzr.impl.utils.core.clj__GT_phaser.call(null,width)));
});

phzr.game_object_factory.bitmap_data.cljs$core$IFn$_invoke$arity$3 = (function (game_object_factory,width,height){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.bitmapData(phzr.impl.utils.core.clj__GT_phaser.call(null,width),phzr.impl.utils.core.clj__GT_phaser.call(null,height)));
});

phzr.game_object_factory.bitmap_data.cljs$core$IFn$_invoke$arity$4 = (function (game_object_factory,width,height,key){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.bitmapData(phzr.impl.utils.core.clj__GT_phaser.call(null,width),phzr.impl.utils.core.clj__GT_phaser.call(null,height),phzr.impl.utils.core.clj__GT_phaser.call(null,key)));
});

phzr.game_object_factory.bitmap_data.cljs$core$IFn$_invoke$arity$5 = (function (game_object_factory,width,height,key,add_to_cache){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.bitmapData(phzr.impl.utils.core.clj__GT_phaser.call(null,width),phzr.impl.utils.core.clj__GT_phaser.call(null,height),phzr.impl.utils.core.clj__GT_phaser.call(null,key),phzr.impl.utils.core.clj__GT_phaser.call(null,add_to_cache)));
});

phzr.game_object_factory.bitmap_data.cljs$lang$maxFixedArity = 5;

/**
 * Create a new BitmapText object.
 * 
 *   BitmapText objects work by taking a texture file and an XML file that describes the font structure.
 *   It then generates a new Sprite object for each letter of the text, proportionally spaced out and aligned to 
 *   match the font structure.
 * 
 *   BitmapText objects are less flexible than Text objects, in that they have less features such as shadows, fills and the ability 
 *   to use Web Fonts. However you trade this flexibility for pure rendering speed. You can also create visually compelling BitmapTexts by 
 *   processing the font texture in an image editor first, applying fills and any other effects required.
 * 
 *   To create multi-line text insert \r, \n or \r\n escape codes into the text string.
 * 
 *   To create a BitmapText data files you can use:
 * 
 *   BMFont (Windows, free): http://www.angelcode.com/products/bmfont/
 *   Glyph Designer (OS X, commercial): http://www.71squared.com/en/glyphdesigner
 *   Littera (Web-based, free): http://kvazars.com/littera/
 * 
 *   Parameters:
 *  * game-object-factory (Phaser.GameObjectFactory) - Targeted instance for method
 *  * x (number) - X coordinate to display the BitmapText object at.
 *  * y (number) - Y coordinate to display the BitmapText object at.
 *  * font (string) - The key of the BitmapText as stored in Phaser.Cache.
 *  * text (string) {optional} - The text that will be rendered. This can also be set later via BitmapText.text.
 *  * size (number) {optional} - The size the font will be rendered at in pixels.
 *  * group (Phaser.Group) {optional} - Optional Group to add the object to. If not specified it will be added to the World group.
 * 
 *   Returns:  Phaser.BitmapText - The newly created bitmapText object.
 */
phzr.game_object_factory.bitmap_text = (function phzr$game_object_factory$bitmap_text(var_args){
var args31025 = [];
var len__25865__auto___31028 = arguments.length;
var i__25866__auto___31029 = (0);
while(true){
if((i__25866__auto___31029 < len__25865__auto___31028)){
args31025.push((arguments[i__25866__auto___31029]));

var G__31030 = (i__25866__auto___31029 + (1));
i__25866__auto___31029 = G__31030;
continue;
} else {
}
break;
}

var G__31027 = args31025.length;
switch (G__31027) {
case 4:
return phzr.game_object_factory.bitmap_text.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.game_object_factory.bitmap_text.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return phzr.game_object_factory.bitmap_text.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return phzr.game_object_factory.bitmap_text.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31025.length)].join('')));

}
});

phzr.game_object_factory.bitmap_text.cljs$core$IFn$_invoke$arity$4 = (function (game_object_factory,x,y,font){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.bitmapText(phzr.impl.utils.core.clj__GT_phaser.call(null,x),phzr.impl.utils.core.clj__GT_phaser.call(null,y),phzr.impl.utils.core.clj__GT_phaser.call(null,font)));
});

phzr.game_object_factory.bitmap_text.cljs$core$IFn$_invoke$arity$5 = (function (game_object_factory,x,y,font,text){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.bitmapText(phzr.impl.utils.core.clj__GT_phaser.call(null,x),phzr.impl.utils.core.clj__GT_phaser.call(null,y),phzr.impl.utils.core.clj__GT_phaser.call(null,font),phzr.impl.utils.core.clj__GT_phaser.call(null,text)));
});

phzr.game_object_factory.bitmap_text.cljs$core$IFn$_invoke$arity$6 = (function (game_object_factory,x,y,font,text,size){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.bitmapText(phzr.impl.utils.core.clj__GT_phaser.call(null,x),phzr.impl.utils.core.clj__GT_phaser.call(null,y),phzr.impl.utils.core.clj__GT_phaser.call(null,font),phzr.impl.utils.core.clj__GT_phaser.call(null,text),phzr.impl.utils.core.clj__GT_phaser.call(null,size)));
});

phzr.game_object_factory.bitmap_text.cljs$core$IFn$_invoke$arity$7 = (function (game_object_factory,x,y,font,text,size,group){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.bitmapText(phzr.impl.utils.core.clj__GT_phaser.call(null,x),phzr.impl.utils.core.clj__GT_phaser.call(null,y),phzr.impl.utils.core.clj__GT_phaser.call(null,font),phzr.impl.utils.core.clj__GT_phaser.call(null,text),phzr.impl.utils.core.clj__GT_phaser.call(null,size),phzr.impl.utils.core.clj__GT_phaser.call(null,group)));
});

phzr.game_object_factory.bitmap_text.cljs$lang$maxFixedArity = 7;

/**
 * Creates a new Button object.
 * 
 *   Parameters:
 *  * game-object-factory (Phaser.GameObjectFactory) - Targeted instance for method
 *  * x (number) {optional} - The x coordinate of the Button. The coordinate is relative to any parent container this button may be in.
 *  * y (number) {optional} - The y coordinate of the Button. The coordinate is relative to any parent container this button may be in.
 *  * key (string) {optional} - The image key as defined in the Game.Cache to use as the texture for this button.
 *  * callback (function) {optional} - The function to call when this button is pressed
 *  * callback-context (object) {optional} - The context in which the callback will be called (usually 'this')
 *  * over-frame (string | number) {optional} - This is the frame or frameName that will be set when this button is in an over state. Give either a number to use a frame ID or a string for a frame name.
 *  * out-frame (string | number) {optional} - This is the frame or frameName that will be set when this button is in an out state. Give either a number to use a frame ID or a string for a frame name.
 *  * down-frame (string | number) {optional} - This is the frame or frameName that will be set when this button is in a down state. Give either a number to use a frame ID or a string for a frame name.
 *  * up-frame (string | number) {optional} - This is the frame or frameName that will be set when this button is in an up state. Give either a number to use a frame ID or a string for a frame name.
 *  * group (Phaser.Group) {optional} - Optional Group to add the object to. If not specified it will be added to the World group.
 * 
 *   Returns:  Phaser.Button - The newly created Button object.
 */
phzr.game_object_factory.button = (function phzr$game_object_factory$button(var_args){
var args31032 = [];
var len__25865__auto___31035 = arguments.length;
var i__25866__auto___31036 = (0);
while(true){
if((i__25866__auto___31036 < len__25865__auto___31035)){
args31032.push((arguments[i__25866__auto___31036]));

var G__31037 = (i__25866__auto___31036 + (1));
i__25866__auto___31036 = G__31037;
continue;
} else {
}
break;
}

var G__31034 = args31032.length;
switch (G__31034) {
case 1:
return phzr.game_object_factory.button.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.game_object_factory.button.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.game_object_factory.button.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.game_object_factory.button.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.game_object_factory.button.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return phzr.game_object_factory.button.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return phzr.game_object_factory.button.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 8:
return phzr.game_object_factory.button.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
case 9:
return phzr.game_object_factory.button.cljs$core$IFn$_invoke$arity$9((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
case 10:
return phzr.game_object_factory.button.cljs$core$IFn$_invoke$arity$10((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]));

break;
case 11:
return phzr.game_object_factory.button.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31032.length)].join('')));

}
});

phzr.game_object_factory.button.cljs$core$IFn$_invoke$arity$1 = (function (game_object_factory){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.button());
});

phzr.game_object_factory.button.cljs$core$IFn$_invoke$arity$2 = (function (game_object_factory,x){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.button(phzr.impl.utils.core.clj__GT_phaser.call(null,x)));
});

phzr.game_object_factory.button.cljs$core$IFn$_invoke$arity$3 = (function (game_object_factory,x,y){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.button(phzr.impl.utils.core.clj__GT_phaser.call(null,x),phzr.impl.utils.core.clj__GT_phaser.call(null,y)));
});

phzr.game_object_factory.button.cljs$core$IFn$_invoke$arity$4 = (function (game_object_factory,x,y,key){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.button(phzr.impl.utils.core.clj__GT_phaser.call(null,x),phzr.impl.utils.core.clj__GT_phaser.call(null,y),phzr.impl.utils.core.clj__GT_phaser.call(null,key)));
});

phzr.game_object_factory.button.cljs$core$IFn$_invoke$arity$5 = (function (game_object_factory,x,y,key,callback){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.button(phzr.impl.utils.core.clj__GT_phaser.call(null,x),phzr.impl.utils.core.clj__GT_phaser.call(null,y),phzr.impl.utils.core.clj__GT_phaser.call(null,key),phzr.impl.utils.core.clj__GT_phaser.call(null,callback)));
});

phzr.game_object_factory.button.cljs$core$IFn$_invoke$arity$6 = (function (game_object_factory,x,y,key,callback,callback_context){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.button(phzr.impl.utils.core.clj__GT_phaser.call(null,x),phzr.impl.utils.core.clj__GT_phaser.call(null,y),phzr.impl.utils.core.clj__GT_phaser.call(null,key),phzr.impl.utils.core.clj__GT_phaser.call(null,callback),phzr.impl.utils.core.clj__GT_phaser.call(null,callback_context)));
});

phzr.game_object_factory.button.cljs$core$IFn$_invoke$arity$7 = (function (game_object_factory,x,y,key,callback,callback_context,over_frame){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.button(phzr.impl.utils.core.clj__GT_phaser.call(null,x),phzr.impl.utils.core.clj__GT_phaser.call(null,y),phzr.impl.utils.core.clj__GT_phaser.call(null,key),phzr.impl.utils.core.clj__GT_phaser.call(null,callback),phzr.impl.utils.core.clj__GT_phaser.call(null,callback_context),phzr.impl.utils.core.clj__GT_phaser.call(null,over_frame)));
});

phzr.game_object_factory.button.cljs$core$IFn$_invoke$arity$8 = (function (game_object_factory,x,y,key,callback,callback_context,over_frame,out_frame){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.button(phzr.impl.utils.core.clj__GT_phaser.call(null,x),phzr.impl.utils.core.clj__GT_phaser.call(null,y),phzr.impl.utils.core.clj__GT_phaser.call(null,key),phzr.impl.utils.core.clj__GT_phaser.call(null,callback),phzr.impl.utils.core.clj__GT_phaser.call(null,callback_context),phzr.impl.utils.core.clj__GT_phaser.call(null,over_frame),phzr.impl.utils.core.clj__GT_phaser.call(null,out_frame)));
});

phzr.game_object_factory.button.cljs$core$IFn$_invoke$arity$9 = (function (game_object_factory,x,y,key,callback,callback_context,over_frame,out_frame,down_frame){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.button(phzr.impl.utils.core.clj__GT_phaser.call(null,x),phzr.impl.utils.core.clj__GT_phaser.call(null,y),phzr.impl.utils.core.clj__GT_phaser.call(null,key),phzr.impl.utils.core.clj__GT_phaser.call(null,callback),phzr.impl.utils.core.clj__GT_phaser.call(null,callback_context),phzr.impl.utils.core.clj__GT_phaser.call(null,over_frame),phzr.impl.utils.core.clj__GT_phaser.call(null,out_frame),phzr.impl.utils.core.clj__GT_phaser.call(null,down_frame)));
});

phzr.game_object_factory.button.cljs$core$IFn$_invoke$arity$10 = (function (game_object_factory,x,y,key,callback,callback_context,over_frame,out_frame,down_frame,up_frame){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.button(phzr.impl.utils.core.clj__GT_phaser.call(null,x),phzr.impl.utils.core.clj__GT_phaser.call(null,y),phzr.impl.utils.core.clj__GT_phaser.call(null,key),phzr.impl.utils.core.clj__GT_phaser.call(null,callback),phzr.impl.utils.core.clj__GT_phaser.call(null,callback_context),phzr.impl.utils.core.clj__GT_phaser.call(null,over_frame),phzr.impl.utils.core.clj__GT_phaser.call(null,out_frame),phzr.impl.utils.core.clj__GT_phaser.call(null,down_frame),phzr.impl.utils.core.clj__GT_phaser.call(null,up_frame)));
});

phzr.game_object_factory.button.cljs$core$IFn$_invoke$arity$11 = (function (game_object_factory,x,y,key,callback,callback_context,over_frame,out_frame,down_frame,up_frame,group){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.button(phzr.impl.utils.core.clj__GT_phaser.call(null,x),phzr.impl.utils.core.clj__GT_phaser.call(null,y),phzr.impl.utils.core.clj__GT_phaser.call(null,key),phzr.impl.utils.core.clj__GT_phaser.call(null,callback),phzr.impl.utils.core.clj__GT_phaser.call(null,callback_context),phzr.impl.utils.core.clj__GT_phaser.call(null,over_frame),phzr.impl.utils.core.clj__GT_phaser.call(null,out_frame),phzr.impl.utils.core.clj__GT_phaser.call(null,down_frame),phzr.impl.utils.core.clj__GT_phaser.call(null,up_frame),phzr.impl.utils.core.clj__GT_phaser.call(null,group)));
});

phzr.game_object_factory.button.cljs$lang$maxFixedArity = 11;

/**
 * Create a new Creature Animation object.
 * 
 *   Creature is a custom Game Object used in conjunction with the Creature Runtime libraries by Kestrel Moon Studios.
 * 
 *   It allows you to display animated Game Objects that were created with the [Creature Automated Animation Tool](http://www.kestrelmoon.com/creature/).
 * 
 *   Note 1: You can only use Phaser.Creature objects in WebGL enabled games. They do not work in Canvas mode games.
 * 
 *   Note 2: You must use a build of Phaser that includes the CreatureMeshBone.js runtime and gl-matrix.js, or have them
 *   loaded before your Phaser game boots.
 * 
 *   See the Phaser custom build process for more details.
 * 
 *   Parameters:
 *  * game-object-factory (Phaser.GameObjectFactory) - Targeted instance for method
 *  * x (number) {optional} - The x coordinate of the creature. The coordinate is relative to any parent container this creature may be in.
 *  * y (number) {optional} - The y coordinate of the creature. The coordinate is relative to any parent container this creature may be in.
 *  * key (string | PIXI.Texture) {optional} - The image used as a texture by this creature object during rendering. If a string Phaser will get for an entry in the Image Cache. Or it can be an instance of a PIXI.Texture.
 *  * group (Phaser.Group) {optional} - Optional Group to add the object to. If not specified it will be added to the World group.
 * 
 *   Returns:  Phaser.Creature - The newly created Sprite object.
 */
phzr.game_object_factory.creature = (function phzr$game_object_factory$creature(var_args){
var args31039 = [];
var len__25865__auto___31042 = arguments.length;
var i__25866__auto___31043 = (0);
while(true){
if((i__25866__auto___31043 < len__25865__auto___31042)){
args31039.push((arguments[i__25866__auto___31043]));

var G__31044 = (i__25866__auto___31043 + (1));
i__25866__auto___31043 = G__31044;
continue;
} else {
}
break;
}

var G__31041 = args31039.length;
switch (G__31041) {
case 1:
return phzr.game_object_factory.creature.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.game_object_factory.creature.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.game_object_factory.creature.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.game_object_factory.creature.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.game_object_factory.creature.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31039.length)].join('')));

}
});

phzr.game_object_factory.creature.cljs$core$IFn$_invoke$arity$1 = (function (game_object_factory){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.creature());
});

phzr.game_object_factory.creature.cljs$core$IFn$_invoke$arity$2 = (function (game_object_factory,x){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.creature(phzr.impl.utils.core.clj__GT_phaser.call(null,x)));
});

phzr.game_object_factory.creature.cljs$core$IFn$_invoke$arity$3 = (function (game_object_factory,x,y){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.creature(phzr.impl.utils.core.clj__GT_phaser.call(null,x),phzr.impl.utils.core.clj__GT_phaser.call(null,y)));
});

phzr.game_object_factory.creature.cljs$core$IFn$_invoke$arity$4 = (function (game_object_factory,x,y,key){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.creature(phzr.impl.utils.core.clj__GT_phaser.call(null,x),phzr.impl.utils.core.clj__GT_phaser.call(null,y),phzr.impl.utils.core.clj__GT_phaser.call(null,key)));
});

phzr.game_object_factory.creature.cljs$core$IFn$_invoke$arity$5 = (function (game_object_factory,x,y,key,group){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.creature(phzr.impl.utils.core.clj__GT_phaser.call(null,x),phzr.impl.utils.core.clj__GT_phaser.call(null,y),phzr.impl.utils.core.clj__GT_phaser.call(null,key),phzr.impl.utils.core.clj__GT_phaser.call(null,group)));
});

phzr.game_object_factory.creature.cljs$lang$maxFixedArity = 5;

/**
 * Create a new Emitter.
 * 
 *   A particle emitter can be used for one-time explosions or for
 *   continuous effects like rain and fire. All it really does is launch Particle objects out
 *   at set intervals, and fixes their positions and velocities accordingly.
 * 
 *   Parameters:
 *  * game-object-factory (Phaser.GameObjectFactory) - Targeted instance for method
 *  * x (number) {optional} - The x coordinate within the Emitter that the particles are emitted from.
 *  * y (number) {optional} - The y coordinate within the Emitter that the particles are emitted from.
 *  * max-particles (number) {optional} - The total number of particles in this emitter.
 * 
 *   Returns:  Phaser.Particles.Arcade.Emitter - The newly created emitter object.
 */
phzr.game_object_factory.emitter = (function phzr$game_object_factory$emitter(var_args){
var args31046 = [];
var len__25865__auto___31049 = arguments.length;
var i__25866__auto___31050 = (0);
while(true){
if((i__25866__auto___31050 < len__25865__auto___31049)){
args31046.push((arguments[i__25866__auto___31050]));

var G__31051 = (i__25866__auto___31050 + (1));
i__25866__auto___31050 = G__31051;
continue;
} else {
}
break;
}

var G__31048 = args31046.length;
switch (G__31048) {
case 1:
return phzr.game_object_factory.emitter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.game_object_factory.emitter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.game_object_factory.emitter.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.game_object_factory.emitter.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31046.length)].join('')));

}
});

phzr.game_object_factory.emitter.cljs$core$IFn$_invoke$arity$1 = (function (game_object_factory){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.emitter());
});

phzr.game_object_factory.emitter.cljs$core$IFn$_invoke$arity$2 = (function (game_object_factory,x){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.emitter(phzr.impl.utils.core.clj__GT_phaser.call(null,x)));
});

phzr.game_object_factory.emitter.cljs$core$IFn$_invoke$arity$3 = (function (game_object_factory,x,y){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.emitter(phzr.impl.utils.core.clj__GT_phaser.call(null,x),phzr.impl.utils.core.clj__GT_phaser.call(null,y)));
});

phzr.game_object_factory.emitter.cljs$core$IFn$_invoke$arity$4 = (function (game_object_factory,x,y,max_particles){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.emitter(phzr.impl.utils.core.clj__GT_phaser.call(null,x),phzr.impl.utils.core.clj__GT_phaser.call(null,y),phzr.impl.utils.core.clj__GT_phaser.call(null,max_particles)));
});

phzr.game_object_factory.emitter.cljs$lang$maxFixedArity = 4;

/**
 * Adds an existing display object to the game world.
 * 
 *   Parameters:
 *  * game-object-factory (Phaser.GameObjectFactory) - Targeted instance for method
 *  * object (any) - An instance of Phaser.Sprite, Phaser.Button or any other display object.
 * 
 *   Returns:  any - The child that was added to the World.
 */
phzr.game_object_factory.existing = (function phzr$game_object_factory$existing(game_object_factory,object){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.existing(phzr.impl.utils.core.clj__GT_phaser.call(null,object)));
});
/**
 * A WebGL shader/filter that can be applied to Sprites.
 * 
 *   Parameters:
 *  * game-object-factory (Phaser.GameObjectFactory) - Targeted instance for method
 *  * filter (string) - The name of the filter you wish to create, for example HueRotate or SineWave.
 *  * args (any) - Whatever parameters are needed to be passed to the filter init function.
 * 
 *   Returns:  Phaser.Filter - The newly created Phaser.Filter object.
 */
phzr.game_object_factory.filter = (function phzr$game_object_factory$filter(var_args){
var args__25872__auto__ = [];
var len__25865__auto___31056 = arguments.length;
var i__25866__auto___31057 = (0);
while(true){
if((i__25866__auto___31057 < len__25865__auto___31056)){
args__25872__auto__.push((arguments[i__25866__auto___31057]));

var G__31058 = (i__25866__auto___31057 + (1));
i__25866__auto___31057 = G__31058;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((2) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((2)),(0),null)):null);
return phzr.game_object_factory.filter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25873__auto__);
});

phzr.game_object_factory.filter.cljs$core$IFn$_invoke$arity$variadic = (function (game_object_factory,filter,args){
return phzr.impl.utils.core.phaser__GT_clj.call(null,(game_object_factory[filter]).apply(game_object_factory,cljs.core.into_array.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [phzr.impl.utils.core.clj__GT_phaser.call(null,filter)], null),args))));
});

phzr.game_object_factory.filter.cljs$lang$maxFixedArity = (2);

phzr.game_object_factory.filter.cljs$lang$applyTo = (function (seq31053){
var G__31054 = cljs.core.first.call(null,seq31053);
var seq31053__$1 = cljs.core.next.call(null,seq31053);
var G__31055 = cljs.core.first.call(null,seq31053__$1);
var seq31053__$2 = cljs.core.next.call(null,seq31053__$1);
return phzr.game_object_factory.filter.cljs$core$IFn$_invoke$arity$variadic(G__31054,G__31055,seq31053__$2);
});

/**
 * Creates a new Graphics object.
 * 
 *   Parameters:
 *  * game-object-factory (Phaser.GameObjectFactory) - Targeted instance for method
 *  * x (number) {optional} - The x coordinate of the Graphic. The coordinate is relative to any parent container this object may be in.
 *  * y (number) {optional} - The y coordinate of the Graphic. The coordinate is relative to any parent container this object may be in.
 *  * group (Phaser.Group) {optional} - Optional Group to add the object to. If not specified it will be added to the World group.
 * 
 *   Returns:  Phaser.Graphics - The newly created graphics object.
 */
phzr.game_object_factory.graphics = (function phzr$game_object_factory$graphics(var_args){
var args31059 = [];
var len__25865__auto___31062 = arguments.length;
var i__25866__auto___31063 = (0);
while(true){
if((i__25866__auto___31063 < len__25865__auto___31062)){
args31059.push((arguments[i__25866__auto___31063]));

var G__31064 = (i__25866__auto___31063 + (1));
i__25866__auto___31063 = G__31064;
continue;
} else {
}
break;
}

var G__31061 = args31059.length;
switch (G__31061) {
case 1:
return phzr.game_object_factory.graphics.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.game_object_factory.graphics.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.game_object_factory.graphics.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.game_object_factory.graphics.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31059.length)].join('')));

}
});

phzr.game_object_factory.graphics.cljs$core$IFn$_invoke$arity$1 = (function (game_object_factory){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.graphics());
});

phzr.game_object_factory.graphics.cljs$core$IFn$_invoke$arity$2 = (function (game_object_factory,x){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.graphics(phzr.impl.utils.core.clj__GT_phaser.call(null,x)));
});

phzr.game_object_factory.graphics.cljs$core$IFn$_invoke$arity$3 = (function (game_object_factory,x,y){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.graphics(phzr.impl.utils.core.clj__GT_phaser.call(null,x),phzr.impl.utils.core.clj__GT_phaser.call(null,y)));
});

phzr.game_object_factory.graphics.cljs$core$IFn$_invoke$arity$4 = (function (game_object_factory,x,y,group){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.graphics(phzr.impl.utils.core.clj__GT_phaser.call(null,x),phzr.impl.utils.core.clj__GT_phaser.call(null,y),phzr.impl.utils.core.clj__GT_phaser.call(null,group)));
});

phzr.game_object_factory.graphics.cljs$lang$maxFixedArity = 4;

/**
 * A Group is a container for display objects that allows for fast pooling, recycling and collision checks.
 * 
 *   Parameters:
 *  * game-object-factory (Phaser.GameObjectFactory) - Targeted instance for method
 *  * parent (any) {optional} - The parent Group or DisplayObjectContainer that will hold this group, if any. If set to null the Group won't be added to the display list. If undefined it will be added to World by default.
 *  * name (string) {optional} - A name for this Group. Not used internally but useful for debugging.
 *  * add-to-stage (boolean) {optional} - If set to true this Group will be added directly to the Game.Stage instead of Game.World.
 *  * enable-body (boolean) {optional} - If true all Sprites created with `Group.create` or `Group.createMulitple` will have a physics body created on them. Change the body type with physicsBodyType.
 *  * physics-body-type (number) {optional} - If enableBody is true this is the type of physics body that is created on new Sprites. Phaser.Physics.ARCADE, Phaser.Physics.P2, Phaser.Physics.NINJA, etc.
 * 
 *   Returns:  Phaser.Group - The newly created Group.
 */
phzr.game_object_factory.group = (function phzr$game_object_factory$group(var_args){
var args31066 = [];
var len__25865__auto___31069 = arguments.length;
var i__25866__auto___31070 = (0);
while(true){
if((i__25866__auto___31070 < len__25865__auto___31069)){
args31066.push((arguments[i__25866__auto___31070]));

var G__31071 = (i__25866__auto___31070 + (1));
i__25866__auto___31070 = G__31071;
continue;
} else {
}
break;
}

var G__31068 = args31066.length;
switch (G__31068) {
case 1:
return phzr.game_object_factory.group.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.game_object_factory.group.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.game_object_factory.group.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.game_object_factory.group.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.game_object_factory.group.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return phzr.game_object_factory.group.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31066.length)].join('')));

}
});

phzr.game_object_factory.group.cljs$core$IFn$_invoke$arity$1 = (function (game_object_factory){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.group());
});

phzr.game_object_factory.group.cljs$core$IFn$_invoke$arity$2 = (function (game_object_factory,parent){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.group(phzr.impl.utils.core.clj__GT_phaser.call(null,parent)));
});

phzr.game_object_factory.group.cljs$core$IFn$_invoke$arity$3 = (function (game_object_factory,parent,name){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.group(phzr.impl.utils.core.clj__GT_phaser.call(null,parent),phzr.impl.utils.core.clj__GT_phaser.call(null,name)));
});

phzr.game_object_factory.group.cljs$core$IFn$_invoke$arity$4 = (function (game_object_factory,parent,name,add_to_stage){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.group(phzr.impl.utils.core.clj__GT_phaser.call(null,parent),phzr.impl.utils.core.clj__GT_phaser.call(null,name),phzr.impl.utils.core.clj__GT_phaser.call(null,add_to_stage)));
});

phzr.game_object_factory.group.cljs$core$IFn$_invoke$arity$5 = (function (game_object_factory,parent,name,add_to_stage,enable_body){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.group(phzr.impl.utils.core.clj__GT_phaser.call(null,parent),phzr.impl.utils.core.clj__GT_phaser.call(null,name),phzr.impl.utils.core.clj__GT_phaser.call(null,add_to_stage),phzr.impl.utils.core.clj__GT_phaser.call(null,enable_body)));
});

phzr.game_object_factory.group.cljs$core$IFn$_invoke$arity$6 = (function (game_object_factory,parent,name,add_to_stage,enable_body,physics_body_type){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.group(phzr.impl.utils.core.clj__GT_phaser.call(null,parent),phzr.impl.utils.core.clj__GT_phaser.call(null,name),phzr.impl.utils.core.clj__GT_phaser.call(null,add_to_stage),phzr.impl.utils.core.clj__GT_phaser.call(null,enable_body),phzr.impl.utils.core.clj__GT_phaser.call(null,physics_body_type)));
});

phzr.game_object_factory.group.cljs$lang$maxFixedArity = 6;

/**
 * Create a new `Image` object.
 * 
 *   An Image is a light-weight object you can use to display anything that doesn't need physics or animation.
 * 
 *   It can still rotate, scale, crop and receive input events. 
 *   This makes it perfect for logos, backgrounds, simple buttons and other non-Sprite graphics.
 * 
 *   Parameters:
 *  * game-object-factory (Phaser.GameObjectFactory) - Targeted instance for method
 *  * x (number) {optional} - The x coordinate of the Image. The coordinate is relative to any parent container this Image may be in.
 *  * y (number) {optional} - The y coordinate of the Image. The coordinate is relative to any parent container this Image may be in.
 *  * key (string | Phaser.RenderTexture | Phaser.BitmapData | Phaser.Video | PIXI.Texture) {optional} - The image used as a texture by this display object during rendering. If a string Phaser will get for an entry in the Image Cache. Or it can be an instance of a RenderTexture, BitmapData, Video or PIXI.Texture.
 *  * frame (string | number) {optional} - If a Texture Atlas or Sprite Sheet is used this allows you to specify the frame to be used. Use either an integer for a Frame ID or a string for a frame name.
 *  * group (Phaser.Group) {optional} - Optional Group to add the object to. If not specified it will be added to the World group.
 * 
 *   Returns:  Phaser.Image - The newly created Image object.
 */
phzr.game_object_factory.image = (function phzr$game_object_factory$image(var_args){
var args31073 = [];
var len__25865__auto___31076 = arguments.length;
var i__25866__auto___31077 = (0);
while(true){
if((i__25866__auto___31077 < len__25865__auto___31076)){
args31073.push((arguments[i__25866__auto___31077]));

var G__31078 = (i__25866__auto___31077 + (1));
i__25866__auto___31077 = G__31078;
continue;
} else {
}
break;
}

var G__31075 = args31073.length;
switch (G__31075) {
case 1:
return phzr.game_object_factory.image.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.game_object_factory.image.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.game_object_factory.image.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.game_object_factory.image.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.game_object_factory.image.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return phzr.game_object_factory.image.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31073.length)].join('')));

}
});

phzr.game_object_factory.image.cljs$core$IFn$_invoke$arity$1 = (function (game_object_factory){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.image());
});

phzr.game_object_factory.image.cljs$core$IFn$_invoke$arity$2 = (function (game_object_factory,x){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.image(phzr.impl.utils.core.clj__GT_phaser.call(null,x)));
});

phzr.game_object_factory.image.cljs$core$IFn$_invoke$arity$3 = (function (game_object_factory,x,y){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.image(phzr.impl.utils.core.clj__GT_phaser.call(null,x),phzr.impl.utils.core.clj__GT_phaser.call(null,y)));
});

phzr.game_object_factory.image.cljs$core$IFn$_invoke$arity$4 = (function (game_object_factory,x,y,key){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.image(phzr.impl.utils.core.clj__GT_phaser.call(null,x),phzr.impl.utils.core.clj__GT_phaser.call(null,y),phzr.impl.utils.core.clj__GT_phaser.call(null,key)));
});

phzr.game_object_factory.image.cljs$core$IFn$_invoke$arity$5 = (function (game_object_factory,x,y,key,frame){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.image(phzr.impl.utils.core.clj__GT_phaser.call(null,x),phzr.impl.utils.core.clj__GT_phaser.call(null,y),phzr.impl.utils.core.clj__GT_phaser.call(null,key),phzr.impl.utils.core.clj__GT_phaser.call(null,frame)));
});

phzr.game_object_factory.image.cljs$core$IFn$_invoke$arity$6 = (function (game_object_factory,x,y,key,frame,group){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.image(phzr.impl.utils.core.clj__GT_phaser.call(null,x),phzr.impl.utils.core.clj__GT_phaser.call(null,y),phzr.impl.utils.core.clj__GT_phaser.call(null,key),phzr.impl.utils.core.clj__GT_phaser.call(null,frame),phzr.impl.utils.core.clj__GT_phaser.call(null,group)));
});

phzr.game_object_factory.image.cljs$lang$maxFixedArity = 6;

/**
 * A Group is a container for display objects that allows for fast pooling, recycling and collision checks.
 * 
 *   A Physics Group is the same as an ordinary Group except that is has enableBody turned on by default, so any Sprites it creates
 *   are automatically given a physics body.
 * 
 *   Parameters:
 *  * game-object-factory (Phaser.GameObjectFactory) - Targeted instance for method
 *  * physics-body-type (number) {optional} - If enableBody is true this is the type of physics body that is created on new Sprites. Phaser.Physics.ARCADE, Phaser.Physics.P2, Phaser.Physics.NINJA, etc.
 *  * parent (any) {optional} - The parent Group or DisplayObjectContainer that will hold this group, if any. If set to null the Group won't be added to the display list. If undefined it will be added to World by default.
 *  * name (string) {optional} - A name for this Group. Not used internally but useful for debugging.
 *  * add-to-stage (boolean) {optional} - If set to true this Group will be added directly to the Game.Stage instead of Game.World.
 * 
 *   Returns:  Phaser.Group - The newly created Group.
 */
phzr.game_object_factory.physics_group = (function phzr$game_object_factory$physics_group(var_args){
var args31080 = [];
var len__25865__auto___31083 = arguments.length;
var i__25866__auto___31084 = (0);
while(true){
if((i__25866__auto___31084 < len__25865__auto___31083)){
args31080.push((arguments[i__25866__auto___31084]));

var G__31085 = (i__25866__auto___31084 + (1));
i__25866__auto___31084 = G__31085;
continue;
} else {
}
break;
}

var G__31082 = args31080.length;
switch (G__31082) {
case 1:
return phzr.game_object_factory.physics_group.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.game_object_factory.physics_group.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.game_object_factory.physics_group.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.game_object_factory.physics_group.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.game_object_factory.physics_group.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31080.length)].join('')));

}
});

phzr.game_object_factory.physics_group.cljs$core$IFn$_invoke$arity$1 = (function (game_object_factory){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.physicsGroup());
});

phzr.game_object_factory.physics_group.cljs$core$IFn$_invoke$arity$2 = (function (game_object_factory,physics_body_type){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.physicsGroup(phzr.impl.utils.core.clj__GT_phaser.call(null,physics_body_type)));
});

phzr.game_object_factory.physics_group.cljs$core$IFn$_invoke$arity$3 = (function (game_object_factory,physics_body_type,parent){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.physicsGroup(phzr.impl.utils.core.clj__GT_phaser.call(null,physics_body_type),phzr.impl.utils.core.clj__GT_phaser.call(null,parent)));
});

phzr.game_object_factory.physics_group.cljs$core$IFn$_invoke$arity$4 = (function (game_object_factory,physics_body_type,parent,name){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.physicsGroup(phzr.impl.utils.core.clj__GT_phaser.call(null,physics_body_type),phzr.impl.utils.core.clj__GT_phaser.call(null,parent),phzr.impl.utils.core.clj__GT_phaser.call(null,name)));
});

phzr.game_object_factory.physics_group.cljs$core$IFn$_invoke$arity$5 = (function (game_object_factory,physics_body_type,parent,name,add_to_stage){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.physicsGroup(phzr.impl.utils.core.clj__GT_phaser.call(null,physics_body_type),phzr.impl.utils.core.clj__GT_phaser.call(null,parent),phzr.impl.utils.core.clj__GT_phaser.call(null,name),phzr.impl.utils.core.clj__GT_phaser.call(null,add_to_stage)));
});

phzr.game_object_factory.physics_group.cljs$lang$maxFixedArity = 5;

/**
 * Add a new Plugin into the PluginManager.
 * 
 *   The Plugin must have 2 properties: `game` and `parent`. Plugin.game is set to the game reference the PluginManager uses, and parent is set to the PluginManager.
 * 
 *   Parameters:
 *  * game-object-factory (Phaser.GameObjectFactory) - Targeted instance for method
 *  * plugin (object | Phaser.Plugin) - The Plugin to add into the PluginManager. This can be a function or an existing object.
 *  * parameter (*) - Additional parameters that will be passed to the Plugin.init method.
 * 
 *   Returns:  Phaser.Plugin - The Plugin that was added to the manager.
 */
phzr.game_object_factory.plugin = (function phzr$game_object_factory$plugin(game_object_factory,plugin__$1,parameter){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.plugin(phzr.impl.utils.core.clj__GT_phaser.call(null,plugin__$1),phzr.impl.utils.core.clj__GT_phaser.call(null,parameter)));
});
/**
 * A dynamic initially blank canvas to which images can be drawn.
 * 
 *   Parameters:
 *  * game-object-factory (Phaser.GameObjectFactory) - Targeted instance for method
 *  * width (number) {optional} - the width of the RenderTexture.
 *  * height (number) {optional} - the height of the RenderTexture.
 *  * key (string) {optional} - Asset key for the RenderTexture when stored in the Cache (see addToCache parameter).
 *  * add-to-cache (boolean) {optional} - Should this RenderTexture be added to the Game.Cache? If so you can retrieve it with Cache.getTexture(key)
 * 
 *   Returns:  Phaser.RenderTexture - The newly created RenderTexture object.
 */
phzr.game_object_factory.render_texture = (function phzr$game_object_factory$render_texture(var_args){
var args31087 = [];
var len__25865__auto___31090 = arguments.length;
var i__25866__auto___31091 = (0);
while(true){
if((i__25866__auto___31091 < len__25865__auto___31090)){
args31087.push((arguments[i__25866__auto___31091]));

var G__31092 = (i__25866__auto___31091 + (1));
i__25866__auto___31091 = G__31092;
continue;
} else {
}
break;
}

var G__31089 = args31087.length;
switch (G__31089) {
case 1:
return phzr.game_object_factory.render_texture.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.game_object_factory.render_texture.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.game_object_factory.render_texture.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.game_object_factory.render_texture.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.game_object_factory.render_texture.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31087.length)].join('')));

}
});

phzr.game_object_factory.render_texture.cljs$core$IFn$_invoke$arity$1 = (function (game_object_factory){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.renderTexture());
});

phzr.game_object_factory.render_texture.cljs$core$IFn$_invoke$arity$2 = (function (game_object_factory,width){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.renderTexture(phzr.impl.utils.core.clj__GT_phaser.call(null,width)));
});

phzr.game_object_factory.render_texture.cljs$core$IFn$_invoke$arity$3 = (function (game_object_factory,width,height){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.renderTexture(phzr.impl.utils.core.clj__GT_phaser.call(null,width),phzr.impl.utils.core.clj__GT_phaser.call(null,height)));
});

phzr.game_object_factory.render_texture.cljs$core$IFn$_invoke$arity$4 = (function (game_object_factory,width,height,key){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.renderTexture(phzr.impl.utils.core.clj__GT_phaser.call(null,width),phzr.impl.utils.core.clj__GT_phaser.call(null,height),phzr.impl.utils.core.clj__GT_phaser.call(null,key)));
});

phzr.game_object_factory.render_texture.cljs$core$IFn$_invoke$arity$5 = (function (game_object_factory,width,height,key,add_to_cache){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.renderTexture(phzr.impl.utils.core.clj__GT_phaser.call(null,width),phzr.impl.utils.core.clj__GT_phaser.call(null,height),phzr.impl.utils.core.clj__GT_phaser.call(null,key),phzr.impl.utils.core.clj__GT_phaser.call(null,add_to_cache)));
});

phzr.game_object_factory.render_texture.cljs$lang$maxFixedArity = 5;

/**
 * Create a new RetroFont object.
 * 
 *   A RetroFont can be used as a texture for an Image or Sprite and optionally add it to the Cache.
 *   A RetroFont uses a bitmap which contains fixed with characters for the font set. You use character spacing to define the set.
 *   If you need variable width character support then use a BitmapText object instead. The main difference between a RetroFont and a BitmapText
 *   is that a RetroFont creates a single texture that you can apply to a game object, where-as a BitmapText creates one Sprite object per letter of text.
 *   The texture can be asssigned or one or multiple images/sprites, but note that the text the RetroFont uses will be shared across them all,
 *   i.e. if you need each Image to have different text in it, then you need to create multiple RetroFont objects.
 * 
 *   Parameters:
 *  * game-object-factory (Phaser.GameObjectFactory) - Targeted instance for method
 *  * font (string) - The key of the image in the Game.Cache that the RetroFont will use.
 *  * character-width (number) - The width of each character in the font set.
 *  * character-height (number) - The height of each character in the font set.
 *  * chars (string) - The characters used in the font set, in display order. You can use the TEXT_SET consts for common font set arrangements.
 *  * chars-per-row (number) - The number of characters per row in the font set.
 *  * x-spacing (number) {optional} - If the characters in the font set have horizontal spacing between them set the required amount here.
 *  * y-spacing (number) {optional} - If the characters in the font set have vertical spacing between them set the required amount here.
 *  * x-offset (number) {optional} - If the font set doesn't start at the top left of the given image, specify the X coordinate offset here.
 *  * y-offset (number) {optional} - If the font set doesn't start at the top left of the given image, specify the Y coordinate offset here.
 * 
 *   Returns:  Phaser.RetroFont - The newly created RetroFont texture which can be applied to an Image or Sprite.
 */
phzr.game_object_factory.retro_font = (function phzr$game_object_factory$retro_font(var_args){
var args31094 = [];
var len__25865__auto___31097 = arguments.length;
var i__25866__auto___31098 = (0);
while(true){
if((i__25866__auto___31098 < len__25865__auto___31097)){
args31094.push((arguments[i__25866__auto___31098]));

var G__31099 = (i__25866__auto___31098 + (1));
i__25866__auto___31098 = G__31099;
continue;
} else {
}
break;
}

var G__31096 = args31094.length;
switch (G__31096) {
case 6:
return phzr.game_object_factory.retro_font.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return phzr.game_object_factory.retro_font.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 8:
return phzr.game_object_factory.retro_font.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
case 9:
return phzr.game_object_factory.retro_font.cljs$core$IFn$_invoke$arity$9((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
case 10:
return phzr.game_object_factory.retro_font.cljs$core$IFn$_invoke$arity$10((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31094.length)].join('')));

}
});

phzr.game_object_factory.retro_font.cljs$core$IFn$_invoke$arity$6 = (function (game_object_factory,font,character_width,character_height,chars,chars_per_row){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.retroFont(phzr.impl.utils.core.clj__GT_phaser.call(null,font),phzr.impl.utils.core.clj__GT_phaser.call(null,character_width),phzr.impl.utils.core.clj__GT_phaser.call(null,character_height),phzr.impl.utils.core.clj__GT_phaser.call(null,chars),phzr.impl.utils.core.clj__GT_phaser.call(null,chars_per_row)));
});

phzr.game_object_factory.retro_font.cljs$core$IFn$_invoke$arity$7 = (function (game_object_factory,font,character_width,character_height,chars,chars_per_row,x_spacing){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.retroFont(phzr.impl.utils.core.clj__GT_phaser.call(null,font),phzr.impl.utils.core.clj__GT_phaser.call(null,character_width),phzr.impl.utils.core.clj__GT_phaser.call(null,character_height),phzr.impl.utils.core.clj__GT_phaser.call(null,chars),phzr.impl.utils.core.clj__GT_phaser.call(null,chars_per_row),phzr.impl.utils.core.clj__GT_phaser.call(null,x_spacing)));
});

phzr.game_object_factory.retro_font.cljs$core$IFn$_invoke$arity$8 = (function (game_object_factory,font,character_width,character_height,chars,chars_per_row,x_spacing,y_spacing){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.retroFont(phzr.impl.utils.core.clj__GT_phaser.call(null,font),phzr.impl.utils.core.clj__GT_phaser.call(null,character_width),phzr.impl.utils.core.clj__GT_phaser.call(null,character_height),phzr.impl.utils.core.clj__GT_phaser.call(null,chars),phzr.impl.utils.core.clj__GT_phaser.call(null,chars_per_row),phzr.impl.utils.core.clj__GT_phaser.call(null,x_spacing),phzr.impl.utils.core.clj__GT_phaser.call(null,y_spacing)));
});

phzr.game_object_factory.retro_font.cljs$core$IFn$_invoke$arity$9 = (function (game_object_factory,font,character_width,character_height,chars,chars_per_row,x_spacing,y_spacing,x_offset){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.retroFont(phzr.impl.utils.core.clj__GT_phaser.call(null,font),phzr.impl.utils.core.clj__GT_phaser.call(null,character_width),phzr.impl.utils.core.clj__GT_phaser.call(null,character_height),phzr.impl.utils.core.clj__GT_phaser.call(null,chars),phzr.impl.utils.core.clj__GT_phaser.call(null,chars_per_row),phzr.impl.utils.core.clj__GT_phaser.call(null,x_spacing),phzr.impl.utils.core.clj__GT_phaser.call(null,y_spacing),phzr.impl.utils.core.clj__GT_phaser.call(null,x_offset)));
});

phzr.game_object_factory.retro_font.cljs$core$IFn$_invoke$arity$10 = (function (game_object_factory,font,character_width,character_height,chars,chars_per_row,x_spacing,y_spacing,x_offset,y_offset){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.retroFont(phzr.impl.utils.core.clj__GT_phaser.call(null,font),phzr.impl.utils.core.clj__GT_phaser.call(null,character_width),phzr.impl.utils.core.clj__GT_phaser.call(null,character_height),phzr.impl.utils.core.clj__GT_phaser.call(null,chars),phzr.impl.utils.core.clj__GT_phaser.call(null,chars_per_row),phzr.impl.utils.core.clj__GT_phaser.call(null,x_spacing),phzr.impl.utils.core.clj__GT_phaser.call(null,y_spacing),phzr.impl.utils.core.clj__GT_phaser.call(null,x_offset),phzr.impl.utils.core.clj__GT_phaser.call(null,y_offset)));
});

phzr.game_object_factory.retro_font.cljs$lang$maxFixedArity = 10;

/**
 * Creates a new Rope object.
 * 
 *   Example usage: https://github.com/codevinsky/phaser-rope-demo/blob/master/dist/demo.js
 * 
 *   Parameters:
 *  * game-object-factory (Phaser.GameObjectFactory) - Targeted instance for method
 *  * x (number) {optional} - The x coordinate of the Rope. The coordinate is relative to any parent container this rope may be in.
 *  * y (number) {optional} - The y coordinate of the Rope. The coordinate is relative to any parent container this rope may be in.
 *  * key (string | Phaser.RenderTexture | Phaser.BitmapData | Phaser.Video | PIXI.Texture) {optional} - The image used as a texture by this display object during rendering. If a string Phaser will get for an entry in the Image Cache. Or it can be an instance of a RenderTexture, BitmapData, Video or PIXI.Texture.
 *  * frame (string | number) {optional} - If a Texture Atlas or Sprite Sheet is used this allows you to specify the frame to be used. Use either an integer for a Frame ID or a string for a frame name.
 *  * points (Array) - An array of {Phaser.Point}.
 *  * group (Phaser.Group) {optional} - Optional Group to add the object to. If not specified it will be added to the World group.
 * 
 *   Returns:  Phaser.Rope - The newly created Rope object.
 */
phzr.game_object_factory.rope = (function phzr$game_object_factory$rope(var_args){
var args31101 = [];
var len__25865__auto___31104 = arguments.length;
var i__25866__auto___31105 = (0);
while(true){
if((i__25866__auto___31105 < len__25865__auto___31104)){
args31101.push((arguments[i__25866__auto___31105]));

var G__31106 = (i__25866__auto___31105 + (1));
i__25866__auto___31105 = G__31106;
continue;
} else {
}
break;
}

var G__31103 = args31101.length;
switch (G__31103) {
case 2:
return phzr.game_object_factory.rope.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.game_object_factory.rope.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.game_object_factory.rope.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.game_object_factory.rope.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return phzr.game_object_factory.rope.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return phzr.game_object_factory.rope.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31101.length)].join('')));

}
});

phzr.game_object_factory.rope.cljs$core$IFn$_invoke$arity$2 = (function (game_object_factory,points){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.rope(phzr.impl.utils.core.clj__GT_phaser.call(null,points)));
});

phzr.game_object_factory.rope.cljs$core$IFn$_invoke$arity$3 = (function (game_object_factory,points,x){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.rope(phzr.impl.utils.core.clj__GT_phaser.call(null,points),phzr.impl.utils.core.clj__GT_phaser.call(null,x)));
});

phzr.game_object_factory.rope.cljs$core$IFn$_invoke$arity$4 = (function (game_object_factory,points,x,y){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.rope(phzr.impl.utils.core.clj__GT_phaser.call(null,points),phzr.impl.utils.core.clj__GT_phaser.call(null,x),phzr.impl.utils.core.clj__GT_phaser.call(null,y)));
});

phzr.game_object_factory.rope.cljs$core$IFn$_invoke$arity$5 = (function (game_object_factory,points,x,y,key){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.rope(phzr.impl.utils.core.clj__GT_phaser.call(null,points),phzr.impl.utils.core.clj__GT_phaser.call(null,x),phzr.impl.utils.core.clj__GT_phaser.call(null,y),phzr.impl.utils.core.clj__GT_phaser.call(null,key)));
});

phzr.game_object_factory.rope.cljs$core$IFn$_invoke$arity$6 = (function (game_object_factory,points,x,y,key,frame){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.rope(phzr.impl.utils.core.clj__GT_phaser.call(null,points),phzr.impl.utils.core.clj__GT_phaser.call(null,x),phzr.impl.utils.core.clj__GT_phaser.call(null,y),phzr.impl.utils.core.clj__GT_phaser.call(null,key),phzr.impl.utils.core.clj__GT_phaser.call(null,frame)));
});

phzr.game_object_factory.rope.cljs$core$IFn$_invoke$arity$7 = (function (game_object_factory,points,x,y,key,frame,group){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.rope(phzr.impl.utils.core.clj__GT_phaser.call(null,points),phzr.impl.utils.core.clj__GT_phaser.call(null,x),phzr.impl.utils.core.clj__GT_phaser.call(null,y),phzr.impl.utils.core.clj__GT_phaser.call(null,key),phzr.impl.utils.core.clj__GT_phaser.call(null,frame),phzr.impl.utils.core.clj__GT_phaser.call(null,group)));
});

phzr.game_object_factory.rope.cljs$lang$maxFixedArity = 7;

/**
 * Creates a new Sound object.
 * 
 *   Parameters:
 *  * game-object-factory (Phaser.GameObjectFactory) - Targeted instance for method
 *  * key (string) - The Game.cache key of the sound that this object will use.
 *  * volume (number) {optional} - The volume at which the sound will be played.
 *  * loop (boolean) {optional} - Whether or not the sound will loop.
 *  * connect (boolean) {optional} - Controls if the created Sound object will connect to the master gainNode of the SoundManager when running under WebAudio.
 * 
 *   Returns:  Phaser.Sound - The newly created sound object.
 */
phzr.game_object_factory.sound = (function phzr$game_object_factory$sound(var_args){
var args31108 = [];
var len__25865__auto___31111 = arguments.length;
var i__25866__auto___31112 = (0);
while(true){
if((i__25866__auto___31112 < len__25865__auto___31111)){
args31108.push((arguments[i__25866__auto___31112]));

var G__31113 = (i__25866__auto___31112 + (1));
i__25866__auto___31112 = G__31113;
continue;
} else {
}
break;
}

var G__31110 = args31108.length;
switch (G__31110) {
case 2:
return phzr.game_object_factory.sound.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.game_object_factory.sound.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.game_object_factory.sound.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.game_object_factory.sound.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31108.length)].join('')));

}
});

phzr.game_object_factory.sound.cljs$core$IFn$_invoke$arity$2 = (function (game_object_factory,key){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.sound(phzr.impl.utils.core.clj__GT_phaser.call(null,key)));
});

phzr.game_object_factory.sound.cljs$core$IFn$_invoke$arity$3 = (function (game_object_factory,key,volume){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.sound(phzr.impl.utils.core.clj__GT_phaser.call(null,key),phzr.impl.utils.core.clj__GT_phaser.call(null,volume)));
});

phzr.game_object_factory.sound.cljs$core$IFn$_invoke$arity$4 = (function (game_object_factory,key,volume,loop){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.sound(phzr.impl.utils.core.clj__GT_phaser.call(null,key),phzr.impl.utils.core.clj__GT_phaser.call(null,volume),phzr.impl.utils.core.clj__GT_phaser.call(null,loop)));
});

phzr.game_object_factory.sound.cljs$core$IFn$_invoke$arity$5 = (function (game_object_factory,key,volume,loop,connect){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.sound(phzr.impl.utils.core.clj__GT_phaser.call(null,key),phzr.impl.utils.core.clj__GT_phaser.call(null,volume),phzr.impl.utils.core.clj__GT_phaser.call(null,loop),phzr.impl.utils.core.clj__GT_phaser.call(null,connect)));
});

phzr.game_object_factory.sound.cljs$lang$maxFixedArity = 5;

/**
 * Create a new Sprite with specific position and sprite sheet key.
 * 
 *   At its most basic a Sprite consists of a set of coordinates and a texture that is used when rendered.
 *   They also contain additional properties allowing for physics motion (via Sprite.body), input handling (via Sprite.input),
 *   events (via Sprite.events), animation (via Sprite.animations), camera culling and more. Please see the Examples for use cases.
 * 
 *   Parameters:
 *  * game-object-factory (Phaser.GameObjectFactory) - Targeted instance for method
 *  * x (number) {optional} - The x coordinate of the sprite. The coordinate is relative to any parent container this sprite may be in.
 *  * y (number) {optional} - The y coordinate of the sprite. The coordinate is relative to any parent container this sprite may be in.
 *  * key (string | Phaser.RenderTexture | Phaser.BitmapData | Phaser.Video | PIXI.Texture) {optional} - The image used as a texture by this display object during rendering. If a string Phaser will get for an entry in the Image Cache. Or it can be an instance of a RenderTexture, BitmapData, Video or PIXI.Texture.
 *  * frame (string | number) {optional} - If a Texture Atlas or Sprite Sheet is used this allows you to specify the frame to be used. Use either an integer for a Frame ID or a string for a frame name.
 *  * group (Phaser.Group) {optional} - Optional Group to add the object to. If not specified it will be added to the World group.
 * 
 *   Returns:  Phaser.Sprite - The newly created Sprite object.
 */
phzr.game_object_factory.sprite = (function phzr$game_object_factory$sprite(var_args){
var args31115 = [];
var len__25865__auto___31118 = arguments.length;
var i__25866__auto___31119 = (0);
while(true){
if((i__25866__auto___31119 < len__25865__auto___31118)){
args31115.push((arguments[i__25866__auto___31119]));

var G__31120 = (i__25866__auto___31119 + (1));
i__25866__auto___31119 = G__31120;
continue;
} else {
}
break;
}

var G__31117 = args31115.length;
switch (G__31117) {
case 1:
return phzr.game_object_factory.sprite.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.game_object_factory.sprite.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.game_object_factory.sprite.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.game_object_factory.sprite.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.game_object_factory.sprite.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return phzr.game_object_factory.sprite.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31115.length)].join('')));

}
});

phzr.game_object_factory.sprite.cljs$core$IFn$_invoke$arity$1 = (function (game_object_factory){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.sprite());
});

phzr.game_object_factory.sprite.cljs$core$IFn$_invoke$arity$2 = (function (game_object_factory,x){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.sprite(phzr.impl.utils.core.clj__GT_phaser.call(null,x)));
});

phzr.game_object_factory.sprite.cljs$core$IFn$_invoke$arity$3 = (function (game_object_factory,x,y){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.sprite(phzr.impl.utils.core.clj__GT_phaser.call(null,x),phzr.impl.utils.core.clj__GT_phaser.call(null,y)));
});

phzr.game_object_factory.sprite.cljs$core$IFn$_invoke$arity$4 = (function (game_object_factory,x,y,key){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.sprite(phzr.impl.utils.core.clj__GT_phaser.call(null,x),phzr.impl.utils.core.clj__GT_phaser.call(null,y),phzr.impl.utils.core.clj__GT_phaser.call(null,key)));
});

phzr.game_object_factory.sprite.cljs$core$IFn$_invoke$arity$5 = (function (game_object_factory,x,y,key,frame){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.sprite(phzr.impl.utils.core.clj__GT_phaser.call(null,x),phzr.impl.utils.core.clj__GT_phaser.call(null,y),phzr.impl.utils.core.clj__GT_phaser.call(null,key),phzr.impl.utils.core.clj__GT_phaser.call(null,frame)));
});

phzr.game_object_factory.sprite.cljs$core$IFn$_invoke$arity$6 = (function (game_object_factory,x,y,key,frame,group){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.sprite(phzr.impl.utils.core.clj__GT_phaser.call(null,x),phzr.impl.utils.core.clj__GT_phaser.call(null,y),phzr.impl.utils.core.clj__GT_phaser.call(null,key),phzr.impl.utils.core.clj__GT_phaser.call(null,frame),phzr.impl.utils.core.clj__GT_phaser.call(null,group)));
});

phzr.game_object_factory.sprite.cljs$lang$maxFixedArity = 6;

/**
 * A SpriteBatch is a really fast version of a Phaser Group built solely for speed.
 *   Use when you need a lot of sprites or particles all sharing the same texture.
 *   The speed gains are specifically for WebGL. In Canvas mode you won't see any real difference.
 * 
 *   Parameters:
 *  * game-object-factory (Phaser.GameObjectFactory) - Targeted instance for method
 *  * parent (Phaser.Group | null) - The parent Group that will hold this Sprite Batch. Set to `undefined` or `null` to add directly to game.world.
 *  * name (string) {optional} - A name for this Sprite Batch. Not used internally but useful for debugging.
 *  * add-to-stage (boolean) {optional} - If set to true this Sprite Batch will be added directly to the Game.Stage instead of the parent.
 * 
 *   Returns:  Phaser.SpriteBatch - The newly created Sprite Batch.
 */
phzr.game_object_factory.sprite_batch = (function phzr$game_object_factory$sprite_batch(var_args){
var args31122 = [];
var len__25865__auto___31125 = arguments.length;
var i__25866__auto___31126 = (0);
while(true){
if((i__25866__auto___31126 < len__25865__auto___31125)){
args31122.push((arguments[i__25866__auto___31126]));

var G__31127 = (i__25866__auto___31126 + (1));
i__25866__auto___31126 = G__31127;
continue;
} else {
}
break;
}

var G__31124 = args31122.length;
switch (G__31124) {
case 2:
return phzr.game_object_factory.sprite_batch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.game_object_factory.sprite_batch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.game_object_factory.sprite_batch.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31122.length)].join('')));

}
});

phzr.game_object_factory.sprite_batch.cljs$core$IFn$_invoke$arity$2 = (function (game_object_factory,parent){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.spriteBatch(phzr.impl.utils.core.clj__GT_phaser.call(null,parent)));
});

phzr.game_object_factory.sprite_batch.cljs$core$IFn$_invoke$arity$3 = (function (game_object_factory,parent,name){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.spriteBatch(phzr.impl.utils.core.clj__GT_phaser.call(null,parent),phzr.impl.utils.core.clj__GT_phaser.call(null,name)));
});

phzr.game_object_factory.sprite_batch.cljs$core$IFn$_invoke$arity$4 = (function (game_object_factory,parent,name,add_to_stage){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.spriteBatch(phzr.impl.utils.core.clj__GT_phaser.call(null,parent),phzr.impl.utils.core.clj__GT_phaser.call(null,name),phzr.impl.utils.core.clj__GT_phaser.call(null,add_to_stage)));
});

phzr.game_object_factory.sprite_batch.cljs$lang$maxFixedArity = 4;

/**
 * Creates a new Text object.
 * 
 *   Parameters:
 *  * game-object-factory (Phaser.GameObjectFactory) - Targeted instance for method
 *  * x (number) {optional} - The x coordinate of the Text. The coordinate is relative to any parent container this text may be in.
 *  * y (number) {optional} - The y coordinate of the Text. The coordinate is relative to any parent container this text may be in.
 *  * text (string) {optional} - The text string that will be displayed.
 *  * style (object) {optional} - The style object containing style attributes like font, font size , etc.
 *  * group (Phaser.Group) {optional} - Optional Group to add the object to. If not specified it will be added to the World group.
 * 
 *   Returns:  Phaser.Text - The newly created text object.
 */
phzr.game_object_factory.text = (function phzr$game_object_factory$text(var_args){
var args31129 = [];
var len__25865__auto___31132 = arguments.length;
var i__25866__auto___31133 = (0);
while(true){
if((i__25866__auto___31133 < len__25865__auto___31132)){
args31129.push((arguments[i__25866__auto___31133]));

var G__31134 = (i__25866__auto___31133 + (1));
i__25866__auto___31133 = G__31134;
continue;
} else {
}
break;
}

var G__31131 = args31129.length;
switch (G__31131) {
case 1:
return phzr.game_object_factory.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.game_object_factory.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.game_object_factory.text.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.game_object_factory.text.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.game_object_factory.text.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return phzr.game_object_factory.text.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31129.length)].join('')));

}
});

phzr.game_object_factory.text.cljs$core$IFn$_invoke$arity$1 = (function (game_object_factory){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.text());
});

phzr.game_object_factory.text.cljs$core$IFn$_invoke$arity$2 = (function (game_object_factory,x){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.text(phzr.impl.utils.core.clj__GT_phaser.call(null,x)));
});

phzr.game_object_factory.text.cljs$core$IFn$_invoke$arity$3 = (function (game_object_factory,x,y){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.text(phzr.impl.utils.core.clj__GT_phaser.call(null,x),phzr.impl.utils.core.clj__GT_phaser.call(null,y)));
});

phzr.game_object_factory.text.cljs$core$IFn$_invoke$arity$4 = (function (game_object_factory,x,y,text){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.text(phzr.impl.utils.core.clj__GT_phaser.call(null,x),phzr.impl.utils.core.clj__GT_phaser.call(null,y),phzr.impl.utils.core.clj__GT_phaser.call(null,text)));
});

phzr.game_object_factory.text.cljs$core$IFn$_invoke$arity$5 = (function (game_object_factory,x,y,text,style){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.text(phzr.impl.utils.core.clj__GT_phaser.call(null,x),phzr.impl.utils.core.clj__GT_phaser.call(null,y),phzr.impl.utils.core.clj__GT_phaser.call(null,text),phzr.impl.utils.core.clj__GT_phaser.call(null,style)));
});

phzr.game_object_factory.text.cljs$core$IFn$_invoke$arity$6 = (function (game_object_factory,x,y,text,style,group){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.text(phzr.impl.utils.core.clj__GT_phaser.call(null,x),phzr.impl.utils.core.clj__GT_phaser.call(null,y),phzr.impl.utils.core.clj__GT_phaser.call(null,text),phzr.impl.utils.core.clj__GT_phaser.call(null,style),phzr.impl.utils.core.clj__GT_phaser.call(null,group)));
});

phzr.game_object_factory.text.cljs$lang$maxFixedArity = 6;

/**
 * Creates a new TileSprite object.
 * 
 *   Parameters:
 *  * game-object-factory (Phaser.GameObjectFactory) - Targeted instance for method
 *  * x (number) - The x coordinate of the TileSprite. The coordinate is relative to any parent container this TileSprite may be in.
 *  * y (number) - The y coordinate of the TileSprite. The coordinate is relative to any parent container this TileSprite may be in.
 *  * width (number) - The width of the TileSprite.
 *  * height (number) - The height of the TileSprite.
 *  * key (string | Phaser.RenderTexture | Phaser.BitmapData | Phaser.Video | PIXI.Texture) - The image used as a texture by this display object during rendering. If a string Phaser will get for an entry in the Image Cache. Or it can be an instance of a RenderTexture, BitmapData, Video or PIXI.Texture.
 *  * frame (string | number) {optional} - If a Texture Atlas or Sprite Sheet is used this allows you to specify the frame to be used. Use either an integer for a Frame ID or a string for a frame name.
 *  * group (Phaser.Group) {optional} - Optional Group to add the object to. If not specified it will be added to the World group.
 * 
 *   Returns:  Phaser.TileSprite - The newly created TileSprite object.
 */
phzr.game_object_factory.tile_sprite = (function phzr$game_object_factory$tile_sprite(var_args){
var args31136 = [];
var len__25865__auto___31139 = arguments.length;
var i__25866__auto___31140 = (0);
while(true){
if((i__25866__auto___31140 < len__25865__auto___31139)){
args31136.push((arguments[i__25866__auto___31140]));

var G__31141 = (i__25866__auto___31140 + (1));
i__25866__auto___31140 = G__31141;
continue;
} else {
}
break;
}

var G__31138 = args31136.length;
switch (G__31138) {
case 6:
return phzr.game_object_factory.tile_sprite.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return phzr.game_object_factory.tile_sprite.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 8:
return phzr.game_object_factory.tile_sprite.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31136.length)].join('')));

}
});

phzr.game_object_factory.tile_sprite.cljs$core$IFn$_invoke$arity$6 = (function (game_object_factory,x,y,width,height,key){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.tileSprite(phzr.impl.utils.core.clj__GT_phaser.call(null,x),phzr.impl.utils.core.clj__GT_phaser.call(null,y),phzr.impl.utils.core.clj__GT_phaser.call(null,width),phzr.impl.utils.core.clj__GT_phaser.call(null,height),phzr.impl.utils.core.clj__GT_phaser.call(null,key)));
});

phzr.game_object_factory.tile_sprite.cljs$core$IFn$_invoke$arity$7 = (function (game_object_factory,x,y,width,height,key,frame){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.tileSprite(phzr.impl.utils.core.clj__GT_phaser.call(null,x),phzr.impl.utils.core.clj__GT_phaser.call(null,y),phzr.impl.utils.core.clj__GT_phaser.call(null,width),phzr.impl.utils.core.clj__GT_phaser.call(null,height),phzr.impl.utils.core.clj__GT_phaser.call(null,key),phzr.impl.utils.core.clj__GT_phaser.call(null,frame)));
});

phzr.game_object_factory.tile_sprite.cljs$core$IFn$_invoke$arity$8 = (function (game_object_factory,x,y,width,height,key,frame,group){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.tileSprite(phzr.impl.utils.core.clj__GT_phaser.call(null,x),phzr.impl.utils.core.clj__GT_phaser.call(null,y),phzr.impl.utils.core.clj__GT_phaser.call(null,width),phzr.impl.utils.core.clj__GT_phaser.call(null,height),phzr.impl.utils.core.clj__GT_phaser.call(null,key),phzr.impl.utils.core.clj__GT_phaser.call(null,frame),phzr.impl.utils.core.clj__GT_phaser.call(null,group)));
});

phzr.game_object_factory.tile_sprite.cljs$lang$maxFixedArity = 8;

/**
 * Creates a new Phaser.Tilemap object.
 * 
 *   The map can either be populated with data from a Tiled JSON file or from a CSV file.
 *   To do this pass the Cache key as the first parameter. When using Tiled data you need only provide the key.
 *   When using CSV data you must provide the key and the tileWidth and tileHeight parameters.
 *   If creating a blank tilemap to be populated later, you can either specify no parameters at all and then use `Tilemap.create` or pass the map and tile dimensions here.
 *   Note that all Tilemaps use a base tile size to calculate dimensions from, but that a TilemapLayer may have its own unique tile size that overrides it.
 * 
 *   Parameters:
 *  * game-object-factory (Phaser.GameObjectFactory) - Targeted instance for method
 *  * key (string) {optional} - The key of the tilemap data as stored in the Cache. If you're creating a blank map either leave this parameter out or pass `null`.
 *  * tile-width (number) {optional} - The pixel width of a single map tile. If using CSV data you must specify this. Not required if using Tiled map data.
 *  * tile-height (number) {optional} - The pixel height of a single map tile. If using CSV data you must specify this. Not required if using Tiled map data.
 *  * width (number) {optional} - The width of the map in tiles. If this map is created from Tiled or CSV data you don't need to specify this.
 *  * height (number) {optional} - The height of the map in tiles. If this map is created from Tiled or CSV data you don't need to specify this.
 * 
 *   Returns:  Phaser.Tilemap - The newly created tilemap object.
 */
phzr.game_object_factory.tilemap = (function phzr$game_object_factory$tilemap(var_args){
var args31143 = [];
var len__25865__auto___31146 = arguments.length;
var i__25866__auto___31147 = (0);
while(true){
if((i__25866__auto___31147 < len__25865__auto___31146)){
args31143.push((arguments[i__25866__auto___31147]));

var G__31148 = (i__25866__auto___31147 + (1));
i__25866__auto___31147 = G__31148;
continue;
} else {
}
break;
}

var G__31145 = args31143.length;
switch (G__31145) {
case 1:
return phzr.game_object_factory.tilemap.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.game_object_factory.tilemap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.game_object_factory.tilemap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.game_object_factory.tilemap.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.game_object_factory.tilemap.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return phzr.game_object_factory.tilemap.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31143.length)].join('')));

}
});

phzr.game_object_factory.tilemap.cljs$core$IFn$_invoke$arity$1 = (function (game_object_factory){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.tilemap());
});

phzr.game_object_factory.tilemap.cljs$core$IFn$_invoke$arity$2 = (function (game_object_factory,key){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.tilemap(phzr.impl.utils.core.clj__GT_phaser.call(null,key)));
});

phzr.game_object_factory.tilemap.cljs$core$IFn$_invoke$arity$3 = (function (game_object_factory,key,tile_width){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.tilemap(phzr.impl.utils.core.clj__GT_phaser.call(null,key),phzr.impl.utils.core.clj__GT_phaser.call(null,tile_width)));
});

phzr.game_object_factory.tilemap.cljs$core$IFn$_invoke$arity$4 = (function (game_object_factory,key,tile_width,tile_height){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.tilemap(phzr.impl.utils.core.clj__GT_phaser.call(null,key),phzr.impl.utils.core.clj__GT_phaser.call(null,tile_width),phzr.impl.utils.core.clj__GT_phaser.call(null,tile_height)));
});

phzr.game_object_factory.tilemap.cljs$core$IFn$_invoke$arity$5 = (function (game_object_factory,key,tile_width,tile_height,width){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.tilemap(phzr.impl.utils.core.clj__GT_phaser.call(null,key),phzr.impl.utils.core.clj__GT_phaser.call(null,tile_width),phzr.impl.utils.core.clj__GT_phaser.call(null,tile_height),phzr.impl.utils.core.clj__GT_phaser.call(null,width)));
});

phzr.game_object_factory.tilemap.cljs$core$IFn$_invoke$arity$6 = (function (game_object_factory,key,tile_width,tile_height,width,height){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.tilemap(phzr.impl.utils.core.clj__GT_phaser.call(null,key),phzr.impl.utils.core.clj__GT_phaser.call(null,tile_width),phzr.impl.utils.core.clj__GT_phaser.call(null,tile_height),phzr.impl.utils.core.clj__GT_phaser.call(null,width),phzr.impl.utils.core.clj__GT_phaser.call(null,height)));
});

phzr.game_object_factory.tilemap.cljs$lang$maxFixedArity = 6;

/**
 * Create a tween on a specific object.
 * 
 *   The object can be any JavaScript object or Phaser object such as Sprite.
 * 
 *   Parameters:
 *  * game-object-factory (Phaser.GameObjectFactory) - Targeted instance for method
 *  * object (object) - Object the tween will be run on.
 * 
 *   Returns:  Phaser.Tween - The newly created Phaser.Tween object.
 */
phzr.game_object_factory.tween = (function phzr$game_object_factory$tween(game_object_factory,object){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.tween(phzr.impl.utils.core.clj__GT_phaser.call(null,object)));
});
/**
 * Create a Video object.
 * 
 *   This will return a Phaser.Video object which you can pass to a Sprite to be used as a texture.
 * 
 *   Parameters:
 *  * game-object-factory (Phaser.GameObjectFactory) - Targeted instance for method
 *  * key (string | null) {optional} - The key of the video file in the Phaser.Cache that this Video object will play. Set to `null` or leave undefined if you wish to use a webcam as the source. See `startMediaStream` to start webcam capture.
 *  * url (string | null) {optional} - If the video hasn't been loaded then you can provide a full URL to the file here (make sure to set key to null)
 * 
 *   Returns:  Phaser.Video - The newly created Video object.
 */
phzr.game_object_factory.video = (function phzr$game_object_factory$video(var_args){
var args31150 = [];
var len__25865__auto___31153 = arguments.length;
var i__25866__auto___31154 = (0);
while(true){
if((i__25866__auto___31154 < len__25865__auto___31153)){
args31150.push((arguments[i__25866__auto___31154]));

var G__31155 = (i__25866__auto___31154 + (1));
i__25866__auto___31154 = G__31155;
continue;
} else {
}
break;
}

var G__31152 = args31150.length;
switch (G__31152) {
case 1:
return phzr.game_object_factory.video.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.game_object_factory.video.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.game_object_factory.video.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31150.length)].join('')));

}
});

phzr.game_object_factory.video.cljs$core$IFn$_invoke$arity$1 = (function (game_object_factory){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.video());
});

phzr.game_object_factory.video.cljs$core$IFn$_invoke$arity$2 = (function (game_object_factory,key){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.video(phzr.impl.utils.core.clj__GT_phaser.call(null,key)));
});

phzr.game_object_factory.video.cljs$core$IFn$_invoke$arity$3 = (function (game_object_factory,key,url){
return phzr.impl.utils.core.phaser__GT_clj.call(null,game_object_factory.video(phzr.impl.utils.core.clj__GT_phaser.call(null,key),phzr.impl.utils.core.clj__GT_phaser.call(null,url)));
});

phzr.game_object_factory.video.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=game_object_factory.js.map?rel=1485300082434