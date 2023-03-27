

// export const SkillsServicesSection = () => {
//     return (
//       <section className="bg-zinc-300 py-16">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row items-center justify-between">
//             <div className="md:w-1/2 mb-8 md:mb-0 h-96">
//               <h2 className="text-3xl font-bold mb-4">Skills</h2>
//               <ul className="list-disc list-inside text-lg">
//                 <li className="mb-2">React JS, Next.js, Angular</li>
//                 <li className="mb-2">Node.js, PHP, Python</li>
//                 <li className="mb-2">CSS - Bootstrap, Tailwind, Material UI</li>
//                 <li className="mb-2">PostgreSQL, MySQL, MongoDB</li>
//               </ul>
//             </div>
//             <div className="md:w-1/2 h-96">
//               <h2 className="text-3xl font-bold mb-4">Experience</h2>
//               <ul className="list-disc list-inside text-lg">
//                 <li className="mb-2">Designing web pages from scratch or from concept</li>
//                 <li className="mb-2">Design the functionality to capture and interact with user input</li>
//                 <li className="mb-2">Develop APIs that controll the flow of data going to and from the database</li>
//                 <li className="mb-2">Designing the database and creating the primary and foregin key relationships</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
// };

export const SkillsServicesSection = () => {
    return (
      <section className="bg-zinc-900 py-16">
        <div className="container mx-auto px-4">
            {/* <h3 className="text-3xl   font-semibold pb-10">Skills and Experience</h3> */}
            <div className="flex flex-wrap -mx-4">
                <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                    <div className="bg-white shadow-md p-6 rounded-lg">
                        <div className="flex items-center mb-4">
                            <div className="mr-4">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-blue-500"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                >
                                <path
                                    fillRule="evenodd"
                                    d="M19 14c0 1.1-.9 2-2 2H3a2 2 0 01-2-2V6c0-1.1.9-2 2-2h14a2 2 0 012 2v8zM3 7a1 1 0 011-1h10a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h10a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold">Web Development</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            I have built many full-stack applications utilizing multiple different frameworks and languages, and I have also added onto and maintained previously built applications.
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                    <div className="bg-white shadow-md p-6 rounded-lg">
                        <div className="flex items-center mb-4">
                            <div className="mr-4">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-blue-500"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                >
                                <path
                                    fillRule="evenodd"
                                    d="M19 14c0 1.1-.9 2-2 2H3a2 2 0 01-2-2V6c0-1.1.9-2 2-2h14a2 2 0 012 2v8zM3 7a1 1 0 011-1h10a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h10a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold">UI Design</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                        I have been responsible for the design of the webpage. I am savvy with CSS and understand key principles such as parent-child relationship and how it plays into designing a layout.
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                    <div className="bg-white shadow-md p-6 rounded-lg">
                        <div className="flex items-center mb-4">
                            <div className="mr-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-blue-500"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                <path
                                    fillRule="evenodd"
                                    d="M19 14c0 1.1-.9 2-2 2H3a2 2 0 01-2-2V6c0-1.1.9-2 2-2h14a2 2 0 012 2v8zM3 7a1 1 0 011-1h10a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h10a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold">REST API</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                        I have expertise in creating effective digital marketing
                        strategies that drive traffic and generate leads.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
};
  


  