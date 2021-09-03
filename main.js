var canvas = document.getElementById("myCanvas");

background_image = "parkingLot.jpg";
greencar_image = "car2.png";



function add() {
    background_img_tag = new Image();
    background_img_tag.onload = upload_background;
    background_img_tag.src = background_image;

    greencar_img_tag = new Image();
    greencar_img_tag.onload = uploadgreencar;
    green_img_tag.src = greencar_image;
}

function uploadBackground() {
    ctx.drawImage(background_img_tag,0,0,canvas.width,canvas.height);	

}

function uploadgreencar() {

	ctx.drawImage(grrencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_heigth);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function  up() {
    if (greencar_y >=0) {
        greencar_y = greencar_y - 10;
        console.log("When up arrow is pressed, x = " + greencar_x + " | y = " +greencar_y);
        uploadBackground();
        uploadwater();
        uploadrover();
    }
}


function  down() {
    if (greencar_y >=500) {
        greencar_y += 10;
        console.log("When down arrow is pressed,   x = " + greencar_x + " | y = " +greencar_y);
        uploadBackground();
        uploadwater();
        uploadrover();
    }
}



function  Left() {
    if (greencar_y >=0) {
        greencar_y -= 10;
        console.log("When Left arrow is pressed,  x = " + greencar_x + " | y =  " +greencar_y);
        uploadBackground();
        uploadwater();
        uploadrover();
    }
}


function  right() {
    if (greencar_y >=700) {
        greencar_y += 10;
        console.log("When right arrow is pressed, x = " + greencar_x + " | y = " +greencar_y);
        uploadBackground();
        uploadwater();
        uploadrover();
    }
}