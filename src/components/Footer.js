// Footer.js
import React from 'react';
import { Container, Grid, Typography, InputBase, Button, Link } from '@mui/material';
import { styled } from '@mui/system';

const FooterSection = styled('div')({
  background: '#3586ff',
  position: 'relative',
  color: '#fff',
  padding: '50px 0',
});

const ContactInfo = styled('div')({
  marginBottom: '40px',
});

const ContactIcon = styled('i')({
  color: '#ff5e14',
  fontSize: '30px',
  float: 'left',
  marginTop: '8px',
});

const ContactText = styled('div')({
  paddingLeft: '15px',
  display: 'inline-block',
  '& p':{
    color:'#fff',
  },
});

const FooterLogo = styled('div')({
  marginBottom: '30px',
});

const FooterText = styled(Typography)({
  marginBottom: '14px',
  fontSize: '14px',
  color: '#7e7e7e',
  lineHeight: '1.5',
});

const SocialIcon = styled('span')({
  color: '#fff',
  display: 'block',
  fontSize: '20px',
  fontWeight: 700,
  fontFamily: 'Poppins, sans-serif',
  marginBottom: '20px',
});

const SubscribeForm = styled('div')({
  position: 'relative',
  overflow: 'hidden',
  color: '#fff',
});

const SubscribeInput = styled(InputBase)({
  width: '100%',
  padding: '14px 28px',
  background: '#fff',
  border: '1px solid #2E2E2E',
  color: '#2E2E2E',
});

const SubscribeButton = styled(Button)({
  position: 'absolute',
  right: 0,
  background: '#fff',
  padding: '4px 7px',
  border: '2px solid blue',
  top: 26,
  
  
});

const CopyrightArea = styled('div')({
  background: '#202020',
  padding: '25px 0',
  textAlign: 'center',
  color: '#fff',
});

const FooterMenu = styled('div')({
  '& li': {
    display: 'inline-block',
    marginLeft: '20px',
  },
  '& li:hover a': {
    color: '#ff5e14',
  },
  '& li a': {
    fontSize: '14px',
    color: '#878787',
    textDecoration: 'none',
  },
});

const Footer = () => {
  return (
    <FooterSection>
      <Container maxWidth="x1">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <ContactInfo>
              <ContactIcon className="fas fa-map-marker-alt" />
              <ContactText>
                <Typography variant="h6">Find us</Typography>
                <Typography variant="body2">1010 Avenue, SW 54321, Chandigarh</Typography>
              </ContactText>
            </ContactInfo>
          </Grid>
          <Grid item xs={12} md={4}>
            <ContactInfo>
              <ContactIcon className="fas fa-phone" />
              <ContactText>
                <Typography variant="h6">Call us</Typography>
                <Typography variant="body2">9876543210</Typography>
              </ContactText>
            </ContactInfo>
          </Grid>
          <Grid item xs={12} md={4}>
            <ContactInfo>
              <ContactIcon className="far fa-envelope-open" />
              <ContactText>
                <Typography variant="h6">Mail us</Typography>
                <Typography variant="body2">mail@info.com</Typography>
              </ContactText>
            </ContactInfo>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <FooterLogo>
              <Link href="index.html">
                <img
                  src="https://i.ibb.co/QDy827D/ak-logo.png"
                  alt="logo"
                  className="img-fluid"
                  style={{ maxWidth: '200px' }}
                />
              </Link>
            </FooterLogo>
            <FooterText variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing elit, Lorem ipsum dolor sit amet.
            </FooterText>
            <SocialIcon>Follow us</SocialIcon>
            <div>
              <Link href="#" className="social-icon__link">
                <i className="fab fa-facebook-f facebook-bg"></i>
              </Link>
              <Link href="#" className="social-icon__link">
                <i className="fab fa-twitter twitter-bg"></i>
              </Link>
              <Link href="#" className="social-icon__link">
                <i className="fab fa-google-plus-g google-bg"></i>
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <FooterMenu>
              <Typography variant="h6">Useful Links</Typography>
              <ul>
                <li>
                  <Link href="#" className="menu__link">Home</Link>
                </li>
                <li>
                  <Link href="#" className="menu__link">About</Link>
                </li>
                <li>
                  <Link href="#" className="menu__link">Services</Link>
                </li>
                <li>
                  <Link href="#" className="menu__link">Portfolio</Link>
                </li>
                <li>
                  <Link href="#" className="menu__link">Contact</Link>
                </li>
                <li>
                  <Link href="#" className="menu__link">About us</Link>
                </li>
                <li>
                  <Link href="#" className="menu__link">Our Services</Link>
                </li>
                <li>
                  <Link href="#" className="menu__link">Expert Team</Link>
                </li>
                <li>
                  <Link href="#" className="menu__link">Contact us</Link>
                </li>
                <li>
                  <Link href="#" className="menu__link">Latest News</Link>
                </li>
              </ul>
            </FooterMenu>
          </Grid>
          <Grid item xs={12} md={4}>
            <div>
              <Typography variant="h6">Subscribe</Typography>
              <FooterText variant="body2">
                Don’t miss to subscribe to our new feeds, kindly fill the form below.
              </FooterText>
              <SubscribeForm>
                <form action="#">
                  <SubscribeInput type="text" placeholder="Email Address" />
                  <SubscribeButton>
                    <i className="fab fa-telegram-plane"></i><span>Submit</span>
                  </SubscribeButton>
                </form>
              </SubscribeForm>
            </div>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} md={6} textAlign="center">
            <Typography variant="body2" className="copyright-text">
              Copyright &copy; 2018, All Right Reserved{' '}
              <Link href="https://codepen.io/anupkumar92/" className="menu__link">
                Anup
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} textAlign="center">
            <FooterMenu>
              <ul>
                <li>
                  <Link href="#" className="menu__link">Home</Link>
                </li>
                <li>
                  <Link href="#" className="menu__link">Terms</Link>
                </li>
                <li>
                  <Link href="#" className="menu__link">Privacy</Link>
                </li>
                <li>
                  <Link href="#" className="menu__link">Policy</Link>
                </li>
                <li>
                  <Link href="#" className="menu__link">Contact</Link>
                </li>
              </ul>
            </FooterMenu>
          </Grid>
        </Grid>
      </Container>
    </FooterSection>
  );
};

export default Footer;
