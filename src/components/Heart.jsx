import React from 'react'
import { cn } from "../assets/lib/utils"
import { Boxes } from "../assets/ui/bakground-boxes";
import { PinContainer } from "../assets/ui/3d-pin";
import HeartLogo from "../assets/img/heart.png"

function Heart() {

  return (
    <>
    <div className="h-screen relative w-full overflow-hidden bg-red-300 flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-black z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div className={cn("md:text-4xl text-xl text-white relative z-20")}>
      <PinContainer
        title="I hope I made your day"
        href="/message"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] text-center">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-black">
           MESSAGE
          </h3>
          <div className="text-base !m-0 !p-0 font-normal text-center">
            <span className="text-slate-500 text-center">
              Please see the attached message that I made for you!
            </span>
          </div>
          <img src={HeartLogo} alt='heart' className='flex flex-1 w-52 items-center mt-4 mx-auto' />
        </div>
      </PinContainer>
      </div>
    </div>
    </>
  )
}

export default Heart
