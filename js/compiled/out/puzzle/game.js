// Compiled by ClojureScript 1.9.229 {}
goog.provide('puzzle.game');
goog.require('cljs.core');
goog.require('phzr.core');
goog.require('phzr.game_object_factory');
goog.require('phzr.game');
goog.require('phzr.loader');
goog.require('phzr.tween');
goog.require('phzr.point');
goog.require('phzr.signal');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof puzzle.game.game_state !== 'undefined'){
} else {
puzzle.game.game_state = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"puzzle-image","puzzle-image",1428716161),new cljs.core.Keyword(null,"board-cols","board-cols",-231259198),new cljs.core.Keyword(null,"piece-coords","piece-coords",-897310138),new cljs.core.Keyword(null,"game-div-id","game-div-id",-734579374),new cljs.core.Keyword(null,"board-rows","board-rows",-1998703214),new cljs.core.Keyword(null,"black-coord","black-coord",1692774997),new cljs.core.Keyword(null,"piece-width","piece-width",1759357593),new cljs.core.Keyword(null,"world-height","world-height",994786587),new cljs.core.Keyword(null,"world-width","world-width",1762701691),new cljs.core.Keyword(null,"piece-height","piece-height",-350743041),new cljs.core.Keyword(null,"text","text",-1790561697)],["",(3),cljs.core.PersistentArrayMap.EMPTY,"puzzle-game",(3),cljs.core.PersistentVector.EMPTY,(0),(0),(0),(0),"Hello world!"]));
}
cljs.core.println.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,puzzle.game.game_state)));
puzzle.game.preload = (function puzzle$game$preload(game){
var loader = new cljs.core.Keyword(null,"load","load",-1318641184).cljs$core$IFn$_invoke$arity$1(game);
var G__31632 = loader;
phzr.loader.spritesheet.call(null,G__31632,"logo",[cljs.core.str("https://api.finna.fi"),cljs.core.str(new cljs.core.Keyword(null,"puzzle-image","puzzle-image",1428716161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,puzzle.game.game_state)))].join(''),new cljs.core.Keyword(null,"piece-width","piece-width",1759357593).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,puzzle.game.game_state)),new cljs.core.Keyword(null,"piece-height","piece-height",-350743041).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,puzzle.game.game_state)));

return G__31632;
});
puzzle.game.display_success_text = (function puzzle$game$display_success_text(game){
var style = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font","font",-1506159249),"40px Arial",new cljs.core.Keyword(null,"fill","fill",883462889),"#ff0000",new cljs.core.Keyword(null,"align","align",1964212802),"center"], null);
var gof = new cljs.core.Keyword(null,"add","add",235287739).cljs$core$IFn$_invoke$arity$1(game);
var world_x = cljs.core.get_in.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world","world",-418292623),new cljs.core.Keyword(null,"center-x","center-x",2109659472)], null));
var world_y = cljs.core.get_in.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world","world",-418292623),new cljs.core.Keyword(null,"center-y","center-y",-233780987)], null));
var text = phzr.game_object_factory.text.call(null,gof,world_x,world_y,"Congratulations! \nYou made it!",style);
return phzr.core.pset_BANG_.call(null,text,new cljs.core.Keyword(null,"anchor","anchor",1549638489),phzr.point.__GT_Point.call(null,0.5,0.5));
});
puzzle.game.solved_QMARK_ = (function puzzle$game$solved_QMARK_(){

return cljs.core.every_QMARK_.call(null,(function (p__31637){
var vec__31638 = p__31637;
var frame_num = cljs.core.nth.call(null,vec__31638,(0),null);
var coord = cljs.core.nth.call(null,vec__31638,(1),null);
var board_cols = (new cljs.core.Keyword(null,"world-width","world-width",1762701691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,puzzle.game.game_state)) / new cljs.core.Keyword(null,"piece-width","piece-width",1759357593).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,puzzle.game.game_state)));
return cljs.core._EQ_.call(null,frame_num,((coord.call(null,(0)) * board_cols) + coord.call(null,(1))));
}),new cljs.core.Keyword(null,"piece-coords","piece-coords",-897310138).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,puzzle.game.game_state)));
});
puzzle.game.can_move = (function puzzle$game$can_move(black_coord,piece_coord){
return ((cljs.core._EQ_.call(null,(black_coord.call(null,(0)) + (1)),piece_coord.call(null,(0)))) && (cljs.core._EQ_.call(null,black_coord.call(null,(1)),piece_coord.call(null,(1))))) || ((cljs.core._EQ_.call(null,(black_coord.call(null,(0)) - (1)),piece_coord.call(null,(0)))) && (cljs.core._EQ_.call(null,black_coord.call(null,(1)),piece_coord.call(null,(1))))) || ((cljs.core._EQ_.call(null,(black_coord.call(null,(1)) + (1)),piece_coord.call(null,(1)))) && (cljs.core._EQ_.call(null,black_coord.call(null,(0)),piece_coord.call(null,(0))))) || ((cljs.core._EQ_.call(null,(black_coord.call(null,(1)) - (1)),piece_coord.call(null,(1)))) && (cljs.core._EQ_.call(null,black_coord.call(null,(0)),piece_coord.call(null,(0)))));
});
puzzle.game.sprite_on_click = (function puzzle$game$sprite_on_click(piece,event,game){
var gof = new cljs.core.Keyword(null,"add","add",235287739).cljs$core$IFn$_invoke$arity$1(game);
var tween = phzr.game_object_factory.tween.call(null,gof,piece);
var black_coord = new cljs.core.Keyword(null,"black-coord","black-coord",1692774997).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,puzzle.game.game_state));
var black_x = (new cljs.core.Keyword(null,"piece-width","piece-width",1759357593).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,puzzle.game.game_state)) * black_coord.call(null,(1)));
var black_y = (new cljs.core.Keyword(null,"piece-height","piece-height",-350743041).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,puzzle.game.game_state)) * black_coord.call(null,(0)));
var piece_coord = cljs.core.get_in.call(null,cljs.core.deref.call(null,puzzle.game.game_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"piece-coords","piece-coords",-897310138),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(piece)], null));
if(cljs.core.truth_(puzzle.game.can_move.call(null,black_coord,piece_coord))){
cljs.core.swap_BANG_.call(null,puzzle.game.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"black-coord","black-coord",1692774997),piece_coord);

cljs.core.swap_BANG_.call(null,puzzle.game.game_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"piece-coords","piece-coords",-897310138),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(piece)], null),black_coord);

phzr.tween.to.call(null,tween,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),black_x,new cljs.core.Keyword(null,"y","y",-1757859776),black_y], null),(400),"Linear",true);

if(cljs.core.truth_(puzzle.game.solved_QMARK_.call(null))){
return puzzle.game.display_success_text.call(null,game);
} else {
return null;
}
} else {
return null;
}
});
puzzle.game.create_black_piece_BANG_ = (function puzzle$game$create_black_piece_BANG_(gof,col,row){
var black = phzr.game_object_factory.sprite.call(null,gof,(col * new cljs.core.Keyword(null,"piece-width","piece-width",1759357593).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,puzzle.game.game_state))),(row * new cljs.core.Keyword(null,"piece-height","piece-height",-350743041).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,puzzle.game.game_state))));
return cljs.core.swap_BANG_.call(null,puzzle.game.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"black-coord","black-coord",1692774997),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
});
puzzle.game.create_puzzle_piece_BANG_ = (function puzzle$game$create_puzzle_piece_BANG_(game,col,row,sprite_key,frame_number){
var gof = new cljs.core.Keyword(null,"add","add",235287739).cljs$core$IFn$_invoke$arity$1(game);
var piece = phzr.game_object_factory.sprite.call(null,gof,(col * new cljs.core.Keyword(null,"piece-width","piece-width",1759357593).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,puzzle.game.game_state))),(row * new cljs.core.Keyword(null,"piece-height","piece-height",-350743041).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,puzzle.game.game_state))),sprite_key,frame_number);
phzr.core.pset_BANG_.call(null,piece,new cljs.core.Keyword(null,"name","name",1843675177),frame_number);

cljs.core.swap_BANG_.call(null,puzzle.game.game_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"piece-coords","piece-coords",-897310138),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(piece)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));

phzr.core.pset_BANG_.call(null,piece,new cljs.core.Keyword(null,"input-enabled","input-enabled",-1575655182),true);

return phzr.signal.add.call(null,cljs.core.get_in.call(null,piece,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"on-input-down","on-input-down",-939263920)], null)),puzzle.game.sprite_on_click,piece,(0),game);
});
/**
 * Create randomized puzzle board with one black piece
 */
puzzle.game.init_board_BANG_ = (function puzzle$game$init_board_BANG_(game){
var game_object_factory = new cljs.core.Keyword(null,"add","add",235287739).cljs$core$IFn$_invoke$arity$1(game);
var board_cols = new cljs.core.Keyword(null,"board-cols","board-cols",-231259198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,puzzle.game.game_state));
var board_rows = new cljs.core.Keyword(null,"board-rows","board-rows",-1998703214).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,puzzle.game.game_state));
var shuffled_frame_nums = cljs.core.shuffle.call(null,cljs.core.range.call(null,(board_rows * board_cols)));
var seq__31653 = cljs.core.seq.call(null,cljs.core.range.call(null,board_rows));
var chunk__31658 = null;
var count__31659 = (0);
var i__31660 = (0);
while(true){
if((i__31660 < count__31659)){
var row = cljs.core._nth.call(null,chunk__31658,i__31660);
var seq__31661_31665 = cljs.core.seq.call(null,cljs.core.range.call(null,board_cols));
var chunk__31662_31666 = null;
var count__31663_31667 = (0);
var i__31664_31668 = (0);
while(true){
if((i__31664_31668 < count__31663_31667)){
var col_31669 = cljs.core._nth.call(null,chunk__31662_31666,i__31664_31668);
var frame_number_31670 = shuffled_frame_nums.call(null,((row * board_cols) + col_31669));
if(cljs.core._EQ_.call(null,(1),frame_number_31670)){
puzzle.game.create_black_piece_BANG_.call(null,game_object_factory,col_31669,row);
} else {
puzzle.game.create_puzzle_piece_BANG_.call(null,game,col_31669,row,"logo",frame_number_31670);
}

var G__31671 = seq__31661_31665;
var G__31672 = chunk__31662_31666;
var G__31673 = count__31663_31667;
var G__31674 = (i__31664_31668 + (1));
seq__31661_31665 = G__31671;
chunk__31662_31666 = G__31672;
count__31663_31667 = G__31673;
i__31664_31668 = G__31674;
continue;
} else {
var temp__4657__auto___31675 = cljs.core.seq.call(null,seq__31661_31665);
if(temp__4657__auto___31675){
var seq__31661_31676__$1 = temp__4657__auto___31675;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31661_31676__$1)){
var c__25601__auto___31677 = cljs.core.chunk_first.call(null,seq__31661_31676__$1);
var G__31678 = cljs.core.chunk_rest.call(null,seq__31661_31676__$1);
var G__31679 = c__25601__auto___31677;
var G__31680 = cljs.core.count.call(null,c__25601__auto___31677);
var G__31681 = (0);
seq__31661_31665 = G__31678;
chunk__31662_31666 = G__31679;
count__31663_31667 = G__31680;
i__31664_31668 = G__31681;
continue;
} else {
var col_31682 = cljs.core.first.call(null,seq__31661_31676__$1);
var frame_number_31683 = shuffled_frame_nums.call(null,((row * board_cols) + col_31682));
if(cljs.core._EQ_.call(null,(1),frame_number_31683)){
puzzle.game.create_black_piece_BANG_.call(null,game_object_factory,col_31682,row);
} else {
puzzle.game.create_puzzle_piece_BANG_.call(null,game,col_31682,row,"logo",frame_number_31683);
}

var G__31684 = cljs.core.next.call(null,seq__31661_31676__$1);
var G__31685 = null;
var G__31686 = (0);
var G__31687 = (0);
seq__31661_31665 = G__31684;
chunk__31662_31666 = G__31685;
count__31663_31667 = G__31686;
i__31664_31668 = G__31687;
continue;
}
} else {
}
}
break;
}

var G__31688 = seq__31653;
var G__31689 = chunk__31658;
var G__31690 = count__31659;
var G__31691 = (i__31660 + (1));
seq__31653 = G__31688;
chunk__31658 = G__31689;
count__31659 = G__31690;
i__31660 = G__31691;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31653);
if(temp__4657__auto__){
var seq__31653__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31653__$1)){
var c__25601__auto__ = cljs.core.chunk_first.call(null,seq__31653__$1);
var G__31692 = cljs.core.chunk_rest.call(null,seq__31653__$1);
var G__31693 = c__25601__auto__;
var G__31694 = cljs.core.count.call(null,c__25601__auto__);
var G__31695 = (0);
seq__31653 = G__31692;
chunk__31658 = G__31693;
count__31659 = G__31694;
i__31660 = G__31695;
continue;
} else {
var row = cljs.core.first.call(null,seq__31653__$1);
var seq__31654_31696 = cljs.core.seq.call(null,cljs.core.range.call(null,board_cols));
var chunk__31655_31697 = null;
var count__31656_31698 = (0);
var i__31657_31699 = (0);
while(true){
if((i__31657_31699 < count__31656_31698)){
var col_31700 = cljs.core._nth.call(null,chunk__31655_31697,i__31657_31699);
var frame_number_31701 = shuffled_frame_nums.call(null,((row * board_cols) + col_31700));
if(cljs.core._EQ_.call(null,(1),frame_number_31701)){
puzzle.game.create_black_piece_BANG_.call(null,game_object_factory,col_31700,row);
} else {
puzzle.game.create_puzzle_piece_BANG_.call(null,game,col_31700,row,"logo",frame_number_31701);
}

var G__31702 = seq__31654_31696;
var G__31703 = chunk__31655_31697;
var G__31704 = count__31656_31698;
var G__31705 = (i__31657_31699 + (1));
seq__31654_31696 = G__31702;
chunk__31655_31697 = G__31703;
count__31656_31698 = G__31704;
i__31657_31699 = G__31705;
continue;
} else {
var temp__4657__auto___31706__$1 = cljs.core.seq.call(null,seq__31654_31696);
if(temp__4657__auto___31706__$1){
var seq__31654_31707__$1 = temp__4657__auto___31706__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31654_31707__$1)){
var c__25601__auto___31708 = cljs.core.chunk_first.call(null,seq__31654_31707__$1);
var G__31709 = cljs.core.chunk_rest.call(null,seq__31654_31707__$1);
var G__31710 = c__25601__auto___31708;
var G__31711 = cljs.core.count.call(null,c__25601__auto___31708);
var G__31712 = (0);
seq__31654_31696 = G__31709;
chunk__31655_31697 = G__31710;
count__31656_31698 = G__31711;
i__31657_31699 = G__31712;
continue;
} else {
var col_31713 = cljs.core.first.call(null,seq__31654_31707__$1);
var frame_number_31714 = shuffled_frame_nums.call(null,((row * board_cols) + col_31713));
if(cljs.core._EQ_.call(null,(1),frame_number_31714)){
puzzle.game.create_black_piece_BANG_.call(null,game_object_factory,col_31713,row);
} else {
puzzle.game.create_puzzle_piece_BANG_.call(null,game,col_31713,row,"logo",frame_number_31714);
}

var G__31715 = cljs.core.next.call(null,seq__31654_31707__$1);
var G__31716 = null;
var G__31717 = (0);
var G__31718 = (0);
seq__31654_31696 = G__31715;
chunk__31655_31697 = G__31716;
count__31656_31698 = G__31717;
i__31657_31699 = G__31718;
continue;
}
} else {
}
}
break;
}

var G__31719 = cljs.core.next.call(null,seq__31653__$1);
var G__31720 = null;
var G__31721 = (0);
var G__31722 = (0);
seq__31653 = G__31719;
chunk__31658 = G__31720;
count__31659 = G__31721;
i__31660 = G__31722;
continue;
}
} else {
return null;
}
}
break;
}
});
puzzle.game.create = (function puzzle$game$create(game){
return puzzle.game.init_board_BANG_.call(null,game);
});
puzzle.game.build_states = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"preload","preload",1646824722),puzzle.game.preload,new cljs.core.Keyword(null,"create","create",-1301499256),puzzle.game.create], null);
puzzle.game.start_game = (function puzzle$game$start_game(){
return phzr.game.__GT_Game.call(null,new cljs.core.Keyword(null,"world-width","world-width",1762701691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,puzzle.game.game_state)),new cljs.core.Keyword(null,"world-height","world-height",994786587).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,puzzle.game.game_state)),phzr.core.phaser_constants.call(null,new cljs.core.Keyword(null,"canvas","canvas",-1798817489)),new cljs.core.Keyword(null,"game-div-id","game-div-id",-734579374).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,puzzle.game.game_state)),puzzle.game.build_states);
});
puzzle.game.get_image_size_and_start_game = (function puzzle$game$get_image_size_and_start_game(url){
var image = (new Image());
image.addEventListener("load",((function (image){
return (function (event){
var image_width = event.target.naturalWidth;
var image_height = event.target.naturalHeight;
var board_rows = new cljs.core.Keyword(null,"board-rows","board-rows",-1998703214).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,puzzle.game.game_state));
var board_cols = new cljs.core.Keyword(null,"board-cols","board-cols",-231259198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,puzzle.game.game_state));
cljs.core.swap_BANG_.call(null,puzzle.game.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"world-width","world-width",1762701691),image_width);

cljs.core.swap_BANG_.call(null,puzzle.game.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"world-height","world-height",994786587),image_height);

cljs.core.swap_BANG_.call(null,puzzle.game.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"piece-width","piece-width",1759357593),Math.floor((image_width / board_cols)));

cljs.core.swap_BANG_.call(null,puzzle.game.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"piece-height","piece-height",-350743041),Math.floor((image_height / board_rows)));

return puzzle.game.start_game.call(null);
});})(image))
);

return image.src = [cljs.core.str("https://api.finna.fi"),cljs.core.str(url)].join('');
});
puzzle.game.start_puzzle = (function puzzle$game$start_puzzle(puzzle_image){
cljs.core.swap_BANG_.call(null,puzzle.game.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"puzzle-image","puzzle-image",1428716161),puzzle_image);

return puzzle.game.get_image_size_and_start_game.call(null,puzzle_image);
});

//# sourceMappingURL=game.js.map?rel=1485300086805