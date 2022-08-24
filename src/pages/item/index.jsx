import React, {Component} from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { Grid, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import GDSEButton from "../../componets/Button"
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import Box from '@mui/material/Box';
import NavBar from "../../componets/navBar"

class Item extends Component{
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                code: '',
                description: '',
                price: '',
                qty: ''
            },
            data: []

        }
    }

    clearFields = () => {
        this.setState({
            formData: {
                code: '',
                description: '',
                price: '',
                qty: ''
            }
        });
    };

    submitItem = () => {
        let data = this.state.data

        data.push(this.state.formData)

        this.setState({ data })
    };

    render() {

        return(
            <>
                <NavBar/>

                <ValidatorForm ref="form" className="pt-2" onSubmit={this.submitItem}  style={{position:"relative",top:"100px"}}>
                    <Grid container className="pt-2" spacing={3}>

                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Item Code</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Item Code"
                                variant="outlined"
                                size="small"
                                style={{ width: '100%' }}
                                value={this.state.formData.code}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.code = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Description</Typography>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField id="standard-basic" label="Description" placeholder="Description"variant="standard"
                                 value={this.state.formData.description}
                                           onChange={(e) => {
                                               let formData = this.state.formData
                                               formData.description = e.target.value
                                               this.setState({ formData })
                                           }}
                                           validators={['required']}
                                />
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Price</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Price"
                                variant="outlined"
                                size="small"
                                style={{ width: '100%' }}
                                value={this.state.formData.price}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.price = e.target.value
                                    this.setState({ formData })
                                }}
                                validators={['required']}
                            />
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">QTY</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="QTY"
                                variant="outlined"
                                size="small"
                                style={{ width: '100%' }}
                                value={this.state.formData.qty}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.qty = e.target.value
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
                        <Table sx={{ minWidth: 650 }} aria-label="Item table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Item Code</TableCell>
                                    <TableCell align="left">Item Description</TableCell>
                                    <TableCell align="left">Item Price</TableCell>
                                    <TableCell align="left">Item QTY</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.state.data.map((row) => (
                                        <TableRow>
                                            <TableCell align="left">{row.code}</TableCell>
                                            <TableCell align="left">{row.description}</TableCell>
                                            <TableCell align="left">{row.price}</TableCell>
                                            <TableCell align="left">{row.qty}</TableCell>
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
export default Item