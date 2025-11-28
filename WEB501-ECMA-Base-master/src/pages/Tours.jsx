import { useState, useEffect } from "react";
import axios from "axios";
import TourCard from "../components/TourCard";

function Tours() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:3001/tours");
        setTours(response.data);
        setError(null);
      } catch (err) {
        setError("Không thể tải danh sách tours");
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  if (loading) return <div className="text-center p-6">Đang tải...</div>;

  if (error)
    return (
      <div className="text-center p-6">
        <p className="text-red-500">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Thử lại
        </button>
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">✈️ Danh sách Tours</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </div>
  );
}

export default Tours;
