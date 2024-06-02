import { useLocation } from 'react-router-dom';

const useActiveLink = () => {
    const location = useLocation();
    return location.pathname;
};

export default useActiveLink;