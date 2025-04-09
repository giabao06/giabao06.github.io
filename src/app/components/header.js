'use client'

import {Component} from "react";
import Image from "next/image";

function Profile(){
    return(
        <div className="max-w-sm rounded-lg shadow-2xl pt-2">
        <div className={"avatar"}>
            <div className={"rounded"}>
                <Image
                    src="https://github.com/giabao06.png?size=110"
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
            <div className={"hero-content flex-col lg:flex-row-reverse pt-1 pb-1"}>
                <Profile />
                <div>
                    <p className={"text-3xl font-bold pt-1"}>hello! I&apos;m Bảo</p><br/>
                    <p className={""}>
                        Currently an IT student @ RMIT University Vietnam.
                        <br/>Languages: 🇻🇳/🇺🇸/🇫🇷 =&gt; 🆗 | 🇯🇵/🇩🇪 =&gt; 📖</p>
                </div>
            </div>
        </section>

    )
}