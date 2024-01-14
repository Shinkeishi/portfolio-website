const OpenJioCard = () => {
    return (
        <div
            className="hover:scale-105 transition duration-300 ease-in-out cursor-pointer mx-3"
            onClick={() => document.getElementById("openjio").showModal()}
        >
            <div className="card w-[384px] h-[500px] bg-base-100 shadow-xl">
                <figure>
                    <img
                        src="src/assets/openjio-home.png"
                        alt="OpenJio Web Application"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">OpenJio</h2>
                    <p className="mb-[10px]">
                        Efficient and user-friendly platform to discover and
                        sign up for various events around your campus.
                    </p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">SpringBoot</div>
                        <div className="badge badge-outline">ReactTS</div>
                        <div className="badge badge-outline">Docker</div>
                        <div className="badge badge-outline">AWS</div>
                    </div>
                </div>
            </div>
            <dialog id="openjio" className="modal">
                <div className="modal-box cursor-default max-w-none w-5/6">
                    <div className="m-2">
                        <div className="flex flex-row justify-center items-center">
                            <div className="basis-1/2 mr-[25px]">
                                {/* <div className="flex flex-wrap">
                        <svg
                            className="swap-on fill-current w-[25px] h-[25px] m-2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 496 512"
                        >
                            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                        </svg>
                    </div> */}
                                <div
                                    onClick={() => {
                                        window.location.href =
                                            "https://github.com/CS203-OpenJio/OpenJio";
                                    }}
                                    className="mockup-browser border bg-base-300 hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
                                >
                                    <div className="mockup-browser-toolbar">
                                        <div className="input">
                                            http://openjio.xyz
                                        </div>
                                    </div>
                                    <img
                                        src="src/assets/openjio-home.png"
                                        alt="OpenJio Web Application"
                                    />
                                </div>
                            </div>

                            <div className="basis-1/2">
                                <div className="underline">Overview</div>
                                <div>
                                    OpenJio is a web application designed to
                                    streamline event registration at SMU,
                                    replacing traditional methods like Google
                                    Forms. It increases the visibility of school
                                    activities around campus. The platform also
                                    features an algorithm to select participants
                                    based on their attendance history, enhancing
                                    the efficiency of managing high-demand
                                    events.
                                </div>
                                <br></br>
                                <div className="underline mb-[10px]">
                                    Technologies Used
                                </div>
                                <div>
                                    Frontend: ReactTS, Tailwind CSS, Material
                                    UI, shadcn
                                </div>
                                <div className="flex flex-wrap"></div>
                                <div>Backend: SpringBoot, mySQL Database</div>
                                <div>
                                    Unit and Integration Testing: Jacoco,
                                    Mockito, Postman
                                </div>
                                <div>
                                    Deployment + CI/CD: Github Actions, Docker,
                                    Docker Compose, AWS, SonarCloud
                                </div>
                                <br></br>
                                <ul className="list-disc ml-[10px]">
                                    <li>
                                        Orchestrated DevOps and Frontend
                                        Development
                                    </li>
                                    <li>
                                        Translated Figma designs into a
                                        user-friendly interface with React,
                                        Tailwind CSS and other UI libraries
                                    </li>
                                    <li>
                                        Constructed a robust infrastructure with
                                        Docker, ECS, RDS, S3, Fargate, ALB and
                                        Route53
                                    </li>
                                    <li>
                                        Automated 3 workflows with GitHub
                                        Actions, integrating code quality
                                        analysis with SonarCloud and testing
                                        with Docker Compose
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default OpenJioCard;
