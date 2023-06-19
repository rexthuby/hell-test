import tw from "tailwind-styled-components"

export const Form = tw.form`
    @apply box-border rounded-lg border-2 border-solid border-gray-100 p-12 flex flex-col gap-4
`
export const ErrorDiv = tw.div`
    @apply h-60 bg-gray-100 flex justify-center items-center text-red-400 text-xl text-center
`

export const LoadingCircle = tw.div`
    @apply border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600
`

export const CircleContainer = tw.div`
    @apply h-60 bg-gray-100 flex justify-center items-center
`