//Array & Objek

//let number = [1, 2, 3, 4, 5] //Array Literal

//let number2 = new Array(6, 7, 8, 9, 10) //Array Kata Kunci new Array

//Tipe Data dalam Array

//let numbers = [1,2,3,4,5] //Integer
//let students = ["Jhon", "Jane", "Bob"] //String

//let john = ["Jhon", 30, true]  //Campuran
//let johns = ["Jhon", 30, true, [1,2,3]] //Array dalam Array

//console.log(numbers, students, john, johns)

//Array Index

//console.log(numbers[3], students[1], johns[3], johns[3][1])

//numbers[2] = 100 //Mengakses Element Tunggal

//console.log(numbers)

//Array Length
//console.log(numbers.length) //5
//console.log(students.length) //3

//Mengakses Element Terakhir

//console.log(numbers[numbers.length - 1])

//Array Method

let array = [1, 2, 3, "halo", false, true]; //toString Method

console.log(array.toString())
console.log(array.join(" "))

//Menghapus dan menambahkan

array.pop() //Menghapus data yang terakhir
array.push(32) //Menambahkan data yang terakhir

console.log(array)

//Object

//Literal
let john = {
	firstName : 'John',
	age : 30,
	isMarried : true,
	grade : [80, 90, 100],
	sayGreetings : function(){
		console.log('hello')
	}
}


//Dot Notation
console.log(john)
console.log(john.firstName)
console.log(john.grade)

//Braket Notation
console.log(john['isMarried'])

//john.job = 'Teacher' //Menambahkan Properti dot notation
//john['tinggi'] = 161 //Braket Notation
console.log(john)

john.sayGreetings() //anonymous function

//Delete Object

delete john.age
console.log(john)

























