


const fleet = [
    {
        name: "Toyota Innova Crysta",
        image: "https://placehold.co/400x300?text=Toyota+Innova+Crysta",
        features: ["7 Seater", "AC / Heater", "Premium Comfort", "Ample Luggage"],
        price: "Call for Best Rates"
    },
    {
        name: "Maruti Swift Dzire",
        image: "https://placehold.co/400x300?text=Swift+Dzire",
        features: ["4 Seater", "AC / Heater", "Economic", "City & Outstation"],
        price: "Call for Best Rates"
    },
    {
        name: "Maruti Ertiga",
        image: "https://placehold.co/400x300?text=Maruti+Ertiga",
        features: ["6 Seater", "AC / Heater", "Comfortable", "Family Favorite"],
        price: "Call for Best Rates"
    },
    {
        name: "Force Tempo Traveller",
        image: "https://placehold.co/400x300?text=Tempo+Traveller",
        features: ["13/17/20 Seater", "AC / AV System", "Pushback Seats", "Large Groups"],
        price: "Call for Best Rates"
    }
];

const Fleet = () => {
    return (
        <section className="py-20 bg-white" id="fleet">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Premium Fleet</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Choose from our wide range of well-maintained vehicles for a comfortable journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {fleet.map((car, index) => (
                        <div key={index} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={car.image}
                                    alt={car.name}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{car.name}</h3>
                                <ul className="space-y-2 mb-6">
                                    {car.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-gray-600 text-sm">
                                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href="tel:9867211016"
                                    className="block w-full text-center bg-gray-900 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium"
                                >
                                    Book Now
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Fleet;
