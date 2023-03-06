import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { LikeSvg } from "../../../ui/icons";

interface Props {
  liked: boolean;
}

const PostLike: React.FC<Props> = ({ liked }) => {
  const [isLiked, setIsLiked] = useState(liked);

  const Like = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <TouchableOpacity touchSoundDisabled={true} onPress={() => Like()}>
      <LikeSvg stroke={isLiked ? "#EE5162" : undefined} strokeWidth={1.5} />
    </TouchableOpacity>
  );
};

export default PostLike;
