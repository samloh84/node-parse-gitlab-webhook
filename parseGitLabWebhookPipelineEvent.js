import _ from "lodash";

export function parseGitLabWebhookPipelineEvent(event, callbacks) {
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
    let status = _.get(object_attributes, 'status');
    let source = _.get(object_attributes, 'source');

    switch (source) {
        case 'push':
            break;
        case 'trigger':
            break;
        case 'schedule':
            break;
        case 'api':
            break;
        case 'external':
            break;
        case 'pipeline':
            break;
        case 'chat':
            break;
        case 'webide':
            break;
        case 'merge_request_event':
            break;
        case 'external_pull_request_event':
            break;
        case 'parent_pipeline':
            break;
        case 'ondemand_dast_scan':
            break;
        case 'ondemand_dast_validation':
            break;

    }


    let message = `${source} by ${user} has triggered the Pipeline in ${repository}: ${status}`;


    switch (status) {
        case 'created':
            message = `${source} by ${user} has triggered the Pipeline in ${repository}: ${status}`;
            break;
        case 'waiting_for_resource':
            message = `${source} by ${user} has triggered the Pipeline in ${repository}: ${status}`;
            break;
        case 'preparing':
            message = `${source} by ${user} has triggered the Pipeline in ${repository}: ${status}`;
            break;
        case 'pending':
            message = `${source} by ${user} has triggered the Pipeline in ${repository}: ${status}`;
            break;
        case 'running':
            message = `${source} by ${user} has triggered the creation of a Pipeline in ${repository}`;
            break;
        case 'success':
            break;
        case 'failed':
            break;
        case 'canceled':
            break;
        case 'skipped':
            break;
        case 'manual':
            break;
        case 'scheduled':
            break;

    }

    return {
        user,
        repository,
        message
    }
}