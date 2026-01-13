import { GrUserExpert } from "react-icons/gr";
import { HiOutlineLightBulb } from "react-icons/hi";

const About = () => {
  return (
     <section className="px-6 py-16 max-w-6xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-20">
        <div className="flex flex-col items-center mb-12">
          <div className="w-10 h-1 rounded-xl bg-gradient-to-r from-primary to-secondary mb-4" />
          <h2 className="text-2xl md:text-4xl font-semibold text-center">
            About {" "} <span className="bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent font-bold">
            Us
          </span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our company specializes in creating high-quality web applications
            that help businesses establish a strong online presence. We believe
            in clean design, performance, and usability.
          </p>
        </div>

      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our company specializes in creating high-quality web applications
            that help businesses establish a strong online presence. We believe
            in clean design, performance, and usability.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Whether it's a startup or an established organization, we work
            closely with our clients to understand their goals and deliver
            solutions that create real impact.
          </p>
        </div>

        {/* Image Placeholder */}
        <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
          <img src='web-team.png' />
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="mt-16 mb-14 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">
            Our Mission
          </h3>
          <p className="text-gray-600">
            To build reliable and visually appealing web solutions that
            empower businesses and improve user experiences.
          </p>
        </div>

        <div className="bg-white shadow-md p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">
            Our Vision
          </h3>
          <p className="text-gray-600">
            To become a trusted digital partner by delivering innovative,
            scalable, and future-ready web products.
          </p>
        </div>
      </div>

      <hr/>
      <div className="flex align-center justify-center">
        <div className='border-r-2 divide-solid border-[#e5e7eb] p-6 '>
          <div className='flex'>
            <h1 className='text-8xl bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent'>05</h1> <span className='text-6xl text-bold bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent'>+</span>
          </div> 
          <p>Years Of Experiences</p>
        </div>
        <div className="p-6 ">
          <GrUserExpert className="text-4xl mb-2" />
          <p className="text-bold text-2xl">Experiences & Experties</p>
          <p className="text-sm">Over the years we have gathered the team <br/> of professionals united.</p>
        </div>
        <div className="p-6 ">
          <HiOutlineLightBulb className="text-4xl mb-2" />
                    <p className="text-bold text-2xl">Creative Solutions</p>
          <p className="text-sm">We create a strong brand stratergy and a <br/> unique visual identy.</p>
        </div>
      </div>

      <div className='flex flex-col items-center text-center mt-20  mb-12'>
      <div className="bg-gray-100 rounded-2xl p-10 md:p-16">
        <h3 className="mt-4 text-3xl font-semi-bold text-[#000000] max-w-4xl mx-auto">
          We strive to offer reliable services and smart IT soltions
        </h3>
        <p className=" text-sm text-gray-600 leading-relaxed mb-4">Having commitment and dedication towards your dream we put effort and include quality.<br/> No matter what your objective behind your ideas we make sure that we built creativity with your innovative ideas.</p>
            <button className="px-8 py-4 rounded-lg text-white bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform duration-300">
              Connect with us!
            </button>
      </div>
      </div>
    </section>
  );
}

export default About