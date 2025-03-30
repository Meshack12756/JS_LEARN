let course = {
    name: "Meshack", 
    hours: 4
};

//name is the KEY, "Meshack" is the value
console.log(course);

//Ways to output the value of the key
console.log(course.name); // dot notation
console.log(course['name']); // bracket notation

//Changing the value of the key: name
course['name'] = 'Jael';
console.log(course['name']);

//Outputing the value of hours
console.log(course.hours)

let property = 'hours';
console.log(course[property]);
