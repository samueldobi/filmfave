import { createContext, useContext, useState, useCallback } from 'react';

const MediaModalContext = createContext(null);

export const MediaModalProvider = ({ children }) => {
  const [media, setMedia] = useState(null);
  const [type, setType] = useState(null);

  const openMedia = useCallback((id, mediaType) => {
    setMedia(id);
    setType(mediaType);
  }, []);

  const closeMedia = useCallback(() => {
    setMedia(null);
    setType(null);
  }, []);

  return (
    <MediaModalContext.Provider value={{ openMedia, closeMedia, mediaId: media, mediaType: type }}>
      {children}
    </MediaModalContext.Provider>
  );
};

export const useMediaModal = () => {
  const ctx = useContext(MediaModalContext);
  if (!ctx) throw new Error('useMediaModal must be used within MediaModalProvider');
  return ctx;
};
