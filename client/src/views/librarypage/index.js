import React, { useRef } from 'react';
import { Grid, Typography, Button, Divider, Link } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import html2pdf from 'html2pdf.js'; // Import html2pdf library
import cardBg from './1.png';
// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage1 = () => {
  const contentRef = useRef(null); // Create a reference for the content container

  const downloadPdf = () => {
    const content = contentRef.current; // Target the content container

    if (!content) {
      console.error('Content reference is not available');
      return;
    }

    // Convert content to PDF
    html2pdf()
      .set({
        margin: [2, 2], // Add margins
        filename: 'Library Infrastructure CBIT.pdf' // Set filename
      })
      .from(content)
      .save();
  };

  return (
    <Grid container spacing={3} ref={contentRef}>
      {/* Heading section */}
      <Grid item xs={12}>
        <MainCard sx={{ paddingTop: { xs: '20px', sm: '0px' } }}>
          {' '}
          {/* Adding padding to the top */}
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="h1" sx={{ textAlign: 'center', color: '#941b1c' }}>
                LIBRARY INFRASTRUCTURE
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ textAlign: { xs: 'center', sm: 'right' } }}>
              <Button variant="contained" onClick={downloadPdf}
              sx={{ 
                mt: { xs: '15px', sm: '0px' }
              }}>
                Download PDF
              </Button>
            </Grid>
          </Grid>
        </MainCard>
      </Grid>

      {/* First row */}
      {/* Add your blocks here */}
      <Grid item xs={12} sm={6} md={4}>
        <MainCard
          sx={{ backgroundImage: `url(${cardBg})`, backgroundSize: 'cover' }}
          title={
            <Typography variant="h6" sx={{ color: 'darkgreen', fontWeight: 'bold', fontSize: '35px' }}>
              350+
            </Typography>
          }
        >
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
            Seating Capacity
          </Typography>
        </MainCard>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <MainCard
          sx={{ backgroundImage: `url(${cardBg})`, backgroundSize: 'cover' }}
          title={
            <Typography variant="h6" sx={{ color: 'darkgreen', fontWeight: 'bold', fontSize: '35px' }}>
              100000+
            </Typography>
          }
        >
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
            Volume of Books
          </Typography>
        </MainCard>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <MainCard
          sx={{ backgroundImage: `url(${cardBg})`, backgroundSize: 'cover' }}
          title={
            <Typography variant="h6" sx={{ color: 'darkgreen', fontWeight: 'bold', fontSize: '35px' }}>
              5000+
            </Typography>
          }
        >
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
            Online E-journals
          </Typography>
        </MainCard>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <MainCard
          sx={{ backgroundImage: `url(${cardBg})`, backgroundSize: 'cover' }}
          title={
            <Typography variant="h6" sx={{ color: 'darkgreen', fontWeight: 'bold', fontSize: '35px' }}>
              140+
            </Typography>
          }
        >
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
            Print Journals & Magazines
          </Typography>
        </MainCard>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <MainCard
          sx={{ backgroundImage: `url(${cardBg})`, backgroundSize: 'cover' }}
          title={
            <Typography variant="h6" sx={{ color: 'darkgreen', fontWeight: 'bold', fontSize: '35px' }}>
              18500 Sqft
            </Typography>
          }
        >
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
            CBIT Library is spread over a vast area
          </Typography>
        </MainCard>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <MainCard
          sx={{ backgroundImage: `url(${cardBg})`, backgroundSize: 'cover' }}
          title={
            <Typography variant="h6" sx={{ color: 'darkgreen', fontWeight: 'bold', fontSize: '35px' }}>
              100+
            </Typography>
          }
        >
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
            HP i7 Systems - E Learning Resource Centre Sports
          </Typography>
        </MainCard>
      </Grid>

      {/* Big block space */}
      <Grid item xs={12} style={{ height: 'auto', minHeight: '400px' }}>
        <MainCard>
          {/* Heading */}
          <Grid container justifyContent="center" alignItems="center" >
            <Grid item xs={12}>
              <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '20px', color: '#941b1c' }}>
                USEFUL RESOURCES / LINKS
              </Typography>
              <Divider variant="middle" sx={{ marginBottom: '20px' }} />
            </Grid>
            {/* Content */}
            <Grid item xs={12} sm={6} sx={{ backgroundImage: `url(${cardBg})`, backgroundSize: 'cover' }}>
              <Typography variant="body1">
                <ul>
                  <li>
                    <Link href="https://www.cbit.ac.in/library_post/opac/">OPAC</Link>
                  </li>
                  <li>
                    <Link href="https://www.cbit.ac.in/library_post/cbit-library-new-books/">Digital Library</Link>
                  </li>
                  <li>
                    <Link href="https://www.cbit.ac.in/library_post/library-links/">Library Links</Link>
                  </li>
                  <li>
                    <Link href="https://www.cbit.ac.in/library_post/working-hours/">Working Hours</Link>
                  </li>
                </ul>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ backgroundImage: `url(${cardBg})`, backgroundSize: 'cover' }}>
            
              <Typography variant="body1">
                <ul>
                  <li>
                    <Link href="https://www.cbit.ac.in/library_post/library-rules/">Rules</Link>
                  </li>
                  <li>
                    <Link href="https://www.cbit.ac.in/library_post/collections/">Collections</Link>
                  </li>
                  <li>
                    <Link href="https://www.cbit.ac.in/library_post/e-journals/">E-Journals</Link>
                  </li>
                  <li>
                    <Link href="https://www.cbit.ac.in/library_post/e-journals-oa/">E-Resources</Link>
                  </li>
                </ul>
              </Typography>
            </Grid>
            {/* <Grid item xs={6}>
              <Typography variant="body1">
                <ul style={{ marginTop: '8px' }}>
                  <a href='https://www.cbit.ac.in/library_post/opac/'><li style={{ marginBottom: '8px',color:'#941b1c', }}>OPAC</li></a>
                  <Divider variant="middle" sx={{ marginBottom: '8px' }} />
                  <a href='https://www.cbit.ac.in/library_post/cbit-library-new-books/'><li style={{ marginBottom: '8px' }}>Digital Library</li></a>
                  <Divider variant="middle" sx={{ marginBottom: '8px' }} />
                  <a href='https://www.cbit.ac.in/library_post/library-links/'><li style={{ marginBottom: '8px' }}>Library Links</li></a>
                  <Divider variant="middle" sx={{ marginBottom: '8px' }} />
                  <a href='https://www.cbit.ac.in/library_post/working-hours/'><li style={{ marginBottom: '8px' }}>Working Hours</li></a>
                </ul>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1">
                <ul style={{ marginTop: '8px' }}>
                <a href='https://www.cbit.ac.in/library_post/library-rules/'><li style={{ marginBottom: '8px' }}>Rules</li></a>
                  <Divider variant="middle" sx={{ marginBottom: '8px' }} />
                  <a href='https://www.cbit.ac.in/library_post/collections/'><li style={{ marginBottom: '8px' }}>Collections</li></a>
                  <Divider variant="middle" sx={{ marginBottom: '8px' }} />
                  <a href='https://www.cbit.ac.in/library_post/e-journals/'><li style={{ marginBottom: '8px' }}>E-Journals</li></a>
                  <Divider variant="middle" sx={{ marginBottom: '8px' }} />
                  <a href='https://www.cbit.ac.in/library_post/e-journals-oa/'><li style={{ marginBottom: '8px' }}>E-Resources</li></a>
                </ul>
              </Typography>
            </Grid> */}
          </Grid>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default SamplePage1;
