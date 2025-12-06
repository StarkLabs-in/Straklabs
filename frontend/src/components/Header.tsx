import React from 'react';
import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';

const Header: React.FC = () => {
    return (
        <header className="site-header">
            <div className="container header-inner">
                <div className="brand">
                    <a href="/">⚡ Sakthivel Palanisamy</a>
                </div>
                <nav className="nav">
                    <a href="#about">About</a>
                    <a href="#experience">Experience</a>
                    <a href="#skills">Skills</a>
                    <a href="#contact">Contact</a>
                </nav>
                <div className="socials">
                    <a className="icon-btn" href="https://github.com/StarkLabs-in/Straklabs" target="_blank" rel="noreferrer" aria-label="GitHub">
                        <FaGithub />
                    </a>
                    <a className="icon-btn" href="https://in.linkedin.com/in/sakthivel-palanisamy-382a64176" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                        <FaLinkedin />
                    </a>
                    <a className="icon-btn" href="/resume.pdf" target="_blank" rel="noreferrer" aria-label="Resume">
                        <FaFileAlt />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;