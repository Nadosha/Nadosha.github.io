import React from 'react'
import { handleImageError } from '@Utils/handleImageError'

const ImageCellRenderer: React.FC<{ value: string }> = ({ value }) => {
    return (
        <img
            style={{ width: '40px', height: '40px', borderRadius: '100%' }}
            src={value}
            onError={handleImageError}
            alt="User Avatar"
        />
    )
}

export default ImageCellRenderer
