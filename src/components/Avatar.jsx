import {useContext} from "react";
import {TwitterContext} from "../utils/context.js";

const Avatar = ({size, handleChangeAvatar}) => {

    const {user} = useContext(TwitterContext);
    return (
        <img onClick={handleChangeAvatar} className={`user-avatar ${size ?? ''}`} src={user.avatar} alt={user.name}/>
    );
};

export default Avatar;