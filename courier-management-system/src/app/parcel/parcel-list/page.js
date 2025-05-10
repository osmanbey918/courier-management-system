import DeleteBtn from "@/components/deleteBtn/DeleteBtn"
import "./style.css"
export default async function Page() {
  const res = await fetch('http://localhost:3000/api/parcel', {
    cache: 'no-store',
  });
  const parcelData = await res.json();

  return (
    <div className="table-container">
      <table className="parcel-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Status</th>
            <th>Location</th>
            <th>Sender</th>
            <th>Receiver</th>
            <th>Weight</th>
            <th>Dimensions</th>
            <th>Delivery Date</th>
            <th>Branch</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {parcelData.map((data, index) => (
            <tr key={index}>
              <td>{data.id}</td>
              <td>{data.status}</td>
              <td>{data.location}</td>
              <td>{data.senderName}</td>
              <td>{data.receiverName}</td>
              <td>{data.weight}</td>
              <td>{data.length}x{data.width}x{data.height} cm</td>
              <td>{data.deliveryDate}</td>
              <td>{data.branch}</td>
              <td><DeleteBtn id={data.id} status="parcel" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  );
}
