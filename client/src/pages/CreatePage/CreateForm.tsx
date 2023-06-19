import React, {useState} from "react";
import {useFormik} from "formik";
import {createScheme} from '../../entities/product/validateRules'
import {ColorfulButton} from "../../components/ColorfulButton";
import {DefaultInput} from "../../components/DefaultInput";
import {createProduct} from "./api/createProduct";
import toast from "react-hot-toast";

interface FormikI {
    name: string;
    price: number | string;
}

export const CreateForm = () => {

    const [isSaveAvailable, setIsSaveAvailable] = useState(true)

    const formik = useFormik<FormikI>({
        initialValues: {
            name: '',
            price: '',
        },
        validationSchema: createScheme,
        onSubmit: async (formData) => {
            try {
                setIsSaveAvailable(false)
                await createProduct({...formData, price: Number(formData.price)})
                toast.success('Create successful')
                formik.setFieldValue('name', '')
                formik.setFieldValue('price', '')
                setIsSaveAvailable(true)
            } catch (e){
                toast.error('Create error')
            }
        },
        validateOnChange: false
    })

    return (
        <form className="box-border rounded-lg border-2 border-solid border-gray-100 p-12 flex flex-col gap-4"
              onSubmit={formik.handleSubmit}>
            <DefaultInput onChange={formik.handleChange} value={formik.values.name}
                          name="name" error={formik.errors.name} label="Name"/>
            <DefaultInput onChange={formik.handleChange} value={formik.values.price}
                          name="price" error={formik.errors.price} label="Price" inputMode='numeric' type='number'/>
            <div>
                <ColorfulButton type='submit' colorClass="bg-blue-400 hover:bg-blue-300" paddingClass="p-2"
                                isDisable={!isSaveAvailable}>
                    <span>Save</span>
                </ColorfulButton>
            </div>
        </form>
    )
}
