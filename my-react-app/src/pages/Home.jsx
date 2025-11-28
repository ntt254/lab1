import Footer from '../components/Footer'
import Header from '../components/Header'
import Heading from '../components/Heading'
import TourCard from '../components/TourCard'

function Home() {
    const tours = [
        {
            id: 1,
            title: 'Tour Du Lịch Trung Quốc 5N4Đ',
            image:
                'https://images.unsplash.com/photo-1508804052814-cd3ba865a116',
        },
        {
            id: 2,
            title: 'Tour Du Lịch Hàn Quốc 6N5Đ',
            image:
                'https://images.unsplash.com/photo-1524492412937-b28074a5d7da',
        },
        {
            id: 3,
            title: 'Tour Du Lịch Nhật Bản 5N4Đ',
            image:
                'https://images.unsplash.com/photo-1505066900300-4cd2d9152ffb',
        },
        {
            id: 4,
            title: 'Tour Du Lịch Nhật Bản 5N4Đ',
            image:
                'https://images.unsplash.com/photo-1505066900300-4cd2d9152ffb',
        },
    ]

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            {/* Banner Du Lịch */}
            <div className="relative w-full h-[360px] mt-4 rounded-xl overflow-hidden shadow-md">
                <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                    alt="Travel Banner"
                    className="w-full h-full object-cover"
                />

                {/* Lớp mờ */}
                <div className="absolute inset-0 bg-black/30"></div>

                {/* Nội dung banner */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
                    <h1 className="text-4xl font-extrabold drop-shadow-lg">
                        Khám Phá Thế Giới Cùng Chúng Tôi
                    </h1>
                    <p className="text-lg mt-3 max-w-2xl drop-shadow-md">
                        Những hành trình đáng nhớ – Trải nghiệm tuyệt vời – Giá tốt nhất mỗi ngày!
                    </p>

                    <button className="mt-6 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-bold text-white text-lg shadow-lg">
                        Xem Tour Hot
                    </button>
                </div>
            </div>


            <main className="max-w-7xl mx-auto px-4 py-8">
                <Heading title="Tour Nội Địa" />

                <p className="text-lg font-medium my-4 text-gray-700">
                    Các chuyến đi đồng hành cùng chúng tôi là khoảnh khắc đặc biệt, luôn
                    mang lại những trải nghiệm độc đáo và khó quên cho du khách.
                </p>

                {/* Tour Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tours.map(tour => (
                        <TourCard
                            key={tour.id}
                            title={tour.title}
                            image={tour.image}
                        />
                    ))}
                </div>

                {/* Tour Quốc Tế */}
                <div className="mt-16">
                    <Heading title="Tour Quốc Tế" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                        {tours.map(tour => (
                            <TourCard
                                key={tour.id}
                                title={tour.title}
                                image={tour.image}
                            />
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default Home
