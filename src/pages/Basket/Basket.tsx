import { useNavigate } from 'react-router-dom';
import { LayoutBase } from '../../layout/LayoutBase';

export function Basket() {
  const navigate = useNavigate()
  const navHandler = (link: string) => {
    navigate(link)
  }
  return (
    <LayoutBase>
      <button onClick={() => navHandler('/')}>back</button>
    </LayoutBase>
  );
}
