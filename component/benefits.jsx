import BenefitCard from './atoms/benefit-card.jsx';

function Benefits(){
	const dataBenefits = [
		{
			id: 1,
			title: 'Search Engine Optimization',
			benefits: `Quicker Brand Authority and Credibility: 
						With Fagile's SEO strategies, your brand 
						gains authority and credibility in record time. 
						As your website climbs the search engine ranks, 
						customers will perceive your business as a trusted 
						leader in your industry.`,
		},
		{
			id: 2,
			title: 'Content Writer',
			benefits: ` Fagile's high-quality content generates quicker 
			SEO results. By attracting valuable backlinks and boosting 
			your website's search engine ranking, you'll enjoy a faster 
			rise to the top of search results.`,
		},
		{
			id: 3,
			title: 'Social Media Marketing',
			benefits: `Fagile's engaging social media content accelerates 
			brand awareness. Your business gains visibility quickly, and 
			your brand becomes known to a broader audience in no time.`,
		},
	];
	return(
		<section id="benefits" className="w-full h-auto flex items-center justify-center bg-white p-3 order-5">
			<div id="benefitsBox" className="w-full md:w-4/5 flex flex-col items-center justify-center gap-3">
				<h2 id="company" className="text-lg md:text-xl font-semibold text-pink-500">Project Benefits</h2>
				<h3 className="w-1/3 text-center text-2xl md:text-3xl font-semibold">Complete the Project Faster With Us</h3>
				<p className="text-justify w-3/4">
					Accelerated Project Delivery: At Fagile Digital Marketing, 
					we pride ourselves on efficiency and precision. Our 
					expert team is dedicated to delivering top-notch 
					results in record time, ensuring your projects are 
					completed faster than you ever thought possible.
				</p>
				<div id="benefitsList" className="flex flex-col lg:flex-row gap-3 items-center">
					{dataBenefits.map((benefit, index) => (
						<BenefitCard
							key={benefit.id}
							title={benefit.title}
							benefits={benefit.benefits}
						/>
						))}
				</div>
			</div>
		</section>
		);
}

export default Benefits;