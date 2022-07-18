import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.png`} alt="" />
      </Link>
      <header>
        <h2>Ethan Williams</h2>
        <p><a href="mailto:ethanwill253@gmail.com">ethanwill253@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h1>Hi,</h1>
      <p>
        I&apos;m Ethan.
        I am a software engineer that loves technology and all the amazing things I get to create
        with it. I am very passionate about working with new
        code and engineering/reverse engineering
        it to make something new.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      {/* <p className="copyright">&copy; Ethan Williams <Link to="/">ewill.com</Link>.</p> */}
    </section>
  </section>
);

export default SideBar;
