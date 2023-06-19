import * as Yup from 'yup'

export const createScheme = Yup.object({
    name: Yup.string().min(3, 'Min 3 chars').max(100, 'Max 100 chars').required('Name is required'),
    price: Yup.number().min(0, 'Min value: 0').max(999999, 'Max value: 999999').required('Price is required'),
});
