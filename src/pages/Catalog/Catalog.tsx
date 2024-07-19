import styles from './catalog.module.scss'
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import axios from 'axios';

export function Catalog() {
  const navigate = useNavigate()
  const navHandler = (link: string) => {
    navigate(link)
  }

  const reqHandler = async () => {
    try {
      const response = await axios.get('/products',{
        params: {
          curPage: 1,
          itemsPerPage: 5
        }
      });
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <div className={styles.catalog}>
      <Header />
        <div className={styles.main}>
          <Sidebar />
        </div>
      <Footer />
    </div>
  );
}
