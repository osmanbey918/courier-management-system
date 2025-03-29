export default function Page() {
    return (
        <div>
            <h1 className="text-4xl border-b-2 border-[#f5eae2] ml-5 text-white py-3">Branch List</h1>
            <div className="flex min-h-screen w-full  bg-gray-100 px-6 ">
                <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-none">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Branch List</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-300">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b">Street</th>
                                    <th className="py-2 px-4 border-b">City</th>
                                    <th className="py-2 px-4 border-b">State</th>
                                    <th className="py-2 px-4 border-b">Zip Code</th>
                                    <th className="py-2 px-4 border-b">Country</th>
                                    <th className="py-2 px-4 border-b">Contact</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-2 px-4 border-b">123 Main St</td>
                                    <td className="py-2 px-4 border-b">Springfield</td>
                                    <td className="py-2 px-4 border-b">IL</td>
                                    <td className="py-2 px-4 border-b">62701</td>
                                    <td className="py-2 px-4 border-b">USA</td>
                                    <td className="py-2 px-4 border-b">555-125432454334</td>
                                </tr>
                                {/* Add more rows as needed */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
