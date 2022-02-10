import FormSignIn from "../components/Forms/FormSignIn";
import homeCss from "./../styles/home.css";

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="jumbotron jumbotron-fluid">
          <div className="container text-center">
            <h1 className="display-4">Welcome to Super Nounou!</h1>
          </div>
        </div>
      </div>
      <FormSignIn />
    </>
  );
};

export default Home;
