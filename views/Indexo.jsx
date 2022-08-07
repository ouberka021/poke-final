const React = require('react');

class Index extends React.Component {
    render(){
        const { pokemon } = this.props;
        return(
            <html style={body}>
            <head>
                <title>Pokemon</title>
                <link rel="stylesheet" href="/styles/style.css"></link>
            </head>
            <body style={main}>
                <h1 style={margin1}>See All The Pokemon!</h1><br/>
                <h3 style={margin2}>Click the Pokeball to view Pokemon!!!</h3>
                <ul>
                   
                </ul>
                <a href="/"><button class="btn btn-primary" ><h3>Back to Main Directory!</h3></button></a><br/>
            </body>
            </html>
        )
    };
};

module.exports = Index;