import "./App.css";
import Navbar from "./Navbar.js";

const App = () => {
  /* 로딩중이 아닐 때 렌더링 할 부분 */
  var mainPage = (
    <Navbar></Navbar>
  );

  var content = mainPage;
  
  return (
  
  <div className="App">{content} 
    <div>
      Main Page 테스트중
    </div>
  </div>
  
  );
};

export default App;
