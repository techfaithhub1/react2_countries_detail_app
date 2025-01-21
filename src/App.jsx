import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import Country from "./pages/Country.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Layout/> }>
            <Route index element={ <Home/> }/>
            <Route path="/:country" element={ <Country/> }/>
            <Route path="*" element={ <NotFound/> }/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
