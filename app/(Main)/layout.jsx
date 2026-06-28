import { MainContextProvider } from "@/context/MainContext";
import Header from "../../components/shared/Header";

export default function MainLayout({ children }) {
  return (
    <>
      <MainContextProvider>
        <Header />
        {children}
      </MainContextProvider>
    </>
  );
}
