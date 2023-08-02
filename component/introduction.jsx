function Introduction(){
	return(
		<section id="introduction" className="w-full h-[800px] lg:h-[500px]">
			<div id="introductionBox" className="p-2 h-full md:p-4 flex flex-col items-center justify-center md:flex-row">
				<div id="greetings" className="p-2 md:p-6 gap-3 flex flex-col justify-center w-full md:w-1/2 h-1/2 md:h-full">
					<h2 className="text-3xl md:text-5xl mb-4 font-semibold">Capture Attention and Ignite Your Audience</h2>
					<p className="text-base md:text-lg">
						Combine to popular belief Lorem Ipsum is not 
						simply random text. It has Roots in Piece of 
						Classcal Latin Literature.
					</p>
					<div id="quickbutton" className="flex gap-3">
						<button className="p-2 md:p-3 bg-blue-500 hover:bg-blue-700 text-white rounded-md">Learn More</button>
						<button className="p-2 md:p-3 border-2 border-white bg-white hover:bg-gray-200 rounded-md">How It Works</button>
					</div>
				</div>
				<div id="coverimage" className="flex flex-col items-center justify-center w-full md:w-1/2 h-1/2 md:h-full">
					<div className="border-2">
						x
					</div>
				</div>
			</div>
		</section>
		);
}

export default Introduction;