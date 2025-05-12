import DeleteBtn from "@/components/deleteBtn/DeleteBtn";

export default async function Page() {
  const res = await fetch(`http://localhost:3000//api/branch`, {
    cache: 'no-store',
  });

  if (!res.ok) throw new Error("Failed to fetch branch data");

  const data = await res.json();

  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-3xl text-center font-bold text-white py-4 bg-blue-600 rounded-lg mb-6">
        Branch List
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {data.length === 0 ? (
          <p className="text-center text-gray-500 col-span-full">No branches found.</p>
        ) : (
          data.map((branch, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                📍 {branch.city}, {branch.country}
              </h2>
              <div className="text-gray-700 space-y-1">
                <p><strong>Street:</strong> {branch.street}</p>
                <p><strong>State:</strong> {branch.state}</p>
                <p><strong>Zip Code:</strong> {branch.zipcode}</p>
                <p><strong>Contact:</strong> {branch.contact}</p>
                <p><strong>Branch Code:</strong> {branch.branchCode}</p>
                <DeleteBtn id={branch._id} status="branch" />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
