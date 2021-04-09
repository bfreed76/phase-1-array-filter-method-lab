// Code your solution here

let findMatching = (arr, name) => {
    const value = arr.filter((full) => {return full.toLowerCase() === name.toLowerCase()})
    console.log(value); 
    return value;
};

let fuzzyMatch = (arr, name) => {
    const value = arr.filter((firstTwo) => {return firstTwo.slice(0,2) === name}) 
    console.log(value);
    return value;
}

let matchName = (arr, name) => {
    const value = arr.filter((element) => {return element.name === name})
    console.log(value[0]["hometown"]);
    return value;
}
