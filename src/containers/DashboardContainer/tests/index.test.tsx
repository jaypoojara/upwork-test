import React from 'react';
import {
  renderProvider,
} from '../../../utils/testUtils';
import DashboardContainer from '../index';

jest.mock('react-apexcharts', () => {
  return {
    __esModule: true,
    default: () => {
      return <div />
    },
  }
})


describe('<DashboardContainer /> tests', () => {
  it('should render and match the snapshot', () => {
    const {baseElement} = renderProvider(<DashboardContainer />)
    expect(baseElement).toMatchSnapshot();
  });
});
