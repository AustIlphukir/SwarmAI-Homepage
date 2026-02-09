export default function ImprintPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">Imprint (Impressum)</h1>

      <div className="space-y-6 text-sm leading-relaxed text-textSecondary">
        <section>
          <h2 className="text-lg font-semibold text-textPrimary mb-2">Provider information (Section 5 DDG)</h2>
          <p>
            Swarm.ai GmbH
            <br />
            Musterstrasse 1
            <br />
            80331 Munich, Germany
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-textPrimary mb-2">Represented by</h2>
          <p>Managing Director: Dr. Max Mustermann</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-textPrimary mb-2">Register entry</h2>
          <p>
            Commercial Register: Amtsgericht Muenchen
            <br />
            Registration number: HRB 123456
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-textPrimary mb-2">Contact</h2>
          <p>
            Email: contact@swarm.ai
            <br />
            Phone: +49 89 1234 5678
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-textPrimary mb-2">Tax information</h2>
          <p>
            VAT ID (Section 27a UStG): DE123456789
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-textPrimary mb-2">Responsible for editorial content</h2>
          <p>
            Dr. Max Mustermann
            <br />
            Address as above
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-textPrimary mb-2">EU dispute resolution</h2>
          <p>
            The European Commission provides a platform for online dispute resolution (ODR):
            https://ec.europa.eu/consumers/odr/
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-textPrimary mb-2">Consumer dispute resolution</h2>
          <p>
            We are not willing or obliged to participate in dispute resolution proceedings before a consumer
            arbitration board.
          </p>
        </section>
      </div>
    </div>
  );
}
