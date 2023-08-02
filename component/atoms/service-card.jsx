const ServiceCard = (service) => {
	return(
		<div id={service.id} className={`flex flex-col h-auto items-center justify-between border-2 px-3 py-6 gap-5 ${service.background}`}>
			<span className="border-2 p-4">[+]</span>
			<h4 className="text-lg font-semibold">{service.title}</h4>
			<p>
				{service.description}
			</p>
			<span className="border-2 p-3 bg-white"><a href="#">Learn More {service.id}</a></span>
		</div>
		);
}

export default ServiceCard;