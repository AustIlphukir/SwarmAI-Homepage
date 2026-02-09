export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">Privacy Policy</h1>

      <div className="space-y-6 text-sm leading-relaxed text-textSecondary">
        <section>
          <h2 className="text-lg font-semibold text-textPrimary mb-2">1. Controller</h2>
          <p>
            Swarm.ai GmbH
            <br />
            Musterstrasse 1
            <br />
            80331 Munich, Germany
            <br />
            Email: privacy@swarm.ai
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-textPrimary mb-2">2. Data Protection Officer</h2>
          <p>
            If appointed, you can reach our Data Protection Officer at:
            <br />
            dpo@swarm.ai
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-textPrimary mb-2">3. Purposes, legal bases and data categories</h2>
          <p>
            We process personal data for website provision, communication requests, and technical security.
            Legal bases are Article 6(1)(a), (b), and (f) GDPR.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-textPrimary mb-2">4. Recipients and processors</h2>
          <p>
            We use hosting and infrastructure providers acting as processors under Article 28 GDPR. This can include
            database/hosting providers used to store newsletter subscriptions (e.g., Supabase). A current list can be
            requested via privacy@swarm.ai.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-textPrimary mb-2">5. International transfers</h2>
          <p>
            If data is transferred to third countries, transfers are based on adequacy decisions or appropriate
            safeguards (e.g., Standard Contractual Clauses).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-textPrimary mb-2">6. Storage periods</h2>
          <p>
            We keep personal data only as long as necessary for the stated purposes and legal retention obligations.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-textPrimary mb-2">7. Cookies and tracking</h2>
          <p>
            We only store information on your device where this is strictly necessary for operating the website.
            If we use optional technologies (e.g., analytics/marketing), we will request consent where required.
          </p>
          <div className="mt-3 space-y-3">
            <div className="rounded-xl border border-white/10 bg-black/25 p-4">
              <p className="font-medium text-textPrimary">Strictly necessary cookie</p>
              <p className="mt-1">
                <span className="font-medium text-textPrimary">Name:</span> swarm_home_unlocked
                <br />
                <span className="font-medium text-textPrimary">Purpose:</span> Stores whether the protected area of
                the website is unlocked (access control).
                <br />
                <span className="font-medium text-textPrimary">Type:</span> HttpOnly cookie, SameSite=Lax
                <br />
                <span className="font-medium text-textPrimary">Retention:</span> Up to 30 days (or until you lock the
                site / clear cookies).
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/25 p-4">
              <p className="font-medium text-textPrimary">Strictly necessary local storage</p>
              <p className="mt-1">
                <span className="font-medium text-textPrimary">Key:</span> swarm_home_unlocked
                <br />
                <span className="font-medium text-textPrimary">Purpose:</span> Client-side fallback to avoid repeated
                prompts when the protected area is unlocked.
              </p>
              <p className="mt-3">
                <span className="font-medium text-textPrimary">Key:</span> swarm_role_modal_meta
                <br />
                <span className="font-medium text-textPrimary">Purpose:</span> Stores UI preferences for the “product
                updates” prompt (e.g., snooze and display counts).
              </p>
              <p className="mt-3">
                <span className="font-medium text-textPrimary">Retention:</span> Until you clear your browser storage.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-textPrimary mb-2">8. Product updates / newsletter (optional)</h2>
          <p>
            If you choose to subscribe to product updates, we process the information you provide to deliver the
            updates and to document your consent. The legal basis is Article 6(1)(a) GDPR (consent). Subscribing is
            optional; you can withdraw consent at any time with effect for the future.
          </p>
          <p className="mt-3">
            <span className="font-medium text-textPrimary">Data categories:</span> selected role, email address (if
            provided), consent flag, consent text/version, consent timestamp, and technical metadata (user-agent; and
            a salted hash of your IP address where configured). The IP hash is used for abuse prevention and technical
            security.
          </p>
          <p className="mt-3">
            <span className="font-medium text-textPrimary">Storage:</span> Subscription records are stored in our
            database/processor (e.g., Supabase).
          </p>
          <p className="mt-3">
            <span className="font-medium text-textPrimary">Retention:</span> Until you withdraw consent, plus a
            reasonable period to document consent and handle legal obligations, if applicable.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-textPrimary mb-2">9. Your rights</h2>
          <p>
            You have rights to access, rectification, erasure, restriction, data portability, and objection under
            Articles 15-21 GDPR. You may withdraw consent at any time with effect for the future.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-textPrimary mb-2">10. Right to lodge a complaint</h2>
          <p>
            You have the right to lodge a complaint with a supervisory authority, in particular in the Member State
            of your habitual residence, place of work, or place of the alleged infringement.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-textPrimary mb-2">11. Last updated</h2>
          <p>February 7, 2026</p>
        </section>
      </div>
    </div>
  );
}
