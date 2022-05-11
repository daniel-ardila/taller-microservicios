const mongoose = require("mongoose");

const personSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    lang: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);



const Person = mongoose.model("Person", personSchema);

module.exports = Person;


// const persons = [
//     {
//         id: 0,
//         name: 'Gabriel',
//         lang: 'ES',
//     },
//     {
//         id: 1,
//         name: 'Juan',
//         lang: 'EN',
//     },
//     {
//         id: 2,
//         name: 'Carlos',
//         lang: 'FR',
//     },
     
// ];

// module.exports = persons;