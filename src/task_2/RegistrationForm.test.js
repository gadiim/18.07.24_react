// RegistrationForm.test.js (or similar)

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RegistrationForm from './RegistrationForm'; // Replace with your path

describe('RegistrationForm', () => {
  it('resets form data to initial values', () => {
    const initialData = { nickname: '', email: '', gender: '', age: '' };
    const { getByText, getByLabelText, getByTestId } = render(<RegistrationForm />);

    const nicknameInput = getByLabelText('nickname');
    const emailInput = getByLabelText('email');
    const maleRadio = getByTestId('male-radio');
    const ageInput = getByLabelText('age');

    fireEvent.change(nicknameInput, { target: { value: 'test_nickname' } });
    fireEvent.change(emailInput, { target: { value: 'test@email.com' } });
    fireEvent.click(maleRadio);
    fireEvent.change(ageInput, { target: { value: '25' } });

    // Simulate clicking the reset button
    const resetButton = getByTestId('reset-button'); // Add a data-testid attribute to your button
    fireEvent.click(resetButton);

    // Assert that form data is reset
    expect(getByLabelText('nickname').value).toBe(initialData.nickname);
    expect(getByLabelText('email').value).toBe(initialData.email);
    expect(maleRadio.checked).toBeFalsy(); // Check if not checked
    expect(getByLabelText('age').value).toBe(initialData.age);
  });
});
