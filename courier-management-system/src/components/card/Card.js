export default function Card({ no, heading, icon }) {
    return (
      <div className="flex justify-between items-center p-5 bg-white rounded-xl shadow-md w-full max-w-[360px] h-[130px] border border-gray-300 transition-transform duration-300 ease-in-out hover:border-blue-500 hover:shadow-lg hover:scale-105">
        {/* Left side: Number and Heading */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{no}</h2>
          <p className="text-gray-600 text-sm mt-1">{heading}</p>
        </div>
  
        {/* Right side: Icon */}
        <div className="text-1xl text-gray-500">{icon}</div>
      </div>
    );
  }
  