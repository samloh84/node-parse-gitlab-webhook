import _ from "lodash";
import {formatUser} from "./formatUser";
import {formatRepository} from "./formatRepository";

export function parseGitLabWebhookPushEvent(event, callbacks) {
    let body = _.get(event, 'body');

    let formatUserCallback = _.get(callbacks, 'formatUser');
    let formatRepositoryCallback = _.get(callbacks, 'formatRepository');

    let user;
    if (!_.isNil(formatUserCallback)) {
        user = formatUserCallback(event);
    } else {
        user = formatUser(event);
    }

    let repository;
    if (!_.isNil(formatRepositoryCallback)) {
        repository = formatRepositoryCallback(event);
    } else {
        repository = formatRepository(event);
    }

    let total_commits_count = _.get(body, 'total_commits_count');
    let ref = _.get(body, 'ref');
    let after = _.get(body, 'after');
    let commits = _.get(event, ['body', 'commits']);
    let latestCommit = _.find(commits, {id: after});
    let latestCommitUrl = _.get(latestCommit, 'url');

    let message = `${user} pushed [${total_commits_count} commits](${latestCommitUrl}) to ${ref} on ${repository}`;
    return {
        user,
        repository,
        message
    }
}