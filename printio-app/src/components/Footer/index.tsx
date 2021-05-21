import { Stack } from '@fluentui/react';
import React from 'react';
import './Footer.css';


class Footer extends React.Component {

    render() {
        return (
            <div className="footer-main">
                <div className="footer-content">
                    <span className="footer-text">powered by Kleen-Tex</span>
                </div>
            </div>
                // <section className="footer-main">
                //     <ul className="footer-content">
                //     <li className="footer-text">powered by Kleen-Tex.</li>
                //     </ul>
                // </section>
        );
    }
}

export default Footer;