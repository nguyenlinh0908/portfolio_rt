import Landing from "./components/Landing";
import Admin from "./components/Admin";
import Login from "./components/admin/login/Login";
import ErrorBoundary from "./libs/ErrorBoundary";
import { Error404 } from "./components/errors/Errors";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <ErrorBoundary>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/admin" element={<Admin />}></Route>
            <Route path="/admin/login" element={<Login />}></Route>
            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </>
  );
}
export default App;
