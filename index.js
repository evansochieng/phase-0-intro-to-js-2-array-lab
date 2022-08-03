// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

// Append element at the end of the array
function destructivelyAppendCat(name){
    return cats.push(name)
};

// Append element at the start of the array
function destructivelyPrependCat(name){
    return cats.unshift(name)
};

// Remove element at the end of the array
function destructivelyRemoveLastCat(name){
    return cats.pop()
};

// Remove element at the beginning of the array
function destructivelyRemoveFirstCat(name){
    return cats.shift()
};

// Undestructively add element at the end array
function appendCat(name){
    return [...cats, name]
};

// Undestructively add element at the start of the array
function prependCat(name){
    return [name, ...cats]
};

// Undestructively remove last element from the array
function removeLastCat(name){
    return cats.slice(0, -1)
};

// Undestructively remove first element from the array
function removeFirstCat(name){
    return cats.slice(1)
};