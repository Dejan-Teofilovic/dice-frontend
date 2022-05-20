import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const PrimaryButton = styled(Button)`
  background-color: #A1275D;
  border-radius: 25px;
  text-transform: capitalize;
  :hover {
    background-color: #871f4d;
  } 
`;

export const TextButton = styled(Button)`
  color: #9DB7BD;
  text-transform: capitalize;
`;
