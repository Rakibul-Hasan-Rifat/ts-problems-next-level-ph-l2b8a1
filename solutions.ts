// problem-1
const multiplyValue = (value: number, multiplier: number = 2): number =>
    value * multiplier;

// problem-2
const processInput = (value: string | number | boolean): string | number => {
    if (typeof value === "number") return value * 10;
    else if (typeof value === "boolean") return value ? "Active" : "Inactive";
    else return value.trim().toLowerCase();
};

// problem-3
const formatCoordinate = (values: readonly [number, number, string]): string => `Location: ${values[2]} (${values[0]}, ${values[1]})`;

// problem-4
const concatenateArrays = <T>(...arrays: T[][]): T[] => arrays.flat();

// problem-5
interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

const getPopularCourses = (courses: Course[], minStudents: number): Course[] => courses.filter(course => course.isPublished && course.students > minStudents);

// proble-6
const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => items.map(item => item[key])

// problem-7
class Employee {
    constructor(protected name: string, private baseSalary: number) { }

    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
    }
}

class Manager extends Employee {
    constructor(name: string, baseSalary: number, private department: string) {
        super(name, baseSalary)
    }

    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`
    }
}

// problem-8
const validateAgeAsync = async (age: number): Promise<string> => await new Promise((resolve, reject) => {
    if (age > 18) setTimeout(() => resolve("Access Granted"), 1000)
    else reject("Access Denied: Must be 18 or older")
})
// 