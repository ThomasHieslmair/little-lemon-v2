import React from "react"
import small_logo from "../images/logo_white.png"

const Footer = () => {
    return(
        <footer className="">
            <section>
            <div className="company-info">
                <img src={small_logo} alt=""/>
                <p>Family owned Mediterraneran restaurant, traditional recipes served with a modern twist and fresh ingredients.</p>
            </div>
            <div>
                <h3>More</h3>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/">Reservations</a></li>
                <li><a href="/">Order Online</a></li>
                <li><a href="/">Login</a></li>
            </ul>
            </div>
            <div>
                <h3>Contact</h3>
            <ul>
            <li>Address: <br/>Chicago, Illinois, USA</li>
                <li>Phone: <br/> +00 123 456 789</li>
                <li>Email: <br/> hello@littlelemon.com</li>
            </ul>
            </div>
            <div>
                <h3>Find us on</h3>
            <ul>
                <li><a href="/">Facebook</a></li>
                <li><a href="/">Instagram</a></li>
                <li><a href="/">Twitter</a></li>
            </ul>
            </div>
            </section>
        </footer>
    )
}

export default Footer;