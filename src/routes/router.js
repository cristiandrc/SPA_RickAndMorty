import home from "@pages/home";
import Header from "@templates/header";
import character from "@pages/character";
import Filter from "@templates/filter";

import Error404 from "@pages/Error404";
import getHash from "@utils/getHash";
import resolveRoutes from "@utils/resolveRoutes";

const routes = {
  "/": home,
  "/:id": character,
};

// const Router = async () => {
//     const container = null || document.getElementById('main-container')
//     const header = null || document.getElementById('header')

//     let hash = getHash()
//     let route = await resolveRoutes(hash)
//     let render = routes[route] ? routes[route] : Error404
//     container.innerHTML = await render()
//     header.innerHTML = await Header()
// }

const Router = async () => {
  const container = null || document.getElementById("main-container");
  const header = null || document.getElementById("header");
  const filterDom = null || document.getElementById("filter");

  container.innerHTML = await home();
  header.innerHTML = Header();
  filterDom.innerHTML = Filter();
};

export default Router;
