
--------------------------------------------------------- push,pop,shift,unshift ---------------------------------------------------------

const Array = ["shamim","shuvo","rudhro","ratri","namim"]
console.log("TOTAL ARRAY - ",Array);

Array.push("mukta")
console.log("PUSHED ARRAY - ",Array);
//  {PUSHES one Element to the RIGHT}

Array.pop()
console.log("POPPED ARRAY - ",Array);
//  {REMOVES one Element from Right}

Array.unshift("mike")
console.log("UNSHIFTED ARRAY - ",Array);
//  {ADDS one Element at LEFT}

Array.shift()
console.log("SHIFTED ARRAY - ",Array);
// {REMOVES one Element from LEFT}


--------------------------------------------------------- slice,splice ---------------------------------------------------------


let Array = ["xbox controller","Ps5","RTX 4090 Ti","Oddesey","Gaming"]
console.log("Total Array - ",Array);

let holder = Array.slice(2,4)
console.log("SLICED Array -",holder);
// {Shows 2nd and 3rd Element, 4th is forbidden}

------------------------------------------------------------------------------------------------------------------------------------------------------------

let Array = ["xbox controller","Ps5","RTX 4090 Ti","Oddesey","Gaming"]
console.log("Total Array - ",Array);

let holder = Array.splice(2,4)
console.log("SPLICED Array -",holder);
console.log( "After Splice Array - ",Array);
// {shows 2nd 3rd and 4th Element too , but manipulates the ORIGINAL ARRAY}


--------------------------------------------------------- join,concat,spread,flat ---------------------------------------------------------


const Array_1 = ["sam","omen","manmu"]
const Array_2 = ["lad","lexas","king"]

let total_array = Array_1.join(Array_2)
console.log("TOTAL JOINED ARRAY - ",total_array);
console.log(typeof total_array);
// {Bined together but also converted into STRING}

------------------------------------------------------------------------------------------------------------------------------------------------------------

const Array_1 = ["sam","omen","manmu"]
const Array_2 = ["lad","lexas","king"]

let total_array = Array_1.concat(Array_2)
console.log("TOTAL JOINED ARRAY - ",total_array);
console.log(typeof total_array);
// {Joins all the elements together, also doest change the type, also returns NEW ARRAY}

------------------------------------------------------------------------------------------------------------------------------------------------------------

const Array_1 = ["sam","omen","manmu"]
const Array_2 = ["lad","lexas","king"]

let total_array = [...Array_1,...Array_2]
console.log("TOTAL JOINED ARRAY - ",total_array);
console.log(typeof total_array);
// {Joins all the elements together, also doest change the type}


------------------------------------------------------------------------------------------------------------------------------------------------------------

let Array = [1,2,3,[4,5,6],7,[8,9],8]
let holder = Array.flat(Infinity) //infinity is the depth
console.log("Flated ARRAY - ",holder);
// {brings all the elements into a single ARRAY , also returns a new ARRAY}

------------------------------------------------------------------------------------------------------------------------------------------------------------

