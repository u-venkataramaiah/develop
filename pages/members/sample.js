var people = [
  {
    name: "john",
    age: 10,
    gender: "m",
  },
  {
    name: "joseph",
    age: 12,
    gender: "m",
  },
  {
    name: "annie",
    age: 8,
    gender: "f",
  },
];
var filters = {
  gender: "m",
};

var out = people.filter((person) => {
  return Object.keys(filters).every((filter) => {
    return filters[filter] === person[filter];
  });
});

console.log(out);
