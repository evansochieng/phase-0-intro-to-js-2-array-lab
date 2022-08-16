// Phase 0
// // Write your solution here!
// const cats = ["Milo", "Otis", "Garfield"];

// // Append element at the end of the array
// function destructivelyAppendCat(name){
//     return cats.push(name)
// };

// // Append element at the start of the array
// function destructivelyPrependCat(name){
//     return cats.unshift(name)
// };

// // Remove element at the end of the array
// function destructivelyRemoveLastCat(name){
//     return cats.pop()
// };

// // Remove element at the beginning of the array
// function destructivelyRemoveFirstCat(name){
//     return cats.shift()
// };

// // Undestructively add element at the end array
// function appendCat(name){
//     return [...cats, name]
// };

// // Undestructively add element at the start of the array
// function prependCat(name){
//     return [name, ...cats]
// };

// // Undestructively remove last element from the array
// function removeLastCat(name){
//     return cats.slice(0, -1)
// };

// // Undestructively remove first element from the array
// function removeFirstCat(name){
//     return cats.slice(1)
// };


// Phase 1
const cats = ["Milo", "Otis", "Garfield"];

// Destructively append cat at the end of array
//destructivelyAppendCat(name)
function destructivelyAppendCat(cat) {
    return cats.push(cat);
};

// destructivelyPrependCat(name)
function destructivelyPrependCat(cat) {
    return cats.unshift(cat);
};

// destructivelyRemoveLastCat()
function destructivelyRemoveLastCat(){
    return cats.pop();
};

// destructivelyRemoveFirstCat()
function destructivelyRemoveFirstCat(){
    return cats.shift();
};

// appendCat(name)
function appendCat(cat){
    return [...cats, cat];
};

// prependCat(name)
function prependCat(cat){
    return [cat, ...cats];
};

// removeLastCat()
function removeLastCat(){
    return cats.slice(0, -1);
};

// removeFirstCat()
function removeFirstCat(){
    return cats.slice(1);
};