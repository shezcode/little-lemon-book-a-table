import { render, screen, fireEvent} from '@testing-library/react';
import Hero from './components/Hero';
import BookingPage from './components/BookingPage';
import BookingForm from './components/BookingForm';


describe('all unit tests', () => {
  test('renders title', () => {
    render(<Hero />);
    const linkElement = screen.getByText("Little Lemon");
    expect(linkElement).toBeInTheDocument();
  });

  test('functions work', () => {
    render(<BookingPage />);
    render(<BookingForm />);
    const handleSubmit = jest.fn();
    const date = screen.getByLabelText('Choose date');
    fireEvent.change(date, {target: {value: '2023-01-12'}});

    const submitButton = screen.getByRole('button');
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalled();
})
})
