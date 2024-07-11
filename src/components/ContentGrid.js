import * as React from 'react';
import Grid from '@mui/material/Grid'; // Grid version 1


export default function ContentGrid() {
    return (
        <Grid container>
            <Grid item>
                <p>
                Hi, I'm Dylan. I am a software engineer at a top 5 ecommerce company with a focus on data engineering and integrations. 
                </p>
                <p>
                I specialize in writing processes and automations that deliver clean, validated data to stakeholders in a fast, efficient way.
                </p>
                <p>
                I have deep experience with orchestration and integration tools such as Airflow, Mage.ai, Dell Boomi, ChannelAdvisor, Salsify, and more. I have designed solutions connecting top ecommerce sellers to almost every marketplace and data store imaginable. I have worked extensively with cloud platforms (Google Cloud, AWS), and DevOps tools.
                </p>
                <p>
                I am skilled with front and backend coding languages and technologies, such as Python, SQL, React, NextJS, Django, Flask, Tailwind, and more. I am particularly interested in data modeling and validation, leveraging tools such as Pydantic, Pandera, and JSON Schema.

                Prior to my work in ecommerce and software, I was a senior grantwriter and events coordinator at a nonprofit in Oakland, CA.
                </p>
                <p>
                    <a href='mailto:dylantravis99@gmail.com'>Please feel free to reach out!</a>
                </p>
            </Grid>
        </Grid>
    )
}