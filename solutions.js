// problem-1
const multiplyValue = (value, multiplier = 2) => value * multiplier;
// problem-2
const processInput = (value) => {
    if (typeof value === "number")
        return value * 10;
    else if (typeof value === "boolean")
        return value ? "Active" : "Inactive";
    else
        return value.trim().toLowerCase();
};
// problem-3
const formatCoordinate = (values) => `Location: ${values[2]} (${values[0]}, ${values[1]})`;
// problem-4
const concatenateArrays = (...arrays) => arrays.flat();
const getPopularCourses = (courses, minStudents) => courses.filter(course => course.isPublished && course.students > minStudents);
// proble-6
const pluckValues = (items, key) => items.map(item => item[key]);
// ! problem-7
class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`;
    }
}
// problem-8
const validateAgeAsync = async (age) => await new Promise((resolve, reject) => {
    if (age > 18)
        setTimeout(() => resolve("Access Granted"), 1000);
    else
        reject("Access Denied: Must be 18 or older");
});
export {};
// 
