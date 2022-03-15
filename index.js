import * as _ from "lodash";


export function parseGitLabWebhookPushEvent(event) {
    let objectKind = _.get(event, ['body', 'object_kind']);

    let repositoryName = _.get(event, ['body', 'repository', 'name']);
    let repositoryUrl = _.get(event, ['body', 'repository', 'homepage']);

    let commits = _.get(event, ['body', 'commits']);
    let numCommits = _.size(commits);
    let userNiceName = _.get(event, ['body', 'user_name']);
    let username = _.get(event, ['body', 'user_username']);
    let ref = _.get(event, ['body', 'ref']);
    let after = _.get(event, ['body', 'after']);
    let latestCommit = _.find(commits, {id: after});
    let latestCommitUrl = _.get(latestCommit, 'url');

    return {message: `${userNiceName} [${username}] pushed ${numCommits} commits to Ref ${ref} on Repository ${repositoryName}:\n\n${latestCommitUrl}`}
}


export function parseGitLabWebhookTagPushEvent(event) {
    let objectKind = _.get(event, ['body', 'object_kind']);

    let repositoryName = _.get(event, ['body', 'repository', 'name']);
    let repositoryUrl = _.get(event, ['body', 'repository', 'homepage']);


    let userNiceName = _.get(event, ['body', 'user_name']);
    let username = _.get(event, ['body', 'user_username']);
    let checkoutSha = _.get(event, ['body', 'checkout_sha']);
    let ref = _.get(event, ['body', 'ref']);


    return {message: `${userNiceName} [${username}] tagged ${checkoutSha} with tag ${ref} in Repository ${repositoryName}:\n\n${repositoryUrl}`}
}

export function parseGitLabWebhookIssueEvent(event) {
    let objectKind = _.get(event, ['body', 'object_kind']);

    let repositoryName = _.get(event, ['body', 'repository', 'name']);
    let repositoryUrl = _.get(event, ['body', 'repository', 'homepage']);

    let userNiceName = _.get(event, ['body', 'user', 'name']);
    let username = _.get(event, ['body', 'user', 'username']);
    let action = _.get(event, ['body', 'object_attributes', 'action']);
    let issueUrl = _.get(event, ['body', 'object_attributes', 'url']);
    let issueId = _.get(event, ['body', 'object_attributes', 'id']);
    let issueTitle = _.get(event, ['body', 'object_attributes', 'title']);
    let actionVerbs = {
        'open': 'opened',
        'close': 'closed',
        'reopen': 'reopened',
        'update': 'updated',
    }

    let actionVerb = actionVerbs[action];
    return {message: `${userNiceName} [${username}] ${actionVerb} an Issue ${issueId} ${issueTitle} in Repository ${repositoryName}:\n\n${issueUrl}`}

}

export function parseGitLabWebhookNoteEvent(event) {
    let objectKind = _.get(event, ['body', 'object_kind']);

    let repositoryName = _.get(event, ['body', 'repository', 'name']);
    let repositoryUrl = _.get(event, ['body', 'repository', 'homepage']);

    let userNiceName = _.get(event, ['body', 'user', 'name']);
    let username = _.get(event, ['body', 'user', 'username']);
    let noteUrl = _.get(event, ['body', 'object_attributes', 'url']);
    let note = _.get(event, ['body', 'object_attributes', 'note']);
    let actionVerb = 'commented';
    let noteableType = _.get(event, ['body', 'object_attributes', 'noteable_type']);

    let noteTarget = null;

    if (noteableType === 'Commit') {
        let commitId = _.get(event, ['body', 'commit', 'id']);
        noteTarget = `Commit ${commitId}`
    } else if (noteableType === 'MergeRequest') {
        let mergeRequestId = _.get(event, ['body', 'merge_request', 'id']);
        let mergeRequestTitle = _.get(event, ['body', 'merge_request', 'title']);
        noteTarget = `Merge Request ${mergeRequestId} ${mergeRequestTitle}`
    } else if (noteableType === 'Issue') {
        let issueId = _.get(event, ['body', 'issue', 'id']);
        let issueTitle = _.get(event, ['body', 'issue', 'title']);
        noteTarget = `Issue ${issueId} ${issueTitle}`
    } else if (noteableType === 'Snippet') {
        let snippetId = _.get(event, ['body', 'snippet', 'id']);
        let snippetTitle = _.get(event, ['body', 'snippet', 'title']);
        noteTarget = `Snippet ${snippetId} ${snippetTitle}`
    }

    return {message: `${userNiceName} [${username}] ${actionVerb} on ${noteTarget} in Repository ${repositoryName}:\n\n${note}\n\n${noteUrl}`}

}

export function parseGitLabWebhookMergeRequestEvent(event) {
    let objectKind = _.get(event, ['body', 'object_kind']);

    let repositoryName = _.get(event, ['body', 'repository', 'name']);
    let repositoryUrl = _.get(event, ['body', 'repository', 'homepage']);

    let userNiceName = _.get(event, ['body', 'user', 'name']);
    let username = _.get(event, ['body', 'user', 'username']);
    let action = _.get(event, ['body', 'object_attributes', 'action']);
    let mergeRequestUrl = _.get(event, ['body', 'object_attributes', 'url']);
    let mergeRequestId = _.get(event, ['body', 'object_attributes', 'id']);
    let mergeRequestTitle = _.get(event, ['body', 'object_attributes', 'title']);
    let actionVerbs = {
        'open': 'opened',
        'close': 'closed',
        'reopen': 'reopened',
        'update': 'updated',
        'approved': 'approved',
        'unapproved': 'unapproved',
        'merge': 'merged'
    }

    let actionVerb = actionVerbs[action];
    return {message: `${userNiceName} [${username}] ${actionVerb} a Merge Request ${mergeRequestId} ${mergeRequestTitle} in Repository ${repositoryName}:\n\n${mergeRequestUrl}`}

}


export function parseGitLabWebhookWikiPageEvent(event) {
    let objectKind = _.get(event, ['body', 'object_kind']);

    let repositoryName = _.get(event, ['body', 'repository', 'name']);
    let repositoryUrl = _.get(event, ['body', 'repository', 'homepage']);

    let userNiceName = _.get(event, ['body', 'user', 'name']);
    let username = _.get(event, ['body', 'user', 'username']);
    let action = _.get(event, ['body', 'object_attributes', 'action']);
    let wikiPageUrl = _.get(event, ['body', 'object_attributes', 'url']);
    let wikiPageTitle = _.get(event, ['body', 'object_attributes', 'title']);
    let actionVerbs = {
        'create': 'created',
        'update': 'updated',
        'delete': 'deleted',
    }

    let actionVerb = actionVerbs[action];
    return {message: `${userNiceName} [${username}] ${actionVerb} a  Wiki Page ${wikiPageTitle} in Repository ${repositoryName}:\n\n${wikiPageUrl}`}

}


export function parseGitLabWebhookEvent(event) {

    let objectKind = _.get(event, ['body', 'object_kind']);

    let repositoryName = _.get(event, ['body', 'repository', 'name']);
    let repositoryUrl = _.get(event, ['body', 'repository', 'homepage']);


    if (objectKind === 'push') {
        return parseGitLabWebhookPushEvent(event);
    } else if (objectKind === 'tag_push') {
        return parseGitLabWebhookTagPushEvent(event);
    } else if (objectKind === 'issue') {
        return parseGitLabWebhookIssueEvent(event);
    } else if (objectKind === 'note') {
        return parseGitLabWebhookNoteEvent(event);
    } else if (objectKind === 'merge_request') {
        return parseGitLabWebhookMergeRequestEvent(event);
    } else if (objectKind === 'wiki_page') {
        return parseGitLabWebhookWikiPageEvent(event);
    }

}
