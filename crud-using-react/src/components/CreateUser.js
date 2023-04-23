import axios from "axios";
import config from '../config.json';
import withUserForm from "./withUserForm";
import UserForm from "./UserForm";

function CreateUser(props) {
    const title = "Create New User", action = "Add new user";
    const addUser = () => {
        axios.post(config.api_host + "/users", props.user)
            .then(res => {
                props.getUsers();
                alert(res.data.message);
            })
            .catch(error => console.log("Error ", error.error));
    }
    return <UserForm title={title} action={action} actionHandler={addUser} {...props} />
}

export default withUserForm(CreateUser);