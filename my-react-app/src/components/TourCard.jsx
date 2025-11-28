export default function TourCard({ title, image, price, location, days }) {
    return (
        <div className="bg-white rounded-xl shadow-md border border-orange-300 overflow-hidden hover:shadow-lg transition">
            {/* Ảnh */}
            <div className="relative">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-52 object-cover"
                />

                {/* Giá */}
                <span className="absolute top-0 left-0 bg-orange-600 text-white font-bold px-3 py-1 text-sm rounded-br-xl">
                    {price} VND
                </span>
            </div>

            {/* Nội dung */}
            <div className="p-4">
                <h2 className="font-bold text-lg text-gray-800 leading-tight">
                    {title}
                </h2>

                <p className="text-sm text-gray-600 mt-1">
                    {location}
                </p>

                <p className="text-sm text-gray-600">
                    {days}
                </p>

                <button className="mt-3 w-full text-center bg-orange-500 text-white py-2 font-semibold rounded-md hover:bg-orange-600 transition">
                    Xem chi tiết
                </button>
            </div>
        </div>
    )
}
