import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, styled, Typography } from '@mui/material';
import { FAQ, varFadeInUp } from '../../utils/constants';
import MotionDiv from '../../components/MotionDiv';

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
            <MotionDiv key={faqItem.id} variants={varFadeInUp}>
              <CustomAccordion>
                <AccordionSummary>
                  <Typography fontSize={20}>{faqItem.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    fontFamily="'IBM Plex Mono', monospace"
                    fontSize={16}
                    color="#9DB7BD"
                  >{faqItem.answer}</Typography>
                </AccordionDetails>
              </CustomAccordion>
            </MotionDiv>
          ))
        }
      </Box>
    </Container>
  );
}