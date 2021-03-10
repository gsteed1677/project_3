import { useState, useEffect } from 'react';
import API from "../../util/API";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import React, { Fragment } from 'react';
import { useParams } from 'react-router'


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
        contactNumber: "",
        contactEmail: "",
        date: ""
    });

    useEffect(() => {
        createPosts();

    }, []);

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

                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        variant="outlined"
                        color="secondary"

                    />
                    <TextField
                        label="Required"
                        id="outlined-margin-dense"
                        className={classes.textField}
                        helperText="Description"
                        margin="dense"
                        variant="outlined"
                    />
                </div>
            </form>
        </>
    )
}

export default PostFormPage;
