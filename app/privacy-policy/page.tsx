export default function PrivacyPolicy() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p>
                  KovaSoft OÜ ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                <p className="mb-4">We may collect information about you in various ways:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Personal Information:</strong> Name, email address, phone number, and company information that you voluntarily provide when contacting us.</li>
                  <li><strong>Usage Data:</strong> Information about how you access and use our website, including your IP address, browser type, and pages visited.</li>
                  <li><strong>Cookies:</strong> We use cookies and similar tracking technologies to track activity on our website. For more information, please see our Cookie Policy.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                <p className="mb-4">We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Improve our website and services</li>
                  <li>Send you updates about our services (with your consent)</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Protection</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
                <p className="mb-4">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access your personal information</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to processing of your personal information</li>
                  <li>Request restriction of processing</li>
                  <li>Data portability</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy, please contact us at:
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

