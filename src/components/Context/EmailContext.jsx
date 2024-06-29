import React, { createContext, useState, useContext } from 'react';

const EmailContext = createContext();

export const EmailProvider = ({ children }) => {
    const [isEmailSent, setIsEmailSent] = useState(false);

    return (
        <EmailContext.Provider value={{ isEmailSent, setIsEmailSent }}>
            {children}
        </EmailContext.Provider>
    );
};

export const useEmail = () => useContext(EmailContext);
