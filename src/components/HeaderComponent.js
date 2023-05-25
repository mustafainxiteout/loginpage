import React from 'react'
import { Image, Navbar } from 'react-bootstrap'
import { HomeIcon,PencilSquareIcon,UserIcon,PowerIcon} from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'

function HeaderComponent() {
  const navigate=useNavigate();
  const navigationlinks = (link) => {
      navigate(link);
  };

  const handleLogout = () => {
    // remove access token from local storage
    localStorage.removeItem("access_token");
    sessionStorage.removeItem("access_token");
    navigate('/');
  };

  return (
    <div>
        <Navbar bg="white" className='d-flex ml-auto p-3 border-bottom shadow-small justify-content-between fixed-top'>
            <div>
             <Image src='/megnad.png' className='d-inline' style={{maxHeight:"60px", maxWidth:"160px",marginRight:"30px",marginLeft:"2px"}}/> 
            </div>
            <center className='fw-bolder h5 d-none d-md-inline'>Choose Your Usecase</center>
              <div className='d-flex gap-2'>
              <button className='btn text-center'><HomeIcon className="text-black me-0" style={{height:"20px",width:"20px"}}/></button>
              <div className="dropdown">
                <button className="btn text-center border-0 dropdown-toggle" aria-expanded="false" data-bs-toggle="dropdown" type="button">
                <UserIcon className="text-black me-0" style={{height:"20px",width:"20px"}}/>
                </button>
                <div className="dropdown-menu dropdown-menu-end shadow-lg border-0 p-0 mt-2">
                <button className="dropdown-item small btn-light py-3" onClick={()=>navigationlinks('/')}>
                  <PencilSquareIcon className="text-black me-2" style={{height:"20px",width:"20px"}}/>
                  Edit Profile
                </button>
                <button className="dropdown-item small btn-light py-3" onClick={()=>navigationlinks('/')}>
                  <UserIcon className="text-black me-2" style={{height:"20px",width:"20px"}}/>
                  View Profile
                </button>
                <button className="dropdown-item small btn-light py-3" onClick={handleLogout}>
                  <PowerIcon className="text-black me-2" style={{height:"20px",width:"20px"}}/>
                  Sign Out
                </button>
                </div>
              </div>
            </div>
        </Navbar>
    </div>
  )
}

export default HeaderComponent