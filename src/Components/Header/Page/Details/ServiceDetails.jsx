import { useLoaderData } from "react-router-dom";
import AllDetails from "./AllDetails";
import Navber from "../../Navber/Navber";


const ServiceDetails = () => {
  
   const ServiceData = useLoaderData();
  return (
    <div>
        <Navber></Navber>
      <div>
        {ServiceData.map((allItems) => (
          <AllDetails key={allItems.id} ServiceData={allItems}></AllDetails>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetails;