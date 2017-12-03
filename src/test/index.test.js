import transformType1 from '../main/transformers/type1Transformer';
import transformType2 from '../main/transformers/type2Transformer';
import transform from '../main';

jest.mock('../main/transformers/type1Transformer');
jest.mock('../main/transformers/type2Transformer');

beforeEach(() => {
  transformType1.mockReset();
  transformType2.mockReset();
});

describe('index.js', () => {
  it('transforms the incoming raw object', () => {
    const rawObject = {
      name: 'NAME',
      content: [
        {
          type: 'type1',
          value: 'prop1',
        },
        {
          type: 'type2',
          value: 'PROP2',
        },
      ],
    };

    transformType1.mockImplementation(jest.fn(() => 'fakeType1Transformation'));
    transformType2.mockImplementation(jest.fn(() => 'fakeType2Transformation'));

    const result = transform(rawObject);

    // checking by state
    expect(result.name).toBe('name');
    expect(result.content[0].value).toBe('fakeType1Transformation');
    expect(result.content[1].value).toBe('fakeType2Transformation');

    // checking by behaviour
    expect(transformType1).toBeCalledWith(rawObject.content[0]);
    expect(transformType2).toBeCalledWith(rawObject.content[1]);
  });
});
