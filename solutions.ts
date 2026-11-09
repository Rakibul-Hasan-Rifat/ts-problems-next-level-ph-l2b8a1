// problem-1
const multiplyValue = (value: number, multiplier: number = 2): number =>
    value * multiplier;

console.log(multiplyValue(10));
console.log(multiplyValue(10, 5));
console.log(multiplyValue(7, 0));

// problem-2
const processInput = (value: string | number | boolean): string | number => {
    if (typeof value === "number") return value * 10;
    else if (typeof value === "boolean") return value ? "Active" : "Inactive";
    else return value.trim().toLowerCase();
};

console.log(processInput("  TypeScript  "));
console.log(processInput(7));
console.log(processInput(true));
console.log(processInput(false));

// problem-3
const formatCoordinate = (values: readonly [number, number, string]): string => `Location: ${values[2]} (${values[0]}, ${values[1]})`;

console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));

// problem-4
const concatenateArrays = <T>(...arrays: T[][]): T[] => arrays.flat();

console.log(concatenateArrays(["a", "b"], ["c", "d"]))
console.log(concatenateArrays([1, 2], [3, 4], [5]))


// problem-5
interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

const getPopularCourses = (courses: Course[], minStudents: number): Course[] => courses.filter(course => course.isPublished && course.students > minStudents);

// Sample Input:
const courses = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true }
];

console.log(getPopularCourses(courses, 80))


// proble-6
const pluckValues = <T,K extends keyof T>(items: T[], key: K): T[K][] => items.map(item => item[key])
// Sample Input:
const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" }
];

console.log(pluckValues(users, "name"))
console.log(pluckValues(users, "role"))
console.log(pluckValues(users, "id"))

// ! problem-7

class Employee { }

class Manager extends Employee { }

// problem-8

const validateAgeAsync = async (age: number): Promise<string> => {
    return " ";
};

console.log("File is running successfully");
