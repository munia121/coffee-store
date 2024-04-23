import { useLoaderData } from "react-router-dom";
import image from '../assets/grass.svg'

const ViewDetails = () => {
    const lodadedCoffee = useLoaderData();
    

    return (
        <div>
            asdfadsfasdfasdfasdfasdfasdfasfdasdfadsf  {lodadedCoffee.name}
            <img src={image} alt="" />
        </div>
    );
};

export default ViewDetails;