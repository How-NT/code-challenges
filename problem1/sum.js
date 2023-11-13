//  --- challenge 1
const sum_to_n_a = (n) => (n * (n + 1)) / 2;

const sum_to_n_b = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
};

const sum_to_n_c = (n) => {
  const numberArray = Array.from({ length: n }, (_, i) => i + 1);
  return numberArray.reduce((sum, index) => (sum += index), 0);
};
