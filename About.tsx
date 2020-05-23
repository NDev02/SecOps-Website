import Framer from './framer_components/Framer.js';
import { FramerComponent } from './framer_components/Framer.js';

export default class About extends FramerComponent {
    
    props = {};
    
    init() {

        this.className = "About";

        this.append(
            <div className="fill-vertical cut-corner">
                <h1 className="red">About us</h1>
                <p>We offer a wide range of security consulting services, all designed to help your company reach its potential. Whether you're looking for a small tweak or complete ServiceNow Security Operations solution, we have you covered. Our services are available "a la carte" so you can get precisely what you need.</p>
                <p>Each company is unique. One-size-fits-all approaches will never help your business reach its full potential. We deliver custom solutions, tailored to you – your industry, your culture, your one-of-a-kind challenges.</p>
                <br/>
                <h2 className="blue">What we do</h2>
                <div className="gc2">
                    <ul>
                        <li><span className="red heavy">Expert Analysis: </span>Identifying your company's path to growth.</li>
                        <li><span className="red heavy">Strategic Planning: </span>Crafting a plan to take you there.</li>
                        <li><span className="red heavy">Risk Management: </span> Minimizing your risks along the way.</li>
                    </ul>
                    <img src="./assets/planning.jpg" alt="planning" className="img-fill-space"/>
                </div>
            </div>
        );

    }

}