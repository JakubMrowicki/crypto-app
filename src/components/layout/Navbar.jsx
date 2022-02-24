import NavbarSearch from "../cryptos/NavbarSearch"

const navigation = [
    { name: 'Dashboard', href: '/', current: true },
    { name: 'Watchlist', href: '/watchlist', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Navbar() {
    return (
        <nav className="bg-slate-700 mx-auto">
            <div className="container mx-auto px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <a href="/" className="text-white text-2xl font-normal pr-8">Coinwatch</a>
                        </div>
                        <div className="flex space-x-4">
                            {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                item.current ? 'bg-slate-800' : 'hover:text-gray-200',
                                'px-3 py-2 rounded-md text-sm font-light text-white'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </a>
                            ))}
                        </div>
                    </div>
                    <div className="absolute right-0 flex items-center">
                        <NavbarSearch />
                        <div className="hidden flex items-center font-light space-x-2 sm:block">
                            <a className="text-white px-3 py-2 rounded-md text-sm" href="/login">Log In</a>
                            <a className="bg-slate-800 text-white px-3 py-2 rounded-md text-sm" href="/signup">Sign Up</a>
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navbar;
