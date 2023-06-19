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