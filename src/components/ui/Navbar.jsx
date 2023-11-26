const Navbar = () => {
  const chessGame = "chessGame"

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <a href="/" className="flex-shrink-0 text-white">
            {chessGame}
          </a>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex space-x-4">
              <button
                href="/"
                className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium bg-red-200">
                Reset
              </button>
              <button
                href="/about"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium bg-gray-400">
                Log
              </button>
              <button
                href="/contact"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Timer :
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
