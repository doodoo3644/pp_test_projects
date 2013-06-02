// chapter 3 - objects
document.writeln('<h1>CHAPTER 3 - OBJECTs</h1>');


// my note:  JAvaScript object is like 'hash' in Perl
//           Objects are collections of name/value pairs having a hidden link to a prototype object.


var empty_object  = {};

var stooge  = {
   "first-name": "Jerome",
   "last-name" : "Howard"
};

document.writeln( "-->" + stooge["last-name"] + "<--");

// document.writeln( "-->" + stooge.last-name + "<--");    //<-- cannot do this, because '-' (dash is not a name literal (should use '_' (underscore instead).


var flight  = {
   airline     :  "Oceanic",
   number      :  815,
   departure   :  {
      IATA  : "SYD",
      time  : "2004-09-22 14:55",
      city  : "Sydney"
   },
   arrival     :  {
      ISTA  : "LAX",
      time  : "2004-09-23 10-42",
      city  : "Los Angeles"
   }  
};


document.writeln( "-->" +    flight["departure"]["IATA"]    + "<--");

document.writeln( "-->" +    flight.departure.IATA    + "<--");


// To see an object, you can use:
  // Method 1

var output = '';
for (property in flight) {
   output += property + ': ' + flight[property]+'; ';
}
alert(output);

   // Method 2
console.log("below is 'flight' object:");  
console.log(flight)        // console.log(object)

console.log("below is 'flight.departure' object:");
console.log(flight.departure)


/* *********************************************** */
/*
|| operator can be used to fill in default values

*/

var status  = flight.status || "unknown";

document.writeln( "Flight Status -->" +    status    + "<--");





/* *********************************************** */
/*
Attempt to retrieve values from 'undefined' will thow a 
'TypeError' exception. This can be guarded against with the && operator.
*/
console.log("");
console.log( "flight.equipment -->" +  flight.equipment    + "<--");                //undefined  (see console.log)
//console.log( "flight.equipment.model -->" +  flight.equipment.model    + "<--");    //throw 'TypeError' 

var test1   = flight.equipment && flight.equipment.model;

console.log( "flight.equipment && flight.equipment.model -->" +  test1    + "<--");    //undefined






/* *********************************************** */
/*
/*  UPDATE VALUE IN OBJECT 
/*
/* *********************************************** */

document.writeln('<hr/>');
document.writeln('<h4>Update value in object</h4>');

stooge['middle-name']   = 'Lester';
stooge.nickname   = 'Curly';

var output = '';
for (property in stooge) {
   output += property + ': ' + stooge[property]+'; ';
}
document.writeln(output);


flight.equipment  = {
   model:   'Boeing 777'
};
flight.status     = 'overdue';

console.log("");
console.log("UPDATE VALUE -- below is 'flight' object: ");
console.log(flight);




/* *********************************************** */
/*
/*  Referencing objects
/* 
/*  Objects are passed around by reference. They are never copied.
/* *********************************************** */
document.writeln('<hr/>');
document.writeln('<h4>Referencing objects</h4>');


var x = stooge;
x.nickname  = 'Doodoo';
var nick    = stooge.nickname;
   // nick 'Doodoo' because x and stooge
   // are references to the same object.
   
document.writeln('nick-->' + nick);
document.writeln('stooge.nickname-->' + stooge.nickname);
document.writeln('x.nickname-->' + x.nickname);


/* *********************************************** */
/*
/*  OBJECT PROTOTYPE or PROTOTYPE OBJECT
/*
/* Every object is linked to a protoype obeject (Object.prototype <-- come as standard with JavaScript)
/* *********************************************** */
// When you make a new object, you can select the object that should be its prototype.
// You should use 'create' method to create a new object that uses an old object as its prototype.

document.writeln('<hr/>');
document.writeln('<h4 style="color:orange">Prototype object</h4>');

if (typeof Object.create !== 'function') {
   Object.create  = function (o) {
      var F = function () {};
      F.prototype = o;
      return new F();
   };
}
var another_stooge   = Object.create(stooge);      //<-- define 'another_stooge' object based on 'stooge' object (its prototype)

console.log("");
console.log("below is 'another_stooge' object:");
console.log(another_stooge);


// The prototype link has no effect on updating. When we make change to an object,
// the object's prototype is not touched.
   
another_stooge['first-name']   = 'Harry';
another_stooge['middle-name']   = 'Moses';
another_stooge.nickname = 'Moe';

console.log("");
console.log("below is new 'another_stooge' object:");      // note the original properties are still in __proto__ portion
console.log(another_stooge);
console.log("below is the original another_stooge's prototype object \(stooge\):");
console.log(stooge);

// The protoype link is used only in retrieval. If we try to retrieve a property value from
// an object, an if the object lacks the property name, then JavaScript attempts to retrieve 
// the property value from the prototype object. And if that object is lacking the property,
// then it goes to its prototype, and so on until the process finally bottoms out with 
// 'Object.prototype'. 
// If the desired property exists nowhere in the prototype chain, then the result is the 'undefined' value. 
// This is called 'delegation'.

// The prototype relationship is a dynamic relationship. If we add a new property to a prototype,
// that property will immediately be visible in all of the objects that are based on that prototype.
  
stooge.profession    = 'actor';

console.log("");
console.log("below is 'another_stooge.profession' property after adding 'stooge.profession \(actor\):");
console.log(another_stooge.profession); 





/* *********************************************** */
/*
/*  Reflection of objects
/*
/* *********************************************** */
// It is easy to inspect an object to determine what properties it has by attempting to
// retrieve the properties and examine the values obtained. The 'typeof' operator can be
// very helpful in determining the type of property.
 

console.log('');
console.log('----REFLECTION------');

var fnumber = typeof flight.number;       // number
var fstatus = typeof flight.status;       // string
var farrive = typeof flight.arrival;      // object
var fmanife = typeof flight.manifest;     // undefined
console.log('typeof filight.number  --> ' + fnumber );
console.log('typeof filight.status  --> ' + fstatus );
console.log('typeof filight.arrival --> ' + farrive );
console.log('typeof filight.manifest--> ' + fmanife );

// Some of the property on prototype chain can be 'function':

var ftoString  = typeof flight.toString        // function
var fconstruc  = typeof flight.constructor     // function
console.log("\n" + "Some of the property on prototype chain can be 'function'");
console.log('typeof flight.toString   --> ' + ftoString );
console.log('typeof fiight.constructor--> ' + fconstruc );

// There are two approaches to dealing with these undesired properties:
// 1. have your program look for and reject function values (e.g. use if statement: if (typeof flight.status != 'function') {...}
// 2. use 'hasOwnProperty' method, which returns true if object has a particular property inside it. (Note: 'hasOwnProperty' does not look at the prototype chain)

var checknum   = flight.hasOwnProperty('number')           // true
var checkcons  = flight.hasOwnProperty('constructor')      // false   
console.log("\n" + "Use 'hasOwnProperty' to check a particular property");
console.log('flight.hasOwnProperty(\'number\')      --> ' + checknum );
console.log('flight.hasOwnProperty(\'constructor\') --> ' + checkcons );






/* *********************************************** */
/*
/*  Enumeration on objects
/*
/* *********************************************** */
// The 'for in' statement can loop over all of the property names in an object.
// The enumeration will include all of the properties--including functions and prototype properties that
// you might not be interested in--so it is necessary to filter out the values you don't want. The most
// common filters are the 'hasOwnProperty' method and using 'typeof' to exclude functions:

console.log("\n----ENUMERATION------");

console.log('another_stooge object: ');
console.log(another_stooge);

var name;
for (name in another_stooge) {
   //var prop = typeof another_stooge[name];
   //console.log('typeof another_stooge[' + name + '] -->' + prop);
   
   if (typeof another_stooge[name] !== 'function') {
      console.log(name + ':' + another_stooge[name]);
   }

}





/* *********************************************** */
/*
/*  Delete or remove properties from objects
/*
/* *********************************************** */
// The 'delete' operator can be used to removed a propery from an object.
// It will remove a property from the obkect is it has one.
// It will not touch any of the objects in prototype linkage.
//
// Removing a property from an object may allow a property from the prototype linkage to shine through:

console.log("\n----DELETE or REMOVE PROPERTY------");

console.log(another_stooge);
console.log( another_stooge.nickname);           // Moe

 // Remove nickname from another_stooge, revealing
 // the nickname of the prototype.

delete another_stooge.nickname;

console.log( 'after deleting nickname property:')
console.log( another_stooge.nickname);           // Doodoo






/* *********************************************** */
/*
/*  Global Abatement
/*
/* *********************************************** */
// JavaScript makes it easy to define global variable that can hold all of the assets of
// your application. Unfortunately, global variables weaken the resiliency of the programs 
// and should be avoided.

// One way to minimize the use of global variables is to create a single global variable for your application:

var MYAPP   = {};

// That variable then becomes the container for your application:

MYAPP.stooge   = {
                  "first-name":  "Joe",
                  "last-name":   "Howard" 
                 };

MYAPP.flight   = {
                  airline: "Oceanic",
                  number:  815,
                  departure:  {
                               IATA:   "SYD",
                               time:   "2004-09-22 14:55",
                               city:   "Sydney"
                              },
                  arrival: {
                            IATA:   "LAX",
                            time:   "2004-09-23 10:42",
                            city:   "Los Angeles"
                           }
                  };



console.log("\n----GLOBAL ABATEMENT------");
console.error( MYAPP.stooge["first-name"] );
console.log( MYAPP.flight.departure.city );
console.log( MYAPP.flight.arrival.time );
console.log( typeof MYAPP.flight.arrival.time );      // string



// By reducing your global footprint to a single name, you significantly reduce the 
// chance of bad interactions with other applications, widgets, or libraries. Your 
// programm also becomes easier to read because 'MYAPP.stooge' refers to a top-level
// structure.
//
// Later, we will see ways to use closure for information hiding, which is another
// effective global abatemnent technique.




