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
  let filtered
  if(req.query.catalog != ''){
    filtered = data.products.filter(el => el.catalog === req.query.catalog);
  }else{
    filtered = data.products;
  }
  res.send(filtered.slice(startIndex,endIndex));
});

app.listen(port, () => {
  console.log(`Запущен на ${port} порту`);
});
