import React from 'react';
import { FaReact, FaGithub, FaLinkedin } from 'react-icons/fa';
import './AboutShopComponent.css';

const AboutShopComponent = () => {
    return (
        <div className="about-page">

            <section className="about-shopit">
                <h2>About ShopIt</h2>
                <p>
                    ShopIt is an eCommerce built using React. The platform emphasizes speed, simplicity, and user-friendliness. Features like product filtering, search functionality, and a streamlined cart system make it easy for customers to navigate the site, find what they need, and complete their purchases effortlessly.
                </p>
                <p>
                    With a clean, responsive design, Shopit ensures that users on any device—be it desktop, tablet, or mobile—get the best shopping experience possible.
                </p>
            </section>

            <section className="developer-intro">
                <h2>About the Developer</h2>
                <p>
                    Hello there! I'm Matlin Liginsha M, the passionate frontend developer behind this website. With a strong focus on crafting smooth, responsive, and interactive user experiences, I set out to create this eCommerce platform with React to make online shopping easier and more enjoyable for everyone.
                </p>
            </section>

            <section className="technologies-used">
                <h2>Technology Used</h2>
                <p>
                    The core technology and framework used in the development of this website is:
                </p>


                <p className='react'>
                    <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
                        <FaReact className="icon-react" />
                    </a>
                    React - A powerful JavaScript library for building user interfaces.</p>


            </section>

            <section className="connect">
                <h2>Let's Connect</h2>
                <p>
                    I'm always open to feedback and suggestions! Feel free to connect with me on LinkedIn or explore my other projects on GitHub.
                </p>
                <div className="social-links">
                    <a href="https://github.com/MatlinLiginsha" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="icon-github" />
                    </a>
                    <a href="https://in.linkedin.com/in/matlin-liginsha-933827290" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="icon-linkedin" />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default AboutShopComponent;
