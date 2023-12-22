import React from "react";

import { Panel } from "../../styles";
import { ContainerHashtag, HashtagIcon, EventTagIcon } from "./styled";
import { tags } from "../../../utils/tag";

export const HashtagPanel = () => {
  return (
    <ContainerHashtag>
      <Panel>
        <span className="title">Recentes</span>

        {tags.map((item) => (
          <span key={item.title} className="tag">
            {item.type === "group" ? <HashtagIcon /> : <EventTagIcon />}
            {item.title}
          </span>
        ))}

        <span className="title-group">Grupos</span>
        {tags.filter((obj) => (obj.type === "group")).map((item) =>
          <span key={item.title} className="tag">
            { <HashtagIcon />}
            {item.title}
          </span>
        )}
      </Panel>
    </ContainerHashtag>
  );
};
