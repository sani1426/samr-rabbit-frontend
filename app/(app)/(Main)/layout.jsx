import { MainContextProvider } from "@/context/MainContext";
import Header from "../../components/shared/Header";
import Footer from "@/components/shared/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <MainContextProvider>
        <Header />
        {children}
        <Footer />
      </MainContextProvider>
    </>
  );
}
