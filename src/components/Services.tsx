import React from 'react';
import { Plane, MapPin, Users, Briefcase } from 'lucide-react';

const services = [
    {
        icon: <Plane className="w-12 h-12 text-orange-500" />,
        title: "Airport Pickup & Drop",
        description: "Punctual and comfortable airport transfers. We track flight schedules to ensure on-time service."
    },
    {
        icon: <MapPin className="w-12 h-12 text-orange-500" />,
        title: "All Over India Travel",
        description: "From Kashmir to Kanyakumari, explore standard and customized tour packages for any destination."
    },
    {
        icon: <Users className="w-12 h-12 text-orange-500" />,
        title: "Family Tours",
        description: "Safe, spacious, and family-friendly vehicles with experienced drivers for a stress-free vacation."
    },
    {
        icon: <Briefcase className="w-12 h-12 text-orange-500" />,
        title: "Corporate Travel",
        description: "Professional transport solutions for business meetings, events, and employee transportation."
    }
];

const Services = () => {
    return (
        <section className="py-20 bg-orange-50" id="services">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Premium Services</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We provide a comprehensive range of travel solutions tailored to meet your specific needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow group"
                        >
                            <div className="mb-6 p-4 bg-orange-100 rounded-2xl w-fit group-hover:bg-orange-500 transition-colors group-hover:text-white">
                                {React.cloneElement(service.icon as React.ReactElement<any>, {
                                    className: "w-8 h-8 text-orange-600 group-hover:text-white transition-colors"
                                })}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
