describe('error (option)', () => {
  it('should be `null` be default', () => {
    const image = window.createImage();
    const cropper = new Cropper(image);

    expect(cropper.options.error).to.be.null;
  });

  it('should execute the `error` hook function', (done) => {
    const image = window.createImage({
      src: 'http://example.com/not-found.jpg',
    });
    const cropper = new Cropper(image, {
      error(event) {
        expect(event.type).to.equal('error');
        done();
      },
    });

    expect(cropper.options.error).to.be.a('function');
  });
});
