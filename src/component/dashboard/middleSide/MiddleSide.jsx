import user from "../../../assets/midde-side/user.png";
import dot from "../../../assets/midde-side/dot.png";
import profile from "../../../assets/midde-side/profile.png";
import icon1 from "../../../assets/midde-side/icon1.png";
import icon2 from "../../../assets/midde-side/icon2.png";
import icon3 from "../../../assets/midde-side/icon3.png";
import icon4 from "../../../assets/midde-side/icon4.png";
import icon5 from "../../../assets/midde-side/icon5.png";
import icon6 from "../../../assets/midde-side/icon6.png";
import icon7 from "../../../assets/midde-side/icon7.png";
import icon8 from "../../../assets/midde-side/icon8.png";
import bottom1 from "../../../assets/midde-side/bottom1.png";
import bottom2 from "../../../assets/midde-side/bottom2.png";
import bottom3 from "../../../assets/midde-side/bottom3.png";
import bottom4 from "../../../assets/midde-side/bottom4.png";
import bottom5 from "../../../assets/midde-side/bottom5.png";

const MiddleSide = () => {
  return (
    <>
      <div>
        <div className="flex justify-between mt-5">
          <div className="w-10 h-10 p-1.5 bg-white rounded-full shadow justify-center items-center inline-flex">
            <div className="w-7 h-7 relative flex-col justify-start items-start flex">
              <img src={user} alt="" />
            </div>
          </div>
          <div className="w-10 h-10 p-1.5 bg-white rounded-full shadow justify-center items-center inline-flex">
            <div className="w-7 h-7 relative flex-col justify-start items-start flex">
              <img src={dot} alt="" />
            </div>
          </div>
        </div>
        {/* profile section */}
        <div className="flex justify-center items-center">
          <div className="w-32 h-32 relative ">
            <div className="w-32 h-32 left-0 top-0 absolute rounded-full border border-zinc-200" />
            <div className="w-28 h-28 left-[10px] top-[10px] absolute overflow-hidden">
              <div className="w-28 h-28 left-0 top-0 absolute bg-amber-400 bg-opacity-40 rounded-full" />
              <div className="w-28 h-28 left-0 top-0 absolute  rounded-full" />
              <img className=" left-0 top-0 absolute " src={profile} />
            </div>
            <div className=" px-3 py-1 left-[115px] top-[50px] absolute bg-blue-600 rounded-2xl shadow border border-blue-600 justify-center items-center gap-2.5 inline-flex">
              <div className="grow shrink basis-0  text-center text-white text-xs font-bold leading-tight">
                2
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-center text-slate-500 text-base font-bold leading-loose whitespace-nowrap mt-3">
          Hello Alfred Bryant
        </h3>
        <h3 className="text-center text-slate-400 text-sm font-bold leading-loose">
          adrain.nader@yahoo.com
        </h3>

        {/* box section  */}

        <div className="grid grid-cols-2  mt-10  border-2 border-gray-200 rounded-lg ">
          <div className="flex flex-col items-center justify-center  gap-3 border-2 border-gray-200 p-2">
            <img src={icon1} alt="" />
            <h3 className="text-center text-slate-400 text-xs font-bold leading-tight">
              Dashboard
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center  gap-3  p-2 bg-white rounded-2xl shadow-xl">
            <img src={icon2} alt="" />
            <h3 className="text-blue-600 text-xs font-black leading-tight">
              Notes
            </h3>
          </div>

          <div className="flex flex-col items-center justify-center  gap-3 border-2 border-gray-200 p-2">
            <img src={icon3} alt="" />
            <h3 className="text-center text-slate-400 text-xs font-bold leading-tight">
              Tasks
            </h3>
          </div>

          <div className="flex flex-col items-center justify-center  gap-3 border-2 border-gray-200 p-2">
            <img src={icon4} alt="" />
            <h3 className="text-center text-slate-400 text-xs font-bold leading-tight">
              Files
            </h3>
          </div>

          <div className="flex flex-col items-center justify-center  gap-3 border-2 border-gray-200 p-2">
            <img src={icon5} alt="" />
            <h3 className="text-center text-slate-400 text-xs font-bold leading-tight">
              Emails
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center  gap-3 border-2 border-gray-200 p-2">
            <img src={icon6} alt="" />
            <h3 className="text-center text-slate-400 text-xs font-bold leading-tight">
              Clients
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center  gap-3 border-2 border-gray-200 p-2">
            <img src={icon7} alt="" />
            <h3 className="text-center text-slate-400 text-xs font-bold leading-tight">
              Calendars
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center  gap-3 border-2 border-gray-200 p-2">
            <img src={icon8} alt="" />
            <h3 className="text-center text-slate-400 text-xs font-bold leading-tight">
              Settings
            </h3>
          </div>
        </div>

        {/* bottom section */}
        <div className="flex items-center justify-center gap-2 rounded-3xl border border-gray-200 p-2 mt-72" >
 
         <img src={bottom1} alt="" />
         <img src={bottom2} alt="" />
         <img src={bottom3} alt="" />
         <img src={bottom4} alt="" />
         <img src={bottom5} alt="" />
       
             
        </div>
      </div>
    </>
  );
};

export default MiddleSide;
