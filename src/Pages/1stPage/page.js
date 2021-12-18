import React from "react";

import { Link } from "react-router-dom";

import ParticlesBg from 'particles-bg';

import Typed from 'react-typed';

import { Grid } from "@material-ui/core";

import "../1stPage/style.css"


const Page = () => {
  return (
    <>
      <div class="page">
        <Grid
          container
          justify="center"
          alignItems="center"
        >
          <Typed
            strings={['Welcome to Artscape']}
            typeSpeed={40}
          />
          <br />
        </Grid>

        <Grid
          container
          justify="center"
          alignItems="center"
        >
          <Typed
            strings={[
              'Share your art pieces with the world',
              'Connect with artists',
              'Stream a live art class and more',
              'Sign up, Set up, Post and Keep Painting!']}
            typeSpeed={40}
            backSpeed={50}
            attr="placeholder"
            loop >
            <input type="text" class="text" />
          </Typed>
        </Grid>

        <Grid
          container
          justify="center"
          alignItems="center"
        >
          <Link to="Home">
            <a class="waves-effect waves-light btn-large"><i class="large material-icons right">format_paint</i>Get Started</a>
          </Link>
        </Grid>
        <ParticlesBg type="color" bg={true} />
      </div>
    </>
  )
}

export default Page;