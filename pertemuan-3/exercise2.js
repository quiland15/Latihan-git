// Modifikasi Exercise 1
// Menggunakna IIFE & Callback

//IIFE

(function (berat, tinggi){
	let bmi = berat / (tinggi **2)
	let classification;
	if(bmi < 18.5){
		classification = "Underweight"
	}else if (bmi >= 18.5 && bmi <= 24.9){
		classification = "Normal Range"
	}else if (bmi >= 25){
		classification = "Overweight"
	}else if (bmi > 25 && bmi <= 29.9){
		classification = "Preobese"
	}else{
		classification = "Obese"
	}
	console.log("BMI Anda = " + bmi + ",Kategori Anda = " + classification)
})(80, 1.61)

//Callback

function hitungBMI(berat, tinggi){
	let bmi = berat / (tinggi **2)
        let classification;
        if(bmi < 18.5){
                classification = "Underweight"
        }else if (bmi >= 18.5 && bmi <= 24.9){
                classification = "Normal Range"
        }else if (bmi >= 25){
                classification = "Overweight"
        }else if (bmi > 25 && bmi <= 29.9){
                classification = "Preobese"
        }else{
                classification = "Obese"
        }
        console.log("BMI Anda = " + bmi + ",Kategori Anda = " + classification)

}

function output(callback){
	callback(80, 1.61)
}

output(hitungBMI)
