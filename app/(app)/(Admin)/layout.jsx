import AdminSidebar from "@/components/admin/AdminSidebar";





export default function AdminLayout({ children }) {

  return (
    <main className="min-h-screen flex flex-col md:flex-row relative ">
      <AdminSidebar />
      <div className="grow p-6 overflow-auto">{children}</div>
    </main>
  );
}
