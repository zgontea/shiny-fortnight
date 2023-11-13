import {multiply, subset, index, matrix, random} from "mathjs";
import fs from 'fs'

export default class NeuralNetwork {
    initialSize;
    layers = [];
    
    constructor(initialSize) {
        this.initialSize = initialSize;
    }

    addLayer(count) {
        let layersCount = this.layers.length;
        const previousLayerSize = layersCount ? this.layers[layersCount - 1].size()[0] : this.initialSize;
        let layer = [];
        for (let y = 0; y < count; y++) {
            let weights = []
            for (let x = 0; x < previousLayerSize; x++) {
                weights.push(Number.parseFloat((random(-1000, 1000) / 1000).toFixed(4)));
            }
            layer.push(weights);
        }
        this.layers.push(matrix(layer));
    }

    predict(input) {
        return deepNeuralNetwork(input, this.layers);
    }

    loadWeights(fileName) {
        const data = JSON.parse(fs.readFileSync('./weightsJson/' + fileName));
        this.layers = [];
        data.layers.forEach(layer => this.layers.push(matrix(layer)));
    }
}

export function neuron(input, weights, bias) {
    return subset(multiply(weights, input), index(0, 0)) + bias;
}

export function neuralNetwork(input, weights) {
    return multiply(weights, input);
}

export function deepNeuralNetwork(input, weightsArray) {
    return weightsArray.reduce((total, weights) => neuralNetwork(total, weights), input);
}