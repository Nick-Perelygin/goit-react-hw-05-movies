import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(NavLink)`
  color: black;
  &.active {
    color: red;
  }
`;

export default function Layout () {
    return (
        <div>
            <nav style={{marginBottom: '100px'}}>
                <StyledLink to="/" style={{marginRight: '200px'}}>Home</StyledLink>
                <StyledLink to='movies'>Movies</StyledLink>
            </nav>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}