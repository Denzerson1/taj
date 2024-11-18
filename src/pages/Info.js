import React from 'react';
import { useLanguage } from '../LanguageContext';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import bannerImage from '../images/ambiente/ambiente.jpg';

const InfoPage = () => {
    const { language } = useLanguage();

    // Define dynamic text based on the selected language
    const sectionText = {
        EN: {
            header: 'Discover a Journey of Flavors and Traditions',
            subheader: 'Where every meal tells a story, connecting people through flavors and memories.',
            hoursTitle: 'Hours',
            hours: [
                'Monday - Sunday: 17:00 - 23:00',
            ],
            locationTitle: 'Location',
            location: 'Kochgasse 9, 1080 Wien',
            directions: 'Get Directions',
            contactTitle: 'Contact Us',
            contactDetails: {
                phone: '+43 (1) 924 7141',
                email: 'Office@thetaj.at',
                message: 'Feel free to reach out for any questions or special requests.',
            },
            reservationTitle: 'Make a Reservation',
            reservationMessage: 'Reserve a table for a memorable dining experience with friends and family.',
            reservationButton: 'Book Now',
        },
        DE: {
            header: 'Entdecken Sie eine Reise voller Aromen und Traditionen',
            subheader: 'Wo jedes Gericht eine Geschichte erzählt, die Menschen durch Aromen und Erinnerungen verbindet.',
            hoursTitle: 'Öffnungszeiten',
            hours: [
                'Montag - Sonntag: 17:00 - 23:00',
            ],
            locationTitle: 'Standort',
            location: 'Kochgasse 9, 1080 Wien',
            directions: 'Wegbeschreibung',
            contactTitle: 'Kontaktieren Sie uns',
            contactDetails: {
                phone: '+43 (1) 924 7141',
                email: 'Office@thetaj.at',
                message: 'Zögern Sie nicht, uns bei Fragen oder besonderen Anfragen zu kontaktieren.',
            },
            reservationTitle: 'Reservierung vornehmen',
            reservationMessage: 'Reservieren Sie einen Tisch für ein unvergessliches kulinarisches Erlebnis mit Freunden und Familie.',
            reservationButton: 'Jetzt buchen',
        },
    };

    return (
        <div>
            <Navbar />


            <div
                style={{
                    backgroundImage: 'linear-gradient(to bottom, #0C0907, #54271E,   #0B0706)',
                }}
                className="font-mukta pt-20 min-h-screen text-gray-800"
            >
                {/* Hours Section */}
                <div className="py-10 px-6 text-center">
                    <h2 className="text-3xl font-semibold text-white mb-6">{sectionText[language].hoursTitle}</h2>
                    <div className="text-white space-y-4 text-lg">
                        {sectionText[language].hours.map((hour, index) => (
                            <p key={index}>{hour}</p>
                        ))}
                    </div>
                </div>

                {/* Location Section with Google Maps Iframe */}
                <div className="py-12 px-6 text-center text-white">
                    <h2 className="text-3xl font-semibold mb-6">{sectionText[language].locationTitle}</h2>
                    <p className="text-lg max-w-xl mx-auto mb-8">{sectionText[language].location}</p>
                    <button
                        className="px-6 py-2 bg-[#FFD700] text-black font-semibold rounded hover:bg-yellow-600 transition duration-200"
                        onClick={() => window.open('https://maps.app.goo.gl/TesETbkyUZdL7S9W6', '_blank')}
                    >
                        {sectionText[language].directions}
                    </button>
                    <div className="mt-8 max-w-4xl mx-auto">
                        <iframe
                            title="Google Maps Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d453.6887822435384!2d16.348972676913586!3d48.21291514160916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d07d819e4938b%3A0xf458d4cad4b2fd32!2sTaj%20-%20Indian%20Restaurant%20%26%20Bar!5e0!3m2!1sde!2sat!4v1730961557347!5m2!1sde!2sat"
                            width="100%"
                            height="400"
                            allowFullScreen=""
                            loading="lazy"
                            className="border-0"
                        ></iframe>
                    </div>
                </div>

                <div className="py-8 px-6 text-center">
                    <h2 className="text-3xl font-semibold text-white mb-6">{sectionText[language].contactTitle}</h2>
                    <p className="text-lg text-white mb-4">{sectionText[language].contactDetails.message}</p>
                    <p className="text-lg text-white mb-4">
                        <strong>Phone:</strong>{' '}
                        <a href={`tel:${sectionText[language].contactDetails.phone}`} className="hover:text-yellow-300">
                            {sectionText[language].contactDetails.phone}
                        </a>
                    </p>
                    <p className="text-lg text-white mb-4">
                        <strong>Email:</strong>{' '}
                        <a href={`mailto:${sectionText[language].contactDetails.email}`} className="hover:text-yellow-300">
                            {sectionText[language].contactDetails.email}
                        </a>
                    </p>
                </div>

                {/* Reservation Section */}
                <div className="py-16 px-6 text-center text-white">
                    <h2 className="text-3xl font-semibold mb-6">{sectionText[language].reservationTitle}</h2>
                    <p className="text-lg max-w-xl mx-auto mb-8">{sectionText[language].reservationMessage}</p>
                    <button
                        className="px-6 py-2 bg-[#FFD700] text-black font-semibold rounded hover:bg-yellow-600 transition duration-200"
                        onClick={() => window.open("https://www.quandoo.at/place/taj-indisches-restaurant-bar-52222?aid=63", '_blank')}
                    >
                        {sectionText[language].reservationButton}
                    </button>
                </div>
            </div>
            {/* Banner Section with Background Image */}
            <div
                className="relative bg-cover bg-center py-32 lg:py-48 text-center"
                style={{
                    backgroundImage: `url(${bannerImage})`,
                }}
            >
                {/* Dark overlay to enhance text visibility */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <h1 className="text-5xl lg:text-7xl font-semibold text-white text-shadow-lg leading-tight">
                        {sectionText[language].header}
                    </h1>
                    <p className="mt-4 text-lg lg:text-xl text-white leading-relaxed">
                        {sectionText[language].subheader}
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default InfoPage;
