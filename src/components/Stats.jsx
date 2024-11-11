import Avatar from "./Avatar.jsx";
import {useContext} from "react";
import {TwitterContext} from "../utils/context.js";

const Stats = () => {
    const {user, stats, handleChangeAvatar} = useContext(TwitterContext)
    return (
        <div className={'user-stats'}>
            <div>
                <Avatar handleChangeAvatar={handleChangeAvatar}/>
                {user.name}
            </div>
            <div className={'stats'}>
                <div>
                    Followers: {stats.followers}
                </div>
                <div>
                    Following: {stats.following}
                </div>
            </div>
        </div>
    );
};

export default Stats;