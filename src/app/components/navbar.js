"use client"

import Image from 'next/image';
import Link from "next/link";
import {useEffect} from "react";
import {themeChange} from "theme-change";

export default function Navbar() {
    useEffect(() => {
        themeChange(false)
    }, [])
    return(
        <div className={"navbar bg-base-100 shadow-lg"}>
            <div className={"navbar-start"}>
                <div className={"navbar-brand"}>
                    <Link href={"/"}>
                        <Image
                            src={"https://github.com/giabao06.png"}
                            alt={"giabao06 profile"}
                            width={50}
                            height={50}
                        />
                    </Link>
                </div>
            </div>
            <div className={"navbar-center"}>
                <ul className={"menu menu-horizontal px-1 lg:flex space-x-10"}>
                    <li className={"nav-item"}><Link href={"/about"}>About Me</Link></li>
                    <li className={"nav-item"}><Link href={"/projects"}>Current Projects</Link></li>
                    <li className={"nav-item"}>
                        <details className={"dropdown"}>
                            <summary>Stuff/Posts</summary>
                            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                {/* TODO: Dynamically load posts */}
                                <li><a>These are</a></li>
                                <li><a>Some Posts</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <div className={"navbar-end"}>
            </div>
        </div>
    )
}