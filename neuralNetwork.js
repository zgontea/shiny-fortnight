import {multiply, subset, index, matrix, random, flatten, subtract, kron, row} from "mathjs";
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

    teach(epochCount, input, alpha, expectedOutput) {
        let output;
        expectedOutput = expectedOutput.toArray();

        for (let i = 0; i < epochCount; i++) {
            let totalError = 0;
            for (let s = 0; s < input.size()[0]; s++) {
                let prediction = this.predict(row(input, s));
                let delta = [];

                output = prediction.toArray();

                let error = 0;

                for (let d = 0; d < output.length; d++) {
                    delta.push((2 / output.length) * (output[d] - expectedOutput[s][d]));
                    error += (output[d] - expectedOutput[s][d]) * (output[d] - expectedOutput[s][d]);
                }

                error = error / output.length;
                console.log("ERROR (EPOCH " + (i + 1) + "): " + error);

                totalError += error;
                if (epochCount === 999) console.log('TOTAL ERROR: ' + totalError);

                let outerProduct = multiply(kron(delta, input), alpha);
                this.layers[0] = subtract(this.layers[0], outerProduct);
            }
        }


        return output;
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