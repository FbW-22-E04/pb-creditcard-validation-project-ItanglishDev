function validateCreditCard(creditCardNum) {
    sixteenDigitsCheck();
    allAreNumbersCheck()
    differentDigitsCheck();
};

//             CHECKING FOR 16 DIGITS
function sixteenDigitsCheck(creditCardNum) {
    if (creditCardNum.length !== 16) {
        return false;
    }
}
sixteenDigitsCheck(creditCardNum)

//         CHECKING THAT ALL ARE NUMBERS
function allAreNumbersCheck(creditCardNum) {
    const cardDigits = '1234567890';
    for (let i = 0; i < creditCardNum.length; i++) {
        if (!creditCardNum[i].includes(cardDigits)) {
            return false;
        }
    }
}
allAreNumbersCheck(creditCardNum)






//  CHECKING IF THERE ARE AT LEAST TWO DIFFERENT DIGITS
function differentDigitsCheck(creditCardNum) {
    const cardDigits = '1234567890';
    let countDigits = 0;
    for (let i = 0; i < creditCardNum.length; i++) {
        if (creditCardNum[i].includes(cardDigits)) {
            countDigits++;
        }
    }
}

differentDigitsCheck(creditCardNum)








/**** tests *****/
console.log(validateCreditCard('9999-7777-8888-0000')); //{ valid: true, number: '9999-7777-8888-0000' }
console.log(validateCreditCard('6666-6666-6666-1666')); //{ valid: true, number: '6666-6666-6666-1666' }
console.log(validateCreditCard('a923-3211-9c01-1112')); //{ valid: false,number: 'a923-3211-9c01-1112',error: '_invalid characters_' }
console.log(validateCreditCard('4444-4444-4444-4444')); //{ valid: false,number: '4444-4444-4444-4444',error: '_only one type of number_' }
console.log(validateCreditCard('1211-1111-1111-1112')); //{ valid: true, number: '1211-1111-1111-1112' }



