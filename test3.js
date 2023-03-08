function amountOfChocolates(N, M) {
    let count = 1;
    let current = 0;
    while (current !== -1) {
        current = (current + M) % N;
        if (current !== 0) {
            count++;
        } else {
            current = -1;
        }
    }
    return count;
}

console.log(amountOfChocolates(10,4))