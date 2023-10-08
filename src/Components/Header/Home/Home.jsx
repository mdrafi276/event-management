
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
        <div className="mt-12 max-w-[1000px] text-center mx-auto ">
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
        <div className="mt-16">
          <h1 id="our-service" className="text-4xl text-black text-center"> Our Service</h1>
        </div>
        <div className="flex justify-center flex-row-reverse">
          <div className="grid  grid-cols-1  md:w-full lg:w-[1300px]md:text-center gap-10 mt-12 md:grid-cols-2 lg:grid-cols-3">
            {ServiceData.map((allData) => (
              <Service key={allData.id} ServiceData={allData}></Service>
            ))}
          </div>
          <h1 className="hidden md:block text-white">hello wor</h1>
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