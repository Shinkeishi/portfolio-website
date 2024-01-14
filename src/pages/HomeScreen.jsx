import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import Projects from "./sections/Projects.jsx";
import Skills from "./sections/Skills.jsx";
import Experiences from "./sections/Experiences.jsx";
import useIntersectionObserver from "../useIntersectionObserver.jsx";

const HomeScreen = () => {
    // const navigate = useNavigate();

    // const handleClick = () => {
    //     // if(localStorage.getItem("token") != null) {
    //     //   navigate("/centralhub");
    //     // } else {
    //     navigate("/projects");
    //     // }
    // };

    useIntersectionObserver(".animate", (target) => {
        target.style.animationPlayState = "running";
    });

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
                    src="https://lottie.host/34c3af2b-9e7c-48a4-86b4-18615dc4bb5f/nG5OX6yWhO.json"
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
                    src="https://lottie.host/34c3af2b-9e7c-48a4-86b4-18615dc4bb5f/nG5OX6yWhO.json"
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
                <div className="mx-[30px] my-[500px]">
                    <div
                        style={{ animationPlayState: "paused" }}
                        className="mb-[10px] text-white font-black text-5xl underline animate animate-fade-right animate-once animate-duration-[1500ms]"
                    >
                        About Me
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center">
                        <div
                            style={{ animationPlayState: "paused" }}
                            className="text-[20px] text-justify flex-1 mr-[50px] animate animate-fade-right animate-once animate-duration-[1500ms] animate-ease-out animate-delay-500"
                        >
                            Hey there! I'm Ashley Tan, a Year 2 Computer Science
                            student at Singapore Management University (SMU). My
                            journey in tech is driven by a passion for creating
                            user-centric applications. My interests lie in
                            Frontend, UI/UX and Cloud. What sets me apart is my
                            dedication to continuous learning, I'm committed to
                            honing my skills and learning something from
                            everything I do. Discover more about my projects and
                            connect with me!
                        </div>
                        <dotlottie-player
                            src="https://lottie.host/249389fd-fee0-49a8-a381-fbae2ad78175/J3d8dmSORz.json"
                            background="transparent"
                            speed="1"
                            style={{
                                width: "400px",
                                height: "300px",
                                margin: "20px",
                                animationPlayState: "paused",
                            }}
                            className="animate animate-fade-left animate-once animate-duration-[1500ms] animate-ease-out animate-delay-700"
                            autoplay
                        ></dotlottie-player>
                    </div>
                    <div
                        style={{ animationPlayState: "paused" }}
                        className="mt-[10px] animate animate-fade-up animate-once animate-duration-[1500ms] animate-ease-out animate-delay-900"
                    >
                        <div className="mb-[10px] text-white font-black text-[30px]">
                            Some fun facts about me!
                        </div>
                        <ol className="list-disc text-[20px] mx-[30px]">
                            <li>My MBTI is INFP</li>
                            <li>
                                I'm a huge foodie and love to bake and cook :)
                            </li>
                            <li>
                                I enjoy running and have completed two
                                half-marathons so far
                            </li>
                        </ol>
                    </div>
                </div>
            </section>

            <section>
                <div className="my-[500px]"></div>
            </section>

            <section>
                <Experiences />
            </section>

            <section>
                <Skills />
            </section>

            <section>
                <Projects />
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
                                Website designed and coded by me - Built with
                                ReactJS and Tailwind
                            </p>
                            <font></font>
                        </aside>
                        <font></font>
                        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                            <a href="https://github.com/Shinkeishi">
                                <svg
                                    className="swap-on fill-current w-[25px] h-[25px] m-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 496 512"
                                >
                                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/ashleyytanjx/">
                                <svg
                                    className="swap-on fill-current w-[25px] h-[25px] m-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                >
                                    <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                                </svg>
                            </a>
                            <a href="mailto:ashley.tan.2022@scis.smu.edu.sg?subject=Contact from Portfolio Website">
                                <svg
                                    className="swap-on fill-current w-[25px] h-[25px] m-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                                </svg>
                            </a>
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
