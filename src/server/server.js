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
  let arr = [];
  let howManyPages = 0;

  if(req.query.products){
      // let filtered = data.products;
    let filtered = req.query.products;

    console.log(filtered);
    if (req.query.catalog && req.query.catalog !== '') {
      filtered = filtered.filter((el) => {
        return el.categories.some(category => category.name === req.query.catalog);
      });
    }

    console.log(filtered);
    
    howManyPages = Math.ceil(filtered.length / itemsPerPage);
    arr = filtered.slice(startIndex, endIndex);
  }else{
    arr = [];
  }

  res.send({ arr: arr, howManyPages: howManyPages });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
