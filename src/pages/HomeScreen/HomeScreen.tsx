import Typed from "typed.js";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const HomeScreen = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        // if(localStorage.getItem("token") != null) {
        //   navigate("/centralhub");
        // } else {
        navigate("/projects");
        // }
    };

    useEffect(() => {
        // Options for typed.js
        const options = {
            strings: ["Hello, I'm Ashley!"],
            typeSpeed: 130,
            backSpeed: 40,
            loop: false,
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
            <section>
                <div className="flex justify-between items-center mt-[260px] mb-[500px] ml-[30px] text-white font-black text-5xl animate-fade animate-once animate-duration-[1500ms] animate-ease-linear">
                    <div>
                        <span id="typed">Hi, I'm Ashley</span>
                        <br></br>
                        <div className="text-[18px] mt-[10px]">
                            An aspiring software engineer based in Singapore
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="my-[500px]">
                    <iframe
                        width="580"
                        height="300"
                        src="https://lottie.host/embed/062e6d15-f8c5-4f5d-a84f-4e68ee1185be/zbtVWL5oKY.json"
                        className="m-[80px] rounded"
                    ></iframe>
                </div>
            </section>

            <section>
                <div className="mt-[500px] mb-[10px] ml-[30px] text-white font-black text-5xl">
                    My Experiences
                </div>
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mt-[50px] mb-[500px]">
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
                            <div className="flex flex-col justify-center items-end">
                                <img
                                    className="h-[100px] flex-grow-0 object-contain m-3"
                                    src="src/assets/dothack_transbg.png"
                                ></img>
                                <div className="text-[28px] font-black">
                                    Professional Development Director - SMU
                                    .Hack
                                </div>
                            </div>
                            <div className="text-[23px] font-semibold">
                                Aug 2023 - current
                            </div>
                            <div className="text-[18px] text-end mt-2">
                                SMU .Hack is a software engineering CCA at
                                Singapore Management University. I specialize in
                                sourcing and organizing growth opportunities,
                                including networking events and software
                                development programs for our members. A key
                                responsibility of mine is leading the HEAP
                                (.Hack Enrichment Application Programme), our
                                flagship 12-week summer event. In this role, I
                                oversee the execution of the program and manage
                                a team of executives.
                            </div>
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
                            <div className="flex flex-col justify-center items-start">
                                {/* <img
                                    className="h-[100px] flex-grow-0 object-contain m-3"
                                    src="src/assets/dothack_transbg.png"
                                ></img> */}
                                <div className="text-[28px] font-black">
                                    Web Tech Associate - Patron's Day 2024
                                </div>
                            </div>
                            <div className="text-[23px] font-semibold">
                                Sept 2023 - current
                            </div>
                            <div className="text-[18px] text-start mt-2">
                                SMU Patron's Day is an annual event to celebrate
                                SMU's anniversary. I am involved in designing
                                the PD'24 website and liaising with the other PD
                                departments and the school's IT department.
                            </div>
                        </div>
                        <hr />
                    </li>
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
                            <div className="flex flex-col justify-center items-end">
                                <img
                                    className="h-[100px] flex-grow-0 object-contain m-3"
                                    src="src/assets/dothack_transbg.png"
                                ></img>
                                <div className="text-[28px] font-black">
                                    Corporate Relations Director - Metamorphosis
                                    2023
                                </div>
                            </div>
                            <div className="text-[23px] font-semibold">
                                Feb 2023 - August 2023
                            </div>
                            <div className="text-[18px] text-end mt-2">
                                Metamorphosis is SMU's School of Computing and
                                Information Systems (SCIS) inaugural orientation
                                camp. I source for camp sponsors and liaise with
                                external parties.
                            </div>
                        </div>
                        <hr />
                    </li>
                </ul>
            </section>

            <section>
                <div className="mt-[500px] mb-[500px] mx-[30px]">
                    <div className="text-white font-black text-5xl">
                        My Skills
                    </div>
                    <div className="text-[18px] text-start mt-2">
                        I am constantly finding ways to upskill myself with
                        certifications, projects and new technologies. I'm
                        currently on the road to obtaining my AWS SAA cert!
                    </div>
                    <div className="text-white font-black text-3xl mt-3">
                        Certifications:
                    </div>
                    <div className="text-[18px] text-start mt-2">
                        <ul>
                            <li>- AWS Cloud Practitioner</li>
                            <li>
                                - AI100: Python Programming and Data
                                Visualisation (Heicoders Academy Professionals)
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <div className="mt-[500px] text-white text-5xl text-center">
                    My Projects
                </div>
                <div className=""></div>
                <div className="flex justify-center items-center">
                    <div className="carousel carousel-center max-w-5xl p-4 space-x-4 rounded-box mt-[20px] mx-[60px]">
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
                <button
                    onClick={handleClick}
                    className="btn btn-neutral btn-outline btn-xs sm:btn-sm md:btn-md lg:btn-lg block mx-auto mt-[20px] mb-[200px]"
                >
                    View all projects here
                </button>
            </section>
            <section>
                <div className="mt-[200px]"></div>
            </section>
            {/* <section>
                <div className="m-[50px] text-center text-[30px]">
                    I am always open to new opportunities in
                    the software engineering field. Drop your contact here!
                </div>
            </section> */}
        </>
    );
};

export default HomeScreen;
