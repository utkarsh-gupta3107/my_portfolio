import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from './Home';
// import AcadProj from './AcadProj';
// import Layout from './Layout';
// import Menu from './acadApi';
// const MenuDeal = () => {
//   const [menuData, setMenuData]= useState(Menu);

//   return (
//    menuData
//   )
// }
const root = ReactDOM.createRoot(document.getElementById('root'));

// export default MenuDeal

root.render(

  <React.StrictMode>
     {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Academics" element={<AcadProj menuData={MenuDeal} />} />
           <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter> */}
    <App />
  </React.StrictMode>
);
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
