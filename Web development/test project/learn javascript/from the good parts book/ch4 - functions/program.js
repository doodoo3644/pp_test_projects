// chapter 4 - functions
document.writeln('<h1>CHAPTER 4 - FUNCTIONs</h1>');


// my note:  Function is like 'subroutine' in Perl

/*
Functions in JavaScript are objects. 
Objects are collections of name/value pairs having a hidden link to a prototype object.

Objects produced from object literals are linked to <-- 'Object.prototype'
Function objects are lnked to <-- 'Function.prototype' (which is itself linked to <-- 'Object.prototype')

Since functions are objects, they can be used like any other value. Functions can be sotred in variables, objects, and arrays.
Functions can be passed as arguments to functions, and functions can be returend from functions. Since functions are 
objects, functions can have methods.

e.g. function syntax

function var func_name (a, b, c) {
   // code here
   return d;
}


note: a,b,c are parameters of the function



*/
/* *********************************************** */
/*
/*  Function Literal 
/*
/* *********************************************** */

//Function objects are created with function literals:

  // Create a variable called add and store a function
  // in it that adds two numbers.

var add  = function (a, b) {
               return a + b ;
           }



console.warn("\n----FUNCTION LITERAL------");
add(3, 5);
document.write( add(3,6) );
console.log( add(3,6) );
console.log( typeof add );
 
 
 
/* *********************************************** */
/*
/*  Invocation 
/*
/* *********************************************** */
// In addition to the declared parameters, every function receives two additional parameters:  'this' and 'arguments'.
// The 'this' parameter is very important and its value is determined by the 'invocation pattern'.
//
// There are 4 patterns of invocation in Javascript:
//   1. method invocation pattern
//   2. function invcation pattern
//   3. constructor invocation pattern
//   4. apply invocation pattern
//
// The patterns differ in how the bonus parameter 'this' is initialized.
//   
// The 'invocation operator' is a pair of round brackets (), that can contain zero or more expressions separated by a comma.
// Even though there is only one invocation operator (), there are 4 invocation patterns. Each pattern differs in how the 
// 'this' parameter is initialized.


   /* *********************************************** */
   /*  1. Method Invocation 
   /* *********************************************** */
console.debug("\n----1. Method Invocation------");

var obj  = { 
            value: 0,
            increment:  function (inc) {
                           this.value += 1;
                        }
            };

obj.increment();      // Method invocation

console.log( obj );
console.log( obj.increment() );
console.log( obj.value);

// Method invocation is identified when a function is preceded by 'obj.', where 'obj' is the name of some object.
// JavaScript will set the 'this' parameter to the object where the method was invoked on. 
// In the example above, 'this' would be set to 'obj.' JavaScript binds 'this' at executon (also known as 'late binding').



   /* *********************************************** */
   /*  2. Function Invocation 
   /* *********************************************** */
console.debug("\n----2. Function Invocation------");

// When a function is not the property of an object, then it is invoked as a function:

   var sum  = add(3,4);   // sum is 7
   
   console.log( 'sum is ', sum );

// When a function is invoked with this pattern, 'this' is bound to the global object. This was a mistake in the design of
// the language. Blindly binding 'this' to the global object can destroy its current context. It is noticable when using
// an 'inner function' within a method function. An example should explain things better:

var value   = 500;      // Global variable
var obj     = {
               value:   0,
               increment:  function() {
                                       this.value++;
                                       var innerFunction = function() {
                                                                        alert(this.value);   
                                                                      }
                                       innerFunction();     // Function invocation pattern
                                      
                                      }
               };
obj.increment();     // Method invocation pattern

// What do you think will be printed to screen? For those that answered 1, you are wrong.
// The real answer is 500. Note that 'innerFunction' is called using the function invocation pattern, 
// therefore 'this' is set to the global object. The result is that 'innerFunction' will not have 'this' 
// set to current object.

// A consequence of this error is that a method cannot employ an inner function to help it do its work because
// the inner funnction does not share the method's access to the object as its 'this' is bound to the wrong value.

// The workaround is to assign a variable (by convention, it is named 'that') to 'this' inside the function (aside:
// This works because functions in JavaScript are 'closure'):

var value   = 500;      // Global variable
var obj     = {
               value:   0,
               increment:  function() {
                                       var that = this;      // add this line
                                       this.value++;
                                       var innerFunction = function() {
                                                                        alert(that.value);    // change to 'that.value'
                                                                      }
                                       innerFunction();     // Function invocation pattern
                                      
                                      }
               };
obj.increment();     // Method invocation pattern




   /* *********************************************** */
   /*  3. Constructor Invocation 
   /* *********************************************** */
console.debug("\n----3. Constructor Invocation------");

// Warning: This is another JavaScript peculiarity!
// JavaScript is not a classical object oriented language. Instead, it is a prototypal object oriented language, but 
// the creator of JavaScript felt that people with classical object orientation experience (the vast majority) may be unhappy 
// with a purely prototype approach. This resulted in JavaScript being unsure of its protoypal nature and the worst thing happened:
// It mixed classical object orientation syntax with its prototypal nature. The result: A mess!
//
// In classical object orientation, an object is an instantiation of a class. In C++ and Java, this instantiation is 
// performed by using the 'new' operator, This seems to be the inspiration behind the constructor invocation pattern..
//
// The constructor invocation pattern involves putting the 'new' operator just before the function is invoked. For example:

var Cheese  = function(type) {
                              var cheeseType = "Your type is " + type;
                              return cheeseType;
                             };
                             
cheddar  = new Cheese("cheddar");     // new object returned, not the type

doodoo   = Cheese("doodoo");

console.log(Cheese);
console.log(cheddar);
console.log(doodoo);

// Even though 'Cheese' is a function object, we have created a new object by invoking the function with 'new' in front of it.
// The 'this' parameter will be set to the newly created object and the 'return' operator of the function will have its 
// behavior altered. Regarding the behaviour of the 'return' operator in constructor invocation, there are 2 cases:

//    1. If the function returns a simple type (number, string, boolean, null of undefined), the return will be ignored and 
//       instead 'this' will be returned (which is set to the new object).
//    2. If the function returns an instance of 'object' (anything other that a simple type), then that object will be returned 
//       instead of returning 'this'. This pattern is not used that often, but it may have utility when used with 'closure'.

// For example:

var obj  = {
            data: "Hello World"
           };
           
var Func1   = function() {
                           return obj;
                         }

var Func2   = function() {
                           return "I am a simple type";
                         }   

var f1   = new Func1();       // f1 is set to obj
var f2   = new Func2();       // f2 is set to a new object

console.log('The following is f1 ');
console.log(f1);
console.log('The following is f2 ');
console.log(f2);
console.log(typeof f2);       //object

// We should ignore the constructor invocation pattern, and just user 'object literals' to make objects, except that
// the makers of JavaScript have enables a key feature of their language by using this pattern:  Object creation with
// an arbitrary prototype line. The pattern is unintuitive also potentially problematic. There is a remedy which was
// championed by Douglas Crockford: Augment 'Object' with a create method that accomplishes what the constructor 
// invocation pattern tries to do. I am happy to note that as of JavaScript 1.8.5, 'Object.create' is a reality and 
// can be used. Due to legacy, the constructor invocation is stll used oftern, and for backward compatibility, will
// crop up quite frequently.
//
// Note from http://doctrina.org/Javascript-Function-Invocation-Patterns.html




   /* *********************************************** */
   /*  4. Apply Invocation 
   /* *********************************************** */
console.debug("\n----4. Apply Invocation------");
 
// The apply pattern is not as badly thought out as the two preceding patterns. The 'apply' method allows manual
// invocation of a function with a means to pass the function an array of parameters and explicitly set the 'this'
// parameter. Because functions are first class citizens, they are also objects and hence can have methods (functions)
// run on it. In fact, every function is linked to 'Function.prototype', and so methods can very eaily be augmented 
// to any function. The 'apply' method is just an augmentation to every function as it is defined on 'Function.prototype'.
//
// The 'apple' method takes 2 parameters: 
//    1. first parameter is an object to bind the 'this' parameter to.
//    2. second parameter is an array which mapped to the parameters.
   
var add  = function(num1, num2) {
                                 return num1 + num2;
                                };
var array   = [3,4];
var sum  = add.apply(null, array);    //sum is 7


// In the example above, 'this' is bound to 'null' and 'array' is bound to 'num1' and 'num2'. More interesting things 
// can be done with the first parameter:

var obj  = {
            data: 'Hello World'
           };
           
var displayData   = function() {
                                 console.log(this.data);
                               };

displayData();             //undefined
displayData.apply(obj);    //Hello World

// The example above uses 'apply' to bind 'this' to 'obj'. This results in being able to produce a value for 'this.data'.
// Being able to expicitly assign a value to 'this' is where the real value of apply invocation comes about. Without this
// feature, we might as well use () to invoke functions.

// JavaScript also has another invoker called 'call', that is identical to 'apply' except that instead of taking an array 
// of parameters, it takes an argument list. If JavaScript would implement function overriding, I think that 'call' would 
// be an overridden variant of 'apply'. Therefore one talks about 'apply' and 'call' in the same vein.







/* *********************************************** */
/*
/*  Arguments
/*
/* *********************************************** */
// 'arguments' a bonus parameter (besides 'this') that is available to functions when they are invoked 
// is the 'arguments' array. It gives the function access to all of the arguments that were supplied with 
// the invocation, including excess arguments that were not assigned to parameters. This makes it possible 
// to write functions that take an unspecified number of parameters.
// 
// See example in page 31
// 
// Because of a design error, 'arguments' is note really an array. It is an array-like object.
// 'arguments' has a length property, but it lacks all of the array methods. 




/* *********************************************** */
/*
/*  Return
/*
/* *********************************************** */
// The 'return' statement can be used to cause the function to return early. When 'return' is executed, 
// the function returns immediately without executing the reamining statements.
// 
// A function always returns a value. If the 'return' value is not specified, then 'undefined' is returned.
// 
// If the function was invoked with the 'new' prefix and the return value is not an object, then 'this' (the new object)
// is returned instead (see Constructor Invocation).





/* *********************************************** */
/*
/*  Exception
/*
/* *********************************************** */
// JavaScript provides an exception handling mechanism.
// Exceptions are unusual (but not completely unexpected) mishaps that interfere with the normal flow of a program.
// When such a mishap is detected, your program should throw an exception:

var add  = function (a, b) {
                            if (typeof a !== 'number' || typeof b !== 'number') {
                              throw {
                                 name: 'TypeError',
                                 message: 'add needs numbers'
                              };    
                            }
                            return a + b;
                           }

// The 'throw' statement interrupts execution of the function. It should be given an exception object containing a 'name' 
// property that identifies the type of the exception, and a descriptive 'message' property. You can also add other properties.
// 
// The exception object will be delivered to the 'catch' clause of a 'try' statement:

   // Make a try_it function that calls the new add
   // function incorrectly

var try_it  = function() {
                           try {
                              add( 6, "seven");  
                           } catch (e) {                 // e is an exception object that was thrown from 'try' block on 'add' function
                              document.writeln( e.name + ': ' + e.message );  
                           }
                         }   
                         
document.writeln( '<p style="color:red">Exception</p>' );  
try_it();


// if an exception is thrown within a 'try' block, control will go to its 'catch' clause.
// 
// A 'try' statement has a single 'catch' block that will catch all exceptions. 
// If your handling depends on the type of the exception, then the exception handler will have to
// inspect the 'name' to determine the type of the exception.






/* *********************************************** */
/*
/*  Augmenting Types
/*
/* *********************************************** */
// See page 32 and 33




/* *********************************************** */
/*
/*  Recursion
/*
/* *********************************************** */
// A 'recursive' function is a function that calls itself, either directly or indirectly.
// See page 34 and 35




/* *********************************************** */
/*
/*  Scope
/*
/* *********************************************** */
// 'Scope' is a programming language controls the visibility and lifetime of variables and parameters.
// This is an important service to the programmer because it reduces naming collisions and provides 
// automatic memory management:

var foo  = function() {
                        var a = 3, b =5;
                        
                        var bar  = function() {
                                                var b = 7, c = 11;
                                                // At this point, a is 3, b is 7 and c is 11
                                                console.log(a, b, c);
                                                
                                                
                                                a += b + c;          // or read --> a = a+b+c
                                                // At this point, a is 21, b is 7 and c is 11
                                                console.log(a, b, c);
                                                
                                              };
                                             
                        // At this point, a is 3, b is 5 and c is not defined.
                        console.log(a, b);
                                                
                        bar();
                        // At this point, a is 21, b is 5
                       console.log(a, b);
                                                
   
   
                       };

foo();

// Most languages with C syntax have block scope. All variables defined in a block (a list of statements 
// wrapped with curly braces) are not visible from outside of the block. The variables defined in a block 
// can be released when execution of the block is finished. This is a good thing.
//
// Unfortunately, JavaScript does not have block scope even though its bloack syntax suggests that it does.
// This confusion can be a source of errors.
//
// JavaScript does have function scope. That means that the parameters and variables defined in a function 
// are not visible outside of the function, and that a variable defined anywhere within a function is visible 
// everywhere within the function.

// In many modern languages, it is recommended that variables be declared as late as possible, at the first
// point of use. That turns out to be bad advice for JavaScript because it lacks block scope. So instead, it
// is best to declare all of the variables used in a function at the top of the function body.





/* *********************************************** */
/*
/*  Closure
/*
/* *********************************************** */
document.writeln( '<p style="color:green">Closure</p>' );

var quo  = function (status) {
                              return {
                                 get_status: function () {
                                                            return status;
                                                         }
                              };
                             };
   
   //Make an instance of quo.
var myQuo   = quo("amazed");

document.writeln( myQuo.get_status() );
console.log( myQuo );

// The 'quo' function is designed to be used without the 'new' prefix, so the name is not capitalized.
// When we call 'quo', it returns a new object containing a 'get_status' method. A reference to that object 
// is stored in 'myQuo'. The 'get_status' methid still has privileged access to quo's status property even
// though 'quo' has already returned.
// 'get_status' does not have access to a copy of the parameter; it has access to the parameter itself. 
// This is possible because the function has access to the context in which it was created. This is called 'closure'

// Let's look at a more useful example:

   // Define a function that sets a DOM node's color
   // to yellow and then fades it to white.
   
var fade = function (node) {
                              var level = 1;
                              var step  = function () {
                                                         var hex  = level.toString(16);
                                                         
                                                         node.style.backgroundColor = '#FFFF' + hex + hex;
                                                         if (level < 15) {
                                                            console.log('fade level: ' + level + ' hex: ' + hex);
                                                            level +=1;
                                                            setTimeout(step, 100);   //<-- inner step function call
                                                            
                                                         }
                                                      };
                                                      console.log('here ' + level);
                                                      setTimeout(step, 100);
                           };

fade(document.body);

// It is important to understand that the inner function had access to the actual variables of the outer functions
// and not copies in order to avoid the following problem.

// You also should avoid creating functions within a loop. It can be wasteful computationally, and it can cause
// confusion.




/* *********************************************** */
/*
/*  Callbacks
/*
/* *********************************************** */
// Functions can make it easier to deal with discontinueous events. For example, suppose there is a sequence that
// begins with a user interaction, making a request of server, and finally displaying the server's response.
// The naive way to write that would be:
/*
request  = prepare_the_request();
response = send_request_synchronously(request);
display(response);
*/

// The problem with this approach is that a synchronous request over the network will leave the client in a frozen state, 
// if the the network or the server is slow.
// The better approach is to make an asynchronous request, providing a callback function that will be invoked when
// the server's response is received. An asynchronous function returns immediately, so the client isn't blocked:
/*
request  = prepare_the_request();
send_request_asynchronously( request, function (response) {
                                                            display(response);
                                                          } 
                           );
*/
// We pass a function parameter to the send_request_asynchronously function that will be called when the response
// is available.




/* *********************************************** */
/*
/*  Module
/*
/* *********************************************** */
// We can use functions and closure to make modules. A module is a function or object that presents an interface but
// that hides its state and implementation. By using functions to produce modules, we can almost comepletely eliminate
// our use of global variables, thereby mitigrating one of JavaScript's worst features.
//
// See more about it on page 40-42





/* *********************************************** */
/*
/*  Cascade
/*
/* *********************************************** */
// Some methods do not have a return value. For example, it is typical for methods that set or change the state of an 
// object to return nothing. If we have those methods return 'this' instead of 'undefined', we can enable 'cascades'.
// In cascade, we can call many methods on the same object in sequence in a single statement. An Ajax library that
// enables cascades would allow us to write in a style like this:
/*
   getElement('myBoxDiv')
         .move(350, 150)
         .width(100)
         .height(100)
         .color('red')
         .border('10 px outset')
         .padding('4px')
         .appendText("Please stand by")
         .on('mousedown', function (m) {
                                          this.startDrag(m, this.getNinth(m));
                                       })
         .on('mousemove', 'drag')
         .on('mouseup', 'stopDrag')
         .later(2000, function () {
                                       this
                                           .color('yellow')
                                           .setHTML("What hath God wraught?")
                                           .slide(400, 40, 200,200);
                                  })
         tip('This box is resizeable');
*/
// In this example, the 'getElement' function produces an object that gives functionality to the DOM element with 
// id="myBoxDiv". The methods allow us to move the element, change its dimensions and styling, and add behavior.
// Each of those methods returns the object, so the result of the invocation can be used for the next invocation.

// Cascading can produce interfaces that are very expressive. IT can help control the tendency to make interfaces 
// that try to do too much at once.





/* *********************************************** */
/*
/*  Curry
/*
/* *********************************************** */
// Functions are values, and we can manipulate function values in iteresating ways. 'Currying' allows us to 
// produce a  new function by combining a function and an argument:
/*

var add1 = add.curry(1);
document.writeln( add1(6) )         // 7

*/
// 'add1' is a function that was created by passing 1 to add's 'curry' method. The 'add1' function adds 1 to its
// argument. JavaScript does not have a 'curry' method, but we can fix that by augmenting 'Function.prototype':

/*

Function.method('curry', function () {
                                       var slice   = Array.prototype.slice;
                                       var args    = slice.apply(arguments);
                                       var that    = this;
                                           
                                       return function () {
                                                            return that.apply(null, args.concat(slice.apply(arguments)));
                                                          };
                                      }
               );   

*/
// The 'curry' method works by creating a closure that holds that original function and the arguments to curry.
// It returns a function that, when invoked, returns the result of calling that original function, passing it all
// of the arguments from the invocation of 'curry' and the current invocation. It uses the 'Array concat' method
// to concatenate the two arrays of arguments together.






/* *********************************************** */
/*
/*  Memoization
/*
/* *********************************************** */
// Functions can use objects to remember the results of previous operations, making it possible to avoid unnecessary 
// works. This optimization is called 'memoization'. JavaScript's objects and arrays are very convenient for this.

// Let's say we want a recursive function to compute Fibonacci numbers. A Fibonacci number  is the sum of the two 
// prvious Fibonacci numbers. The first two are 0 and 1:

//var c = 0;
var fibonacci  = function (n) {
                                 //console.log('number of fibonacci run: ' + c);
                                 //c++;
                                 return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2); 
                              };

for (var i = 0; i <= 10; i += 1) {
   document.writeln('// ' + i + ': ' + fibonacci(i));
}

// This works, but it is doing a lot of unnecessary work. The 'fibonacci' functions is called 453 times.
// We call it 11 times, and it calls itself 442 times in computing values that were probably recently computed.
// If we 'memoize' the function, we can significantly reduce its workload.

// We will keep our memoized results in a 'memo' array that we can hide in a closure. When our function is 
// called, it first looks to see if it already knows the result. If it does, it can immediately return it:

//var c = 0;
var fibonacci2  = (function () {
                                 var memo = [0,1];
                                 var fib  = function (n) {
                                                            var result  = memo[n];
                                                            if (typeof result !== 'number') {
                                                               result   = fib(n - 1) + fib(n - 2); 
                                                               memo[n]  = result;
                                                               //console.log('number of fibonacci run: ' + c);
                                                               //c++;
                                                            }
                                                            return result;
                                                         };
                                                         return fib;
                              }()
                 );
                 
for (var i = 0; i <= 10; i += 1) {
   document.writeln('// ' + i + ': ' + fibonacci2(i));
}


// This function returns the same results, but it is called only 29 times. We called it 11 times.
// It called itself 18 times to obtain the previously memoized results.

// We can generalize this by maing a function that helps us make memoized functions.
// The 'memoizer' function will take an initial 'memo' array and the 'formula' function.
// It returns a recur function that manages the memo store and that calls the 'formula'
// function as needed. We pass the 'recur' function and the function's parameters to the 'formula' 
// function:

var memoizer   = function (memo, formula) {
                                             var recur = function (n) {
                                                                        var result  = memo[n];
                                                                        if(typeof result !== 'number') {
                                                                           result = formula(recur, n);
                                                                           memo[n] = result;
                                                                      }
                                                                      return result;
                                             };
                                             return recur;
                                          };

// We can now define 'fibonacci' with the memoizer, providing the initial 'memo' array and 'formula' function:

var fibonacci3 = memoizer([0,1], function (recur, n) {
                                                         return recur(n - 1) + recur(n - 2);
                                                     }
                         );

// By devising functions that produce other functions, we can significantly reduce the amount of work we have to do.
// For example, to produce a memoizing factorial function, we only need to supply the basic factorial formula:

var factorial  = memoizer([1,1], function(recur, n) {
                                                      return n * recur(n - 1);
                                                    });
                 


// End of chapter 4

















/*
console.log('---- TEST TIMEOUT ----');


function runme () {
      console.error('time out');
   }
      
var timeoutID  = window.setTimeout( runme, 2000);
console.log('timeoutID: ' + timeoutID);


var nnn  = 0;
var intervalID  = window.setInterval( function() {
      console.debug('value of nnn: ' + nnn);
      nnn++;
      if ( nnn == 10 ) {
         console.log('clearing intervalID: ' + intervalID);
         window.clearInterval(intervalID);
      }
   }, 1000);

console.log('intervalID: ' + intervalID);

*/


 