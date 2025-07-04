import Image from 'next/image';
import Link from "next/link";

export default function Navbar() {
    return(
        <div className={"navbar bg-base-100 shadow-lg "}>
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
                </ul>
            </div>
            <div className={"navbar-end"}>

            </div>
        </div>
    )
}