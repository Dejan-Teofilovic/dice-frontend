import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, styled, Typography } from '@mui/material';
import { FAQ } from '../../utils/constants';

const CustomAccordion = styled(Accordion)`
  background-color: rgba(0, 0, 0, 0);
  color: white;
  border-bottom: 2px solid white;
  .Mui-expanded p {
    color: #A1275D;
  }
  .MuiAccordion-root {
    margin: 0;
  }
`;

const CustomAccordionSummary = styled(AccordionSummary)`

`;

const CustomAccordionDetails = styled(AccordionDetails)`

`;

export default function Faq() {
  return (
    <Container maxWidth="xl">
      <Typography
        fontFamily="'Source Sans Pro', sans-serif"
        fontSize={{ xs: 36, md: 48 }}
        textAlign="center"
        color="white"
      >Frequently Asked Questions</Typography>
      <Box width={{ xs: '100%', md: '70%' }} mt={6}>
        {
          FAQ.map(faqItem => (
            <CustomAccordion key={faqItem.id}>
              <CustomAccordionSummary>
                <Typography fontSize={20}>{faqItem.question}</Typography>
              </CustomAccordionSummary>
              <CustomAccordionDetails>
                <Typography
                  fontFamily="'IBM Plex Mono', monospace"
                  fontSize={16}
                  color="#9DB7BD"
                >{faqItem.answer}</Typography>
              </CustomAccordionDetails>
            </CustomAccordion>
          ))
        }
      </Box>
    </Container>
  );
}