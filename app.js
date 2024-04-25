let name;

console.log(name);

const age = 20;

name = "Mike";

// Hello Mike (20)
//console.log("Hello " + name + "(" + age + ")");
console.log(`Hello ${name} (${age})`);

// if (age <= 18) {
//   console.log("You are not allowed to enter the club!");
// } else {
//   console.log("Welcome to the club!");
// }

if (age <= 18) {
  console.log("You are not allowed to enter the club!");
} else if (age > 18 && age < 21) {
  console.log("You can enter, but you can't drink.");
} else {
  console.log("Welcome to the club!");
}

function isMature(age) {
  //   if (age >= 18) {
  //     return true;
  //   }

  //   return false;
  return age >= 18;
}

console.log(isMature());

function greetings(name = "") {
  console.log(`Hello ${name}!`);
}

console.log(greetings());

function getMonthDescription(month) {
  //   if (month === "january") {
  //     return "January is the first month of the year.";
  //   } else if (month === "february") {
  //     return "February is the second month of the year.";
  //   } else if (month === "march") {
  //     return "March is the third month of the year.";
  //   } else {
  //     return "I don't know that month.";
  //   }

  switch (month) {
    case "january":
      return "January is the first month of the year.";
    case "february":
      return "February is the second month of the year.";
    case "march":
      return "March is the third month of the year.";
    default:
      return "I don't know that month.";
  }
}

// = is assignment
// == === are comparison operators

console.log(getMonthDescription("january"));

console.log("-".repeat(50));

const month = "january";

switch (month) {
  case "january":
  case "february":
  case "march":
    console.log("it's cold");
    break;
  case "april":
  case "may":
  case "june":
    console.log("it's warm");
    break;
  default:
    console.log("I don't know that month.");
}

console.log("-".repeat(50));

function calculator(type, val1, val2) {
  switch (type) {
    case "add":
      return val1 + val2;
    case "substract":
      return val1 - val2;
    case multiply:
      return val1 * val1;
    case "divide":
      if (val2 !== 0) {
        return val1 / val2;
      }
    default:
      return "";
  }
}

// const a = parseInt(prompt("Podaj liczbe a: "));
// const b = parseInt(prompt("Podaj liczbe b: "));

// console.log(calculator("add", a, b));

const grades = [4, 5, 3];

// [4, "2", function () {}]

console.log(grades);

console.log(grades[0], grades[1], grades[5], grades[grades.length - 1]);

function getAvg(data) {
  let sum = 0;

  for (let i = 0; i < data.length; i++) {
    sum += data[i];
    // sum = sum + data[i]
  }

  return sum / data.length;
}

console.log(getAvg(grades));

const client = {
  name: "Client #1",
  invoices: [456, 2323, 1212],
  description: "Test",
  getSumInvoices: function () {
    // return this.invoices.reduce((acc, item) => acc + item, 0);
    let sum = 0;

    this.invoices.forEach(function (item) {
      sum += item;
    });

    return sum;
  },
};

console.log(client.name, client["name"]);

console.log("getSumInvoices", client.getSumInvoices());

navigator.geolocation.getCurrentPosition(
  function (geo) {
    console.log(geo);
  },
  function () {
    console.log("ERR!");
  }
);
