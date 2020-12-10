import React from 'react'

export const styles = {
    /* bg: {
        marginTop: 936,
        zIndex: -1,
        position: 'absolute',
        backgroundColor: '#D28DFF',
        height: 512,
        width: '100%'
    },*/
    root: {
        display: 'flex',
        backgroundColor: '#FFF',
        maxWidth: '1400px',
        borderRadius: 12,
        minHeight: 400,
        width: 'calc(100% - 40px)',
        margin: '0px auto',
        marginTop: 80,
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.35)',
        justifyContent: 'center',
        zIndex: 4
    },
    skillSection: {
        // flexGrow: 1 / 3,
        width: '100%',
        maxWidth: 100 / 3 + '%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        paddingBottom: 32
    },
    skillTitle: {
        fontSize: 22,
        fontWeight: 500,
        marginTop: 24,
    },
    scrollContainer: {},
    skillDescription: {
        marginTop: 16,
        fontSize: 18,
        marginBottom: 16,
        maxWidth: 'calc(100% - 80px)'
    },
    skillTypeText: {
        color: '#029781',
        marginTop: 16,
        fontWeight: 500,
        fontSize: 18
    }
}

const skills = {
    'Frontend': {
        description: 'I create pixel-perfect designs and craft an intuitive experience for users',
        sections: {
          'What I Do': ['Websites, Mobile Apps, Desktop Applications', 'UX / UI'],
          'Tools': ['ReactJS, Redux', 'VueJS, Vuex', 'Bootstrap', 'Material Design'],
          'Languages': ['HTML5, CSS3, Javascript ES6', 'Sass/Less', 'Jinja', 'Typescript'],
        }
    },
    'Backend': {
        description: 'Creating efficient servers and databases is my specialty.',
        sections:  {
          'What I Do': ['Mostly web servers for now, but I am looking to expand that!'],
          'Languages': ['Python', 'PHP', 'NodeJS'],
          'Databases': ['SQL', 'Mongodb']
        }
    },
    'Teamwork': {
        description: 'I work with clients to ensure their project is on-time and above expectations',
        sections: {
          'Tools': ['Visual Studio Code', 'Git', 'Terminal', 'Algorithms & Data Structures', 'Self-sufficient', 'Agile']
        }
    }
}

export const Skills = () => (
    <>
    <div id="skills" style={styles.scrollContainer}></div>
    <div style={styles.root}>
        {Object.keys(skills).map((key, i) => {
            const skill = skills[key]

            return (
                <div key={i} style={{...styles.skillSection, borderLeft: i === 1 ? '1px solid #E6ECF8' : undefined, borderRight: i === 1 ? '1px solid #E6ECF8' : undefined}}>
                    <div style={styles.skillTitle}>{key}</div>
                    <div style={styles.skillDescription}>{skill.description}</div>
                    {Object.keys(skill.sections).map((skillKey, j) => {
                        const section = skill.sections[skillKey]
                        return (
                          <div key={j}>
                              <div style={styles.skillTypeText}>{skillKey}</div>
                              {section.map(text => (
                                  <div key={text} style={{fontSize: 18, marginTop: 8, maxWidth: 200}}>{text}</div>
                              ))}
                          </div>
                        )
                    })}
                </div>
            )
        })}
    </div>
    </>
)

// there should be a section where there is one of my algorithms and visual displays of them working