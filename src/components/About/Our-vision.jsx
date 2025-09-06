export default function OurVisionSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div data-aos="fade-up" data-aos-duration="1000">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-sm  text-gray-800">
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4 drop-shadow-sm ">
              Our vision acts as the guiding framework for the goals we strive to
              achieve in order to ensure ongoing, sustainable, and high-quality
              growth.  
              <a href="/" className="text-blue-600 hover:underline"> SP Dev solutions</a> 
              is committed to “delivering complete customer satisfaction through
              technical excellence, versatile management skills, creative solutions,
              and added value by consistently going the extra mile.”
            </p>
            <p className="text-gray-700 leading-relaxed drop-shadow-sm ">
              Our aim is to become a top-tier, highly respected global IT
              organization by equipping local talent with global experience. At{" "}
              <a href="/" className="text-blue-600 hover:underline"> SP Dev solutions</a>, we
              focus on delivering rapid, efficient project designs and implementations,
              positioning ourselves not as just a vendor, but as a trusted strategic
              partner in every client goal. We bring both expertise and hands-on
              experience in tackling complex, scalable solutions while also creating
              value for customers, society, and our employees.{" "}
              <a href="/" className="text-blue-600 hover:underline"> SP Dev solutions</a> has
              successfully unified diverse platforms and skills under one roof,
              enabling us to offer world-class services and solutions to organizations
              across the globe.
            </p>
          </div>

          {/* Right Image */}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex justify-center"
          >
            <div className="w-full max-w-md aspect-[3/2] rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1170&auto=format&fit=crop"
                alt="About Vision"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
