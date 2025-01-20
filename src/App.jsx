import Stopwatch from "./Stopwatch.jsx";
import Dio from "./assets/dio.png";
import DioMoving from "./assets/dioMoving.webp";

function App() {
  return(<>
  <Stopwatch/>
  <img src={DioMoving} alt="dio" className="dio-moving"/>
  <img src={Dio} alt="time-stop" className="dio"/>
  </>);
}

export default App
