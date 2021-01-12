class responsiveHeader {
  constructor(props) {
    this.navigation = document.querySelector("." + props.navigation);
    this.burgerIcon = document.querySelector("." + props.burgerIcon);
    this.burgerIcon_active = props.burgerIcon_active;

    this.htmlBody = document.querySelector("body");

    this.BurgerClick();
    this.WindowClick();
  }

  openState() {
    this.navigation.classList.add("navigation_active");
    this.burgerIcon.classList.add(this.burgerIcon_active);
    this.htmlBody.classList.add("body-lock");
    this.htmlBody.classList.add("body-shadow");
  }

  closeState() {
    this.navigation.classList.remove("navigation_active");
    this.burgerIcon.classList.remove(this.burgerIcon_active);
    this.htmlBody.classList.remove("body-lock");
    this.htmlBody.classList.remove("body-shadow");
  }

  BurgerClick() {
    this.burgerIcon.addEventListener("click", () => {
      if (!event.currentTarget.classList.contains(this.burgerIcon_active)) {
        this.openState();
      } else {
        this.closeState();
      }
    });
  }

  WindowClick() {
    document.addEventListener("click", () => {
      if (event.target.classList.contains("body-lock", "body-shadow")) {
        console.log("asd");
        this.closeState();
      }
    });
  }
}

const headerBurgerMenu = new responsiveHeader({
  navigation: "navigation",
  burgerIcon: "header__burgerMenu",
  burgerIcon_active: "header__burgerMenu_active",
});

const dropListNavigation = () => {
  const button = document.querySelectorAll(".dropList__toggleButton");
  const droplist = document.querySelectorAll(".dropList");

  button.forEach((value, index) => {
    value.addEventListener("click", () => droplist[index].classList.toggle("dropList_active"));
  });
};

dropListNavigation();
