import ParcelDel from "@/components/parcelDel/ParcelDel"

export default async function Page() {
    const list = await fetch('http://localhost:3000/api/parcel', {
        cache: 'no-store',
    })
    // console.log(await list.json());
    const parcelData = await list.json()
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {parcelData.map((data, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 "
                    >
                        <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                📝 Parcel Details
                            </h2>
                            <p className="text-gray-700">
                                <strong>ID:</strong> {data.id}
                            </p>
                            <p className="text-gray-700">
                                <strong>Status:</strong> {data.status}
                            </p>
                            <p className="text-gray-700">
                                <strong>Location:</strong> {data.location}
                            </p>
                            <ParcelDel id={data.id} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}