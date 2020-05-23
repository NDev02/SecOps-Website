import Framer from './framer_components/Framer.js';
import { FramerComponent } from './framer_components/Framer.js';

export default class HomePage extends FramerComponent {
    
    props = {};
    
    init() {

        this.className = "HomePage";

        this.append(
            <div className="cover">
                <img src="./assets/circuits.svg" alt="circuit" className="circuit"/>
                <div className="center">
                    <img src="./assets/logo.svg" alt="SecOps Partners' Logo" className="logo"/>
                    <h1><span className="blue heavy">SecOps</span> <span className="red normal">Partners</span></h1>
                    <h2 className="normal">Experts in security operations</h2>
                </div>
                <img src="./assets/circuits.svg" alt="circuit" className="circuit"/>
            </div>,
            <div className="fill-vertical cut-corner gst">
                <h1 className="red">Modern problems</h1>
                <div className="gr3">
                    <div className="grid-top">
                        <p>As organizations are pressured to expand their cloud operations, they face new major security issues that they are not properly prepared for. Upon facing these challenges, organizations often turn to implementing several different security management approaches. However, unfortunately, they shortly come to the reality that their approaches are too scattered and not nearly effective enough.</p>
                    </div>
                    <div className="grid-center">
                        <p className="red heavy">The end results are always the same:</p>
                        <div className="gc2">
                            <div>
                                <ul>
                                    <li><span className="blue heavy">Scattered management</span> of security vulnerabilities and incidents across multiple tools or even spreadsheets lead to a <span className="blue heavy">lack of easily accessible data.</span></li>
                                    <li>Security analysts <span className="blue heavy">start from scratch</span> when investigating every issue, <span className="blue heavy">delaying response time and increasing manual work.</span></li>
                                </ul>
                            </div>
                            <img src="./assets/cloud-lock.png" alt="secure cloud" className="img-fill-space"/>
                        </div>
                    </div>
                    <div className="grid-bottom">
                        <p>To make matters worse, it is said that around <span className="blue heavy">80% of cyberattacks</span> exploit known vulnerabilities. <span className="red heavy">Organizations need an efficient, streamlined, process to prevent iminent cyberattacks and respond to vulnerabilities quicker.</span></p>
                    </div>
                </div>
            </div>,
            <div className="fill-vertical cut-corner gst">
                <h1 className="blue">We have the solutions</h1>
                <div className="gr3">
                    <div className="grid-top">
                        <p>The Security Operations Management (SOM) suite in ServiceNOW is a better way to get the visibility you need to thwart attacks and respond quicker.  Teams need to gain better visibility into their entire security posture and minimize time invested in manual processes.  Security Operations provides a single platform for responding to incidents and vulnerabilities and can enrich incidents with threat intelligence to further expedite response.</p>
                    </div>
                    <div className="grid-center">
                        <p>We can <span className="red heavy">eliminate inefficient processes</span> by combining security, IT, and risk capabilities into an <span className="red heavy">integrated risk platform</span> inside of ServiceNow.</p>
                        <p className="blue heavy">Inside of ServiceNow we can leverage effective automation and organization to: </p>
                        <div className="gc2">
                            <ul>
                                <li><span className="red heavy">Reduce time</span> spent on basic, repetitive, tasks.</li>
                                <li><span className="red heavy">Quickly</span> identify, prioritize, and remediate changes that affect security and risk postures.</li>
                                <li><span className="red heavy">Track</span> security with <span className="red heavy">advanced dashboards and reporting.</span></li>
                                <li><span className="red heavy">Enhance</span> your view of your security posture.</li>
                            </ul>
                            <img src="./assets/chart.jpg" alt="chart" className="img-fill-space"/>
                        </div>
                    </div>
                    <div className="grid-bottom">
                        <p>Prioritize and remediate vulnerabilities and security incidents faster. Unify data and processes across IT, security, and risk teams.</p>
                        <p>Your organization faces modern cloud integration problems daily, we have the solutions.</p>
                    </div>
                </div>
            </div>
        );

    }

}