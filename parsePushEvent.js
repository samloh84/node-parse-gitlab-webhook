import _ from "lodash";
import {formatUser} from "./formatUser.js";
import {formatProject} from "./formatProject.js";

export function parsePushEvent(event, callbacks) {
    let body = _.get(event, 'body');

    let formatUserCallback = _.get(callbacks, 'formatUser');
    let formatProjectCallback = _.get(callbacks, 'formatProject');

    let user;
    if (!_.isNil(formatUserCallback)) {
        user = formatUserCallback(event);
    } else {
        user = formatUser(event);
    }

    let project;
    if (!_.isNil(formatProjectCallback)) {
        project = formatProjectCallback(event);
    } else {
        project = formatProject(event);
    }

    let total_commits_count = _.get(body, 'total_commits_count');
    let ref = _.get(body, 'ref');
    let after = _.get(body, 'after');
    let commits = _.get(event, ['body', 'commits']);
    let latestCommit = _.find(commits, {id: after});
    let latestCommitUrl = _.get(latestCommit, 'url');

    let message = `${user} pushed [${total_commits_count} commits](${latestCommitUrl}) to ${ref} on ${project}`;
    return {
        user,
        project,
        message
    }
}