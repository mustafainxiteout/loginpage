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
import ViewUsecase from './components/ViewUsecase';
import Usecases from './components/Usecases';
import Insights from './components/Insights';

const root = ReactDOM.createRoot(document.getElementById('root'));
const isAdmin=true;
root.render(
  <Router>
    <Routes>
    <Route path='/' element={<App isAdmin={isAdmin}/>}/>
    <Route exact path="/" element={<PrivateRoute/>}><Route exact path="/usecase" element={isAdmin ? <AdminUser content={<Usecases/>} headertitle="Choose Your Usecase" /> : <NormalUser/>} isAdmin={isAdmin}/></Route>
    <Route exact path='/usecase/:ucid' element={<AdminUser content={<ViewUsecase/>} />} />
    <Route exact path='/aiusecase' element={<AdminUser content={<Insights/>} headertitle="Analysis Name" />}/>
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
