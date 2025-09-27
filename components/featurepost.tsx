import Image from "next/image";

const features = [
	{
		src: "/image.png",
	},
	{
		src: "/image.png",
	},
	{
		src: "/image.png",
	},
];

export default function FeatureList() {
	return (
		<div className="featured">
			<h4>Featured Works</h4>
			<br />
			{features.map((feature, index) => (
				<div className="feature-post" key={index}>
					<Image
						alt="Image"
						src={feature.src}
						width={216}
						height={150}
						style={{ borderRadius: "5px" }}
					/>
					<div>
						<div className="feature-info">
							<h2>Designing Dashboards</h2>
							<div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
								<button className="feature-button-1">2020</button>
								<span style={{ fontWeight: "550", color: "gray" }}>Dashboard</span>
							</div>
							<div style={{ fontWeight: "300" }}>
								Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
								sint. Velit officia consequat duis enim velit mollit. Exercitation
								veniam consequat sunt nostrud amet.
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
