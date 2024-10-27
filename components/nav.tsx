/* eslint-disable @next/next/no-img-element */
import "@/app/style.css"

export function Header() {
    return(
        <header>
            <div className="nav-text">
                <p className='heading-bold'>Work</p>
                <p className='heading-bold'>Blog</p>
                <p className='heading-bold'>Contact</p>
            </div>
        </header>
    )
}

export function Footer() {
    return( 
        <footer>
            <div className="footer">
                <div className="footer-icon">
                    <img src="https://img.icons8.com/metro/26/facebook.png" width="25" height="25" alt="facebook"/>
                    <img src="https://img.icons8.com/fluency-systems-regular/50/instagram-new--v1.png" width="27" height="27" alt="Insta"/>
                    <img src="https://img.icons8.com/ios-filled/50/twitter.png" width="27" height="27" alt="Twitter"/>
                    <img src="https://img.icons8.com/ios-glyphs/30/linkedin.png" width="27" height="27" alt="Linkedin"/>
                </div>
                <h4>Copyright ©2020 All rights reserved</h4>
            </div>
        </footer>
    )
}