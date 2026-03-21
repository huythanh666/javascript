function sumPrimes(number){
  let result = 0;
  for(let i = 0; i<= number;i++){
    if(isPrime(i)){
        result += i
    }
  }
  return result
}

function isPrime(n) {
  if (n <= 1) return false; // Số <= 1 không phải số nguyên tố
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false; // Nếu chia hết cho số nào khác, không phải số nguyên tố
  }
  return true;
}