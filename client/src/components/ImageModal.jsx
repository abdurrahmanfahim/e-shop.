import React from "react";
import { RxCross1 } from "react-icons/rx";

const ImageModal = ({ setIsModalOpen, isModalOpen, imgSrc }) => {

  return (
    isModalOpen && (
      <div className="w-screen h-screen fixed top-0 left-0 z-50 bg-black/80 " onClick={() => setIsModalOpen(false)}>
        <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10/12 sm:w-8/12 max-h-[80vh] rounded-[25px] overflow-hidden flex items-center justify-center bg-white p-4 relative" onClick={(e) => e.stopPropagation()}>
          <img className="max-w-full max-h-full object-scale-down mx-auto" src={imgSrc} alt="Modal" />
          <span
            className="absolute top-3 right-3 p-2 rounded-full bg-black/10 hover:bg-black/20 hover:text-red-600 cursor-pointer"
            onClick={() => setIsModalOpen(false)}
          >
            <RxCross1 />
          </span>
        </div>
      </div>
    )
  );
};

export default ImageModal;
