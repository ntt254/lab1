export default function Footer() {
    return (
        <footer className="bg-blue-900 text-white mt-10 pt-10">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                {/* Cột 1 – Giới thiệu */}
                <div>
                    <h3 className="text-xl font-bold mb-3">VTOURIST</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        Công ty du lịch hàng đầu với hơn 10 năm kinh nghiệm.
                        Chúng tôi mang đến những hành trình chất lượng,
                        uy tín và giá tốt nhất cho khách hàng.
                    </p>
                </div>

                {/* Cột 2 – Liên hệ */}
                <div>
                    <h3 className="text-xl font-semibold mb-3">Liên hệ</h3>
                    <p className="text-gray-300 text-sm">📍 Hà Nội – Việt Nam</p>
                    <p className="text-gray-300 text-sm">📞 0123 456 789</p>
                    <p className="text-gray-300 text-sm">✉ contact@vtourist.com</p>
                </div>

                {/* Cột 3 – Dịch vụ */}
                <div>
                    <h3 className="text-xl font-semibold mb-3">Dịch vụ</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Tour Quốc Tế</li>
                        <li>Tour Nội Địa</li>
                        <li>Dịch Vụ Tư Vấn Visa</li>
                        <li>MICE – Teambuilding</li>
                    </ul>
                </div>

                {/* Cột 4 – Mạng xã hội */}
                <div>
                    <h3 className="text-xl font-semibold mb-3">Kết nối với chúng tôi</h3>
                    <div className="flex items-center gap-4 mt-2">
                        <a href="#" className="text-white hover:text-orange-400 text-xl">🌐</a>
                        <a href="#" className="text-white hover:text-orange-400 text-xl">📘</a>
                        <a href="#" className="text-white hover:text-orange-400 text-xl">📸</a>
                        <a href="#" className="text-white hover:text-orange-400 text-xl">▶️</a>
                    </div>
                </div>
            </div>

            <div className="text-center text-gray-300 text-sm py-4 mt-6 border-t border-white/20">
                © 2025 VTourist – All rights reserved.
            </div>
        </footer>
    )
}
