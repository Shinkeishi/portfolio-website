import useIntersectionObserver from "../../useIntersectionObserver";
import OpenJioCard from "../../components/cards/OpenJioCard";
import HazardBuddyCard from "../../components/cards/HazardBuddyCard";
import UnicentsCard from "../../components/cards/UnicentsCard";

const Projects = () => {
    useIntersectionObserver(".animate", (target) => {
        target.style.animationPlayState = "running";
    });

    const handleOpenJioClick = () => {
        window.location.href = "https://github.com/CS203-OpenJio/OpenJio";
    };

    const handleUnicentsClick = () => {
        window.location.href =
            "https://github.com/unicesng/What-the-.Heck-UniCents";
    };

    const handleHBClick = () => {
        window.location.href =
            "https://www.youtube.com/watch?v=2IHpdBfVkN0&ab_channel=LucasLiao";
    };

    return (
        <div>
            <div>
                {" "}
                <div
                    style={{ animationPlayState: "paused" }}
                    className="mt-[300px] text-white text-5xl text-center underline animate animate-fade-left animate-once animate-duration-[1500ms]"
                >
                    My Projects
                </div>
                <div
                    style={{ animationPlayState: "paused" }}
                    className="my-[20px] mx-[30px] text-white text-[18px] text-center animate animate-fade-right animate-once animate-duration-[1500ms]"
                >
                    Check out all the projects I have done from hackathons,
                    personal ventures and school!
                </div>
                <div
                    style={{ animationPlayState: "paused" }}
                    className="flex flex-col md:flex-row items-center justify-evenly animate animate-fade-up animate-once animate-duration-[1500ms] p-6 mb-[150px]"
                >
                    <OpenJioCard />
                    <UnicentsCard />
                    <HazardBuddyCard />
                </div>
            </div>
        </div>
    );
};

export default Projects;
