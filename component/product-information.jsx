import ProductIntroductions from '../src/assets/Introducing Product.jpg';

function ProductInformation(){
	return(
		<section id="productinformation" className="w-full h-auto bg-white order-3">
			<div id="productinformationBox" className="p-6 w-full md:w-[90%] flex flex-col items-center justify-center mx-auto h-auto lg:flex-row bg-pink-100 bg-opacity-80 gap-5">
				<div id="profileimage" className="flex items-center justify-center w-full lg:w-1/3 h-[400px]">
					<img src={ProductIntroductions} className="w-1/2 lg:w-full h-full object-fill" alt="Product Information"/>
				</div>
				<div id="introduceproduct" className="flex flex-col gap-3 items-center justify-center w-full md:w-1/2 h-1/2 md:h-full">
					<h2 className="text-lg font-semibold text-pink-500">Product Information</h2>
					<h3 className="text-2xl font-semibold">Introduce Your Product and Highlight Customer Main Pain Point</h3>
					<p>
						We understand the challenges businesses face in 
						today's digital world. You work hard to create 
						exceptional products and services, but your 
						audience remains elusive. The pain point lies in 
						reaching and engaging the right customers who 
						genuinely need what you offer.
					</p>
					<button className="text-lg md:text-xl text-white bg-blue-700 p-1 md:p-3">Gain More Traffics</button>
				</div>
			</div>
		</section>
		);
}

export default ProductInformation;