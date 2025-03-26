import { useState, useEffect } from 'react';

export default function Timer() {
      const [ isLoading, setIsLoading ] = useState(false);
     useEffect(() => {
    
        const timeoutId =   setTimeout(() => {
                setIsLoading(true);
            }, 3000);

            return () => clearTimeout(timeoutId);

    
        }, [isLoading]);
  return (
    isLoading
  )
}
