import { Link } from "react-router-dom";
import About from "../About/About";

const NewEvent = () => {
    return (
      <div>
        <div className=" h-[200px] w-full border-b-orange-600 border border-b-4 md:h-[120px] bg-gray-950 items-center md:gap-12 mt-20 justify-center  flex flex-col md:flex-row">
          <div
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <h1 className="text-white text-xl md:text-xl lg:text-2xl">
              CREATE YOUR OWN NEW EVENT
            </h1>
            <h1 className="text-gray-300 text-[12px] md:text-[10px] lg:text-[13px] pt-2">
              Bring people together, or turn your passion into a business.
              Eventbrite gives you everything you need to host your best event
              yet.
            </h1>
          </div>
          <div>
            <Link to="/login">
              {" "}
              <button
                className="btn bg-orange-600 hover:bg-white hover:text-black btn-secondary"
                data-aos="fade-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
              >
                Please Login
              </button>
            </Link>
          </div>
        </div>
        {/* section too for service  */}
        <About></About>
      </div>
    );
};

export default NewEvent;