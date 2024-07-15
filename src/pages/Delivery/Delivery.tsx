import { useNavigate } from 'react-router-dom';

export function Delivery() {
  const navigate = useNavigate()
  const navHandler = (link: string) => {
    navigate(link)
  }
  return (
    <>delivery
    <button onClick={() => navHandler('/')}>back</button>
    </>
  );
}
