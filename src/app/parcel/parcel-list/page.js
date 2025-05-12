import DeleteBtn from "@/components/deleteBtn/DeleteBtn"

export default async function Page() {
  const res = await fetch('http://localhost:3000/api/parcel', {
    cache: 'no-store',
  });
  const parcelData = await res.json();

  return (
    <section className="min-h-[87vh] bg-gray-100 py-10 px-5 overflow-hidden">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Parcel List
        </h2>
        <div className="max-h-[600px] overflow-y-auto">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 min-w-[800px] overflow-hidden">
              <thead className="sticky top-0 bg-gray-200">
                <tr className="bg-gray-200">
                  <th className="p-3 border"><strong>ID:</strong></th>
                  <th className="p-3 border"><strong>Status:</strong></th>
                  <th className="p-3 border"><strong>Location:</strong></th>
                  <th className="p-3 border"><strong>Sender:</strong></th>
                  <th className="p-3 border"><strong>Receiver:</strong></th>
                  <th className="p-3 border"><strong>Weight:</strong></th>
                  <th className="p-3 border"><strong>Dimensions:</strong></th>
                  <th className="p-3 border"><strong>Delivery Date:</strong></th>
                  <th className="p-3 border"><strong>Branch:</strong> </th>
                  <th className="p-3 border"><strong>Delete</strong> </th>
                </tr>
              </thead>
              <tbody>
                {parcelData.map((data, index) => (
                  <tr key={index} className="text-center">
                    <td className="p-2 border">{data.id}</td>
                    <td className="p-2 border">{data.status}</td>
                    <td className="p-2 border">{data.location}</td>
                    <td className="p-2 border">{data.senderName}</td>
                    <td className="p-2 border">{data.receiverName}</td>
                    <td className="p-2 border">{data.weight}</td>
                    <td className="p-2 border">{data.length}x{data.width}x{data.height} cm</td>
                    <td className="p-2 border">{data.deliveryDate}</td>
                    <td className="p-2 border">{data.branch}</td>
                    <td className="p-3 border"><DeleteBtn id={data.id} status="parcel" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
