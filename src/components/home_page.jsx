import React from "react";
import arrow from "./arrow.svg";


function HomePage() {
    return (
      <div className='homepage max-w-7xl m-auto mb-72'>
      {/* <button className="py-4 px-10 bg-blue-600 text-white rounded-xl mt-10 float-right ">Contact Me</button> */}
        <div className='homepage-bg grid grid-cols-2 gap-2'>
          <div className='name_detail mx-auto pt-60'>
          <h3 className="hello1 text-5xl pb-2">Hello! I'm</h3>
          <h1 className="text-6xl font-bold pb-36 text-center">Shivam Kaushik</h1>
          <div>
          <h3 className="pb-5 text-center font-bold">Scroll Down for portfolio</h3>
          <img src={arrow} alt= "arrow" className="mx-auto animate-bounce w-6 h-6 "></img>
          </div>
          </div>
          <div className='my_profile_image'>
          <div className='circle_3'>
              <img src="/images/profile_image.png" alt='profile_pic' className="h-96 mx-auto pt-auto relative top-48 left-4"></img>
          </div>
          </div>
        </div>
      </div>
    );
  }

export default HomePage;
