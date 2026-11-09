# Interface vs Type

Both `type` and `interface` are important part and parcel of TS. They are the keywords to make TS types with a specific name such as variable's name. Difference between them are below:

- `interface` is generally used for making a blueprint of object. On the other hand, `type` can be used for any kind of types to make for a variable.
```typescript
    interface A {
        x: string
    }

    type Z = string | number // union type
    type Y = {x: number} // object type
    type X = string[] // array of string
```

- `interface` can be merged if multiple interfaces with same name are created. But with the same name declaring multiple types is not accepted.
```typescript
    interface A {x: number}
    interface A {y: number}
    
    const a: A = {x: 10, y: 25} // no error, because they are merged
```

- `inteface` can extend from another interface. But `type` cannot do so.
```typescript
    interface A {x: number}
    interface B extends A {y: number}
```

- To use intersection and union, we need `type`. We can't use them in the interface.
```typescript
    type A = string | number;
    type B = A & boolean;
```

At last, we can say that `type` and `interface` both are used for declaring and defining types with names so that we can remember them easily like variable's name though their workflow and work-process are different.