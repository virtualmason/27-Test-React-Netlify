import React from 'react';
import renderer from 'react-test-renderer';
import Counter from '../components/counter/counter.js';

// describe('<Counter/> (Enzyme Test)', () => {
//   it('is alive at application start', () => {
//     let app = mount(<Counter />);
//     expect(app.find('.count').text()).toBe('0');
//   });

//   it('can count up', () => {
//     let app = mount(<Counter />);
//     app.find('.up').simulate('click');
//     expect(app.state('count')).toEqual(1);
//     app.find('.up').simulate('click');
//     expect(app.state('count')).toEqual(2);
//   });

//   it('can count down', () => {
//     let app = mount(<Counter />);
//     app.find('.down').simulate('click');
//     expect(app.state('count')).toEqual(-1);
//     app.find('.down').simulate('click');
//     expect(app.state('count')).toEqual(-2);
//   });

//   it('visually displays proper polarity and value on the count element', () => {
//     let app = mount(<Counter />);
//     expect(app.find('.count.negative').exists()).toBeFalsy();
//     expect(app.find('.count.positive').exists()).toBeFalsy();
//     // Go to 1
//     app.find('.up').simulate('click');
//     expect(app.find('.count.positive').exists()).toBeTruthy();
//     expect(app.find('.count').text()).toBe('1');

//     // Down to zero
//     app.find('.down').simulate('click');
//     expect(app.find('.count').text()).toBe('0');
//     expect(app.find('.count.negative').exists()).toBeFalsy();
//     expect(app.find('.count.positive').exists()).toBeFalsy();

//     // Down to -1
//     app.find('.down').simulate('click');
//     expect(app.find('.count.negative').exists()).toBeTruthy();
//     expect(app.find('.count').text()).toBe('-1');
//   });
// });

describe('<Counter/> Core Component (Snapshot Test)', () => {
  
  it('increments count by 1 when the increment button is clicked', () => {
    
    const wrapper = shallow(< Counter />);
    expect(wrapper.state('count')).toEqual(0);
    wrapper.find('a.up').simulate('click');
    expect(wrapper.state('count')).toBe(1);
  });
  it('decrements count by 1 when the increment button is clicked', () => {
    
    const wrapper = shallow(< Counter />);
    expect(wrapper.state('count')).toEqual(0);
    wrapper.find('a.down').simulate('click');
    expect(wrapper.state('count')).toBe(-1);
  })
  it('state is being transfered to the dom', () => {
    
    const wrapper = mount(< Counter />);
    expect(wrapper.find('a.down').text()).toEqual('-');
  })
  it('dom is not changing', () => {
    
    const wrapper = mount(< Counter />);
    expect(wrapper).toMatchSnapshot();
  })
});