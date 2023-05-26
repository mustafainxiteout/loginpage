import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import FileUploader from './FileUploader';
import { Row} from 'react-bootstrap';
import GetFiles from './GetFiles';
import {PencilIcon} from '@heroicons/react/24/outline'

function ViewUsecase() {
  const [checked, setChecked] = useState(true);
  const [edit,setEdit] = useState(true);

  const handleChange = () => {
    setChecked(!checked);
  };

  const {ucid}=useParams();
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
    ['Caller', 'Okay, not an issue. I just wanted to know.  Thank you for giving your valuable time.  Have a great day.'],
  ];

  return (
    <section className='p-3 px-1 bg-light-violet' style={{minHeight:"84vh",overflow:'auto',minWidth:"100vw"}}>
    <div className='m-1 mt-2 me-md-4 d-flex justify-content-end'>
    <div className='d-inline rounded-5 px-2 card-violet' style={{paddingBottom:"0.4rem",paddingTop:"0.4rem",position:"static",transition: "all 0.5s ease-in-out"}}>
      <div className={`${checked? 'bg-light p-1 px-3 rounded-4 d-inline':'p-1 px-3 d-inline  text-white '}`}  onClick={handleChange}><small>Audio</small></div>
      <div className={`${checked? 'p-1 px-3 d-inline text-white ':'bg-light p-1 px-3 rounded-4 d-inline'}`} onClick={handleChange}><small>Transcript</small></div>
    </div>
    </div>
    <Row className='gap-5 mt-4 m-2 mb-4 mx-0 mx-md-2 d-flex justify-content-center'>
    <div className='col-12 col-lg-5 p-2'>
      <h5 className='fw-bolder ms-2'>Upload or Select {checked?'Audio':'Text'} File</h5>
      <small className='ms-2'>Upload or select file to be transcribed</small>
      <FileUploader checked={checked}/>
      <GetFiles checked={checked}/>
    </div>
    <div className='col-12 col-lg-4 offset-lg-1 mb-5'>
      <h5 className='fw-bolder ms-2'>Transcript</h5>
      <div className='container-fluid border mt-3 p-3 rounded-4 bg-white'>
      <div className='d-flex justify-content-end py-2'><button className='btn rounded-circle picon' onClick={()=>setEdit(!edit)}><PencilIcon className="text-white" style={{height:"14px",width:"14px"}}/></button></div>
        <div className='container-fluid bg-light py-2 rounded-4 overflow-auto custom-scroll' style={{height:"46vh"}}>
        {edit?(
        data.map((item, index) => (
          <p key={index}>
            <strong>{item[0]}:</strong> {item[1]}
          </p>
        ))
        ):
        ( 
        <p>{'Hi'}</p>
        )
        }
        </div>
      </div>
      <div className='d-flex justify-content-end  mt-3'>
    <button className='btn btn-violet sbtn text-white w-50 rounded-3'>Proceed</button>
    </div>
    </div>
    </Row>
    </section>
  )
}

export default ViewUsecase