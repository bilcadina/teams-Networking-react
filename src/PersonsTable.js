

let persons =
[{
    
        "id": "a123",
        "firstName": "Bilc",
        "lastName": "Adina",
        "gitHub": "https://github.com/bilcadina"
    },
    {
        "id": "b563",
        "firstName": "Carunt",
        "lastName": "Filip",
        "gitHub": "https://github.com/bilcadina"
    }

];

export const PersonsTable = (props) => (
    <table border="1">
        <thead>
            <tr key={person.id}>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Link</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {props.persons.map(person, index) => (
                <tr key={index}>
                    <td>{person.firstName.split(/\s*,\s*/).join("<br>")}</td>
                    <td>{person.lastName}</td>
                    <td><a target="_blank" href="https://github.com/{gitHub}">GitHub</a></td>
                    <td>
                        <a href="#" class="delete-row" data-id="{person.id}">&#10006;</a>
                        <a href="#" class="edit-row" data-id={person.id}>&#9998;</a>
                    </td>
                </tr>
            ))}
        </tbody>
        <tfoot>
            <tr>
                <td><input type="text" placeholder="Enter First Name" name="firstName" /></td>
                <td><input type="text" placeholder="Enter Last Name" name="lastName" /></td>
                <td><input type="text" placeholder="GitHub account" name="gitHub" /></td>
                <td><button>Save</button></td>
            </tr>
        </tfoot>

    </table>
 );