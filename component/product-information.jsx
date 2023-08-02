function ProductInformation(){
	return(
		<section id="productinformation" className="w-full h-auto bg-white">
			<div id="productinformationBox" className="p-3 w-full md:w-[90%] flex flex-col items-center justify-between mx-auto h-[800px] md:h-[300px] md:flex-row bg-pink-100 bg-opacity-80">
				<div id="profileimage" className="flex items-center justify-center w-full md:w-1/2 h-1/2 md:h-full">
				x
				</div>
				<div id="introduceproduct" className="flex flex-col gap-3 items-center justify-center w-full md:w-1/2 h-1/2 md:h-full">
					<h2 className="text-lg font-semibold text-pink-500">Product Information</h2>
					<h3 className="text-2xl font-semibold">Introduce Your Product and Highlight Customer Main Pain Point</h3>
					<p>
						Combine to popular belief Lorem Ipsum is not 
						simply random text. It has Roots in Piece of 
						Classcal Latin Literature.
					</p>
					<button className="text-xl text-white bg-blue-700 p-3">Gain More Traffics</button>
				</div>
			</div>
		</section>
		);
}

export default ProductInformation;