import React from 'react'
import S1 from './S1'

export const File = React.createContext();

const Context = () => {
  const val = {
    post: [],
    id: 0,
    check: 'yes',
    long: 'data of vini',
    Fresh: true,
    Noitem: 0,
  };
  return (
    <div>
      <File.Provider value={val}>
        <S1 />
      </File.Provider>
    </div>
  );
}

export default Context