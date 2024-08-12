export default function Projects() {
    return (
       <div 
       className="
        bg-gray-900
        min-h-screen
         text-white">

        <div
         className="max-w-6xl
          mx-auto
           py-20 px-6"
           >
          <h1
           className="  text-center
           font-bold
            mb-12">
              My Projects
              </h1>
          <div 
          className="
          grid 
          grid-cols-1
           sm:grid-cols-2 
           lg:grid-cols-3
            gap-8">


                <div
                 className="bg-gray-700 
                 p-6 
                 shadow-lg
                 rounded-lg ">
              <h2
               className="font-semibold
               text-2xl 
                mb-4">
                  Project 1
                  </h2>
              <p
               className="text-gray-400"
              >
             
                This is a Web applicaton , sohwcasing skills like react, nect.js , node.js and database connection  using firebase
              </p>
              <a
                
                href="https://github.com/rishabprakash/cprg306-assignments.git"
                className="block mt-4 text-blue-500 hover:underline"
                target="_blank" rel="react native"

            
            >
                
                View Project
              </a>
             </div>
            <div 
            className="bg-gray-700  rounded-lg
            p-6
             shadow-lg">
              <h2 
              className="text-2xl 
              font-semibold
               mb-4">
                Project 2
                </h2>
              <p 
                  className="text-gray-400">
               This is a react native app which helps user to keep a track of their expenses.
                 </p>
                  <a
                   href="https://github.com/rishabprakash/ExpenseTracker"
                  className="block mt-4 text-blue-500 hover:underline"
                     target="_blank"
                   rel="noopener noreferrer"
                  >
                   View Project
                 </a>
                </div>
            
  
            </div>
      
            </div>
           </div>
    
  
  )
  ;
  }
  