
import { FaPhoneVolume, FaRegEnvelope } from "react-icons/fa";
const About = () => {
    return (
      <div>
        <div className="grid mt-20 mb-16  grid-cols-1 w-full  md:grid-cols-2 lg:grid-cols-4">
          {/* first div */}
          <div className=" p-5">
            <h1 className=" text-black font-bold pb-2 text-xl  border-b-2 border-b-orange-500">
              ABOUT US
            </h1>
            <h1 className=" text-gray-600 text-sm pt-6 ">
              Fusce pellentesque velvitae tincidunt
            </h1>
            <h1 className=" text-gray-600 text-sm pt-2  ">
              egestas. Pellentesque habitant
            </h1>
            <h1 className="  text-gray-600 text-sm pt-2 ">
              morbi.Proin gravida nibh vel velit auctor
            </h1>
            <h1 className=" mb-4 text-gray-600 text-sm pt-2 ">
              aliquet. Aenean sollicitudin, lorem quis.
            </h1>
            <hr />
               
            <div className="flex gap-2 mt-5 items-center">
              <h1>
                 <FaPhoneVolume></FaPhoneVolume>
              </h1>
              <h1> +01741653071</h1>
            </div>
            <div className="flex gap-2 items-center">
              <h1>
                <FaRegEnvelope></FaRegEnvelope>
              </h1>
              <h1 className="italic text-orange-600 hover:text-black text-sm pt-1 cursor-pointer">
                {" "}
                mdrafi37473@gmail.com
              </h1>
            </div>
          </div>
          {/* second div   */}
          <div className="p-5 cursor-pointer">
            <h1 className="  text-black font-bold pb-2 text-xl  border-b-2 border-b-orange-500 ">
              POPULAR SEARCHES
            </h1>
            <h1 className="hover:text-orange-600 text-gray-600 text-sm pt-6 ">
              Online Registration
            </h1>
            <h1 className=" hover:text-orange-600 text-gray-600 text-sm pt-2 ">
              Post Events
            </h1>
            <h1 className=" hover:text-orange-600 text-gray-600 text-sm pt-2 ">
              Sell Event Tickets
            </h1>
            <h1 className=" hover:text-orange-600 text-gray-600 text-sm pt-2 ">
              Event Planning Software
            </h1>
            <h1 className="hover:text-orange-600 text-gray-600 text-sm pt-2 ">
              Online Event Management
            </h1>
            <h1 className="hover:text-orange-600 text-gray-600 text-sm pt-2 ">
              Event Management Software
            </h1>
            <h1 className="hover:text-orange-600 text-gray-600 text-sm pt-2 ">
              Event Payment
            </h1>
          </div>
          {/* third div  */}
          <div className="p-5">
            <h1 className="  text-black font-bold pb-2 text-xl border-b-2 border-b-orange-500 ">
              RECENT TWEETS
            </h1>
            <h1 className=" text-gray-600 text-sm pt-6 ">
              Could not authenticate you.
            </h1>
          </div>

          {/* fourth div */}
          <div className="p-5 ">
            <h1 className=" text-black font-bold pb-2  text-xl  border-b-2 border-b-orange-500 ">
              INSTAGRAM PHOTOS
            </h1>
          </div>
        </div>
      </div>
    );
};

export default About;