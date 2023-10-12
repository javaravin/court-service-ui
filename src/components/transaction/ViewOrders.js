import { Box, Button, Container, Divider, Grid, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';
import PrintIcon from '@mui/icons-material/Print';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import html2pdf from 'html2pdf.js';
import InvoiceComponent from './invoice/InvoiceComponent';

function ViewOrders(props) {
    const formData = [
        {
            product:"abc",
            customer:"test",
            quantity:1,
            commonPrice:20

        }

        
    ]
    const  handlePrintClick = async() => {

        

      
        const doc = new jsPDF();
        doc.html(, {
          callback: function (pdf) {
            pdf.save('myfile.pdf');
          },
          x: 10,
          y: 10,
        });
      };
//     const handlePrintClick = () => {
//         // Add logic for handling the print action
//         console.log('Print button clicked');
//         alert('test')
// //         const doc = new jsPDF()
// //         const columns = ['Product', 'Customer', 'Quantity', 'Common Price'];
// //     const rows = formData.map(data => [data.product, data.customer, data.quantity, data.commonPrice]);


// // // It can parse html:
// // // <table id="my-table"><!-- ... --></table>
// // doc.autoTable({
// //     head: [columns],
// //     body: rows,
// //   });


// // doc.save('table.pdf')

// const opt = {
//     margin: 10,
//     filename: 'myfile.pdf',
//     image: { type: 'jpeg', quality: 0.98 },
//     html2canvas: { scale: 2 },
//     jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
//   };

//   console.log("opt",opt);
//   const element = document.getElementById('my-html-element'); // Make sure this element exists
//   console.log("element",element);

//   html2pdf().from(element).set(opt).outputPdf(pdf => {
//     const blob = new Blob([pdf], { type: 'application/pdf' });
//     const link = document.createElement('a');
//     link.href = window.URL.createObjectURL(blob);
//     link.download = 'myfile.pdf';
//     link.click();
//   });
//       };
    return (
        <div>
        <div id="my-html-element" style={{ display: 'none' }}>
            testsdfasdfsafsdf
            </div>
            <Container maxWidth="lg" sx={{ mt: 11, mb: 10 }} spacing={1}>
            <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
           <Typography variant='h5' align='left'>
            Created Orders 
           </Typography>
           
           <IconButton onClick={handlePrintClick}>
                 <PrintIcon color="primary" align="right"/>
           </IconButton>
           </Box>
            <Divider/>
            <br/>

            <Box sx={{ display: 'flex', flexWrap: 'wrap'}} >
            <Grid container spacing={3}>
              <Grid item xs={12} md={4} sm={4}>
                  
           <Typography variant='h6' align="left" >
             Order: 20
           </Typography>
           </Grid>
           <Grid item xs={12} md={4} sm={4}>
           <Typography variant='h6' >
             Delivery Date :20/10/2023
           </Typography>
           </Grid>
           <Grid item xs={12} md={4} sm={4}>
           <Typography variant='h6' align="right">
             Customer Name : Test4
           </Typography>
           </Grid>
           </Grid>
           </Box>
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

export default ViewOrders;