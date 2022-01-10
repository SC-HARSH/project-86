var canvas = new fabric.Canvas('myCanvas');
var x = document.getElementById("myAudio");
var player_object = "";

function add() {
    fabric.Image.fromURL('BirthdayImage.jpg', function (Img) {
        player_object = Img;

        player_object.scaleToWidth(700);
        player_object.scaleToHeight(510);
        player_object.set({
            top:0,
            left:0
        })
        canvas.add(player_object);
        console.log("I am In")
    });

}

function yes() {
    document.getElementById("myAudio").play();
};