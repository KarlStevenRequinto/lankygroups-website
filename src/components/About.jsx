import React from "react";
import banner2 from "../assets/banner2.png";

const About = () => {
    return (
        <div>
            <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="about">
                <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                    <div>
                        <img src={banner2} alt="image" />
                    </div>
                    <div className="md:w-3/5 mx-auto">
                        <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">Redefining Premier Remote Support</h2>
                        <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
                            Lanky Groups was founded with a mission to provide world-class virtual assistants to
                            businesses around the world. Our team consists of experienced professionals, all based in the Philippines, who bring their
                            passion and dedication to every task.
                        </p>
                        <button className="btn-primary">Learn More</button>
                    </div>
                </div>
            </div>

            <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="md:w-1/2">
                        <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3">
                            A Vision to <span className="text-brandPrimary">Transform Lives and Businesses</span>
                        </h2>
                        <p className="md:w-3/4 text-sm text-neutralGrey mb-8">Our mission is to uplift Filipino professionals while helping businesses worldwide grow with top tier support.</p>
                    </div>

                    <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <img src="/src/assets/about1.png" alt="image" />
                                <div>
                                    <h4 className="text-2xl text-neutralDGrey font-semibold">2,232,314</h4>
                                    <p>Members</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <img src="/src/assets/about2.png" alt="image" />
                                <div>
                                    <h4 className="text-2xl text-neutralDGrey font-semibold">122,455</h4>
                                    <p>Clubs</p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <img src="/src/assets/about3.png" alt="image" />
                                <div>
                                    <h4 className="text-2xl text-neutralDGrey font-semibold">82,263</h4>
                                    <p>Event Bookings</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <img src="/src/assets/about4.png" alt="image" />
                                <div>
                                    <h4 className="text-2xl text-neutralDGrey font-semibold">432,314</h4>
                                    <p>Payments</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
