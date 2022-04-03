import _ from "lodash";
import {formatUser} from "./formatUser.js";
import {formatRepository} from "./formatRepository.js";

export function parseNoteEvent(event, callbacks) {
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

    let object_attributes = _.get(body, 'object_attributes');

    let noteUrl = _.get(object_attributes, 'url');
    let note = _.get(object_attributes, 'note');
    let noteableType = _.get(object_attributes, 'noteable_type');

    let noteTarget = null;
    let actionVerb = 'commented';

    if (noteableType === 'Commit') {
        let commit = _.get(body, 'commit');
        let commitId = _.get(commit, 'id');
        noteTarget = `Commit ${commitId}`
    } else if (noteableType === 'MergeRequest') {
        let mergeRequest = _.get(body, 'merge_request');
        let mergeRequestId = _.get(mergeRequest, 'id');
        let mergeRequestTitle = _.get(mergeRequest, 'title');
        noteTarget = `Merge Request ${mergeRequestId} ${mergeRequestTitle}`
    } else if (noteableType === 'Issue') {
        let issue = _.get(body, 'issue');
        let issueId = _.get(issue, 'id');
        let issueTitle = _.get(issue, 'title');
        noteTarget = `Issue ${issueId} ${issueTitle}`

    } else if (noteableType === 'Snippet') {
        let snippet = _.get(body, 'snippet');
        let snippetId = _.get(snippet, 'id');
        let snippetTitle = _.get(snippet, 'title');
        noteTarget = `Code Snippet ${snippetId} ${snippetTitle}`
    }

    return {
        user,
        repository,
        noteTarget,
        message: `${user} [${actionVerb}](${noteUrl}) on ${noteTarget} in ${repository}:\n${note}`
    }
}