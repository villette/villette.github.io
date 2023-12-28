export default () => {
  const sideNav = document.body.querySelector('#sideNav');

  if (sideNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#sideNav',
      offset: 74,
    });
  };
};
