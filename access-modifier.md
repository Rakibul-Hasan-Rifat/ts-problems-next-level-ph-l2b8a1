# Access Modifiers

In TS, there are 4 access modifiers to specify the ability to write and read properties of objects made from class constructor inside or outside the class. The access-modifiers in TS are `public`, `private`, `protected`and `readonly`.

## Details of Each Access Modifiers

### `public` keyword
- `public` is default access-modifier for each property of class. That means when no access-modifier is used, public is by default used for properties.
- Property with `public` keyword can be used and modified from anywhere (inside and outside of a class constructor)

```typescript
    class User {
        name: string;
        email: string;
        phone: string;
        age: number;

        constructor(name: string, email: string, phone: string, age: number) {
            this.name = name;
            this.email = email;
            this.phone = phone;
            this.age = age;
        }
    }

    const user = new User("Mir", "mir@gmail.com", "01XXXXXXXXX", 30);
    console.log(user.name, user.email) // readable, so no error shown
    user.phone = "018XXXXXXXX" // editable, so, no error shown
```
---
<br />

### `private` keyword
- `private` keyword is most strict access-modifier. Properties with private keyword cab only be read and changed from the inside of the class.
- Private properties in the parent class are not updateable in the child class.
```typescript
    class User {
        private name: string;
        private email: string;
        private phone: string;
        private age: number;

        constructor(name: string, email: string, phone: string, age: number) {
            this.name = name;
            this.email = email;
            this.phone = phone;
            this.age = age;
        }
    }

    const user = new User("Mir", "mir@gmail.com", "01XXXXXXXXX", 30);
    console.log(user.name, user.email) // not readable, so error shown
    user.phone = "018XXXXXXXX" // editable, so, error shown
```
---
<br />

### `protected` keyword
- `protected` keyword is less strict access-modifier than `private`. Properties with protected keyword can only be read and changed from the inside of the class and its child class.
- Private properties in the parent class are updateable in the child class.
```typescript
    class User {
        protected name: string;
        protected email: string;
        protected phone: string;
        protected age: number;

        constructor(name: string, email: string, phone: string, age: number) {
            this.name = name;
            this.email = email;
            this.phone = phone;
            this.age = age;
        }
    }

    class Customer extends User {
        constructor(name: string, email: string, phone: string, age: number) {
            super(name, email, phone, age)
        }

        get userName() {
            return this.name // accessible
        }
    }

    const user = new User("Mir", "mir@gmail.com", "01XXXXXXXXX", 30);
    console.log(user.name, user.email) // not accessible, so error shown
    user.phone = "018XXXXXXXX" // not editable, so, error shown
```
---
<br />

### `readonly` keyword
- This keyword is used for just upding or changing the variable from only the class constructor
- Properties with readonly cannot be changed from outside of the constructor function