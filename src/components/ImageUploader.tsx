import React, { useState } from 'react';

const ImageUploader = () => {
    const [file, setFile] = useState(null);

    const handleDrop = (event) => {
        event.preventDefault();
        const droppedFile = event.dataTransfer.files[0];
        if (droppedFile) {
            setFile(droppedFile);
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    return (
        <div onDrop={handleDrop} onDragOver={handleDragOver} style={{border: '2px dashed #ccc', padding: '20px', textAlign: 'center'}}>
            <p>Drag and drop an image here</p>
            {file && <p>{file.name}</p>}
        </div>
    );
};

export default ImageUploader;