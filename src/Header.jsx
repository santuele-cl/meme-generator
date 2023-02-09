const Header = () => {
    return (
        <header className="bg-purple-500 text-white">
            <nav className="wrapper py-2">
                <ul className="flex flex-col items-center sm:gap-2 sm:flex-row">
                    <li>
                        <a className="brightness-0 invert" href="">
                            <img src="/images/logo-sm.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a className="text-lg font-bold leading-none" href="">Meme Generator</a>
                    </li>
                    <li className="ml-3 sm:ml-auto ">    
                        <a href="">React Course - Project 3</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;