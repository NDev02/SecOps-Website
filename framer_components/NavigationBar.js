import Framer from './Framer.js';
import { FramerComponent } from './Framer.js';
Framer.css("./framer_components/Navigation.css");
export default class NavigationBar extends FramerComponent {
    constructor() {
        super(...arguments);
        this.props = {
            items: [],
            router: null,
            state: closed
        };
        this.expandButton = Framer.createElement("span", { id: "nav-expand", className: "material-icons", hidden: true }, "menu");
    }
    init() {
        this.className = "Navigation";
        this.append(Framer.createElement("ul", null, this.props.items.map((item, index) => {
            if (index == 0) {
                return Framer.createElement("li", null,
                    Framer.createElement("a", { id: item.label.toLowerCase().replace(/ /g, "-"), to: item.to, onclick: this.navigate.bind(this) }, item.label),
                    this.expandButton);
            }
            else {
                return Framer.createElement("li", null,
                    Framer.createElement("a", { id: item.label.toLowerCase().replace(/ /g, "-"), to: item.to, onclick: this.navigate.bind(this) }, item.label));
            }
        })));
        this.expandButton.onclick = this.expandNav.bind(this);
        this.checkMobile();
        window.addEventListener("resize", this.checkMobile.bind(this));
        setInterval(this.checkMobile.bind(this), 500);
    }
    navigate() {
        let destination = event.target["to"];
        location.href = `#${event.target["id"]}`;
        this.props.router.display(destination);
        if (this.classList.contains("open")) {
            this.expandNav();
        }
    }
    checkMobile() {
        if (Framer.isMobileSize()) {
            this.classList.remove("open");
            this.classList.add("closed");
            this.expandButton.removeAttribute("hidden");
        }
        else {
            this.classList.remove("closed");
            this.classList.remove("open");
            this.expandButton.setAttribute("hidden", true);
        }
    }
    expandNav() {
        if (this.classList.contains("closed")) {
            this.classList.remove("closed");
            this.classList.add("open");
        }
        else {
            this.classList.remove("open");
            this.classList.add("closed");
        }
    }
}
