import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap'

function LogoutButton (){
  const navigate = useNavigate();

  const handleLogout = () => {
    // remove access token from local storage
    localStorage.removeItem('access_token');
    sessionStorage.removeItem('access_token');
    navigate('/');
  };

  return (
    <Button onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default LogoutButton;