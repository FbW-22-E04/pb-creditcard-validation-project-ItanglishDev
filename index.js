function validateCreditCard(creditCardNum) {
    if (sixteenDigitsCheck(creditCardNum) &&
        allAreNumbersCheck(creditCardNum) &&
        differentDigitsCheck(creditCardNum) &&
        lastDigitIsEven(creditCardNum)) {
        // sumOfDigitsIsMoreThanSixteen();

        console.log("valid card");
    }

    else {
        console.log("not valid!!!");
    }
}


validateCreditCard('101283749634222');

//             CHECKING FOR 16 DIGITS
function sixteenDigitsCheck(creditCardNum) {
    if (creditCardNum.length === 16) {
        return true;
    } return false;
}


//         CHECKING THAT ALL ARE NUMBERS
function allAreNumbersCheck(creditCardNum) {
    let cardDigits = ("1234567890");
    for (let i = 0; i < creditCardNum.length; i++) {
        if (!cardDigits.includes(creditCardNum[i])) {
            return false;
        } return true;
    }
}
// console.log(allAreNumbersCheck("2637485968574636"));


//  CHECKING IF THERE ARE AT LEAST TWO DIFFERENT DIGITS
function differentDigitsCheck(creditCardNum) {
    const cardDigits = '1234567890';
    let countDigits = 0;
    for (let i = 0; i < creditCardNum.length; i++) {

    }
}

// differentDigitsCheck(creditCardNum)



//  FINDING IF THE LAST DIGIT IS EVEN

function lastDigitIsEven(creditCardNum) {
    if (creditCardNum[creditCardNum.length - 1] % 2 != 0) {
        return false;
    }
}

// lastDigitIsEven(creditCardNum)


// CHECKING THAT THE SUM OF DIGITS IS GREATER THAN 16

function sumOfDigitsIsMoreThanSixteen(creditCardNum) {
    let sumOfAll = 0;
    for (let i = 0; i < creditCardNum.length; i++) {
        sumOfAll += Number(creditCardNum[i]);
        if (!sumOfAll > 16) {
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



