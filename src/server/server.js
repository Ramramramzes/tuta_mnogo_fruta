import express from 'express'; 
import path from 'path';
import data from '../content/products.json' assert { type: 'json' };
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3001;

app.use(express.json());

const distPath = path.resolve(__dirname, '../../dist');
app.use(express.static(distPath));

app.get('/products', (req, res) => {
  const itemsPerPage = 6;

  const curPage = parseInt(req.query.page) || 1;
  if (isNaN(curPage) || curPage < 1) {
    return res.status(400).send({ error: 'Invalid page number' });
  }

  const startIndex = (curPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  let filtered = data.products;
  if (req.query.catalog && req.query.catalog !== '') {
    filtered = filtered.filter(el => el.catalog === req.query.catalog);
  }

  const howManyPages = Math.ceil(filtered.length / itemsPerPage);
  const arr = filtered.slice(startIndex, endIndex);

  res.send({ arr: arr, howManyPages: howManyPages });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
