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
                <div className="position-relative mt-[280px] mb-[500px] ml-[30px] text-white font-black text-5xl animate-fade animate-once animate-duration-[1500ms] animate-ease-linear">
                    <div>
                        <span id="typed">Hi, I'm Ashley</span>
                        <br></br>
                        <div className="text-[18px] mt-[10px]">
                            An aspiring software engineer based in Singapore
                        </div>
                    </div>
                </div>
                <dotlottie-player
                    src="https://lottie.host/a240e738-8070-499b-bf8b-95ed8e921ea7/r39xQmg7fu.json"
                    background="transparent"
                    speed="1"
                    style={{
                        width: "900px",
                        height: "",
                        position: "absolute",
                        top: "50px",
                        right: "500px",
                    }}
                    loop
                    autoplay
                ></dotlottie-player>
                <dotlottie-player
                    src="https://lottie.host/a240e738-8070-499b-bf8b-95ed8e921ea7/r39xQmg7fu.json"
                    background="transparent"
                    speed="1"
                    style={{
                        width: "900px",
                        height: "",
                        position: "absolute",
                        top: "50px",
                        right: "0px",
                    }}
                    loop
                    autoplay
                ></dotlottie-player>
            </section>

            <section>
                <div className="mx-[30px]">
                    <div className="my-[500px] mb-[10px] text-white font-black text-5xl">
                        About Me
                    </div>
                    <div className="text-[18px] mt-[50px] text-justify">
                        I'm Ashley, a Year 2 Computer Science student at
                        Singapore Management University (SMU). My journey in
                        tech is driven by a deep passion for creating
                        user-centric applications. What sets me apart is my
                        dedication to continuous learning. Whether it's
                        collaborative projects or solo ventures, I'm committed
                        to honing my skills and contributing to the tech
                        community. I'm always eager to explore innovative ideas
                        and welcome opportunities for growth and collaboration.
                        Discover more about my projects and feel free to connect
                        with me!
                    </div>
                    <div className="flex flex-col justify-items-center items-center mt-[80px]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="60"
                            width="60"
                            viewBox="0 0 640 512"
                        >
                            <path
                                fill="#ffffffff"
                                d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"
                            />
                        </svg>
                    </div>
                </div>
            </section>

            <section>
                <div className="my-[500px]"></div>
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
                    {/* <div className="text-[18px] text-start mt-2">
                        I am constantly finding ways to upskill myself with
                        certifications, projects and new technologies. I'm
                        currently on the road to obtaining my AWS SAA cert!
                    </div> */}
                    <div className="mt-[40px] flex flex-wrap">
                        <img
                            width="40px"
                            height="40px"
                            className="m-[5px]"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                        />
                        <img
                            width="40px"
                            height="40px"
                            className="m-[5px]"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                        />
                        <img
                            width="40px"
                            height="40px"
                            className="m-[5px]"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg"
                        />
                        <img
                            width="40px"
                            height="40px"
                            className="m-[5px]"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"
                        />
                        <img
                            width="40px"
                            height="40px"
                            className="m-[5px]"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                        />
                        <img
                            width="40px"
                            height="40px"
                            className="m-[5px]"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                        />
                        <img
                            width="40px"
                            height="40px"
                            className="m-[5px]"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                        />

                        <img
                            width="40px"
                            height="40px"
                            className="m-[5px]"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                        />
                        <img
                            width="40px"
                            height="40px"
                            className="m-[5px]"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
                        />
                        <img
                            width="40px"
                            height="40px"
                            className="m-[5px]"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                        />
                        <img
                            width="40px"
                            height="40px"
                            className="m-[5px]"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                        />

                        <img
                            width="40px"
                            height="40px"
                            className="m-[5px]"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg"
                        />
                        <img
                            width="40px"
                            height="40px"
                            className="m-[5px]"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                        />
                        <img
                            width="40px"
                            height="40px"
                            className="m-[5px]"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                        />
                        <img
                            width="40px"
                            height="40px"
                            className="m-[5px]"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
                        />
                        <img
                            width="40px"
                            height="40px"
                            className="m-[5px]"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg"
                        />

                        <img
                            width="40px"
                            height="40px"
                            className="m-[5px]"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
                        />
                        <img
                            width="40px"
                            height="40px"
                            className="m-[5px] "
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
                        />
                    </div>
                    <div className="text-white font-black text-3xl mt-[50px]">
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
                <div className="mt-[300px] text-white text-5xl text-center">
                    My Projects
                </div>
                <div className=""></div>
                <div className="flex justify-center items-center">
                    <div className="carousel carousel-center max-w-5xl p-4 space-x-4 rounded-box mt-[20px] mx-[60px]">
                        <div className="carousel-item">
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure>
                                    <img
                                        src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                                        alt="Shoes"
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">OpenJio</h2>
                                    <p className="mb-[10px]">
                                        Efficient and user-friendly platform to
                                        discover and sign up for various events
                                        around your campus.
                                    </p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline">
                                            SpringBoot
                                        </div>
                                        <div className="badge badge-outline">
                                            React
                                        </div>
                                        <div className="badge badge-outline">
                                            Docker
                                        </div>
                                        <div className="badge badge-outline">
                                            AWS
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                    className="btn btn-neutral btn-outline btn-xs sm:btn-sm md:btn-md lg:btn-lg block mx-auto mt-[20px] mb-[80px]"
                >
                    View all projects here
                </button>
            </section>
            <section>
                <div className="">
                    <footer className="footer items-center p-4 bg-gray-800 text-neutral-content outline-double outline-white">
                        <font></font>
                        <aside className="items-center grid-flow-col">
                            <font></font>
                            <img
                                width="40px"
                                height="40px"
                                src="src/assets/logo.png"
                            ></img>
                            <font></font>
                            <p>
                                Copyright © 2023 - Website designed and coded by
                                me
                            </p>
                            <font></font>
                        </aside>
                        <font></font>
                        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                            <font></font>
                            <a>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current"
                                >
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                </svg>
                                <font></font>
                            </a>
                            <font></font>
                            <a>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current"
                                >
                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                                </svg>
                            </a>
                            <font></font>
                            <a>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current"
                                >
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                                </svg>
                            </a>
                            <font></font>
                        </nav>
                        <font></font>
                    </footer>
                </div>
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
