import express from 'express'; 
import data from '../content/products.json' assert { type: 'json' };

const app = express();
const port = 3001;

app.use(express.json());

app.get('/products', (req, res) => {
  const {curPage, itemsPerPage} = req.query;
  res.send(data.products.slice(curPage - 1, itemsPerPage));
});

app.listen(port, () => {
  console.log(`Запущен на ${port} порту`);
});
