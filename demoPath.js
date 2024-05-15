import path from 'path';
// console.log(path);
import url from 'url';

const filePath = './dir1/dir2/test.txt ';

// baseName()
console.log(path.basename(filePath));

// directoryName()
console.log(path.dirname(filePath));

// extName()
console.log(path.extname(filePath));

// parse()
console.log(path.parse(filePath));

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname, __filename);

// join()
// resolve() does exacly like join()
const filePath2 = path.join(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(filePath2);
