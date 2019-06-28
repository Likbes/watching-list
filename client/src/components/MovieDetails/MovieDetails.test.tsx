import React from 'react';
import { shallow } from 'enzyme';
import { MovieDetails } from './MovieDetails';

const movie = {
  genre: "Crime",
  id: "5d0e37471c9d4400009da234",
  name: "Pilp fiction",
  director: {
    name: 'Quentim Tarantino',
    age: 55,
    id: '5d0e36581c9d4400009da231',
  }
}

describe('<NovieDetails />', () => {
  it('display correct movie by id', () => {
    const { genre, name, director } = movie;
    const component = shallow(
      <MovieDetails
        data={{ movie, loading: false }}
        match={{
          params: {
            id: '5d0e37471c9d4400009da234',
          },
        }}
      />
    );

    expect(component.find('.genre').contains(genre));
    expect(component.find('.name').contains(name));
    expect(component.find('.director').contains(director.name))
  });

  it('render workable home button', () => {
    const component = shallow(
      <MovieDetails
        data={{ movie, loading: false }}
        match={{
          params: {
            id: '5d0e37471c9d4400009da234',
          },
        }}
      />
    );

    expect(component.find('.link').contains('Home'));
  });
});
