import React, {Component} from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { Grid, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import GDSEButton from "../../componets/Button"
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import NavBar from "../../componets/navBar"

class Customer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            users: [
                { gender: 'Male' },
                { gender: 'Female' },
            ],
            formData: {
                name: '',
                gender: '',
                nic: '',
                email: ''
            },
            data: []

        }
    }

    clearFields = () => {
        this.setState({
            formData: {
                name: '',
                gender: '',
                nic: '',
                email: ''
            }
        });
    };

    submitCustomer = () => {
        let data = this.state.data

        data.push(this.state.formData)

        this.setState({ data })
    };

    render() {

        return(
            <>
                <NavBar/>

                <ValidatorForm ref="form" className="pt-2" onSubmit={this.submitCustomer}  style={{position:"relative",top:"100px"}}>
                    <Grid container className="pt-2" spacing={3}>

                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Customer Name</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Customer Name"
                                variant="outlined"
                                size="small"
                                style={{ width: '100%' }}
                                value={this.state.formData.name}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.name = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Gender</Typography>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={this.state.users}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Gender" />}
                                getOptionLabel={
                                    (option) => option.gender
                                }
                                onChange={(e, value) => {
                                    console.log(value.gender)
                                    let formData = this.state.formData
                                    formData.gender = value.gender
                                    this.setState({ formData });
                                }}
                                size="small"
                                style={{ width: '100%' }}
                            />
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Customer NIC</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Customer Address"
                                variant="outlined"
                                size="small"
                                style={{ width: '100%' }}
                                value={this.state.formData.nic}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.nic = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Customer E mail</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Customer Salary"
                                variant="outlined"
                                size="small"
                                style={{ width: '100%' }}
                                value={this.state.formData.email}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.email = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>

                        <Grid container style={{ marginTop: '10px' }} direction="row" justifyContent="flex-end" alignItems="center">
                            <GDSEButton   size="small"  variant="contained" label="clear"
                                          onClick={(e) =>{
                                              this.clearFields()
                             }}/>
                        </Grid>
                        <Grid container style={{ marginTop: '10px' }} direction="row" justifyContent="flex-end" alignItems="center">
                            <GDSEButton  type="submit" size="small"  variant="contained" label="save"/>
                        </Grid>
                    </Grid>
                </ValidatorForm>

                <Grid contaner style={{ position:"relative",top:"100px",marginTop: '15px' }}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="customer table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Customer Name</TableCell>
                                    <TableCell align="left">Customer Gender</TableCell>
                                    <TableCell align="left">Customer NIC</TableCell>
                                    <TableCell align="left">Customer Email</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.state.data.map((row) => (
                                        <TableRow>
                                            <TableCell align="left">{row.name}</TableCell>
                                            <TableCell align="left">{row.gender}</TableCell>
                                            <TableCell align="left">{row.nic}</TableCell>
                                            <TableCell align="left">{row.email}</TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </>
        )
    }
}
export default Customer