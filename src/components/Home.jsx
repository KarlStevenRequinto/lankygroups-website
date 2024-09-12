import React from "react";
import { Carousel } from "flowbite-react";
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";

const Home = () => {
    return (
        <div className="bg-neutralSilver" id="home" >
            <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
                <Carousel className="w-full mx-auto" slideInterval={5000}>
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                        <div>
                            <img src={banner1} alt="image" />
                        </div>
                        <div className="md:w-1/2">
                            <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4">
                                A Decade of Expertise{" "}
                                <span className="text-brandPrimary leading-snug whitespace-nowrap">Committed to Your Growth</span>
                            </h1>
                            <p className="text-neutralGrey text-base">Tailored virtual assistance with handpicked, AI-trained professionals.</p>
                            <p className="text-neutralGrey text-base mb-8">Empowering businesses, uplifting Filipino talent.</p>
                            <button className="btn-primary">Book A Meeting</button>
                        </div>
                    </div>

                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                        <div>
                            <img src={banner2} alt="image" />
                        </div>
                        <div className="md:w-1/2">
                            <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4">
                            Delegate the Details <span className="text-brandPrimary leading-snug">Focus on What Matters</span>
                            </h1>
                            <p className="text-neutralGrey text-base mb-8">Our expert VAs take care of the time-consuming tasks, so you can focus on the big picture and scale your business faster.</p>
                            <button className="btn-primary">Book A Meeting</button>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Home;
