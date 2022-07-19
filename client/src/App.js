import React from 'react'
import './styles.css'
import {Container, AppBar, Typography, Grow, Grid} from '@mui/material'

import Form from './components/Form/Form.js'
import Posts from './components/Posts/Posts.js'
import memories from './images/memories.png'

const App = () => {
    return (
        <Container maxWidth='lg'>
            <AppBar className='app-bar' position='static' color='inherit'>
                <Typography className='heading' variant='h2' align='center'>Memories</Typography>
                <img className='image' src={memories} alt='memories' height='60' />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App