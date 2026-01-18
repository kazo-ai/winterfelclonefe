"use client";
import HeroScene from "../ui/three/1bigscene";
import Navbar from "../ui/components/Navbar";
import ChatBox from "../ui/components/chatbox";

// export default function HeroSection() {
//   return (
//     <section className="relative h-screen w-full overflow-hidden bg-black">
//       {/* Canvas Layer */}
//       <div className="absolute inset-0 z-0 pointer-events-none">
//      <HeroScene /> 
//       </div>

//       {/* UI Layer */}
//       <div className="relative z-10 flex h-full justify-center">
//         {/* CENTER COLUMN */}
//         <div className="flex w-full max-w-5xl flex-col">
//           {/* Navbar */}
//           <p className="text-red-500 text-3xl">HERO SECTION RENDERING</p>
//           <Navbar />

//           {/* ChatBox center */}
//           <div className="flex flex-1 items-center justify-center px-4">
//             <ChatBox />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Canvas Layer */}
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>

      {/* UI Layer */}
      <div className="relative z-10 h-full">
        {/* CENTER COLUMN */}
        <div className="mx-auto flex h-full max-w-5xl flex-col px-6">
          {/* Navbar */}
          <Navbar />

          {/* ChatBox centered vertically */}
          <div className="flex flex-1 items-center justify-center">
            <ChatBox />
          </div>
        </div>
      </div>
    </section>
  );
}