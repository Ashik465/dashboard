import LeftSide from "../leftSide/LeftSide";
import MiddleSide from "../middleSide/MiddleSide";
import RightSide from "../rightSide/RightSide";


const Dashboard = () => {
    return (
        <div className="bg-gray-100">
             <div className=" grid grid-cols-8 container mx-auto">
            
            <div className=" hidden lg:block">
               <LeftSide></LeftSide>  
            </div>
            <div className=" hidden lg:block">
               <MiddleSide></MiddleSide>
            </div>



           
           
            <div className="md:col-span-6 col-span-8 overflow-y-scroll md:overflow-visible w-full "><RightSide></RightSide></div>
            
        </div>
        </div>
       
    );
};

export default Dashboard;