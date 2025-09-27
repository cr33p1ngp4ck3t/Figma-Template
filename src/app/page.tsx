/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Footer, Header } from "../../components/nav";
import Post from "../../components/recentpost";
import "@/app/style.css";
import Feature from "../../components/featurepost";

export default function Home() {
	return (
		<div>
			<Header />
			<div className="rectangle">
				<div className="hero-section">
					<div className="hero-text">
						<span className="hero-heading heading-bold">
							Hi, I am John,
							<p>Creative Technologist</p>
						</span>
						<p className="p-text">
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
							sint. Velit officia consequat duis enim velit mollit. Exercitation
							veniam consequat sunt nostrud amet.
						</p>
						<button className="hero-button">Download Resume</button>
					</div>
					<div className="hero-image">
						<Image
							alt="Image"
							src="https://placehold.co/292x299"
							width={292}
							height={299}
							style={{ borderRadius: "300px" }}
						/>
					</div>
				</div>
			</div>
			<div className="recent-post">
				<div>
					<h3 className="heading-bold">Recent Post</h3>
					<br />
					<Post />
				</div>
				<div>
					<h3 style={{ color: "#F98585", textAlign: "right" }}>View all</h3>
					<br />
					<Post />
				</div>
			</div>
			<div className="feature-container">
				<Feature />
			</div>
			<Footer />
		</div>
	);
}
