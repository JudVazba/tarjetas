import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';


export default function HoverRating() {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'flex-end',
        
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        alignItems={"flex-end"}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" margin="auto" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}></Box>
      )}
    </Box>
  );
}
