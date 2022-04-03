import _ from "lodash";
import {formatUser} from "./formatUser.js";
import {formatProject} from "./formatProject.js";
import {formatMergeRequest} from "./formatMergeRequest.js";

export function parsePipelineEvent(event, callbacks) {
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

    let object_attributes = _.get(body, 'object_attributes');
    let status = _.get(object_attributes, 'status');
    let source = _.get(object_attributes, 'source');

    let source_event_description;
    switch (source) {
        case 'push':
            source_event_description = "push";
            break;
        case 'trigger':
            source_event_description = "trigger";
            break;
        case 'schedule':
            source_event_description = "schedule";
            break;
        case 'api':
            source_event_description = "API";
            break;
        case 'external':
            source_event_description = "External";
            break;
        case 'pipeline':
            source_event_description = "pipeline";
            break;
        case 'chat':
            source_event_description = "chat";
            break;
        case 'webide':
            source_event_description = "Web IDE";
            break;
        case 'merge_request_event':
            if (!_.isNil(formatMergeRequestCallback)) {
                source_event_description = formatMergeRequestCallback(event);
            } else {
                source_event_description = formatMergeRequest(event);
            }
            break;
        case 'external_pull_request_event':
            source_event_description = "External Pull Request";
            break;
        case 'parent_pipeline':
            source_event_description = "Parent Pipeline";
            break;
        case 'ondemand_dast_scan':
            source_event_description = "On Demand DAST Scan";
            break;
        case 'ondemand_dast_validation':
            source_event_description = "On Demand DAST Validation";
            break;

    }


    let pipeline_status_description;
    switch (status) {
        case 'created':
            pipeline_status_description = 'has been created';
            break;
        case 'waiting_for_resource':
            pipeline_status_description = 'is waiting for resources';
            break;
        case 'preparing':
            pipeline_status_description = 'is preparing';
            break;
        case 'pending':
            pipeline_status_description = 'is pending';
            break;
        case 'running':
            pipeline_status_description = 'is running';
            break;
        case 'success':
            pipeline_status_description = 'has succeeded';
            break;
        case 'failed':
            pipeline_status_description = 'has failed';
            break;
        case 'canceled':
            pipeline_status_description = 'has been cancelled';
            break;
        case 'skipped':
            pipeline_status_description = 'has been shipped';
            break;
        case 'manual':
            pipeline_status_description = 'has been manually created';
            break;
        case 'scheduled':
            pipeline_status_description = 'has been scheduled';
            break;

    }

    let message = `Pipeline in ${project} ${pipeline_status_description}, triggered on ${source_event_description} by ${user}`;


    return {
        user,
        project,
        message
    }
}