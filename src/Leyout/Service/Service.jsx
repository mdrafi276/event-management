import { Link } from "react-router-dom";

const Service = ({ServiceData}) => {
  
  const { name, description,price ,id, image} = ServiceData;
    return (
      <div className="grid grid-cols-1 gap-5   md:grid-cols-2 lg:grid-cols-3">
        <div className="card bg-gray-200 w-full lg:w-[360px]   shadow-xl">
          <figure>
            <img src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold ">{name}</h2>
            <p className="text-sm">{description}</p>
            <p className="font-bold">Price:{price} $</p>
            <div className="card-actions justify-center">
              <Link to={`/service/${id}`}>
                <button
                 
                  className="btn hover:bg-black hover:text-white btn-secondary"
                >
                  Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Service;