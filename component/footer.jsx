function Footer(){
	return(
		<footer className="w-full h-auto">
			<div id="footerBox" className="p-3 text-lg">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</div>
			<div class="text-center mt-20">
    <h1 class="text-4xl font-bold inline-block relative group">
      <span class="relative">
        Hover Me
        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
      </span>
    </h1>
  </div>
		</footer>
		)
}

export default Footer;