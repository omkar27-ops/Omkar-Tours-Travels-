import { Shield, Clock, Heart } from 'lucide-react';

const About = () => {
    return (
        <div className="pt-20">
            {/* Header */}
            <div className="bg-gray-900 py-20 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
                <p className="text-gray-400 text-lg">Your trusted partner for journeys across India</p>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
                    <div className="w-full lg:w-1/2">
                        <img
                            src="https://placehold.co/600x400?text=Our+Office+Team"
                            alt="Omkar Travels Team"
                            className="rounded-2xl shadow-lg w-full"
                        />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Omkar Tours & Travels is a premier travel agency dedicated to providing safe, reliable, and comfortable travel solutions.
                            With years of experience in the industry, we understand that every journey is special. Whether it's a family vacation,
                            a corporate trip, or an airport transfer, we ensure you reach your destination with a smile.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Our fleet of well-maintained vehicles and professional drivers are at your service 24/7. We pride ourselves on
                            transparency, punctuality, and customer satisfaction.
                        </p>
                    </div>
                </div>

                {/* Values */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center p-8 bg-orange-50 rounded-2xl">
                        <Shield className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Safety First</h3>
                        <p className="text-gray-600">Your safety is our top priority. Our cars are regularly inspected and drivers are verified.</p>
                    </div>
                    <div className="text-center p-8 bg-orange-50 rounded-2xl">
                        <Clock className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Always On Time</h3>
                        <p className="text-gray-600">We value your time. Punctuality is the hallmark of our service, especially for airport drops.</p>
                    </div>
                    <div className="text-center p-8 bg-orange-50 rounded-2xl">
                        <Heart className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Customer Focus</h3>
                        <p className="text-gray-600">We go the extra mile to make your journey comfortable and memorable.</p>
                    </div>
                </div>

                {/* Testimonials Section */}
                <div className="mt-20 mb-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Real stories from our happy travelers.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Rajesh Kumar",
                                location: "Mumbai",
                                text: "Excellent service! The Innova was clean and the driver was very polite. Highly recommended for family trips.",
                                rating: 5
                            },
                            {
                                name: "Priya Sharma",
                                location: "Pune",
                                text: "Booked a tempo traveller for our office outing. The process was smooth and the journey was comfortable.",
                                rating: 5
                            },
                            {
                                name: "Amit Patel",
                                location: "Gujarat",
                                text: "Best travel agency in Mumbai. Reliable airport pickup and reasonable rates. Will book again.",
                                rating: 5
                            }
                        ].map((review, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <div key={i} className="w-5 h-5 fill-current text-orange-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-6 italic">"{review.text}"</p>
                                <div>
                                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                                    <p className="text-sm text-gray-500">{review.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
