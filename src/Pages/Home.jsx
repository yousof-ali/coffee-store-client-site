import React from "react";

const Home = () => {
  return (
       <div>
         <div className="max-w-[1600px] min-h-96 mx-auto relative" style={{backgroundImage:"url(https://i.ibb.co/qxR4dj8/3.png)",backgroundPosition:"center",backgroundSize:"cover"}}>
           <div className="text-white max-w-[700px] absolute left-[5%] lg:left-[45%] bottom-[30%]">
            <h2 className="font-bold text-2xl">Would you like a Cup of Delicious Coffee?</h2>
            <p className="text-sm font-light my-3">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them  memorable.</p>
            <button className="bg-[#E3B577] p-2 text-black border hover:bg-[#a19c9400] hover:text-white hover:rounded ">Learn More</button>
           </div>
        </div>
      <div className="bg-[#ECEAE3]">
          <div className="flex overflow-x-scroll  items-center  justify-between p-4  max-w-[1600px]  mx-auto gap-4">
             <div className="max-w-[300px] min-w-[200px] flex flex-col justify-center items-center text-center">
              <img className="w-12" src="/1.png" alt="" />
              <h2 className="text-2xl font-semibold">Awesome Aroma</h2>
              <p>You will definitely be a fan of the design & aroma of your coffee</p>
             </div>
             <div className="max-w-[300px] min-w-[200px] flex flex-col justify-center items-center text-center">
              <img className="w-12" src="/2.png" alt="" />
              <h2 className="text-2xl font-semibold">High Quality</h2>
              <p>We served the coffee to you maintaining the best quality</p>
             </div>
             <div className="max-w-[300px] min-w-[200px] flex flex-col justify-center items-center text-center">
              <img className="w-12" src="/3.png" alt="" />
              <h2 className="text-2xl font-semibold">Pure Grades</h2>
              <p>The coffee is made of the green coffee beans which you will love</p>
             </div>
             <div className="max-w-[300px] min-w-[200px] flex flex-col justify-center items-center text-center">
              <img className="w-12" src="/4.png" alt="" />
              <h2 className="text-2xl font-semibold">Proper Roasting</h2>
              <p>Your coffee is brewed by first roasting the green coffee beans</p>
             </div>
          </div>
        </div>
       </div>
  )
};

export default Home;
