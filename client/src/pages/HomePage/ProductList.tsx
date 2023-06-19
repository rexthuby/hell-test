import React from "react";
import * as Styled from './ProductList.styled'
import {useNavigate} from "react-router-dom";
import {ROUTER_ROUTES} from "../../routerRoutes";
import {ColorfulButton} from "../../components/ColorfulButton";
import {PencilSquareIcon, TrashIcon} from "@heroicons/react/24/solid";
import {getProductList} from "./api/getProductList";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {deleteProduct as deleteProductApi} from './api/deleteProduct'
import moment from "moment";
import toast from "react-hot-toast";


const headerColumnNames = ['id', 'name', 'price', 'created at', 'control']

export const ProductList = () => {

    const {data: productList, isLoading, isError} = useQuery({
        queryKey: ['productList',],
        queryFn: () => {
            return getProductList()
        }
    });

    const navigate = useNavigate()

    const queryClient = useQueryClient();

    const {mutateAsync: deleteProductMutation} = useMutation({
        mutationFn: deleteProductApi,
        onSuccess: () => {
            queryClient.invalidateQueries(['productList'])
        }
    })

    const deleteProduct = async (id: number) => {
        try {
            const result = await deleteProductMutation(id)
            toast.success(result.message)
        } catch (e) {
            toast.error('Delete error')
        }
    }

    if (isLoading) {
        return (
            <Styled.CircleContainer>
                <Styled.LoadingCircle/>
            </Styled.CircleContainer>
        );
    }

    if (isError) {
        return (
            <Styled.ErrorDiv>
                Error fetching data
            </Styled.ErrorDiv>
        );
    }

    if (!productList?.length) {
        return (
            <>
                <hr/>
                <Styled.EmptyDiv> Products are empty</Styled.EmptyDiv>
                <hr className="pb-4"/>
            </>
        );
    }

    return (
        <table className="table-auto w-full">
            <thead className="bg-gray-100">
            <Styled.TableTrHead>
                {headerColumnNames.map((name, key) =>
                    <Styled.TableTh key={key}>
                        {name}
                    </Styled.TableTh>)}
            </Styled.TableTrHead>
            </thead>
            <tbody>
            {productList.map((product) =>
                <Styled.TableTrBody key={product.id}>
                    <Styled.TableTd>
                        {product.id}
                    </Styled.TableTd>
                    <Styled.TableTd>
                        {product.name}
                    </Styled.TableTd>
                    <Styled.TableTd>
                        {product.price}
                    </Styled.TableTd>
                    <Styled.TableTd>
                        {moment(product.createdAt).format('YYYY.MM.DD hh:mm')}
                    </Styled.TableTd>
                    <Styled.TableTd>
                        <div className="flex items-center gap-2">
                            <ColorfulButton onClick={() => navigate(ROUTER_ROUTES.CHANGE + '/' + product.id)}
                                            colorClass="bg-green-400  hover:bg-green-300" paddingClass="p-1.5">
                                    <PencilSquareIcon className="w-4 h-4"/>
                            </ColorfulButton>
                            <ColorfulButton onClick={() => deleteProduct(Number(product.id))}
                                            colorClass="bg-red-400 hover:bg-red-300" paddingClass="p-1.5">
                                            <TrashIcon className="w-4 h-4"/>
                            </ColorfulButton>
                        </div>
                    </Styled.TableTd>
                </Styled.TableTrBody>)}
            </tbody>
        </table>
    )
}