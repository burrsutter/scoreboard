import 'babel-polyfill';
import world from './world';
require("../styles/main.css");

document.getElementById('output').innerHTML = `Hello ${world}!`;