
const Card = () => {
    return (
      <div>
        <div className="card w-96 bg-red-500 shadow-xl">
          <figure>
            <img
              className="h-[500px]"
              src="https://i.ibb.co/5LygJr7/teens-doing-experiments-robotics-laboratory-boy-vr-headset-girl-protective-glasses.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-center">
              <button className="btn  btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Card;