/*HOMEWORK PART 1
CREATE OBJECT ANIMAL WITH 2 PROPERTIES AND 1 METHOD:
name
kind
speak (method)
this method will take one parameter and will print in the console a message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”

Bonus: enter the values from prompt or from HTML inputs
*/

let animal = {
    name: 'German Sheppherd',
    kind: 'DogBreed',
    speak: function (text) {
        return `"${this.name} says: ${text}"`;

    }
};
let finalAnimal = animal.speak("'hey bro!!!'");
console.log(finalAnimal);


/*HOMEWORK PART 2
Write a JavaScript program to display the reading status of some book. The object should have the next properties: title, author, readingStatus and a method that will return info depending on the readingStatus e.g.

Already read 'The Robots of dawn' by Isaac Asimov. (if true)

You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).

BONUS: ENTER THE VALUES FROM PROMPT() OR READ THEM FROM HTML
THANK YOU!
Questions?

*/

let library = [{

    title: 'The Robots of dawn',
    author: 'Isaac Asimov',
    readingStatus: true,
    returnInfo: function () {
        if (this.readingStatus === true)

            return `Already read ${this.title} by ${this.author}`;

        else
            return `You still need to read ${this.title} by ${this.author}`;

    }
},
{
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    readingStatus: false,
    returnInfo: function () {
        if (this.readingStatus === true)

            return `Already read ${this.title} by ${this.author}`;

        else
            return `You still need to read ${this.title} by ${this.author}`;

    }
},
{
    title: 'Tesla, SpaceX, and the Quest for a Fantastic Future ',
    author: 'Elon Musk',
    readingStatus: true,
    returnInfo: function () {
        if (this.readingStatus === true)

            return `Already read ${this.title} by ${this.author}`;

        else
            return `You still need to read ${this.title} by ${this.author}`;

    }
}

];
console.log(library[0].returnInfo());
console.log(library[1].returnInfo());
console.log(library[2].returnInfo());






