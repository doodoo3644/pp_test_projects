// chapter 6 - arrays
document.writeln('<h1>CHAPTER 6 - ARRAYs</h1>');

// Arrays have their own literal format. Arrays also have a much more 
// useful set of built-in methods, described in chapter 8

// Array is an object in JavaScript.

/* *********************************************** */
/*
/*  Array Literal 
/*
/* *********************************************** */
// Array literals provide a very convenient notation for creating new array values.

var empty   = [];
var numbers = [ 'zero', 'one', 'two', 'three',
                'four', 'five', 'six', 'seven'
              ];
              
              
console.debug('----ARRAY LITERALS----');
console.log( typeof empty );        // object
console.log( numbers[2] );          // two
console.log( numbers.length );      // 8
console.log( numbers );             // 8

// An array inherits from 'Array.prototype'.
// It inerits a larger set of usefil method than 'Object.prototype'.

// JavaScript allows an array to contain any mixture of values:

var misc = [ 'string', 98.6, true, false, null, undefined, ['nested', 'array'], {object: true}, NaN, Infinity ];
            
console.log('length of misc: ' + misc.length);
console.log( misc );
               




/* *********************************************** */
/*
/*  Length
/*
/* *********************************************** */
// Every array has a 'length' property. Unlike most other languages, if you store an element with a subscript that 
// is greater than or equal to the current 'length', the 'length' will increase to contain the new element.
// There is no array bound error.

// The 'length' propert is the leargest integer property name in the array plus one. 
// This is not necessary the number of properies in the array:

var myArray    = [];
myArray.length;            // 0
console.log('length of myArray: ' + myArray.length);


myArray[1000000]  = true;console.log(myArray[2]); 
myArray.length             // 1000001
// myArray contains only one property.

console.log('length of myArray: ' + myArray.length);

for (var doo in myArray) {
   console.log('doo->' + doo);      // show only doo->1000000
}
//for (var i = 0; i < myArray.length; i++) {
//   console.log(i + '->' + myArray[i]);      // show all of the array elements
//}
console.log(myArray[2]);    // undefined

// The [] postfix subscript operator converts its expression to a string using the expression's 'toString' method
// if it has one. That string will be used as the property name.

// The 'length' can be set explicitly. 
// Making the 'length' larger does not allocate more space of the array.
// Making the 'length' smaller will cause all properties with subscript that is greater than or equal to the new 'length' to be deleted.

numbers.length = 3;           // numbers now is ['zero', 'one', 'two']
console.log( numbers );

// A new element can be appended to the end of an array by assigning to the array's current 'length':

numbers[numbers.length] = 'shi';    // numbers now is ['zero', 'one', 'two', 'shi']
console.log( numbers );

// We can also use 'push' method to accomplish the same:

numbers.push('go');                // numbers now is ['zero', 'one', 'two', 'shi'. 'go']
console.log( numbers );




/* *********************************************** */
/*
/*  Delete
/*
/* *********************************************** */
// Since arrays are really objects, the 'delete' operator can be use to remove elements from an array:

delete numbers[2];            // numbers is ['zero', 'one', undefined, 'shi'. 'go']
console.log( numbers );

