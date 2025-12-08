import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditPage() {
  const { id } = useParams();
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

  const fetchStudent = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/students/${id}`);
      setForm({
        name: res.data.name || "",
        class: res.data.class || "",
        age: res.data.age || "",
        score: res.data.score || "",
        avatar: res.data.avatar || "",
        note: res.data.note || "",
        address: res.data.address || ""
      });
    } catch (err) {
      console.error("Lỗi tải học sinh:", err);
    }
  };

  useEffect(() => {
    fetchStudent();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value || "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updated = {
      ...form,
      age: Number(form.age) || 0,
      score: Number(form.score) || 0
    };

    try {
      await axios.put(`http://localhost:3000/students/${id}`, updated);
      alert("Cập nhật thành công!");
      navigate("/");
    } catch (err) {
      console.error("Lỗi cập nhật:", err);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Cập nhật Học Sinh #{id}</h1>

      <form className="space-y-6" onSubmit={handleSubmit}>

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

        <div>
          <label className="block mb-1 font-medium">Ảnh đại diện (URL)</label>
          <input
            type="text"
            name="avatar"
            value={form.avatar || ""}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

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

        <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">
          Cập nhật
        </button>
      </form>
    </div>
  );
}

export default EditPage;
