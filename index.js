// Code your solutions in this file
// writeCards function
function writeCards(namesArray, event) {
    let thankYouMessages = [];
    for (let i = 0; i < namesArray.length; i++) {
      thankYouMessages.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouMessages;
  }
  
  // countDown function
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  

console.log(countDown(10));

console.log(writeCards(["Simon Peter", "Anthony Mulinge"], "birthday"));