import { Link, useLoaderData, useParams } from "react-router-dom";
import Navber from "../Header/Navber/Navber";

const InfoDetails = () => {
    const {id} = useParams();
    const infoData = useLoaderData()
    const findData = infoData.find((item) => item.id == id)
    
    return (
      <div>
        <Navber></Navber>
        <div>
          {findData && (
            <div>
              <div
                className="hero lg:w-[100%] h-[100vh]  md:h-[100vh] mx-auto mt-10 lg:h-[600px]"
                style={{
                  backgroundImage: `url(${findData.image})`,
                }}
              >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                  <div className="">
                    <h1 className="mb-5 md:text-4xl text-2xl lg:text-5xl font-bold">
                      {findData.name}
                    </h1>
                    <p className="mb-5"></p>
                  </div>
                </div>
                <Link to="/allDetails">
                  <button className="btn bg-orange-600 md:mt-40 mt-52  border-none hover:bg-black hover:text-white lg:mt-[28rem]  ">
                    All Details
                  </button>
                </Link>
              </div>
              <div className="  lg:text-2xl lg:p-0 md:p-0 p-2 mx-auto md:mt-5 lg:mt-10 ">
                <h1>{findData.details}</h1>
              </div>
            </div>
          )}
        </div>
      </div>
    );
};

export default InfoDetails;