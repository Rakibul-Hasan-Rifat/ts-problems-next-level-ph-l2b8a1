const multiplyValue = (value, multiplier = 2) => value * multiplier;
console.log(multiplyValue(10));
console.log(multiplyValue(10, 5));
console.log(multiplyValue(7, 0));
const processInput = (value) => {
    if (typeof value === "number")
        return value * 10;
    else if (typeof value === "boolean")
        return value ? "Active" : "Inactive";
    else
        return value.trim().toLowerCase();
};
console.log(processInput("  TypeScript  "));
console.log(processInput(7));
console.log(processInput(true));
console.log(processInput(false));
const formatCoordinate = () => { };
const concatenateArrays = () => { };
const getPopularCourses = () => { };
// ! problem-7
class Employee {
}
class Manager extends Employee {
}
// problem-8
const validateAgeAsync = async (age) => {
    return " ";
};
console.log("File is running successfully");
export {};
