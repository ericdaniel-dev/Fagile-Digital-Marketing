import ServiceCard from './atoms/service-card.jsx';
import SEOicon from '@/src/assets/SEO Icon.svg';
import ContentIcon from '@/src/assets/Content Writer Icon.svg';
import SocialIcon from '@/src/assets/Social Marketing.svg';

function OurServices(){
	const dataServices = [
  {
    id: 1,
    title: 'Search Engine Optimization (SEO)',
    description: `Boost your Website's visibility and gain more traffics with our expert keyword researcher.`,
    background: 'bg-cyan-100',
    icon: SEOicon,
    iconbackground: 'bg-cyan-300'
  },
  {
    id: 2,
    title: 'Content Writer',
    description: `Worried about customer lost? Our talented team of skilled writers is ready to craft engaging and informative content to your unique needs and target audience.`,
    background: 'bg-pink-200',
    icon: ContentIcon,
    iconbackground: 'bg-pink-400',
  },
  {
    id: 3,
    title: 'Social Media Marketing',
    description: `Harness the power of social media with our expert team, we'll create posts that sparks interest and drive meaningful interactions`,
    background: 'bg-blue-200',
    icon: SocialIcon,
    iconbackground: 'bg-blue-400',
  },
];

	return(
		<section id="ourservices" className="w-full h-auto flex items-center justify-center bg-white order-2">
			<div id="ourservicesBox" className="w-4/5 flex flex-col items-center justify-center gap-3 p-3">
				<h2 className="text-xl font-semibold text-pink-500">Our Services</h2>
				<h3 className="text-2xl md:text-4xl w-1/2 md:w-1/3 text-center font-semibold">We Are Pro Digital Marketer</h3>
				<div id="servicelist" className="flex flex-col lg:flex-row items-center gap-x-5 gap-y-2">
					{dataServices.map((service, index) => (
						<ServiceCard 
							key={index}
							id={service.id}
							title={service.title}
							description={service.description}
							background={service.background}
							icon={service.icon}
							iconbackground={service.iconbackground}
						/>
						))}
				</div>
			</div>
		</section>
		);
}

export default OurServices;