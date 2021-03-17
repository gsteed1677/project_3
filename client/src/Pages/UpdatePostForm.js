import React, { useState } from 'react'
import Postcard from '../components/Postcard'
import TextField from '@material-ui/core/TextField'; import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import API from "../util/API";
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

function UpdatePostForm(props) {
    const classes = useStyles()

    const { id } = useParams()

    const [newPost, setNewPost] = useState({ ...props.location.state })

    function handleInputChange(event) {
        const { name, value } = event.target;
        setNewPost({ ...newPost, [name]: value })
    };

    function updatePost() {
        API.updatePost(id, newPost) //here lies the problem, i think its my route getPost
            .then((res) => console.log(res))
    }


    // function handleFormSubmit(event) {
    //     event.preventDefault();
    //     //console.log(formObject)
    //     API.getPost()
    //         .then((res) => console.log(res))//setNewPost(res.data))
    //         .catch(err => console.log(err));
    // }

    //console.log(props)
    return (<>

        <Postcard
            post={newPost}
        />
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField
                    required
                    id="outlined-required"
                    label="Title"
                    color="secondary"
                    variant="outlined"
                    onChange={handleInputChange}
                    name="title"
                    value={newPost.title} />
                <br />
                <TextField
                    required
                    id="outlined-required"
                    label="Description"
                    color="secondary"
                    variant="outlined"
                    onChange={handleInputChange}
                    name="description"
                    value={newPost.description} />
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
                    value={newPost.price} />
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
                    value={newPost.contactEmail} />
            </div>
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                // endIcon={<Icon>send</Icon>}
                //onClick={handleFormSubmit}
                onClick={() => updatePost()}
            >Submit</Button>
        </form>
    </>
    )
}

export default UpdatePostForm
