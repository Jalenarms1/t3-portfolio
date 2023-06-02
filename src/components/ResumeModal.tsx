import React, { useState, type Dispatch, type SetStateAction } from 'react'
import { Worker, Viewer } from '@react-pdf-viewer/core';
import {BsCloudDownload} from 'react-icons/bs/index';
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';

export default function ResumeModal({toggleModal}: {toggleModal: () => void}) {
    function downloadFile() {
        fetch("https://res.cloudinary.com/dvlhy87zl/image/upload/v1685730233/Jalen_Arms_-_Resume_2023_alwfjk.pdf")
          .then(response => response.blob())
          .then(blob => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "Jalen Arms - Resume (2023).pdf";
            a.click();
            URL.revokeObjectURL(url);
          });
      } 
  return (
    <div className="fixed z-50 inset-0 overflow-y-auto" id="resume-modal">
        <div className="flex items-center justify-center min-h-screen">
            <div className="relative bg-white rounded-md w-2/4  h-[575px] max-sm:w-full max-sm:h-screen overflow-auto mx-auto  pt-5">
                <button onClick={toggleModal} className="absolute top-0 right-0 m-4 z-10 bg-red-500 active:bg-red-700 text-white rounded-sm" aria-label="Close modal">
                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path
                        fill="currentColor"
                        d="M19.7 4.3a1 1 0 0 0-1.4 0L12 10.6l-6.3-6.3a1 1 0 0 0-1.4 1.4L10.6 12l-6.3 6.3a1 1 0 1 0 1.4 1.4L12 13.4l6.3 6.3a1 1 0 0 0 1.4-1.4L13.4 12l6.3-6.3a1 1 0 0 0 0-1.4z"
                    />
                    </svg>
                </button>
                <button onClick={downloadFile} className="absolute top-0 right-10 m-4 z-10" >
                    <BsCloudDownload className='text-3xl active:text-gray-600'/>
                </button>
                
                <div className="pt-10">
                    
                </div>
                <Worker  workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                    <Viewer fileUrl={"https://res.cloudinary.com/dvlhy87zl/image/upload/v1685730233/Jalen_Arms_-_Resume_2023_alwfjk.pdf"} />
                </Worker>
                <div className="pb-10">
                    
                </div>
                <button onClick={toggleModal} className="px-4 py-2 m-2  bg-gray-800 text-white rounded active:bg-gray-700">
                    Close
                </button>
            </div>
        </div>
    </div>

  )
}
