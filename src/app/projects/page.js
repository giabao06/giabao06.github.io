import { Roboto_Slab, Inconsolata } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const robotoSlab = Roboto_Slab({
    subsets: ['latin', 'vietnamese'],
    display: 'swap',
})

const incons = Inconsolata({
    subsets: ['latin'],
    display: 'swap',
})
export default function Page(){
    return (
        <div className="items-center justify-items-center p-8 ml-auto mr-auto pl-auto">
            <div className={"pb-3 text-center"}>
                <h1 className={`${robotoSlab.className} antialiased font-black text-3xl pb-3`}>Current Projects</h1>
                <p>Here&apos;s a list of whatever IT projects I have done and am currently doing.</p>
            </div>
            <div className={"pb-3 pt-2"}>
                <h2 className={`${robotoSlab.className} text-2xl font-bold pb-2 text-center`}>Angelina-chan Discord bot</h2>
                <p>This is a Discord bot that me and <a href={"https://sakura-page-beta.vercel.app"} className={"underline"}>Shiina Kochiya</a> built since 2021, full of <i>weird</i> features.</p>
                <p>Currently I don&apos;t maintain that codebase and am (stalling) work on a <Link href={"https://github.com/giabao06/angelina-reborn"} className={"underline"}>new codebase</Link> with a database and such. If you&apos;re interested, you can find the previous source code <Link href={"https://github.com/ShiinaKochiya/angelina-chan-sc/"} className={"underline"}>here</Link>.</p>
            </div>
            <div className={"pb-3"}>
                <h2 className={`${robotoSlab.className} text-2xl font-bold text-center`}>Project VNS: Dreamchasers</h2>
                <h3 className={`${robotoSlab.className} antialiased pb-1 text-center`}> Arknights VNS Offline 2025</h3>
                <p>Since Q4 2024, I was invited and am currently participating in development for <b>Arknights VNS Offline 2025</b>,
                an offline gathering of an Arknights community in Vietnam. My work includes:</p>
                <ul className={"pl-10 list-disc"}>
                    <li className={"list-item"}>Part of the <Link href={"https://dreamchasers.akvns.org"} className={"underline"}>event website</Link></li>
                    <li className={"list-item"}>Modification of a minigame for the event</li>
                    <li className={"list-item"}>Ticket email template and ticketing Backend using Google Apps Script</li>
                </ul>
                <p>You can find my work in the <Link href={"https://github.com/arknights-vns"} className={"underline"}>
                        arknights-vns GitHub organization</Link>.</p>
                <div className={"d-flex justify-content-center align-items-center pt-3 text-center"}>
                    <Image src={"/assets/projects/drch_fullsize.jpg"} alt={"Dreamchasers Group Photo"} width={1079} height={720} className={"ml-auto mr-auto"}></Image>
                    <p>Team Dreamchasers @ AK VNS Offline 2025, <i>ft. HieuTrollMc and friends</i></p>
                </div>
            </div>
        </div>
    )
}