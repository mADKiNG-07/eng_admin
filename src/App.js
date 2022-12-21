import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Add from "./pages/addEngineer/Add";
import Home from "./pages/home/Home";
import View from "./pages/viewEngineer/View";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />

            <Route path="viewEngineer">
              <Route index element={<View />} />
            </Route>

            <Route path="addEngineer">
              <Route index element={<Add />} />
            </Route>

          </Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
