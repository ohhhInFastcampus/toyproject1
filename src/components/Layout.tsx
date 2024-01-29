import React from "react";
import Header from "@/components/Header.tsx";
import Footer from "@/components/Footer.tsx";

interface LayoutPropsType {
    children: React.ReactNode,
    isHeader? : boolean,
    isFooter? : boolean
}
const Layout = ({children, isHeader = true, isFooter =  true} :LayoutPropsType) => {
    return (
        <section className={`layout nw-full`}>
            {
                isHeader ? <Header/> : <></>
            }
            <section className={"contents nmax-w-screen-xl nm-auto"}>
                {children}
            </section>
            {
                isFooter ? <Footer/> : <></>
            }
        </section>
    )
}
export default Layout;