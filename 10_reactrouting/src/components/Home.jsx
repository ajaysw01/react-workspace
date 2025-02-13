import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/about");
  }
  return (
    <div>
      Home
      <button onClick={handleClick}>Move to About page</button>
    </div>
  );
};

export default Home;
