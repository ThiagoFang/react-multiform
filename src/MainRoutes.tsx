import { useRoutes } from "react-router-dom";

import { FormStepOne } from "./pages/formStepOne";
import { FormStepTwo } from "./pages/formStepTwo";
import { FormStepThree } from "./pages/formStepThree";
import { UserInfo } from "./pages/userInfo";

export const MainRoutes = () => {
    return useRoutes([
        {path: '/', element: <FormStepOne />},
        {path: '/steptwo', element: <FormStepTwo />} ,
        {path: '/stepthree', element: <FormStepThree />},
        {path: '/userinfo', element: <UserInfo />}
    ]);
};