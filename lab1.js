import { neuron, neuralNetwork, deepNeuralNetwork } from './neuralNetwork.js'
import network from './neuralNetwork.js'
import { matrix } from "mathjs";

const input = matrix([[0.5], [0.75], [0.1]]);
const weightsH = matrix([[0.1, 0.1, -0.3], [0.1, 0.2, 0.0], [0.0, 0.7, 0.1], [0.2, 0.4, 0.0], [-0.3, 0.5, 0.1]]);
const weightsY = matrix([[0.7, 0.9, -0.4, 0.8, 0.1], [0.8, 0.5, 0.3, 0.1, 0.0], [-0.3, 0.9, 0.3, 0.1, -0.2]]);

console.log(weightsY)

// console.log(neuralNetwork(input, weights));
console.log(deepNeuralNetwork(input, [weightsH, weightsY]));

const neuralNetworkObj = new network(5);
neuralNetworkObj.addLayer(3);

console.log(neuralNetworkObj.layers);
