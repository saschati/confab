import { LoremIpsum } from "lorem-ipsum";
import _ from 'lodash';

import avatar_1 from '../../img/avatar/message/avatar-1.png';
import avatar_2 from '../../img/avatar/message/avatar-2.png';
import avatar_3 from '../../img/avatar/message/avatar-3.png';
import avatar_4 from '../../img/avatar/message/avatar-4.png';
import avatar_5 from '../../img/avatar/message/avatar-5.png';

const avatars = [
    avatar_1,
    avatar_2,
    avatar_3,
    avatar_4,
    avatar_5
];

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 3,
        min: 1
    },
    wordsPerSentence: {
        max: 10,
        min: 4
    }
});

let toUpper = s => s.replace(/./, c => c.toUpperCase());
let timer = () => Math.ceil(Math.random() * 1000);

export default function (wrapper) {
    let stopScroll = false;

    wrapper.addEventListener('mouseenter', () => void (stopScroll = false));
    wrapper.addEventListener('mouseleave', () => void (stopScroll = true));

    const template = `
        <div class="message chat__message">
            <img class="message__avatar" src="{avatar}" alt="Avatar">
            <div>
                <p class="message__title">{username}</p>
                <p class="message__message">{message}</p>
            </div>
        </div>
    `;

    const liveChat = () => {
        let _template;

        const messages = wrapper.querySelectorAll('.message');
        if (messages.length >= 30) {
            let [message] = messages;
            message.remove();
            message = null;
        }

        _template = template.replace('{avatar}', avatars[_.random(0, 4)]);
        _template = _template.replace('{username}', toUpper(lorem.generateWords(1)));
        _template = _template.replace('{message}', lorem.generateSentences());

        wrapper.insertAdjacentHTML('beforeend', _template);

        if (stopScroll) {
            wrapper.scrollTo({top: wrapper.scrollHeight, behavior: 'smooth'});
        }

        setTimeout(liveChat, timer());
    }

    setTimeout(liveChat, timer())
}
