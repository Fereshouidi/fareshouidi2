'use client';

import HeroContent from "../sub/heroContent";

const Hero = () => {
    return (
        <div id="hero" className="relative flex flex-col w-full h-full">
            <video
                autoPlay
                muted
                loop
                className="rotate-180 absolute top-[-314px] left-0 z-[1] w-full h-full object-cover"
            >
                <source src="/blackhole.webm" type="video/webm"/>
            </video>
            <HeroContent/>
        </div>
    )
}
export default Hero;