import Card from "@/components/card/Card";
import {
    ShoppingCart,
    Users,
    Headset,
    Truck,
    BarChart
} from "lucide-react";

export default function StaffDashboard() {
    const cards = [
        { no: 1, heading: "Order Management", icon: <ShoppingCart size={48} strokeWidth={1.5} /> },
        { no: 2, heading: "Customer Support", icon: <Headset size={48} strokeWidth={1.5} /> },
        { no: 3, heading: "User Records", icon: <Users size={48} strokeWidth={1.5} /> },
        { no: 4, heading: "Reports", icon: <BarChart size={48} strokeWidth={1.5} /> },
        { no: 5, heading: "Logistics Coordination", icon: <Truck size={48} strokeWidth={1.5} /> },
    ];

    return (
        <div className="bg-[#D4CFC1] h-auto flex flex-col">
            <h1 className="text-4xl border-b-2 border-[#f5eae2] ml-5 text-white py-3">
                Staff Dashboard
            </h1>
            <div className="flex-1 overflow-y-auto p-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {cards.map((card, index) => (
                        <Card key={index} no={card.no} heading={card.heading} icon={card.icon} />
                    ))}
                </div>
            </div>
        </div>
    );
}
