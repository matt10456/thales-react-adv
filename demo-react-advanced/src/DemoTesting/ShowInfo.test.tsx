import { render, cleanup, fireEvent, RenderResult } 
  from '@testing-library/react';

import ShowInfo from './ShowInfo';

describe('Show Information Component', () => {
  let wrapper: RenderResult

  beforeEach(() => {
    wrapper = render(<ShowInfo />)
  })

  test('Should modify the name', () => {
    const nameInput = wrapper.container.querySelector('input[name="name"]') as HTMLInputElement
    fireEvent.change(nameInput, { target: { value: 'Chris' } })
    expect(nameInput.value).toBe('Chris')
  })

  test('Should show the personal information when user clicks on the button', () => {
    const button = wrapper.container.querySelector('button')
    if (button) fireEvent.click(button)
    const personalInformation = wrapper.container.querySelector('.personalInformatio')
    expect(personalInformation).toBeInTheDocument()

  })

})