import React from "react";

const Home = () => {
  return (
        <div className="max-w-[1600px] min-h-96 mx-auto relative" style={{backgroundImage:"url(https://i.ibb.co/qxR4dj8/3.png)",backgroundPosition:"center",backgroundSize:"cover"}}>
           <div className="text-white max-w-[700px] absolute left-[5%] lg:left-[45%] bottom-[30%]">
            <h2 className="font-bold text-2xl">Would you like a Cup of Delicious Coffee?</h2>
            <p className="text-sm font-light my-3">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
            <button className="bg-[#E3B577] p-2 text-black border hover:bg-[#a19c9400] hover:text-white hover:rounded ">Learn More</button>
           </div>
        </div>
  )
};

export default Home;
