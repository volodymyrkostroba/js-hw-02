const logItems = function(arr) {
   for(let i = 0; i < arr.length; i+=1){
    
   const message = `${i+1} - ${arr[i]}`
   console.log(message);
   }
  };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
  
  logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
 