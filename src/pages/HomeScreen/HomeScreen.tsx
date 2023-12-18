import Typed from "typed.js";
import { useEffect } from "react";

const HomeScreen = () => {
    useEffect(() => {
        // Options for typed.js
        const options = {
            strings: [
                "Hi, I'm Ashley",
                "I love all things tech!",
                "An aspiring software engineer based in Singapore :)",
            ],
            typeSpeed: 60,
            backSpeed: 35,
            loop: true,
        };

        // Initialize typed.js on the #typed element
        const typed = new Typed("#typed", options);

        // Cleanup function to destroy Typed instance when component unmounts
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <>
            <div className="mt-[100px] mb-[100px] ml-[20px] text-white font-black text-5xl">
                <span id="typed">Hi, I'm Ashley</span>
            </div>
            <hr></hr>
            <div className="mt-[40px] mb-[10px] ml-[20px] text-white font-black text-5xl">
                My Experiences
            </div>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mt-[50px] mb-[50px]">
                <li>
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div className="timeline-start md:text-end mb-10">
                        <time className="font-mono italic">
                            Aug 2023 - current
                        </time>
                        <div className="text-lg font-black">
                            SMU .Hack - Professional Development Director
                        </div>
                        I source for professional development opportunities such
                        as networking sessions, software development programmes
                        for our .Hack members. In particular, I am in-charge of
                        HEAP (.Hack Enrichment Application Programme) which is
                        .Hack's flagship 12-week summer event. As Director, I
                        also oversee my executives under me and ensure our
                        department runs smoothly.
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div className="timeline-end mb-10">
                        <time className="font-mono italic">
                            Sept 2023 - current
                        </time>
                        <div className="text-lg font-black">
                            SMU Patron's Day 2024 - Web Tech Associate
                        </div>
                        SMU Patron's Day is an annual event to celebrate SMU's
                        anniversary. I am involved in designing the PD'24
                        website and liaising with the other PD departments and
                        the school's IT department.
                    </div>
                    <hr />
                </li>
            </ul>
            <hr></hr>
            <div className="mt-[40px] mb-[10px] ml-[20px] text-white font-black text-5xl text-center">
                View my projects here!
            </div>
            <div className="flex justify-center items-center">
                <div className="carousel carousel-center max-w-5xl p-4 space-x-4 bg-neutral rounded-box m-5 mb-[50px]">
                    <div className="carousel-item">
                        <img
                            src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                            className="rounded-box"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
                            className="rounded-box"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
                            className="rounded-box"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
                            className="rounded-box"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
                            className="rounded-box"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
                            className="rounded-box"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
                            className="rounded-box"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeScreen;
