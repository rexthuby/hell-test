import React, {useEffect} from 'react';
import {HeaderComponent} from "../../components/HeaderComponent";
import {useNavigate, useParams} from "react-router-dom";
import {ChangeForm} from "./ChangeForm.component";
import {ROUTER_ROUTES} from "../../routerRoutes";
import {MainWrap} from '../../components/MainWrap'


export const ChangePage = () => {
    const {id} = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        if (!id || !Number(id)) {
            navigate(ROUTER_ROUTES.NOT_FOUND)
        }
    }, [id, navigate])

    return (
        <>
            <HeaderComponent/>
            <MainWrap>
                <div className="text-xl py-4">
                    Change page
                </div>
                {id ? (<div className="py-8">
                            <ChangeForm id={Number(id)}/>
                    </div>) :
                    (<div className="text-red-400 h-20 text-xl text-center">
                        Load form error
                    </div>)}
            </MainWrap>
        </>
    );
};
