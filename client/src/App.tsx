import React from 'react';
import {Route, Routes} from 'react-router-dom'
import {HomePage} from './pages/HomePage'
import {CreatePage} from './pages/CreatePage'
import {ChangePage} from './pages/ChangePage'
import {NotFound} from "./pages/NotFound";
import {ROUTER_ROUTES} from "./routerRoutes";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Toaster} from 'react-hot-toast';

const queryClient = new QueryClient();

export const App = () => (
    <QueryClientProvider client={queryClient}>
        <Toaster position="bottom-left" reverseOrder={false}/>
        <Routes>
            <Route path={ROUTER_ROUTES.HOME} element={<HomePage/>}/>
            <Route path={ROUTER_ROUTES.CREATE} element={<CreatePage/>}/>
            <Route path={ROUTER_ROUTES.CHANGE + '/:id'} element={<ChangePage/>}/>
            <Route path={ROUTER_ROUTES.NOT_FOUND} element={<NotFound/>}/>
        </Routes>
    </QueryClientProvider>
);