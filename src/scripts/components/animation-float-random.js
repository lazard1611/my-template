import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import { getRandomInt } from '../utils';

gsap.registerPlugin(ScrollTrigger);

const randomAnim = () => {
    const SELECTORS = {
        section: ".js-random-animation",
        element: ".js-random-el"
    }

    const $sections = document.querySelectorAll(SELECTORS.section);
    if (!$sections.length) return;

    $sections.forEach(($section) => {
        const $animElements = $section.querySelectorAll(SELECTORS.element);
        if (!$animElements.length) return;

        const tl = gsap.timeline({paused: true});

        const toAnim = (el) => {
            const xMin = parseInt(el.getAttribute('data-anim-x-min')) ? parseInt(el.getAttribute('data-anim-x-min')) : 0;
            const xMax = parseInt(el.getAttribute('data-anim-x-max')) ? parseInt(el.getAttribute('data-anim-x-max')) : 40;
            const yMin = parseInt(el.getAttribute('data-anim-y-min')) ? parseInt(el.getAttribute('data-anim-y-min')) : 0;
            const yMax = parseInt(el.getAttribute('data-anim-y-max')) ? parseInt(el.getAttribute('data-anim-y-max')) : 40;
            const xPos = getRandomInt(xMin, xMax);
            const yPos = getRandomInt(yMin, yMax);

            const randomScale = getRandomInt(8.4, 10) / 10;
            const scaleValue = getRandomInt(1, 3) === 1 ? 1 : randomScale; // 50% chance
            const scaleEl = el.getAttribute('data-anim-scale') ? scaleValue : 1;
                // const relativeDuration = Math.abs(xPos) / 10;

            tl.to(el, {
                x: xPos,
                y: yPos,
                duration: 2.4,
                scale: scaleEl,
                ease: 'none',
                onComplete: () => {
                    toAnim(el);
                },
            });
        };

        ScrollTrigger.create({
            trigger: $section,
            start: 'top bottom',
            end: 'bottom top',
            markers: false,
            onEnter: () => tl.play(),
            onLeave: () => tl.pause(),
            onEnterBack: () => tl.play(),
            onLeaveBack: () => tl.pause()
        });

        $animElements.forEach(($animElement) => {
            toAnim($animElement);
        })
    })
}

export default randomAnim;
