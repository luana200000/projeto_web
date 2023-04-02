
// Bubble Sort

function bubbleSort(array) {
  let length = array.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

let array = [5, 3, 8, 1, 2];
console.log(bubbleSort(array));


// Fatorial

function fatorial(n) {
  if (n == 0) {
    return 1;
  }
  return n * fatorial(n - 1);
}

let n = 5;
console.log(fatorial(n));

// Fibonacci

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

let n = 10;
for (let i = 0; i < n; i++) {
  console.log(fibonacci(i));
}

  // Verificar se um número é primo
  
  function isPrime(n) {
    if (n <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {
        return false;
      }
    }
    return true;
  }
  
  let n = 17;
  console.log(isPrime(n));
     
    //Verificar se um número é primo

  const isPrime = (num) => {
    for (let i = 2; i < num; i++)
      if (num % i === 0) {
        return false;
      }
    return num > 1;
  };

  // Inverter uma string

  function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  
  let str = "Hello World!";
  console.log(reverseString(str));
  
    //Contar o número de palavras em uma string 

    function countWords(str) {
      let count = 0;
      let words = str.split(" ");
      for (let i = 0; i < words.length; i++) {
        if (words[i] != "") {
          count++;
        }
      }
      return count;
    }
    
    let str = "The quick brown fox jumps over the lazy dog.";
    console.log(countWords(str));

    //Calcular média 

    function average(numbers) {
      let sum = 0;
      for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
      }
      return sum / numbers.length;
    }
    
    let numbers = [2, 4, 6, 8];
    console.log(average(numbers));

       //Encontrar a palavra mais longa 

       function longestWord(str) {
        let words = str.split(" ");
        let longest = "";
        for (let i = 0; i < words.length; i++) {
          if (words[i].length > longest.length) {
            longest = words[i];
          }
        }
        return longest;
      }
      
      let str = "The quick brown fox jumps over the lazy dog.";
      console.log(longestWord(str));

      //Somar todos os números em uma matriz 

      function sumMatrix(matrix) {
        let sum = 0;
        for (let i = 0; i < matrix.length; i++) {
          for (let j = 0; j < matrix[i].length; j++) {
            sum += matrix[i][j];
          }
        }
        return

//Calcular o fatorial de um numero usando recursao - Um algoritmo que calcula o fatorial de um numero fornecido pelo usuario usando recursao.

function fatorial(n) {
  if (n == 0) {
    return 1;
  }
  return n * fatorial(n - 1);
}

let n = 5;
console.log(fatorial(n));