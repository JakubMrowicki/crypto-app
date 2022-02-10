const navigation = [
    { name: 'Dashboard', href: '/', current: true },
    { name: 'Watchlist', href: '/watchlist', current: false },
    // { name: 'Login', href: '/login', current: true },
    // { name: 'Sign up', href: '/signup', current: true }
]

function Navbar() {
    return (
        <nav className="w-100">
            <div className="mx-auto h-16 container flex flex-wrap items-center justify-between">
                <div className="text-gray-600 w-full order-3">
                    <ul className="flex font-semibold justify-between">
                        <li className="hover:text-indigo-400"><a href="/">Dashboard</a></li>
                        <li className="hover:text-indigo-400"><a href="/watchlist">Watchlist</a></li>
                        <li className="hover:text-indigo-400">Search</li>
                        <li className="hover:text-indigo-400"><a href="/login">Login</a></li>
                        <li className="hover:text-indigo-400"><a href="/signup">Signup</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
