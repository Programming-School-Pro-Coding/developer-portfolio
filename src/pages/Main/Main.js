import React from 'react'
import { Helmet } from 'react-helmet';
import { Navbar, Footer, Landing, About, Skills, /*Testimonials*/ Blog, /*Education */ Experience, Contacts, Projects, Services, Portfolio, Achievement, Gallery } from '../../components';
import { headerData } from '../../data/headerData';

function Main() {
    return (
      <div>
        <Helmet>
          <title>{headerData.name}</title>
          <link
            href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
            rel="stylesheet"
          />
        </Helmet>

        <Navbar />
        <Landing />
        <About />
        {/* <Education /> */}
        <Skills />
        <Experience />
        <Projects />
        <Gallery />
        <Portfolio />
        <Achievement />
        <Services />
        {/* <Testimonials /> */}
        <Blog />
        <Contacts />
        <Footer />
      </div>
    );
}

export default Main;
