var words=[];
var definitions=[];
var rand;
var box1;
var box2;
var box3;
var box4;
var box5;
var randomNumber,number;
var gameState="start";
var num1=0;
var num2=1;
var num3=2;
var num4=3;
var num5=4;


function preload(){
  bookImage=loadImage("Sprites/book.png");

}
function setup() {
  createCanvas(1500,1500);
  words=["outline","termination","missing","procrastinating","surprise"];
  definitions=["A line or set of lines enclosing or indicating the shape of an object in a sketch or diagram.",
               "The action of terminating something or the fact of being terminated.",
               "Not present or included when expected or supposed to be.",
               "Delay or postpone action; put off doing something.",
               "an unexpected or astonishing event, fact."]
  box1=createSprite(870,700,40,40);
  box2=createSprite(970,700,40,40);
  box3=createSprite(1070,700,40,40);
  box4=createSprite(1170,700,40,40);
  box5=createSprite(1270,700,40,40);
  
}

function draw() {
  background(bookImage); 
  if(gameState==="start"){
    rand=Math.round(random(0,3));
    
    randomNumber=[];
    while(randomNumber.length<5){
      number=Math.round(random(0,4));
      var generatedNumber=randomNumber.indexOf(number);
      if(generatedNumber===-1){
        randomNumber.push(number);
      }
    }
    num0=randomNumber[0];
    num1=randomNumber[1];
    num2=randomNumber[2];
    num3=randomNumber[3];
    num4=randomNumber[4];


    gameState="play";
  }
  textSize(30);
  text
  fill(0);
  text(words[rand],370,350); 
  textSize(15);
  text("A.",770,175);
  text("B.",770,275);
  text("C.",770,375);
  text("D.",770,475);
  text("E.",770,575);
  text(definitions[randomNumber[0]],770,200);
  text(definitions[randomNumber[1]],770,300);
  text(definitions[randomNumber[2]],770,400);
  text(definitions[randomNumber[3]],770,500);
  text(definitions[randomNumber[4]],770,600);
  if (mousePressedOver(box1)&&rand===0&&num0===rand){
    text("correct",970,900);
    box1.shapeColor="green";
  }
  else{
    text("wrong",970,900);
    box2.shapeColor="red";
  }
  if (mousePressedOver(box2)&&rand===1&&num1===rand){
    text("correct",970,900);
    box2.shapeColor="green";
  }
  else{
    text("wrong",970,900);
    box2.shapeColor="red";
  }
  if (mousePressedOver(box3)&&rand===2&&num2===rand){
    text("correct",970,900);
    box3.shapeColor="green";
  }
  else{
    text("wrong",970,900);
    box2.shapeColor="red";
  }
  if (mousePressedOver(box4)&&rand===3&&num3===rand){
    text("correct",970,900);
    box4.shapeColor="green";
  }
  else{
    text("wrong",970,900);
    box2.shapeColor="red";
  }
  if (mousePressedOver(box5)&&rand===4&&num4===rand){
    text("correct",970,900);
    box5.shapeColor="green";
  }
  else{
    text("wrong",970,900);
    box2.shapeColor="red";
  }
 /* if (mousePressedOver(box1)&&rand===0&&num0===rand){
    text("wrong",970,900);
    box1.shapeColor="red";
  }
  if (mousePressedOver(box1)&&rand===0&&num0===rand){
    text("wrong",970,900);
    box1.shapeColor="red";
  }
  if (mousePressedOver(box1)&&rand===0&&num0===rand){
    text("wrong",970,900);
    box1.shapeColor="red";
  }
  if (mousePressedOver(box1)&&rand===0&&num0===rand){
    text("wrong",970,900);
    box1.shapeColor="red";
  }
  if (mousePressedOver(box2)&&rand===1&&num1===rand){
    text("wrong",970,900);
    box2.shapeColor="red";
  }
  if (mousePressedOver(box2)&&rand===1&num1===rand){
    text("wrong",970,900);
    box2.shapeColor="red";
  }
  if (mousePressedOver(box2)&&rand===1&&num1===rand){
    text("wrong",970,900);
    box2.shapeColor="red";
  }
  if (mousePressedOver(box2)&&rand===1&&num1===rand){
    text("wrong",970,900);
    box2.shapeColor="red";
  }
  if (mousePressedOver(box3)&&rand===2&&num2===rand){
    text("wrong",970,900);
    box3.shapeColor="red";
  }
  if (mousePressedOver(box3)&&rand===2&&num2===rand){
    text("wrong",970,900);
    box3.shapeColor="red";
  }
  if (mousePressedOver(box3)&&rand===2&&num2===rand){
    text("wrong",970,900);
    box3.shapeColor="red";
  }
  if (mousePressedOver(box3)&&rand===2&&num2===rand){
    text("wrong",970,900);
    box3.shapeColor="red";
  }
  if (mousePressedOver(box4)&&rand===3&&num3===rand){
    text("wrong",970,900);
    box4.shapeColor="red";
  }
  if (mousePressedOver(box4)&&rand===3&&num3===rand){
    text("wrong",970,900);
    box4.shapeColor="red";
  }
  if (mousePressedOver(box4)&&rand===3&&num3===rand){
    text("wrong",970,900);
    box4.shapeColor="red";
  }
  if (mousePressedOver(box4)&&rand===3&&num3===rand){
    text("wrong",970,900);
    box4.shapeColor="red";
  }
  if (mousePressedOver(box5)&&rand===4&&num4===rand){
    text("wrong",970,900);
    box5.shapeColor="red";
  }
  if (mousePressedOver(box5)&&rand===4&&num4===rand){
    text("wrong",970,900);
    box5.shapeColor="red";
  }
  if (mousePressedOver(box5)&&rand===4&&num4===rand){
    text("wrong",970,900);
    box5.shapeColor="red";
  }
  if (mousePressedOver(box5)&&rand===4&&num4===rand){
    text("wrong",970,900);
  }*/

  drawSprites();
}