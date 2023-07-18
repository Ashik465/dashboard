import LeftSide from "../leftSide/LeftSide";
import MiddleSide from "../middleSide/MiddleSide";
import RightSide from "../rightSide/RightSide";


const Dashboard = () => {
    return (
        <div className="bg-gray-100">
             <div className=" grid grid-cols-8 container mx-auto">
            
            <LeftSide></LeftSide>
            <MiddleSide></MiddleSide>
            <div className="col-span-6 "><RightSide></RightSide></div>
            
        </div>
        </div>
       
    );
};

export default Dashboard;