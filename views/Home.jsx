const React = require('react');
class Home extends React.Component {
    render(){
        const { pokemon } = this.props;
        return (
<html>
<head>
    <title>POKEMON - List</title>
    <link rel="stylesheet" href="/styles/admin.css"></link>
</head>
<body>
                <div class="container-fluid">
                        <p></p>
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">You Discovered A New Pokemon!!</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>
                                           
                <h3>Welcome to Pokemon APP!!!</h3>
                <ul>
                   
                </ul>
                <div class="navig">
                <a href="/pokemon"><button class="btn" ><h3>Back to pokemon list!</h3></button></a><br/>
                <a  href='/pokemon/new'><button class="btn"><h3>Add New Pokemon</h3></button></a>
                </div>
                  </th> </tr>  
                  </thead>
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

module.exports = Home;