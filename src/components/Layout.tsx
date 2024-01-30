import Header from "@/components/Header.tsx";
import Footer from "@/components/Footer.tsx";
import {Outlet} from "react-router-dom";

interface LayoutPropsType {
    isHeader? : boolean,
    isFooter? : boolean
}
const Layout = ({isHeader = true, isFooter =  true} :LayoutPropsType) => {
    return (
        <section className={`layout nw-full`}>
            {
                isHeader ? <Header/> : <></>
            }
            <section className={"contents nmax-w-screen-xl nm-auto"}>
                <Outlet/>
            </section>
            {
                isFooter ? <Footer/> : <></>
            }
        </section>
    )
}
export default Layout;