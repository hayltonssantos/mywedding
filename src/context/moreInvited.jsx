import React, { createContext, useContext, useState } from 'react';

const MoreInvitedContext = createContext();

export const useMoreInvited = () => useContext(MoreInvitedContext);

export const MoreInvitedProvider = ({ children }) => {
  const [guests, setGuests] = useState([{ fullName: '' }]);
  
 const [moreInvitedBtn, setMoreInvitedBtn] = useState(false)

  return (
    <MoreInvitedContext.Provider value={{ guests, setGuests, moreInvitedBtn,setMoreInvitedBtn }}>
      {children}
    </MoreInvitedContext.Provider>
  );
};
