
import { Phone, Calendar } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative pt-10 pb-20 lg:pt-20 lg:pb-28 overflow-hidden bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            Explore India <span className="text-orange-500">Comfortably</span> With Omkar Tours & Travels
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            Reliable airport transfers and all-India travel solutions for families and corporate clients.
                            Experience the joy of stress-free travel.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
                            <a
                                href="#booking"
                                className="w-full sm:w-auto px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
                            >
                                <Calendar size={20} />
                                Book Your Trip
                            </a>
                            <a
                                href="tel:9867211016"
                                className="w-full sm:w-auto px-8 py-4 bg-orange-100 text-orange-600 font-semibold rounded-lg hover:bg-orange-200 transition-colors flex items-center justify-center gap-2"
                            >
                                <Phone size={20} />
                                Call Now
                            </a>
                        </div>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm font-medium text-gray-700">
                            <span className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
                                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                Airport Pickup & Drop
                            </span>
                            <span className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
                                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                All-India Tours
                            </span>
                            <span className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
                                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                Family & Corporate
                            </span>
                        </div>
                    </div>

                    {/* Image Grid (Placeholder) */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src="https://placehold.co/300x400?text=Travel+1"
                                alt="Travel Destination"
                                className="rounded-2xl shadow-lg w-full h-48 sm:h-64 object-cover transform translate-y-8"
                            />
                            <img
                                src="https://placehold.co/300x400?text=Travel+2"
                                alt="Happy Family"
                                className="rounded-2xl shadow-lg w-full h-48 sm:h-64 object-cover"
                            />
                            <img
                                src="https://placehold.co/300x400?text=Travel+3"
                                alt="Luxury Car"
                                className="rounded-2xl shadow-lg w-full h-48 sm:h-64 object-cover"
                            />
                            <img
                                src="https://placehold.co/300x400?text=Travel+4"
                                alt="Scenic View"
                                className="rounded-2xl shadow-lg w-full h-48 sm:h-64 object-cover transform -translate-y-8"
                            />
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-50 rounded-full blur-3xl opacity-50"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
