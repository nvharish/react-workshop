function UserForm(props) {
    //console.log(props);
    return <>
        <h1>{props.title}</h1>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">User Name</label>
            <input type="text" value={props.user.name} onChange={props.changeHandler} className="form-control" id="name" />
        </div>
        <div className="mb-3">
            <label htmlFor="age" className="form-label">Age</label>
            <input value={props.user.age} type="number" onChange={props.changeHandler} className="form-control" id="age" />
        </div>
        <div className="mb-3">
            <label htmlFor="dob" className="form-label">DOB</label>
            <input value={props.user.dob} type="text" onChange={props.changeHandler} className="form-control" id="dob" />
        </div>
        <div className="mb-3">
            <label htmlFor="country" className="form-label">Country</label>
            <input value={props.user.country} type="text" onChange={props.changeHandler} className="form-control" id="country" />
        </div>
        <div className="mb-3">
            <label htmlFor="power" className="form-label">Power</label>
            <input value={props.user.power} type="range" onChange={props.changeHandler} className="form-control" id="power" min="0" max="10" />
        </div>

        <button type="submit" className="btn btn-primary" onClick={props.actionHandler}>{props.action}</button>
        {/* {JSON.stringify(props.user)} */}
    </>
}

export default UserForm;