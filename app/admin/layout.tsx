import AdminNav from "../components/admin/AdminNav";

export const metadata = {
  title: "Woolies~Shop Admin",
  description: "Woolies~Shop Admin Dashboard",
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminNav />
      {children}
    </div>
  );
};

export default AdminLayout;
