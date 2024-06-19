// IIFE & Callback Function

//IIFE
//(function (){
//	console.log("hello World");
//})();

//Callback function

function greetings(){
	console.log("Hello Jhon")
}

function sayHello(callback){
	callback()
}

sayHello(greetings)

