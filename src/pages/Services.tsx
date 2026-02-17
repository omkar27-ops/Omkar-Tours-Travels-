
import ServicesComponent from '../components/Services';
import Fleet from '../components/Fleet';

const Services = () => {
    return (
        <div className="pt-20">
            <div className="bg-gray-900 py-20 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
                <p className="text-gray-400 text-lg">Comprehensive travel solutions for every need</p>
            </div>
            <ServicesComponent />
            <Fleet />
        </div>
    );
};

export default Services;
