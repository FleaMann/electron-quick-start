describe('Hi spec file', function () {
    it('should test something, anything', function () {
        expect(true).toBe(true);
    });
    it('should have access to the electron window', function () {
        expect(window).not.toBe(null);
    });
    it('should have access to the window location', function () {
        expect(window.location.href).toBe('http://localhost:9876/context.html');
        expect(window.location.origin).toBe('http://localhost:9876');
    });
    it('should have window opened', function () {
        expect(window.closed).toBe(false);
    });
});
