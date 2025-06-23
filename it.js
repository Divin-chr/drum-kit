function productArray(numbers){
  //your code here
  
let prod = [];
  let product = 1;
  
  for (let i=0; i<= numbers.length; i++){
    product = product*numbers[i];
  
  }
  
  for (let i=0; i<= numbers.length; i++){
      prod = prod + product/numbers[i];
  }
  
  return prod;
  
}