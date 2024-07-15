import { useNavigate } from 'react-router-dom';

export function Contacts() {
  const navigate = useNavigate()
  const navHandler = (link: string) => {
    navigate(link)
  }
  return (
    <>contacts
    <button onClick={() => navHandler('/')}>back</button>
    </>
  );
}
