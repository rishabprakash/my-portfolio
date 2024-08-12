 
import Link from 'next/link';

export
 default 
 function 
 Header()
  {
     return (
      
      <header
       className="bg-gray-800    py-4  text-white ">
        <nav 
      className="container  flex mx-auto  items-center justify-between">
    
         <div
          className="text-3xl font-bold">
            My Portfolio
            </div>
        <ul 
        className=
        "flex space-x-10">
            
            <li>
            <Link 
            href="/" 
            className="hover:text-blue-400">
              Home
              </Link>
             </li>
              <li>
            <Link 
            href="/projects"
             className="hover:text-blue-400"
             >Projects
             </Link>
              </li>
          
            <li>
            <Link 
            href="/contact"
             className="hover:text-blue-400">
              Contact Me
              </Link>
              </li>
          </ul>
          </nav>
       </header>
    
  )
  ;
    } 
