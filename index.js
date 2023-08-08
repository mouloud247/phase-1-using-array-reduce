const batteryBatches = [4, 5, 3, 4, 4, 6, 5];


const totalBatteries = batteryBatches.reduce(function (accumulator, sum) {

    return sum + accumulator;
}, 0);
// Code your solution here



console.log(totalBatteries);