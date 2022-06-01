import React from 'react';
import { 
  Accordion, 
  AccordionDetails, 
  AccordionSummary, 
  Box, 
  Container, 
  Stack, 
  styled, 
  Typography 
} from '@mui/material';
import { FAQ, varFadeInUp, FONT_IBM_PLEX_SERIF } from '../../utils/constants';
import MotionDiv from '../../components/MotionDiv';

const CustomAccordion = styled(Accordion)({
  boxShadow: 'none',
  backgroundColor: 'rgba(0, 0, 0, 0)',
  borderBottom: '2px solid white',
  color: 'white',
  borderRadius: 0,
  '& .Mui-expanded p': {
    color: '#A1275D'
  },
  '&.MuiAccordion-root': {
    m: 0
  },
  '&.MuiPaper-root': {
    borderRadius: 0
  }
});

export default function Faq() {
  return (
    <Container maxWidth="xl">
      <Typography
        fontFamily="sfProRounded"
        fontSize={{ xs: 36, md: 48 }}
        textAlign="center"
        color="white"
      >Frequently Asked Questions</Typography>
      <Stack direction="row" justifyContent="center">
        <Box width={{ xs: '100%', md: '70%' }} mt={6}>
          {
            FAQ.map(faqItem => (
              <MotionDiv key={faqItem.id} variants={varFadeInUp}>
                <CustomAccordion>
                  <AccordionSummary>
                    <Typography fontFamily="sfProRounded" fontSize={20}>{faqItem.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      fontFamily={FONT_IBM_PLEX_SERIF}
                      fontSize={16}
                    >{faqItem.answer}</Typography>
                  </AccordionDetails>
                </CustomAccordion>
              </MotionDiv>
            ))
          }
        </Box>
      </Stack>
    </Container>
  );
}