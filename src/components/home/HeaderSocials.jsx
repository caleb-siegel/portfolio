import React from 'react';

const HeaderSocials = () => {
  return (
    <div className="home__socials">
        <a href="http://www.linkedin.com/in/calebsiegel" className="home__social-link" target="_blank">
            <i class="fa-brands fa-linkedin"></i>
        </a>

        <a href="https://github.com/caleb-siegel" className="home__social-link" target="_blank">
            <i class="fa-brands fa-github"></i>
        </a>

        <a href="https://www.facebook.com/caleb.siegel.5" className="home__social-link" target="_blank">
            <i class="fa-brands fa-facebook"></i>
        </a>

        <a href="https://www.instagram.com/kbsiegel/" className="home__social-link" target="_blank">
            <i class="fa-brands fa-instagram"></i>
        </a>

        <a href="https://medium.com/@caleb.siegel" className="home__social-link" target="_blank">
            <i class="fa-brands fa-medium"></i>
        </a>
    </div>
  )
}

export default HeaderSocials