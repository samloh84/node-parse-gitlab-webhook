const _ = require("lodash");
const {formatUser} = require("./formatUser.js");
const {formatProject} = require("./formatProject.js");
const {formatMergeRequest} = require("./formatMergeRequest.js");

function parseMergeRequestEvent(event, callbacks) {
    let body = _.get(event, 'body');

    let formatUserCallback = _.get(callbacks, 'formatUser');
    let formatProjectCallback = _.get(callbacks, 'formatProject');
    let formatMergeRequestCallback = _.get(callbacks, 'formatMergeRequest');

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

    let mergeRequest;
    if (!_.isNil(formatMergeRequestCallback)) {
        mergeRequest = formatMergeRequestCallback(event);
    } else {
        mergeRequest = formatMergeRequest(event);
    }


    let object_attributes = _.get(body, 'object_attributes');

    let action = _.get(object_attributes, 'action');


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
    let message = `${user} ${actionVerb} a ${mergeRequest} in ${project}`;
    return {user, project, message}

}

module.exports = {parseMergeRequestEvent}