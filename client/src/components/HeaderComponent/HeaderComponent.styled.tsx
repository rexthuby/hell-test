import tw from "tailwind-styled-components"

export const NavContainer = tw.div`
    @apply max-w-screen-xl py-4 px-4 lg:px-6 lg:m-auto flex justify-center items-center font-bold text-gray-400    
`

export const HeaderList = tw.ul`
    @apply flex justify-center items-center gap-2
`

export const ListItem = tw.li`
    @apply hover:text-white border-b border-b-transparent hover:border-b-white ease-in duration-150 p-2 text-sm
`
