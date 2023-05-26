import React from 'react';
import { Button, Card, Row } from 'react-bootstrap';
import { PlusCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom'

function Usecases() {
  const cardData = [
    {
      title: 'Text to Audio',
      description: 'There are many variations of passages of Lorem Ipsum available..',
    },
    {
      title: 'Text to Audio',
      description: 'There are many variations of passages of Lorem Ipsum available..',
    },
    {
      title: 'Text to Audio',
      description: 'There are many variations of passages of Lorem Ipsum available..',
    },
    {
      title: 'Text to Audio',
      description: 'There are many variations of passages of Lorem Ipsum available..',
    },
    {
      title: 'Text to Audio',
      description: 'There are many variations of passages of Lorem Ipsum available..',
    },
    {
      title: 'Text to Audio',
      description: 'There are many variations of passages of Lorem Ipsum available..',
    },
    {
      title: 'Text to Audio',
      description: 'There are many variations of passages of Lorem Ipsum available..',
    },
    {
      title: 'Text to Audio',
      description: 'There are many variations of passages of Lorem Ipsum available..',
    },
    {
      title: 'Text to Audio',
      description: 'There are many variations of passages of Lorem Ipsum available..',
    },
    {
      title: 'Text to Audio',
      description: 'There are many variations of passages of Lorem Ipsum available..',
    },
  ];
 
  const navigate=useNavigate();

  return (
    <section className='mb-5 p-3'>
      <center className='fw-bolder h5 d-block mb-3 d-md-none'>Choose Your Usecase</center>
      <div className="d-flex flex-column mb-3 pt-md-5 flex-md-row col-md-10 col-xl-8 offset-md-1 offset-xl-2 justify-content-md-center gap-4">
        <Row>
        {cardData.map((card, index) => (
          <div key={index} className="col-md-6 col-lg-4 mb-4">
            <Card className="p-3 rounded-4 text-white card-violet" onClick={()=>navigate(`/usecase/${index}`)}>
              <Card.Body>
                <Card.Title className="mb-3">
                  <h4 className="fw-bold">{card.title}</h4>
                </Card.Title>
                <Card.Text className="mb-3">{card.description}</Card.Text>
                <div className="d-flex gap-2">
                  <div className="rounded-4 bg-white ps-3 pe-1 py-1 text-black">
                    Text
                    <XCircleIcon
                      className="fw-bold ms-2 text-grayl"
                      style={{ height: '24px', width: '24px' }}
                    />
                  </div>
                  <div className="rounded-4 bg-white ps-3 pe-1 py-1 text-black">
                    Audio
                    <XCircleIcon
                      className="fw-bold ms-2 text-grayl"
                      style={{ height: '24px', width: '24px' }}
                    />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
        </Row>
      </div>
      <div className="d-flex justify-content-center">
        <Button className="sbtn btn-violet t-fs py-3 mt-4 fw-bold col-md-8" style={{ letterSpacing: '1px' }}>
          <PlusCircleIcon className="fw-bold me-2" style={{ height: '20px', width: '20px' }} />
          Create New Usecase
        </Button>
      </div>
      <div className="text-center">
        <Button className="btn btn-light border py-2 mt-4 fw-bold" style={{ letterSpacing: '1px' }}>
          Load More...
        </Button>
      </div>
    </section>
  );
}

export default Usecases;