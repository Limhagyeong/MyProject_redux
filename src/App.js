import {Provider} from "react-redux";
import store from "./store/store";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {Header} from "./components/main/Header";
import {Home} from "./components/main/Home";
import {Footer} from "./components/main/Footer";
import {Centerlist} from "./components/medicalcenter/Centerlist";
import {CenterDetail} from "./components/medicalcenter/CenterDetail";
import {Healthlist} from "./components/Healthcenter/Healthlist";
import {HealthDetail} from "./components/Healthcenter/HealthDetail";
import Boardinsert from "./components/board/Boardinsert";
import {BoardList} from "./components/board/Boardlist";
import Boarddetail from "./components/board/Boarddetail";
import Boarddelete from "./components/board/Boarddelete";
import Boardupdate from "./components/board/Boardupdate";
function App() {
  return (
      <Provider store={store}>
    <Router>
      <Header/>
      <Routes>
        <Route path={"/"} element={<Home/>}/>
          <Route path={"/center/list"} element={<Centerlist/>}/>
        <Route path={"/center/detail/:cno"} element={<CenterDetail/>}/>
        <Route path={"/health/list/"} element={<Healthlist/>}/>
        <Route path={"/health/detail/:no"} element={<HealthDetail/>}/>
        <Route path={"/board/insert"} element={<Boardinsert/>}/>
        <Route path={"/board/list"} element={<BoardList/>}/>
        <Route path={"/board/detail/:no"} element={<Boarddetail/>}/>
        <Route path={"/board/delete/:no"} element={<Boarddelete/>}/>
        <Route path={"/board/update/:no"} element={<Boardupdate/>}/>
      </Routes>
      <Footer/>
    </Router>
      </Provider>
  );
}

export default App;
