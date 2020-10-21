'use strict';

const deliveries = require('./controller');

module.exports = {
    'deliveries/': {
        get: [deliveries.getDeliveries],
        post: [deliveries.newDelivery]
    },
    'deliveries/edit': {
        post: [deliveries.toEditDelivery]
    },
    'deliveries/delete': {
        post: [deliveries.deleteDeliveries]
    }
}