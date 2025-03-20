import { useState, useEffect } from 'react';

export default function Timer() {
      const [ isLoading, setIsLoading ] = useState(true);
     useEffect(() => {
    
        const timeoutId =   setTimeout(() => {
                setIsLoading(false);
            }, 5000);

            return () => clearTimeout(timeoutId);

    
        }, [isLoading]);
  return (
    isLoading
  )
}
