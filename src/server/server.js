import express from 'express'; 
import data from '../content/products.json' assert { type: 'json' };

const app = express();
const port = 3001;

app.use(express.json());

app.get('/products', (req, res) => {
  const itemsPerPage = 6
  const curPage= req.query.page
  const startIndex = (curPage - 1) * itemsPerPage;
  const endIndex = startIndex + parseInt(itemsPerPage);
  let filtered, howManyPages
  if(req.query.catalog != ''){
    filtered = data.products.filter(el => el.catalog === req.query.catalog);
    howManyPages = Math.ceil(Number(filtered.length) / itemsPerPage);
  }else{
    filtered = data.products;
    howManyPages = Math.ceil(Number(filtered.length) / itemsPerPage);
  }
  const arr = filtered.slice(startIndex,endIndex)
  res.send({arr: arr,howManyPages:howManyPages});
});

app.listen(port, () => {
  console.log(`Запущен на ${port} порту`);
});
