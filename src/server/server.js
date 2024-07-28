import express from 'express'; 
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3001;

app.use(express.json());

const distPath = path.resolve(__dirname, '../../dist');
app.use(express.static(distPath));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
