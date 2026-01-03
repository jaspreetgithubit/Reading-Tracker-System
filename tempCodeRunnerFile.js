const fs = require("fs/promises");
// const path = require("path");

// const filename = "asyncawait.txt";
// const filepath = path.join(__dirname, filename);

// // write file
// const writefile = async () => {
//   try {
//     await fs.writeFile(filepath, "this is fs promises async/await method", "utf-8");
//     console.log("File created ✅");
//   } catch (error) {
//     console.log(error);
//   }
// };
// writefile();

// // read file
// const readfile = async () => {
//   try {
//     const data = await fs.readFile(filepath, "utf-8");
//     console.log("File Data:", data);
//   } catch (error) {
//     console.error(error);
//   }
// };
// readfile();
// // update file

// const appendfile = async () => {
//   try {
//     const data = await fs.appendFile(filepath, "this is updated data", "utf-8");
//     console.log("File Data updated");
//   } catch (error) {
//     console.error(error);
//   }
// };
// appendfile();