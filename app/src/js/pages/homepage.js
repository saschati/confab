import Tape from '@saschati/tape-slider';
import Left from '@saschati/tape-slider/src/direction/left';

import SideSlider from "@saschati/side-slider";
import runAnimation from "@saschati/side-slider/src/animate/animation/runner/hide";

import chat from '../module/chat';

window.addEventListener('load', function () {
    chat(document.querySelector('.chat__messages'));

    new Tape({wrapper: document.querySelector('.js-tape-right')}).run();
    new Tape({wrapper: document.querySelector('.js-tape-left'), direction: Left}).run();

    new SideSlider({
        wrapper: document.querySelector('.js-side-slider'),
        options: {
            autoplay: {
                chain: true,
                calculateDelayFromOther: true,
            },
            runner: {
                animates: runAnimation
            },
            client: {
                delay: 300,
                chain: false,
                button: {
                    next: document.querySelector('.js-side-slider_next'),
                    prev: document.querySelector('.js-side-slider_prev'),
                }
            },
            mutation: {
                onActive: function (item) {
                    item.classList.add('upcoming__card--active');
                },
                onUnActive: function (item) {
                    item.classList.remove('upcoming__card--active');
                },
            }
        }
    }).boot();
});