import { useContext } from 'react';
import { OrderDialogContext } from '../contexts/OrderDialogContext';

const useOrderDialog = () => useContext(OrderDialogContext);

export default useOrderDialog;