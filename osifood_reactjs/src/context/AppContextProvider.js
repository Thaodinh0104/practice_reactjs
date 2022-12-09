import { createContext, useContext, useState } from "react";

export const OverlayActive = createContext();

export const AppContextProvider = ({ children }) => {
  const [overlayShow, setOverlayShow] = useState(false);

  const handleOverlayShow = (data) => {
    setOverlayShow(data);
  };

  return (
    <OverlayActive.Provider
      value={{
        overlayShow,
        handleOverlayShow: handleOverlayShow,
      }}
    >
      {children}
    </OverlayActive.Provider>
  );
};
export default function OverlayActiveContact() {
  return useContext(OverlayActive);
}
