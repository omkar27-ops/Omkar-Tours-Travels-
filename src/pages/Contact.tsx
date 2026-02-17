
import BookingForm from '../components/BookingForm';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <div className="pt-20">
            <div className="bg-gray-900 py-20 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
                <p className="text-gray-400 text-lg">We are here to help you 24/7</p>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="text-center p-8 bg-white shadow-lg rounded-2xl border border-gray-100">
                        <Phone className="w-10 h-10 text-orange-500 mx-auto mb-4" />
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Call Us</h3>
                        <p className="text-gray-600">9867211016</p>
                    </div>
                    <div className="text-center p-8 bg-white shadow-lg rounded-2xl border border-gray-100">
                        <Mail className="w-10 h-10 text-orange-500 mx-auto mb-4" />
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
                        <p className="text-gray-600">omkartourstravels06@gmail.com</p>
                    </div>
                    <div className="text-center p-8 bg-white shadow-lg rounded-2xl border border-gray-100">
                        <MapPin className="w-10 h-10 text-orange-500 mx-auto mb-4" />
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Visit Us</h3>
                        <p className="text-gray-600">Mumbai, Maharashtra, India</p>
                    </div>
                </div>
            </div>

            <BookingForm />
        </div>
    );
};

export default Contact;
