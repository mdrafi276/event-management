import { Link } from "react-router-dom";


const ServiceHero = (ServiceData) => {
  const { id,  } = ServiceData;
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content gap-6 md:gap-20 w-full flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/gRWkz6F/4280558-17629.jpg"
            className="md:max-w-sm w-full  rounded-lg shadow-2xl"
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="500"
          />
          <div
            className="text-center"
            data-aos="fade-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="500"
          >
            <h1
              id="event-space"
              className=" text-2xl  md:text-4xl text-center "
            >
              Educational Event Space Enhancement: Vertical Banners
            </h1>
            <p className="py-6 text-[12px] md:text[20px] text-center">
              Elevate the ambiance of your educational events with our versatile
              Conference Hall Interior Vertical Banner Set. Create a captivating
              environment that inspires learning and engagement in every
              corner..
            </p>
            <Link to={`/serviceData/${id}`}>
              <button className="btn  bg-orange-600 mt-2 hover:text-white hover:bg-black md:mt-8">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;