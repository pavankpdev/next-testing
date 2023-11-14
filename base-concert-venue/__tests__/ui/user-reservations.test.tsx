import { render, screen } from "@testing-library/react";

import { UserReservations } from "@/components/user/UserReservations";

test("Displays reservations and 'purchase more' button when reservations exist", async () => {
    render(<UserReservations userId={1} />);

    const purchaseButton = await screen.findByRole("button", {
        name: /purchase more tickets/i,
    });
    expect(purchaseButton).toBeInTheDocument();
});

test("Displays no reservations and 'purchase' button when reservations exist", async () => {
    render(<UserReservations userId={0} />);

    const purchaseButton = await screen.findByRole("button", {
        name: /purchase tickets/i,
    });

    const yourTicketsHeading = screen.queryByRole("heading", {
        name: /your tickets/i,
    })

    expect(purchaseButton).toBeInTheDocument();
    expect(yourTicketsHeading).not.toBeInTheDocument();
});

