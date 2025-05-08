import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

interface ClientOnlyAnimatePresenceProps {
  children: React.ReactNode;
}

const ClientOnlyAnimatePresence: React.FC<ClientOnlyAnimatePresenceProps> = ({ children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? <AnimatePresence mode="wait">{children}</AnimatePresence> : <>{children}</>;
};

export default ClientOnlyAnimatePresence;