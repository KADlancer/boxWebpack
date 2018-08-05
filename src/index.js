import _ from 'lodash';
import FormContainer from "./js/components/container/FormContainer";

require('./login');

function component() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello, oh my', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());
