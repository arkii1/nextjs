import NavHeader from "../ui/portfolio/navheader"

export default function Layout({children}: {children: React.ReactNode}) {
    return <>
        <NavHeader />
        <main>{children}</main>
    </>
}