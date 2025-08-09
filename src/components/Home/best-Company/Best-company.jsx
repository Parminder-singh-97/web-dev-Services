export default function BestCompanySection() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
            <span className="block text-orange-500 font-semibold mb-2">
              Welcome to Our Company
            </span>
            Searching for an affordable web design company in India?
          </h2>

          <p className="mt-4 text-gray-600">
            <span className="font-semibold">    </span> is a leading{" "}
            <a
              href="https://www.htlogics.com/"
              className="text-blue-600 hover:underline"
            >
              Web Design & Development Company based in Chandigarh (Mohali)
            </a>
            , with its registered office in Himachal Pradesh. We specialize in
            offshore web design, custom web development, dynamic web
            applications, and SEO solutions. Our team builds professional,
            customized websites with exceptional design and ongoing maintenance
            to help your brand stand out from the competition.
          </p>

          <p className="mt-4 text-gray-600">
            Our services include website designing, development, internet
            marketing, content creation, content management systems, logo
            design, web banners, flash animation, software development, and
            advanced SEO services. We proudly serve clients in Chandigarh,
            Mohali, Panchkula, Himachal Pradesh, across India, and worldwide.
          </p>

          <div className="mt-6">
            <a
              href="contact_us.html"
              className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
            >
              Contact Us
              <i className="fa-solid fa-arrow-right ml-2" />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <figure className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="/images/Internet-Marketing.jpg"
              alt="Internet Marketing"
              className="w-full h-auto object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
