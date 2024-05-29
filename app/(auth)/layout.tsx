import React from "react";

export default function SigninLayout({children} : {
    children: React.ReactNode
}){
    return<div>
        <div className="border-b p-1 text-center">
            Exclusively access if you join now to get 20% off
        </div>
        {children}
    </div>  
    ;
}