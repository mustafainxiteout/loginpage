import { ArrowLeftIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import { Row, ListGroup, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Insights() {
  const [showData, setShowData] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState('');
  const [showInsight, setShowInsight] = useState(false);
  const navigate = useNavigate();
  const data = [
    ['Respondent', 'Hello.'],
    ['Caller', "Hi, sir. This is Maya. I'm calling from Mahindra and Mahindra.  I'm speaking to Sajar Ali Khan."],
    ['Respondent', "Yes, I'm speaking."],
    ['Caller', "Sir, you had shown an interest in the XUV300 vehicle, right?  Yes.  We need some feedback from you to improve the customer experience.  You tell me.  Sir, what were the TSP's you were looking for to purchase the vehicle?"],
    ['Respondent', 'What are you doing?'],
    ['Caller', 'What were the features you were looking for to purchase the vehicle?'],
    ['Respondent', 'We are in a meeting right now.'],
    ['Caller', 'Can you speak to us, sir?'],
    ['Respondent', 'Yes, you tell me.'],
    ['Caller', 'What were the things you liked about the vehicle?'],
    ['Respondent', 'I liked the vehicle a lot.'],
    ['Caller', 'I liked the features.'],
    ['Respondent', 'I liked the interior.  The interior is good.'],
    ['Caller', "What else did you like about the interior?  And were you looking for any other vehicle other than the XUV300?  No, no one is looking for any other vehicle.  And your first priority is the XUV300?  Yes.  Is there anything that you don't like about the XUV300?"],
    ['Respondent', 'Why will I say anything negative about anyone?  You can say it positively.'],
    ['Caller', "Is there anything that you don't like about the vehicle?"],
    ['Respondent', 'We are very positive.'],
    ['Caller', 'But sir, if you tell us about the things that you want to improve,'],
    ['Respondent', 'There are so many technical persons out there.  I am a customer.  I am only selling the good things in the market.'],
    ['Caller', 'May I know if you are looking for the petrol or diesel?  Diesel.'],
    ['Respondent', 'Manual or automatic?'],
    ['Caller', 'Automatic.  Do you have any other vehicle?'],
    ['Respondent', 'Let me see later.'],
    ['Caller', 'Not ready to share sir.  What exactly?  Do you have any other vehicle or what?'],
    ['Respondent', 'Let me talk later.'],
    ['Caller', 'Okay, so when should I call you back?'],
    ['Respondent', 'Again and again.'],
    ['Caller', 'It is a teacher organization.'],
    ['Respondent', 'Okay, you are an agent?  No, no.'],
    ['Caller', 'I am a medical professional.  Okay, dental professional.  Medical professional.  May I know in which city do you live in?'],
    ['Respondent', 'Is it possible? It will hardly take two minutes only.  Yeah.'],
    ['Caller', 'Okay, not an issue. I just wanted to know.  Thank you for giving your valuable time.  Have a great day.']
  ];

  const questions = [
    "What is responder's name?",
    "Which other vehicles did the respondent consider along with XUV 300?",
    "Which model is the respondent most seriously considering buying?",
    `What did the respondent like about "${data[10][1]}"?`, // Using the answer from the 10th question
    `What did the respondent not like about "${data[10][1]}"?`, // Using the answer from the 10th question
    "What variant of XUV 300 was the respondent looking at?",
    "What fuel type of XUV 300 was the respondent looking at?",
    "What transmission of XUV 300 was the respondent looking at (automatic or manual)?",
    "What is Hi?",
    "Hello",
    "Bye!"
  ];

  const handleQuestionClick = (question) => {
    setSelectedQuestion(question);
    if(showInsight===false){
      alert('Please select an insight and click on Generate')
    }
  };

  return (
    <section className='px-1 p-3 bg-light-violet' style={{ minHeight: '84vh', overflow: 'auto', minWidth: '100vw' }}>
      <Row className='gap-3 mt-4 mx-1 mb-4 d-flex justify-content-center'>
        <div className='col-12 col-lg-7 p-1'>
          <div className='d-flex gap-2'>
            <div className='bg-white rounded-2 p-1 border-primary border text-primary' onClick={() => navigate(-1)}>
              <ArrowLeftIcon style={{ height: '18px', width: '30px' }} />
            </div>
            <h5 className='fw-bolder ms-2 pt-1'>Select an Insight</h5>
          </div>
          <div className='d-flex flex-column flex-lg-row gap-3 my-2'>
            <div className='bg-white rounded-2 w-auto p-1 border-primary border w-col'>
              {!showData && <Bars3Icon className='text-primary' style={{ height: '18px', width: '30px' }} onClick={() => setShowData(!showData)} />}
              {showData && <XMarkIcon className='text-primary' style={{ height: '18px', width: '30px' }} onClick={() => setShowData(!showData)} />}
              {showData && (
                <p className='p-2 overflow-auto custom-scroll text-black' style={{ maxHeight: '42vh' }}>
                  {data}
                </p>
              )}
            </div>
            <div className='w-100'>
              <ListGroup className='w-100 p-2 bg-white overflow-auto custom-scroll' style={{ maxHeight: '42vh' }}>
                {questions.map((question, index) => (
                  <ListGroup.Item action className='insightlg' key={index} onClick={() => handleQuestionClick(question)}>
                    <small>{question}</small>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <button
                className='btn btn-violet sbtn text-white w-auto rounded-3 mt-3'
                style={{ maxWidth: '45%' }}
                onClick={() => setShowInsight(true)}
              >
                Get Insights
              </button>
            </div>
          </div>
        </div>
        <div className='col-12 col-lg-4 p-1 mt-1 mb-7 pb-3'>
          <h5 className='fw-bolder ms-2 py-1'>Audio.wav</h5>
          <div className='w-100 bg-white p-2 rounded-2 overflow-auto custom-scroll' style={{ maxHeight: '48vh' }}>
            {!showInsight && <center><small>Please select an insight to view.</small></center>}
            {showInsight && (
              <>
                <small>{selectedQuestion}</small>
                <Table striped bordered className='my-2'>
                  <thead>
                    <tr>
                      <th><small>Answer</small></th>
                      <th><small>Verbatim</small></th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Add logic to display the answer and verbatim based on the selected question */}
                    <tr>
                      <td><small className='text-break'>Vazir</small></td>
                      <td><small className='text-break'>Vazir,"Hello, Vazir speaking"</small></td>
                    </tr>
                  </tbody>
                </Table>
              </>
            )}
          </div>
        </div>
      </Row>
    </section>
  );
}

export default Insights;