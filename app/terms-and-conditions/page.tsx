export default function TermsAndConditions() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms and Conditions
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
                <p>
                  By accessing or using the KovaSoft OÜ website and services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use License</h2>
                <p className="mb-4">Permission is granted to temporarily access the materials on KovaSoft OÜ's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Services</h2>
                <p>
                  KovaSoft OÜ provides software development and digital transformation services. All services are provided subject to separate service agreements that will be executed between you and KovaSoft OÜ. The information on this website is for general information purposes only.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Disclaimer</h2>
                <p>
                  The materials on KovaSoft OÜ's website are provided on an 'as is' basis. KovaSoft OÜ makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitations</h2>
                <p>
                  In no event shall KovaSoft OÜ or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on KovaSoft OÜ's website, even if KovaSoft OÜ or a KovaSoft OÜ authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Revisions</h2>
                <p>
                  KovaSoft OÜ may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Information</h2>
                <p>
                  If you have any questions about these Terms and Conditions, please contact us at:
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

