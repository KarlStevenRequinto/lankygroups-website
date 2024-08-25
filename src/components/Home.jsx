import React from "react";
import { Carousel } from "flowbite-react";
const Home = () => {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel className="w-full mx-auto">
                <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                    <div>
                        <img src="" alt="image"/>
                    </div>
                </div>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">Slide 2</div>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">Slide 3</div>
            </Carousel>
        </div>
    );
};

export default Home;
