import '../scss/styles.scss';
import * as bootstrap from 'bootstrap';
import simpleParallax from 'simple-parallax-js';

import Alert from 'bootstrap/js/dist/alert';
import { Tooltip, Toast, Popover } from 'bootstrap';

var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image);