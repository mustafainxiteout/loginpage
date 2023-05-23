import React,{useEffect, useState} from 'react';
import { Container, Row, Col, Carousel, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function LoginPage({isAdmin}) {

  const [validated, setValidated] = useState(false);
  const [rememberme,setRememberme]=useState(false);
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
      <center className='d-block d-md-none'><img src='./megnad.png' alt="megnad" style={{height:"60px"}}/></center>
      <Row className='d-flex align-items-center shadow-lg-lg rounded-lg m-md-3 mt-md-5' style={{ maxheight: "94vh" }}>
        <Col md={7} className='p-0'>
          <Carousel fade controls={false} variant='dark'>
          {carouselItems.map((item) => (
            <Carousel.Item key={item.id} className='rounded-start-lg' style={{maxHeight:"90vh",overflow:"hidden"}}>
              <img className="w-100" src={item.image} alt={`Slide ${item.id}`}/>
            </Carousel.Item>
          ))}
          </Carousel>
        </Col>
        <Col md={5}>
        <div className="text-start text-lg-center mt-4 m-t-lg d-grid gap-2">
        <center className='d-none d-md-block'><img src='./megnad.png' alt="megnad" style={{height:"70px"}}/></center>
        <p>Login to access your account and explore our services.</p>
        </div>
          <Form noValidate validated={validated} className='d-grid gap-3 mb-4 m-lg' onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control required pattern="^\S*$" type="email" placeholder="Email"  style={{boxShadow: '0px 0px'}}/>
              <Form.Control.Feedback type='invalid'>Please enter a valid email address.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control required type="password" placeholder="Password" pattern={validPasswordRegex} style={{boxShadow: '0px 0px'}}/>
              <Form.Control.Feedback type='invalid'>Please enter a valid passwordyy.</Form.Control.Feedback>
            </Form.Group>
            <div className='d-flex justify-content-between'>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" checked={rememberme} onChange={(e) => setRememberme(e.target.checked)}/>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <p className='text-violet'>Recovery Password</p>
            </Form.Group>
            </div>
            <Button type="submit" className='w-100 btn-violet'>
              Sign In
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
