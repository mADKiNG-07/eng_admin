import Navbar from "../../components/navbar/Navbar";
import "./home.scss";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="homeContainer">
        <div className="innerContainer">
          <h3>Lorem Ipsum For Engineers</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
            dolor asperiores cupiditate? Eligendi eaque, placeat sed ipsa
            aperiam rerum, dolorem dolor.
          </p>
          <div className="row">
            <button className="btn btn-warning col mx-2 py-2">
              View Engineer
            </button>
            <button className="btn btn-danger col">Add Engineer</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
