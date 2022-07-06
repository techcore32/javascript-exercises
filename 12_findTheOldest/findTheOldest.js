
   const people = [
    {
      name: "Carly",
      yearOfBirth: 1066,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

  const findTheOldest = function(array) {
    return array.reduce((oldest, currentPerson) => {
      const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
      const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath)
      return oldestAge < currentAge ? currentPerson : oldest
    })
  };
  
  const getAge = function(birth, death) {
    if (!death) {                             
      death = new Date().getFullYear();
    }
    return death - birth;
  };

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;

//My answer


//    const people = [
//       {
//         name: "Carly",
//         yearOfBirth: 1066,
//       },
//       {
//         name: "Ray",
//         yearOfBirth: 1962,
//         yearOfDeath: 2011,
//       },
//       {
//         name: "Jane",
//         yearOfBirth: 1912,
//         yearOfDeath: 1941,
//       },
//     ]

// let currentYear = new Date().getFullYear();

// let len = people.length;

// for(let i = 0; i < len; i++){

//   if(people[i].yearOfDeath != null){
//  people[i].age = people[i].yearOfDeath - people[i].yearOfBirth;
//     }

//   else {
//     people[i].age = currentYear - people[i].yearOfBirth;
//   }

// }

// let oldest = people.sort((a,b) => a.age > b.age? -1 : 1); 


// const findTheOldest = function(a) {
// 	return people[0];
// }


// console.log(findTheOldest(people));
  