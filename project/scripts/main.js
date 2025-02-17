import { nav } from "./header.mjs";
import { animate } from "./hero.mjs";
import { getProcedures } from "./procedures.mjs";
import modal from "./modal.mjs";
import formAction from "./action.mjs";
import breadCrumb from "./wayfinding.mjs";
import localS from "./localstorage.mjs";

const currentPage = window.location.pathname;

nav();
breadCrumb();

if (currentPage.includes("index.html")) {
    animate();
    modal();
    localS();
}

if (currentPage.includes("services.html")) {
    getProcedures();
}

if (currentPage.includes("action.html")) {
    formAction();
}

