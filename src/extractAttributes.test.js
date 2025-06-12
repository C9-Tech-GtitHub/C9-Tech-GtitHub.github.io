const { extractAttributes } = require('./extractAttributes');

describe('extractAttributes', () => {
  test('parses simple Nike title', () => {
    const attrs = extractAttributes("Nike Men's Cotton T-Shirt Blue");
    expect(attrs.brand).toBe('Nike');
    expect(attrs.gender).toBe('Men');
    expect(attrs.productType).toBe('T-Shirt');
    expect(attrs.material).toBe('Cotton');
    expect(attrs.color).toBe('Blue');
  });

  test('parses Adidas running shorts', () => {
    const attrs = extractAttributes("Adidas Women's Running Shorts - Black");
    expect(attrs.brand).toBe('Adidas');
    expect(attrs.gender).toBe('Women');
    expect(attrs.productType).toBe('Running Shorts');
    expect(attrs.color).toBe('Black');
  });
});
