import useIntersectionObserver from "../../useIntersectionObserver";

const Skills = () => {
    useIntersectionObserver(".animate", (target) => {
        target.style.animationPlayState = "running";
    });

    return (
        <div>
            {" "}
            <div className="mt-[500px] mb-[500px] mx-[30px]">
                <div
                    style={{ animationPlayState: "paused" }}
                    className="text-white font-black text-5xl underline animate animate-fade-left animate-once animate-duration-[1500ms]"
                >
                    My Skills
                </div>
                <div
                    style={{ animationPlayState: "paused" }}
                    className="mt-[40px] flex flex-wrap animate animate-fade-right animate-once animate-duration-[1500ms]"
                >
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
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
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
                        className="m-[5px]"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
                    />
                    <img
                        width="40px"
                        height="40px"
                        className="m-[5px]"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                    />
                </div>
                <div
                    style={{ animationPlayState: "paused" }}
                    className="animate animate-fade-up animate-once animate-duration-[1500ms]"
                >
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
            </div>
        </div>
    );
};

export default Skills;
