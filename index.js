function calculateTax(amount){
    const taxRate = 0.1; // 10% tax rate
    return amount * taxRate;

}

function convertToUpperCase(text){
    return text.toUpperCase();
}

function findMaximum(num1,num2){
    return Math.max(num1,num2);
}

function isPalindrome(word){
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;  
}

function calculateDiscountedPrice(originalPrice, discountPercentage){
    const discountAmount = originalPrice * (discountPercentage / 100);
    return originalPrice - discountAmount;
}



// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };