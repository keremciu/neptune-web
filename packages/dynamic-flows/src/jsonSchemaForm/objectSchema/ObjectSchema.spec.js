import React from 'react';
import { shallow } from 'enzyme';

import ObjectSchema from './ObjectSchema';
import GenericSchema from '../genericSchema/';

describe('Given a component for rendering object schemas', () => {
  let component;
  let genericSchemaComponents;
  let props;

  const schema = {
    type: 'object',
    title: 'Object schema',
    description: 'A schema representing a JSON object',
    properties: {
      string: { type: 'string' },
      number: { type: 'number' },
    },
  };

  const model = {
    string: 'a',
    number: 1,
  };

  const errors = {
    string: 'too short',
    number: 'too low',
  };

  const locale = 'en-GB';
  const submitted = false;

  const translations = {
    translationKey: 'example',
  };

  let stringSchemaComponent;
  let numberSchemaComponent;

  beforeEach(() => {
    const onChange = jest.fn();

    props = { schema, model, errors, locale, onChange, submitted, translations };
    component = shallow(<ObjectSchema {...props} />);

    genericSchemaComponents = component.find(GenericSchema);

    stringSchemaComponent = genericSchemaComponents.at(0);
    numberSchemaComponent = genericSchemaComponents.at(1);
  });

  it('should show the schema title as a fieldset legend', () => {
    expect(component.find('legend').text()).toContain(schema.title);
  });

  it('should show the schema description as a paragraph', () => {
    expect(component.find('p').text()).toContain(schema.description);
  });

  it('should display one generic-schema component for each property', () => {
    expect(genericSchemaComponents).toHaveLength(2);
  });

  it('should pass the relevant property schemas to generic schema components', () => {
    expect(stringSchemaComponent.prop('schema')).toBe(schema.properties.string);
    expect(numberSchemaComponent.prop('schema')).toBe(schema.properties.number);
  });

  it('should pass the relevant part of the model to the generic schema components', () => {
    expect(stringSchemaComponent.prop('model')).toBe(model.string);
    expect(numberSchemaComponent.prop('model')).toBe(model.number);
  });

  it('should pass the relevant part of the errors to the generic schema components', () => {
    expect(stringSchemaComponent.prop('errors')).toBe(errors.string);
    expect(numberSchemaComponent.prop('errors')).toBe(errors.number);
  });

  it('should pass the locale to the generic-schema components', () => {
    expect(stringSchemaComponent.prop('locale')).toBe(locale);
    expect(numberSchemaComponent.prop('locale')).toBe(locale);
  });

  it('should pass the translations to the generic-schema components', () => {
    expect(stringSchemaComponent.prop('translations')).toBe(translations);
    expect(numberSchemaComponent.prop('translations')).toBe(translations);
  });

  describe('when a generic schema component triggers onChange', () => {
    beforeEach(() => {
      numberSchemaComponent.simulate('change', 2, schema.properties.number);
    });

    it('should trigger the components onChange with the new value under the correct key', () => {
      expect(props.onChange).toHaveBeenCalledWith(
        { string: 'a', number: 2 },
        schema.properties.number,
      );
    });

    it('should not change the original model by reference', () => {
      expect(props.model).not.toBe({ string: 'a', number: 2 });
    });
  });

  describe('when a generic schema component triggers a null onChange', () => {
    beforeEach(() => {
      numberSchemaComponent.simulate('change', null, schema.properties.number);
    });

    it('should trigger the components onChange with the key remove', () => {
      expect(props.onChange).toHaveBeenCalledWith({ string: 'a' }, schema.properties.number);
    });
  });
});
