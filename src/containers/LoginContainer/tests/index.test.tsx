import {
  fireEvent,
  waitFor,
} from '@testing-library/react';
import React from 'react';
import { timeout } from '../../../utils';
import routeConstants from '../../../utils/routeConstants';
import {
  renderProvider,
} from '../../../utils/testUtils';
import LoginContainer from '../index';

describe('<LoginContainer /> tests', () => {
  it('should render and match the snapshot', () => {
    const {baseElement} = renderProvider(<LoginContainer />)
    expect(baseElement).toMatchSnapshot();
  });

  it('should show validation error if username or password field is empty', () => {
    const screen = renderProvider(<LoginContainer />)
    const signInButton = screen.getByTestId("sign-in-button")
    fireEvent.click(signInButton);
    const errorMessage = screen.getByText("Please enter valid username");
    expect(errorMessage).toBeDefined();
  });

  it('should show validation error if username or password is wrong', async () => {
    const screen = renderProvider(<LoginContainer />)
    const signInButton = screen.getByTestId("sign-in-button")
    const usernameInput = screen.getByTestId("username-input");
    const passwordInput = screen.getByTestId("password-input");
    fireEvent.change(usernameInput, { target: { value: "dummy" } })
    fireEvent.change(passwordInput, { target: { value: "2022" } })
    fireEvent.click(signInButton);
    await timeout(2000);
    await waitFor(() => {
      const errorMessage = screen.getByText("Wrong password or username, please try again");
      expect(errorMessage).toBeDefined();
    })
  });

  it('should redirect user to dashboard if username and password is correct', async () => {
    const screen = renderProvider(<LoginContainer />)
    const signInButton = screen.getByTestId("sign-in-button")
    const usernameInput = screen.getByTestId("username-input");
    const passwordInput = screen.getByTestId("password-input");
    fireEvent.change(usernameInput, { target: { value: "upworkTest" } })
    fireEvent.change(passwordInput, { target: { value: "2022" } })
    fireEvent.click(signInButton);
    await timeout(2000);
    expect(window.location.pathname).toBe(routeConstants.dashboard.route);
  });
});
