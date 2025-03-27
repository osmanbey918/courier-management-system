import Card from "../_components/card/Card";
import Header from "../_components/header/Header";

export default function Page() {
    const cards = [
        { no: 1, heading: "Inventory Management" },
        { no: 2, heading: "Order Processing" },
        { no: 3, heading: "User Management" },
        { no: 4, heading: "Reports & Analytics" },
        { no: 5, heading: "Warehouse Automation" },
        { no: 6, heading: "Customer Support" },
        { no: 7, heading: "Logistics" },
    ];

    return (
        <div className="bg-[#C4B8AA] min-h-screen">
            <Header />
            <h1 className="text-4xl border-b-2 border-[#f5eae2] ml-5 text-white py-3">Home</h1>

            {/* Cards Grid */}
            <div className="max-w-[100%] mx-auto p-5 flex flex-wrap gap-5 ">
                {cards.map((card, index) => (
                    <Card key={index} no={card.no} heading={card.heading} />
                ))}
            </div>

            {/* Footer */}
            <div className="text-center text-white py-5 bg-gray-900 mt-5">
                <h1 className="text-lg">Courier Management System</h1>
            </div>
        </div>
    );
}
