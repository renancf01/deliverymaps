'use strict';

const getDeliveries = function getDeliverys(request, response) {
    const delivery = request.query;

    return response(delivery)
};

const newDelivery = function newDelivery(request, response) {
    const delivery = request.body
};

const deleteDeliveries = function deleteDeliveries(request, response) {
    const delivery = request.query;
};

const toEditDelivery = function toEditDelivery(request, response) {
    const delivery = request.body
};

module.exports = {
    getDeliveries,
    newDelivery,
    deleteDeliveries,
    toEditDelivery
}