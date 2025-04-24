import DeleteBtn from "@/components/deleteBtn/DeleteBtn"

export default async function Page() {
  const res = await fetch('http://localhost:3000/api/parcel', {
    cache: 'no-store',
  });
  const parcelData = await res.json();

  return (
    <div className="bg-[#F5F5F5] min-h-screen py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">📦 All Parcels</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {parcelData.map((data, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-2">
              <h2 className="text-xl font-semibold text-gray-800">
                📝 Parcel Details
              </h2>
              <p><strong>ID:</strong> {data.id}</p>
              <p><strong>Status:</strong> {data.status}</p>
              <p><strong>Location:</strong> {data.location}</p>
              <p><strong>Sender:</strong> {data.senderName}</p>
              <p><strong>Receiver:</strong> {data.receiverName}</p>
              <p><strong>Weight:</strong> {data.weight} kg</p>
              <p><strong>Dimensions:</strong> {data.length}x{data.width}x{data.height} cm</p>
              <p><strong>Delivery Date:</strong> {data.deliveryDate}</p>
              <p><strong>Branch:</strong> {data.branch}</p>
              <DeleteBtn id={data.id} status="parcel" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
