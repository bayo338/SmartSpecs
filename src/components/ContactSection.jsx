// import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="bg-white text-blue-900 py-16 px-4 md:px-8" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Have questions or need help placing an order? We’re happy to assist.
            Reach out to us through any of the following options:
          </p>
        </div>

        {/* Flex container for info + map */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Info */}
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 text-blue-900 rounded-full shadow-md">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Our Office</h4>
                <p className="text-gray-700 text-sm">
                  Plot 66/67 Babalola Estate, Orita Challenge, Odo-Ona Elewe, Ibadan, Oyo state, Nigeria
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 text-blue-900 rounded-full shadow-md">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Call Us</h4>
                <p className="text-gray-700 text-sm">+1629-279-4356;</p>
                <p className="text-gray-700 text-sm">+2348029313755</p>                 
                <p className="text-gray-700 text-sm">Mon–Sat: 9am – 6pm</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 text-blue-900 rounded-full shadow-md">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Email</h4>
                <p className="text-gray-700 text-sm">wade3@elizabeth-liz.com</p>
                <p className="text-gray-700 text-sm">We reply within 24hrs</p>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="md:w-3/5">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Find Us on the Map</h3>
            <div className="w-full h-72 md:h-full rounded-xl overflow-hidden shadow-lg border-4 border-blue-100">
              <iframe
                title="SmartSpecs Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.6337505796084!2d3.3792052153129886!3d6.524379525291591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf50e1c2c7a73%3A0x7f28d0ebf81b14d5!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1625928984764!5m2!1sen!2sng"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
