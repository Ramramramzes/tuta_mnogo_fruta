import { useNavigate } from 'react-router-dom';

export function About() {
  const navigate = useNavigate()
  const navHandler = (link: string) => {
    navigate(link)
  }
  return (
    <>about
    <button onClick={() => navHandler('/')}>back</button>
    </>

  );
}
