| Preference              | Prefer...                                                   | Correct Example                    | Incorrect Example                  |
| Component declaration   | function Component()                                        | function TextEditor(Props) {}      | const TextEditor = (Props) => {}   |
| Let vs const            | Const for React Hooks, let for other variables              | const [Count, SetCount], let Value | const Value, let [Count, SetCount] |
| Naming                  | PascalCase for almost anything, camelCase for hooks         | function Component(), let Count    | let count, const [count, setCount] |
| Function block vs arrow | Function blocks for regular functions, arrows for callbacks | See below...                       | See below...                       |
| Destructuring           | Destructure function arguments and object Props             | function Example({Arg1, Arg2}) {}  | function Example(Arg1, Arg2) {}    |
| Exports                 | `export default` in front of member, list exports at the bottom | See below...                   | See below...                       |

**Note**: Pass one single object to functions when there are multiple arguments, don't add other arguments besides the object.
**Note**: Place `export default` in front of the member.

**Function Block vs Arrow**
Correct:
```typescript
function GetData() {}

let FindUser = (User) => console.log("John")
let UserJohn = {
    User: "John"
    GetUser: FindUser
}
```
Incorrect:
```typescript
let Numbers = [1, 2, 3]
function PickNumber() {
    return Numbers[1]
}
let NumberExample = {
    Number: Numbers
    GetNum: PickNumber
}
```

**Exports**
Correct:
```typescript
function Foo() {}
function Bar() {}
export {Foo, Bar}

export default function Proofread() {}
```

Incorrect:
```typescript
export function Foo() {}
export function Bar() {}
```