import Header from "@/components/Header.tsx";
import Footer from "@/components/Footer.tsx";
import {ReactNode} from "react";

interface LayoutPropsType {
    isHeader?: boolean,
    isFooter?: boolean,
    children: ReactNode
}

const Layout = ({isHeader = true, isFooter = true, children}: LayoutPropsType) => {
    return (
        <section className={`layout nw-full`}>
            {
                isHeader ? <Header/> : <></>
            }
            <section className={"contents nmin-w-screen-xl nmin-h-screen nm-auto npx-32"}>
                {children}
            </section>
            {
                isFooter ? <Footer/> : <></>
            }
        </section>
    )
}
export default Layout;