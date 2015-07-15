//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
===================================================================
    to make code clear and to refere to a specific key in the Object.
====================================================================

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
===================================================================
        capitalize the Object nanme ----- to differenciate a regular function from a constructor function.
        each of the parameters is assigned a variable---------- so the parameter values will be filled by the calling code.
        implicit binding.
        
By default, this refers to the global object.
When a function is called as a property on a parent object, this refers to the parent object inside that function.
When a function is called with the new operator, this refers to the newly created object inside that function.
When a function is called using call or apply, this refers to the first argument passed to call or apply. If the first argument is null or not an object, this refers to the global object.
====================================================================
  // 3) What is the difference between call and apply?

      //Answer
==================================================================
The apply method takes two arguments: an object to set this to, and an (optional) array of arguments to pass to the function:
The call method works exactly the same as apply, but you pass the arguments individually rather than in an array:
=====================================================================


  // 4) What does .bind do?

      //Answer
==============================================================
explicit, returns new fn

The bind() function creates a new function (a bound function) with the same function body (internal call property in ECMAScript 5 terms) as the function it is being called on (the bound function's target function) 
with the this value bound to the first argument of bind(),
==============================================================


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
======================================================================
    var user = {
    username: "samB",
    email: "sammybonfanti@gmail.com",
    getUsername: function() {
        return this.username;
    }
}
=====================================================================
//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
====================================================================
        console.log(user.getUsername());
=====================================================================

//Next Problem


// Write the function definitions which will make the following function invocations function properly.

  //Function Invocations Here
======================================================================
    function Car(make, model, year) {
      this.make = make;
      this.model= model;
      this.year = year;
  	  this.move = 0;
      this.moveCar = function() {
          console.log(this.move + 10);
          return this.type;
      }
}

var prius = Car('Toyota', 'Prius', 2011);
var mustang = Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments prius' move property by 10. Returns the new move property.
===========================================================================

//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the write object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

  //Code Here
===========================================================================
function Car(make, model, year) {
      this.make = make;
      this.model= model;
      this.year = year;
  	  this.move = 0;
      this.moveCar = function() {
          console.log(this.move + 10);
          return this.move;
        }
    }

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

var getYear = function(){
  console.log(this.year);
};
var yearFunc = getYear.bind(prius);
var yearFunc2 = getYear.bind(mustang);

prius.moveCar(); 
mustang.moveCar();
yearFunc();
yearFunc2();
==========================================================================


//New Problem



var user = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getUsername = function(){
  console.log(this.username);
};

setTimeout(getUsername, 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?

  //Answer Here
========================================================
    iliketurtle
========================================================
//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here
=============================================================================
    In JavaScript this always refers to the “owner” of the function we're executing, or rather, to the object that a function is a method of. 
==============================================================================
//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.
=====================================================================================
        var user = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getUsername = function(){
  console.log(this.username);
};

setTimeout(getUsername.bind(user)(), 5000);
======================================================================================
