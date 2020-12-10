import React, {useState} from 'react'
import {useTransition, animated } from 'react-spring'



export const styles = {
    root: {
        marginTop: 140,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        userSelect: 'none'
    },
    title: {
        fontWeight: 700,
        fontSize: '2.75rem',
        zIndex: 2
    },
    description: {
        fontWeight: 500,
        fontSize: '1.25rem',
        marginTop: 4,
        zIndex: 2
    },
    quote: {
        marginTop: 12,
        maxWidth: 500,
        minHeight: 90,
        width: '100%'
    },
    badge: {
        marginTop: 32,
        minHeight: 200,
        zIndex: 2
    },
    quoteItem: {
        maxWidth: 640
    }
}

const allQuotes = [
  '“Programming is an act of creation. When we write code we are creating something out of nothing. We are boldly imposing order upon chaos. We are confidently commanding, in precise detail, the behaviors of a machine that could otherwise do incalculable damage.” ― Robert C. Martin',
  '“One difference between a smart programmer and a professional programmer is that the professional understands that clarity is king.”― Robert C. Martin',
  '“Coding like poetry should be short and concise.” ― Santosh Kalwar',
  '“Woe to the poor developer who buckles under pressure and agrees to try to make the deadline. That developer will start taking shortcuts and working extra hours in the vain hope of working a miracle.” - Robert C. Martin',
  '“Say what you mean. Mean what you say.” - Robert C. Martin',
  '“If we really want to spend our days programming, we are going to have to learn to talk to people.” ― Robert C. Martin',
  '“We programmers simply do not know how long things will take. This isn’t because we are incompetent or lazy; it’s because there is simply no way to know how complicated a task is going to be until that task is engaged and finished. But, as we’ll see, all is not lost.” ― Robert C. Martin',
  '"Wow, this Austin guy really likes my books." - Robert C. Martin',
  '“Creative output depends on creative input.” ― Robert C. Martin',
  '“Master programmers think of systems as stories to be told rather than programs to be written.” ― Robert C. Martin'
]

export const About = () => {
    const [quotes, set] = useState(allQuotes)

    React.useEffect(() => {
    const timeout = setTimeout(() => {
        const newQuotes = [quotes[1], ...quotes.slice(2), quotes[0]]
        set(newQuotes);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [quotes]);

    const transitions = useTransition(quotes[0], item => item, {
    from: { opacity: 0, position: 'absolute' },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
    })


    return (
    <div id="about">
    <div style={styles.root}>
        <div style={styles.title}>
            Fullstack Web Developer
        </div>
        <div style={styles.description}>
            I build fast, responsive, beautiful and modern websites
        </div>
        <div style={styles.quote}>
        <div style={{width: '100%'}}>
            {transitions.map(({item, key, props}) => {
                return (
                    <animated.i key={key} style={{...props, ...styles.quoteItem}}>{item}</animated.i>
                )
            })}
            </div>
        </div>
        <div 
          style={styles.badge}
          className="LI-profile-badge"  
          data-version="v1"
          data-size="large" 
          data-locale="en_US"
          data-type="horizontal" 
          data-theme="dark" 
          data-vanity="austin-kay-4a823b139"
        >
            <a target="_blank" rel="noopener noreferrer" className="LI-simple-link" href='https://www.linkedin.com/in/austin-kay-4a823b139?trk=profile-badge'>Austin Kay</a>
        </div>
    </div>
    </div>
    )
}