import React, { useState } from 'react';

const App: React.FC = () => {
    const [image, setImage] = useState<File | null>(null);
    const [editingMode, setEditingMode] = useState(false);
    const [previewMode, setPreviewMode] = useState(false);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setImage(file);
            setEditingMode(true);
        }
    };

    const handleEdit = () => {
        // Handle editing the image here
        console.log('Editing image...');
    };

    const handlePreview = () => {
        setPreviewMode(true);
    };

    return (
        <div>
            <h1>Watermark Remover</h1>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            <button onClick={handleEdit} disabled={!editingMode}>Edit</button>
            <button onClick={handlePreview} disabled={!image}>Preview</button>
            {previewMode && image && <img src={URL.createObjectURL(image)} alt="Preview" />}  
        </div>
    );
};

export default App;