import { Toaster } from "react-hot-toast";
import { Link, Route, Routes } from "react-router-dom";
import AddPage from "./pages/Add";
import EditPage from "./pages/Edit";
import ListPage from "./pages/List";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";

function App() {
  return (
    <>
      <Toaster />

      <header className="bg-green-600 text-white px-4 h-16 flex items-center justify-between">
        <Link to="/" className="font-semibold text-lg">
          Student Manager
        </Link>

        <nav className="flex items-center gap-4">
          <Link to="/" className="hover:underline">Danh sách HS</Link>
          <Link to="/add" className="hover:underline">Thêm HS</Link>
          <Link to="/login" className="hover:underline">Đăng nhập</Link>
          <Link to="/register" className="hover:underline">Đăng ký</Link>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/edit/:id" element={<EditPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
