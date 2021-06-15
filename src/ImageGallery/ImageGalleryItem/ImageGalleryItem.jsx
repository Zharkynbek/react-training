import React from "react";

const ImageGalleryItem = ({ pictures, onOpenModal }) => (
    <>
        {pictures.map(({webformatURL, id, largeImageURL, tags}) => (
            <li key={id} className="ImageGalleryItem" onClick={onOpenModal}>
                <img src={webformatURL} data-source={ largeImageURL}alt={tags} className="ImageGalleryItem-image" />
</li>
        ))}
        </>
    
)


export default ImageGalleryItem;
