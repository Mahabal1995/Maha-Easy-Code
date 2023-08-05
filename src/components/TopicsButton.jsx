import {
  Button,
} from "@mui/material";
import Link from 'next/link';


const TopicsButton = (props) => {

    const linkText = props.topic.routeString;
    console.log(linkText);
  return (
    
      <Link href={`/${linkText}`}>
        <Button variant="text">
          {props.topic.value}
        </Button>
        </Link>
  );
};

export default TopicsButton;