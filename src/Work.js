import React from 'react'
import {styles as skillStyles} from './Skills'

const styles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        ...skillStyles.root,
        justifyContent: 'none'
    }
}

const work = [
    /* {
        name: 'Developer Quiz',
        description: 'Are you a good software developer?',
        technologies: ['React.JS']
    },*/
    {
        name: 'Mantella',
        description: 'Mantella is a fullstack project management application which takes the best features out of many different methodologies. Please note that the application might take a minute to start up',
        technologies: ['Mongodb', 'Nodejs', 'React.js', 'HTML/CSS/JS'],
        link: 'http://mantella.herokuapp.com',
        minHeight: 100
    }
]

export const Work = () => (
    <div style={styles.root}>
        <div style={{...skillStyles.skillTitle, marginTop: 32}}>I love creating and I'm always tinkering with new technologies</div>
        <div style={{...skillStyles.skillTitle, color: '#029781', marginTop: 8}}>Featured Project</div>
        {work.map((item) => (
            <div style={styles.projectCard} key={item.name}>
                {item.name}
            </div>
        ))}
    </div>
)