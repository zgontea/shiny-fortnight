import { neuralNetwork, deepNeuralNetwork } from './neuralNetwork.js'
import network from './neuralNetwork.js'
import { matrix } from "mathjs";

const input = matrix([[0.5], [0.75], [0.1]]);
const weightsH = matrix([[0.1, 0.1, -0.3], [0.1, 0.2, 0.0], [0.0, 0.7, 0.1], [0.2, 0.4, 0.0], [-0.3, 0.5, 0.1]]);
const weightsY = matrix([[0.7, 0.9, -0.4, 0.8, 0.1], [0.8, 0.5, 0.3, 0.1, 0.0], [-0.3, 0.9, 0.3, 0.1, -0.2]]);

console.log('Zad2\n', neuralNetwork(input, weightsH));
console.log('Zad3\n', deepNeuralNetwork(input, [weightsH, weightsY]));

const neuralNetworkObj = new network(3);
neuralNetworkObj.addLayer(5);
neuralNetworkObj.addLayer(2);

console.log('Zad4', neuralNetworkObj.predict(input));
