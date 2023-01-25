import * as React from 'react';
import Grid from '@mui/material/Grid'; // Grid version 1
import { StaticImage } from "gatsby-plugin-image"


export default function ContentGrid2() {
    return (
        <Grid container>
            <Grid item xs={4}>
                <StaticImage src="../images/skull.jpg" alt="a skull" layout="constrained" />
            </Grid>
            <Grid item xs={8}>
                <h3>Candle</h3>
                <a href="http://www.candlemerch.com">candlemerch.com</a>
                <p>Music merch ecommerce site built on a customized Shopify theme with ChannelAdvisor inventory management. Designed from the ground up with custom print-to-order, fulfillment, and automated payout systems.</p>
            </Grid>
            <Grid item xs={8}>
                <h3>Some Ember</h3>
                <a href="http://debtsof.love">debtsof.love</a>
                <p>Self-produced synthpop/darkwave project. Instruments: Human voice, Ableton Live, Akai MPC Live, Ensoniq ESQ-1, Arp AXXE, DSI Prophet '08, Moog Slim Phatty, Elektron Octatrack, Korg DW-8000, guitars.</p>
            </Grid>
            <Grid item xs={4}>
                <StaticImage src="../images/lilman.jpg" alt="a skull" layout="constrained" />
            </Grid>
            {/* <Grid item xs={4}>
                <StaticImage src="../images/skull.jpg" alt="a skull" layout="constrained" />
            </Grid> */}
            {/* <Grid item xs={8}>
                <h3>California Republic Clothes</h3>
                <a href="http://www.californiarepublicclothes.com">californiarepublicclothes.com</a>
                <p>Clothing brand site built on a customized Shopify theme with ChannelAdvisor inventory management. Designed from the ground up with custom print-to-order, fulfillment, and automated payout systems.</p>
            </Grid>
            <Grid item xs={8}>
                <h3>jis.co</h3>
                <a href="http://jisco.biz">jisco.biz</a>
                <p>Clothing brand site built on a customized Shopify theme with ChannelAdvisor inventory management. Designed from the ground up with custom print-to-order, fulfillment, and automated payout systems.</p>
            </Grid>
            <Grid item xs={4}>
                <StaticImage src="../images/lilman.jpg" alt="a skull" layout="constrained" />
            </Grid> */}
        </Grid>
    )
}