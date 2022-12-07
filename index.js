const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// function getTotalAmountForBatteries(batteryBatches) {
//     var totalBatteries = 0;

//     for (const batteries of batteryBatches) {
//         totalBatteries += batteries.batteries;
//     };

//     return totalBatteries;
// }

// console.log(getTotalAmountForBatteries(batteryBatches));

let totalBatteries = batteryBatches.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
});
console.log(totalBatteries);
