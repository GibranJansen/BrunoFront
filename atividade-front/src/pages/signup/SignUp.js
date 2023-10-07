import { Avatar, Button, Container, Grid, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import LockIcon from '@mui/icons-material/Lock';
import { Component } from "react";

class SignUp extends Component{
  handleRegisterUser () {

  }
  render() {
    return (
      <Container component="main">
        <Box component="form" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <Avatar sx={{bgcolor: "primary.main"}}><LockIcon/></Avatar>
          <Typography variant="h5"> Inscrever-se</Typography>
          <Box component="form" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField required fullWidth name="primeiroName" label="Primeiro Nome" id="primeiroName"/>
              </Grid>
              <Grid item xs={6}>
                <TextField required fullWidth name="ultimoName" label="Ultimo Nome" id="ultimoName"/>
              </Grid>
            </Grid>
            <TextField sx={{mt: 2}} fullWidth name="email" label="Email" id="email"/>
            <TextField sx={{mt: 2}} fullWidth name="senha" label="Password" id="password"/>
            <Button sx={{mt: 2}} fullWidth variant="contained"> Entrar </Button>
          </Box>
        </Box>
      </Container>
    )
  }
}

export default SignUp