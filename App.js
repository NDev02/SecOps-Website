import Framer from './framer_components/Framer.js';
import Router from './framer_components/Router.js';
import Navigation from './framer_components/NavigationBar.js';
import HomePage from './HomePage.js';
import About from './About.js';
import Services from './Services.js';
import Contact from './Contact.js';
Framer.css('styles.css');
export default class App extends Framer {
    constructor() {
        super("#root");
    }
    init() {
        let navigationItems = [
            {
                label: "SecOps Partners",
                to: Framer.createElement(HomePage, null)
            },
            {
                label: "About",
                to: Framer.createElement(About, null)
            },
            {
                label: "Services",
                to: Framer.createElement(Services, null)
            },
            {
                label: "Contact",
                to: Framer.createElement(Contact, null)
            }
        ];
        this.router = Framer.createElement(Router, null);
        this.navigation = Framer.createElement(Navigation, { router: this.router, items: navigationItems });
        this.append(this.navigation, this.router);
        this.navigationCheck();
        window.addEventListener("hashchange", this.navigationCheck);
    }
    navigationCheck() {
        if (location.href.includes("#")) {
            let selected = null;
            try {
                selected = document.querySelector(location.href.substring(location.href.indexOf("#")).toLowerCase());
            }
            catch (e) { }
            if (selected == null) {
                location.href = "#secops-partners";
                selected = document.querySelector(location.href.substring(location.href.indexOf("#")).toLowerCase());
            }
            selected.click();
        }
        else {
            location.href = "#secops-partners";
        }
    }
}
window["app"] = new App();
