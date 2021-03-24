import React, { Component } from 'react';
import './UserOutput.css';

const UserOutput = props => {

        return (
            <div>
                <h2 className="headMe">{props.username}</h2>
            <p className = "paraf">
            Sorry if this is badly written, I'm on mobile and I'm a bit baked and my fiance just told me this story belongs on here.<br/>
            </p>
            <p className = "paraf">
            If you had the choice between working for a smaller, less known company in a position that you wanted to pursue as a career or work at a much larger, well known company in a position that you are not necessarily as interested in and would definitely make less of an impact, which would you choose? The role at the smaller company is in PM which is something I'm really interested in doing although have not had any real experience with, and I believe I would definitely be doing a lot more real work there.<br/>
            </p>
            </div>
        );
}

export default UserOutput;