import { Sidebar } from "./SideBar/Sidebar";

export function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 lg:ml-0 p-8">
        <div className="lg:ml-0 ml-16">
          {children}
        </div>
      </main>
    </div>
  );
}