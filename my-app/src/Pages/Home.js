import Button from "../Components/Buttons";



const Home = () => {
    
  return (
    <section className="px-6 py-16 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-1">
        
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Great{" "}
            <span className="font-bold bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent">
              Product
            </span>{" "}
            is <br />
            built by great{" "}
            <span className="font-bold bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent">
              teams
            </span>
          </h1>

          <p className="mt-6 text-gray-600 max-w-lg mx-auto md:mx-0">
            We help build and manage a team of world-class developers to bring
            your vision to life.
          </p>

          <div className="mt-8">
            <Button text="Let’s get started!" />
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src="/Hero.png"
            alt="Team collaboration illustration"
            className="w-full max-w-md"
          />
        </div>

      </div>
<div className="mt-20 px-6 md:px-16 lg:px-24">
  <div className="bg-gray-100 rounded-lg p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-6">
    
    {/* TEXT */}
    <h2 className="text-2xl md:text-4xl font-bold leading-tight text-center md:text-left max-w-2xl">
      Hire the best developers and designers around!
    </h2>

    {/* BUTTON */}
    <button className="px-8 py-4 rounded-lg text-white bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform duration-300">
      Hire Developers
    </button>

  </div>
</div>

    </section>
  );
};

export default Home;
