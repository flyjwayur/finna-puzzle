// Compiled by ClojureScript 1.9.229 {}
goog.provide('phzr.tween');
goog.require('cljs.core');
goog.require('phzr.impl.utils.core');
goog.require('phzr.impl.extend');
goog.require('cljsjs.phaser');
/**
 * A Tween allows you to alter one or more properties of a target object over a defined period of time.
 *   This can be used for things such as alpha fading Sprites, scaling them or motion.
 *   Use `Tween.to` or `Tween.from` to set-up the tween values. You can create multiple tweens on the same object
 *   by calling Tween.to multiple times on the same Tween. Additional tweens specified in this way become 'child' tweens and
 *   are played through in sequence. You can use Tween.timeScale and Tween.reverse to control the playback of this Tween and all of its children.
 * 
 *   Parameters:
 *  * target (object) - The target object, such as a Phaser.Sprite or Phaser.Sprite.scale.
 *  * game (Phaser.Game) - Current game instance.
 *  * manager (Phaser.TweenManager) - The TweenManager responsible for looking after this Tween.
 */
phzr.tween.__GT_Tween = (function phzr$tween$__GT_Tween(target,game,manager){
return (new Phaser.Tween(phzr.impl.utils.core.clj__GT_phaser.call(null,target),phzr.impl.utils.core.clj__GT_phaser.call(null,game),phzr.impl.utils.core.clj__GT_phaser.call(null,manager)));
});
/**
 * This method allows you to chain tweens together. Any tween chained to this tween will have its `Tween.start` method called
 *   as soon as this tween completes. If this tween never completes (i.e. repeatAll or loop is set) then the chain will never progress.
 *   Note that `Tween.onComplete` will fire when *this* tween completes, not when the whole chain completes.
 *   For that you should listen to `onComplete` on the final tween in your chain.
 * 
 *   If you pass multiple tweens to this method they will be joined into a single long chain.
 *   For example if this is Tween A and you pass in B, C and D then B will be chained to A, C will be chained to B and D will be chained to C.
 *   Any previously chained tweens that may have been set will be overwritten.
 * 
 *   Parameters:
 *  * tween (Phaser.Tween) - Targeted instance for method
 *  * tweens (Phaser.Tween) - One or more tweens that will be chained to this one.
 * 
 *   Returns:  Phaser.Tween - This tween. Useful for method chaining.
 */
phzr.tween.chain = (function phzr$tween$chain(tween,tweens){
return phzr.impl.utils.core.phaser__GT_clj.call(null,tween.chain(phzr.impl.utils.core.clj__GT_phaser.call(null,tweens)));
});
/**
 * Sets the delay in milliseconds before this tween will start. If there are child tweens it sets the delay before the first child starts.
 *   The delay is invoked as soon as you call `Tween.start`. If the tween is already running this method doesn't do anything for the current active tween.
 *   If you have not yet called `Tween.to` or `Tween.from` at least once then this method will do nothing, as there are no tweens to delay.
 *   If you have child tweens and pass -1 as the index value it sets the delay across all of them.
 * 
 *   Parameters:
 *  * tween (Phaser.Tween) - Targeted instance for method
 *  * duration (number) - The amount of time in ms that the Tween should wait until it begins once started is called. Set to zero to remove any active delay.
 *  * index (number) {optional} - If this tween has more than one child this allows you to target a specific child. If set to -1 it will set the delay on all the children.
 * 
 *   Returns:  Phaser.Tween - This tween. Useful for method chaining.
 */
phzr.tween.delay = (function phzr$tween$delay(var_args){
var args31317 = [];
var len__25865__auto___31320 = arguments.length;
var i__25866__auto___31321 = (0);
while(true){
if((i__25866__auto___31321 < len__25865__auto___31320)){
args31317.push((arguments[i__25866__auto___31321]));

var G__31322 = (i__25866__auto___31321 + (1));
i__25866__auto___31321 = G__31322;
continue;
} else {
}
break;
}

var G__31319 = args31317.length;
switch (G__31319) {
case 2:
return phzr.tween.delay.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.tween.delay.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31317.length)].join('')));

}
});

phzr.tween.delay.cljs$core$IFn$_invoke$arity$2 = (function (tween,duration){
return phzr.impl.utils.core.phaser__GT_clj.call(null,tween.delay(phzr.impl.utils.core.clj__GT_phaser.call(null,duration)));
});

phzr.tween.delay.cljs$core$IFn$_invoke$arity$3 = (function (tween,duration,index){
return phzr.impl.utils.core.phaser__GT_clj.call(null,tween.delay(phzr.impl.utils.core.clj__GT_phaser.call(null,duration),phzr.impl.utils.core.clj__GT_phaser.call(null,index)));
});

phzr.tween.delay.cljs$lang$maxFixedArity = 3;

/**
 * Set easing function this tween will use, i.e. Phaser.Easing.Linear.None.
 *   The ease function allows you define the rate of change. You can pass either a function such as Phaser.Easing.Circular.Out or a string such as 'Circ'.
 *   '.easeIn', '.easeOut' and 'easeInOut' variants are all supported for all ease types.
 *   If you have child tweens and pass -1 as the index value it sets the easing function defined here across all of them.
 * 
 *   Parameters:
 *  * tween (Phaser.Tween) - Targeted instance for method
 *  * ease (function | string) - The easing function this tween will use, i.e. Phaser.Easing.Linear.None.
 *  * index (number) {optional} - If this tween has more than one child this allows you to target a specific child. If set to -1 it will set the easing function on all children.
 * 
 *   Returns:  Phaser.Tween - This tween. Useful for method chaining.
 */
phzr.tween.easing = (function phzr$tween$easing(var_args){
var args31324 = [];
var len__25865__auto___31327 = arguments.length;
var i__25866__auto___31328 = (0);
while(true){
if((i__25866__auto___31328 < len__25865__auto___31327)){
args31324.push((arguments[i__25866__auto___31328]));

var G__31329 = (i__25866__auto___31328 + (1));
i__25866__auto___31328 = G__31329;
continue;
} else {
}
break;
}

var G__31326 = args31324.length;
switch (G__31326) {
case 2:
return phzr.tween.easing.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.tween.easing.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31324.length)].join('')));

}
});

phzr.tween.easing.cljs$core$IFn$_invoke$arity$2 = (function (tween,ease){
return phzr.impl.utils.core.phaser__GT_clj.call(null,tween.easing(phzr.impl.utils.core.clj__GT_phaser.call(null,ease)));
});

phzr.tween.easing.cljs$core$IFn$_invoke$arity$3 = (function (tween,ease,index){
return phzr.impl.utils.core.phaser__GT_clj.call(null,tween.easing(phzr.impl.utils.core.clj__GT_phaser.call(null,ease),phzr.impl.utils.core.clj__GT_phaser.call(null,index)));
});

phzr.tween.easing.cljs$lang$maxFixedArity = 3;

/**
 * Sets this tween to be a `from` tween on the properties given. A `from` tween sets the target to the destination value and tweens to its current value.
 *   For example a Sprite with an `x` coordinate of 100 tweened from `x` 500 would be set to `x` 500 and then tweened to `x` 100 by giving a properties object of `{ x: 500 }`.
 *   The ease function allows you define the rate of change. You can pass either a function such as Phaser.Easing.Circular.Out or a string such as 'Circ'.
 *   '.easeIn', '.easeOut' and 'easeInOut' variants are all supported for all ease types.
 * 
 *   Parameters:
 *  * tween (Phaser.Tween) - Targeted instance for method
 *  * properties (object) - An object containing the properties you want to tween., such as `Sprite.x` or `Sound.volume`. Given as a JavaScript object.
 *  * duration (number) {optional} - Duration of this tween in ms.
 *  * ease (function | string) {optional} - Easing function. If not set it will default to Phaser.Easing.Default, which is Phaser.Easing.Linear.None by default but can be over-ridden.
 *  * auto-start (boolean) {optional} - Set to `true` to allow this tween to start automatically. Otherwise call Tween.start().
 *  * delay (number) {optional} - Delay before this tween will start in milliseconds. Defaults to 0, no delay.
 *  * repeat (number) {optional} - Should the tween automatically restart once complete? If you want it to run forever set as -1. This only effects this induvidual tween, not any chained tweens.
 *  * yoyo (boolean) {optional} - A tween that yoyos will reverse itself and play backwards automatically. A yoyo'd tween doesn't fire the Tween.onComplete event, so listen for Tween.onLoop instead.
 * 
 *   Returns:  Phaser.Tween - This Tween object.
 */
phzr.tween.from = (function phzr$tween$from(var_args){
var args31331 = [];
var len__25865__auto___31334 = arguments.length;
var i__25866__auto___31335 = (0);
while(true){
if((i__25866__auto___31335 < len__25865__auto___31334)){
args31331.push((arguments[i__25866__auto___31335]));

var G__31336 = (i__25866__auto___31335 + (1));
i__25866__auto___31335 = G__31336;
continue;
} else {
}
break;
}

var G__31333 = args31331.length;
switch (G__31333) {
case 2:
return phzr.tween.from.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.tween.from.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.tween.from.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.tween.from.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return phzr.tween.from.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return phzr.tween.from.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 8:
return phzr.tween.from.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31331.length)].join('')));

}
});

phzr.tween.from.cljs$core$IFn$_invoke$arity$2 = (function (tween,properties){
return phzr.impl.utils.core.phaser__GT_clj.call(null,tween.from(phzr.impl.utils.core.clj__GT_phaser.call(null,properties)));
});

phzr.tween.from.cljs$core$IFn$_invoke$arity$3 = (function (tween,properties,duration){
return phzr.impl.utils.core.phaser__GT_clj.call(null,tween.from(phzr.impl.utils.core.clj__GT_phaser.call(null,properties),phzr.impl.utils.core.clj__GT_phaser.call(null,duration)));
});

phzr.tween.from.cljs$core$IFn$_invoke$arity$4 = (function (tween,properties,duration,ease){
return phzr.impl.utils.core.phaser__GT_clj.call(null,tween.from(phzr.impl.utils.core.clj__GT_phaser.call(null,properties),phzr.impl.utils.core.clj__GT_phaser.call(null,duration),phzr.impl.utils.core.clj__GT_phaser.call(null,ease)));
});

phzr.tween.from.cljs$core$IFn$_invoke$arity$5 = (function (tween,properties,duration,ease,auto_start){
return phzr.impl.utils.core.phaser__GT_clj.call(null,tween.from(phzr.impl.utils.core.clj__GT_phaser.call(null,properties),phzr.impl.utils.core.clj__GT_phaser.call(null,duration),phzr.impl.utils.core.clj__GT_phaser.call(null,ease),phzr.impl.utils.core.clj__GT_phaser.call(null,auto_start)));
});

phzr.tween.from.cljs$core$IFn$_invoke$arity$6 = (function (tween,properties,duration,ease,auto_start,delay){
return phzr.impl.utils.core.phaser__GT_clj.call(null,tween.from(phzr.impl.utils.core.clj__GT_phaser.call(null,properties),phzr.impl.utils.core.clj__GT_phaser.call(null,duration),phzr.impl.utils.core.clj__GT_phaser.call(null,ease),phzr.impl.utils.core.clj__GT_phaser.call(null,auto_start),phzr.impl.utils.core.clj__GT_phaser.call(null,delay)));
});

phzr.tween.from.cljs$core$IFn$_invoke$arity$7 = (function (tween,properties,duration,ease,auto_start,delay,repeat){
return phzr.impl.utils.core.phaser__GT_clj.call(null,tween.from(phzr.impl.utils.core.clj__GT_phaser.call(null,properties),phzr.impl.utils.core.clj__GT_phaser.call(null,duration),phzr.impl.utils.core.clj__GT_phaser.call(null,ease),phzr.impl.utils.core.clj__GT_phaser.call(null,auto_start),phzr.impl.utils.core.clj__GT_phaser.call(null,delay),phzr.impl.utils.core.clj__GT_phaser.call(null,repeat)));
});

phzr.tween.from.cljs$core$IFn$_invoke$arity$8 = (function (tween,properties,duration,ease,auto_start,delay,repeat,yoyo){
return phzr.impl.utils.core.phaser__GT_clj.call(null,tween.from(phzr.impl.utils.core.clj__GT_phaser.call(null,properties),phzr.impl.utils.core.clj__GT_phaser.call(null,duration),phzr.impl.utils.core.clj__GT_phaser.call(null,ease),phzr.impl.utils.core.clj__GT_phaser.call(null,auto_start),phzr.impl.utils.core.clj__GT_phaser.call(null,delay),phzr.impl.utils.core.clj__GT_phaser.call(null,repeat),phzr.impl.utils.core.clj__GT_phaser.call(null,yoyo)));
});

phzr.tween.from.cljs$lang$maxFixedArity = 8;

/**
 * This will generate an array populated with the tweened object values from start to end.
 *   It works by running the tween simulation at the given frame rate based on the values set-up in Tween.to and Tween.from.
 *   It ignores delay and repeat counts and any chained tweens, but does include child tweens.
 *   Just one play through of the tween data is returned, including yoyo if set.
 * 
 *   Parameters:
 *  * tween (Phaser.Tween) - Targeted instance for method
 *  * frame-rate (number) {optional} - The speed in frames per second that the data should be generated at. The higher the value, the larger the array it creates.
 *  * data (array) {optional} - If given the generated data will be appended to this array, otherwise a new array will be returned.
 * 
 *   Returns:  array - An array of tweened values.
 */
phzr.tween.generate_data = (function phzr$tween$generate_data(var_args){
var args31338 = [];
var len__25865__auto___31341 = arguments.length;
var i__25866__auto___31342 = (0);
while(true){
if((i__25866__auto___31342 < len__25865__auto___31341)){
args31338.push((arguments[i__25866__auto___31342]));

var G__31343 = (i__25866__auto___31342 + (1));
i__25866__auto___31342 = G__31343;
continue;
} else {
}
break;
}

var G__31340 = args31338.length;
switch (G__31340) {
case 1:
return phzr.tween.generate_data.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.tween.generate_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.tween.generate_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31338.length)].join('')));

}
});

phzr.tween.generate_data.cljs$core$IFn$_invoke$arity$1 = (function (tween){
return phzr.impl.utils.core.phaser__GT_clj.call(null,tween.generateData());
});

phzr.tween.generate_data.cljs$core$IFn$_invoke$arity$2 = (function (tween,frame_rate){
return phzr.impl.utils.core.phaser__GT_clj.call(null,tween.generateData(phzr.impl.utils.core.clj__GT_phaser.call(null,frame_rate)));
});

phzr.tween.generate_data.cljs$core$IFn$_invoke$arity$3 = (function (tween,frame_rate,data){
return phzr.impl.utils.core.phaser__GT_clj.call(null,tween.generateData(phzr.impl.utils.core.clj__GT_phaser.call(null,frame_rate),phzr.impl.utils.core.clj__GT_phaser.call(null,data)));
});

phzr.tween.generate_data.cljs$lang$maxFixedArity = 3;

/**
 * Sets the interpolation function the tween will use. By default it uses Phaser.Math.linearInterpolation.
 *   Also available: Phaser.Math.bezierInterpolation and Phaser.Math.catmullRomInterpolation.
 *   The interpolation function is only used if the target properties is an array.
 *   If you have child tweens and pass -1 as the index value and it will set the interpolation function across all of them.
 * 
 *   Parameters:
 *  * tween (Phaser.Tween) - Targeted instance for method
 *  * interpolation (function) - The interpolation function to use (Phaser.Math.linearInterpolation by default)
 *  * context (object) {optional} - The context under which the interpolation function will be run.
 *  * index (number) {optional} - If this tween has more than one child this allows you to target a specific child. If set to -1 it will set the interpolation function on all children.
 * 
 *   Returns:  Phaser.Tween - This tween. Useful for method chaining.
 */
phzr.tween.interpolation = (function phzr$tween$interpolation(var_args){
var args31345 = [];
var len__25865__auto___31348 = arguments.length;
var i__25866__auto___31349 = (0);
while(true){
if((i__25866__auto___31349 < len__25865__auto___31348)){
args31345.push((arguments[i__25866__auto___31349]));

var G__31350 = (i__25866__auto___31349 + (1));
i__25866__auto___31349 = G__31350;
continue;
} else {
}
break;
}

var G__31347 = args31345.length;
switch (G__31347) {
case 2:
return phzr.tween.interpolation.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.tween.interpolation.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.tween.interpolation.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31345.length)].join('')));

}
});

phzr.tween.interpolation.cljs$core$IFn$_invoke$arity$2 = (function (tween,interpolation){
return phzr.impl.utils.core.phaser__GT_clj.call(null,tween.interpolation(phzr.impl.utils.core.clj__GT_phaser.call(null,interpolation)));
});

phzr.tween.interpolation.cljs$core$IFn$_invoke$arity$3 = (function (tween,interpolation,context){
return phzr.impl.utils.core.phaser__GT_clj.call(null,tween.interpolation(phzr.impl.utils.core.clj__GT_phaser.call(null,interpolation),phzr.impl.utils.core.clj__GT_phaser.call(null,context)));
});

phzr.tween.interpolation.cljs$core$IFn$_invoke$arity$4 = (function (tween,interpolation,context,index){
return phzr.impl.utils.core.phaser__GT_clj.call(null,tween.interpolation(phzr.impl.utils.core.clj__GT_phaser.call(null,interpolation),phzr.impl.utils.core.clj__GT_phaser.call(null,context),phzr.impl.utils.core.clj__GT_phaser.call(null,index)));
});

phzr.tween.interpolation.cljs$lang$maxFixedArity = 4;

/**
 * Enables the looping of this tween and all child tweens. If this tween has no children this setting has no effect.
 *   If `value` is `true` then this is the same as setting `Tween.repeatAll(-1)`.
 *   If `value` is `false` it is the same as setting `Tween.repeatAll(0)` and will reset the `repeatCounter` to zero.
 * 
 *   Usage:
 *   game.add.tween(p).to({ x: 700 }, 1000, Phaser.Easing.Linear.None, true)
 *   .to({ y: 300 }, 1000, Phaser.Easing.Linear.None)
 *   .to({ x: 0 }, 1000, Phaser.Easing.Linear.None)
 *   .to({ y: 0 }, 1000, Phaser.Easing.Linear.None)
 *   .loop();
 * 
 *   Parameters:
 *  * tween (Phaser.Tween) - Targeted instance for method
 *  * value (boolean) {optional} - If `true` this tween and any child tweens will loop once they reach the end. Set to `false` to remove an active loop.
 * 
 *   Returns:  Phaser.Tween - This tween. Useful for method chaining.
 */
phzr.tween.loop = (function phzr$tween$loop(var_args){
var args31352 = [];
var len__25865__auto___31355 = arguments.length;
var i__25866__auto___31356 = (0);
while(true){
if((i__25866__auto___31356 < len__25865__auto___31355)){
args31352.push((arguments[i__25866__auto___31356]));

var G__31357 = (i__25866__auto___31356 + (1));
i__25866__auto___31356 = G__31357;
continue;
} else {
}
break;
}

var G__31354 = args31352.length;
switch (G__31354) {
case 1:
return phzr.tween.loop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.tween.loop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31352.length)].join('')));

}
});

phzr.tween.loop.cljs$core$IFn$_invoke$arity$1 = (function (tween){
return phzr.impl.utils.core.phaser__GT_clj.call(null,tween.loop());
});

phzr.tween.loop.cljs$core$IFn$_invoke$arity$2 = (function (tween,value){
return phzr.impl.utils.core.phaser__GT_clj.call(null,tween.loop(phzr.impl.utils.core.clj__GT_phaser.call(null,value)));
});

phzr.tween.loop.cljs$lang$maxFixedArity = 2;

/**
 * Sets a callback to be fired each time this tween updates.
 * 
 *   Parameters:
 *  * tween (Phaser.Tween) - Targeted instance for method
 *  * callback (function) - The callback to invoke each time this tween is updated. Set to `null` to remove an already active callback.
 *  * callback-context (object) - The context in which to call the onUpdate callback.
 * 
 *   Returns:  Phaser.Tween - This tween. Useful for method chaining.
 */
phzr.tween.on_update_callback = (function phzr$tween$on_update_callback(tween,callback,callback_context){
return phzr.impl.utils.core.phaser__GT_clj.call(null,tween.onUpdateCallback(phzr.impl.utils.core.clj__GT_phaser.call(null,callback),phzr.impl.utils.core.clj__GT_phaser.call(null,callback_context)));
});
/**
 * Pauses the tween. Resume playback with Tween.resume.
 */
phzr.tween.pause = (function phzr$tween$pause(tween){
return phzr.impl.utils.core.phaser__GT_clj.call(null,tween.pause());
});
/**
 * Sets the number of times this tween will repeat.
 *   If you have not yet called `Tween.to` or `Tween.from` at least once then this method will do nothing, as there are no tweens to repeat.
 *   If you have child tweens and pass -1 as the index value it sets the number of times they'll repeat across all of them.
 *   If you wish to define how many times this Tween and all children will repeat see Tween.repeatAll.
 * 
 *   Parameters:
 *  * tween (Phaser.Tween) - Targeted instance for method
 *  * total (number) - How many times a tween should repeat before completing. Set to zero to remove an active repeat. Set to -1 to repeat forever.
 *  * repeat (number) {optional} - This is the amount of time to pause (in ms) before the repeat will start.
 *  * index (number) {optional} - If this tween has more than one child this allows you to target a specific child. If set to -1 it will set the repeat value on all the children.
 * 
 *   Returns:  Phaser.Tween - This tween. Useful for method chaining.
 */
phzr.tween.repeat = (function phzr$tween$repeat(var_args){
var args31359 = [];
var len__25865__auto___31362 = arguments.length;
var i__25866__auto___31363 = (0);
while(true){
if((i__25866__auto___31363 < len__25865__auto___31362)){
args31359.push((arguments[i__25866__auto___31363]));

var G__31364 = (i__25866__auto___31363 + (1));
i__25866__auto___31363 = G__31364;
continue;
} else {
}
break;
}

var G__31361 = args31359.length;
switch (G__31361) {
case 2:
return phzr.tween.repeat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.tween.repeat.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.tween.repeat.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31359.length)].join('')));

}
});

phzr.tween.repeat.cljs$core$IFn$_invoke$arity$2 = (function (tween,total){
return phzr.impl.utils.core.phaser__GT_clj.call(null,tween.repeat(phzr.impl.utils.core.clj__GT_phaser.call(null,total)));
});

phzr.tween.repeat.cljs$core$IFn$_invoke$arity$3 = (function (tween,total,repeat){
return phzr.impl.utils.core.phaser__GT_clj.call(null,tween.repeat(phzr.impl.utils.core.clj__GT_phaser.call(null,total),phzr.impl.utils.core.clj__GT_phaser.call(null,repeat)));
});

phzr.tween.repeat.cljs$core$IFn$_invoke$arity$4 = (function (tween,total,repeat,index){
return phzr.impl.utils.core.phaser__GT_clj.call(null,tween.repeat(phzr.impl.utils.core.clj__GT_phaser.call(null,total),phzr.impl.utils.core.clj__GT_phaser.call(null,repeat),phzr.impl.utils.core.clj__GT_phaser.call(null,index)));
});

phzr.tween.repeat.cljs$lang$maxFixedArity = 4;

/**
 * Set how many times this tween and all of its children will repeat.
 *   A tween (A) with 3 children (B,C,D) with a `repeatAll` value of 2 would play as: ABCDABCD before completing.
 *   When all child tweens have completed Tween.onLoop will be dispatched.
 * 
 *   Parameters:
 *  * tween (Phaser.Tween) - Targeted instance for method
 *  * total (number) - How many times this tween and all children should repeat before completing. Set to zero to remove an active repeat. Set to -1 to repeat forever.
 * 
 *   Returns:  Phaser.Tween - This tween. Useful for method chaining.
 */
phzr.tween.repeat_all = (function phzr$tween$repeat_all(tween,total){
return phzr.impl.utils.core.phaser__GT_clj.call(null,tween.repeatAll(phzr.impl.utils.core.clj__GT_phaser.call(null,total)));
});
/**
 * Sets the delay in milliseconds before this tween will repeat itself.
 *   The repeatDelay is invoked as soon as you call `Tween.start`. If the tween is already running this method doesn't do anything for the current active tween.
 *   If you have not yet called `Tween.to` or `Tween.from` at least once then this method will do nothing, as there are no tweens to set repeatDelay on.
 *   If you have child tweens and pass -1 as the index value it sets the repeatDelay across all of them.
 * 
 *   Parameters:
 *  * tween (Phaser.Tween) - Targeted instance for method
 *  * duration (number) - The amount of time in ms that the Tween should wait until it repeats or yoyos once start is called. Set to zero to remove any active repeatDelay.
 *  * index (number) {optional} - If this tween has more than one child this allows you to target a specific child. If set to -1 it will set the repeatDelay on all the children.
 * 
 *   Returns:  Phaser.Tween - This tween. Useful for method chaining.
 */
phzr.tween.repeat_delay = (function phzr$tween$repeat_delay(var_args){
var args31366 = [];
var len__25865__auto___31369 = arguments.length;
var i__25866__auto___31370 = (0);
while(true){
if((i__25866__auto___31370 < len__25865__auto___31369)){
args31366.push((arguments[i__25866__auto___31370]));

var G__31371 = (i__25866__auto___31370 + (1));
i__25866__auto___31370 = G__31371;
continue;
} else {
}
break;
}

var G__31368 = args31366.length;
switch (G__31368) {
case 2:
return phzr.tween.repeat_delay.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.tween.repeat_delay.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31366.length)].join('')));

}
});

phzr.tween.repeat_delay.cljs$core$IFn$_invoke$arity$2 = (function (tween,duration){
return phzr.impl.utils.core.phaser__GT_clj.call(null,tween.repeatDelay(phzr.impl.utils.core.clj__GT_phaser.call(null,duration)));
});

phzr.tween.repeat_delay.cljs$core$IFn$_invoke$arity$3 = (function (tween,duration,index){
return phzr.impl.utils.core.phaser__GT_clj.call(null,tween.repeatDelay(phzr.impl.utils.core.clj__GT_phaser.call(null,duration),phzr.impl.utils.core.clj__GT_phaser.call(null,index)));
});

phzr.tween.repeat_delay.cljs$lang$maxFixedArity = 3;

/**
 * Resumes a paused tween.
 */
phzr.tween.resume = (function phzr$tween$resume(tween){
return phzr.impl.utils.core.phaser__GT_clj.call(null,tween.resume());
});
/**
 * Starts the tween running. Can also be called by the autoStart parameter of `Tween.to` or `Tween.from`.
 *   This sets the `Tween.isRunning` property to `true` and dispatches a `Tween.onStart` signal.
 *   If the Tween has a delay set then nothing will start tweening until the delay has expired.
 * 
 *   Parameters:
 *  * tween (Phaser.Tween) - Targeted instance for method
 *  * index (number) {optional} - If this Tween contains child tweens you can specify which one to start from. The default is zero, i.e. the first tween created.
 * 
 *   Returns:  Phaser.Tween - This tween. Useful for method chaining.
 */
phzr.tween.start = (function phzr$tween$start(var_args){
var args31373 = [];
var len__25865__auto___31376 = arguments.length;
var i__25866__auto___31377 = (0);
while(true){
if((i__25866__auto___31377 < len__25865__auto___31376)){
args31373.push((arguments[i__25866__auto___31377]));

var G__31378 = (i__25866__auto___31377 + (1));
i__25866__auto___31377 = G__31378;
continue;
} else {
}
break;
}

var G__31375 = args31373.length;
switch (G__31375) {
case 1:
return phzr.tween.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.tween.start.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31373.length)].join('')));

}
});

phzr.tween.start.cljs$core$IFn$_invoke$arity$1 = (function (tween){
return phzr.impl.utils.core.phaser__GT_clj.call(null,tween.start());
});

phzr.tween.start.cljs$core$IFn$_invoke$arity$2 = (function (tween,index){
return phzr.impl.utils.core.phaser__GT_clj.call(null,tween.start(phzr.impl.utils.core.clj__GT_phaser.call(null,index)));
});

phzr.tween.start.cljs$lang$maxFixedArity = 2;

/**
 * Stops the tween if running and flags it for deletion from the TweenManager.
 *   If called directly the `Tween.onComplete` signal is not dispatched and no chained tweens are started unless the complete parameter is set to `true`.
 *   If you just wish to pause a tween then use Tween.pause instead.
 * 
 *   Parameters:
 *  * tween (Phaser.Tween) - Targeted instance for method
 *  * complete (boolean) {optional} - Set to `true` to dispatch the Tween.onComplete signal.
 * 
 *   Returns:  Phaser.Tween - This tween. Useful for method chaining.
 */
phzr.tween.stop = (function phzr$tween$stop(var_args){
var args31380 = [];
var len__25865__auto___31383 = arguments.length;
var i__25866__auto___31384 = (0);
while(true){
if((i__25866__auto___31384 < len__25865__auto___31383)){
args31380.push((arguments[i__25866__auto___31384]));

var G__31385 = (i__25866__auto___31384 + (1));
i__25866__auto___31384 = G__31385;
continue;
} else {
}
break;
}

var G__31382 = args31380.length;
switch (G__31382) {
case 1:
return phzr.tween.stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.tween.stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31380.length)].join('')));

}
});

phzr.tween.stop.cljs$core$IFn$_invoke$arity$1 = (function (tween){
return phzr.impl.utils.core.phaser__GT_clj.call(null,tween.stop());
});

phzr.tween.stop.cljs$core$IFn$_invoke$arity$2 = (function (tween,complete){
return phzr.impl.utils.core.phaser__GT_clj.call(null,tween.stop(phzr.impl.utils.core.clj__GT_phaser.call(null,complete)));
});

phzr.tween.stop.cljs$lang$maxFixedArity = 2;

/**
 * Sets this tween to be a `to` tween on the properties given. A `to` tween starts at the current value and tweens to the destination value given.
 *   For example a Sprite with an `x` coordinate of 100 could be tweened to `x` 200 by giving a properties object of `{ x: 200 }`.
 *   The ease function allows you define the rate of change. You can pass either a function such as Phaser.Easing.Circular.Out or a string such as 'Circ'.
 *   '.easeIn', '.easeOut' and 'easeInOut' variants are all supported for all ease types.
 * 
 *   Parameters:
 *  * tween (Phaser.Tween) - Targeted instance for method
 *  * properties (object) - An object containing the properties you want to tween, such as `Sprite.x` or `Sound.volume`. Given as a JavaScript object.
 *  * duration (number) {optional} - Duration of this tween in ms.
 *  * ease (function | string) {optional} - Easing function. If not set it will default to Phaser.Easing.Default, which is Phaser.Easing.Linear.None by default but can be over-ridden.
 *  * auto-start (boolean) {optional} - Set to `true` to allow this tween to start automatically. Otherwise call Tween.start().
 *  * delay (number) {optional} - Delay before this tween will start in milliseconds. Defaults to 0, no delay.
 *  * repeat (number) {optional} - Should the tween automatically restart once complete? If you want it to run forever set as -1. This only effects this induvidual tween, not any chained tweens.
 *  * yoyo (boolean) {optional} - A tween that yoyos will reverse itself and play backwards automatically. A yoyo'd tween doesn't fire the Tween.onComplete event, so listen for Tween.onLoop instead.
 * 
 *   Returns:  Phaser.Tween - This Tween object.
 */
phzr.tween.to = (function phzr$tween$to(var_args){
var args31387 = [];
var len__25865__auto___31390 = arguments.length;
var i__25866__auto___31391 = (0);
while(true){
if((i__25866__auto___31391 < len__25865__auto___31390)){
args31387.push((arguments[i__25866__auto___31391]));

var G__31392 = (i__25866__auto___31391 + (1));
i__25866__auto___31391 = G__31392;
continue;
} else {
}
break;
}

var G__31389 = args31387.length;
switch (G__31389) {
case 2:
return phzr.tween.to.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.tween.to.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.tween.to.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.tween.to.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return phzr.tween.to.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return phzr.tween.to.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 8:
return phzr.tween.to.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31387.length)].join('')));

}
});

phzr.tween.to.cljs$core$IFn$_invoke$arity$2 = (function (tween,properties){
return phzr.impl.utils.core.phaser__GT_clj.call(null,tween.to(phzr.impl.utils.core.clj__GT_phaser.call(null,properties)));
});

phzr.tween.to.cljs$core$IFn$_invoke$arity$3 = (function (tween,properties,duration){
return phzr.impl.utils.core.phaser__GT_clj.call(null,tween.to(phzr.impl.utils.core.clj__GT_phaser.call(null,properties),phzr.impl.utils.core.clj__GT_phaser.call(null,duration)));
});

phzr.tween.to.cljs$core$IFn$_invoke$arity$4 = (function (tween,properties,duration,ease){
return phzr.impl.utils.core.phaser__GT_clj.call(null,tween.to(phzr.impl.utils.core.clj__GT_phaser.call(null,properties),phzr.impl.utils.core.clj__GT_phaser.call(null,duration),phzr.impl.utils.core.clj__GT_phaser.call(null,ease)));
});

phzr.tween.to.cljs$core$IFn$_invoke$arity$5 = (function (tween,properties,duration,ease,auto_start){
return phzr.impl.utils.core.phaser__GT_clj.call(null,tween.to(phzr.impl.utils.core.clj__GT_phaser.call(null,properties),phzr.impl.utils.core.clj__GT_phaser.call(null,duration),phzr.impl.utils.core.clj__GT_phaser.call(null,ease),phzr.impl.utils.core.clj__GT_phaser.call(null,auto_start)));
});

phzr.tween.to.cljs$core$IFn$_invoke$arity$6 = (function (tween,properties,duration,ease,auto_start,delay){
return phzr.impl.utils.core.phaser__GT_clj.call(null,tween.to(phzr.impl.utils.core.clj__GT_phaser.call(null,properties),phzr.impl.utils.core.clj__GT_phaser.call(null,duration),phzr.impl.utils.core.clj__GT_phaser.call(null,ease),phzr.impl.utils.core.clj__GT_phaser.call(null,auto_start),phzr.impl.utils.core.clj__GT_phaser.call(null,delay)));
});

phzr.tween.to.cljs$core$IFn$_invoke$arity$7 = (function (tween,properties,duration,ease,auto_start,delay,repeat){
return phzr.impl.utils.core.phaser__GT_clj.call(null,tween.to(phzr.impl.utils.core.clj__GT_phaser.call(null,properties),phzr.impl.utils.core.clj__GT_phaser.call(null,duration),phzr.impl.utils.core.clj__GT_phaser.call(null,ease),phzr.impl.utils.core.clj__GT_phaser.call(null,auto_start),phzr.impl.utils.core.clj__GT_phaser.call(null,delay),phzr.impl.utils.core.clj__GT_phaser.call(null,repeat)));
});

phzr.tween.to.cljs$core$IFn$_invoke$arity$8 = (function (tween,properties,duration,ease,auto_start,delay,repeat,yoyo){
return phzr.impl.utils.core.phaser__GT_clj.call(null,tween.to(phzr.impl.utils.core.clj__GT_phaser.call(null,properties),phzr.impl.utils.core.clj__GT_phaser.call(null,duration),phzr.impl.utils.core.clj__GT_phaser.call(null,ease),phzr.impl.utils.core.clj__GT_phaser.call(null,auto_start),phzr.impl.utils.core.clj__GT_phaser.call(null,delay),phzr.impl.utils.core.clj__GT_phaser.call(null,repeat),phzr.impl.utils.core.clj__GT_phaser.call(null,yoyo)));
});

phzr.tween.to.cljs$lang$maxFixedArity = 8;

/**
 * Core tween update function called by the TweenManager. Does not need to be invoked directly.
 * 
 *   Parameters:
 *  * tween (Phaser.Tween) - Targeted instance for method
 *  * time (number) - A timestamp passed in by the TweenManager.
 * 
 *   Returns:  boolean - false if the tween and all child tweens have completed and should be deleted from the manager, otherwise true (still active).
 */
phzr.tween.update = (function phzr$tween$update(tween,time){
return phzr.impl.utils.core.phaser__GT_clj.call(null,tween.update(phzr.impl.utils.core.clj__GT_phaser.call(null,time)));
});
/**
 * Updates either a single TweenData or all TweenData objects properties to the given value.
 *   Used internally by methods like Tween.delay, Tween.yoyo, etc. but can also be called directly if you know which property you want to tweak.
 *   The property is not checked, so if you pass an invalid one you'll generate a run-time error.
 * 
 *   Parameters:
 *  * tween (Phaser.Tween) - Targeted instance for method
 *  * property (string) - The property to update.
 *  * value (number | function) - The value to set the property to.
 *  * index (number) {optional} - If this tween has more than one child this allows you to target a specific child. If set to -1 it will set the delay on all the children.
 * 
 *   Returns:  Phaser.Tween - This tween. Useful for method chaining.
 */
phzr.tween.update_tween_data = (function phzr$tween$update_tween_data(var_args){
var args31394 = [];
var len__25865__auto___31397 = arguments.length;
var i__25866__auto___31398 = (0);
while(true){
if((i__25866__auto___31398 < len__25865__auto___31397)){
args31394.push((arguments[i__25866__auto___31398]));

var G__31399 = (i__25866__auto___31398 + (1));
i__25866__auto___31398 = G__31399;
continue;
} else {
}
break;
}

var G__31396 = args31394.length;
switch (G__31396) {
case 3:
return phzr.tween.update_tween_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.tween.update_tween_data.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31394.length)].join('')));

}
});

phzr.tween.update_tween_data.cljs$core$IFn$_invoke$arity$3 = (function (tween,property,value){
return phzr.impl.utils.core.phaser__GT_clj.call(null,tween.updateTweenData(phzr.impl.utils.core.clj__GT_phaser.call(null,property),phzr.impl.utils.core.clj__GT_phaser.call(null,value)));
});

phzr.tween.update_tween_data.cljs$core$IFn$_invoke$arity$4 = (function (tween,property,value,index){
return phzr.impl.utils.core.phaser__GT_clj.call(null,tween.updateTweenData(phzr.impl.utils.core.clj__GT_phaser.call(null,property),phzr.impl.utils.core.clj__GT_phaser.call(null,value),phzr.impl.utils.core.clj__GT_phaser.call(null,index)));
});

phzr.tween.update_tween_data.cljs$lang$maxFixedArity = 4;

/**
 * A Tween that has yoyo set to true will run through from its starting values to its end values and then play back in reverse from end to start.
 *   Used in combination with repeat you can create endless loops.
 *   If you have not yet called `Tween.to` or `Tween.from` at least once then this method will do nothing, as there are no tweens to yoyo.
 *   If you have child tweens and pass -1 as the index value it sets the yoyo property across all of them.
 *   If you wish to yoyo this Tween and all of its children then see Tween.yoyoAll.
 * 
 *   Parameters:
 *  * tween (Phaser.Tween) - Targeted instance for method
 *  * enable (boolean) - Set to true to yoyo this tween, or false to disable an already active yoyo.
 *  * yoyo-delay (number) {optional} - This is the amount of time to pause (in ms) before the yoyo will start.
 *  * index (number) {optional} - If this tween has more than one child this allows you to target a specific child. If set to -1 it will set yoyo on all the children.
 * 
 *   Returns:  Phaser.Tween - This tween. Useful for method chaining.
 */
phzr.tween.yoyo = (function phzr$tween$yoyo(var_args){
var args31401 = [];
var len__25865__auto___31404 = arguments.length;
var i__25866__auto___31405 = (0);
while(true){
if((i__25866__auto___31405 < len__25865__auto___31404)){
args31401.push((arguments[i__25866__auto___31405]));

var G__31406 = (i__25866__auto___31405 + (1));
i__25866__auto___31405 = G__31406;
continue;
} else {
}
break;
}

var G__31403 = args31401.length;
switch (G__31403) {
case 2:
return phzr.tween.yoyo.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.tween.yoyo.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.tween.yoyo.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31401.length)].join('')));

}
});

phzr.tween.yoyo.cljs$core$IFn$_invoke$arity$2 = (function (tween,enable){
return phzr.impl.utils.core.phaser__GT_clj.call(null,tween.yoyo(phzr.impl.utils.core.clj__GT_phaser.call(null,enable)));
});

phzr.tween.yoyo.cljs$core$IFn$_invoke$arity$3 = (function (tween,enable,yoyo_delay){
return phzr.impl.utils.core.phaser__GT_clj.call(null,tween.yoyo(phzr.impl.utils.core.clj__GT_phaser.call(null,enable),phzr.impl.utils.core.clj__GT_phaser.call(null,yoyo_delay)));
});

phzr.tween.yoyo.cljs$core$IFn$_invoke$arity$4 = (function (tween,enable,yoyo_delay,index){
return phzr.impl.utils.core.phaser__GT_clj.call(null,tween.yoyo(phzr.impl.utils.core.clj__GT_phaser.call(null,enable),phzr.impl.utils.core.clj__GT_phaser.call(null,yoyo_delay),phzr.impl.utils.core.clj__GT_phaser.call(null,index)));
});

phzr.tween.yoyo.cljs$lang$maxFixedArity = 4;

/**
 * Sets the delay in milliseconds before this tween will run a yoyo (only applies if yoyo is enabled).
 *   The repeatDelay is invoked as soon as you call `Tween.start`. If the tween is already running this method doesn't do anything for the current active tween.
 *   If you have not yet called `Tween.to` or `Tween.from` at least once then this method will do nothing, as there are no tweens to set repeatDelay on.
 *   If you have child tweens and pass -1 as the index value it sets the repeatDelay across all of them.
 * 
 *   Parameters:
 *  * tween (Phaser.Tween) - Targeted instance for method
 *  * duration (number) - The amount of time in ms that the Tween should wait until it repeats or yoyos once start is called. Set to zero to remove any active yoyoDelay.
 *  * index (number) {optional} - If this tween has more than one child this allows you to target a specific child. If set to -1 it will set the yoyoDelay on all the children.
 * 
 *   Returns:  Phaser.Tween - This tween. Useful for method chaining.
 */
phzr.tween.yoyo_delay = (function phzr$tween$yoyo_delay(var_args){
var args31408 = [];
var len__25865__auto___31411 = arguments.length;
var i__25866__auto___31412 = (0);
while(true){
if((i__25866__auto___31412 < len__25865__auto___31411)){
args31408.push((arguments[i__25866__auto___31412]));

var G__31413 = (i__25866__auto___31412 + (1));
i__25866__auto___31412 = G__31413;
continue;
} else {
}
break;
}

var G__31410 = args31408.length;
switch (G__31410) {
case 2:
return phzr.tween.yoyo_delay.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.tween.yoyo_delay.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31408.length)].join('')));

}
});

phzr.tween.yoyo_delay.cljs$core$IFn$_invoke$arity$2 = (function (tween,duration){
return phzr.impl.utils.core.phaser__GT_clj.call(null,tween.yoyoDelay(phzr.impl.utils.core.clj__GT_phaser.call(null,duration)));
});

phzr.tween.yoyo_delay.cljs$core$IFn$_invoke$arity$3 = (function (tween,duration,index){
return phzr.impl.utils.core.phaser__GT_clj.call(null,tween.yoyoDelay(phzr.impl.utils.core.clj__GT_phaser.call(null,duration),phzr.impl.utils.core.clj__GT_phaser.call(null,index)));
});

phzr.tween.yoyo_delay.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=tween.js.map?rel=1485300084712