function convertPoundsToKilogram(pounds: number) {
    let kilograms: number = pounds * 0.453592;
    return kilograms;
}

console.log(convertPoundsToKilogram (2));  


function convertInchesToCentimeter(inches:number) {
    let centimeters: number = inches * 0.54;
    return centimeters;
}

console.log(convertInchesToCentimeter (1));


function convertFeetToMeters(feet:number) {
    let meters: number = feet * 0.3048;
    return meters;
}

console.log(convertFeetToMeters (1));


// function that checks odd and even
function isOdd(num:number) {
    if(num % 2 != 0){
        return "is odd";
    }
    else{
        return "is even";
    }
}

console.log(isOdd(3))

function fizo(i:number){

    for (let i = 1; i < 101; i++) {
        if (i % (5 && 3) == 0) {

        }
        else if (i % 3 == 0){

        }
        else if (i % 5 == 0) {

        }
    
        else{
         return "just say the number as you would normally";
        }
    }
}
    console.log("Fizz!");
    console.log("Buzz!");
    console.log("Fizz-Buzz!");
    console.log(12)



