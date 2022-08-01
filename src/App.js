import Landing from "./components/Landing";
import Admin from "./components/Admin";
import Login from "./components/admin/login/Login";
import ErrorBoundary from "./libs/ErrorBoundary";
import Authentication from "./components/admin/components/Authentication";
import { Error404 } from "./components/errors/Errors";
import { BrowserRouter, Routes, Route} from "react-router-dom";
function App() {
  return (
    <>
      <ErrorBoundary>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Error404 />} />
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
              <Route
                path="/admin"
                element={<Authentication admin={<Admin />} />}
              />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </>
  );
}
export default App;
