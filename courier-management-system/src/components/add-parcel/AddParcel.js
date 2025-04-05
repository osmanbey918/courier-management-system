export default function AddParcel() {
  return (
    <div className="max-w-md mx-auto p-6 border border-gray-300 rounded-lg bg-gray-50">
      <h2 className="text-xl font-bold mb-4">Add Parcel</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="senderName" className="block text-sm font-medium text-gray-700">
            Sender Name:
          </label>
          <input
            type="text"
            id="senderName"
            name="senderName"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="recipientName" className="block text-sm font-medium text-gray-700">
            Recipient Name:
          </label>
          <input
            type="text"
            id="recipientName"
            name="recipientName"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="parcelWeight" className="block text-sm font-medium text-gray-700">
            Parcel Weight (kg):
          </label>
          <input
            type="number"
            id="parcelWeight"
            name="parcelWeight"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
