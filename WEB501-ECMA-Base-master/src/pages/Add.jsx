import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    class: "",
    age: "",
    score: "",
    avatar: "",
    note: "",
    address: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value || "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newStudent = {
      ...form,
      age: Number(form.age) || 0,
      score: Number(form.score) || 0
    };

    try {
      await axios.post("http://localhost:3000/students", newStudent);
      alert("Thêm học sinh thành công!");
      navigate("/");
    } catch (err) {
      console.error("Lỗi thêm:", err);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Thêm Học Sinh</h1>

      <form className="space-y-6" onSubmit={handleSubmit}>
        
        {/* Tên */}
        <div>
          <label className="block mb-1 font-medium">Tên học sinh</label>
          <input
            type="text"
            name="name"
            value={form.name || ""}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        {/* Lớp */}
        <div>
          <label className="block mb-1 font-medium">Lớp</label>
          <input
            type="text"
            name="class"
            value={form.class || ""}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        {/* Tuổi */}
        <div>
          <label className="block mb-1 font-medium">Tuổi</label>
          <input
            type="number"
            name="age"
            value={form.age || ""}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        {/* Điểm */}
        <div>
          <label className="block mb-1 font-medium">Điểm trung bình</label>
          <input
            type="number"
            name="score"
            value={form.score || ""}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        {/* Địa chỉ */}
        <div>
          <label className="block mb-1 font-medium">Địa chỉ</label>
          <input
            type="text"
            name="address"
            value={form.address || ""}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        {/* Avatar */}
        <div>
          <label className="block mb-1 font-medium">Ảnh đại diện</label>
          <input
            type="text"
            name="avatar"
            value={form.avatar || ""}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="https://..."
          />
        </div>

        {/* Ghi chú */}
        <div>
          <label className="block mb-1 font-medium">Ghi chú</label>
          <textarea
            name="note"
            value={form.note || ""}
            onChange={handleChange}
            rows={4}
            className="w-full border border-gray-300 rounded px-3 py-2"
          ></textarea>
        </div>

        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
          Thêm
        </button>
      </form>
    </div>
  );
}

export default AddPage;
