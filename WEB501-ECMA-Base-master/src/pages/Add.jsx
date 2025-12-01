import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    destination: "",
    duration: "",
    price: "",
    image: "",
    description: "",
    available: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTour = {
      ...form,
      price: Number(form.price),
      available: Number(form.available)
    };

    try {
      await axios.post("http://localhost:3000/tours", newTour);
      alert("Thêm tour thành công!");
      navigate("/List");
    } catch (err) {
      console.error("Lỗi thêm:", err);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Thêm Tour</h1>

      <form className="space-y-6" onSubmit={handleSubmit}>

        {/* Tên tour */}
        <div>
          <label className="block mb-1 font-medium">Tên tour</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        {/* Điểm đến */}
        <div>
          <label className="block mb-1 font-medium">Điểm đến</label>
          <input
            type="text"
            name="destination"
            value={form.destination}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        {/* Thời gian */}
        <div>
          <label className="block mb-1 font-medium">Thời gian (duration)</label>
          <input
            type="text"
            name="duration"
            value={form.duration}
            onChange={handleChange}
            placeholder="VD: 3 ngày 2 đêm"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        {/* Giá */}
        <div>
          <label className="block mb-1 font-medium">Giá</label>
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        {/* Số chỗ */}
        <div>
          <label className="block mb-1 font-medium">Số chỗ (available)</label>
          <input
            type="number"
            name="available"
            value={form.available}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="VD: 15"
          />
        </div>

        {/* Ảnh */}
        <div>
          <label className="block mb-1 font-medium">Ảnh (URL)</label>
          <input
            type="text"
            name="image"
            value={form.image}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="https://..."
          />
        </div>

        {/* Mô tả */}
        <div>
          <label className="block mb-1 font-medium">Mô tả</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={3}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Nhập mô tả ngắn..."
          />
        </div>

        {/* Nút thêm */}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Thêm
        </button>
      </form>
    </div>
  );
}

export default AddPage;
