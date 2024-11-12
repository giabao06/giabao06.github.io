'use client'

import {Work_Sans} from "next/font/google"
import {Component} from 'react'
const workSans = Work_Sans({
    subsets: ['latin', 'vietnamese'],
    display: 'swap',
})

function EmailBtn(){
    return(
        <a role={"button"} className={"btn btn-active bg-orange-600 hover:bg-orange-700 text-white"} href="mailto:hello@giabao06.xyz">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                height={25}
                fill="none"
                viewBox="0 0 24 24"
            >
                <path
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m4 7 6.2 4.65a3 3 0 0 0 3.6 0L20 7"
                />
                <rect
                    width={18}
                    height={14}
                    x={3}
                    y={5}
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeWidth={2}
                    rx={2}
                />
            </svg>
            Email
        </a>
    )
}

function BskyBtn(){
    return(
        <a role={"button"} className={"btn btn-active bg-bskyb hover:bg-bsky text-white"} href="https://bsky.app/profile/giabao06.xyz">
            <svg xmlns="http://www.w3.org/2000/svg" width={28} height={25}>
                <path
                    d="M6.07 1.68C9.281 4.12 12.73 9.066 14 11.719c1.27-2.653 4.719-7.598 7.93-10.04C24.246-.081 28-1.44 28 2.892c0 .867-.492 7.273-.777 8.312-1 3.613-4.641 4.535-7.883 3.98 5.664.973 7.105 4.208 3.992 7.438-5.906 6.137-8.492-1.539-9.152-3.508-.121-.36-.18-.527-.18-.386 0-.141-.059.027-.18.386-.66 1.969-3.246 9.645-9.152 3.508-3.113-3.23-1.672-6.465 3.992-7.437-3.242.554-6.883-.368-7.883-3.98C.492 10.163 0 3.757 0 2.89 0-1.441 3.754-.082 6.07 1.68Zm0 0"
                    style={{
                        stroke: "none",
                        fillRule: "nonzero",
                        fill: "#fff",
                        fillOpacity: 1,
                    }}
                />
            </svg>
            Bluesky
        </a>
    )
}

function DiscordBtn() {
    return (
        <button className={"btn bg-discordb hover:bg-discord text-white"}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36" width={"25"} height={"25"}>
                <path
                    fill="#fff"
                    d="M107.7 8.07A105.15 105.15 0 0 0 81.47 0a72.06 72.06 0 0 0-3.36 6.83 97.68 97.68 0 0 0-29.11 0A72.37 72.37 0 0 0 45.64 0a105.89 105.89 0 0 0-26.25 8.09C2.79 32.65-1.71 56.6.54 80.21a105.73 105.73 0 0 0 32.17 16.15 77.7 77.7 0 0 0 6.89-11.11 68.42 68.42 0 0 1-10.85-5.18c.91-.66 1.8-1.34 2.66-2a75.57 75.57 0 0 0 64.32 0c.87.71 1.76 1.39 2.66 2a68.68 68.68 0 0 1-10.87 5.19 77 77 0 0 0 6.89 11.1 105.25 105.25 0 0 0 32.19-16.14c2.64-27.38-4.51-51.11-18.9-72.15ZM42.45 65.69C36.18 65.69 31 60 31 53s5-12.74 11.43-12.74S54 46 53.89 53s-5.05 12.69-11.44 12.69Zm42.24 0C78.41 65.69 73.25 60 73.25 53s5-12.74 11.44-12.74S96.23 46 96.12 53s-5.04 12.69-11.43 12.69Z"
                />
            </svg>
            Discord @giabao06
        </button>
    )
}

function GithubBtn(){
    return(
        <a role={"button"} className={"btn text-white"} href={"https://github.com/giabao06"}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                height={24}
                viewBox="0 0 24 24"
            >
                <path
                    d="M11.965 0C5.348 0 0 5.5 0 12.305c0 5.437 3.426 10.043 8.18 11.672.593.12.812-.266.812-.59 0-.285-.02-1.262-.02-2.282-3.327.735-4.019-1.468-4.019-1.468-.535-1.426-1.328-1.793-1.328-1.793-1.09-.754.078-.754.078-.754 1.211.082 1.844 1.265 1.844 1.265 1.07 1.872 2.793 1.344 3.484 1.016.102-.793.418-1.344.754-1.648-2.652-.285-5.445-1.344-5.445-6.07 0-1.344.473-2.446 1.226-3.301-.12-.305-.535-1.567.118-3.258 0 0 1.011-.328 3.289 1.261a11.233 11.233 0 0 1 5.984 0c2.277-1.59 3.285-1.261 3.285-1.261.656 1.691.238 2.953.121 3.258.774.855 1.227 1.957 1.227 3.3 0 4.727-2.793 5.766-5.465 6.07.434.387.809 1.122.809 2.282 0 1.652-.02 2.976-.02 3.383 0 .324.219.71.813.59 4.753-1.63 8.183-6.235 8.183-11.672C23.93 5.5 18.56 0 11.965 0Zm0 0"
                    style={{
                        stroke: "none",
                        fillRule: "evenodd",
                        fill: "#fff",
                        fillOpacity: 1,
                    }}
                />
            </svg>
            GitHub
        </a>
    )
}

export default function Contact() {
    return (
        <section className={"items-center"}>
            <h2 className={`${workSans.className} text-2xl font-bold pb-2`}>Social media and Contacts</h2>
            <div className={"items-center"}>
                <EmailBtn/>
                <DiscordBtn/>
                <BskyBtn/>
                <GithubBtn/>
            </div>
        </section>
    )
}