import React from 'react'
import {Trail} from 'react-spring/renderprops'

const styles = {
    header: {
        display: 'flex',
        height: 64,
        width: `100%`,
        position: 'fixed',
        background: '#181818',
        alignItems: 'center',
        zIndex: 6
    },
    headerMap: {
        width: '100%',
        display: 'flex',
        height: '100%'
    },
    icon: {
        fontSize: 24
    },
    headerLink: {
        cursor: 'pointer',
        height: '100%',
        color: '#B5B5B5',
        fontWeight: 500,
        textTransform: 'uppercase',
        width: '48px',
        textAlign: 'center',
        transition: '.25s',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none'
    }
}

const socials = [
    { name: 'Github', icon: 'fab fa-github', link: 'https://github.com/Austin-UW' },
    { name: 'Linkedin', icon: 'fab fa-linkedin', link: 'https://www.linkedin.com/in/austin-kay-4a823b139/'}
]

const pages = [
    { name: 'About', icon: 'fas fa-home', link: '#about' },
    { name: 'Skills', icon: 'far fa-chart-bar', link: '#skills' },
    // { name: 'My Work', icon: 'fas fa-briefcase', link: '#work' },
    // { name: 'Hire', icon: 'fas fa-user-tag', link: '#hire' }
]
export const Header = () => {
    return (
        <header style={styles.header}>
            <Trail
                items={'Austin Kay'}
                from={{ transform: 'translate3d(-220px,0px,0)' }}
                to={{ transform: 'translate3d(0,0px,0)' }}
            >
                {item => trailProps => (
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/Austin-UW"
                        style={{
                        ...trailProps,
                        color: 'white',
                        width: 220,
                        fontSize: 20,
                        marginBottom: 8,
                        marginLeft: 24,
                        textDecoration: 'none',
                        paddingRight: 5
                        }}
                    >
                        Austin Kay
                    </a>
                )}
            </Trail>
            <div style={{...styles.headerMap, marginLeft: 12}}>
                {socials.map((social, i) => (
                    <a href={social.link} target="_blank" rel="noreferrer" style={styles.headerLink} className="header-icon" key={i}>
                        <i style={styles.icon} className={social.icon}></i>
                    </a>
                ))}
            </div>

            <div style={{...styles.headerMap, justifyContent: 'flex-end', marginRight: 24 }}>
                {pages.map((page, i) => (
                    <a style={{...styles.headerLink, width: 100, fontSize: 18 }} href={page.link} className="header-icon" key={i}>
                        <span>{page.name}</span>
                    </a>
                ))}
            </div>
        </header>
    )
}