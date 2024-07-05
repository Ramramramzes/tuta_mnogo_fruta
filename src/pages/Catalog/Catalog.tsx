import { useNavigate } from 'react-router-dom';
import styles from './catalog.module.css';

export function Catalog() {
  const navigate = useNavigate()
  const navHandler = (link: string) => {
    navigate(link)
  }
  return (
    <>catalog
      <button onClick={() => navHandler('/')}>back</button>
    </>
  );
}
