import Avatar from "./Avatar.jsx";
import {useContext} from "react";
import {TwitterContext} from "../utils/context.js";

const Navigation = () => {
    const {handleChangeAvatar} = useContext(TwitterContext)
    return (
        <div className={'nav'}>
            <Avatar handleChangeAvatar={handleChangeAvatar} size={'small'}/>
        </div>
    );
};

export default Navigation;