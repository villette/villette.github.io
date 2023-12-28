export default () => {
  const link = atob('dmlsbGV0dGUucGllcnJlQGdtYWlsLmNvbQ==');

  const element = Object.assign(document.createElement('a'), {
    href: `mailto:${link}`,
    target: '_blank',
    rel: 'noopener noreferrer',
    innerHTML: link,
  });

  document.getElementById('mailto').replaceWith(element);
};
