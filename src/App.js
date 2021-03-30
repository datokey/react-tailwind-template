import { useState } from 'react'

function App() {
  const [isOpen, setOpen] = useState(false)
  const [transleteX, setTransleteX] = useState(" -translate-x-full ")

  const togle = () => {
    setOpen(!isOpen)
    changeClass()
  }

  const changeClass = () => {
    if (isOpen === false) {
      setTransleteX(" ")
    } else {
      setTransleteX(" -translate-x-full ")
    }
  }
  return (
    <div className="relative min-h-screen md:flex">
      {/* mobile menu bar */}
      <div className="bg-gray-800 text-gray-100 flex justify-between items-center md:hidden">
        <a href="#" className=" block p-4 text-white font-bold">Logo Mobile</a>

        {/* mobile menu button */}
        <button onClick={togle} className="btn p-4 focus:outline-none focus:bg-gray-800 cursor-pointer"><svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
        </svg></button>

      </div>


      {/* sidebar */}
      <div className={"flex flex-col justify-between bg-blue-800 text-blue-100 w-60 space-y-6 px-2 py-7 absolute inset-y-0 transform duration-700 ease-in-out md:relative md:translate-x-0  " + transleteX}>
        {/* logo */}
        <div>
          <a className="flex space-x-3 text-white items-center px-4">
            <svg
              className="w-28 h-20"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
            </svg>
            <span className="text-2xl font-extrabold">Nonton Film</span>
          </a>

          {/* nav */}

          <nav>
            <a className="block py-2.5 pl-4 hover:bg-blue-900 rounded transition duration-200">Home</a>
            <a className="block py-2.5 pl-4 hover:bg-blue-900 rounded transition duration-200">About</a>
            <a className="block py-2.5 pl-4 hover:bg-blue-900 rounded transition duration-200">Features</a>

          </nav>
        </div>
        <div>
          <a className="block px-5 py-2.5 font-extrabold text-2xl cursor-pointer hover:bg-blue-900 rounded transition duration-500"> login</a>
        </div>
      </div>


      <div className="flex-1 p-10 ">

      {/* kontent ada di sini       */}



      </div>
    </div>
  );
}

export default App;
