import top1 from '../../../assets/right-side/top1.png'
import top2 from '../../../assets/right-side/top2.png'
import top3 from '../../../assets/right-side/top3.png'
import top4 from '../../../assets/right-side/top4.png'
import top5 from '../../../assets/right-side/top5.png'
import top6 from '../../../assets/right-side/top6.png'
import dot from '../../../assets/right-side/dot.png'
import add from '../../../assets/right-side/add.png'
import search from "../../../assets/search.png";
import card1 from '../../../assets/right-side/card1.png'
import people1 from '../../../assets/right-side/people1.png'
import people2 from '../../../assets/right-side/people2.png'
import people3 from '../../../assets/right-side/people3.png'
import people4 from '../../../assets/right-side/people4.png'
import people5 from '../../../assets/right-side/people5.png'
import people6 from '../../../assets/right-side/people6.png'
import people7 from '../../../assets/right-side/people7.png'
import people8 from '../../../assets/right-side/people8.png'
import people9 from '../../../assets/right-side/people9.png'
import cardIcon1 from '../../../assets/right-side/cardicon1.png'
import cardIcon2 from '../../../assets/right-side/cardicon2.png'
import cardIcon3 from '../../../assets/right-side/cardicon3.png'

const RightSide = () => {
    return (
        <>
            <div className='ml-8 border border-gray-200 rounded-lg  mt-5'>
            {/* right navbar  */}

            <div className="flex  gap-5  p-3 border-b-[1px] border-gray-200 ">
<div className='flex gap-2 items-center justify-center'>
    <img src={top1} alt="" />
    <h3 className="text-center text-slate-400 text-xs font-bold leading-tight">List Tasks</h3>
</div>
<div className='flex gap-2 items-center justify-center'>
    <img src={top2} alt="" />
    <h3 className="text-center text-slate-400 text-xs font-bold leading-tight">List Tasks</h3>
</div>
<div className='flex gap-2 items-center justify-center'>
    <img src={top3} alt="" />
    <h3 className="text-center text-slate-400 text-xs font-bold leading-tight">List Tasks</h3>
</div>
<div className='flex gap-2 items-center justify-center'>
    <img src={top4} alt="" />
    <h3 className="text-center text-slate-400 text-xs font-bold leading-tight">List Tasks</h3>
</div>
<div className='flex gap-2 items-center justify-center'>
    <img src={top5} alt="" />
    <h3 className="text-center text-slate-400 text-xs font-bold leading-tight">List Tasks</h3>
</div>
<div className='flex gap-2 items-center justify-center'>
    <img src={top6} alt="" />
    <h3 className="text-center text-slate-400 text-xs font-bold leading-tight">List Tasks</h3>
</div>


       {/* search */}

       <div className="relative  hidden  xl:flex ml-6">
          <div className="w-56">
            <input
              className="rounded-full p-4 pl-14 mx-4 w-full "
              type="search"
              name="search the"
              placeholder="Search Tasks"
              id=""
            />
            <img className=" left-10 top-4 absolute" src={search} />
           
          </div>
        </div>


            </div>

            {/* main content */}

            <div className='grid grid-cols-4 gap-10 p-3'>

             {/* 1st Colum  */}

               <div>
         {/* top */}
            <div className='flex  items-center bg-white p-3 justify-between relative mt-12'>
            <div className="w-0.5 h-7 absolute left-0   bg-violet-600 rounded" />

                <div className='flex  items-center gap-4 '>
                   
            <h1 className="text-slate-600 text-xs font-black leading-tight">TO DO</h1>

<div className="w-7 h-7 pt-1.5 pb-1 bg-white rounded-2xl shadow border border-neutral-100 justify-center items-center inline-flex">
<h1 className="text-center text-slate-500 text-xs font-black leading-tight">5</h1>
</div> 
                </div>


                <div className='flex  items-center gap-2'>
              <img src={dot} alt="" />
             <img src={add} alt="" />

                </div>




              </div>

              {/* middle */}
              <div className=" mt-10  bg-white shadow-xl">
  <figure><img className='w-full' src={card1} alt="Shoes" /></figure>
  <div className="card-body">
     <div className='flex justify-between mt-5 p-3'>
     <h3 className="text-slate-400 text-xs font-bold leading-tight">Space Tasks 2</h3> 

     <img src={people1} alt="" />
     </div>
     <div className="text-slate-500 text-xs font-bold leading-tight px-3 mb-4">Make Money Online Through</div>

     <div className='flex items-center  gap-3 p-3'>
     <div className='flex gap-2 items-center justify-center'>
    <img src={cardIcon1} alt="" />
    <h3 className="text-center text-slate-400 text-xs font-bold leading-tight">4</h3>
</div>
     <div className='flex gap-2 items-center justify-center'>
    <img src={cardIcon2} alt="" />
    <h3 className="text-center text-slate-400 text-xs font-bold leading-tight">2</h3>
</div>
     <div className='flex gap-2 items-center justify-center'>
    <img src={cardIcon3} alt="" />
    <h3 className="text-center text-slate-400 text-xs font-bold leading-tight">6 Days Left</h3>
</div>
     </div>



  </div>
</div>

{/* last part  */}
{/* 1 */}
   <div className='bg-white p-3 mt-5 '>

<div className='flex justify-between'>
<h3 className="text-slate-400 text-xs font-bold leading-tight">Space Tasks 2</h3>

<div className='flex relative mr-4'>
   <img src={people2} alt="" /> 
   <img className='absolute -right-3' src={people3} alt="" /> 
</div>

</div>

<h1 className="text-slate-500 text-xs font-bold leading-tight">Make Money Online Through</h1>
   

   </div>
   {/* 2 */}
   <div className='bg-white p-3 mt-5 '>

<div className='flex justify-between'>
<h3 className="text-slate-400 text-xs font-bold leading-tight">Space Tasks 2</h3>

<div className='flex relative mr-4'>
   <img src={people4} alt="" /> 
   <img className='absolute -right-3' src={people5} alt="" /> 
   <img className='absolute -right-6' src={people6} alt="" /> 
</div>

</div>

<h1 className="text-slate-500 text-xs font-bold leading-tight">Search Engine Optimization ...</h1>
   

   </div>
   {/* 3 */}
   <div className='bg-white p-3 mt-5 '>

<div className='flex justify-between'>
<h3 className="text-slate-400 text-xs font-bold leading-tight">Space Tasks 2</h3>

<div className='flex relative '>
   <img src={people7} alt="" /> 
   
</div>

</div>

<h1 className="text-slate-500 text-xs font-bold leading-tight">Characteristics Of A Successful</h1>
   

   </div>

   {/* 4 */}
   <div className='bg-white p-3 mt-5 '>

<div className='flex justify-between'>
<h3 className="text-slate-400 text-xs font-bold leading-tight">Space Tasks 2</h3>

<div className='flex relative '>
   <img src={people8} alt="" /> 
    
</div>

</div>

<h1 className="text-slate-500 text-xs font-bold leading-tight">Getting Free Publicity</h1>
   

   </div>

   {/* 5 */}

   <div className='bg-white p-3 mt-5 '>

<div className='flex justify-between'>
<h3 className="text-slate-400 text-xs font-bold leading-tight">Space Tasks 2</h3>

<div className='flex relative '>
   <img src={people9} alt="" /> 
 
</div>

</div>

<h1 className="text-slate-500 text-xs font-bold leading-tight">Importance Of The Custom ...</h1>
   

   </div>

   {/* new task  */}

   <div className="text-slate-500 text-xs font-bold leading-tight mt-5">+ NEW TASK</div>


               </div>

                 


            </div>






            </div>



        </>
    );
};

export default RightSide;