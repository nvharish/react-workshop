import { useEffect, useState } from "react";
import CreateUser from "./CreateUser";
import axios from "axios";
import config from "../config.json";
import EditUser from "./EditUser";

function UserDetails() {
    const [users, setUsers] = useState([]);
    const [form, setForm] = useState(0);
    const [selectedUser, setSelectedUser] = useState({ name: "", age: "", dob: "", country: "", power: "0" });

    const getUsers = () => {
        axios.get(config.api_host + "/users")
            .then(res => {
                //console.log(res.data);
                setUsers(res.data);
            })
            .catch(error => console.log(error));
    };

    const refresh = () => {
        setForm(0);
    };

    const updateSelectedUser = (user) => {
        //console.log(user);
        setSelectedUser(user);
        //console.log(selectedUser);
        setForm(1);
    };

    const editHandler = (evt) => {
        setSelectedUser({
            ...selectedUser, [evt.target.id]: evt.target.value
        });
    };

    const deleteUser = (id) => {
        if (window.confirm("Are you sure to delete this user?")) {
            axios.delete(config.api_host + "/users/" + id)
                .then((res) => {
                    getUsers();
                    alert(res.data.message);
                });
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    return <div>
        {form === 0 ? <CreateUser getUsers={getUsers} /> : <EditUser user={selectedUser} getUsers={getUsers} refresh={refresh} changeHandler={editHandler} />}
        <hr />
        {users.length && <>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Sl#</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>DOB</th>
                        <th>Country</th>
                        <th>Power</th>
                        <th colSpan={2} className='text-center'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => {
                            return <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.dob}</td>
                                <td>{user.country}</td>
                                <td>{user.power}</td>
                                <td>
                                    <button className='btn btn-warning' onClick={() => updateSelectedUser(user)}>Edit</button>
                                </td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => deleteUser(user._id)}>Delete</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </>
        }
    </div>
}

export default UserDetails;