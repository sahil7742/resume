import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-slate-800   px-6 py-8  h-screen  ">
        <div className=" flex flex-col ">
        <h1 className="text-4xl font-black drop-shadow-2xl px-5 py-5 text-white underline  ">Sahil Shrivastava</h1>
        <h2 className="text-2xl font-mono  px-5  text-white ">Mern Stack DEV</h2>
        </div>
        <div className="w-1/4 h-auto flex flex-1 ml-5  ">
        <img src="photo.jpeg" className=" mt-5 drop-shadow-2xl  rounded-xl" alt="my photo" />
        </div>
        <div className="flex flex-1 mt-5 text-white font-mono text-justify px-10 -ml-5 ">
        <p>
        Highly skilled and motivated MERN Stack Developer with 
        1 year of experience designing and implementing robust,
         scalable, and user-centric web applications. Proficient in
          all stages of the software development life cycle, from 
          concept and design to testing and deployment. Adept at 
          collaborating with cross-functional teams to drive project 
          success.</p>
         <p> Successfully delivered many of projects using the MERN stack,
           meeting or exceeding client expectations.Implemented responsive
            design principles, resulting in improved user experience and 
            increased customer satisfaction.Collaborated with cross-functional teams to troubleshoot and resolve complex technical issues, ensuring timely project delivery.
        </p>
        </div>
        </div>
     
    
      
   

      


  
  )

}

