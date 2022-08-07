const React = require('react');
class New extends React.Component {
    render() {
        return (
<html>
<head>
    <title>POKEMON - List</title>
    <link rel="stylesheet" href="/styles/admin.css"></link>
</head>
<body>
                <div class="container-fluid">
                            <a href="/"><button class="btn" ><h3>Back to Main Directory!</h3></button></a><br/>
                    
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Add New Pokemon</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th> <h1>You Discovered A New Pokemon!!</h1>
                    {/* NOTE: action will be the route, method will be the HTTP verb */}
                    <form action="/pokemon" method="POST">
                    <div class="form-group row">
                                    <div class="col-sm-6 mb-3 mb-sm-0">
<input type="text" class="form-control form-control-user" id="exampleFirstName" placeholder="Pokemon Name" name="name" />
                                    </div>
                                    <div class="col-sm-6">
<input type="text"  name="img" class="form-control form-control-user" id="exampleLastName" placeholder="Image URL" />
                                    </div>
                                </div>

                        <input type="submit" name="" class="btn btn-primary btn-user btn-block" value="Submit Entry"/>
                    </form>
                        </th>
                                           
                                        </tr>
                                    </thead>
                                 
                                 
                                </table>
                            </div>
                        </div>
                    </div>
                </div>      
</body>
</html>
  
        );
    }
}

module.exports = New;