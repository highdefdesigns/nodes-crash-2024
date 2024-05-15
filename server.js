import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
const PORT = process.env.PORT;

// get file name
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async (req, res) => {
  try {
    if (req.method === 'GET') {
      let filePath;
      if (req.url === '/') {
        filePath.join('__dirname', 'public', 'index.html');
      } else if (req.url === '/about-us') {
        filePath.join('__dirname', 'public', 'about.html');
      } else {
        throw new Error('Not Found');
      }
      const data = await fs.readFile(filePath);
      res.setHeader(200, 'Content-type', 'text/html');
      res.write(data);
      res.end();
    } else {
      throw new Error('Method Not Allowed');
    }
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Server Error');
  }
});

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
