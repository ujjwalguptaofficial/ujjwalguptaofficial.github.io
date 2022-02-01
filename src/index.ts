import { HTML_TAG, Mahal } from "mahal";
import App from "@/app.mahal";
import { registerGlobalFormatter } from "@/formatters";

window['jQuery'] = window['$'] = require('jquery');
import "jquery.easing";
import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap';
import "@/styles/index.scss";


const app = new Mahal(App, '#app');
registerGlobalFormatter(app);
app.create();