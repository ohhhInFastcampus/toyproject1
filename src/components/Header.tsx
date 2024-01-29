import img from "@/assets/logo.png";

interface GnbListType {
    title: string,
    link: string
}

const Logo = () => {
    return (
        <a href={"#"} className={"nblock nw-1/12"}>
            <img src={img} alt={"logo"}/>
        </a>
    )
}
const Gnb = () => {
    const gnbList: GnbListType[] = [
        {
            title: "부재신청",
            link: "#"
        },
        {
            title: "갤러리",
            link: "#"
        },
        {
            title: "부재신청내역",
            link: "#"
        }
    ];
    return (
        <ul className="nflex ngap-1">
            {
                gnbList.map((item) => {
                    return (
                        <li className={"nflex nalign-center njustify-center nfont-bold ntext-base"} key={item.title}>
                            <a className={`nflex items-center njustify-center np-3 nrounded-xl ntransition hover:nbg-black hover:ntext-white`} href={item.link}>
                                {item.title}
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    )
}

const User = () => {
    return (
        <div>
            유저 이미지 (예정)
        </div>
    )
}

const Header = () => {
    return (
        <header
            className={"nw-full nh-20 nborder-b-1 nborder-blue-300 nflex nitems-center njustify-between"}>
            <Logo/>
            <Gnb/>
            <User/>
        </header>
    )
}
export default Header;

