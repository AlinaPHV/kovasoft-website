export default function Contact() {

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-700">
              Get in touch with us for inquiries about our services and solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Email</h3>
                  <p className="text-gray-700">
                    <a
                      href="mailto:info@kovasoft.eu"
                      className="text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      info@kovasoft.eu
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Office Hours</h3>
                  <p className="text-gray-700">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday - Sunday: Closed
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Response Time</h3>
                  <p className="text-gray-700">
                    We typically respond within 24 hours during business days.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">About Our Services</h3>
                  <p className="text-gray-700 mb-4">
                    We specialize in custom software development, digital transformation, 
                    and providing innovative technology solutions for businesses of all sizes.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Whether you need a complete digital overhaul or a specific software solution, 
                    our team is ready to help you achieve your goals.
                  </p>
                  <p className="text-gray-700">
                    For project inquiries, partnership opportunities, or general questions, 
                    please reach out to us via email.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

