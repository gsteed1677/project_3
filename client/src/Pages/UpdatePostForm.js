import React, { useState } from 'react'
import Postcard from '../components/Postcard'

function UpdatePostForm(props) {
    const [newPost, setNewPost] = useState({ ...props.location.state })

    console.log(props)
    return (
        <Postcard
            post={newPost}
        />
    )
}

export default UpdatePostForm
