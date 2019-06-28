import React from 'react';
import { shallow } from 'enzyme';
import { MoviesList } from './MoviesList';

const data = {
  movies: [
    {
      genre: "Crime",
      id: "5d0e37471c9d4400009da234",
      name: "Pilp fiction"
    },
  ],
};

describe('<MoviesList />', () => {
  it('display correct data', () => {
    const component = shallow(<MoviesList data={data} />);
    const Link = component.find('.link');

    expect(Link.prop('to')).toEqual(`/${data.movies[0].id}`)
    expect(Link.getElement().props.children)
      .toContain(`${data.movies[0].name}`);
  });
});


