import { useState } from "react";

function withUserForm(Component) {
    const usr={ name: "", age: "", dob: "", country: "", power: "0" };
    return (props) => {
        const [user, setUser] = useState(usr);

        const resetForm = () => {
            setUser(usr);
        }

        const handleChange = (evt) => {
            setUser({
                ...user, [evt.target.id]: evt.target.value
            });
        }

        return <Component user={user} changeHandler={handleChange} resetForm={resetForm} {...props} />;
    }
}

export default withUserForm;