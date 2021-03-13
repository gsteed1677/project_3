import API from "../util/API";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
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
        title: "",
        description: "",
        price: "",
        contactEmail: "",
    });

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        //console.log(formObject)
        API.savePosts({
            id: id,
            title: formObject.title,
            description: formObject.description,
            price: formObject.price,
            contactEmail: formObject.contactEmail
        })
            .then(() => setFormObject({

                title: "",
                description: "",
                price: "",
                contactEmail: ""
            }))
            .catch(err => console.log(err));
    };

    return (
        <>
            <br />
            <br />
            <br />
            <form className={classes.root} noValidate autoComplete="off">
                <h2>Post Your Stuff</h2>
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Title"
                        color="secondary"
                        variant="outlined"
                        onChange={handleInputChange}
                        name="title"
                        value={formObject.title} />
                    <br />
                    <TextField
                        required
                        id="outlined-required"
                        label="Description"
                        color="secondary"
                        variant="outlined"
                        onChange={handleInputChange}
                        name="description"
                        value={formObject.description} />
                    <br />
                    <TextField
                        required
                        id="outlined-required"
                        label="Price $"
                        color="secondary"
                        variant="outlined"
                        onChange={handleInputChange}
                        name="price"
                        helper text="Email or Phone #"
                        value={formObject.price} />
                    <br />
                    <TextField
                        required
                        id="outlined-required"
                        label="Contact Email"
                        color="secondary"
                        variant="outlined"
                        onChange={handleInputChange}
                        name="contactEmail"
                        helper text="Email or Phone #"
                        value={formObject.contactEmail} />
                </div>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    // endIcon={<Icon>send</Icon>}
                    onClick={handleFormSubmit}
                >Submit</Button>
            </form>
        </>
    )
}

export default PostFormPage;
