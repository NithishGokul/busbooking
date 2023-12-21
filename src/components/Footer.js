// Footer.js
import React from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  InputBase,
  Button,
  Link,
} from '@mui/material';
import { styled } from '@mui/system';

const FooterSection = styled('div')({
  background: '#151414',
  position: 'relative',
  color: '#fff',
});

const SingleCta = styled('div')({
  color: '#ff5e14',
  fontSize: '30px',
  float: 'left',
  marginTop: '8px',
});

const CtaText = styled('div')({
  paddingLeft: '15px',
  display: 'inline-block',
});

const FooterLogo = styled('div')({
  marginBottom: '30px',
});

const FooterText = styled('p')({
  marginBottom: '14px',
  fontSize: '14px',
  color: '#7e7e7e',
  lineHeight: '28px',
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
});

const SubscribeInput = styled(InputBase)({
  width: '100%',
  padding: '14px 28px',
  background: '#2E2E2E',
  border: '1px solid #2E2E2E',
  color: '#fff',
});

const SubscribeButton = styled(Button)({
  position: 'absolute',
  right: 0,
  background: '#ff5e14',
  padding: '13px 20px',
  border: '1px solid #ff5e14',
  top: 0,
});

const CopyrightArea = styled('div')({
  background: '#202020',
  padding: '25px 0',
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
  },
});

const Footer = () => {
  return (
    <div>
      <div>
        <Grid container spacing={2} className="footer-cta pt-5 pb-5" sx={{width:'100%'}}>
          <Grid item xs={12} sm={4} md={4}>
            <SingleCta>
              <i className="fas fa-map-marker-alt"></i>
            </SingleCta>
            <CtaText>
              <Typography variant="h4">Find us</Typography>
              <Typography variant="body2">
                1010 Avenue, sw 54321, chandigarh
              </Typography>
            </CtaText>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <SingleCta>
              <i className="fas fa-phone"></i>
            </SingleCta>
            <CtaText>
              <Typography variant="h4">Call us</Typography>
              <Typography variant="body2">9876543210 0</Typography>
            </CtaText>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <SingleCta>
              <i className="far fa-envelope-open"></i>
            </SingleCta>
            <CtaText>
              <Typography variant="h4">Mail us</Typography>
              <Typography variant="body2">mail@info.com</Typography>
            </CtaText>
          </Grid>
        </Grid>

        <Grid container spacing={2} className="footer-content pt-5 pb-5">
          <Grid item xs={12} sm={4} md={4}>
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
            <FooterText>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididuntut consec tetur adipisicing
                elit,Lorem ipsum dolor sit amet.
              </Typography>
            </FooterText>
            <SocialIcon>Follow us</SocialIcon>
            <div>
              <Link href="#">
                <i className="fab fa-facebook-f facebook-bg"></i>
              </Link>
              <Link href="#">
                <i className="fab fa-twitter twitter-bg"></i>
              </Link>
              <Link href="#">
                <i className="fab fa-google-plus-g google-bg"></i>
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <FooterMenu>
              <Typography variant="h3">Useful Links</Typography>
              <ul>
                <li>
                  <Link href="#">Home</Link>
                </li>
                <li>
                  <Link href="#">about</Link>
                </li>
                <li>
                  <Link href="#">services</Link>
                </li>
                <li>
                  <Link href="#">portfolio</Link>
                </li>
                <li>
                  <Link href="#">Contact</Link>
                </li>
                <li>
                  <Link href="#">About us</Link>
                </li>
                <li>
                  <Link href="#">Our Services</Link>
                </li>
                <li>
                  <Link href="#">Expert Team</Link>
                </li>
                <li>
                  <Link href="#">Contact us</Link>
                </li>
                <li>
                  <Link href="#">Latest News</Link>
                </li>
              </ul>
            </FooterMenu>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <div>
              <Typography variant="h3">Subscribe</Typography>
              <FooterText>
                <Typography variant="body2">
                  Don’t miss to subscribe to our new feeds, kindly fill the form
                  below.
                </Typography>
              </FooterText>
              <SubscribeForm>
                <form action="#">
                  <SubscribeInput
                    type="text"
                    placeholder="Email Address"
                  />
                  <SubscribeButton>
                    <i className="fab fa-telegram-plane"></i>
                  </SubscribeButton>
                </form>
              </SubscribeForm>
            </div>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} sm={6} md={6} textAlign="center" sx={{ textLg: 'left' }}>
            <Typography variant="body2" className="copyright-text">
              Copyright &copy; 2018, All Right Reserved{' '}
              <Link href="https://codepen.io/anupkumar92/">Anup</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6} textAlign="center" sx={{ display: { xs: 'none', lg: 'block' } }}>
            <FooterMenu>
              <ul>
                <li>
                  <Link href="#">Home</Link>
                </li>
                <li>
                  <Link href="#">Terms</Link>
                </li>
                <li>
                  <Link href="#">Privacy</Link>
                </li>
                <li>
                  <Link href="#">Policy</Link>
                </li>
                <li>
                  <Link href="#">Contact</Link>
                </li>
              </ul>
            </FooterMenu>
          </Grid>
        </Grid>
        </div>
    </div>
  );
};

export default Footer;
