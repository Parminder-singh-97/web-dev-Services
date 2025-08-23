export default function OurTeamSection() {
  return (
    <section className="bg-white py-16 our-team-page">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* Left Content */}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 drop-shadow-sm ">
              Meet Our Team
            </h2>
            <p className="text-gray-600 leading-relaxed drop-shadow-sm ">
              Our team consists of a dynamic group of talented professionals,
              each working with dedication to ensure the success of every project
              we take on.
            </p>
            <p className="text-gray-600 leading-relaxed drop-shadow-sm  ">
              We operate in two core divisions — the Creative Solutions Team and
              the Technical Management Team. Together, they bring every skill
              required to bring your project to life.
            </p>
            <p className="text-gray-600 leading-relaxed drop-shadow-sm ">
              At{" "}
              <a
                // href="https://www.htlogics.com/"
                className="text-blue-600 hover:underline"
              >
                SP Logistics
              </a>
              , our work culture revolves around fulfilling client needs while
              delivering exceptional value for investment. We provide complete
              end-to-end solutions, covering development, implementation,
              support, promotion, and maintenance.  
              Our development center in Pinjore, India, is home to a highly
              skilled team whose collaborative efforts bring out the best in
              every project. Many of our experts hold over 8 years of experience
              in Internet Programming, Software Development, and the Graphics
              Industry.
            </p>
          </div>

          {/* Right Image */}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex justify-center"
          >
            <div className="w-full max-w-md rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Our Team"
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
