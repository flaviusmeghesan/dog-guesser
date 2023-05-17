   // get a randomly selected item from an array
   function getRandomElement(array) {
    const i = Math.floor(Math.random() * array.length);
    return array[i];
  }

  //  shuffle the order of items in an array in-place
  function shuffleArray(array) {
    return array.sort((a, b) => Math.random() - 0.5);
  }
 // generate the choices
      
function getMultipleChoices(n, correctAnswer, array) {
    let options =[];
    options.push(correctAnswer);
    while(options.length <n){
        let possibility = getRandomElement(array);
        if(!options.includes(possibility)){
        options.push(getRandomElement(array));
    }
}
    return shuffleArray(options);
    
  }

export {
    getRandomElement,
    shuffleArray,
    getMultipleChoices
};