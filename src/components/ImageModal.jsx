import React from "react";
import { RxCross1 } from "react-icons/rx";

const ImageModal = ({ setIsModalOpen, isModalOpen, imgSrc }) => {

  return (
    isModalOpen && (
      <div className="w-screen h-screen fixed top-0 left-0 z-50 bg-black/80 ">
        <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-9/12 h-9/12 rounded-[25px] overflow-hidden flex items-center justify-center">
          <img className="max-w-full max-h-full object-scale-down mx-auto" src={imgSrc} alt="Modal" />
        </div>
          <span
            className="absolute top-3.5 right-6.5 block p-4 rounded-full bg-white/20 hover:text-red-600 hover:bg-white/40 cursor-pointer "
            onClick={() => setIsModalOpen(false)}
          >
            <RxCross1 />
          </span>
      </div>
    )
  );
};

export default ImageModal;
