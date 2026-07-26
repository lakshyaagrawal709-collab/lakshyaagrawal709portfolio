import { useState, useEffect } from 'react';

export function useVisitorCount() {
  const [visitorCount, setVisitorCount] = useState(1420);

  useEffect(() => {
    const saved = localStorage.getItem('lakshay_portfolio_views');
    let current = saved ? parseInt(saved, 10) : 1420;
    
    if (!sessionStorage.getItem('lakshay_session_counted')) {
      current += 1;
      localStorage.setItem('lakshay_portfolio_views', current.toString());
      sessionStorage.setItem('lakshay_session_counted', 'true');
    }
    
    setVisitorCount(current);
  }, []);

  return visitorCount;
}
