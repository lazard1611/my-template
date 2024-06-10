import gsap from 'gsap';
import '../index.html';
import '../styles/app.scss';
import { pageLoad } from './utils';
import header from './components/header';

pageLoad(() => {
    header();    
});

