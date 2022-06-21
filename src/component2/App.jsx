import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import Register from "./Register";
import Services from "./Services";
import Shop from "./Shop";
import Team from "./Team";

function App() {
  let pathname = window.location.pathname;
  console.log(pathname);
  return (
    <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={<Home isActiveHome="active" />}
      />
      <Route
        path="/addlocalshop"
        element={<Shop isActiveShop="active" />}
      />
      <Route
        path="/contact"
        element={<Contact isActiveContact="active" />}
      />
      <Route
        path="/register"
        element={<Register isActiveRegister="active" />}
      />
      <Route
        path="/services"
        element={<Services isActiveServices="active" />}
      />
      <Route
        path="/team"
        element={<Team isActiveTeam="active" />}
      />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
