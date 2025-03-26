import Card from "../_components/card/Card";
import './styles.css';
export default function Page() {
    const cards = [
        { no: 1, heading: "Inventory Management" },
        { no: 2, heading: "Order Processing" },
        { no: 3, heading: "User Management" },
        { no: 4, heading: "Reports & Analytics" },
        { no: 5, heading: "Warehouse Automation" },
        { no: 6, heading: "Customer Support" },
        { no: 6, heading: "Customer Support" },
    ];
    return (
        <div className="card-container">
            {cards.map((card, index) => (
                <Card key={index} no={card.no} heading={card.heading} />
            ))}
        </div>
    );

}
