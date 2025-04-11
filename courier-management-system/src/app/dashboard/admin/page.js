import Card from "@/components/card/Card";
import {
    Boxes,
    ShoppingCart,
    Users,
    BarChart,
    Warehouse,
    Headset,
    Truck,
} from "lucide-react";


export default function Page() {
    const cards = [
        { no: 1, heading: "Inventory Management", icon: <Boxes size={48} strokeWidth={1.5} /> },
        { no: 2, heading: "Order Processing", icon: <ShoppingCart size={48} strokeWidth={1.5} /> },
        { no: 3, heading: "User Management", icon: <Users size={48} strokeWidth={1.5} /> },
        { no: 4, heading: "Reports & Analytics", icon: <BarChart size={48} strokeWidth={1.5} /> },
        { no: 5, heading: "Warehouse Automation", icon: <Warehouse size={48} strokeWidth={1.5} /> },
        { no: 6, heading: "Customer Support", icon: <Headset size={48} strokeWidth={1.5} /> },
        { no: 7, heading: "Logistics", icon: <Truck size={48} strokeWidth={1.5} /> },
      ];
      


    return (
        <div className="bg-[#C4B8AA] h-auto flex flex-col">

            <h1 className="text-4xl border-b-2 border-[#f5eae2] ml-5 text-white py-3">
                Home
            </h1>

            {/* Cards Grid */}
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
