import { Avatar, Box, Button, Container, CssBaseline, Divider, FormControl, FormLabel, Grid, InputLabel, MenuItem, Select, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';

function Order(props) {
    const [formData, setFormData] = useState([]);
    const [formAction, setFormAction] = useState(null);

    const [selectedDate, setSelectedDate] = useState(dayjs());

    const handleAction = (data) => {
        setFormAction(data);
      };
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
    const handleSubmit = (event, action) => {
        event.preventDefault();

        console.log("current",formAction)
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: product,
          commonPrice: data.get('commonPrice'),
          customer: data.get('customer'),
        });
        const newEntry = { product: product, 
            customer: data.get('customer'),
            quantity: data.get('quantity'),
            commonPrice: data.get('commonPrice'),
            netPrice: data.get('netPrice') ,
            specialPrice: data.get('specialPrice'),
            amountPrice:data.get('amountPrice')

        };
        console.log('newEntry',newEntry);
        if(formData.size === 0){

        } else {
            
        }
        // setFormData([newEntry]);
        setFormData([...formData, newEntry]);
        event.target.reset();

        console.log('data',formData);
      };
      const [product, setProduct] = useState('');

      const handleChange = (event) => {
        setProduct(event.target.value);
      };
    return (
        <div>
           <Container maxWidth="lg" sx={{ mt: 11, mb: 10 }} spacing={1}>
           <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
           <Typography variant='h4' align='left'>
            Create Order 
           </Typography>
           <Typography variant='h4' align='right'>
             Order :20
           </Typography>
           </Box>
           <Divider/>
           <br/>
           <Box sx={{ display: 'flex', flexWrap: 'wrap' }} >

           
          

           {/* <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          
        > */}
          
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4} sm={4}>
              <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Product</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={product}
    label="Product"
    onChange={handleChange}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>
                {/* <TextField
                  required
                  fullWidth
                  id="product"
                  label="Product"
                  name="product"
                  autoComplete="product"
                /> */}
              </Grid>
              <Grid item xs={12} md={4} sm={4}>
                <TextField
                  required
                  fullWidth
                  id="customer"
                  label="Customer"
                  name="customer"
                  autoComplete="customer"
                />
              </Grid>
              <Grid item xs={12} md={4} sm={4}>
                <TextField
                  required
                  fullWidth
                  name="discount"
                  label="Discount"
                  id="discount"
                  autoComplete="discount"
                />
              </Grid>
              <Grid item xs={12} md={4} sm={4}>
                <TextField
                  required
                  fullWidth
                  name="quantity"
                  label="Quantity"
                  id="quantity"
                  autoComplete="quantity"
                />
              </Grid>
             
              <Grid item xs={12} md={4} sm={4}>
                 <LocalizationProvider dateAdapter={AdapterDayjs} required fullWidth>
                 <DemoContainer components={['DatePicker']} >
                 <DatePicker label="Date" 
                    value={selectedDate}
                    onChange={handleDateChange}
                    renderInput={(params) => <TextField {...params} variant="outlined" />}
                 />
                 </DemoContainer>
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}  sm={6}>
              <input type="hidden" name="commonPrice" value="20.09" />

                <Typography variant='h6'> Common Price 20.09</Typography>
                   
              </Grid>
              <Grid item xs={12}  sm={6}>
              <input type="hidden" name="specialPrice" value="20.09" />

                <Typography variant='h6'> Special Price 20.09</Typography>
                   
              </Grid>
              <Grid item xs={12}  sm={6}>
              <input type="hidden" name="amountPrice" value="20.09" />

                <Typography variant='h6'> Amount Price 20.09</Typography>
                   
              </Grid>
              <Grid item xs={12}  sm={6}>
              <input type="hidden" name="netPrice" value="20.09" />

                <Typography variant='h6'> Net Amount 20.09</Typography>
                   
              </Grid>
              
              </Grid>
              <Box style={{ display: 'flex',  justifyContent: 'center' ,  gap: '20px'}} spacing ={5}>
            <Button
              type="submit"
              name="action" value="add"
              onClick={()=>handleAction('add')}
             // fullWidth
              variant="contained"
             // sx={{ mt: 3, mb: 2 }}
            >
              Add
            </Button>
            <Button
            
            name="action" value="submit"
              type="submit"
              onClick={()=>handleAction('submit')}
            //  fullWidth
              variant="contained"
             // sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
            </Box>
            
          </Box>
        </Box>

        <Divider/>
        <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell>Customer</TableCell>
            <TableCell>Qty</TableCell>
            <TableCell>Net Amount</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {formData.map((row,index) => (
            <TableRow key={index}>
              <TableCell>{row.product}</TableCell>
              <TableCell>{row.customer}</TableCell>
              <TableCell>{row.quantity}</TableCell>
              <TableCell>{row.commonPrice}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
       
          </Container>

        </div>
    );
}

export default Order;