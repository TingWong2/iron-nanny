import FormSignIn from "../components/Forms/FormSignIn";
import homeCss from "./../styles/home.css";

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="jumbotron jumbotron-fluid">
          <div className="container text-center">
            <h1 className="display-4">Welcome to Iron Nanny!</h1>
          </div>
        </div>
      </div>
      <FormSignIn />
    </>
  );
};

export default Home;
