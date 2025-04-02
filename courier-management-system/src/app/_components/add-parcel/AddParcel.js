export default function AddParcel() {
  return (
    <div>
      <h2>Add Parcel</h2>
      <form>
        <div>
          <label htmlFor="senderName">Sender Name:</label>
          <input type="text" id="senderName" name="senderName" required />
        </div>
        <div>
          <label htmlFor="recipientName">Recipient Name:</label>
          <input type="text" id="recipientName" name="recipientName" required />
        </div>
        <div>
          <label htmlFor="parcelWeight">Parcel Weight (kg):</label>
          <input type="number" id="parcelWeight" name="parcelWeight" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
