import React from "react";
import Link from "next/link";
import { Grid, Card, CardContent } from "@mui/material";
import TopicsButton from "./TopicsButton";
import { topics } from "@/data/topics";

const TopicsCard = () => {
  return (
    <Grid container spacing={2} width="80%" m="auto" mt="80px">
      {topics.map((topic) => {
        return (
          <Grid item xs={6}>
            <Card>
              <CardContent>
                <TopicsButton topic={topic} />
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default TopicsCard;
