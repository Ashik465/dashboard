import LeftSide from "../leftSide/LeftSide";
import MiddleSide from "../middleSide/MiddleSide";


const Dashboard = () => {
    return (
        <div className="bg-gray-100">
             <div className=" grid grid-cols-8 container mx-auto">
            
            <LeftSide></LeftSide>
            <MiddleSide></MiddleSide>
        </div>
        </div>
       
    );
};

export default Dashboard;