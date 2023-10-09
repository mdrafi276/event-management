

const Banner = () => {
    return (
      <div>
        <div></div>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/TWp938G/modern-equipped-computer-lab-1.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div
              className=" md-w-full lg:max-w-[1000px] "
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <h1 className="mb-5 text-2xl text-white lg:text-6xl  w-full font-bold">
                We are Event Professionals
              </h1>
              <p className="mb-5 text-gray-300 lg:text-xl pt-6 ">
                You can access 4900+ different courses from 300 professional
                trainers for free
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner; 