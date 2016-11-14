suite('Global Tests', () => {
  test('page hads a valid title', () => {
    assert(document.title && document.title.match(/\S/) && document.title.toUpperCase() !== 'TODO');
  });
});

