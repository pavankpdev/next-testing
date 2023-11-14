import { render, screen } from "@testing-library/react";

import Band from "@/pages/bands/[bandId]";
import {readFakeData} from "@/__tests__/__mocks__/fakeData";

it("Band component displays correct band information", async () => {
    const {fakeBands} = await readFakeData();
    render(<Band band={fakeBands[0]} error={null} />);

    const heading = screen.getByRole("heading", {
        name: /The Wandering Bunnies/i
    })

    expect(heading).toBeInTheDocument();
})

it("Band component displays correct error message", async () => {
    const {fakeBands} = await readFakeData();
    render(<Band band={null} error={'testing'} />);

    const heading = screen.getByRole("heading", {
        name: /testing/i
    })

    expect(heading).toBeInTheDocument();
})