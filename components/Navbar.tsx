"use client";

import React,{useRef, useEffect} from 'react'
import gsap from "gsap";


const Navbar = () => {

    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(navRef.current){
            gsap.from(navRef.current,{
                y:-100,opacity:0,duration:2,ease:"power3.out"
            })
        }
    }, []);
    return (
        <div ref={navRef} className="flex justify-between items-center px-7 py-4">
            <div className="text-black text-2xl font-bold font-sans">
                Read & Rise
            </div>
            <div className="flex justify-center items-center gap-5 text-black font-semibold">
                <span>
                    Create
                </span>
                <button className="px-5 py-2 rounded-2xl hover:bg-black hover:text-white">
                    Login
                </button>
            </div>
        </div>
    )
}
export default Navbar
