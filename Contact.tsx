import Framer from './framer_components/Framer.js';
import { FramerComponent } from './framer_components/Framer.js';

export default class Contact extends FramerComponent {
    
    props = {};
    
    init() {

        this.className = "Contact";

        this.append(
            <div className="fill-vertical cut-corner gst">
                <h1 className="red">Contact Us</h1>
                <div className="gr3">
                    <div className="grid-top">
                        <p className="blue heavy">Interested in seeing what we can do for you?</p>
                    </div>
                    <div className="grid-center">
                        <div className="gc2">
                            <div>
                                <p>Call or email us to start the conversation:</p>
                                <p><span className="red heavy">Phone: </span><a href="tel:585-322-4767">(585) 322 - 4767</a></p>
                                <p><span className="red heavy">Email: </span><a href="mailto:info@SecOpsPartners.com">info@SecOpsPartners.com</a></p>
                            </div>
                            <img src="./assets/contact.jpg" alt="phone" className="img-fill-space"/>
                        </div>
                    </div>
                    <div className="grid-bottom">
                        <p>PO Box 64161<br/>Rochester, New York 14624</p>
                    </div>
                </div>
            </div>
        );

    }

}