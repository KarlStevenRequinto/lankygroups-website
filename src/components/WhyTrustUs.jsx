import React from "react";
import banner3 from "../assets/banner3.jpg";
const WhyTrustUs = () => {
    return (
        <div>
            <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="whytrustus">
                <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                    <div>
                        <img src={banner3} alt="image" />
                    </div>
                    <div className="md:w-3/5 mx-auto">
                        <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">We Hire the Best, You Get the Best</h2>
                        <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
                            At Lanky Groups, we don’t just hire VAs—we cultivate professionals. Our bootcamp ensures every assistant is fully equipped
                            to handle your business with care, especially when it comes to sensitive data. We’re dedicated to finding the right people
                            for your business. When you need reliable support, you can trust us to deliver. Our VAs are trained to seamlessly
                            integrate into your workflow, ensuring smooth operations from day one. With a commitment to excellence, we prioritize
                            accuracy, efficiency, and confidentiality in every task. Partner with us, and experience the peace of mind that comes from
                            knowing your business is in expert hands.
                        </p>
                        <button className="btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyTrustUs;
