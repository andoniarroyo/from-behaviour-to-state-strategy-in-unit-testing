import transformType1 from '../../main/transformers/type1Transformer';

describe('type1Transformer.js', () => {
  it('transforms the incoming type 1 object', () => {
    const rawType1 = { value: 'PROP1' };
    const result = transformType1(rawType1);
    expect(result).toBe('prop1');
  });
});
