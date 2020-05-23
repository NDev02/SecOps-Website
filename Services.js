import Framer from './framer_components/Framer.js';
import { FramerComponent } from './framer_components/Framer.js';
export default class Services extends FramerComponent {
    constructor() {
        super(...arguments);
        this.props = {};
    }
    init() {
        this.className = "Services";
        this.append(Framer.createElement("div", { className: "fill-vertical cut-corner" },
            Framer.createElement("h1", { className: "red" }, "Our Services"),
            Framer.createElement("p", null, "We offer a wide range of security consulting services, all designed to help your company reach its potential. Whether you're looking for a small tweak or complete ServiceNow Security Operations solution, we have you covered. Our services are available \"a la carte\" so you can get precisely what you need."),
            Framer.createElement("br", null),
            Framer.createElement("h2", { className: "blue" }, "Overview"),
            Framer.createElement("div", { className: "gc2" },
                Framer.createElement("ul", null,
                    Framer.createElement("li", null, "Security Operations Management"),
                    Framer.createElement("li", null, "Governance Risk and Compliance"),
                    Framer.createElement("li", null, "Integrations with ServiceNow"),
                    Framer.createElement("li", null, "Security Experts")),
                Framer.createElement("img", { src: "./assets/professional.jpg", alt: "Businessman", className: "img-fill-space" }))), Framer.createElement("div", { className: "fill-vertical cut-corner" },
            Framer.createElement("h1", { className: "blue" }, "Security Operations Management"),
            Framer.createElement("ul", null,
                Framer.createElement("li", null, "Security Incident Response"),
                Framer.createElement("li", null, "Vulnerability Management"),
                Framer.createElement("li", null, "Threat Intelligence"),
                Framer.createElement("li", null, "Implementations with several high profile clients"))), Framer.createElement("div", { className: "fill-vertical cut-corner" },
            Framer.createElement("h1", { className: "red" }, "Governance Risk and Compliance"),
            Framer.createElement("ul", null,
                Framer.createElement("li", null, "Streamline Compliance Controls"),
                Framer.createElement("li", null, "Enhance Audit Productivity"),
                Framer.createElement("li", null, "Sustainable Risk Management"),
                Framer.createElement("li", null, "Business process experts in FedRamp, NIST, HIPAA, SOX, PCI, etc"))), Framer.createElement("div", { className: "fill-vertical cut-corner" },
            Framer.createElement("h1", { className: "blue" }, "Integrations with ServiceNow"),
            Framer.createElement("ul", null,
                Framer.createElement("li", null, "Qualys"),
                Framer.createElement("li", null, "QRadar"),
                Framer.createElement("li", null, "Splunk"),
                Framer.createElement("li", null, "Palo Alto"),
                Framer.createElement("li", null, "Taniun"),
                Framer.createElement("li", null, "Digital Defense"),
                Framer.createElement("li", null, "Tenable"),
                Framer.createElement("li", null, "Virus total"))), Framer.createElement("div", { className: "fill-vertical cut-corner" },
            Framer.createElement("h1", { className: "red" }, "Security Experts"),
            Framer.createElement("ul", null,
                Framer.createElement("li", null, "Experts running Security Operations Centers\u200B"),
                Framer.createElement("li", null, "Bulk vulnerability management"),
                Framer.createElement("li", null, "Security Incident Response workflows"))));
    }
}
