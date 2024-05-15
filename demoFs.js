import fs from 'fs/promises';

// readFile() -> callback version
// fs.readFile('./test.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// readFileSync() -> Syncronous version
// const data = fs.readFileSync('./test.txt', 'utf8');
// console.log(data);

// readFile() -> Promise .then()
// fs.readFile('./test.txt', 'utf8')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// readFile() - Async/Await
const readFile = async () => {
  try {
    const data = await fs.readFile('./test.txt', 'utf8');
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// Write file
const writeFile = async () => {
  try {
    await fs.writeFile('./test.txt', 'Hello I overwrote your file');
    console.log('wrote file');
  } catch (error) {
    console.log(error);
  }
};

// Append file
const appendFile = async () => {
  try {
    await fs.appendFile('./test.txt', '\nYouve been hacked back.');
    console.log('appended file');
  } catch (error) {
    console.log(error);
  }
};

writeFile();
appendFile();
readFile();
