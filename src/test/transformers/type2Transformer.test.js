import transformType2 from '../../main/transformers/type2Transformer';

describe('type2Transformer.js', () => {
  it('transforms the incoming type 1 object', () => {
    const rawType2 = { value: 'prop2' };
    const result = transformType2(rawType2);
    expect(result).toBe('PROP2');
  });
});
