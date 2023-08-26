import Footer from "./Footer";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col justify-between min-h-screen min-w-full">
      <Nav />

      <main>{children}</main>

      <Footer />
    </div>
  );
}
