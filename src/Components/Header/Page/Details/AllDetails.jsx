


const AllDetails = ({ ServiceData }) => {
    const { name, details, image ,} = ServiceData;
  return (
    <div>
        
      <div>
        <div
          className="hero lg:w-[100%] h-[100vh]  md:h-[100vh] mx-auto mt-10 lg:h-[600px]"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="">
              <h1 className="mb-5 md:text-4xl text-2xl lg:text-5xl font-bold">
                {name}
              </h1>
              <p className="mb-5"></p>
            </div>
          </div>
         
        </div>
        <div className="  lg:text-2xl lg:p-0 md:p-0 p-2 mx-auto md:mt-5 lg:mt-10 ">
          <h1>{details}</h1>
        </div>
      </div>
    </div>
  ); 
 
};

export default AllDetails;