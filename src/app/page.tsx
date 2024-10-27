/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Header } from "../../components/nav";
import Post from "../../components/recentpost";
import "@/app/style.css"
import Feature from "../../components/featurepost";

export default function Home() {
  return (
    <div>
       <Header />
      <div className="rectangle">
          <div className="hero-section">
            <div className="hero-text">
              <span className="hero-heading heading-bold">Hi, I am John,
                <p>Creative Technologist</p></span>
              <p className="p-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              <button className="hero-button">Download Resume</button>
            </div>
            <div className="hero-image">
              <Image
                alt="Image"
                src={"https://s3-alpha-sig.figma.com/img/33bb/7628/62cc5ebf57780ce754ae16fef59108ca?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZtCEwR5wISqH9VqqmfRsa63PPgtjBkIYu1xyvNn9NZPuMWcDJDtxxYIMk7Em8x8U3zg8xjUt8tIMuxj5auA9C0whC-xX-UGGMoBXYRNBoAKHvGoDLEDOyFjWOSB~JOGv5JwPaiUUENk8-pE25Un3IgEI5mEq6EpEL3FfyhYfLtVYnP8uaguS~n7zHfeuZHzZNQKWHKcmwB9V6uCt7CjoA3nbWvpmZyjGzZkUOGmJmj6QpHCeEnMB6oJ7OhJcv2w4YZo-GBkASz-iHoiMsanjfOhMuAvoA5ZK-8FPrNaq0DAriZbFh33af1B3~6hWYMpcZZ9dLCzzcYL8I7duH32-XA__"}
                width={292}
                height={299}
                style={{borderRadius:"300px"}}
                />
            </div>
          </div>
        </div>
        <div className="recent-post">
          <div>
            <h3 className='heading-bold'>Recent Post</h3>
            <br />
            <Post/>
          </div>
          <div>
            <h3 style={{color:"#F98585", textAlign:"right"}}>View all</h3>
            <br />
            <Post/>
          </div>
      </div>
      <div className="feature-container"> 
        <Feature />
      </div>
      <div className="footer">
        <div className="footer-icon">
            <img src="https://img.icons8.com/metro/26/facebook.png" width="25" height="25" alt="facebook"/>
            <img src="https://img.icons8.com/fluency-systems-regular/50/instagram-new--v1.png" width="27" height="27" alt="Insta"/>
            <img src="https://img.icons8.com/ios-filled/50/twitter.png" width="27" height="27" alt="Twitter"/>
            <img src="https://img.icons8.com/ios-glyphs/30/linkedin.png" width="27" height="27" alt="Linkedin"/>
          </div>
        <h4>Copyright ©2020 All rights reserved</h4>
      </div>
  </div>
  );
}
