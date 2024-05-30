import React from 'react'

const ImageCellRenderer: React.FC<{ value: string }> = ({ value }) => {
    return (
        <img
            style={{ width: '40px', height: '40px', borderRadius: '100%' }}
            src={value}
            alt="User Avatar"
        />
    )
}

export default ImageCellRenderer
