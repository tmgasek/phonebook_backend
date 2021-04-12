const mongoose = require('mongoose');

if (process.argv.length !== 5 && process.argv.length !== 3) {
  console.log(
    'provide password as argument to view all persons. else provide password and new entry to save it.'
  );
  process.exit(1);
}

const password = process.argv[2];
const name = process.argv[3];
const number = process.argv[4];

const url = `mongodb+srv://fullstack:${password}@cluster0.roang.mongodb.net/phonebook-app?retryWrites=true&w=majority`;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model('Person', personSchema);

if (name && number) {
  const person = new Person({
    name: name,
    number: number,
  });

  person.save().then((result) => {
    console.log('person saved');
    mongoose.connection.close();
  });
}

if (!name && !number) {
  Person.find({}).then((result) => {
    result.forEach((p) => {
      console.log(p);
    });
    mongoose.connection.close();
  });
}
