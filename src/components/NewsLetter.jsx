import React from "react";

const NewsLetter = () => {
    return (
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
            <div>
                <div className="text-center">
                    <h2 className="lg:text-5xl text-3xl text-neutral-800 font-semibold mb-6 lg:leading-snug">
                        Pellentesque suscipit fringilla libero eu.
                    </h2>
                    <div className="flex items-center justify-center lg:w-2/5 mx-auto">
                        <button className="btn-primary text-white">
                            Get a Demo
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="inline-block ml-2"
                            >
                                <path
                                    d="M11.9347 11.866L14.2267 9.5739C14.4986 9.30207 14.4986 8.86134 14.2267 8.58951L11.9347 6.29742M14.0229 9.0817L4.27789 9.0817"
                                    stroke="white"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;
