import { useEffect, useState } from "react";
import axios from "axios";

function ListPage() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get("http://localhost:3000/tours");
        setTours(response.data);
      } catch (error) {
        console.error("Lỗi tải dữ liệu:", error);
      }
    };

    fetchTours();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Danh sách Tours</h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-300 text-left">#</th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Tên tour
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Điểm đến
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Giá
              </th>
            </tr>
          </thead>

          <tbody>
            {tours.map((tour) => (
              <tr key={tour.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border border-gray-300">{tour.id}</td>
                <td className="px-4 py-2 border border-gray-300">{tour.name}</td>
                <td className="px-4 py-2 border border-gray-300">
                  {tour.destination}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {tour.price.toLocaleString("vi-VN")} đ
                </td>
              </tr>
            ))}

            {tours.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="text-center text-gray-500 py-4 border"
                >
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
