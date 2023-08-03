import { useState } from 'react';
import FagileLogo from '../src/assets/Fa_gile.png';

const Header = () => {
	const [navOpen, setNavOpen] = useState(false);
	function toogle(){
		const showMenu = document.getElementById('menu');
		if(navOpen){
			showMenu.classList.remove('hidden');
			showMenu.classList.add('flex');
			setNavOpen(!navOpen);
		}
		else{
			showMenu.classList.add('hidden');
			showMenu.classList.remove('flex');
			setNavOpen(!navOpen);
		}
	}
	return(
		<header className="w-full h-auto">
			<div id="headerBox" className="flex items-center justify-between md:justify-evenly p-3 font-semibold">
				<span className="flex">
					<img src={FagileLogo} alt="fagile icon logo" width="30px" height="30px"/>
					<h1 className="text-xl">gile</h1>
				</span>
				<nav id="navbar" className="flex">
					<ul id="menu" className="hidden md:flex flex-col md:flex-row gap-2 text-lg">
						<li><a href="/" className="p-1 hover:border-b-2 hover:border-cyan-400">Home</a></li>
						<li><a href="#ourservices" className="p-1 hover:border-b-2 hover:border-cyan-400">Services</a></li>
						<li><a href="#productinformation" className="p-1 hover:border-b-2 hover:border-cyan-400">About Us</a></li>
						<li><a href="#" className="p-1 hover:border-b-2 hover:border-cyan-400">Company</a></li>
						<li><a href="#" className="p-1 hover:border-b-2 hover:border-cyan-400">Contact Us</a></li>
					</ul>
					<button id="toogle" onClick={toogle} className="inline-block md:hidden border-2 p-2">=</button>
				</nav>
				<button className="text-lg hidden md:inline-block p-3 bg-blue-500 hover:bg-blue-700 text-white rounded-md">Get Started</button>
			</div>
		</header>
		);
};

export default Header;