function groupBy(items, property) {
    let result = {}
    for (let i = 0; i < items.length; i++) {
        if (result[items[i][property]] === undefined) {
            result[items[i][property]] = [];
        }
        result[items[i][property]].push(items[i]);
    };
    return result
}

//ทำไม่ทัน T___T

let result1 = groupBy([
    { name: "Apple", type: "fruit" },
    { name: "Broccoli", type: "vegetable" },
    { name: "Banana", type: "fruit" }
], "type");

console.log(result1);
// {
//   fruit: [
//     { name: "Apple", type: "fruit" },
//     { name: "Banana", type: "fruit" }
//   ],
//   vegetable: [
//     { name: "Broccoli", type: "vegetable" }
//   ]
// }