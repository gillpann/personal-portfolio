"use client";
import { createContext, useContext, useState } from "react";
import LoadingScreen from "./LoadingScreen";

const LoadingStateContext = createContext();

export const useLoadingState = () => {
    const context = useContext(LoadingStateContext);
    if (!context) {
        throw new Error("useLoadingState must be used within LoadingStateProvider");
    }
    return context;
};

export const LoadingStateProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);

    const showLoading = () => setIsLoading(true);
    const hideLoading = () => setIsLoading(false);

    return (
        <LoadingStateContext.Provider value={{ showLoading, hideLoading }}>
        {isLoading && <LoadingScreen onLoadingComplete={hideLoading} />}
        {children}
        </LoadingStateContext.Provider>
    );
};
