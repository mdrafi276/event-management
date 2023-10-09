import { Link } from "react-router-dom";

const Service = ({ServiceData}) => {
  
  const { name, description,price ,id, image} = ServiceData;
    return (
      <div className="card bg-gray-200 w-full mx-auto lg:w-[360px]   shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div
          className="card-body"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="500"
        >
          <h2 className="card-title font-bold ">{name}</h2>
          <p className="text-sm">{description}</p>
          <p className="font-bold">Price:{price} $</p>
          <div className="card-actions justify-center">
            <Link to={`/service/${id}`}>
              <button className="btn hover:bg-black hover:text-white bg-orange-600">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Service;