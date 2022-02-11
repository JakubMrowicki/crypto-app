const navigation = [
    { name: 'Dashboard', href: '/', current: true },
    { name: 'Watchlist', href: '/watchlist', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Navbar() {
    return (
        <nav className="">
            <div className="mx-auto pl-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <h1 className="text-gray-800 text-2xl font-bold pr-8">Coinwatch</h1>
                        </div>
                        <div className="flex space-x-4">
                            {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                item.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-gray-800',
                                'px-3 py-2 rounded-md text-sm font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </a>
                            ))}
                        </div>
                    </div>
                    
                    <div className="absolute right-0 pr-8 flex items-center">
                        <div class="relative text-center mr-8 mx-auto text-gray-400 md:block hidden">
                            <input
                                class="border-2 border-gray-400 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
                                type="search" name="search" placeholder="Search..." />
                            <button type="submit" class="absolute right-0 top-0 mt-3 mr-2">
                                <svg class="text-gray-800 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                    version="1.1" id="Capa_1" x="0px" y="0px"
                                    viewBox="0 0 56.966 56.966"
                                    width="512px" height="512px">
                                <path
                                    d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
                                </svg>
                            </button>
                        </div>
                        <div className="flex items-center space-x-8">
                            <a className="text-gray-400 hover:text-gray-800 text-sm font-medium" href="/login">Log In</a>
                            <a className="bg-gray-800 text-white px-3 py-2 rounded-md text-sm font-medium" href="/signup">Sign Up</a>
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navbar;
