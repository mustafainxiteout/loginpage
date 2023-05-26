import React, { useEffect, useState, useRef } from 'react';
import { Accordion, FormCheck } from 'react-bootstrap';
import axios from 'axios';

function GetFiles({checked}) {
    const [files, setFiles] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const [msg,setMsg]=useState(false);
    const audioRefs = useRef([]);
    const [fileContent, setFileContent] = useState('');

    const fetchFiles = ({ check, apiUrl }) => {
      axios
        .get(apiUrl)
        .then((response) => {
          setFiles(response.data[0].files);
          setMsg(false);
        })
        .catch((error) => {
          console.log('Error fetching files:', error);
          setMsg(true);
        });
    };
  

    // Fetch groups from the Flask API
    useEffect(() => {
      let apiUrl = checked ? '/filesupload/Inxiteout/uc001' : '/filesupload/Inxiteout/uc004'; // Update apiUrl based on checked state
      fetchFiles({ check: checked, apiUrl });
    }, [checked]);

// ...


    const handleFileSelection = (e) => {
      setSelectedFile(e.target.value);
      if (!checked){
        const file = files.find((file) => file.file_name === (e.target.value));
        const fileUrlpath = file.file_url;
        const fileUrl = `http://localhost:8000/${encodeURIComponent(fileUrlpath)}`;
      }
    };

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
  
    const countWords = () => {
      let totalCount = 0;
      for (const [, sentence] of data) {
        const words = sentence.split(' ');
        totalCount += words.length;
      }
      return totalCount;
    };
    

  return (
    <section className='mt-4'>
    <div className='card rounded-4'>
    <div className='card card-header bg-white rounded-4 acc-header border-0 p-0'>
    <div className='text-black d-flex align-items-center justify-content-between'>
    <span className='border-bottom px-3 w-100 p-2'>Or Select from {checked?'Audio':'Text'} file</span>
    </div> 
    </div>
    <div className='card card-body rounded-4 border-0'>
      { !msg && (
      <Accordion className="custom-accordion custom-scroll" style={{maxHeight: "200px", overflowY: "auto",overflowX:"hidden"}}>
      {files.map((file, index) => (
      <Accordion.Item eventKey={index.toString()} key={index}>
        <Accordion.Header>
          <div className='d-flex flex-column flex-md-row gap-2'><div className='d-flex gap-2'><FormCheck type='radio' className='rx' id={file.file_name} name='fileSelection' value={file.file_name} onChange={handleFileSelection}/><small className={`${checked?'me-3 text-ws':'me-3 text-break'}`} title={file.file_name}>{file.file_name}</small></div>{checked && <audio className='audioplay' ref={ref => (audioRefs.current[index] = ref)} controls controlsList="noplaybackrate nodownload nofullscreen" src={`http://localhost:8000/${encodeURIComponent(file.file_url)}`} type="audio/mpeg"/>}</div></Accordion.Header>
        <Accordion.Body>
          <div className='d-flex gap-4'>
        {checked?
        (
        <><small>LENGTH: {Math.floor(audioRefs.current[index]?.duration/60 || 0)}:{Math.floor(audioRefs.current[index]?.duration%60 || 0)} SEC</small><small>SIZE: {file.file_size} MB</small></>
        ):(
        <><small>WORDS COUNT: {countWords()}</small><small>SIZE: {file.file_size} MB</small></>
        )
        }
        </div>
        {!checked && <p>{data}</p>}
        </Accordion.Body>
      </Accordion.Item>
      ))}
      </Accordion>
     )}
     {msg && <p className='mt-3 p-2 px-3 border rounded-3 bg-light'>No Files Found.</p>}
     </div>
    </div>
    <div className='d-flex justify-content-end  mt-3'>
    <button className={`${selectedFile?'btn btn-violet sbtn text-white w-50 rounded-3':'btn btn-violet sbtn text-white w-50 rounded-3 disabled'}`}>Transcribe</button>
    </div>
  </section>
  );
}

export default GetFiles;