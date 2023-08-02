const BenefitCard = (benefit) => {
	return(
			<div id="benefits" className="w-full flex flex-col items-center justify-between h-auto gap-2">
				<h4 className="text-lg font-semibold text-pink-500">{benefit.title}</h4>
				<p>
					{benefit.benefits}
				</p>
				<a href="#">
					<span className="py-2 px-3 border-2 border-black text-lg cursor-pointer">Learn More</span>
				</a>
			</div>
		);
}

export default BenefitCard;
