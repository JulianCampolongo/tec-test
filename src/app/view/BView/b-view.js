import View from "../../../core/view/view";
import html from "./b-view.html";
import "./b-view..scss";
import Utils from "../../../core/utils";

export default class BView extends View {

    /**
     * Esta vista muestra un texto por 1 segundos y termina.
     */

    constructor(text) {
        super(html);
        this.text = text;
        this.init();
    }


    async init() {
        // viewElement está definido en View, y es el contenedor de la vista.
        this.viewElement.querySelector(".text-container").innerHTML = this.text;

        await Utils.waitForSeconds(5);

        this.end(); // <- Acá podría retornar una salida, pero esta vista no tiene salida.
    }

}