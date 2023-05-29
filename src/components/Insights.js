import { ArrowLeftIcon, Bars3Icon } from '@heroicons/react/24/outline'
import React from 'react'
import { Row, ListGroup } from 'react-bootstrap'

function Insights() {
  return (
    <section className='p-3 px-1 bg-light-violet' style={{minHeight:"84vh",overflow:'auto',minWidth:"100vw"}}>
    <Row className='gap-5 mt-4 m-2 mb-4 mx-0 mx-md-2 d-flex justify-content-center'>
    <div className='col-12 col-lg-6 p-2'>
      <div className='d-flex gap-2'><div className='bg-white rounded-2 p-1 border-primary border text-primary'><ArrowLeftIcon style={{height:"18px",width:"30px"}}/></div><h5 className='fw-bolder ms-2 pt-1'>Select an Insight</h5></div>
      <div className='d-flex gap-3 my-2'>
      <div className='bg-white rounded-2 p-1 border-primary border text-primary'><Bars3Icon style={{height:"18px",width:"30px"}}/></div>
      <ListGroup className='w-100 p-2 bg-white overflow-auto custom-scroll'style={{maxHeight:"48vh"}}>
      <ListGroup.Item className='py-3'>Cras justo odio</ListGroup.Item>
      <ListGroup.Item className='py-3'>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item className='py-3'>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item className='py-3'>Porta ac consectetur ac</ListGroup.Item>
      <ListGroup.Item className='py-3'>Vestibulum at eros</ListGroup.Item>
      <ListGroup.Item className='py-3'>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item className='py-3'>Porta ac consectetur ac</ListGroup.Item>
      <ListGroup.Item className='py-3'>Vestibulum at eros</ListGroup.Item>
      <ListGroup.Item className='py-3'>Vestibulum at eros</ListGroup.Item>
      <ListGroup.Item className='py-3'>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item className='py-3'>Porta ac consectetur ac</ListGroup.Item>
      <ListGroup.Item className='py-3'>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
    </div>
    </div>
    <div className='col-12 col-lg-4 offset-lg-1 mb-5'>
      <p>File_Name</p>
    </div>
    </Row>
    </section>
  )
}

export default Insights