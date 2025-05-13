import { fireEvent, render ,screen} from "@testing-library/react"
import Header from "../Header"
import "@testing-library/jest-dom";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/AppStore";

it("should render header component with login button" , () => {

    render(<BrowserRouter>
    <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>);

    const loginBtn = screen.getByRole("button" , {name:"Login"});
    //const loginBtn = screen.getByText("Login")

    expect(loginBtn).toBeInTheDocument();
});

it("should render header component with Cart items 0" , () => {

    render(<BrowserRouter>
    <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>);

    
   // const cartItem = screen.getByText("Cart (0)") // can also pass regex example below

   const cartItem = screen.getByText(/Cart/);

    expect(cartItem).toBeInTheDocument();
});

it("should render the Header component and change login button to logout on Click" , () => {

    render(<BrowserRouter>
    <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>);

    
const loginBtn = screen.getByRole("button" , {name:"Login"});

    fireEvent.click(loginBtn);

    const logoutBtn = screen.getByRole("button" , {name:"Logout"});


    expect(logoutBtn).toBeInTheDocument();
});