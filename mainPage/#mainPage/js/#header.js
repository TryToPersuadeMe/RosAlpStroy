/* const burgerIcon = document.querySelector(".header__burgerMenu");
const navigation = document.querySelector(".navigation");
const
burgerIcon.addEventListener("click", () => {
  navigation.classList.toggle("navigation_active");
  burgerIcon.classList.toggle("header__burgerMenu_active");
  burgerIcon.classList.toggle("header__burgerMenu_active");
  burgerIcon.classList.toggle("header__burgerMenu_active");
});
 */

class responsiveHeader {
  constructor(props) {
    this.navigation = document.querySelector("." + props.navigation);
    this.burgerIcon = document.querySelector("." + props.burgerIcon);

    this.htmlBody = document.querySelector("body");
    this.burgerIcon_active = props.burgerIcon + "_active";

    this.toggleState();
  }

  openState() {
    this.navigation.classList.add("navigation_active");
    this.burgerIcon.classList.add("header__burgerMenu_active");
    this.htmlBody.classList.add("body-lock");
    this.htmlBody.classList.add("body-shadow");
  }

  closeState() {
    this.navigation.classList.remove("navigation_active");
    this.burgerIcon.classList.remove("header__burgerMenu_active");
    this.htmlBody.classList.remove("body-lock");
    this.htmlBody.classList.remove("body-shadow");
  }

  toggleState() {
    document.addEventListener("click", () => {
      if (
        event.target == this.burgerIcon &&
        !event.target.classList.contains(this.burgerIcon_active)
      ) {
        this.openState();
      } else if (
        event.target == this.htmlBody ||
        event.target.classList.contains(this.burgerIcon_active)
      ) {
        this.closeState();
      }
    });
  }
}

const headerBurgerMenu = new responsiveHeader({
  navigation: "navigation",
  burgerIcon: "header__burgerMenu",
});

const dropListNavigation = () => {
  const button = document.querySelectorAll(".dropList__toggleButton");
  const droplist = document.querySelectorAll(".dropList");

  button.forEach((value, index) => {
    value.addEventListener("click", () => droplist[index].classList.toggle("dropList_active"));
  });
};

dropListNavigation();
