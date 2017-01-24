// Compiled by ClojureScript 1.9.229 {}
goog.provide('phzr.point');
goog.require('cljs.core');
goog.require('phzr.impl.utils.core');
goog.require('phzr.impl.extend');
goog.require('cljsjs.phaser');
/**
 * A Point object represents a location in a two-dimensional coordinate system, where x represents the horizontal axis and y represents the vertical axis.
 *   The following code creates a point at (0,0):
 *   `var myPoint = new Phaser.Point();`
 *   You can also use them as 2D Vectors and you'll find different vector related methods in this class.
 * 
 *   Parameters:
 *  * x (number) {optional} - The horizontal position of this Point.
 *  * y (number) {optional} - The vertical position of this Point.
 */
phzr.point.__GT_Point = (function phzr$point$__GT_Point(var_args){
var args31417 = [];
var len__25865__auto___31420 = arguments.length;
var i__25866__auto___31421 = (0);
while(true){
if((i__25866__auto___31421 < len__25865__auto___31420)){
args31417.push((arguments[i__25866__auto___31421]));

var G__31422 = (i__25866__auto___31421 + (1));
i__25866__auto___31421 = G__31422;
continue;
} else {
}
break;
}

var G__31419 = args31417.length;
switch (G__31419) {
case 0:
return phzr.point.__GT_Point.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return phzr.point.__GT_Point.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.point.__GT_Point.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31417.length)].join('')));

}
});

phzr.point.__GT_Point.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new Phaser.Point());
});

phzr.point.__GT_Point.cljs$core$IFn$_invoke$arity$1 = (function (x){
return (new Phaser.Point(phzr.impl.utils.core.clj__GT_phaser.call(null,x)));
});

phzr.point.__GT_Point.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (new Phaser.Point(phzr.impl.utils.core.clj__GT_phaser.call(null,x),phzr.impl.utils.core.clj__GT_phaser.call(null,y)));
});

phzr.point.__GT_Point.cljs$lang$maxFixedArity = 2;

/**
 * Adds the given x and y values to this Point.
 * 
 *   Parameters:
 *  * point (Phaser.Point) - Targeted instance for method
 *  * x (number) - The value to add to Point.x.
 *  * y (number) - The value to add to Point.y.
 * 
 *   Returns:  Phaser.Point - This Point object. Useful for chaining method calls.
 */
phzr.point.add = (function phzr$point$add(point,x,y){
return phzr.impl.utils.core.phaser__GT_clj.call(null,point.add(phzr.impl.utils.core.clj__GT_phaser.call(null,x),phzr.impl.utils.core.clj__GT_phaser.call(null,y)));
});
/**
 * Adds the coordinates of two points together to create a new point.
 * 
 *   Parameters:
 *  * a (Phaser.Point) - The first Point object.
 *  * b (Phaser.Point) - The second Point object.
 *  * out (Phaser.Point) {optional} - Optional Point to store the value in, if not supplied a new Point object will be created.
 * 
 *   Returns:  Phaser.Point - The new Point object.
 */
phzr.point.add_ = (function phzr$point$add_(var_args){
var args31424 = [];
var len__25865__auto___31427 = arguments.length;
var i__25866__auto___31428 = (0);
while(true){
if((i__25866__auto___31428 < len__25865__auto___31427)){
args31424.push((arguments[i__25866__auto___31428]));

var G__31429 = (i__25866__auto___31428 + (1));
i__25866__auto___31428 = G__31429;
continue;
} else {
}
break;
}

var G__31426 = args31424.length;
switch (G__31426) {
case 2:
return phzr.point.add_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.point.add_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31424.length)].join('')));

}
});

phzr.point.add_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return phzr.impl.utils.core.phaser__GT_clj.call(null,Phaser.Point.add(phzr.impl.utils.core.clj__GT_phaser.call(null,a),phzr.impl.utils.core.clj__GT_phaser.call(null,b)));
});

phzr.point.add_.cljs$core$IFn$_invoke$arity$3 = (function (a,b,out){
return phzr.impl.utils.core.phaser__GT_clj.call(null,Phaser.Point.add(phzr.impl.utils.core.clj__GT_phaser.call(null,a),phzr.impl.utils.core.clj__GT_phaser.call(null,b),phzr.impl.utils.core.clj__GT_phaser.call(null,out)));
});

phzr.point.add_.cljs$lang$maxFixedArity = 3;

/**
 * Returns the angle between this Point object and another object with public x and y properties.
 * 
 *   Parameters:
 *  * point (Phaser.Point) - Targeted instance for method
 *  * a (Phaser.Point | any) - The object to get the angle from this Point to.
 *  * as-degrees (boolean) {optional} - Is the given angle in radians (false) or degrees (true)?
 * 
 *   Returns:  number - The angle between the two objects.
 */
phzr.point.angle = (function phzr$point$angle(var_args){
var args31431 = [];
var len__25865__auto___31434 = arguments.length;
var i__25866__auto___31435 = (0);
while(true){
if((i__25866__auto___31435 < len__25865__auto___31434)){
args31431.push((arguments[i__25866__auto___31435]));

var G__31436 = (i__25866__auto___31435 + (1));
i__25866__auto___31435 = G__31436;
continue;
} else {
}
break;
}

var G__31433 = args31431.length;
switch (G__31433) {
case 2:
return phzr.point.angle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.point.angle.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31431.length)].join('')));

}
});

phzr.point.angle.cljs$core$IFn$_invoke$arity$2 = (function (point,a){
return phzr.impl.utils.core.phaser__GT_clj.call(null,point.angle(phzr.impl.utils.core.clj__GT_phaser.call(null,a)));
});

phzr.point.angle.cljs$core$IFn$_invoke$arity$3 = (function (point,a,as_degrees){
return phzr.impl.utils.core.phaser__GT_clj.call(null,point.angle(phzr.impl.utils.core.clj__GT_phaser.call(null,a),phzr.impl.utils.core.clj__GT_phaser.call(null,as_degrees)));
});

phzr.point.angle.cljs$lang$maxFixedArity = 3;

/**
 * Returns the angle between two Point objects.
 * 
 *   Parameters:
 *  * a (Phaser.Point) - The first Point object.
 *  * b (Phaser.Point) - The second Point object.
 * 
 *   Returns:  number - The angle between the two Points.
 */
phzr.point.angle_ = (function phzr$point$angle_(a,b){
return phzr.impl.utils.core.phaser__GT_clj.call(null,Phaser.Point.angle(phzr.impl.utils.core.clj__GT_phaser.call(null,a),phzr.impl.utils.core.clj__GT_phaser.call(null,b)));
});
/**
 * Math.ceil() both the x and y properties of this Point.
 * 
 *   Returns:  Phaser.Point - This Point object.
 */
phzr.point.ceil = (function phzr$point$ceil(point){
return phzr.impl.utils.core.phaser__GT_clj.call(null,point.ceil());
});
/**
 * Calculates centroid (or midpoint) from an array of points. If only one point is provided, that point is returned.
 * 
 *   Parameters:
 *  * points (Array.<Phaser.Point>) - The array of one or more points.
 *  * out (Phaser.Point) {optional} - Optional Point to store the value in, if not supplied a new Point object will be created.
 * 
 *   Returns:  Phaser.Point - The new Point object.
 */
phzr.point.centroid_ = (function phzr$point$centroid_(var_args){
var args31438 = [];
var len__25865__auto___31441 = arguments.length;
var i__25866__auto___31442 = (0);
while(true){
if((i__25866__auto___31442 < len__25865__auto___31441)){
args31438.push((arguments[i__25866__auto___31442]));

var G__31443 = (i__25866__auto___31442 + (1));
i__25866__auto___31442 = G__31443;
continue;
} else {
}
break;
}

var G__31440 = args31438.length;
switch (G__31440) {
case 1:
return phzr.point.centroid_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.point.centroid_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31438.length)].join('')));

}
});

phzr.point.centroid_.cljs$core$IFn$_invoke$arity$1 = (function (points){
return phzr.impl.utils.core.phaser__GT_clj.call(null,Phaser.Point.centroid(phzr.impl.utils.core.clj__GT_phaser.call(null,points)));
});

phzr.point.centroid_.cljs$core$IFn$_invoke$arity$2 = (function (points,out){
return phzr.impl.utils.core.phaser__GT_clj.call(null,Phaser.Point.centroid(phzr.impl.utils.core.clj__GT_phaser.call(null,points),phzr.impl.utils.core.clj__GT_phaser.call(null,out)));
});

phzr.point.centroid_.cljs$lang$maxFixedArity = 2;

/**
 * Clamps this Point object values to be between the given min and max.
 * 
 *   Parameters:
 *  * point (Phaser.Point) - Targeted instance for method
 *  * min (number) - The minimum value to clamp this Point to.
 *  * max (number) - The maximum value to clamp this Point to.
 * 
 *   Returns:  Phaser.Point - This Point object.
 */
phzr.point.clamp = (function phzr$point$clamp(point,min,max){
return phzr.impl.utils.core.phaser__GT_clj.call(null,point.clamp(phzr.impl.utils.core.clj__GT_phaser.call(null,min),phzr.impl.utils.core.clj__GT_phaser.call(null,max)));
});
/**
 * Clamps the x value of this Point to be between the given min and max.
 * 
 *   Parameters:
 *  * point (Phaser.Point) - Targeted instance for method
 *  * min (number) - The minimum value to clamp this Point to.
 *  * max (number) - The maximum value to clamp this Point to.
 * 
 *   Returns:  Phaser.Point - This Point object.
 */
phzr.point.clamp_x = (function phzr$point$clamp_x(point,min,max){
return phzr.impl.utils.core.phaser__GT_clj.call(null,point.clampX(phzr.impl.utils.core.clj__GT_phaser.call(null,min),phzr.impl.utils.core.clj__GT_phaser.call(null,max)));
});
/**
 * Clamps the y value of this Point to be between the given min and max
 * 
 *   Parameters:
 *  * point (Phaser.Point) - Targeted instance for method
 *  * min (number) - The minimum value to clamp this Point to.
 *  * max (number) - The maximum value to clamp this Point to.
 * 
 *   Returns:  Phaser.Point - This Point object.
 */
phzr.point.clamp_y = (function phzr$point$clamp_y(point,min,max){
return phzr.impl.utils.core.phaser__GT_clj.call(null,point.clampY(phzr.impl.utils.core.clj__GT_phaser.call(null,min),phzr.impl.utils.core.clj__GT_phaser.call(null,max)));
});
/**
 * Creates a copy of the given Point.
 * 
 *   Parameters:
 *  * point (Phaser.Point) - Targeted instance for method
 *  * output (Phaser.Point) {optional} - Optional Point object. If given the values will be set into this object, otherwise a brand new Point object will be created and returned.
 * 
 *   Returns:  Phaser.Point - The new Point object.
 */
phzr.point.clone = (function phzr$point$clone(var_args){
var args31445 = [];
var len__25865__auto___31448 = arguments.length;
var i__25866__auto___31449 = (0);
while(true){
if((i__25866__auto___31449 < len__25865__auto___31448)){
args31445.push((arguments[i__25866__auto___31449]));

var G__31450 = (i__25866__auto___31449 + (1));
i__25866__auto___31449 = G__31450;
continue;
} else {
}
break;
}

var G__31447 = args31445.length;
switch (G__31447) {
case 1:
return phzr.point.clone.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.point.clone.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31445.length)].join('')));

}
});

phzr.point.clone.cljs$core$IFn$_invoke$arity$1 = (function (point){
return phzr.impl.utils.core.phaser__GT_clj.call(null,point.clone());
});

phzr.point.clone.cljs$core$IFn$_invoke$arity$2 = (function (point,output){
return phzr.impl.utils.core.phaser__GT_clj.call(null,point.clone(phzr.impl.utils.core.clj__GT_phaser.call(null,output)));
});

phzr.point.clone.cljs$lang$maxFixedArity = 2;

/**
 * Copies the x and y properties from any given object to this Point.
 * 
 *   Parameters:
 *  * point (Phaser.Point) - Targeted instance for method
 *  * source (any) - The object to copy from.
 * 
 *   Returns:  Phaser.Point - This Point object.
 */
phzr.point.copy_from = (function phzr$point$copy_from(point,source){
return phzr.impl.utils.core.phaser__GT_clj.call(null,point.copyFrom(phzr.impl.utils.core.clj__GT_phaser.call(null,source)));
});
/**
 * Copies the x and y properties from this Point to any given object.
 * 
 *   Parameters:
 *  * point (Phaser.Point) - Targeted instance for method
 *  * dest (any) - The object to copy to.
 * 
 *   Returns:  object - The dest object.
 */
phzr.point.copy_to = (function phzr$point$copy_to(point,dest){
return phzr.impl.utils.core.phaser__GT_clj.call(null,point.copyTo(phzr.impl.utils.core.clj__GT_phaser.call(null,dest)));
});
/**
 * The cross product of this and another Point object.
 * 
 *   Parameters:
 *  * point (Phaser.Point) - Targeted instance for method
 *  * a (Phaser.Point) - The Point object to get the cross product combined with this Point.
 * 
 *   Returns:  number - The result.
 */
phzr.point.cross = (function phzr$point$cross(point,a){
return phzr.impl.utils.core.phaser__GT_clj.call(null,point.cross(phzr.impl.utils.core.clj__GT_phaser.call(null,a)));
});
/**
 * Returns the distance of this Point object to the given object (can be a Circle, Point or anything with x/y properties)
 * 
 *   Parameters:
 *  * point (Phaser.Point) - Targeted instance for method
 *  * dest (object) - The target object. Must have visible x and y properties that represent the center of the object.
 *  * round (boolean) {optional} - Round the distance to the nearest integer (default false).
 * 
 *   Returns:  number - The distance between this Point object and the destination Point object.
 */
phzr.point.distance = (function phzr$point$distance(var_args){
var args31452 = [];
var len__25865__auto___31455 = arguments.length;
var i__25866__auto___31456 = (0);
while(true){
if((i__25866__auto___31456 < len__25865__auto___31455)){
args31452.push((arguments[i__25866__auto___31456]));

var G__31457 = (i__25866__auto___31456 + (1));
i__25866__auto___31456 = G__31457;
continue;
} else {
}
break;
}

var G__31454 = args31452.length;
switch (G__31454) {
case 2:
return phzr.point.distance.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.point.distance.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31452.length)].join('')));

}
});

phzr.point.distance.cljs$core$IFn$_invoke$arity$2 = (function (point,dest){
return phzr.impl.utils.core.phaser__GT_clj.call(null,point.distance(phzr.impl.utils.core.clj__GT_phaser.call(null,dest)));
});

phzr.point.distance.cljs$core$IFn$_invoke$arity$3 = (function (point,dest,round){
return phzr.impl.utils.core.phaser__GT_clj.call(null,point.distance(phzr.impl.utils.core.clj__GT_phaser.call(null,dest),phzr.impl.utils.core.clj__GT_phaser.call(null,round)));
});

phzr.point.distance.cljs$lang$maxFixedArity = 3;

/**
 * Returns the euclidian distance of this Point object to the given object (can be a Circle, Point or anything with x/y properties).
 * 
 *   Parameters:
 *  * a (object) - The target object. Must have visible x and y properties that represent the center of the object.
 *  * b (object) - The target object. Must have visible x and y properties that represent the center of the object.
 *  * round (boolean) {optional} - Round the distance to the nearest integer.
 * 
 *   Returns:  number - The distance between this Point object and the destination Point object.
 */
phzr.point.distance_ = (function phzr$point$distance_(var_args){
var args31459 = [];
var len__25865__auto___31462 = arguments.length;
var i__25866__auto___31463 = (0);
while(true){
if((i__25866__auto___31463 < len__25865__auto___31462)){
args31459.push((arguments[i__25866__auto___31463]));

var G__31464 = (i__25866__auto___31463 + (1));
i__25866__auto___31463 = G__31464;
continue;
} else {
}
break;
}

var G__31461 = args31459.length;
switch (G__31461) {
case 2:
return phzr.point.distance_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.point.distance_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31459.length)].join('')));

}
});

phzr.point.distance_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return phzr.impl.utils.core.phaser__GT_clj.call(null,Phaser.Point.distance(phzr.impl.utils.core.clj__GT_phaser.call(null,a),phzr.impl.utils.core.clj__GT_phaser.call(null,b)));
});

phzr.point.distance_.cljs$core$IFn$_invoke$arity$3 = (function (a,b,round){
return phzr.impl.utils.core.phaser__GT_clj.call(null,Phaser.Point.distance(phzr.impl.utils.core.clj__GT_phaser.call(null,a),phzr.impl.utils.core.clj__GT_phaser.call(null,b),phzr.impl.utils.core.clj__GT_phaser.call(null,round)));
});

phzr.point.distance_.cljs$lang$maxFixedArity = 3;

/**
 * Divides Point.x and Point.y by the given x and y values.
 * 
 *   Parameters:
 *  * point (Phaser.Point) - Targeted instance for method
 *  * x (number) - The value to divide Point.x by.
 *  * y (number) - The value to divide Point.x by.
 * 
 *   Returns:  Phaser.Point - This Point object. Useful for chaining method calls.
 */
phzr.point.divide = (function phzr$point$divide(point,x,y){
return phzr.impl.utils.core.phaser__GT_clj.call(null,point.divide(phzr.impl.utils.core.clj__GT_phaser.call(null,x),phzr.impl.utils.core.clj__GT_phaser.call(null,y)));
});
/**
 * Divides the coordinates of two points to create a new point.
 * 
 *   Parameters:
 *  * a (Phaser.Point) - The first Point object.
 *  * b (Phaser.Point) - The second Point object.
 *  * out (Phaser.Point) {optional} - Optional Point to store the value in, if not supplied a new Point object will be created.
 * 
 *   Returns:  Phaser.Point - The new Point object.
 */
phzr.point.divide_ = (function phzr$point$divide_(var_args){
var args31466 = [];
var len__25865__auto___31469 = arguments.length;
var i__25866__auto___31470 = (0);
while(true){
if((i__25866__auto___31470 < len__25865__auto___31469)){
args31466.push((arguments[i__25866__auto___31470]));

var G__31471 = (i__25866__auto___31470 + (1));
i__25866__auto___31470 = G__31471;
continue;
} else {
}
break;
}

var G__31468 = args31466.length;
switch (G__31468) {
case 2:
return phzr.point.divide_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.point.divide_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31466.length)].join('')));

}
});

phzr.point.divide_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return phzr.impl.utils.core.phaser__GT_clj.call(null,Phaser.Point.divide(phzr.impl.utils.core.clj__GT_phaser.call(null,a),phzr.impl.utils.core.clj__GT_phaser.call(null,b)));
});

phzr.point.divide_.cljs$core$IFn$_invoke$arity$3 = (function (a,b,out){
return phzr.impl.utils.core.phaser__GT_clj.call(null,Phaser.Point.divide(phzr.impl.utils.core.clj__GT_phaser.call(null,a),phzr.impl.utils.core.clj__GT_phaser.call(null,b),phzr.impl.utils.core.clj__GT_phaser.call(null,out)));
});

phzr.point.divide_.cljs$lang$maxFixedArity = 3;

/**
 * The dot product of this and another Point object.
 * 
 *   Parameters:
 *  * point (Phaser.Point) - Targeted instance for method
 *  * a (Phaser.Point) - The Point object to get the dot product combined with this Point.
 * 
 *   Returns:  number - The result.
 */
phzr.point.dot = (function phzr$point$dot(point,a){
return phzr.impl.utils.core.phaser__GT_clj.call(null,point.dot(phzr.impl.utils.core.clj__GT_phaser.call(null,a)));
});
/**
 * Determines whether the given objects x/y values are equal to this Point object.
 * 
 *   Parameters:
 *  * point (Phaser.Point) - Targeted instance for method
 *  * a (Phaser.Point | any) - The object to compare with this Point.
 * 
 *   Returns:  boolean - A value of true if the x and y points are equal, otherwise false.
 */
phzr.point.equals = (function phzr$point$equals(point,a){
return phzr.impl.utils.core.phaser__GT_clj.call(null,point.equals(phzr.impl.utils.core.clj__GT_phaser.call(null,a)));
});
/**
 * Determines whether the two given Point objects are equal. They are considered equal if they have the same x and y values.
 * 
 *   Parameters:
 *  * a (Phaser.Point) - The first Point object.
 *  * b (Phaser.Point) - The second Point object.
 * 
 *   Returns:  boolean - A value of true if the Points are equal, otherwise false.
 */
phzr.point.equals_ = (function phzr$point$equals_(a,b){
return phzr.impl.utils.core.phaser__GT_clj.call(null,Phaser.Point.equals(phzr.impl.utils.core.clj__GT_phaser.call(null,a),phzr.impl.utils.core.clj__GT_phaser.call(null,b)));
});
/**
 * Math.floor() both the x and y properties of this Point.
 * 
 *   Returns:  Phaser.Point - This Point object.
 */
phzr.point.floor = (function phzr$point$floor(point){
return phzr.impl.utils.core.phaser__GT_clj.call(null,point.floor());
});
/**
 * Calculates the length of the Point object.
 * 
 *   Returns:  number - The length of the Point.
 */
phzr.point.get_magnitude = (function phzr$point$get_magnitude(point){
return phzr.impl.utils.core.phaser__GT_clj.call(null,point.getMagnitude());
});
/**
 * Calculates the length squared of the Point object.
 * 
 *   Returns:  number - The length ^ 2 of the Point.
 */
phzr.point.get_magnitude_sq = (function phzr$point$get_magnitude_sq(point){
return phzr.impl.utils.core.phaser__GT_clj.call(null,point.getMagnitudeSq());
});
/**
 * Interpolates the two given Points, based on the `f` value (between 0 and 1) and returns a new Point.
 * 
 *   Parameters:
 *  * a (Phaser.Point) - The first Point object.
 *  * b (Phaser.Point) - The second Point object.
 *  * f (number) - The level of interpolation between the two points. Indicates where the new point will be, along the line between pt1 and pt2. If f=1, pt1 is returned; if f=0, pt2 is returned.
 *  * out (Phaser.Point) {optional} - Optional Point to store the value in, if not supplied a new Point object will be created.
 * 
 *   Returns:  Phaser.Point - The new Point object.
 */
phzr.point.interpolate_ = (function phzr$point$interpolate_(var_args){
var args31473 = [];
var len__25865__auto___31476 = arguments.length;
var i__25866__auto___31477 = (0);
while(true){
if((i__25866__auto___31477 < len__25865__auto___31476)){
args31473.push((arguments[i__25866__auto___31477]));

var G__31478 = (i__25866__auto___31477 + (1));
i__25866__auto___31477 = G__31478;
continue;
} else {
}
break;
}

var G__31475 = args31473.length;
switch (G__31475) {
case 3:
return phzr.point.interpolate_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.point.interpolate_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31473.length)].join('')));

}
});

phzr.point.interpolate_.cljs$core$IFn$_invoke$arity$3 = (function (a,b,f){
return phzr.impl.utils.core.phaser__GT_clj.call(null,Phaser.Point.interpolate(phzr.impl.utils.core.clj__GT_phaser.call(null,a),phzr.impl.utils.core.clj__GT_phaser.call(null,b),phzr.impl.utils.core.clj__GT_phaser.call(null,f)));
});

phzr.point.interpolate_.cljs$core$IFn$_invoke$arity$4 = (function (a,b,f,out){
return phzr.impl.utils.core.phaser__GT_clj.call(null,Phaser.Point.interpolate(phzr.impl.utils.core.clj__GT_phaser.call(null,a),phzr.impl.utils.core.clj__GT_phaser.call(null,b),phzr.impl.utils.core.clj__GT_phaser.call(null,f),phzr.impl.utils.core.clj__GT_phaser.call(null,out)));
});

phzr.point.interpolate_.cljs$lang$maxFixedArity = 4;

/**
 * Inverts the x and y values of this Point
 * 
 *   Returns:  Phaser.Point - This Point object.
 */
phzr.point.invert = (function phzr$point$invert(point){
return phzr.impl.utils.core.phaser__GT_clj.call(null,point.invert());
});
/**
 * Determine if this point is at 0,0.
 * 
 *   Returns:  boolean - True if this Point is 0,0, otherwise false.
 */
phzr.point.is_zero = (function phzr$point$is_zero(point){
return phzr.impl.utils.core.phaser__GT_clj.call(null,point.isZero());
});
/**
 * Multiplies Point.x and Point.y by the given x and y values. Sometimes known as `Scale`.
 * 
 *   Parameters:
 *  * point (Phaser.Point) - Targeted instance for method
 *  * x (number) - The value to multiply Point.x by.
 *  * y (number) - The value to multiply Point.x by.
 * 
 *   Returns:  Phaser.Point - This Point object. Useful for chaining method calls.
 */
phzr.point.multiply = (function phzr$point$multiply(point,x,y){
return phzr.impl.utils.core.phaser__GT_clj.call(null,point.multiply(phzr.impl.utils.core.clj__GT_phaser.call(null,x),phzr.impl.utils.core.clj__GT_phaser.call(null,y)));
});
/**
 * Multiplies the coordinates of two points to create a new point.
 * 
 *   Parameters:
 *  * a (Phaser.Point) - The first Point object.
 *  * b (Phaser.Point) - The second Point object.
 *  * out (Phaser.Point) {optional} - Optional Point to store the value in, if not supplied a new Point object will be created.
 * 
 *   Returns:  Phaser.Point - The new Point object.
 */
phzr.point.multiply_ = (function phzr$point$multiply_(var_args){
var args31480 = [];
var len__25865__auto___31483 = arguments.length;
var i__25866__auto___31484 = (0);
while(true){
if((i__25866__auto___31484 < len__25865__auto___31483)){
args31480.push((arguments[i__25866__auto___31484]));

var G__31485 = (i__25866__auto___31484 + (1));
i__25866__auto___31484 = G__31485;
continue;
} else {
}
break;
}

var G__31482 = args31480.length;
switch (G__31482) {
case 2:
return phzr.point.multiply_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.point.multiply_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31480.length)].join('')));

}
});

phzr.point.multiply_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return phzr.impl.utils.core.phaser__GT_clj.call(null,Phaser.Point.multiply(phzr.impl.utils.core.clj__GT_phaser.call(null,a),phzr.impl.utils.core.clj__GT_phaser.call(null,b)));
});

phzr.point.multiply_.cljs$core$IFn$_invoke$arity$3 = (function (a,b,out){
return phzr.impl.utils.core.phaser__GT_clj.call(null,Phaser.Point.multiply(phzr.impl.utils.core.clj__GT_phaser.call(null,a),phzr.impl.utils.core.clj__GT_phaser.call(null,b),phzr.impl.utils.core.clj__GT_phaser.call(null,out)));
});

phzr.point.multiply_.cljs$lang$maxFixedArity = 3;

/**
 * Adds two 2D Points together and multiplies the result by the given scalar.
 * 
 *   Parameters:
 *  * a (Phaser.Point) - The first Point object.
 *  * b (Phaser.Point) - The second Point object.
 *  * s (number) - The scaling value.
 *  * out (Phaser.Point) {optional} - Optional Point to store the value in, if not supplied a new Point object will be created.
 * 
 *   Returns:  Phaser.Point - The new Point object.
 */
phzr.point.multiply_add_ = (function phzr$point$multiply_add_(var_args){
var args31487 = [];
var len__25865__auto___31490 = arguments.length;
var i__25866__auto___31491 = (0);
while(true){
if((i__25866__auto___31491 < len__25865__auto___31490)){
args31487.push((arguments[i__25866__auto___31491]));

var G__31492 = (i__25866__auto___31491 + (1));
i__25866__auto___31491 = G__31492;
continue;
} else {
}
break;
}

var G__31489 = args31487.length;
switch (G__31489) {
case 3:
return phzr.point.multiply_add_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.point.multiply_add_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31487.length)].join('')));

}
});

phzr.point.multiply_add_.cljs$core$IFn$_invoke$arity$3 = (function (a,b,s){
return phzr.impl.utils.core.phaser__GT_clj.call(null,Phaser.Point.multiplyAdd(phzr.impl.utils.core.clj__GT_phaser.call(null,a),phzr.impl.utils.core.clj__GT_phaser.call(null,b),phzr.impl.utils.core.clj__GT_phaser.call(null,s)));
});

phzr.point.multiply_add_.cljs$core$IFn$_invoke$arity$4 = (function (a,b,s,out){
return phzr.impl.utils.core.phaser__GT_clj.call(null,Phaser.Point.multiplyAdd(phzr.impl.utils.core.clj__GT_phaser.call(null,a),phzr.impl.utils.core.clj__GT_phaser.call(null,b),phzr.impl.utils.core.clj__GT_phaser.call(null,s),phzr.impl.utils.core.clj__GT_phaser.call(null,out)));
});

phzr.point.multiply_add_.cljs$lang$maxFixedArity = 4;

/**
 * Creates a negative Point.
 * 
 *   Parameters:
 *  * a (Phaser.Point) - The first Point object.
 *  * out (Phaser.Point) {optional} - Optional Point to store the value in, if not supplied a new Point object will be created.
 * 
 *   Returns:  Phaser.Point - The new Point object.
 */
phzr.point.negative_ = (function phzr$point$negative_(var_args){
var args31494 = [];
var len__25865__auto___31497 = arguments.length;
var i__25866__auto___31498 = (0);
while(true){
if((i__25866__auto___31498 < len__25865__auto___31497)){
args31494.push((arguments[i__25866__auto___31498]));

var G__31499 = (i__25866__auto___31498 + (1));
i__25866__auto___31498 = G__31499;
continue;
} else {
}
break;
}

var G__31496 = args31494.length;
switch (G__31496) {
case 1:
return phzr.point.negative_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.point.negative_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31494.length)].join('')));

}
});

phzr.point.negative_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return phzr.impl.utils.core.phaser__GT_clj.call(null,Phaser.Point.negative(phzr.impl.utils.core.clj__GT_phaser.call(null,a)));
});

phzr.point.negative_.cljs$core$IFn$_invoke$arity$2 = (function (a,out){
return phzr.impl.utils.core.phaser__GT_clj.call(null,Phaser.Point.negative(phzr.impl.utils.core.clj__GT_phaser.call(null,a),phzr.impl.utils.core.clj__GT_phaser.call(null,out)));
});

phzr.point.negative_.cljs$lang$maxFixedArity = 2;

/**
 * Right-hand normalize (make unit length) this Point.
 * 
 *   Returns:  Phaser.Point - This Point object.
 */
phzr.point.normal_right_hand = (function phzr$point$normal_right_hand(point){
return phzr.impl.utils.core.phaser__GT_clj.call(null,point.normalRightHand());
});
/**
 * Right-hand normalize (make unit length) a Point.
 * 
 *   Parameters:
 *  * a (Phaser.Point) - The Point object.
 *  * out (Phaser.Point) {optional} - Optional Point to store the value in, if not supplied a new Point object will be created.
 * 
 *   Returns:  Phaser.Point - The new Point object.
 */
phzr.point.normal_right_hand_ = (function phzr$point$normal_right_hand_(var_args){
var args31501 = [];
var len__25865__auto___31504 = arguments.length;
var i__25866__auto___31505 = (0);
while(true){
if((i__25866__auto___31505 < len__25865__auto___31504)){
args31501.push((arguments[i__25866__auto___31505]));

var G__31506 = (i__25866__auto___31505 + (1));
i__25866__auto___31505 = G__31506;
continue;
} else {
}
break;
}

var G__31503 = args31501.length;
switch (G__31503) {
case 1:
return phzr.point.normal_right_hand_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.point.normal_right_hand_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31501.length)].join('')));

}
});

phzr.point.normal_right_hand_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return phzr.impl.utils.core.phaser__GT_clj.call(null,Phaser.Point.normalRightHand(phzr.impl.utils.core.clj__GT_phaser.call(null,a)));
});

phzr.point.normal_right_hand_.cljs$core$IFn$_invoke$arity$2 = (function (a,out){
return phzr.impl.utils.core.phaser__GT_clj.call(null,Phaser.Point.normalRightHand(phzr.impl.utils.core.clj__GT_phaser.call(null,a),phzr.impl.utils.core.clj__GT_phaser.call(null,out)));
});

phzr.point.normal_right_hand_.cljs$lang$maxFixedArity = 2;

/**
 * Alters the Point object so that its length is 1, but it retains the same direction.
 * 
 *   Returns:  Phaser.Point - This Point object.
 */
phzr.point.normalize = (function phzr$point$normalize(point){
return phzr.impl.utils.core.phaser__GT_clj.call(null,point.normalize());
});
/**
 * Normalize (make unit length) a Point.
 * 
 *   Parameters:
 *  * a (Phaser.Point) - The Point object.
 *  * out (Phaser.Point) {optional} - Optional Point to store the value in, if not supplied a new Point object will be created.
 * 
 *   Returns:  Phaser.Point - The new Point object.
 */
phzr.point.normalize_ = (function phzr$point$normalize_(var_args){
var args31508 = [];
var len__25865__auto___31511 = arguments.length;
var i__25866__auto___31512 = (0);
while(true){
if((i__25866__auto___31512 < len__25865__auto___31511)){
args31508.push((arguments[i__25866__auto___31512]));

var G__31513 = (i__25866__auto___31512 + (1));
i__25866__auto___31512 = G__31513;
continue;
} else {
}
break;
}

var G__31510 = args31508.length;
switch (G__31510) {
case 1:
return phzr.point.normalize_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.point.normalize_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31508.length)].join('')));

}
});

phzr.point.normalize_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return phzr.impl.utils.core.phaser__GT_clj.call(null,Phaser.Point.normalize(phzr.impl.utils.core.clj__GT_phaser.call(null,a)));
});

phzr.point.normalize_.cljs$core$IFn$_invoke$arity$2 = (function (a,out){
return phzr.impl.utils.core.phaser__GT_clj.call(null,Phaser.Point.normalize(phzr.impl.utils.core.clj__GT_phaser.call(null,a),phzr.impl.utils.core.clj__GT_phaser.call(null,out)));
});

phzr.point.normalize_.cljs$lang$maxFixedArity = 2;

/**
 * Parses an object for x and/or y properties and returns a new Phaser.Point with matching values.
 *   If the object doesn't contain those properties a Point with x/y of zero will be returned.
 * 
 *   Parameters:
 *  * obj (object) - The object to parse.
 *  * x-prop (string) {optional} - The property used to set the Point.x value.
 *  * y-prop (string) {optional} - The property used to set the Point.y value.
 * 
 *   Returns:  Phaser.Point - The new Point object.
 */
phzr.point.parse_ = (function phzr$point$parse_(var_args){
var args31515 = [];
var len__25865__auto___31518 = arguments.length;
var i__25866__auto___31519 = (0);
while(true){
if((i__25866__auto___31519 < len__25865__auto___31518)){
args31515.push((arguments[i__25866__auto___31519]));

var G__31520 = (i__25866__auto___31519 + (1));
i__25866__auto___31519 = G__31520;
continue;
} else {
}
break;
}

var G__31517 = args31515.length;
switch (G__31517) {
case 1:
return phzr.point.parse_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.point.parse_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.point.parse_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31515.length)].join('')));

}
});

phzr.point.parse_.cljs$core$IFn$_invoke$arity$1 = (function (obj){
return phzr.impl.utils.core.phaser__GT_clj.call(null,Phaser.Point.parse(phzr.impl.utils.core.clj__GT_phaser.call(null,obj)));
});

phzr.point.parse_.cljs$core$IFn$_invoke$arity$2 = (function (obj,x_prop){
return phzr.impl.utils.core.phaser__GT_clj.call(null,Phaser.Point.parse(phzr.impl.utils.core.clj__GT_phaser.call(null,obj),phzr.impl.utils.core.clj__GT_phaser.call(null,x_prop)));
});

phzr.point.parse_.cljs$core$IFn$_invoke$arity$3 = (function (obj,x_prop,y_prop){
return phzr.impl.utils.core.phaser__GT_clj.call(null,Phaser.Point.parse(phzr.impl.utils.core.clj__GT_phaser.call(null,obj),phzr.impl.utils.core.clj__GT_phaser.call(null,x_prop),phzr.impl.utils.core.clj__GT_phaser.call(null,y_prop)));
});

phzr.point.parse_.cljs$lang$maxFixedArity = 3;

/**
 * Make this Point perpendicular (90 degrees rotation)
 * 
 *   Returns:  Phaser.Point - This Point object.
 */
phzr.point.perp = (function phzr$point$perp(point){
return phzr.impl.utils.core.phaser__GT_clj.call(null,point.perp());
});
/**
 * Return a perpendicular vector (90 degrees rotation)
 * 
 *   Parameters:
 *  * a (Phaser.Point) - The Point object.
 *  * out (Phaser.Point) {optional} - Optional Point to store the value in, if not supplied a new Point object will be created.
 * 
 *   Returns:  Phaser.Point - The new Point object.
 */
phzr.point.perp_ = (function phzr$point$perp_(var_args){
var args31522 = [];
var len__25865__auto___31525 = arguments.length;
var i__25866__auto___31526 = (0);
while(true){
if((i__25866__auto___31526 < len__25865__auto___31525)){
args31522.push((arguments[i__25866__auto___31526]));

var G__31527 = (i__25866__auto___31526 + (1));
i__25866__auto___31526 = G__31527;
continue;
} else {
}
break;
}

var G__31524 = args31522.length;
switch (G__31524) {
case 1:
return phzr.point.perp_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.point.perp_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31522.length)].join('')));

}
});

phzr.point.perp_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return phzr.impl.utils.core.phaser__GT_clj.call(null,Phaser.Point.perp(phzr.impl.utils.core.clj__GT_phaser.call(null,a)));
});

phzr.point.perp_.cljs$core$IFn$_invoke$arity$2 = (function (a,out){
return phzr.impl.utils.core.phaser__GT_clj.call(null,Phaser.Point.perp(phzr.impl.utils.core.clj__GT_phaser.call(null,a),phzr.impl.utils.core.clj__GT_phaser.call(null,out)));
});

phzr.point.perp_.cljs$lang$maxFixedArity = 2;

/**
 * Project two Points onto another Point.
 * 
 *   Parameters:
 *  * a (Phaser.Point) - The first Point object.
 *  * b (Phaser.Point) - The second Point object.
 *  * out (Phaser.Point) {optional} - Optional Point to store the value in, if not supplied a new Point object will be created.
 * 
 *   Returns:  Phaser.Point - The new Point object.
 */
phzr.point.project_ = (function phzr$point$project_(var_args){
var args31529 = [];
var len__25865__auto___31532 = arguments.length;
var i__25866__auto___31533 = (0);
while(true){
if((i__25866__auto___31533 < len__25865__auto___31532)){
args31529.push((arguments[i__25866__auto___31533]));

var G__31534 = (i__25866__auto___31533 + (1));
i__25866__auto___31533 = G__31534;
continue;
} else {
}
break;
}

var G__31531 = args31529.length;
switch (G__31531) {
case 2:
return phzr.point.project_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.point.project_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31529.length)].join('')));

}
});

phzr.point.project_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return phzr.impl.utils.core.phaser__GT_clj.call(null,Phaser.Point.project(phzr.impl.utils.core.clj__GT_phaser.call(null,a),phzr.impl.utils.core.clj__GT_phaser.call(null,b)));
});

phzr.point.project_.cljs$core$IFn$_invoke$arity$3 = (function (a,b,out){
return phzr.impl.utils.core.phaser__GT_clj.call(null,Phaser.Point.project(phzr.impl.utils.core.clj__GT_phaser.call(null,a),phzr.impl.utils.core.clj__GT_phaser.call(null,b),phzr.impl.utils.core.clj__GT_phaser.call(null,out)));
});

phzr.point.project_.cljs$lang$maxFixedArity = 3;

/**
 * Project two Points onto a Point of unit length.
 * 
 *   Parameters:
 *  * a (Phaser.Point) - The first Point object.
 *  * b (Phaser.Point) - The second Point object.
 *  * out (Phaser.Point) {optional} - Optional Point to store the value in, if not supplied a new Point object will be created.
 * 
 *   Returns:  Phaser.Point - The new Point object.
 */
phzr.point.project_unit_ = (function phzr$point$project_unit_(var_args){
var args31536 = [];
var len__25865__auto___31539 = arguments.length;
var i__25866__auto___31540 = (0);
while(true){
if((i__25866__auto___31540 < len__25865__auto___31539)){
args31536.push((arguments[i__25866__auto___31540]));

var G__31541 = (i__25866__auto___31540 + (1));
i__25866__auto___31540 = G__31541;
continue;
} else {
}
break;
}

var G__31538 = args31536.length;
switch (G__31538) {
case 2:
return phzr.point.project_unit_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.point.project_unit_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31536.length)].join('')));

}
});

phzr.point.project_unit_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return phzr.impl.utils.core.phaser__GT_clj.call(null,Phaser.Point.projectUnit(phzr.impl.utils.core.clj__GT_phaser.call(null,a),phzr.impl.utils.core.clj__GT_phaser.call(null,b)));
});

phzr.point.project_unit_.cljs$core$IFn$_invoke$arity$3 = (function (a,b,out){
return phzr.impl.utils.core.phaser__GT_clj.call(null,Phaser.Point.projectUnit(phzr.impl.utils.core.clj__GT_phaser.call(null,a),phzr.impl.utils.core.clj__GT_phaser.call(null,b),phzr.impl.utils.core.clj__GT_phaser.call(null,out)));
});

phzr.point.project_unit_.cljs$lang$maxFixedArity = 3;

/**
 * Rotates this Point around the x/y coordinates given to the desired angle.
 * 
 *   Parameters:
 *  * point (Phaser.Point) - Targeted instance for method
 *  * x (number) - The x coordinate of the anchor point.
 *  * y (number) - The y coordinate of the anchor point.
 *  * angle (number) - The angle in radians (unless asDegrees is true) to rotate the Point to.
 *  * as-degrees (boolean) {optional} - Is the given angle in radians (false) or degrees (true)?
 *  * distance (number) {optional} - An optional distance constraint between the Point and the anchor.
 * 
 *   Returns:  Phaser.Point - The modified point object.
 */
phzr.point.rotate = (function phzr$point$rotate(var_args){
var args31543 = [];
var len__25865__auto___31546 = arguments.length;
var i__25866__auto___31547 = (0);
while(true){
if((i__25866__auto___31547 < len__25865__auto___31546)){
args31543.push((arguments[i__25866__auto___31547]));

var G__31548 = (i__25866__auto___31547 + (1));
i__25866__auto___31547 = G__31548;
continue;
} else {
}
break;
}

var G__31545 = args31543.length;
switch (G__31545) {
case 4:
return phzr.point.rotate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.point.rotate.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return phzr.point.rotate.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31543.length)].join('')));

}
});

phzr.point.rotate.cljs$core$IFn$_invoke$arity$4 = (function (point,x,y,angle){
return phzr.impl.utils.core.phaser__GT_clj.call(null,point.rotate(phzr.impl.utils.core.clj__GT_phaser.call(null,x),phzr.impl.utils.core.clj__GT_phaser.call(null,y),phzr.impl.utils.core.clj__GT_phaser.call(null,angle)));
});

phzr.point.rotate.cljs$core$IFn$_invoke$arity$5 = (function (point,x,y,angle,as_degrees){
return phzr.impl.utils.core.phaser__GT_clj.call(null,point.rotate(phzr.impl.utils.core.clj__GT_phaser.call(null,x),phzr.impl.utils.core.clj__GT_phaser.call(null,y),phzr.impl.utils.core.clj__GT_phaser.call(null,angle),phzr.impl.utils.core.clj__GT_phaser.call(null,as_degrees)));
});

phzr.point.rotate.cljs$core$IFn$_invoke$arity$6 = (function (point,x,y,angle,as_degrees,distance){
return phzr.impl.utils.core.phaser__GT_clj.call(null,point.rotate(phzr.impl.utils.core.clj__GT_phaser.call(null,x),phzr.impl.utils.core.clj__GT_phaser.call(null,y),phzr.impl.utils.core.clj__GT_phaser.call(null,angle),phzr.impl.utils.core.clj__GT_phaser.call(null,as_degrees),phzr.impl.utils.core.clj__GT_phaser.call(null,distance)));
});

phzr.point.rotate.cljs$lang$maxFixedArity = 6;

/**
 * Rotates a Point object, or any object with exposed x/y properties, around the given coordinates by
 *   the angle specified. If the angle between the point and coordinates was 45 deg and the angle argument
 *   is 45 deg then the resulting angle will be 90 deg, as the angle argument is added to the current angle.
 * 
 *   The distance allows you to specify a distance constraint for the rotation between the point and the 
 *   coordinates. If none is given the distance between the two is calculated and used.
 * 
 *   Parameters:
 *  * a (Phaser.Point) - The Point object to rotate.
 *  * x (number) - The x coordinate of the anchor point
 *  * y (number) - The y coordinate of the anchor point
 *  * angle (number) - The angle in radians (unless asDegrees is true) to rotate the Point by.
 *  * as-degrees (boolean) {optional} - Is the given angle in radians (false) or degrees (true)?
 *  * distance (number) {optional} - An optional distance constraint between the Point and the anchor.
 * 
 *   Returns:  Phaser.Point - The modified point object.
 */
phzr.point.rotate_ = (function phzr$point$rotate_(var_args){
var args31550 = [];
var len__25865__auto___31553 = arguments.length;
var i__25866__auto___31554 = (0);
while(true){
if((i__25866__auto___31554 < len__25865__auto___31553)){
args31550.push((arguments[i__25866__auto___31554]));

var G__31555 = (i__25866__auto___31554 + (1));
i__25866__auto___31554 = G__31555;
continue;
} else {
}
break;
}

var G__31552 = args31550.length;
switch (G__31552) {
case 4:
return phzr.point.rotate_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.point.rotate_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return phzr.point.rotate_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31550.length)].join('')));

}
});

phzr.point.rotate_.cljs$core$IFn$_invoke$arity$4 = (function (a,x,y,angle){
return phzr.impl.utils.core.phaser__GT_clj.call(null,Phaser.Point.rotate(phzr.impl.utils.core.clj__GT_phaser.call(null,a),phzr.impl.utils.core.clj__GT_phaser.call(null,x),phzr.impl.utils.core.clj__GT_phaser.call(null,y),phzr.impl.utils.core.clj__GT_phaser.call(null,angle)));
});

phzr.point.rotate_.cljs$core$IFn$_invoke$arity$5 = (function (a,x,y,angle,as_degrees){
return phzr.impl.utils.core.phaser__GT_clj.call(null,Phaser.Point.rotate(phzr.impl.utils.core.clj__GT_phaser.call(null,a),phzr.impl.utils.core.clj__GT_phaser.call(null,x),phzr.impl.utils.core.clj__GT_phaser.call(null,y),phzr.impl.utils.core.clj__GT_phaser.call(null,angle),phzr.impl.utils.core.clj__GT_phaser.call(null,as_degrees)));
});

phzr.point.rotate_.cljs$core$IFn$_invoke$arity$6 = (function (a,x,y,angle,as_degrees,distance){
return phzr.impl.utils.core.phaser__GT_clj.call(null,Phaser.Point.rotate(phzr.impl.utils.core.clj__GT_phaser.call(null,a),phzr.impl.utils.core.clj__GT_phaser.call(null,x),phzr.impl.utils.core.clj__GT_phaser.call(null,y),phzr.impl.utils.core.clj__GT_phaser.call(null,angle),phzr.impl.utils.core.clj__GT_phaser.call(null,as_degrees),phzr.impl.utils.core.clj__GT_phaser.call(null,distance)));
});

phzr.point.rotate_.cljs$lang$maxFixedArity = 6;

/**
 * Make this Point perpendicular (-90 degrees rotation)
 * 
 *   Returns:  Phaser.Point - This Point object.
 */
phzr.point.rperp = (function phzr$point$rperp(point){
return phzr.impl.utils.core.phaser__GT_clj.call(null,point.rperp());
});
/**
 * Return a perpendicular vector (-90 degrees rotation)
 * 
 *   Parameters:
 *  * a (Phaser.Point) - The Point object.
 *  * out (Phaser.Point) {optional} - Optional Point to store the value in, if not supplied a new Point object will be created.
 * 
 *   Returns:  Phaser.Point - The new Point object.
 */
phzr.point.rperp_ = (function phzr$point$rperp_(var_args){
var args31557 = [];
var len__25865__auto___31560 = arguments.length;
var i__25866__auto___31561 = (0);
while(true){
if((i__25866__auto___31561 < len__25865__auto___31560)){
args31557.push((arguments[i__25866__auto___31561]));

var G__31562 = (i__25866__auto___31561 + (1));
i__25866__auto___31561 = G__31562;
continue;
} else {
}
break;
}

var G__31559 = args31557.length;
switch (G__31559) {
case 1:
return phzr.point.rperp_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.point.rperp_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31557.length)].join('')));

}
});

phzr.point.rperp_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return phzr.impl.utils.core.phaser__GT_clj.call(null,Phaser.Point.rperp(phzr.impl.utils.core.clj__GT_phaser.call(null,a)));
});

phzr.point.rperp_.cljs$core$IFn$_invoke$arity$2 = (function (a,out){
return phzr.impl.utils.core.phaser__GT_clj.call(null,Phaser.Point.rperp(phzr.impl.utils.core.clj__GT_phaser.call(null,a),phzr.impl.utils.core.clj__GT_phaser.call(null,out)));
});

phzr.point.rperp_.cljs$lang$maxFixedArity = 2;

/**
 * Sets the `x` and `y` values of this Point object to the given values.
 *   If you omit the `y` value then the `x` value will be applied to both, for example:
 *   `Point.set(2)` is the same as `Point.set(2, 2)`
 * 
 *   Parameters:
 *  * point (Phaser.Point) - Targeted instance for method
 *  * x (number) - The horizontal value of this point.
 *  * y (number) {optional} - The vertical value of this point. If not given the x value will be used in its place.
 * 
 *   Returns:  Phaser.Point - This Point object. Useful for chaining method calls.
 */
phzr.point.set = (function phzr$point$set(var_args){
var args31564 = [];
var len__25865__auto___31567 = arguments.length;
var i__25866__auto___31568 = (0);
while(true){
if((i__25866__auto___31568 < len__25865__auto___31567)){
args31564.push((arguments[i__25866__auto___31568]));

var G__31569 = (i__25866__auto___31568 + (1));
i__25866__auto___31568 = G__31569;
continue;
} else {
}
break;
}

var G__31566 = args31564.length;
switch (G__31566) {
case 2:
return phzr.point.set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.point.set.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31564.length)].join('')));

}
});

phzr.point.set.cljs$core$IFn$_invoke$arity$2 = (function (point,x){
return phzr.impl.utils.core.phaser__GT_clj.call(null,point.set(phzr.impl.utils.core.clj__GT_phaser.call(null,x)));
});

phzr.point.set.cljs$core$IFn$_invoke$arity$3 = (function (point,x,y){
return phzr.impl.utils.core.phaser__GT_clj.call(null,point.set(phzr.impl.utils.core.clj__GT_phaser.call(null,x),phzr.impl.utils.core.clj__GT_phaser.call(null,y)));
});

phzr.point.set.cljs$lang$maxFixedArity = 3;

/**
 * Alters the length of the Point without changing the direction.
 * 
 *   Parameters:
 *  * point (Phaser.Point) - Targeted instance for method
 *  * magnitude (number) - The desired magnitude of the resulting Point.
 * 
 *   Returns:  Phaser.Point - This Point object.
 */
phzr.point.set_magnitude = (function phzr$point$set_magnitude(point,magnitude){
return phzr.impl.utils.core.phaser__GT_clj.call(null,point.setMagnitude(phzr.impl.utils.core.clj__GT_phaser.call(null,magnitude)));
});
/**
 * Sets the `x` and `y` values of this Point object to the given values.
 *   If you omit the `y` value then the `x` value will be applied to both, for example:
 *   `Point.setTo(2)` is the same as `Point.setTo(2, 2)`
 * 
 *   Parameters:
 *  * point (Phaser.Point) - Targeted instance for method
 *  * x (number) - The horizontal value of this point.
 *  * y (number) {optional} - The vertical value of this point. If not given the x value will be used in its place.
 * 
 *   Returns:  Phaser.Point - This Point object. Useful for chaining method calls.
 */
phzr.point.set_to = (function phzr$point$set_to(var_args){
var args31571 = [];
var len__25865__auto___31574 = arguments.length;
var i__25866__auto___31575 = (0);
while(true){
if((i__25866__auto___31575 < len__25865__auto___31574)){
args31571.push((arguments[i__25866__auto___31575]));

var G__31576 = (i__25866__auto___31575 + (1));
i__25866__auto___31575 = G__31576;
continue;
} else {
}
break;
}

var G__31573 = args31571.length;
switch (G__31573) {
case 2:
return phzr.point.set_to.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.point.set_to.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31571.length)].join('')));

}
});

phzr.point.set_to.cljs$core$IFn$_invoke$arity$2 = (function (point,x){
return phzr.impl.utils.core.phaser__GT_clj.call(null,point.setTo(phzr.impl.utils.core.clj__GT_phaser.call(null,x)));
});

phzr.point.set_to.cljs$core$IFn$_invoke$arity$3 = (function (point,x,y){
return phzr.impl.utils.core.phaser__GT_clj.call(null,point.setTo(phzr.impl.utils.core.clj__GT_phaser.call(null,x),phzr.impl.utils.core.clj__GT_phaser.call(null,y)));
});

phzr.point.set_to.cljs$lang$maxFixedArity = 3;

/**
 * Subtracts the given x and y values from this Point.
 * 
 *   Parameters:
 *  * point (Phaser.Point) - Targeted instance for method
 *  * x (number) - The value to subtract from Point.x.
 *  * y (number) - The value to subtract from Point.y.
 * 
 *   Returns:  Phaser.Point - This Point object. Useful for chaining method calls.
 */
phzr.point.subtract = (function phzr$point$subtract(point,x,y){
return phzr.impl.utils.core.phaser__GT_clj.call(null,point.subtract(phzr.impl.utils.core.clj__GT_phaser.call(null,x),phzr.impl.utils.core.clj__GT_phaser.call(null,y)));
});
/**
 * Subtracts the coordinates of two points to create a new point.
 * 
 *   Parameters:
 *  * a (Phaser.Point) - The first Point object.
 *  * b (Phaser.Point) - The second Point object.
 *  * out (Phaser.Point) {optional} - Optional Point to store the value in, if not supplied a new Point object will be created.
 * 
 *   Returns:  Phaser.Point - The new Point object.
 */
phzr.point.subtract_ = (function phzr$point$subtract_(var_args){
var args31578 = [];
var len__25865__auto___31581 = arguments.length;
var i__25866__auto___31582 = (0);
while(true){
if((i__25866__auto___31582 < len__25865__auto___31581)){
args31578.push((arguments[i__25866__auto___31582]));

var G__31583 = (i__25866__auto___31582 + (1));
i__25866__auto___31582 = G__31583;
continue;
} else {
}
break;
}

var G__31580 = args31578.length;
switch (G__31580) {
case 2:
return phzr.point.subtract_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.point.subtract_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31578.length)].join('')));

}
});

phzr.point.subtract_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return phzr.impl.utils.core.phaser__GT_clj.call(null,Phaser.Point.subtract(phzr.impl.utils.core.clj__GT_phaser.call(null,a),phzr.impl.utils.core.clj__GT_phaser.call(null,b)));
});

phzr.point.subtract_.cljs$core$IFn$_invoke$arity$3 = (function (a,b,out){
return phzr.impl.utils.core.phaser__GT_clj.call(null,Phaser.Point.subtract(phzr.impl.utils.core.clj__GT_phaser.call(null,a),phzr.impl.utils.core.clj__GT_phaser.call(null,b),phzr.impl.utils.core.clj__GT_phaser.call(null,out)));
});

phzr.point.subtract_.cljs$lang$maxFixedArity = 3;

/**
 * Returns a string representation of this object.
 * 
 *   Returns:  string - A string representation of the instance.
 */
phzr.point.to_string = (function phzr$point$to_string(point){
return phzr.impl.utils.core.phaser__GT_clj.call(null,point.toString());
});

//# sourceMappingURL=point.js.map?rel=1485300085882