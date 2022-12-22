import React from 'react'

export default function Contact() {
  return (
    <>
        <div className='w-full flex flex-col gap-5 mt-5'>
            <div className="flex flex-col items-center gap-2 mt-5">
                <a href="mailto:jalenarms@outlook.com" className="text-slate-400 hover:text-cyan-600">Email </a>
                <a href="mailto:jalenarms@outlook.com" className="text-slate-400 hover:text-cyan-600">jalenarms@outlook.com</a>
            </div>
            <div className="flex flex-col items-center gap-2">
                <p className="text-slate-400">Phone</p>
                <p className="text-slate-400">614-596-8904</p>
            </div>

        </div>
    </>
  )
}
