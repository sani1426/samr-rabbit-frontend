import Header from "../../components/shared/Header";


export default function MainLayout({ children }) {
  return (
<>
<Header />
{children}
</>
  );
}
