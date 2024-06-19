//Loop

const students = [
	{
		id: 1 ,
		name: 'Jhon',
		isActive: true,
		grade: 80
	},
	{
                id: 2 ,
                name: 'Jack',
                isActive: true,
		grade: 90
	},
	{
                id: 3 ,
                name: 'Bob',
                isActive: false,
		grade: 95
	},
]

console.log(students)

//Menampilkan Array berurutan
//for(let i = 0; i < students.length; i++){
//	console.log(students[i])
//}

//Array.forEach()

//students.forEach(function(item) {
//	console.log(item)
//})

//Array.map()

let output = students.map(function(item){
	item.grade += 5
	return item
}) //bisa menggunakan return dan bisa membuat array baru

console.log(output)

//filter()

let filterstudents = students.filter(function(item){
	return item.isActive == true
})

console.log(filterstudents)

//find()

let findstudents = students.find(function(item){
	return item.isActive == true
})

console.log(findstudents)
