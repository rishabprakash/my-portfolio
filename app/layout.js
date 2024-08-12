import  { Inter }   from "next/font/google";

import Header from "./components/Header";
import "./globals.css";
import Footer from "./components/Footer";

const
 inter = Inter({ subsets: ["latin"] })
 ;

export 
const metadata =
 
{
  
  title: 
  "My Portfolio",
  description: 
  "my portfolio website",
};

export default 
function
 RootLayout({ children })
  {
  return (

    <html
     lang="en">
      <body 
      className={`${inter.className} 
       text-white
       bg-gray-900
       `  }>
        <Header
         />
        <main
         className="flex-grow">
          {children}
          </main>
      
      
        <Footer />
      </body>
      </html>
    ) ;


  }
