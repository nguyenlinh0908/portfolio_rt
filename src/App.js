import Landing from "./components/Landing";
import Admin from "./components/Admin";
import Login from "./components/admin/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/admin/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
