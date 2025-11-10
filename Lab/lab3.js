
// Function 1
const multiplyArrow =(a, b) => {
  return a * b;
}

// Function 2
  const isPositiveArrow = (number) => {
  return number >= 0;
}

// Function 3
const getRandomNumberArrow = () => {
  return Math.random();
}

// Function 4
console.log("ABC.");

const ABCD = () => {
  console.log("Click!");
};

ABCD(); 
// Thu thập tất cả tham số
const sumAllArrow=(...numbers) =>{
  return numbers.reduce((total, num) => total + num, 0);
}

// Kết hợp với tham số thông thường
const introduceArrow=(name, age, ...hobbies)=> {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Hobbies: ${hobbies.join(", ")}`);
}

// Destructuring với rest
const [first, second, ...rest] = [1, 2, 3, 4, 5];
const { name, age, ...otherInfo } = {
  name: "Tú",
  age: 20,
  city: "Hanoi",
  country: "Vietnam",
};

console.log(sumAllArrow(1, 2, 3, 4, 5)); // 15
introduceArrow("Tu", 20, "Reading", "Gaming", "Traveling");
// Name: Bob
// Age: 30
// Hobbies: Reading, Gaming, Traveling