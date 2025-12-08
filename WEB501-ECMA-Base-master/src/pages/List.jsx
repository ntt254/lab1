import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ListPage() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  // Lấy list học sinh
  const fetchStudents = async () => {
    try {
      const res = await axios.get("http://localhost:3000/students");
      setStudents(res.data);
    } catch (err) {
      console.error("Lỗi tải danh sách:", err);
    }
  };

  // Xóa học sinh
  const handleDelete = async (id) => {
    if (!confirm("Bạn chắc chắn muốn xoá học sinh này?")) return;

    try {
      await axios.delete(`http://localhost:3000/students/${id}`);
      setStudents(students.filter((s) => s.id !== id));
    } catch (err) {
      console.error("Lỗi xoá:", err);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Danh sách Học sinh</h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg">

          {/* HEADER */}
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border">Ảnh</th>
              <th className="px-4 py-2 border">Tên học sinh</th>
              <th className="px-4 py-2 border">Lớp</th>
              <th className="px-4 py-2 border">Tuổi</th>
              <th className="px-4 py-2 border">Địa chỉ</th>
              <th className="px-4 py-2 border">Điểm trung bình</th>
              <th className="px-4 py-2 border text-center">Chức năng</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {students.map((s) => (
              <tr key={s.id} className="hover:bg-gray-50">

                {/* ID */}
                <td className="px-4 py-2 border">{s.id}</td>

                {/* Avatar */}
                <td className="px-4 py-2 border">
                  <img
                    src={s.avatar}
                    alt={s.name}
                    className="w-20 h-14 object-cover rounded"
                  />
                </td>

                {/* Tên học sinh */}
                <td className="px-4 py-2 border">{s.name}</td>

                {/* Lớp */}
                <td className="px-4 py-2 border">{s.class}</td>

                {/* Tuổi */}
                <td className="px-4 py-2 border">{s.age}</td>

                {/* Địa chỉ */}
                <td className="px-4 py-2 border">{s.address}</td>

                {/* Điểm trung bình */}
                <td className="px-4 py-2 border">
                  {s.score?.toLocaleString("vi-VN") || 0}
                </td>

                {/* Chức năng */}
                <td className="px-4 py-2 border">
                  <div className="flex items-center justify-center gap-3">

                    {/* Nút sửa */}
                    <button
                      onClick={() => navigate(`/Edit/${s.id}`)}
                      className="px-4 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                    >
                      Sửa
                    </button>

                    {/* Nút xóa */}
                    <button
                      onClick={() => handleDelete(s.id)}
                      className="px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                      Xóa
                    </button>

                  </div>
                </td>

              </tr>
            ))}

            {students.length === 0 && (
              <tr>
                <td colSpan={8} className="text-center py-4 border">
                  Không có dữ liệu
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default ListPage;
