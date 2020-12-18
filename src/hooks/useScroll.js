import { useEffect } from 'react';

function useScroll(value) {
  useEffect(() => {
    window.scrollTo(0, value);
  }, [value]);
}

export default useScroll;
