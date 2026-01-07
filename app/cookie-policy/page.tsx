export default function CookiePolicy() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-700">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
            <div className="space-y-8 text-gray-700">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies</h2>
                <p>
                  Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Cookies</h2>
                <p className="mb-4">KovaSoft OÜ uses cookies for the following purposes:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.</li>
                  <li><strong>Analytics Cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
                  <li><strong>Functional Cookies:</strong> These cookies allow the website to remember choices you make and provide enhanced, personalized features.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Session Cookies</h3>
                    <p>These are temporary cookies that are deleted when you close your browser. They help us remember your actions during a browsing session.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Persistent Cookies</h3>
                    <p>These cookies remain on your device for a set period or until you delete them. They help us remember your preferences and improve your experience on our website.</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Cookies</h2>
                <p>
                  In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website and deliver advertisements on and through the website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Managing Cookies</h2>
                <p className="mb-4">You can control and manage cookies in various ways:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Most web browsers allow you to control cookies through their settings preferences</li>
                  <li>You can set your browser to refuse cookies or delete certain cookies</li>
                  <li>Please note that if you choose to disable cookies, some features of our website may not function properly</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Changes to This Cookie Policy</h2>
                <p>
                  We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last updated" date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Us</h2>
                <p>
                  If you have any questions about our use of cookies, please contact us at:
                </p>
                <p className="mt-2">
                  <strong>Email:</strong> <a href="mailto:info@kovasoft.eu" className="text-primary-600 hover:text-primary-700">info@kovasoft.eu</a><br />
                  <strong>Address:</strong> Harju maakond, Tallinn, Mustamäe linnaosa, Mustamäe tee 84-35, 12916, Estonia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

