import { useRef } from 'react';

function PhotoUpload({ onFileSelect }) {
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && onFileSelect) {
      onFileSelect(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && onFileSelect) {
      onFileSelect(file);
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '16px',
      width: '100%'
    }}>
      <div 
        style={{
          width: '100%',
          borderRadius: '8px',
          border: '2px dashed #cbd5e1',
          backgroundColor: '#f8fafc',
          padding: '32px',
          textAlign: 'center',
          position: 'relative',
          cursor: 'pointer'
        }}
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px'
        }}>
          <div style={{
            display: 'flex',
            height: '48px',
            width: '48px',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            backgroundColor: '#e2e8f0'
          }}>
            <span style={{
              fontSize: '24px',
              color: '#64748b',
              fontFamily: 'Material Symbols Outlined'
            }}>
              upload
            </span>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column'
          }}>
            <p style={{
              fontWeight: '600',
              color: '#374151',
              margin: 0
            }}>
              Drag and drop your photo here
            </p>
            <p style={{
              fontSize: '14px',
              color: '#64748b',
              margin: 0
            }}>
              or click to browse
            </p>
          </div>
          <input 
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{
              position: 'absolute',
              inset: 0,
              height: '100%',
              width: '100%',
              cursor: 'pointer',
              opacity: 0
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default PhotoUpload;