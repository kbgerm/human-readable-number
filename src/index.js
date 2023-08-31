module.exports = function toReadable (number) {
  let arr1 = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
  let arr2 = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
  let arr3 = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
  
   let hundreds = Math.floor(number / 100);
   let predozens = number-(hundreds*100);
   let dozens = Math.floor(predozens / 10);
   let units = predozens - (dozens*10)
   let smallDozens = Math.floor(number / 10)
   let smallUnits = number - (smallDozens*10)

   if (number <= 10) {
    return arr1 [number]
   }
   else if (number < 100 && number%10 === 0) {
    return arr3[smallDozens]
   }
   else if (number >= 11 && number <= 19) {
    return arr2[smallUnits]
   }
   else if (number > 10 && number < 100) {
    return arr3[smallDozens] + " " + arr1[smallUnits]
   }
  else if (number%100 === 0) {
    return arr1[hundreds] + " " + "hundred"
  }
   else if (predozens < 10) {
    return arr1[hundreds] + " " + "hundred" + " " + arr1 [predozens]
   }
   else if (predozens >= 10 && predozens <= 19) {
      return arr1[hundreds] + " " + "hundred" + " " + arr2 [units]
    }
    else if (predozens%10 !== 0) {
      return arr1[hundreds] + " " + "hundred" + " " + arr3 [dozens] + " " + arr1 [units]
    } else if (predozens%10 === 0) {
   return arr1[hundreds] + " " + "hundred" + " " + arr3 [dozens]
    } else {
      return "you are stupid";
    }

  }
