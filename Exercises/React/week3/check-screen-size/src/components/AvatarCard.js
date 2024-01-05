import "../App.css";
import { useEffect, useState } from "react";

import ScreenSize from "./ScreenSize";
import avatars from "../data/avatarData";
import Avatar from "./Avatar";
import { useWindowResize } from "../hooks/useWindowResize";

function AvatarCard() {
  const [currentAvatar, setCurrentAvatar] = useState({});
  const [windowSize, , handleResize] = useWindowResize();

  useEffect(() => {
    if (windowSize.width > 1000) {
      setCurrentAvatar(avatars.mithi);
    } else if (windowSize.width < 1000 && windowSize.width > 700) {
      setCurrentAvatar(avatars.diana);
    } else {
      setCurrentAvatar(avatars.mikong);
    }
  }, [windowSize.width]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="avatar-card">
      <ScreenSize windowSize={windowSize} />
      <p>
        You are seeing {currentAvatar.name ?? "Nameless"} because you have {windowSize.sizeDescription}!
      </p>
      <Avatar specs={currentAvatar} />
      <br />
      <p>*Resizing your window changes the clothes and accessories of the avatar.</p>
      <p>*The avatar shown is based on whether your window is big, medium, or small.</p>
    </div>
  );
}

export default AvatarCard;
