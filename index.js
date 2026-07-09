function calculateTax(amount){
    const taxRate = 0.1; // 10% tax rate
    return amount * taxRate;

}




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };