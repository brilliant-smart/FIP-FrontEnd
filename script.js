/*
I do not quite understand the deliverable. However, From what the learning outcome stated, I did a refresher on:
Es6 features: scope, Let (not var), const, arrow functions (the Fat arrow 😂), array (map, filter, reduce, forEach), and objects

I don't know, but my understanding of the deliverable is to demonstrate the learning outcome of array in the console? Correct me if I am wrong please.

I will use vanilla for all.
*/

/*
the array operations in the learning outcome are:
1 - map
2 - filter
3 - reduce, and
4 - foreach

Let's do the serially
*/
const fruits = ['apple', 'banana', 'mango', 'strawberry', 'cherry', 'blackberry'];
console.log('Fruits in the array are :', fruits);

// Example of map 1
const favouriteFruites = fruits.map(fruit => `I love ${fruit}`);
console.log('How the fruits taste (map):', favouriteFruites);

// Example of map 2
// const fruitColors = fruits.map(fruit => {
//     const colorMap = {
//         apple: 'red',
//         banana: 'yellow',
//         mango: 'orange',
//         strawberry: 'red',
//         cherry: 'dark red',
//         blackberry: 'black',
//     };
//     return `${fruit} is ${colorMap[fruit] || 'color unknown'}`;
// });


//Filter: filter for fruits that starts with letter "b"
const filteredFruit = fruits.filter(fruit => fruit.startsWith('b'));
console.log(`Fruits that starts with letter "b"`, filteredFruit);

//reduce
const fruitList = fruits.reduce((list, fruit) => `${list}, ${fruit}`);
console.log('Fruits are reduced to a single string like this: ', fruitList);

//foreach 1
console.log('Using index and number to log each fruit using for each');
fruits.forEach((fruit, index) => {
    console.log(`Index ${index}: ${fruit}`);
})


//foreach 2
console.log('Another implementation of forEach');
fruits.forEach((fruit, index) => {
    console.log(`Fruit ${index + 1}: ${fruit} is Yummy`);
});
