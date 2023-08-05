import "@/app/globals.css";

import Navbar from '@/components/NavBar'
import QuestionsAccordion from "@/components/QuestionsAccordion";
import { controlStatements } from "@/data/control-statements";

import { Grid,  } from "@mui/material";
const ControlStatements = () => {
    return (
        <>
            <Navbar />
            
            
                    <Grid container spacing={1/2} width="80%" m="auto" mt="80px">
                      {controlStatements.map((question) => {
                        return (
                          <Grid item xs={12}>
                                <QuestionsAccordion question={ question.question } answer={ question.answer} />
                          </Grid>
                        );
                      })}
                    </Grid>
                
            

        </>
  )
}

export default ControlStatements