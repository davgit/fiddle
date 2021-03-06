import { shallow } from 'enzyme';
import * as React from 'react';

import { Commands } from '../../../src/renderer/components/commands';

jest.mock('../../../src/renderer/components/runner', () => ({
  Runner: 'runner'
}));

jest.mock('../../../src/renderer/components/version-chooser', () => ({
  VersionChooser: 'version-chooser'
}));

jest.mock('../../../src/renderer/components/address-bar', () => ({
  AddressBar: 'address-bar'
}));

jest.mock('../../../src/renderer/components/publish-button', () => ({
  PublishButton: 'publish-button'
}));

describe('Commands component', () => {
  beforeEach(() => {
    this.store = {
      gistId: null
    };
  });

  it('renders', () => {
    const wrapper = shallow(<Commands appState={this.store} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('opens the console on console click', () => {
    this.store.toggleConsole = jest.fn();

    const wrapper = shallow(<Commands appState={this.store} />);
    wrapper.find('button').simulate('click');
    expect(this.store.toggleConsole).toHaveBeenCalled();
  });
});
