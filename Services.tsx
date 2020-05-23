import Framer from './framer_components/Framer.js';
import { FramerComponent } from './framer_components/Framer.js';

export default class Services extends FramerComponent {
    
    props = {};
    
    init() {

        this.className = "Services";

        this.append(
            <div className="fill-vertical cut-corner">
                <h1 className="red">Our Services</h1>
                <p>We offer a wide range of security consulting services, all designed to help your company reach its potential. Whether you're looking for a small tweak or complete ServiceNow Security Operations solution, we have you covered. Our services are available "a la carte" so you can get precisely what you need.</p>
                <br/>
                <h2 className="blue">Overview</h2>
                <div className="gc2">
                    <ul>
                        <li>Security Operations Management</li>
                        <li>Governance Risk and Compliance</li>
                        <li>Integrations with ServiceNow</li>
                        <li>Security Experts</li>
                    </ul>
                    <img src="./assets/professional.jpg" alt="Businessman" className="img-fill-space"/>
                </div>
            </div>,
            <div className="fill-vertical cut-corner">
                <h1 className="blue">Security Operations Management</h1>
                <ul>
                    <li>Security Incident Response</li>
                    <li>Vulnerability Management</li>
                    <li>Threat Intelligence</li>
                    <li>Implementations with several high profile clients</li>
                </ul>
            </div>,
            <div className="fill-vertical cut-corner">
                <h1 className="red">Governance Risk and Compliance</h1>
                <ul>
                    <li>Streamline Compliance Controls</li>
                    <li>Enhance Audit Productivity</li>
                    <li>Sustainable Risk Management</li>
                    <li>Business process experts in FedRamp, NIST, HIPAA, SOX, PCI, etc</li>
                </ul>
            </div>,
            <div className="fill-vertical cut-corner">
                <h1 className="blue">Integrations with ServiceNow</h1>
                <ul>
                    <li>Qualys</li>
                    <li>QRadar</li>
                    <li>Splunk</li>
                    <li>Palo Alto</li>
                    <li>Taniun</li>
                    <li>Digital Defense</li>
                    <li>Tenable</li>
                    <li>Virus total</li>
                </ul>
            </div>,
            <div className="fill-vertical cut-corner">
                <h1 className="red">Security Experts</h1>
                <ul>
                    <li>Experts running Security Operations Centers​</li>
                    <li>Bulk vulnerability management</li>
                    <li>Security Incident Response workflows</li>
                </ul>
            </div>
        );

    }

}