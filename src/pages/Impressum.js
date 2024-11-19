import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

const Impressum = () => {
    return (
        <div>
            <Navbar />
            <div
                style={{ backgroundImage: 'linear-gradient(to bottom, black, #0B0706' }}
                className="min-h-screen text-white py-8 px-4 bg-black"
            >
                <div className="max-w-4xl mx-auto bg-black bg-opacity-75 rounded-lg shadow-lg p-6">
                    <h1 className="pt-8 text-3xl font-bold text-[#FFD700] mb-6 text-center">
                        Impressum
                    </h1>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">Angaben gemäß § 5 TMG</h2>
                        <p>
                            <strong>The Taj</strong>
                            <br />
                            Kochgasse 9
                            <br />
                            1080 Wien
                            <br />
                            Österreich
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">Kontakt</h2>
                        <p>
                            Telefon: +43 (1) 924 7141
                            <br />
                            E-Mail: Office@thetaj.at
                            <br />
                            Website: <a href="https://thetaj.at" className="text-[#FFD700] underline">www.thetaj.at</a>
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">Geschäftsführung</h2>
                        <p>Sumit Kapahi</p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">Gewerbeberechtigung</h2>
                        <p>Erteilt durch das Magistrat der Stadt Wien.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">Haftungsausschluss</h2>
                        <h3 className="text-lg font-medium mt-4">Haftung für Inhalte</h3>
                        <p className="text-sm leading-relaxed">
                            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
                        </p>

                        <h3 className="text-lg font-medium mt-4">Haftung für Links</h3>
                        <p className="text-sm leading-relaxed">
                            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Impressum;
