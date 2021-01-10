window.addEventListener("load", (event) => {
  VK.init({ apiId: 7724371, onlyWidgets: true });
  VK.Widgets.Comments("vk_comments", { limit: 10, attach: "*" });
});
