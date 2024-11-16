import React from 'react'
import { TextGenerateEffect } from "../assets/ui/text-generate-effect"



function Message() {

    const message = `hello Irish. kaya ko lang to ginawa kase nahihiya ko mag message ng ganito sayo directly baka kase di mo replyan e haha. gusto ko lang mag thankyou kase kinakausap moko kahit feel ko ang boring boring ko kausap hahaha. Sana di ka maumay na kausapin ako HAHA. I am super excited to get to know more about you.`;
    return (
        <>
            <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-pink-400 bg-grid-black/[0.6] relative flex items-center justify-center">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-gray-800 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <div className='flex flex-col'>
                    <p className="relative z-20 text-center mx-10">
                        <TextGenerateEffect words={message} />;
                    </p>
                    <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 text-center">
                        -Scammer
                    </p>
                </div>
            </div>
        </>
    )
}

export default Message