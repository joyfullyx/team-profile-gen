const renderHtml = (employeeArr) => {
    return employeeArr.map((employee) => {
        switch (employee.role) {
            case 'manager':
                return `
                <div class="card" id="manager" style="width: 18rem;">
                    <div class="card-header bg-primary">
                    <h4 id="name">${employee.getName()}</h4>
                    <h5 id="role"><i class="fas fa-mug-hot"></i> ${employee.role}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" id="id">ID: ${employee.getId()}</li>
                        <li class="list-group-item" id="email">E-mail:<a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                        <li class="list-group-item" id="officeNum">Office Number: ${employee.getOfficeNumber()}</li>
                    </ul>
                </div>
                `
            case 'engineer':
                return `
                <div class="card" id="engineer" style="width: 18rem;">
                    <div class="card-header bg-primary">
                    <h4 id="name">${employee.getName()}</h4>
                    <h5 id="role"><i class="fas fa-glasses"></i> ${employee.role}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" id="id">ID: ${employee.getId()}</li>
                        <li class="list-group-item" id="email">E-mail: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                        <li class="list-group-item" id="github">Github: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a></li>
                    </ul>
                </div>
                `
            case 'intern':
                return `
                <div class="card" id="intern" style="width: 18rem;">
                    <div class="card-header bg-primary">
                    <h4 id="name">${employee.getName()}</h4>
                    <h5 id="role"><i class="fas fa-graduation-cap"></i> ${employee.role}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" id="id">ID: ${employee.getId()}</li>
                        <li class="list-group-item" id="email">E-mail: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                        <li class="list-group-item" id="school">School: ${employee.getSchool()}</li>
                    </ul>
                </div>
                `
            default:
                break;
        }
    })
}

const finalHtml = (employeeArr) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <link rel="stylesheet" href="../output/style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
    <title>Team Profile Generator</title>
</head>
<body id="cards">    
    <div>
        <h1 class="bg-danger" id="header">My Team</h1>
    </div> 
    <main>
        <div class="container">
            <div class="row">
                <div class="team col-12 d-flex justify-content-center">
                    ${renderHtml(employeeArr).join('')}
                </div>
            </div>
        </div>
    </main>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
</body>
</html>
`

module.exports = finalHtml;
