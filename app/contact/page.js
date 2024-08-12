 
export default 
function Contact()
    {
      
      return (
      
      <div 
      className=" flex flex-col min-h-screen 
      items-center bg-gray-800 justify-center  
      text-white">
           <h1
            className="text-6xl
             font-bold 
             mb-8">
              Contact Me
              </h1>
            <form

          action="https://formspree.io/f/mnnavodd"
            method="POST"
                className="
                 max-w-lg w-full 
                 bg-gray-800
                  p-0
                   rounded-lg 
                   shadow-lg"
            >
              <div 
              className="mb-4">
         
            <label 
            htmlFor="name" 
            className="
            block text-lg 
            font-medium"
            >Enter your Name:</label>
              <input
              type="text"  id="name" name="name"
              className="w-full   p-2 bg-gray-700 mt-2    rounded-md text-white"
              required
              />
          </div>
            <div 
            className="mb-4">
           
            <label 
            htmlFor="email"
             className="block font-medium text-lg ">
              Email:
              </label>
           
            <input
                  type= "email"  id="email"  name="email"
      
                  className="w-full
                   p-2 
                   mt-2 
                   bg-gray-700
                    text-white 
                    rounded-md"
                required
            />
          </div>
          <div 
          className="mb-7">
            <label  
             htmlFor="message"
              className="block font-medium text-lg ">
                Message:
                </label>
            <textarea
              id="message"
              name="message"
              className="w-full p-2 mt-2 bg-gray-700 text-white rounded-md"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600"
          >
           
            Send 
            </button>
          </form>
      
    </div>
      ) ;
  
    }
  