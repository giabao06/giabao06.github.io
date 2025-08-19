import { Roboto_Slab } from "next/font/google";

const robotoSlab = Roboto_Slab({
    subsets: ['latin', 'vietnamese'],
    display: 'swap',
})

export default function About(){
    return(
        <div className={"items-center justify-items-center p-8"}>
            <div className={"pb-3 text-center"}>
                <h1 className={`${robotoSlab.className} antialiased font-black text-3xl pb-3`}>About Me</h1>
            </div>
        </div>
    )
}