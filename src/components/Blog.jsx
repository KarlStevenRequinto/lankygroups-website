import React from "react";

const Blog = () => {
    const blog = [
        { id: 1, title: "Creating Streamlined Safeguarding Processes with OneRen", image: "/src/assets/image1.png" },
        { id: 2, title: "What are your safeguarding responsibilities and how can you manage them?", image: "/src/assets/image2.png" },
        { id: 3, title: "Revamping the Membership Model with Triathlon Australia", image: "/src/assets/image3.png" },
    ];

    return (
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12">
            <div className="text-center md:w-1/2 mx-auto ">
                <h2 className="text-4xl text-neutralDGrey font-semibold mb-4">Caring is the new marketing</h2>
                <p className="md:w-3/4 text-sm text-neutralGrey mb-8 mx-auto">
                    The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the
                    community, read about how our community are increasing their membership income and lot's more.
                </p>
            </div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between">
                {blog.map((blog) => (
                    <div key={blog.id} className="mx-auto relative mb-12 cursor-pointer">
                        <img src={blog.image} alt="image" className="hover:scale-95 transition-all duration-300" />
                        <div className="text-center px-2 py-4 bg-white shadow-lg rounded-md md:w-10/12 mx-auto absolute left-0 right-0 -bottom-14">
                            <h3 className="mb-3 text-neutralGrey font-semibold">{blog.title}</h3>
                            <div className="flex items-center justify-center gap-8 ">
                                <a href="/" className="font-bold text-brandPrimary hover:text-neutral-700">
                                    Readmore
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
                                            stroke="#4CAF4F"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
