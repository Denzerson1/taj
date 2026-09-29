import { CONTACT } from '../config/site';
import Seo from '../components/Seo';

export default function Imprint() {
  return (
    <>
      <Seo title="Impressum" description="Impressum und rechtliche Angaben von Taj – Indian Restaurant & Bar, Kochgasse 9, 1080 Wien." />
      <div className="bg-glow mx-auto max-w-3xl px-5 pb-20 pt-28 text-cream/80 md:pb-24 md:pt-36">
        <h1 className="text-4xl text-gold-light sm:text-5xl">Impressum</h1>

        <section className="mt-10 space-y-8">
          <div>
            <h2 className="text-2xl text-cream">Angaben gemäß § 5 TMG</h2>
            <p className="mt-2">
              <strong className="text-cream">The Taj</strong>
              <br />
              {CONTACT.street}
              <br />
              {CONTACT.postalCode} {CONTACT.city}
              <br />
              Österreich
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-cream">Kontakt</h2>
            <p className="mt-2">
              Telefon: <a href={CONTACT.phoneHref} className="text-gold hover:underline">+43 (1) 924 7141</a>
              <br />
              E-Mail: <a href="mailto:Office@thetaj.at" className="text-gold hover:underline">Office@thetaj.at</a>
              <br />
              Website: <a href="https://thetaj.at" className="text-gold hover:underline">www.thetaj.at</a>
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-cream">Geschäftsführung</h2>
            <p className="mt-2">Sumit Kapahi</p>
          </div>

          <div>
            <h2 className="text-2xl text-cream">Gewerbeberechtigung</h2>
            <p className="mt-2">Erteilt durch das Magistrat der Stadt Wien.</p>
          </div>

          <div>
            <h2 className="text-2xl text-cream">Haftungsausschluss</h2>
            <h3 className="mt-4 font-sans text-lg font-semibold text-cream">Haftung für Inhalte</h3>
            <p className="mt-2 text-sm leading-relaxed">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
            </p>
            <h3 className="mt-4 font-sans text-lg font-semibold text-cream">Haftung für Links</h3>
            <p className="mt-2 text-sm leading-relaxed">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
