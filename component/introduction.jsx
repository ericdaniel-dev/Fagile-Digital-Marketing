import CoverImage from '../src/assets/Cover Image.png';

function Introduction(){
	return(
		<section id="introduction" className="w-full h-auto order-1">
			<div id="introductionBox" className="p-0 h-auto md:p-4 flex flex-col items-ends justify-between lg:flex-row">
				<div id="greetings" className="p-2 md:p-6 gap-3 flex flex-col justify-center w-full lg:w-1/2 h-[500px]">
					<h2 className="text-3xl md:text-5xl mb-4 font-semibold">Capture Attention and Ignite Your Audience</h2>
					<p className="text-base md:text-lg">
						In a world filled with digital noise, standing 
						out from the crowd is crucial for your business's 
						success. With Fagile Digital Marketing, your 
						ultimate weapon to capture attention and ignite 
						your audience's passion like never before.
					</p>
					<div id="quickbutton" className="flex gap-3">
						<button className="p-2 md:p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md">Learn More</button>
						<button className="p-2 md:p-3 border-2 border-white bg-white hover:bg-gray-100 rounded-md">How It Works</button>
					</div>
				</div>
				<div id="coverimage" className="relative hidden lg:flex flex-col items-center justify-center w-full lg:w-1/2 h-[500px]">
					<div id="backgroundCover" className="w-3/4 rounded-tl-[7000px] rounded-br-[3000px] h-full bg-purple-400"></div>
					<img src={CoverImage} className="absolute mb-10 w-full h-full object-fill" alt="Fagile Digital Marketing"/>
				</div>
			</div>
		</section>
		);
}

export default Introduction;