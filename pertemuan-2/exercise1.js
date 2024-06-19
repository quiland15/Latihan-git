function bmi(berat, tinggi){
	let BMI = berat / (tinggi * tinggi);
	return BMI;
}

let output = bmi(64, 1.68);
console.log(output);

