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
import card2 from '../../../assets/right-side/card2.png'
import people1 from '../../../assets/right-side/people1.png'
import people2 from '../../../assets/right-side/people2.png'
import people3 from '../../../assets/right-side/people3.png'
import people4 from '../../../assets/right-side/people4.png'
import people5 from '../../../assets/right-side/people5.png'
import people6 from '../../../assets/right-side/people6.png'
import people7 from '../../../assets/right-side/people7.png'
import people8 from '../../../assets/right-side/people8.png'
import people9 from '../../../assets/right-side/people9.png'
import people10 from '../../../assets/right-side/people10.png'
import people11 from '../../../assets/right-side/people11.png'
import people12 from '../../../assets/right-side/people12.png'
import people13 from '../../../assets/right-side/people13.png'
import people14 from '../../../assets/right-side/people14.png'
import cardIcon1 from '../../../assets/right-side/cardicon1.png'
import cardIcon2 from '../../../assets/right-side/cardicon2.png'
import cardIcon3 from '../../../assets/right-side/cardicon3.png'
import red from '../../../assets/right-side/redclock.png'
import middle1 from '../../../assets/right-side/middle1.png'
import middle2 from '../../../assets/right-side/middle2.png'
import middle3 from '../../../assets/right-side/middle3.png'
import middle4 from '../../../assets/right-side/middle4.png'
import last1 from '../../../assets/right-side/last1.png'
import last2 from '../../../assets/right-side/last2.png'
import last3 from '../../../assets/right-side/last3.png'
import last4 from '../../../assets/right-side/last4.png'
import last5 from '../../../assets/right-side/last5.png'
import last6 from '../../../assets/right-side/last6.png'
import last7 from '../../../assets/right-side/last7.png'
import last8 from '../../../assets/right-side/last8.png'
import last9 from '../../../assets/right-side/last9.png'

const RightSide = () => {
    return (
        <>
            <div className='ml-8 border border-gray-200 rounded-lg  mt-5'>
            {/* right navbar  */}

            <div className="flex  gap-10  p-3 border-b-[1px] border-gray-200 ">
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

            <div className='grid grid-cols-4 gap-10 p-3 relative'>

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
{/* 2nd colum */}
<div>
  {/* top */}
   <div className='flex  items-center bg-white p-3 justify-between relative mt-12'>
            <div className="w-0.5 h-7 absolute left-0   bg-sky-400 rounded" />

                <div className='flex  items-center gap-4 '>
                   
            <h1 className="text-slate-600 text-xs font-black leading-tight">IN WORK</h1>

<div className="w-7 h-7 pt-1.5 pb-1 bg-white rounded-2xl shadow border border-neutral-100 justify-center items-center inline-flex">
<h1 className="text-center text-slate-500 text-xs font-black leading-tight">5</h1>
</div> 
                </div>


                <div className='flex  items-center gap-2'>
              <img src={dot} alt="" />
             <img src={add} alt="" />

                </div>




              </div>

  {/* 2nd part */}

  <div className='bg-white p-3 mt-5 '>

<div className='flex justify-between'>
<h3 className="text-slate-400 text-xs font-bold leading-tight">Space Tasks 3</h3>

<div className='flex relative '>
   <img src={people10} alt="" /> 
   
</div>

</div>

<h1 className="text-slate-500 text-xs font-bold leading-tight">Types Of Paper In Catalog</h1>
   

   </div>
  
             {/* middle */}
             <div className=" mt-10  bg-white shadow-xl">
  <figure><img className='w-full' src={card2} alt="Shoes" /></figure>
  <div className="card-body">
     <div className='flex justify-between mt-5 p-3'>
     <h3 className="text-slate-400 text-xs font-bold leading-tight">Space Tasks 2</h3> 

     <img src={people1} alt="" />
     </div>
     <div className="text-slate-500 text-xs font-bold leading-tight px-3 mb-4">Global Resorts Network</div>

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
 {/* 4rd part */}

 <div className='bg-white p-3 mt-5 '>

<div className='flex justify-between'>
<h3 className="text-slate-400 text-xs font-bold leading-tight">Space Tasks 3</h3>

<div className='flex relative '>
   <img src={people11} alt="" /> 
   
</div>

</div>

<h1 className="text-slate-500 text-xs font-bold leading-tight">Types Of Paper In Catalog</h1>
   

   </div>
 {/* 5th part */}

 <div className='bg-white p-3 mt-5 '>

<div className='flex justify-between'>
<h3 className="text-slate-400 text-xs font-bold leading-tight">Space Tasks 3</h3>

<div className='flex relative '>
   <img src={people12} alt="" /> 
   
</div>

</div>

<h1 className="text-slate-500 text-xs font-bold leading-tight">Types Of Paper In Catalog</h1>

<div className='flex items-center  gap-3 mt-3'>
     <div className='flex gap-2 items-center justify-center'>
    <img src={cardIcon1} alt="" />
    <h3 className="text-center text-slate-400 text-xs font-bold leading-tight">4</h3>
</div>
     <div className='flex gap-2 items-center justify-center'>
    <img src={cardIcon2} alt="" />
    <h3 className="text-center text-slate-400 text-xs font-bold leading-tight">2</h3>
</div>
     <div className='flex gap-2 items-center justify-center '>
    <img src={red} alt="" />
    <h3 className="text-center  text-xs font-bold leading-tight text-red-500">6 Days Left</h3>
</div>
     </div>
   

   </div>

    {/* new task  */}

    <div className="text-slate-500 text-xs font-bold leading-tight mt-5">+ NEW TASK</div>


</div>
 
 {/* 3rd colum */}

 <div>
    {/* top */}
    <div className='flex  items-center bg-white p-3 justify-between relative mt-12'>
            <div className="w-0.5 h-7 absolute left-0   bg-amber-400 rounded" />

                <div className='flex  items-center gap-4 '>
                   
            <h1 className="text-slate-600 text-xs font-black leading-tight">REVIEW</h1>

<div className="w-7 h-7 pt-1.5 pb-1 bg-white rounded-2xl shadow border border-neutral-100 justify-center items-center inline-flex">
<h1 className="text-center text-slate-500 text-xs font-black leading-tight">5</h1>
</div> 
                </div>


                <div className='flex  items-center gap-2'>
              <img src={dot} alt="" />
             <img src={add} alt="" />

                </div>




              </div>
               {/* 2nd part */}

  <div className='bg-white p-3 mt-5 '>

<div className='flex justify-between'>
<h3 className="text-slate-400 text-xs font-bold leading-tight">Space Tasks 3</h3>

<div className='flex relative '>
   <img src={people13} alt="" /> 
   
</div>

</div>

<h1 className="text-slate-500 text-xs font-bold leading-tight">Astronomy Or Astrology</h1>
   

   </div>
   {/* 3rd */}
  <div className='bg-white p-3 mt-5 '>

<div className='flex justify-between'>
<h3 className="text-slate-400 text-xs font-bold leading-tight">Space Tasks 3</h3>

<div className='flex relative '>
   <img src={people14} alt="" /> 
   
</div>

</div>

<h1 className="text-slate-500 text-xs font-bold leading-tight">Astronomy Binoculars A Great</h1>
   

   </div>
   {/* 4rd */}
  <div className='bg-white p-3 mt-5 '>

<div className='flex justify-between items-center'>

    <div className='flex justify-center items-center'>
        <img src={middle1} alt="" />
       <h3 className="text-slate-400 text-xs font-bold leading-tight">Task name or type </h3> 
    </div>


<div className='flex relative '>
   <img src={people14} alt="" /> 
   
</div>

</div>

<div className='flex justify-between mt-5'>
<div className='flex  gap-3'>
     <img src={middle2} alt="" />
     <img src={middle3} alt="" />
     <img src={middle4} alt="" />
</div>

<button>
<div className="w-11 h-7 px-2.5 py-1 bg-blue-600 rounded border border-blue-600 justify-center items-center gap-2.5 inline-flex">
  <div className="text-center text-white text-xs font-black leading-tight">Save</div>
</div>
</button>
   


</div>
   

   </div>

 

 </div>

 {/* 4rd colum */}

 <div>
      {/* top */}
      <div className='flex  items-center bg-white p-3 justify-between relative mt-12'>
            <div className="w-0.5 h-7 absolute left-0   bg-green-500 rounded" />

                <div className='flex  items-center gap-4 '>
                   
            <h1 className="text-slate-600 text-xs font-black leading-tight">DONE</h1>

<div className="w-7 h-7 pt-1.5 pb-1 bg-white rounded-2xl shadow border border-neutral-100 justify-center items-center inline-flex">
<h1 className="text-center text-slate-500 text-xs font-black leading-tight">5</h1>
</div> 
                </div>


                <div className='flex  items-center gap-2'>
              <img src={dot} alt="" />
             <img src={add} alt="" />

                </div>




              </div>
               {/* 2nd part */}

  <div className='bg-white p-3 mt-5 '>

<div className='flex justify-between'>
<h3 className="text-slate-400 text-xs font-bold leading-tight">Space Tasks 3</h3>

<div className='flex relative '>
   <img src={people14} alt="" /> 
   
</div>

</div>

<h1 className="text-slate-500 text-xs font-bold leading-tight">Copper Canyon</h1>
   

   </div>
 </div>
  
    {/* share between 4rd and 5th $$$$$$$$$$$$$$$$$$$$$$*/} 

    <div className='bg-white p-3  col-start-3 col-span-2 absolute left-10 bottom-60 '>

<div className='flex items-center justify-between'>
    <div className=' flex items-center gap-2'>
    <div className="w-7 h-7 relative">
<div className="w-1.5 h-1.5 left-[11px] top-[12px] absolute bg-sky-400 rounded-md" />
</div>
<h1 className="text-slate-600 text-sm font-bold leading-loose">Development Apps</h1>
<img src={last1} alt="" />


    </div>

    <div>
<img src={last2} alt="" />
    </div>

</div>

<div className='grid grid-cols-2 gap-3 ml-7'>

    <div className='flex items-center gap-3'>
       <img src={last3} alt="" />
       <h1 className="text-slate-600 text-xs font-bold leading-tight">4 Subtasks</h1>
    </div>
    <div className='flex items-center gap-3'>
       <img src={last4} alt="" />
       <h1 className="text-slate-600 text-xs font-bold leading-tight">Priority Enabled</h1>
    </div>
    <div className='flex items-center gap-3'>
       <img src={last5} alt="" />
       <h1 className="text-slate-600 text-xs font-bold leading-tight">3 Files</h1>
    </div>
    <div className='flex items-center gap-3'>
       <img src={last6} alt="" />
       <h1 className="text-slate-600 text-xs font-bold leading-tight">7 Comments</h1>
    </div>
    <div className='flex items-center gap-3'>
       <img src={last7} alt="" />
       <h1 className="text-slate-600 text-xs font-bold leading-tight">Tyler Norman</h1>
    </div>

</div>

<div className='border-t-2 border-gray-200 mt-7'>
<div className='flex items-center mt-7  ml-7 '>

    <div className='space-y-3'>
    <h1 className="text-slate-400 text-xs font-black leading-tight">START DATE</h1>
    <h3 className="text-slate-600 text-xs font-black leading-tight">Sep 3, 9:00 pm</h3>
    </div>

    <div className='flex items-center justify-center'>
<img src={last9} alt="" />
    </div>

    <div className='space-y-3'>
    <h1 className="text-slate-400 text-xs font-black leading-tight">DUE DATE</h1>
    <h3 className="text-slate-600 text-xs font-black leading-tight">Sep 4, 9:00 pm</h3>
    </div>

    <div className='flex items-center justify-center ml-20 gap-5 '>
   
   <div className='bg-green-600 rounded-full'>
    <img src={last8} alt="" />
   </div>


    <div className="text-slate-600 text-xs font-black leading-tight">0:00</div>
    </div>

</div>
</div>


</div>

{/* end */}

                 


            </div>






            </div>



        </>
    );
};

export default RightSide;