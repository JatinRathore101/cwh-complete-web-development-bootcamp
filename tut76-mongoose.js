const mongoose = require('mongoose');
// REFER MONGOOSE DOCUMENTATION // GETTING STARTED

main().catch(err => console.log(err));

async function main() {
    //   await mongoose.connect('mongodb://127.0.0.1:27017/db_name');
    await mongoose.connect('mongodb://127.0.0.1:27017/test2');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const kittySchema = new mongoose.Schema({
    name: String
}); // defining schema

// functions in schema // to be added before modeling schema
kittySchema.methods.speak = function speak() { 
    const greeting = 'Meow name is ' + this.name;
    console.log(greeting);
};

const Kitten = mongoose.model('Kitten', kittySchema); // compiling schema to a model

const kot1 = new Kitten({ name: 'Zilu' });
kot1.speak();
