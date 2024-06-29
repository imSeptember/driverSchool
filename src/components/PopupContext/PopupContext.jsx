import { createContext, useState, useContext } from 'react';

const PopupContext = createContext();

export const usePopup = () => useContext(PopupContext);

export const PopupProvider = ({ children }) => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [isNavVisible, setIsNavVisible] = useState(false);

    const openPopup = () => setIsPopupVisible(true);
    const closePopup = () => setIsPopupVisible(false);

    const openNav = () => setIsNavVisible(true);
    const closeNav = () => setIsNavVisible(false);

    return (
        <PopupContext.Provider
            value={{
                isPopupVisible,
                openPopup,
                closePopup,
                isNavVisible,
                openNav,
                closeNav,
            }}
        >
            {children}
        </PopupContext.Provider>
    );
};
