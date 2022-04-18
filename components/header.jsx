
import { useEffect, useState, useRef, useCallback } from 'react'


const logo = 'logo-dark.svg'

const Header = props => {
    useEffect(() => {

    }, []);

    return (
        <>
            <nav className='nav fixed top-0 left-0 z-10 flex md:w-full md:pt-8 md:px-8'>
                <div className="logo bg-white border border-black p-1 md:p-2">
                    <a href="" className="block w-12 h-12 md:w-14 md:h-14 bg-no-repeat bg-center bg-contain" style={{backgroundImage: `url(${logo})`}}></a>
                </div>
                <div className="flex flex-col-reverse justify-start md:w-full md:flex-row md:justify-between">
                    <div className="left translate-y-[-1px] md:translate-y-0 md:ml-4">
                        <ul className="flex flex-row">
                            <li className=""><a className="block px-2 py-1 text-sm md:text-base bg-white border border-l-0 border-black cursor-pointer hover:font-bold md:border-l">社會住宅</a></li>
                            <li className=""><a className="block px-2 py-1 text-sm md:text-base bg-white border border-l-0 border-black cursor-pointer hover:font-bold">公辦都更</a></li>
                            <li className=""><a className="block px-2 py-1 text-sm md:text-base bg-white border border-l-0 border-black cursor-pointer hover:font-bold">焦點內容</a></li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul className="flex flex-row">
                            <li className=""><a className="block px-2 py-1 text-sm md:text-base bg-white border border-l-0 border-black cursor-pointer hover:font-bold md:border-l">整體規劃</a></li>
                            <li className=""><a className="block px-2 py-1 text-sm md:text-base bg-white border border-l-0 border-black cursor-pointer hover:font-bold">資訊連結</a></li>
                            <li className=""><a className="block px-2 py-1 text-sm md:text-base bg-white border border-l-0 border-black cursor-pointer hover:font-bold">關於 LHT</a></li>
                            <li className=""><a className="block px-2 py-1 text-sm md:text-base bg-white border border-l-0 border-black cursor-pointer hover:font-bold">社宅公布欄</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header