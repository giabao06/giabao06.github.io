'use client'

import {Work_Sans} from "next/font/google"
import {Component} from 'react'
const workSans = Work_Sans({
    subsets: ['latin', 'vietnamese'],
    display: 'swap',
})
export default function Projects(){
    //todo: think of the current projects design for now
    return (
        <div>
            <h1 className={`${workSans.className} antialiased text-3xl`}>Current Projects</h1>
            <p></p>
            </div>
    )
}