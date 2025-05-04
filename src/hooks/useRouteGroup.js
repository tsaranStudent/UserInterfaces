import { useLocation } from 'react-router-dom';
import { allRoutes } from '../routes/navRoutes';

export const useRouteGroup = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    for (const [group, routes] of Object.entries(allRoutes)) {
        if (routes.includes(currentPath)) {
            return group;
        }
    }

    return null;
};