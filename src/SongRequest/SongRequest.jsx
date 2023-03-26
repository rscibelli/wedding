import * as React from 'react';
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function SongRequest({modalState, toggleModal}) {

    const cardContent = (
        <React.Fragment>
          <CardContent>
            Rob
          </CardContent>
          <CardActions>
            <Button size="small">Submit</Button>
          </CardActions>
        </React.Fragment>
      );

    return (
        <Modal open={modalState} onClose={toggleModal}>
            <Box class="theBox">
                <Card variant="outlined">{cardContent}</Card>
            </Box>
        </Modal>
    );
}