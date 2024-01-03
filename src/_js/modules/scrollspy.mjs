import { ScrollSpy } from 'bootstrap';

export default () => {
  new ScrollSpy(document.body, {
    target: '#sideNav',
    rootMargin: '0px 0px -40%',
  });
};
