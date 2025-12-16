import React from "react";
//import pythonImg from "./python.png"; // Make sure the image is in the src folder or adjust the path

const LearnPython = () => {
  return (
    <div className="pt-24 bg-[#c6dce3] font-serif min-h-screen">
    
      {/* MAIN SECTION */}
      <div className="flex justify-center items-start py-10 px-6 md:px-20 gap-10 flex-wrap">
        <div className="bg-white p-5 rounded-xl shadow-md">
          <img src="https://basavapurushottam.com/wp-content/uploads/2025/12/fcd1be17-026a-472f-acf1-b3bed4e67e32.png" alt="Python" className="w-[300px] rounded-lg" />
        </div>

        <div className="bg-[#e8a27f] p-10 w-[500px] rounded-lg shadow-lg transform -rotate-1">
          <h1 className="text-center text-3xl mt-0">Learn With me</h1>
          <p className="mt-4">
            Welcome to “Learn Python with Me”—a dedicated space where I’m beginning my journey as a complete newcomer to Python and inviting you to learn right alongside me. My motivation is simple and strong: I want to enter the world of artificial intelligence, and Python is the doorway.
          </p>
          <p className="mt-4">
            As I take my first steps, I’ll share everything I learn—twice a week—through blogs shaped by my own struggles, small victories, experiments, and the YouTube tutorials that guide me. The purpose of this page is not just to learn Python, but to make it understandable in the simplest way possible, especially for those who feel overwhelmed at the start.
          </p>
          <p className="mt-4">
            Think of this as a shared path where we grow together, learning the language of the future one challenge at a time.
          </p>
        </div>
      </div>

      
    </div>
  );
};

export default LearnPython;
