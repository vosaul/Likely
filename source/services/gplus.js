/**
 * Google+ service provider
 */

export default {
    counterUrl: 'https://clients6.google.com/rpc',
    counter(counterUrl, callback, sharedUrl) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', counterUrl);
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.addEventListener('load', () => {
            const plusOneCount = JSON.parse(xhr.responseText)[0].result.metadata.globalCounts.count;
            callback(plusOneCount);
        });

        xhr.send(JSON.stringify([{
            method: 'pos.plusones.get',
            id: 'p',
            params: {
                nolog: true,
                id: sharedUrl,
                source: 'widget',
                userId: '@viewer',
                groupId: '@self',
            },
            jsonrpc: '2.0',
            key: 'p',
            apiVersion: 'v1',
        }]));
    },
    popupUrl: 'https://plus.google.com/share?url={url}',
    popupWidth: 700,
    popupHeight: 500,
    svgIconPath: '8,6.5v3h4.291c-0.526,2.01-2.093,3.476-4.315,3.476C5.228,12.976,3,10.748,3,8c0-2.748,2.228-4.976,4.976-4.976c1.442,0,2.606,0.623,3.397,1.603L13.52,2.48C12.192,0.955,10.276,0,8,0C3.582,0,0,3.582,0,8s3.582,8,8,8s7.5-3.582,7.5-8V6.5H8'
};
