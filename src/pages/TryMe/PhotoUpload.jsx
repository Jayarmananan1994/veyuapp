import { useRef, useState } from 'react';

function PhotoUpload({ onFileSelect }) {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileSelection = (file) => {
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      
      // Create image preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
      
      if (onFileSelect) {
        onFileSelect(file);
      }
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    handleFileSelection(file);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFileSelection(file);
  };

  const handleRemoveImage = (e) => {
    e.stopPropagation();
    setSelectedFile(null);
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    if (onFileSelect) {
      onFileSelect(null);
    }
  };

  const uploadAreaStyle = {
    width: '100%',
    borderRadius: '8px',
    border: `2px dashed ${isDragging ? '#7c3aed' : (selectedFile ? '#10b981' : '#cbd5e1')}`,
    backgroundColor: isDragging ? '#f3e8ff' : (selectedFile ? '#f0fdf4' : '#f8fafc'),
    padding: selectedFile ? '16px' : '32px',
    textAlign: 'center',
    position: 'relative',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  };

  if (selectedFile && imagePreview) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
        width: '100%'
      }}>
        <div 
          style={uploadAreaStyle}
          onClick={handleClick}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <div style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px'
          }}>
            <img 
              src={imagePreview}
              alt="Uploaded preview"
              style={{
                maxWidth: '200px',
                maxHeight: '200px',
                objectFit: 'cover',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px'
            }}>
              <p style={{
                fontWeight: '600',
                color: '#374151',
                margin: 0,
                fontSize: '14px'
              }}>
                {selectedFile.name}
              </p>
              <p style={{
                fontSize: '12px',
                color: '#64748b',
                margin: 0
              }}>
                Click to change or drag new image here
              </p>
            </div>
            
            <button
              onClick={handleRemoveImage}
              style={{
                position: 'absolute',
                top: '-8px',
                right: 'calc(50% - 108px)',
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                backgroundColor: '#ef4444',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                fontWeight: 'bold',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                zIndex: 1
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#dc2626'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#ef4444'}
            >
              ×
            </button>
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
    );
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '16px',
      width: '100%'
    }}>
      <div 
        style={uploadAreaStyle}
        onClick={handleClick}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
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
            backgroundColor: isDragging ? '#c084fc' : '#e2e8f0',
            transition: 'background-color 0.3s ease'
          }}>
            <span style={{
              fontSize: '24px',
              color: isDragging ? 'white' : '#64748b',
              fontFamily: 'Material Symbols Outlined',
              transition: 'color 0.3s ease'
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
              color: isDragging ? '#7c3aed' : '#374151',
              margin: 0,
              transition: 'color 0.3s ease'
            }}>
              {isDragging ? 'Drop your photo here' : 'Drag and drop your photo here'}
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