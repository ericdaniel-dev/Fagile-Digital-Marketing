import SocialMedia from './social-media.jsx';

function Footer(){
	return(
		<footer className="mt-10 border-2 bg-black text-white w-full h-auto p-5 flex items-center justify-center">
			<div id="footerBox" className="flex flex-col items-center gap-5">
				<h5 className="text-xl font-semibold">Fagile Digital Marketing - Empowering Digital Growth!</h5>
				<p className="w-1/2">
					At Fagile, we are passionate about propelling businesses 
					into the digital age and driving unprecedented growth 
					through strategic and innovative digital marketing 
					solutions. As a leading digital marketing agency, we 
					understand that in today's fast-paced world, staying 
					ahead of the competition requires embracing the power of 
					the online realm.
				</p>
				<SocialMedia/>
				<hr/>
				<span>Copyrights - Fagile Digital Marketing</span>
			</div>
		</footer>
		)
}

export default Footer;