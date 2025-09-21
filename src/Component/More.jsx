 import { useNavigate } from "react-router-dom";
 function More() {

    const navigate = useNavigate()

    
  return (
    <div className="more-pages">
      <h1>more information</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dicta
        deserunt voluptates, blanditiis optio esse.
      </p>

      <button onClick={()=> navigate("/tellme")}>tell me more</button>
    </div>
  );
}
export default More;
