const findLongestWord = function(string) {
    const arr = string.split(' ');
    let word = '';
    for (let i = 0; i < arr.length; i+=1) {
        
        if(arr[i].length > word.length){
            word = arr[i];
        }
        
    }
    return word;
  };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
  
  console.log(findLongestWord('Google do a roll')); // 'Google'
  
  console.log(findLongestWord('May the force be with you')); // 'force'

