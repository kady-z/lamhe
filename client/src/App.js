import React from 'react';
import { Box, Container, AppBar, Typography, Grow, Grid } from '@mui/material';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/memories.png';
import Styles from './styles';

const App = () => {

    return (
       <Container maxWidth="lg">
            <AppBar sx={Styles.appBar} position="static" color="inherit">
                <Typography sx={Styles.heading} variant="h2" align="center">Memories</Typography>
                <Box component="img" sx={Styles.image} src={memories} alt="memories" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7} >
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4} >
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
       </Container>
    );
}

export default App;