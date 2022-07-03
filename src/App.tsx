import { MainRoutes } from "./MainRoutes";
import { FormProvider } from './contexts/FormContext'

export const App = () => {
  return(
    <FormProvider>
      <MainRoutes />
    </FormProvider>
  );
};

export default App 