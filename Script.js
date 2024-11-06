

// Q1 - Square each element of the array using map and arrow function
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num ** 2); // Squaring each element correctly
console.log("Q1-Squared numbers:", squaredNumbers);
// Expected Output: [1, 4, 9, 16, 25]

// Q2 - Determine grade based on score using ternary operators
const getGrade = (score) =>
    score >= 90 ? 'A' :
    score >= 80 ? 'B' :
    score >= 70 ? 'C' :
    score >= 60 ? 'D' : 'F';
console.log("Q2-Grade:", getGrade(85));
// Expected Output: Q2-Grade: B

// Q3 - Create and modify a car object, destructure model and year
const car = { model: 'Toyota', year: 2015, color: 'Blue' };
const changeYear = (newYear) => {
    car.year = newYear;
};
changeYear(2020);
const { model, year } = car;
console.log("Q3-Car details:", model, year);
// Expected Output: Q3-Car details: Toyota 2020

// Q4 - Filter prime numbers from an array
const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};
const primeNumbers = numbers.filter(isPrime);
console.log("Q4-Prime numbers:", primeNumbers);
// Expected Output: Q4-Prime numbers: [2, 3, 5]

// Q5 - Use cases for map, filter, and reduce functions
/**
 * - map: Used to apply a transformation to each element in an array and return a new array with the transformed elements.
 *   Example: Calculating the square of each number in an array.
 * - filter: Used to filter elements in an array based on a condition and return a new array of elements that meet the condition.
 *   Example: Filtering out prime numbers from an array.
 * - reduce: Used to accumulate values from an array into a single value (e.g., sum, product).
 *   Example: Summing all numbers in an array.
 */

// Q6 - Async function using async-await to fetch data from an API
const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        console.log("Q6 - Fetched Data:", data);
    } catch (error) {
        console.error("Q6 - Error fetching data:", error);
    }
};
// Uncomment below to test Q6
// fetchData();

// Q7 - Nested object with optional chaining to access phone number
const person = {
    name: "John Doe",
    address: {
        city: "New York",
        zip: "10001"
    },
    contact: {
        phone: "123-456-7890"
    }
};
console.log("Q7 - Phone Number:", person.contact?.phone); // Output: 123-456-7890

// Uncomment the following line to test missing property case
// console.log("Q7 - Missing Contact Phone:", person.contact?.email); // Output: undefined
