var canvas = new fabric.Canvas('myCanvas');

block_width = 30;
block_height = 30;

player_X = 10;
player_Y = 10;

var player_object = "";
var block_image_object = "";

function player_update(){
    fabric.Image.fromURL("spider man.jpg" , function (Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);

        player_object.set({
            top : player_Y,
            left : player_X
        });
        canvas.add(player_object);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image , function (Img){
        block_image_object = Img;
        block_image_object.scaleToWidth(block_width);
        block_image_object.scaleToHeight(block_height);

        block_image_object.set({
            top : player_Y,
            left : player_X
        });
        canvas.add(block_image_object);
    });
}