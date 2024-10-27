import Image from "next/image";

const features = [
  {
    src: "https://s3-alpha-sig.figma.com/img/1c6b/bc0b/e719e9d93c02a87ba51308ebb0297cdf?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z5P0bFhcbZXWHtNrsWbuVJB4fExmuCxG4sHrY3eVchpMNhV0nVr~WT3QJGrBe3TQq0YC860Sd6OgYi4HPKI7fw~ZWv1hUdQhkJ8oDPkt6JIq65L-IM7Di5v-exxRb46icypKAcBNDpHvlCNte2NryWC62q8xnvqyMA-ZIlXvKRIwd3T7BOVlZFpJfkLzFd~wzerSDw3zKqFmjfEZiSxFfeh1pAUnFIBwgL7px2PJ2R8dcQDEI3ry~7HcT1vssLFdksMzaI4XJOkLxxbG9cxmwPyS-WKGsLkALKLyZg4F2NW4pyHyButiuM6K0KoNYkgsoL9HTRqs0XXyQnNKw9avaw__",
  },
  {
    src: "/image.png",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/a511/7cdc/a561b38768fbe6667854fc00641b25fb?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RU9q9YS-exelcNH-D~ClHXTg1lKcVsqzzlRk~oZwMWPly1IS6zRVbYr7Kw15Vph6YnC6z1k9EbB05ThBXEjCeqf40MVhrzOO0xQsuwHGQRieqcVCs9PDFguv02chAEAnv~27l6ZCUQTEE5cub8O9oq6E8WTlqzCSG25qmF6lCtWS27Q4qTRtOkike9miRkJtjae4HR1iMJShIEomwYB2R5GlV5Q257BYnZIkF8TRAf9sy3TdwJOETY5yXphJwy6gr-aYe3rKLdSwiPdo4bx~of0pM5rrNYmGHDbrhtjWlewBAM~SvdYT58nBXuVr61qWzqflH~sTi3r3Nxh0525PyQ__",
  },
]

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
              <div style={{ display: "flex", gap: "15px" }}>
                <p className="feature-button">2020</p>
                <span style={{ fontWeight: "550", color: "gray" }}>Dashboard</span>
              </div>
              <div style={{ fontWeight: "300" }}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
