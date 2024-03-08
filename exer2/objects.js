

const animal = {
  "number-of-legs": 4,
  "fur-color": 'brown'
}

console.log(animal["fur-color"])

animal.mammal = true    // adds new property 
delete animal.mammal    // removes a property

const a = [1, 'two', 3.14, false, {s1:'this is', s2:'an object'}]

console.log(a[2])   // prints 3.14

const person = {
    name: 'Tim Berners-Lee',
    age: 64,
    gender: 'male',
    interests: ['physics', 'web'],
    greeting: function() {
        console.log("Hi, my name is " + this.name + " and my interests are " + this.interests[0] + " and " + this.interests[1])
    }
  }
  
  person.greeting()
  person["greeting"]()
  