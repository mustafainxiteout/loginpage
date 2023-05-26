import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ReadData({ fileUrl }) {
  const [fileContent, setFileContent] = useState('');

  const fetchFileContent = () => {
    axios
      .get(fileUrl)
      .then((response) => {
        setFileContent(response.data);
      })
      .catch((error) => {
        console.log('Error fetching file content:', error);
      });
  };

  useEffect(() => {
    if (fileUrl) {
      fetchFileContent();
    }
  }, [fileUrl]);

  return (
    <div>
      {/* Render the file content */}
      <pre>{fileContent}</pre>
    </div>
  );
}

export default ReadData;
