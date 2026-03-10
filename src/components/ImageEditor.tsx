import React, { useRef, useEffect, useState } from 'react';

const ImageEditor: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [image, setImage] = useState<HTMLImageElement | null>(null);

    useEffect(() => {
        if (canvasRef.current && image) {
            const ctx = canvasRef.current.getContext('2d');
            if (ctx) {
                ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
                ctx.drawImage(image, 0, 0);
            }
        }
    }, [image]);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const img = new Image();
            img.src = URL.createObjectURL(file);
            img.onload = () => setImage(img);
        }
    };

    const drawWatermark = (watermark: string) => {
        if (canvasRef.current) {
            const ctx = canvasRef.current.getContext('2d');
            if (ctx && image) {
                ctx.drawImage(image, 0, 0);
                ctx.font = '30px Arial';
                ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
                ctx.fillText(watermark, 10, 50);
            }
        }
    };

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            <canvas ref={canvasRef} width={800} height={600} />
            <div>
                <button onClick={() => drawWatermark('Sample Watermark')}>Add Watermark</button>
                <button onClick={() => setImage(null)}>Remove Watermark</button>
            </div>
        </div>
    );
};

export default ImageEditor;