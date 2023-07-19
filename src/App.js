import React,{useState} from 'react';
import AcadProj from './AcadProj';
import Menu from './acadApi';
import Zenu from './WebApi';
import Cenu from './ConApi';
import Home from './Home';
import Layout from './Layout';
import Footer from './Footer';
import WebDev from './WebDev';
import LinkedIn from './LinkedIn';
import ComingSoon from './ComingSoon';
import Consulting from './Consulting';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [menuData, setMenuData]= useState(Menu);
  const [ZenuData, setZenuData]= useState(Zenu);
  const [CenuData, setCenuData]= useState(Cenu);

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/"  index element={<Home />} />
          {/* <Route path='/' element={<Home />} /> */}
          <Route path="Academics" element={<AcadProj menuData={menuData} />} />
          <Route path="WebDev" element={<WebDev menuData={ZenuData} />} />
          <Route path="linkedin" element={<LinkedIn />} />
          <Route path="Guesstimates" element={<Consulting menuData={CenuData} />} />
          {/* <Route path="*" element={<NoPage />} /> */}
          <Route path="*"  element={<ComingSoon />} />

        </Route>
      </Routes>
  <Footer/>
  </BrowserRouter>
  );
}

export default App;
