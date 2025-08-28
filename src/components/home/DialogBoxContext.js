import { createContext, useState } from "react";

const DialogBoxContext = createContext("");

function DialogBoxContextProvider({ children }) {
    const [dialogBoxHidden, setDialogBoxHidden] = useState(false);
    
    return (
    <DialogBoxContext.Provider value={{dialogBoxHidden, setDialogBoxHidden}}>
        {children}
    </DialogBoxContext.Provider>
    );
};

export { DialogBoxContext, DialogBoxContextProvider };