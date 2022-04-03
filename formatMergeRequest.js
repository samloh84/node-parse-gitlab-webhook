import _ from "lodash";

export function formatMergeRequest(event) {
    let body = _.get(event, 'body');

    let object_kind = _.get(body, 'object_kind');
    let merge_request;
    if (object_kind === 'merge_request') {
        merge_request = _.get(body, 'object_attributes');
    } else {
        merge_request = _.get(body, 'merge_request');
    }

    let mergeRequestUrl = _.get(merge_request, 'url');
    let mergeRequestIid = _.get(merge_request, 'iid');
    let mergeRequestTitle = _.get(merge_request, 'title');

    return `[Merge Request ${mergeRequestIid} ${mergeRequestTitle}](${mergeRequestUrl})`;
}