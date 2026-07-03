import Navbar from "../../components/shared/Navbar"
import Banner from "./Banner"

const BannerBackground = () => {
    return (
        <div className="relative w-full overflow-hidden">
            {/* // <div className="relative w-full h-screen overflow-hidden"> */}
            {/* Video background */}
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover scale-150"
            >
                <source src="/banner-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay content */}
            <div className="relative z-20 max-w-[1500px] mx-auto mb-28">
                <Banner></Banner>
            </div>
        </div>
    )
}

export default BannerBackground