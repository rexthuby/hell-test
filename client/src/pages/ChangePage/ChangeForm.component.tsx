import React, {useState} from "react";
import {useFormik} from "formik";
import {createScheme} from '../../entities/product/validateRules'
import {ColorfulButton} from "../../components/ColorfulButton";
import {DefaultInput} from "../../components/DefaultInput";
import {changeProduct} from "./api/changeProduct";
import {useQuery} from "@tanstack/react-query";
import {getProduct} from "./api/getProduct";
import toast from "react-hot-toast";
import *as Styled from "./ChangeForm.styled";

interface FormikI {
    name: string;
    price: number | string;
}

export const ChangeForm = ({id}: { id: number }) => {

    const [isSaveAvailable, setIsSaveAvailable] = useState(true)

    const {isLoading, isError} = useQuery({
        queryKey: ['productList',],
        queryFn: async () => {
            console.log('get products data')
            const product = await getProduct(id)
            await formik.setFieldValue('name', product.name)
            await formik.setFieldValue('price', product.price)
            return product
        },
    });

    const formik = useFormik<FormikI>({
        initialValues: {
            name:'',
            price:''
        },
        validationSchema: createScheme,
        onSubmit: async (formData) => {
            try {
                setIsSaveAvailable(false)
                await changeProduct(id, {...formData, price: Number(formData.price)})
                toast.success('Change successful')
                setIsSaveAvailable(true)
            } catch (e) {
                toast.error('Change error')
            }
        },
        validateOnChange: false
    })

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

    return (
        <Styled.Form onSubmit={formik.handleSubmit}>
            <DefaultInput onChange={formik.handleChange} value={formik.values.name}
                          name="name" error={formik.errors.name} label="Name"/>
            <DefaultInput onChange={formik.handleChange} value={formik.values.price}
                          name="price" error={formik.errors.price} label="Price" inputMode='numeric' type='number'/>
            <div>
                <ColorfulButton type='submit' colorClass="bg-blue-400 hover:bg-blue-300" paddingClass="p-2"
                                isDisable={!isSaveAvailable}>
                    Save
                </ColorfulButton>
            </div>
        </Styled.Form>
    )
}
