import icon from "../../assets/Icon.png";
import dot from "../../assets/dot.png";
import search from "../../assets/search.png";
import rightArrow from "../../assets/rightArrow.png";
import bell from "../../assets/bell.png";
import user from "../../assets/user.png";
import cross from "../../assets/cross.png";

const Navbar = () => {
  return (
    <div className="bg-gray-100 p-5 border-b-2 border-b-gray-200">
      <div className=" container mx-auto flex  items-center  ">
        <div className="w-12 h-12 p-2.5 bg-white rounded-full shadow justify-center items-center ">
          <div className=" ">
            <img className="" src={icon} />
          </div>
        </div>

        {/* <img src={icon} alt="" /> */}
        <h1 className="text-slate-600 text-lg font-bold leading-loose mx-16 whitespace-nowrap">
          Constructor
        </h1>

        <div className=" items-center gap-3 hidden md:flex ">
          <h3 className="text-slate-400 text-xs font-bold leading-normal whitespace-nowrap">
            Dashboard
          </h3>
          <h3 className="text-slate-400 text-xs font-bold leading-normal whitespace-nowrap">
            About Us
          </h3>
          <h3 className="text-slate-400 text-xs font-bold leading-normal whitespace-nowrap">
            News
          </h3>
          <h3 className="text-slate-400 text-xs font-bold leading-normal whitespace-nowrap">
            User Policy
          </h3>
          <h3 className="text-slate-400 text-xs font-bold leading-normal whitespace-nowrap">
            Contacts
          </h3>
          <img src={dot} alt="" />
        </div>
        <div className="relative  hidden  xl:flex ml-20">
          <div className="w-96">
            <input
              className="rounded-full p-4 pl-14 mx-4 w-full "
              type="search"
              name="search the"
              placeholder="Search Products, Orders and Clients"
              id=""
            />
            <img className=" left-10 top-4 absolute" src={search} />
            <img className=" right-0 top-4 absolute" src={rightArrow} />
          </div>
        </div>

        {/* end part */}

        <div className="flex gap-4 items-center ml-24">
          <img src={user} alt="" />

          <h3 className="text-slate-500 text-xs font-bold leading-normal whitespace-nowrap hidden  xl:flex">
            Clayton Santos
          </h3>

          <div className=" hidden  xl:flex w-12 h-12 p-2.5 bg-white rounded-full shadow justify-center items-center ">
            <div className="w-7 h-7 relative flex-col justify-start items-start flex">
              <img className="" src={bell} />
            </div>
          </div>

          <div className=" hidden  xl:flex w-12 h-12 p-2.5 bg-white rounded-full shadow justify-center items-center ">
  <div className="w-7 h-7 relative flex-col justify-start items-start flex">
    <img className="" src={cross} />
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
