import React from 'react';
import {HeaderComponent} from "../../components/HeaderComponent";
import {MainWrap} from "../../components/MainWrap";
import {ProductList} from "./ProductList";


export const HomePage = () => {

    return (
        <>
            <HeaderComponent/>
            <MainWrap>
                <div className="text-xl py-4">
                    Product list
                </div>
                <ProductList/>
            </MainWrap>
        </>
    );
}