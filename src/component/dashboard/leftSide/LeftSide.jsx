import icon1 from "../../../assets/left-side/Icon1.png";
import icon2 from "../../../assets/left-side/Icon2.png";
import icon3 from "../../../assets/left-side/Icon3.png";
import icon4 from "../../../assets/left-side/Icon4.png";
import icon5 from "../../../assets/left-side/Icon5.png";
import icon6 from "../../../assets/left-side/Icon6.png";
import people1 from "../../../assets/left-side/people1.png";import people2 from "../../../assets/left-side/people2.png";
import people3 from "../../../assets/left-side/people3.png";
import people4 from "../../../assets/left-side/people4.png";
import people5 from "../../../assets/left-side/people5.png";

const LeftSide = () => {
  return (
    <div className="bg-gray-100 h-full">
      <div className=" container mx-auto">
        <div className="flex flex-col justify-between gap-60">
          {/* icon   */}
          <div className=" flex flex-col gap-5 mt-5">
            <div className="w-12 h-12 p-2.5 bg-white rounded-full shadow justify-center items-center inline-flex">
              <div className="w-7 h-7 relative flex-col justify-start items-start flex">
                <img className="" src={icon1} />
              </div>
            </div>
            <div className="w-12 h-12 p-2.5 bg-white rounded-full shadow justify-center items-center inline-flex">
              <div className="w-7 h-7 relative flex-col justify-start items-start flex">
                <img className="" src={icon2} />
              </div>
            </div>
            <div className="w-12 h-12 p-2.5 bg-white rounded-full shadow justify-center items-center inline-flex">
              <div className="w-7 h-7 relative flex-col justify-start items-start flex">
              <div className="w-7 h-7 relative">
  <div className="w-2.5 h-2.5 -right-2 -top-3 absolute bg-blue-600 rounded-md" />
</div>
                <img className="" src={icon3} />
              </div>
            </div>
            <div className="w-12 h-12 p-2.5 bg-white rounded-full shadow justify-center items-center inline-flex">
              <div className="w-7 h-7 relative flex-col justify-start items-start flex">
                <img className="" src={icon4} />
              </div>
            </div>
            <div className="w-12 h-12 p-2.5 bg-white rounded-full shadow justify-center items-center inline-flex">
              <div className="w-7 h-7 relative flex-col justify-start items-start flex">
                <img className="" src={icon5} />
              </div>
            </div>
            <div className="w-12 h-12 p-2.5 bg-white rounded-full shadow justify-center items-center inline-flex">
              <div className="w-7 h-7 relative flex-col justify-start items-start flex">
                <img className="" src={icon6} />
              </div>
            </div>
          </div>

          {/* people */}
           
           <div className="flex flex-col gap-5">
           <div className="w-12 h-12 relative">
  <div className="w-12 h-12 left-0 top-0 absolute bg-orange-500  rounded-3xl" />
  <div className="w-12 h-12 left-0 top-0 absolute bg-stone-300 rounded-3xl" />
  <img className=" left-0 top-0 absolute" src={people1} />
</div>

<div className="w-12 h-12 relative">
  <div className="w-12 h-12 left-0 top-0 absolute bg-pink-600 bg-opacity-40 rounded-3xl" />
  <div className="w-12 h-12 left-0 top-0 absolute bg-stone-300 rounded-3xl" />
  <img className="w-12 h-12 left-0 top-0 absolute" src={people2} />
</div>
<div className="w-12 h-12 relative">
  <div className="w-12 h-12 left-0 top-0 absolute bg-violet-600 bg-opacity-30 rounded-3xl" />
  <div className="w-12 h-12 left-0 top-0 absolute bg-stone-300 rounded-3xl" />
  <img className="w-12 h-12 left-0 top-0 absolute" src={people3} />
</div> 

<div className="w-12 h-12 relative">
  <div className="w-12 h-12 left-0 top-0 absolute bg-amber-400 rounded-3xl" />
  <div className="w-12 h-12 left-0 top-0 absolute bg-stone-300 rounded-3xl" />
  <img className="w-12 h-12 left-0 top-0 absolute"src={people4} />
</div>




<div className="w-12 h-12 p-2.5 bg-white rounded-full shadow justify-center items-center inline-flex">
  <div className="w-7 h-7 relative flex-col justify-start items-start flex">
    <img className="" src={people5} />
  </div>
</div>
           </div>

        </div>
      </div>
    </div>
  );
};

export default LeftSide;
