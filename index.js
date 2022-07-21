function validateCreditCard(creditCardNum) {
    if (sixteenDigitsCheck(creditCardNum) === false)
        return false;

    if (allAreNumbersCheck(creditCardNum) === false)
        return false;

    if (differentDigitsCheck(creditCardNum) === false)
        return false;

    if (lastDigitIsEven(creditCardNum) === false)
        return false;

    if (sumOfDigitsIsMoreThanSixteen(creditCardNum) === false) return false;

    return true;
}
// console.log(sixteenDigitsCheck('4444444444444444'));
// console.log(allAreNumbersCheck('22222222222222a4'));
// console.log("here", differentDigitsCheck('4444444444442'));

// console.log(validateCreditCard('4444444444444444'));
// console.log(lastDigitIsEven('4444444444444444'));
// console.log(sumOfDigitsIsMoreThanSixteen('4444444444444444'));
console.log("VALIDATION", validateCreditCard('1111111111111111'));

//             CHECKING FOR 16 DIGITS
function sixteenDigitsCheck(creditCardNum) {
    if (creditCardNum.length !== 16) {
        return false;
    } return true;
}


//         CHECKING THAT ALL ARE NUMBERS
function allAreNumbersCheck(creditCardNum) {
    const cardDigits = "1234567890";
    for (let i = 0; i < creditCardNum.length; i++) {
        if (!cardDigits.includes(creditCardNum[i]))
            return false;
    }
    return true;
}
// console.log(allAreNumbersCheck("2637485968574636"));


//  CHECKING IF THERE ARE AT LEAST TWO DIFFERENT DIGITS
function differentDigitsCheck(creditCardNum) {
    const cardDigits = ("0123456789");
    for (let i = 0; i < creditCardNum.length - 1; i++) {

        if (creditCardNum[i] !== creditCardNum[i + 1]) return true;
    }

    return false

    // for (let i = 0; i < cardDigits.length; i++) {
    //     let counter = 0;
    //     for (let j = 0; j < creditCardNum.length; j++) {
    //         if (creditCardNum[i] === cardDigits[j]) counter++
    //     }
    //     if (counter === 16) return false;


    //     console.log(counter);
    // }
    // return true;
}

// differentDigitsCheck(creditCardNum)



//  FINDING IF THE LAST DIGIT IS EVEN

function lastDigitIsEven(creditCardNum) {
    if (creditCardNum[creditCardNum.length - 1] % 2 !== 0) {
        return false;
    } else {
        return true;
    }
}

// lastDigitIsEven(creditCardNum)


// CHECKING THAT THE SUM OF DIGITS IS GREATER THAN 16

function sumOfDigitsIsMoreThanSixteen(creditCardNum) {
    let sumOfAll = 0;
    for (let i = 0; i < creditCardNum.length; i++) {
        sumOfAll += Number(creditCardNum[i]);
        if (!sumOfAll >= 16) {
            return false;
        } else {
            return true;
        }
    }
}



/**** tests *****/
// console.log(validateCreditCard('9999777788880000')); //{ valid: true, number: '9999-7777-8888-0000' }
// console.log(validateCreditCard('6666666666661666')); //{ valid: true, number: '6666-6666-6666-1666' }
// console.log(validateCreditCard('a923-3211-9c01-1112')); //{ valid: false,number: 'a923-3211-9c01-1112',error: '_invalid characters_' }
// console.log(validateCreditCard('4444-4444-4444-4444')); //{ valid: false,number: '4444-4444-4444-4444',error: '_only one type of number_' }
// console.log(validateCreditCard('1211-1111-1111-1112')); //{ valid: true, number: '1211-1111-1111-1112' }



