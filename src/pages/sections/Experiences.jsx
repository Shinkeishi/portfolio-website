import useIntersectionObserver from "../../useIntersectionObserver";

const Experiences = () => {
    useIntersectionObserver(".animate", (target) => {
        target.style.animationPlayState = "running";
    });

    return (
        <div>
            {" "}
            <div
                style={{ animationPlayState: "paused" }}
                className="mt-[500px] mb-[10px] ml-[30px] text-white font-black text-5xl underline animate animate-fade-left animate-once animate-duration-[1500ms]"
            >
                My Experiences
            </div>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mt-[50px] mb-[500px] mx-[30px]">
                <li
                    style={{ animationPlayState: "paused" }}
                    className="animate animate-fade-left animate-once animate-duration-[1500ms] animate-delay-500"
                >
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
                                Professional Development Director - SMU .Hack
                            </div>
                        </div>
                        <div className="text-[23px] font-semibold">
                            Aug 2023 - current
                        </div>
                        <div className="text-[18px] text-end mt-2">
                            SMU .Hack is a software engineering CCA at Singapore
                            Management University. I specialize in sourcing and
                            organizing growth opportunities for our members. A
                            key responsibility of mine is leading HEAP (.Hack
                            Enrichment Application Programme), our flagship
                            12-week web development summer event. In this role,
                            I oversee the execution of the program and manage a
                            team of executives.
                        </div>
                    </div>
                    <hr />
                </li>
                <li
                    style={{ animationPlayState: "paused" }}
                    className="animate animate-fade-right animate-once animate-duration-[1500ms]"
                >
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
                            I am involved in designing the Patron's Day 2024
                            website and liaise with the school's IT department
                            and other PD departments for assets.
                        </div>
                    </div>
                    <hr />
                </li>
                <li
                    style={{ animationPlayState: "paused" }}
                    className="animate animate-fade-left animate-once animate-duration-[1500ms]"
                >
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
                                className="h-[110px] flex-grow-0 object-contain m-3"
                                src="src/assets/ellipsis.png"
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
                            camp. I source for camp sponsors for and liaise with
                            external parties for our Career Fair segment.
                        </div>
                    </div>
                    <hr />
                </li>
            </ul>
        </div>
    );
};

export default Experiences;
