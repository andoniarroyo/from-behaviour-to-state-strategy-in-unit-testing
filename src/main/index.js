import transformType1 from './transformers/type1Transformer';
import transformType2 from './transformers/type2Transformer';

const transformers = {
  type1: transformType1,
  type2: transformType2,
};

const transformName = name => name.toLowerCase();

const transform = raw => (
  {
    name: transformName(raw.name),
    content: raw.content.map(rawContent => (
      {
        type: rawContent.type,
        value: transformers[rawContent.type](rawContent),
      }
    )),
  }
);

export default transform;
