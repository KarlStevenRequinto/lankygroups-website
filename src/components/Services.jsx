import React from "react";

const Services = () => {
    const services = [
        {
            id: 1,
            title: "Inbox Genius",
            description: "Sophisticated email workflows that prioritize, automate, and respond faster than ever.",
            image: "/src/assets/services1.png",
        },
        {
            id: 2,
            title: "Time Architecture",
            description: "Custom-built schedules that optimize every minute of your day for peak productivity.",
            image: "/src/assets/services2.png",
        },
        {
            id: 3,
            title: "Digital Presence Strategist",
            description: "Expertly crafted social strategies that go beyond posting to build engagement ecosystems.",
            image: "/src/assets/services3.png",
        },
        {
            id: 4,
            title: "Client Whisperer",
            description: "Advanced CRM solutions that turn customer interactions into long-lasting relationships.",
            image: "/src/assets/services3.png",
        },
        {
            id: 5,
            title: "Service Concierge",
            description: "White-glove customer service that feels like luxury support for every interaction.",
            image: "/src/assets/services3.png",
        },
        {
            id: 6,
            title: "Landing Page Specialist",
            description: "Expertly designed landing pages that captivate visitors and convert them into loyal customers.",
            image: "/src/assets/services3.png",
        },
    ];
    return (
        <div className="md:px-14 max-w-screen-2xl mx-auto" id="service">
            <div className="text-center">
                {/* <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">Our Clients</h2>
                <p className="text-neutralGrey">We have been working with some Fortune 500+ clients</p>

                <div>images here</div> */}

                <div className="mt-20 md:w-3/4 mx-auto text-center bg-slate-200">
                    <h2 className="text-4xl text-neutralDGrey font-semibold mb-3">Efficient, Reliable, and Professional</h2>
                    <p className="text-neutralGrey">Expert support tailored to your business needs, freeing you to focus on growth.</p>
                </div>

                <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
                    {services.map((service) => (
                        <div key={service.id} className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full ">
                            <div>
                                <div className="bg-[#E8F5E9] h-14 w-14 mb-4 mx-auto rounded-tl-3xl rounded-br-3xl">
                                    <img src={service.image} alt="image" className="-ml-5"/>
                                </div>
                                <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">{service.title}</h4>
                                <p className="text-sm text-neutralDGrey">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
