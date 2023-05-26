import React, { useState, useEffect } from 'react';
import { Form, Spinner } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';

function FileUploader({checked}) {
  const [groups, setGroups] = useState([]);
  const [usecases, setUsecases] = useState([]);
  const [groupOption, setGroupOption] = useState('');
  const [usecaseOption, setUsecaseOption]=useState('')
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const fetchGroups = () => {
    // Replace 'API_URL' with the actual URL of your Flask API
    
  };


  const fetchUsecases = () => {
    // Replace 'API_URL' with the actual URL of your Flask API
   
  };

  const handleUsecaseChange = (event) => {
    const selectedusecase = event.target.value;
    setUsecaseOption(selectedusecase);
  };

  useEffect(() => {
    fetchGroups();
    fetchUsecases();
  }, []);


  const acceptedFileTypes = checked
  ? {
      'audio/wav': ['.wav'],
      'audio/mpeg': ['.mp3'],
    }
  : {
      'text/plain': ['.txt']
    };

const maxFileSize = checked
  ? {
      '.mp3': 50 * 1024 * 1024, // 50MB
      '.wav': 50 * 1024 * 1024, // 50MB
    }
  : {
      '.txt': 10 * 1024 * 1024, // 10MB
    };

  function getFileExtension(filename) {
    return '.' + filename.split('.').pop().toLowerCase();
  }

  function handleFileChange(acceptedFiles) {
    const validatedFiles = acceptedFiles.filter(file => {
      const fileExtension = getFileExtension(file.name);
      const fileSize = file.size;

      if (!acceptedFileTypes[file.type]?.includes(fileExtension)) {
        alert('Invalid file type. Only text, mp3, wav, csv, and excel files are allowed.');
        return false;
      }

      if (fileSize > maxFileSize[fileExtension]) {
        alert(`File size exceeds the limit for ${fileExtension} files.`);
        return false;
      }

      return true;
    });

    setFiles(validatedFiles);
  }

  const { getRootProps, getInputProps } = useDropzone({
    accept: acceptedFileTypes,
    maxSize: Math.max(...Object.values(maxFileSize)),
    onDrop: handleFileChange,
    multiple: false,
  });

  const emptyFilesState=()=>{
    setFiles([]);
    setGroupOption('');
    setUsecaseOption('');
  }

  const simulateUpload = () => {
    const interval = setInterval(() => {
      for (let i = progress; i <= 110; i += 10) {
        setTimeout(() => {
          const updatedProgress = i > 100 ? 100 : i;
          setProgress(updatedProgress);
          if (i === 110) {
            setIsLoading(false);
            setProgress(0);
            emptyFilesState();
            alert('Files Uploaded Successfully!');
          }
        }, 100 * (i - progress));
      }
      clearInterval(interval);
      // Handle the response from the upload if needed
    }, 100);
  }; 
  
  function convertBytesToMB(bytes) {
    const megabytes = bytes / (1024 * 1024);
    return megabytes.toFixed(2);
  }  

  const handleFileUpload = () => {
    if (files.length > 0 && groupOption && usecaseOption) {
      setIsLoading(true);
      setProgress(0);
      const formData = new FormData();
      formData.append('file', files[0]);
      formData.append('group', groupOption);
      formData.append('ucid', usecaseOption)
      
    }
    else{
        alert('No Files/Options are Selected.');
    }
  };  

  return (
    <div className='mt-3 mb-4'>
    <section>
    <div className='w-100 text-center rounded-4 bg-white shadow-small' style={{borderStyle:"dashed",borderColor:"#6C98E1"}}>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <div className='p-5 d-flex flex-column'>
        <h5>Click to upload or Drag and drop</h5>
        <small>Maximum file size {checked?'50':'10'} MB</small>
        </div>
      </div>
      <aside>
          {files.map(file => (
            <p className='border py-3 mx-3 px-2 rounded-3 bg-light text-break' key={file.path}>
              {file.path} - {convertBytesToMB(file.size)} MB
              {!isLoading && <button className='btn shadow-small wbtn rounded-3 border ms-3 me-2 p-1 px-2' onClick={handleFileUpload}>Upload</button>}
            </p>
          ))}
      </aside>
    </div>
    {isLoading &&
          <div className='mt-3 ms-1'>
            <Spinner animation="border" size="sm" role="status" aria-hidden="true" className='me-2' />
            Uploading... {progress}%
          </div>
    }
    </section>
    </div>
  );
}

export default FileUploader;