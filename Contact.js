import Framer from './framer_components/Framer.js';
import { FramerComponent } from './framer_components/Framer.js';
export default class Contact extends FramerComponent {
    constructor() {
        super(...arguments);
        this.props = {};
    }
    init() {
        this.className = "Contact";
        this.append(Framer.createElement("div", { className: "fill-vertical cut-corner gst" },
            Framer.createElement("h1", { className: "red" }, "Contact Us"),
            Framer.createElement("div", { className: "gr3" },
                Framer.createElement("div", { className: "grid-top" },
                    Framer.createElement("p", { className: "blue heavy" }, "Interested in seeing what we can do for you?")),
                Framer.createElement("div", { className: "grid-center" },
                    Framer.createElement("div", { className: "gc2" },
                        Framer.createElement("div", null,
                            Framer.createElement("p", null, "Call or email us to start the conversation:"),
                            Framer.createElement("p", null,
                                Framer.createElement("span", { className: "red heavy" }, "Phone: "),
                                Framer.createElement("a", { href: "tel:585-322-4767" }, "(585) 322 - 4767")),
                            Framer.createElement("p", null,
                                Framer.createElement("span", { className: "red heavy" }, "Email: "),
                                Framer.createElement("a", { href: "mailto:info@SecOpsPartners.com" }, "info@SecOpsPartners.com"))),
                        Framer.createElement("img", { src: "./assets/contact.jpg", alt: "phone", className: "img-fill-space" }))),
                Framer.createElement("div", { className: "grid-bottom" },
                    Framer.createElement("p", null,
                        "PO Box 64161",
                        Framer.createElement("br", null),
                        "Rochester, New York 14624")))));
    }
}
