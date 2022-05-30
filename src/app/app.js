import AView from "./view/AView/a-view";
import BView from "./view/BView/b-view";
import CView from "./view/CView/c-view";
import DView from "./view/DView/d-view";

export default class App {

    constructor() {

    }

    async start() {
        await (new AView("Siguiente")).start();
        await (new BView("Siguiente")).start();
        await (new CView("Siguiente")).start();
        await (new DView("Atras")).start();
       
    }
}