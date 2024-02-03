let sum = 0;
for (let i = 1; i <= 20; i++) {
    if (sum > 100) {
        break;
    }
    sum+= i;
}

console.log(sum);