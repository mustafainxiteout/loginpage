import React from 'react';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import NormalUser from './components/NormalUser';
import AdminUser from './components/AdminUser';
import PrivateRoute from './Privateroute';

const root = ReactDOM.createRoot(document.getElementById('root'));
const isAdmin=true;
root.render(
  <Router>
    <Routes>
    <Route path='/' element={<App isAdmin={isAdmin}/>}/>
    <Route exact path="/" element={<PrivateRoute/>}><Route exact path="/usecase" element={isAdmin ? <AdminUser/> : <NormalUser/>} isAdmin={isAdmin}/></Route>
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
