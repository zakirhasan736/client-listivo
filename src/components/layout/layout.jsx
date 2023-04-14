import { React } from "@packages/packages";
import Footer from "../footer";
import Navbar from "../navbar";

export default function Layout({ children,baseTheme }) {
  return (
    <>
    <div className={`theme-page-main  ${baseTheme}`}>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
      </div>
    </>
  )
}