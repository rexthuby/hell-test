import tw from "tailwind-styled-components"
import {Link} from "react-router-dom"

export const Container = tw.div`
  @apply bg-gray-200 w-full px-16 md: px-0 h-screen flex items-center justify-center
`;

export const LinkContainer = tw.div`
    @apply bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8
    lg:px-24 py-8 rounded-lg shadow-2xl
`

export const ReactLink = tw(Link)`
  @apply block focus:outline-0 active:bg-blue-800 flex items-center space-x-2 bg-blue-600
  hover:bg-blue-700 text-gray-100 px-4 py-2 mt-6 rounded transition duration-150
`

export const StatusCode = tw.p`
  @apply text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-gray-300
`
export const StatusMessage = tw.p`
  @apply text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4
`