import React from "react";
import PropTypes from "prop-types";

const Images = ({images}) => {
   return (
       <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10"}>
           {images.map((image, i) =>
               <img className="rounded-md aspect-[3/2] object-cover" key={`image-${i}`} src={image.urls.regular} alt=""/>
           )}
       </div>
   )
}

export default Images;

Images.propTypes = {
    images: PropTypes.array
}