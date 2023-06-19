import React from 'react';
import {HeaderComponent} from "../../components/HeaderComponent";
import {MainWrap} from "../../components/MainWrap";
import {CreateForm} from "./CreateForm";

export const CreatePage = () => (
    <>
        <HeaderComponent/>
        <MainWrap>
            <div className="text-xl py-4">
                Create page
            </div>
            <div className="py-8">
                <CreateForm/>
            </div>
        </MainWrap>
    </>
);
