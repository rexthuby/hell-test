import React, {ReactNode} from 'react';

export const MainWrap = ({children}: { children: ReactNode }) => (
    <div className="max-w-screen-xl lg:m-auto shadow-md px-4">
        {children}
    </div>
);
