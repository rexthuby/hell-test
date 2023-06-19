import React from 'react';
import {Link} from "react-router-dom";
import {ROUTER_ROUTES} from "../../routerRoutes";
import {HeaderList, ListItem, NavContainer} from "./HeaderComponent.styled";

const headerRoutes = [
    {
        to: ROUTER_ROUTES.HOME,
        name: 'Home'
    },
    {
        to: ROUTER_ROUTES.CREATE,
        name: 'Create'
    },
]

export const HeaderComponent = () => (
    <header className="bg-black">
        <NavContainer>
            <nav>
                <HeaderList>
                    {headerRoutes.map((route, key) =>
                            <Link to={route.to} key={key}>
                                <ListItem>
                                    {route.name}
                                </ListItem>
                            </Link>)}
                </HeaderList>
            </nav>
        </NavContainer>
    </header>
);
