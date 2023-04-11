//載入套件
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes} from "react-router-dom";
//載入檔案
import App from './components/App';
import Todolist from './components/Todolist';
import reportWebVitals from './reportWebVitals';
//ref:https://israynotarray.com/react/20221008/1445725227/
//ref:https://molly1024.medium.com/%E6%96%B0%E7%89%88-react-router-%E6%80%8E%E9%BA%BC%E7%94%A8-react-router-dom-v6-8c0624642fce

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path='/todolist' element={<Todolist/>} />        
      </Routes>     
    </BrowserRouter>
  </React.StrictMode> 
);

reportWebVitals();