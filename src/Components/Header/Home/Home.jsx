
import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Navber from "../Navber/Navber";
import NewEvent from "../../newEvent/NewEvent";
import ServiceHero from "../../ServiceHero/ServiceHero";
import Service from "../../../Leyout/Service/Service";
import Footer from "../../Footer/Footer";



const Home = () => {
    const ServiceData = useLoaderData();
  
    return (
      <div>
        <div>
          <Navber></Navber>
          <Banner></Banner>
        </div>
        <div
          className="mt-12 max-w-[1000px] text-center mx-auto "
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <h1 id="title-section" className="  text-xl md:text-5xl">
            Education Event Excellence: Navigating the Future of Learning
          </h1>
          <p className=" text-[10px] md:text-sm pt-5">
            Welcome to our Education Event Management hub! We specialize in
            planning, organizing, and executing outstanding educational events
            to elevate your learning experiences. Join us in shaping the future
            of education.
          </p>
        </div>
        <div
          className="mt-16"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="500"
        >
          <h1 id="our-service" className="text-4xl text-black text-center">
            {" "}
            Our Service
          </h1>
        </div>
        <div className="flex justify-center flex-row-reverse">
          <div className="grid  grid-cols-1 xl:grid-cols-3 md:w-full md:text-center gap-10 mt-12  lg:grid-cols-2">
            {ServiceData.map((allData) => (
              <Service key={allData.id} ServiceData={allData}></Service>
            ))}
          </div>
        </div>
        <div>
          <ServiceHero></ServiceHero>
        </div>
        <div>
          <NewEvent></NewEvent>
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    );
}; 

export default Home;