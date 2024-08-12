export default function 
Home() 

{
  return (
    
    <div
     className=" flex flex-col justify-center min-h-screen
      items-center
       bg-gray-900
        text-white"
        >
      <h1 
      className=" font-bold text-6xl mb-4">
        Hi, am Rishab Prakash Singh
        </h1>
      <p
       className=
       " max-w-2xl text-2xl text-center">
        I am a passionate web applicaton and Hybrid applicaton developer.</p>
        <p 
        className="text-2xl 
        max-w-2xl
         text-center"> 
         I master in the indemand web development frameworks and technologies like react , javascript, node.js ,next.js etc


           </p>
   
    <p  className=" max-w-2xl 
    text-2xl
    text-center" >
        Am also a hybrip applicaton developer with React Native </p>      
          <a
        href="/projects"
        className="mt-8 
        px-6
         py-3
          bg-blue-500 
          text-white 
          rounded-lg 
          shadow-lg
           hover:bg-blue-600"
      >
        View My Projects
      </a>
       </div>
  );
    }
