import Card from "@/components/card/Card";
import {
    Truck,
    ShoppingCart,
    Headset,
    BarChart
} from "lucide-react";

export default function DeliveryDashboard() {
    const cards = [
        { no: 1, heading: "My Deliveries", icon: <Truck size={48} strokeWidth={1.5} /> },
        { no: 2, heading: "Pickup Orders", icon: <ShoppingCart size={48} strokeWidth={1.5} /> },
        { no: 3, heading: "Customer Queries", icon: <Headset size={48} strokeWidth={1.5} /> },
        { no: 4, heading: "Delivery Stats", icon: <BarChart size={48} strokeWidth={1.5} /> },
    ];

    return (
        <div className="bg-[#C0B9A1] h-auto flex flex-col">
            <h1 className="text-4xl border-b-2 border-[#f5eae2] ml-5 text-white py-3">
                Delivery Dashboard
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
