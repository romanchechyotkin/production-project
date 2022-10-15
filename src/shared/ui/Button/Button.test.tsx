import {render, screen} from "@testing-library/react";
import {Button} from "./Button";

describe("button test", () => {
    test("render button", () => {
        render(<Button>TEST</Button>);
        expect(screen.getAllByText("TEST")).toBeInTheDocument();
    });
});
