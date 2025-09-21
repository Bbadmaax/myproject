import {  useNavigate } from "react-router-dom";

function tellMe() {

   const navigate = useNavigate();
  return (
    <div className="tell-page">
      <div className="tell-subpage">
 <h1>tell me more</h1>,
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, neque
        perspiciatis voluptates, nobis esse expedita non placeat fugiat
        corrupti, asperiores eaque facere temporibus quisquam repudiandae eum
        sit molestias? Tempora quas assumenda hic placeat, labore quo, officiis
        explicabo optio id asperiores quod possimus nesciunt velit! Odio quam
        maiores ullam eligendi sapiente soluta harum sed excepturi nesciunt!
        Tempore voluptate debitis magni nihil officia a deserunt, repudiandae
        ratione, facilis repellendus alias impedit error provident! Ducimus
        perferendis repudiandae ea necessitatibus itaque tenetur fugit quisquam
        et nostrum esse. Necessitatibus ea, optio ipsam, aperiam error maxime
        hic ipsa facere rem totam sequi distinctio consequatur voluptate
        dolores!
      </p>
      </div>
      <button onClick={()=> navigate("/Click")}>click me</button>
    </div>
  );
}
export default tellMe;
