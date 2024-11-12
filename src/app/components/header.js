'use client'

import {Component} from "react";
import Image from "next/image";

function Profile(){
    return(
        <div className="max-w-sm rounded-lg shadow-2xl">
        <div className={"avatar"}>
            <div className={"rounded"}>
                <Image
                    src="https://github.com/giabao06.png"
                    width="110"
                    height="110"
                    alt={"Profile"}
                />
            </div>
        </div>
        </div>

    )
}
export default function Header() {
    return (
        <section className={"hero bg-base-200 min-w-screen"}>
            <div className={"hero-content flex-col lg:flex-row-reverse"}>
                <Profile />
                <div>
                    <p className={"py-6"}>
                        <h1 className={"text-3xl font-bold"}>hello! I'm Bảo</h1><br/>
                    Currently an IT student @ RMIT University Vietnam.
                    <br/>Languages: 🇻🇳/🇺🇸/🇫🇷 =&gt; 🆗 | 🇯🇵/🇩🇪 =&gt; 📖</p>
                </div>
            </div>
        </section>

    )
}