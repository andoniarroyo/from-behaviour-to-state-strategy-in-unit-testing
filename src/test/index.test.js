import transform from '../main';

describe('index.js', () => {
  it('transforms the incoming raw object', () => {
    const rawObject = {
      name: 'NAME',
      content: [
        {
          type: 'type1',
          value: 'PROP1',
        },
        {
          type: 'type2',
          value: 'prop2',
        },
      ],
    };

    const result = transform(rawObject);

    // checking by state
    expect(result.name).toBe('name');
    expect(result.content[0].value).toBe('prop1');
    expect(result.content[1].value).toBe('PROP2');
  });
});