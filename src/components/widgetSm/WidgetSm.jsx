import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    getNewUsers();
  }, []);

  const getNewUsers = async () => {
    try {
      const res = await axios.get("users?new=true", {
        headers: {
          token:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNGVhN2ZiM2FkMTljN2EyMjFiZDM5ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMjU1MDYwOCwiZXhwIjoxNjMyOTgyNjA4fQ.aEOg7FX9o8ptLoizQMzvslKSVkw6ETRoj2VY4z9zPwM",
        },
      });
      setNewUsers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user) => (
          <li className="widgetSmListItem">
            <img
              src={
                user.profilePic ||
                "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
