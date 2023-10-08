import { Link } from "react-router-dom";


const ServiceHero = (ServiceData) => {
  const { id,  } = ServiceData;
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content gap-6 md:gap-20 flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/gRWkz6F/4280558-17629.jpg"
            className="max-w-sm   rounded-lg shadow-2xl"
          />
          <div className="text-center">
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
              <button className="btn btn-secondary mt-2 hover:text-white hover:bg-black md:mt-8">
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