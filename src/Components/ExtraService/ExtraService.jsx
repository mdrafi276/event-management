import { useLoaderData, useParams } from "react-router-dom";
import Navber from "../Header/Navber/Navber";

const ExtraService = () => {
     const { id } = useParams();
    
     const extraData = useLoaderData();
     const findService = extraData.find((item) => item.id = id);
     
    return (
      <div>
        <Navber></Navber>
        <div>
          {findService && (
            <div>
              <div
                className="hero lg:w-[100%] h-[100vh]  md:h-[100vh] mx-auto mt-10 lg:h-[600px]"
                style={{
                  backgroundImage: `url(${findService.service_img})`,
                }}
              >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                  <div className=" md:w-[600px]">
                    <h1 className="mb-5 md:text-3xl  text-xl lg:text-5xl text-white font-bold">
                      {findService.service_title}
                    </h1>
                    <p className="mb-5"></p>
                  </div>
                </div>
             
              </div>
              <div className="  lg:text-2xl lg:p-0 md:p-0 p-2 mx-auto md:mt-5 lg:mt-10 ">
                <h1>{findService.service_details}</h1>
              </div>
            </div>
          )}
        </div>
      </div>
    );
};

export default ExtraService;