//Practice with JavaScript OOP Concepts (20 points)
//Within a new web page, create the following applications. Remember to comment out every application once you’ve finished with that step. Be sure to place all of your JavaScript code within an external script file:
//1.	Create a namespace called Animal. Then, define two sub classes from the namespace, one called Cat and another called Dog.

//var ANIMAL = {}
//ANIMAL.Cat
//ANIMAL.Dog


//2.	Abandon the use of namespaces and start over. Now, create two classes, one called Cat and another called Dog. The Cat class should be created using literal notation and the Dog class should be created using constructor notation.

//var Cat = {}
//function Dog(){}


//3.	Directly underneath, create a new instance of the Dog class.

//var Cat = {}
//function Dog(){}
//var Lab = new Dog();

//4.	Start over and now create a new class using constructor notation called Animal. When a new instance of the Animal class is created, the message “The Animal has been created” should be displayed in the console window.

//function Animal() {
//    window.console.log("the animal has been created");
//}
//var cat = new Animal();


//5.	Now, change the above code so that it accepts a parameter and that value is what should be displayed in the console window. The message should be passed as an argument into the constructor at the moment that the Animal class is instantiated.

//function Animal(meow) {
//    this._meow = meow;
//    window.console.log(this._meow);
//}


//6.	Start over and now create a new class using constructor notation called Animal. Define five properties within your class including type, breed, color, height, and length. These properties will be set in the constructor so you’ll need to pass in parameters into the function’s constructor, set the properties, and then pass in the actual arguments during the object’s instantiation. 
//
//var Animal = function(type, breed, color, height, length){
//    this._type = type;
//    this._breed = breed;
//    this._color = color;
//    this._height = height;
//    this._length = length;
//}



//7.	Use a for-in loop to loop through and display all of the properties in the Animal class. You should see a total of 5 properties displayed in a list within the console window.

//var Animal = function(type, breed, color, height, length) {
//    this._type = type;
//    this._breed = breed;
//    this._color = color;
//    this._height = height;
//    this._length = length;
//};
//var newAnimal = new Animal();
//for (var property in newAnimal) {
//    window.console.log(property);
//}


//8.	Now, create a public method called speak. Within the speak method you will use a conditional to check the type of Animal being created. If it’s a dog, return “The <color> dog is barking!” If it’s a cat return “The <color> cat is meowing!” instead. Call that method after the Animal class has been instantiated.

//var Animal = function (type, breed, color, height, length) {
//    this._type = type;
//    this._breed = breed;
//    this._color = color;
//    this._height = height;
//    this._length = length;
//};
//Animal.prototype.speak = function () {
//    if (this._type == "cat") {
//        return "the" + " " + this._color + " " + "cat is meowing!"; 
//    } else if (this._type == "dog") {
//        return "the" + " " + this._color + " " + "dog is barking!"; 
//    }
//     
//};
//var cat = new Animal("cat", "tabby", "black", "small", "small");
//window.console.log(cat.speak());

//9.	Now, convert all of your properties to private properties. Then, create a private method called checkType(). In this method you will check to see what the type is. If it’s dog, return dog, otherwise, return cat. Then, create a public method called speak that returns the value of the checkType() method. The console window should now display “The <animal type> has made a noise!”

//var Animal = function (type, breed, color, height, length) {
//    var _type = type;
//    var _breed = breed;
//    var _color = color;
//    var _height = height;
//    var _length = length;
//    var checkType = function () {
//        window.console.log("the" + " " + this._type + " " + "has made a noise!");
//    };
//    this.speak = function () {
//        checkType();
//    };
//};
//var cat = new Animal("cat", "tabby", "black", "small", "small");
//cat.speak();



//10.	Create your own String method called findWords() that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of times that word was found in the paragraph.


//function findWords (str, word) {
//    var str = "";
//    var word = "";
//    String.prototype.contains = function() {
//        var word = 
//        return this.indexOf(word)
//    };
//window.console.log(findWords("the quick brown fox", "the"));


//The Recipe Card (15 points)	
//Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings). Your object should have a publically available method that when called, will log out the recipe within the console so that the recipe information looks like this:
//Guacamole
//Serves: 4
//Ingredients: 
//- 3 Avocados
//- 1 Lime
//- 1 Teaspoon Salt
//- 1/2 Cup Onion
//- 3 Tablespoons Cilantro
//- 2 Diced Tomatoes
//- 1 Teaspoon Garlic
//- 1 Pinch Ground Pepper

//var recipe = [{
//  name: "guacamole",
//  serves: 4,
//  ingredients: [
//      {quantity : 3, unit: "avocados"}, 
//      {quantity: 1, unit: "lime" }, 
//      {quantity: 1, unit: "teaspoon salt"},
//      {quantity: .5, unit: "onion" }, 
//      {quantity: 3, unit: "cilantro"},
//      {quantity: 2, unit: "diced tomatoes"}, 
//      {quantity: 1, unit: "garlic"},
//      {quantity: 1, unit: "ground pepper"}
//      ]
//    recipe = function() {
//    for (var i = 0; i < recipe.ingredients.length; i++){
//    window.console.log(recipe.ingredients[i] + name + serves);
//};
//};
//}];





//The Reading List (15 points)
//Keep track of which books you read and which books you want to read! Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet). Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien". Then, use a conditional to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.' Make sure your object contains at least 5 books.

//var books = [
//    {title: "game of thrones",
//     author: "G Martin",
//     alreadyRead: true
//    },
//    {title: "clash of kings",
//     author: "G Martin",
//     alreadyRead: true
//    },
//    {title: "storm of swords",
//     author: "G Martin",
//     alreadyRead: false
//    },
//    {title: "feast for crows",
//     author: "G Martin",
//     alreadyRead: false
//    },
//    {title: "dance with dragons",
//     author: "G Martin",
//     alreadyRead: false
//    }
//];
//    for (var i = 0; i < books.length; i++) {
//        var book = books [i];
//        var bookInfo = book.title + book.author;
//        if (book.alreadyRead) {
//            window.console.log("already read" + bookInfo);
//        } else {
//            window.console.log("need to read" + bookInfo);
//        }
//    }
//

