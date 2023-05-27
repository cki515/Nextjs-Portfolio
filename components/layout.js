import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <h1>Layout</h1>
      <div>{children}</div>
      <Footer />
    </>
  );
}
