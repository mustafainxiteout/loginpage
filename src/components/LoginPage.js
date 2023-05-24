import React,{useEffect, useState} from 'react';
import { Container, Row, Col, Carousel, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {UserIcon, LockClosedIcon}  from '@heroicons/react/24/outline'

function LoginPage({isAdmin}) {

  const [validated, setValidated] = useState(false);
  const [rememberme,setRememberme]=useState(false);
  const [showPassword, setShowPassword] = useState(false); 
  const navigate=useNavigate();

  const carouselItems = [
    { id: 1, image: './27.png' },
    { id: 2, image: './24.png' },
    { id: 3, image: './25.png' }
  ];

  const auth_session = sessionStorage.getItem("access_token"); // determine if authorized, from context or however you're doing it
  const auth_local = localStorage.getItem("access_token"); // determine if authorized, from context or however you're doing it
  const isAuthorized = (auth_session || auth_local ); // determine if authorized based on isAdmin prop

  
  useEffect(()=>{
    
    if(isAuthorized){
      navigate('/Userpage')
    }
  },[isAuthorized,navigate])

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    }
    else{
     setValidated(true);
      // Handle the successful response from the API
      // Save the access token to local storage
     // determine if authorized based on isAdmin prop
      if(rememberme===true){
        localStorage.setItem('access_token', '12345678');
      } 
      else{
        sessionStorage.setItem('access_token', '12345678');
      }
      // determine if authorized based on isAdmin prop
      if(isAdmin===true){
        navigate('/Userpage');
      }
      else{
        navigate('/Userpage');
      }
    }
  }  

  const validPasswordRegex = '^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,}$';

  return (
    <Container fluid className='googlesans'>
      <Row className='d-flex m-md-3 mt-md-5' style={{ maxheight: "94vh" }}>
        <Col lg={5} className='p-0 d-none d-lg-block'>
          <Carousel fade>
          {carouselItems.map((item) => (
            <Carousel.Item key={item.id} className='rounded-4' style={{height:"90vh",overflow:"hidden"}}>
              <img className="h-100" src={item.image} alt={`Slide ${item.id}`}/>
              <Carousel.Caption>
              <h3>slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
          </Carousel>
        </Col>
        <Col md={12} lg={{span:4,offset:2}} xl={{offset:2}}>
        <div className="d-flex justify-content-end m-3 m-lg-0">
        <img src='./ix.png' alt="megnad" style={{height:"70px",width:"80px"}}/>
        </div>
        <div className="text-center mt-4 d-grid gap-2">
        <center><img src='./meg.png' alt="megnad" style={{height:"100px",width:"280px"}}/></center>
        <h2 className='mt-3'>Hello Again</h2>
        </div>
          <Form noValidate validated={validated} className='d-grid gap-4 mb-4 mt-4' onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail" className="position-relative inputGroupContainer">
            <Form.Label className='position-absolute rounded px-2 it ms-3 bg-white t-fs'>Email</Form.Label>
            <Form.Text className='position-absolute' style={{top:'10px',right:'20px',fontSize:'1.2rem'}}><UserIcon className='text-grayl' style={{height:"22px",width:"30px"}}/></Form.Text>
            <Form.Control className="inputl" required pattern="^\S*$" type="email" placeholder="" style={{boxShadow: '0px 0px'}}/>   
            <Form.Control.Feedback type='invalid'>Please enter a valid email address.</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formBasicPassword" className="position-relative inputGroupContainer">
            <Form.Label className='position-absolute rounded px-2 it ms-3 bg-white t-fs'>Password</Form.Label>
            <Form.Text className='position-absolute' style={{top:'10px',right:'20px',fontSize:'1.2rem'}} onClick={() => setShowPassword(!showPassword)}><LockClosedIcon className='text-grayl' style={{height:"22px",width:"30px"}}/></Form.Text>
            <Form.Control className="inputl" required pattern={validPasswordRegex} type={showPassword ? 'text' : 'password'} placeholder="" style={{boxShadow: '0px 0px'}}/>
            <Form.Control.Feedback type='invalid'>Please enter a valid password.</Form.Control.Feedback>
          </Form.Group>
            <div className='d-flex gap-4 justify-content-between'>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" className='t-fs' checked={rememberme} onChange={(e) => setRememberme(e.target.checked)}/>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <p className='text-violet t-fs'>Recovery Password</p>
            </Form.Group>
            </div>
            <Button type="submit" className='w-100 py-3 fw-bold btn-violet t-fs' style={{letterSpacing:"1px"}}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
