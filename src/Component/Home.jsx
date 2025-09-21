import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();
  return (
    <div className="home">
      {/* section */}

      <div className="home-section section1">
        <div className="overlay">
          <h1> welcome to home page</h1>
          <p> this is our main page </p>
        </div>
      </div>

      {/* section 2 */}
      <div className="home-section section2">
        <div className="overlay">
          <h2>about this site</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            magnam soluta esse recusandae quo. A repellendus dignissimos
            perferendis. Neque quas distinctio ad. Quia ullam repellendus quae
            nesciunt fugit vitae fuga?
          </p>
        </div>
      </div>

      {/* section3 */}

      <div className="home-section section3">
        <div className="overlay">
          <h2>more info </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            voluptates nam velit officia ad totam fugiat illum, nesciunt ex
            minima!
          </p>
        </div>
      </div>
      
      <button onClick={()=> navigate("/more")} className="more-btn">more info</button>
    </div>
  );
}

export default Home;
