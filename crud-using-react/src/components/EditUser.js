import axios from "axios";
import config from "../config.json";
import UserForm from "./UserForm";
import withUserForm from "./withUserForm";

function EditUser(props) {
    const title = "Edit User", action = "Update user";
    const editUser = () => {
        const { _id: id, ...user } = props.user;
        axios.patch(config.api_host + "/users/" + id, user)
            .then(res => {
                //console.log(res.data.message);
                props.getUsers();
                alert(res.data.message);
                props.refresh();
            })
            .catch(error => console.log("Error ", error.error));
    }
    return <UserForm title={title} action={action} actionHandler={editUser} {...props} />
}

export default withUserForm(EditUser);