const HazardBuddyCard = () => {
    return (
        <div
            className="carousel-item hover:scale-105 transition duration-300 ease-in-out cursor-pointer mx-3 m-5"
            onClick={() => document.getElementById("hazardbuddy").showModal()}
        >
            <div className="card w-[384px] h-[500px] bg-base-100 shadow-xl">
                <figure>
                    <img
                        className=""
                        src="src/assets/hazardbuddy.png"
                        alt="Hazard Buddy Mobile Application"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Hazard Buddy</h2>
                    <p className="mb-[10px]">
                        A workplace safety supervision app paired with mobile
                        devices mounted on the gears of the workers to enable a
                        suite of functionalities capable of detecting,
                        preventing and reporting workplace hazards.
                    </p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Figma</div>
                        <div className="badge badge-outline">UI/UX</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HazardBuddyCard;
