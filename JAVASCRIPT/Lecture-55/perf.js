function timeConsumingTask() {
    let sum = 0;
    for (let i = 0; i < 1000000; i++) {
        sum += i;
    }
    return sum;
}

const start = performance.now();
const result = timeConsumingTask();
const end = performance.now();

console.log(`Result: ${result}`);
console.log(`Execution time: ${end - start} milliseconds`);