import React from 'react';
import {HomeIcon} from '@heroicons/react/24/solid'
import * as Styled from './NorFound.styled'
import {ROUTER_ROUTES} from "../../routerRoutes";

export const NotFound = () => (
    <Styled.Container>
        <Styled.LinkContainer>
            <Styled.StatusCode>404</Styled.StatusCode>
            <Styled.StatusMessage>Page Not Found</Styled.StatusMessage>
            <Styled.ReactLink to={ROUTER_ROUTES.HOME} title="Return Home">
                <HomeIcon className="h-5 w-5"></HomeIcon>
                <span>Return Home</span>
            </Styled.ReactLink>
        </Styled.LinkContainer>
    </Styled.Container>
);
