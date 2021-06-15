import React from "react";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ pictures, onOpenModal }) => <ul className="ImageGallery"><ImageGalleryItem onOpenModal={ onOpenModal} pictures={ pictures}/></ul>;

export default ImageGallery;
