import { Collapse } from 'bootstrap';

export default () => {
  const navbarCollapse = document.getElementById('navbar-collapse');
  const navbarItems = document.querySelectorAll('#navbar .js-scroll-trigger');
  const bsCollapse = Collapse.getOrCreateInstance(navbarCollapse, { toggle: false });

  navbarItems.forEach((item) => {
    item.addEventListener('click', () => { bsCollapse.hide() });
  })
};
