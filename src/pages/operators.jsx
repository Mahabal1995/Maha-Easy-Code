import "@/app/globals.css";

import Navbar from '@/components/NavBar'
import QuestionsAccordion from "@/components/QuestionsAccordion";
import { operators } from "@/data/operators";

import { Grid,  } from "@mui/material";
const Operators = () => {
    return (
        <>
            <Navbar />
            
            
                    <Grid container spacing={1/2} width="80%" m="auto" mt="80px">
                      {operators.map((operator) => {
                        return (
                          <Grid item xs={12}>
                                <QuestionsAccordion question={ operator.question } answer={ operator.answer} />
                          </Grid>
                        );
                      })}
                    </Grid>
                
            

        </>
  )
}

export default Operators