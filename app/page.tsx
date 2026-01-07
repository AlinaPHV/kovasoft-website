
export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              World-class Software Development
            </h1>
            <p className="text-xl md:text-2xl text-gray-700">
              We deliver exceptional software solutions that drive digital transformation 
              and help businesses achieve their goals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive software development services tailored to your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Software Development</h3>
              <p className="text-gray-600">
                Tailored software solutions designed to meet your specific business requirements and objectives.
              </p>
            </div>
            
            <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Transformation</h3>
              <p className="text-gray-600">
                Modernize your business processes with cutting-edge technology and innovative solutions.
              </p>
            </div>
            
            <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cybersecurity Services</h3>
              <p className="text-gray-600">
                Protect your digital assets with comprehensive security solutions and best practices.
              </p>
            </div>
            
            <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Data & Analytics</h3>
              <p className="text-gray-600">
                Leverage your data with advanced analytics and business intelligence solutions.
              </p>
            </div>
            
            <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile App Development</h3>
              <p className="text-gray-600">
                Native and cross-platform mobile applications for iOS and Android devices.
              </p>
            </div>
            
            <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Legacy Modernization</h3>
              <p className="text-gray-600">
                Transform legacy systems into modern, scalable, and maintainable solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Approach
              </h2>
              <p className="text-lg text-gray-600">
                We combine technical expertise with a deep understanding of business needs to deliver solutions that matter.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-white rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality First</h3>
                <p className="text-gray-600">
                  We prioritize code quality, maintainability, and best practices in every project we undertake.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Modern Technologies</h3>
                <p className="text-gray-600">
                  We leverage cutting-edge technologies and frameworks to build scalable and future-proof solutions.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Agile Methodology</h3>
                <p className="text-gray-600">
                  Our iterative approach ensures flexibility, transparency, and continuous improvement throughout development.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Client Collaboration</h3>
                <p className="text-gray-600">
                  We work closely with our clients to understand their vision and deliver solutions that exceed expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

