import Framer from './Framer.js';
import { FramerComponent } from './Framer.js';
import Router from './Router.js';
Framer.css("./framer_components/Navigation.css");

export default class NavigationBar extends FramerComponent {
    
    props = {
        items: [],
        router: null,
        state: closed
    };

    expandButton = <span id="nav-expand" className="material-icons" hidden>menu</span>
    
    init() {
        
        this.className = "Navigation";
        this.append(
            <ul>
                {this.props.items.map((item, index) => {
                    if(index == 0) {
                        return <li><a id={item.label.toLowerCase().replace(/ /g, "-")} to={item.to} onclick={this.navigate.bind(this)}>{item.label}</a>{this.expandButton}</li>;
                    } else {
                        return <li><a id={item.label.toLowerCase().replace(/ /g, "-")} to={item.to} onclick={this.navigate.bind(this)}>{item.label}</a></li>;
                    }
                })}
            </ul>
        );

        this.expandButton.onclick = this.expandNav.bind(this);

        this.checkMobile();
        window.addEventListener("resize", this.checkMobile.bind(this));

    }
    
    navigate() {

        let destination = event.target["to"];
        location.href = `#${event.target["id"]}`;
        this.props.router.display(destination);
        if(this.classList.contains("open")) {
            this.expandNav();
        }

    }

    checkMobile() {
        
        if(Framer.isMobileSize()) {
            
            this.classList.remove("open")
            this.classList.add("closed");
            this.expandButton.removeAttribute("hidden");

        } else {
            
            this.classList.remove("closed");
            this.classList.remove("open");
            this.expandButton.setAttribute("hidden", true);

        }

    }

    expandNav() {

        if(this.classList.contains("closed")) {

            this.classList.remove("closed");
            this.classList.add("open");

        } else {

            this.classList.remove("open");
            this.classList.add("closed");

        }

    }

}