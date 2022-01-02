import Conf from "conf";

const config = new Conf();

const setSignedCommit = (signed: boolean) => {
  config.set("signCommits", signed);
};

const getSignedCommit = () => {
  return config.set("signCommits");
};

export default {
  setSignedCommit,
  getSignedCommit,
};
