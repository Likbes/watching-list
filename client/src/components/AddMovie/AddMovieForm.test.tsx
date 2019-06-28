import React from 'react';
import { shallow, mount } from 'enzyme';
import AddMovieForm from './AddMovieForm';

describe('<AddMovie />', () => {
  it('renders without crashing', () => {
    const component = shallow(<AddMovieForm />);

    expect(component).toMatchSnapshot();
  });

  it('validate empty input form', () => {
    const component = mount(<AddMovieForm />);

    component.find('button').simulate('click');
    component
      .find('.AddMovieForm_error__29NI2')
      .contains('Please fill all fields');
  });

  it('clean form after submit', () => {
    const component = mount(<AddMovieForm />);

    component
      .find('input[name="name"]')
      .props()
      .value = 'Harry Potter';

    component
      .find('input[name="genre"]')
      .props()
      .value = 'Prikol';

    component
      .find('select')
      .props()
      .value = '"5d0e37c81c9d4400009da236"';

    component.find('button').simulate('click');

    component.find('[name]').forEach(inp => {
      expect(inp.props().value).toBeFalsy();
    });
  });
});

