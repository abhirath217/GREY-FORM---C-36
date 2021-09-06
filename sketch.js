// creating the sketch . js 

//creating all the variables 
var canvas, backgroundImage;
var questions;
var question, contestant, quiz;

//creating the function setup 
function setup(){
  //creating the canvas 
  canvas = createCanvas(1500,2000);
  //creating the database 
  database = firebase.database();
  //creating and adding the quix command 
  quiz = new Quiz();
  //creating the quiz start 
  quiz.start();
}

//creating the function draw 
function draw(){
  //giving the backgrounf to the form on index.html 
  background("grey");

}
