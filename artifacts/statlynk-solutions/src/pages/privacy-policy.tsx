import { Link } from "wouter";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <main className="mx-auto max-w-4xl px-6 py-20">
        <div className="mb-10">
          <Link href="/" className="text-blue-700 hover:underline">
            ← Back to StatLynk Solutions
          </Link>
        </div>

        <h1 className="mb-6 text-4xl font-semibold text-slate-900">
          Privacy Policy
        </h1>

        <p className="mb-6 text-slate-600">
          Last updated: September 2026
        </p>

        <section className="space-y-6 leading-8">
          <div>
            <h2 className="mb-2 text-2xl font-semibold text-slate-900">
              1. Introduction
            </h2>
            <p>
              StatLynk Solutions respects your privacy and is committed to
              protecting information that you provide when using our website,
              services, and contact facilities.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-slate-900">
              2. Information We May Collect
            </h2>
            <p>
              Depending on how you interact with our website, we may receive
              information such as your name, email address, phone number,
              company information, and information included in messages or
              consultation requests that you voluntarily submit.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-slate-900">
              3. How We Use Information
            </h2>
            <p>
              Information may be used to respond to enquiries, provide
              requested services, communicate with customers, improve our
              website and services, maintain security, and comply with
              applicable legal requirements.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-slate-900">
              4. Cookies and Analytics
            </h2>
            <p>
              Our website may use cookies or similar technologies for
              functionality, analytics, security, and advertising purposes.
              Third-party services may use cookies according to their own
              privacy policies.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-slate-900">
              5. Advertising
            </h2>
            <p>
              If advertising services such as Google AdSense are enabled,
              advertising providers may use cookies or similar technologies
              to provide, personalize, measure, or limit advertising in
              accordance with their applicable policies and user settings.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-slate-900">
              6. Data Security
            </h2>
            <p>
              We take reasonable measures to protect information submitted
              through our website. However, no internet transmission or
              electronic storage system can be guaranteed to be completely
              secure.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-slate-900">
              7. Third-Party Services
            </h2>
            <p>
              Our website may contain links to third-party websites or use
              third-party services. Their privacy practices are governed by
              their respective policies.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-slate-900">
              8. Your Choices
            </h2>
            <p>
              You may choose not to provide information through forms or
              enquiries. You may also manage cookies through your browser and,
              where applicable, through advertising or privacy controls
              provided by third-party services.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-slate-900">
              9. Contact
            </h2>
            <p>
              If you have questions about this Privacy Policy or how your
              information is handled, please contact StatLynk Solutions
              through the Contact page on this website.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
