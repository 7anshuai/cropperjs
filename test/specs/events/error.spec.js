describe('error (event)', () => {
  it('should trigger the `error` event', (done) => {
    const image = window.createImage({
      src: 'http://example.com/not-found.jpg',
    });

    image.addEventListener('error', (event) => {
      expect(event.type).to.equal('error');
      done();
    });

    new Cropper(image);
  });
});
