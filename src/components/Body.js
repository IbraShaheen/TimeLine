//Data
import data from "../data";

//styling
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { TimeLine } from "../styles";

const newArray = data.map((element) => (
  <div className="container">
    <ul className="timeline">
      <li>
        <div className="timeline-image">
          <img
            className="img-responsive image-style"
            src={element.imag1}
            alt=""
          />
        </div>
        <div className="timeline-panel">
          <div className="timeline-heading">
            <h4>{element.period1}</h4>
            <h4 className="subheading">{element.breif1}</h4>
            <br/>
          </div>
          <div className="timeline-body">
            <p >{element.parag1}</p>
          </div>
        </div>
        <div className="line"></div>
      </li>
      <li className="timeline-inverted">
        <div className="timeline-image">
          <img
            className="img-responsive image-style"
            src={element.imag2}
            alt=""
          />
        </div>
        <div className="timeline-panel">
          <div className="timeline-heading">
            <h4>{element.period2}</h4>
            <h4 className="subheading">{element.breif2}</h4>
            <br/>
          </div>
          <div className="timeline-body">
            <p>{element.parag2}</p>
          </div>
        </div>
        <div className="line"></div>
      </li>
    </ul>
  </div>
));
function Body() {
  return <div>{newArray}</div>;
}

export default Body;