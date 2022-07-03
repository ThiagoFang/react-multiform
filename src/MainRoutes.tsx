import { useRoutes } from "react-router-dom";

import { FormStepOne } from "./pages/formStepOne";
import { FormStepTwo } from "./pages/formStepTwo";

export const MainRoutes = () => {
    return useRoutes([
        {path: '/', element: <FormStepOne />},
        {path: '/steptwo', element: <FormStepTwo />} 
    ]);
};