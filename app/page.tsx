import {
	About,
	Contact,
	Experience,
	Feedbacks,
	Hero,
	Navbar,
	Tech,
	Works,
	StarsCanvas,
} from "./components";
import Footer from "./components/Contact";

export default function Home() {
	return (
		<div className="relative z-0 bg-primary font-sans">
			<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
				<Navbar />
				<Hero />
			</div>
			<About />
			
			<Tech />
			<Works />
			<Feedbacks />
			<div className="relative z-0">
				<Footer/>
				
			</div>
		</div>
	);
}
