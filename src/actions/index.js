// @flow

import * as breakpoints from "./breakpoints";
import * as expressions from "./expressions";
import * as eventListeners from "./event-listeners";
import * as sources from "./sources";
import * as pause from "./pause";
import * as navigation from "./navigation";
import * as ui from "./ui";
import * as ast from "./ast";
import * as coverage from "./coverage";
import * as projectTextSearch from "./project-text-search";

export default Object.assign(
  {},
  navigation,
  breakpoints,
  expressions,
  eventListeners,
  sources,
  pause,
  ui,
  ast,
  coverage,
  projectTextSearch
);
