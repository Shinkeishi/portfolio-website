import unicents from "../../assets/unicents.png";

const UnicentsCard = () => {
    return (
        <div
            className="hover:scale-105 transition duration-300 ease-in-out cursor-pointer m-5"
            onClick={() => document.getElementById("unicents").showModal()}
        >
            <div className="card w-[384px] h-[500px] bg-base-100 shadow-xl">
                <figure>
                    <img src={unicents} alt="Unicents Web Application" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Unicents</h2>
                    <p className="mb-[10px]">
                        A web application to address financial hardships
                        addressed by university students, particularly those
                        from underprivileged backgrounds.
                    </p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Express</div>
                        <div className="badge badge-outline">ReactTS</div>
                        <div className="badge badge-outline">AWS</div>
                    </div>
                </div>
            </div>
            <dialog id="unicents" className="modal">
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
                                            https://doowtn6g2texk.cloudfront.net/
                                        </div>
                                    </div>
                                    <img
                                        src="src/assets/unicents.png"
                                        alt="Unicents Web Application"
                                    />
                                </div>
                            </div>

                            <div className="basis-1/2">
                                <div className="underline">Overview</div>
                                <div>
                                    Recognising the challenges in accessing and
                                    comparing university costs, our solution is
                                    a user-centric application to mitigate real
                                    consequences faced by peers who are
                                    compelled to abandon studies or prioritize
                                    part-time work due to inadequate financial
                                    planning.
                                </div>
                                <br></br>
                                <div className="underline mb-[10px]">
                                    Technologies Used
                                </div>
                                <div>Frontend: ReactTS, Material UI</div>
                                <div className="flex flex-wrap"></div>
                                <div>Backend: Express</div>
                                <div>Deployment: AWS</div>
                                <br></br>
                                <div className="underline mb-[10px]">
                                    Key Features
                                </div>
                                <ul className="list-disc ml-[10px]">
                                    <li>
                                        University Comparator to compare costs
                                        across universities and understand
                                        available financial assistance schemes
                                        tailored to each user's eligibility
                                        criteria
                                    </li>
                                    <li>
                                        Donor Matching Platform to enhance
                                        opportunities for students to secure
                                        scholarships & improve convenience for
                                        donations
                                    </li>
                                    <li>
                                        Discussion Forums to connect with
                                        like-minded individuals & share tips to
                                        be money smart
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

export default UnicentsCard;
