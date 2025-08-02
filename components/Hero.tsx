"use client"

import React,{useRef,useEffect} from 'react'
import {TextGenerateEffect} from "@/components/ui/TextGenerateEffect";
import Image from "next/image";
import gsap from "gsap";

const Hero = () => {

    const imgWrapper = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(imgWrapper.current){
            gsap.from(imgWrapper.current,{
                x:200,opacity:0,duration:2,ease:"easeIn"
            })
        }
    }, []);

    return (
        <section className="min-h-screen">
            <div className="flex justify-center items-center gap-5">
                <div className="space-y-7">
                    <h1 className="text-black text-2xl md:text-6xl leading-15 font-bold">Discover your<br/>Next Great Read.</h1>
                    <p className="text-gray-500 text-sm md:text-xl">
                        Explore thousands of books across<br/>genres and categories.
                    </p>
                    {/*<TextGenerateEffect className="text-black" words="Shop now"/> Work was on progress*/}
                    <form className="flex justify-start items-center gap-3">
                        <input type="text" placeholder="Search by titles, authors or ISB"
                               className="w-fit px-5 py-2 rounded-2xl bg-gray-100 border border-black text-black"
                        />
                        <button className="px-5 py-2.5 rounded-2xl bg-blue-600 text-white text-md hover:bg-blue-400 transition duration-200">Shop now</button>
                    </form>
                </div>
                <div ref={imgWrapper}>
                    <Image src="/heroimage.png" alt="Hero image" width={500} height={500}/>
                </div>
            </div>
        </section>
    )
}
export default Hero
