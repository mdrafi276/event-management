

const Banner = () => {
    return (
      <div>
        <div></div>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/TWp938G/modern-equipped-computer-lab-1.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">
                Studies can now be done online much easily
              </h1>
              <p className="mb-5">
                You can access 4900+ different courses from 300 professional
                trainers for free
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner; 