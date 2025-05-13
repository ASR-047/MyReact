import { render,screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

test("this test should load Contact component ", ()=>{

    render(<ContactUs/>);

    const heading = screen.getByRole("heading");
    
    expect(heading).toBeInTheDocument();
    

});

it("should load the paragraph", () =>{

    render(<ContactUs/>);

    const paragraph = screen.getByRole("paragraph");

    expect(paragraph).toBeInTheDocument();
})