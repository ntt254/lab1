export default function Header() {
    return (
        <header className="w-full bg-white shadow-sm py-3">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4">

                {/* Logo + Text */}
                <div className="flex items-center gap-3">
                    <img
                        src="/logo.png"
                        alt="Logo"
                        className="h-10 w-auto"
                    />
                    <div className="leading-tight">
                        <h1 className="text-xl font-extrabold text-blue-700 tracking-wide">
                            TOURIST
                        </h1>
                        <p className="text-xs font-semibold text-orange-500 -mt-1">
                            MORE THAN WORDS!
                        </p>
                    </div>
                </div>

                {/* Menu */}
                <nav className="flex items-center gap-10 text-sm font-bold text-blue-900 tracking-wide">
                    <a href="#" className="hover:text-orange-500 transition">TOUR QUỐC TẾ</a>
                    <a href="#" className="hover:text-orange-500 transition">TOUR NỘI ĐỊA</a>
                    <a href="#" className="hover:text-orange-500 transition">DỊCH VỤ TƯ VẤN VISA</a>
                    <a href="#" className="hover:text-orange-500 transition">GIỚI THIỆU</a>
                    <a href="#" className="hover:text-orange-500 transition">TIN TỨC</a>
                </nav>
            </div>
        </header>
    )
}
