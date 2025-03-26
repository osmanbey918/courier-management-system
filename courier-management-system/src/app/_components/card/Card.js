import "./styles.css";

export default function Card({ no, heading }) {
    return (
        <div className="card bg-white shadow-md rounded-lg p-4 w-full sm:w-1/2 md:w-1/3">
            <div className="text-wrapper">
                <h2 className="text-xl font-bold">{no}</h2>
                <p className="text-gray-700">{heading}</p>
            </div>
            <div className="icon text-2xl mb-2">*</div>
        </div>
    );
}
