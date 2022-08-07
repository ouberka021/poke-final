const React = require('react');
class Index extends React.Component {
    render(){
        const { pokemon } = this.props;
        return(    
<html>
<head>
    <title>POKEMON - List</title>
    <link rel="stylesheet" href="/styles/admin.css"></link>
</head>
<body>
                <div class="container-fluid">
                    <h1 class="h3 mb-2 text-gray-800">Pokemon App</h1>
                    
                            <a href="/"><button class="btn" ><h3>Back to Main Directory!</h3></button></a><br/>
                        
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">List of All Pokemon</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                           
                                        </tr>
                                    </thead>
                                 
                                    <tbody>
                                        {pokemon.map((mons) => {
                                            return (    <tr>
                                            <td> 
                                                <a href={`/pokemon/${mons.id}`}>{mons.name}</a></td>
                                            
                                        </tr>
                                        );
                                    })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
           
</body>

</html>
        )
    };
};
module.exports = Index;