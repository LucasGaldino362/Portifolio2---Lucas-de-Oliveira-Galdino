class MobileNavbar{
    constructor(mobileMenu, navlist, navlist){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navlist = document.querySelector(navlist);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
    }
    addClickEvent(){
        this.mobileMenu.addEventListenter("click", () => console.log
        ("Hey"));
    }
    init(){
        if (this.mobileMenu){
          this.addClickEvent();  
        }
        return this;
    }
}
const MobileNavbar