import React, { useState } from 'react';
import { Send } from 'lucide-react';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        travelType: 'Airport Transfer',
        pickup: '',
        drop: '',
        date: '',
        passengers: '1',
        carType: 'Swift Dzire',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Construct WhatsApp message
        const text = `*New Booking Enquiry*\n\nName: ${formData.name}\nPhone: ${formData.phone}\nTrip: ${formData.travelType}\nFrom: ${formData.pickup}\nTo: ${formData.drop}\nDate: ${formData.date}\nCar: ${formData.carType}\nPassengers: ${formData.passengers}\nMessage: ${formData.message}`;

        // Redirect to WhatsApp
        const encodedText = encodeURIComponent(text);
        window.open(`https://wa.me/919867211016?text=${encodedText}`, '_blank');
    };

    return (
        <section className="py-20 bg-orange-50" id="booking">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-5">

                        {/* Form Info Side */}
                        <div className="lg:col-span-2 bg-gray-900 p-10 text-white flex flex-col justify-center">
                            <h3 className="text-3xl font-bold mb-6">Plan Your Journey</h3>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Fill out the form to get a quick quote or call us directly for instant booking.
                            </p>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Call Us</p>
                                    <p className="text-2xl font-bold text-orange-500">9867211016</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Email</p>
                                    <p className="text-lg">omkartourstravels06@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Form Side */}
                        <div className="lg:col-span-3 p-10">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Travel Type</label>
                                        <select
                                            name="travelType"
                                            value={formData.travelType}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all bg-white"
                                        >
                                            <option>Airport Transfer</option>
                                            <option>Outstation One-Way</option>
                                            <option>Outstation Round Trip</option>
                                            <option>Local Hourly Rental</option>
                                            <option>Corporate Trip</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Car Type</label>
                                        <select
                                            name="carType"
                                            value={formData.carType}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all bg-white"
                                        >
                                            <option>Swift Dzire (4 Seater)</option>
                                            <option>Toyota Innova (7 Seater)</option>
                                            <option>Ertiga (6 Seater)</option>
                                            <option>Tempo Traveller (13+ Seater)</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Location</label>
                                        <input
                                            type="text"
                                            name="pickup"
                                            value={formData.pickup}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                                            placeholder="Enter pickup area"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Drop Location</label>
                                        <input
                                            type="text"
                                            name="drop"
                                            value={formData.drop}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                                            placeholder="Enter destination"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Travel Date</label>
                                        <input
                                            type="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Passengers</label>
                                        <input
                                            type="number"
                                            name="passengers"
                                            min="1"
                                            value={formData.passengers}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-orange-600 text-white font-bold py-4 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center gap-2 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                >
                                    <Send size={20} />
                                    Send Enquiry via WhatsApp
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingForm;
