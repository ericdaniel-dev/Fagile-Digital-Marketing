const ServiceCard = (service) => {
	return(
		<div id={service.id} className={`w-3/4 lg:w-1/3 flex flex-col h-auto items-center justify-between border-2 px-3 py-6 gap-5 ${service.background}`}>
			<span className={`border-2 border-white p-4 ${service.iconbackground}`}>
				<img src={service.icon} alt={service.title} width="30px" height="30px"/>
			</span>
			<h4 className="text-lg font-semibold">{service.title}</h4>
			<p>
				{service.description}
			</p>
			<span className="border-2 p-3 bg-white"><a href="#">Learn More</a></span>
		</div>
		);
}

export default ServiceCard;