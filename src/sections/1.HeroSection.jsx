"use client";
import HeroScene from "../ui/three/1bigscene";
import Navbar from "../ui/components/Navbar";
import ChatBox from "../ui/components/chatbox";

export default function HeroSection() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-black">
            {/* Canvas Layer */}
            <div className="absolute inset-0 z-0">
                <HeroScene />
            </div>


            <div className="relative z-10 h-full">
                {/* CENTER COLUMN */}
                <div className="fixed w-full z-[100] flex items-center justify-between px-3 md:px-6 top-4 transition-all duration-500 ease-in-out translate-y-0">
                   
                
                </div>
                 <div className="py-1 px-2 rounded-[8px] flex items-center justify-center transition-all duration-500">
                        <Navbar />
                    </div>
                {/* ChatBox centered vertically */}
                <div className="flex relative flex flex-col justify-center items-center h-screen w-full overflow-visibleflex-1 items-center justify-center">
                    <div className="relative z-10 w-full max-w-2xl flex flex-col items-center text-center gap-2">
                        
                            <span
                                className="
                                             font-Mulish
                                            text-[60px]
                                             font-[600]
                                              leading-none
                                             text-neutral-300
                                            
                                             margin-[10px]">
                                Ship Solana Contracts </span>

                            <span
                                className="
                                                font-sans
                                                text-[60px]
                                                font-[600]
                                                leading-none
                                                bg-gradient-to-b
                                                from-neutral-300
                                                to-gray-700
                                                bg-clip-text
                                                text-transparent">
                                in Minutes not Months </span>
                       <p className="text-[#a7a7a7] text-xs md:text-sm mb-6 font-mono tracking-normal md:tracking-wider">Winterfell eats</p>
                        <ChatBox />
                    </div>
                </div>

            </div>
        </section>
    );
}