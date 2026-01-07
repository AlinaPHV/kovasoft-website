export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About KovaSoft
            </h1>
            <p className="text-xl text-gray-700">
              We are a trusted software development company with a proven track record 
              of delivering exceptional digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                KovaSoft has been at the forefront of software development for many years. 
                We've partnered with leading businesses and organizations to tackle their most 
                mission-critical challenges, delivering innovative solutions that drive growth and 
                transformation.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Our team of experienced developers, designers, and consultants work closely with 
                clients to understand their unique needs and deliver tailored solutions that exceed 
                expectations. We combine technical expertise with business acumen to create software 
                that not only works flawlessly but also drives real business value.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Our Mission</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Our mission is to empower businesses through innovative software solutions. We believe 
                in building long-term partnerships with our clients, understanding their challenges, 
                and delivering solutions that make a meaningful impact on their operations and success.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Our Values</h2>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
                  <p className="text-gray-700">
                    We strive for excellence in everything we do, from code quality to client relationships.
                  </p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
                  <p className="text-gray-700">
                    We stay ahead of the curve, leveraging the latest technologies and best practices.
                  </p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrity</h3>
                  <p className="text-gray-700">
                    We conduct business with honesty, transparency, and ethical practices.
                  </p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Partnership</h3>
                  <p className="text-gray-700">
                    We build lasting relationships based on trust, collaboration, and mutual success.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Why Choose Us</h2>
              <ul className="list-disc list-inside space-y-4 text-gray-700 text-lg">
                <li>Proven track record of delivering successful software solutions</li>
                <li>Experienced team with deep technical expertise across multiple technologies</li>
                <li>Client-focused approach with a commitment to understanding your business</li>
                <li>Agile development methodology ensuring flexibility and rapid delivery</li>
                <li>Comprehensive support and maintenance services</li>
                <li>Commitment to quality, security, and best practices in software development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Expertise
              </h2>
              <p className="text-lg text-gray-600">
                We bring together technical excellence and business understanding to create impactful software solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Full-Stack Development</h3>
                <p className="text-gray-600">
                  End-to-end software development from frontend interfaces to backend systems and databases.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cloud Solutions</h3>
                <p className="text-gray-600">
                  Scalable cloud-based architectures and infrastructure for modern applications.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">API Development</h3>
                <p className="text-gray-600">
                  Robust and well-documented APIs that enable seamless integration and connectivity.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">DevOps & CI/CD</h3>
                <p className="text-gray-600">
                  Automated deployment pipelines and infrastructure management for efficient delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

