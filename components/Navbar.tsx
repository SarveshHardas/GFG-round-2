import React from 'react'

const Navbar = () => {
    return (
        <div className="flex justify-between items-center px-7 py-4">
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
