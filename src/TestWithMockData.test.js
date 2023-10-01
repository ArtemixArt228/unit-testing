import { render, screen } from '@testing-library/react';
import TestWithMockData, {mockData} from "./TestWithMockData";

test("List renders successfully", () => {
    render(<TestWithMockData data={mockData} />)
    expect(screen.getByText(/fletcher/i)).toBeInTheDocument();
})
