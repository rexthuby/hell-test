import tw from "tailwind-styled-components"

export const TableTrHead = tw.tr`
  @apply border-t-2 border-gray-400 p-2 text-left
`

export const TableTh = tw.th`
  @apply text-left text-gray-700 capitalize p-2
`

export const TableTd = tw.td`
 @apply p-2 text-left border-gray-400 sm:flex-1
`

export const TableTrBody = tw.tr`
  @apply border-collapse border bg-gray-50 hover:bg-gray-100
`

export const EmptyDiv = tw.div`
    @apply text-xl text-center bg-gray-100 py-8 my-4
`
export const ErrorDiv = tw.div`
    @apply text-red-400 h-20 text-xl text-center
`

export const LoadingCircle = tw.div`
    @apply border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600
`

export const CircleContainer = tw.div`
    @apply h-60 bg-gray-100 flex justify-center items-center
`