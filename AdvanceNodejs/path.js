// | Method              | Purpose                    | Example                                       |
// | ------------------- | -------------------------- | --------------------------------------------- |
// | `path.join()`       | Joins path segments        | `path.join("users", "data.txt")`              |
// | `path.resolve()`    | Creates an absolute path   | `path.resolve("data.txt")`                    |
// | `path.basename()`   | Gets file name             | `path.basename("/app/data.txt")` → `data.txt` |
// | `path.dirname()`    | Gets directory path        | `path.dirname("/app/data.txt")` → `/app`      |
// | `path.extname()`    | Gets file extension        | `path.extname("data.txt")` → `.txt`           |
// | `path.parse()`      | Breaks path into parts     | `{ root, dir, name, ext }`                    |
// | `path.format()`     | Creates path from parts    | Reverse of `parse()`                          |
// | `path.isAbsolute()` | Checks if path is absolute | `true / false`                                |
// | `path.normalize()`  | Cleans/normalizes a path   | Removes unnecessary `../`, `//`, etc.         |



const filePath = path.join(__dirname, "files", "data.txt");

console.log(filePath);
// /project/files/data.txt output

// Instead of manually doing:

// __dirname + "/files/data.txt"
// __dirname

// You will frequently see:

// path.join(__dirname, "data", "file.txt")

// __dirname represents the absolute path of the current JavaScript file's directory.

// join() vs resolve()
// path.join("folder", "file.txt")

// → joins the pieces.

// path.resolve("folder", "file.txt")

// → gives you an absolute path.

// Interview point: path doesn't create, read, or modify files. It only helps you construct and manipulate paths.  


// for ES6
// In **ES6 / ES Modules**, `__dirname` is **not available directly**.

// Use `import.meta.url` with `fileURLToPath()`:

// ```js
// import path from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// console.log(__dirname);
// ```

// ### Why?

// * `import.meta.url` → URL of the current file
// * `fileURLToPath()` → converts that URL to a normal file path
// * `path.dirname()` → gets the directory containing the file

// So:

// ```text
// CommonJS → __dirname
// ES Modules → import.meta.url + fileURLToPath() + path.dirname()
// ```
