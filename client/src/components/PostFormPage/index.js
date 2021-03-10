import { useState, useEffect } from 'react';
import API from "../../util/API";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import React, { Fragment } from 'react';
import { useParams } from 'react-router';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

function PostFormPage() {
    const classes = useStyles()
    //this is the id that is passed into the url when we redirect
    const { id } = useParams()

    // const [posts, setPosts] = useState([])
    const [formObject, setFormObject] = useState({
        username: "",
        title: "",
        description: "",
        price: "",
        contact: "",
    });

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        //console.log(formObject)
        API.savePosts({
            username: formObject.username,
            title: formObject.title,
            description: formObject.description,
            price: formObject.price,
            contact: formObject.contact
        })
            .then(() => setFormObject({
                username: "",
                title: "",
                description: "",
                price: "",
                contact: ""
            }))
            .catch(err => console.log(err));

    };

    return (
        <>
            <form className={classes.root} noValidate autoComplete="off">
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Username"
                        color="secondary"
                        variant="outlined"
                        onChange={handleInputChange}
                        name="username"
                        value={formObject.username} />
                    <br />
                    <TextField
                        required
                        id="outlined-required"
                        label="Title"
                        color="secondary"
                        variant="outlined"
                        onChange={handleInputChange}
                        name="title"
                        value={formObject.title} />
                    <TextField
                        id="outlined-multiline-static"
                        label="Multiline"
                        defaultValue="Default Value"
                        variant="outlined"
                    />


                </div>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    // endIcon={<Icon>send</Icon>}
                    onClick={handleFormSubmit}
                >
                    Submit
      </Button>
            </form>
        </>
    )
}

export default PostFormPage;
