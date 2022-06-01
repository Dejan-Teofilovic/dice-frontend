import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { COLOR_INFO, COLOR_PRIMARY } from '../utils/constants';

export const PrimaryButton = styled(Button)`
  font-family: sfProRounded;
  background-color: ${COLOR_PRIMARY};
  border-radius: 25px;
  text-transform: none;
  :hover {
    background-color: #871f4d;
  } 
`;

export const TextButton = styled(Button)`
  font-family: sfProRounded;
  color: ${COLOR_INFO};
  text-transform: none;
`;
