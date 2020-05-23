import Framer from './framer_components/Framer.js';
import { FramerComponent } from './framer_components/Framer.js';
export default class About extends FramerComponent {
    constructor() {
        super(...arguments);
        this.props = {};
    }
    init() {
        this.className = "About";
        this.append(Framer.createElement("div", { className: "fill-vertical cut-corner" },
            Framer.createElement("h1", { className: "red" }, "About us"),
            Framer.createElement("p", null, "We offer a wide range of security consulting services, all designed to help your company reach its potential. Whether you're looking for a small tweak or complete ServiceNow Security Operations solution, we have you covered. Our services are available \"a la carte\" so you can get precisely what you need."),
            Framer.createElement("p", null, "Each company is unique. One-size-fits-all approaches will never help your business reach its full potential. We deliver custom solutions, tailored to you \u2013 your industry, your culture, your one-of-a-kind challenges."),
            Framer.createElement("br", null),
            Framer.createElement("h2", { className: "blue" }, "What we do"),
            Framer.createElement("div", { className: "gc2" },
                Framer.createElement("ul", null,
                    Framer.createElement("li", null,
                        Framer.createElement("span", { className: "red heavy" }, "Expert Analysis: "),
                        "Identifying your company's path to growth."),
                    Framer.createElement("li", null,
                        Framer.createElement("span", { className: "red heavy" }, "Strategic Planning: "),
                        "Crafting a plan to take you there."),
                    Framer.createElement("li", null,
                        Framer.createElement("span", { className: "red heavy" }, "Risk Management: "),
                        " Minimizing your risks along the way.")),
                Framer.createElement("img", { src: "./assets/planning.jpg", alt: "planning", className: "img-fill-space" }))));
    }
}
