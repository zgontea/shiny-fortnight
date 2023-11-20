import { neuralNetwork, deepNeuralNetwork } from './neuralNetwork.js'
import network from './neuralNetwork.js'
import { matrix } from "mathjs";

const input1 = matrix([[2]]);
const expectedOutput1 = matrix([[0.8]]);
const weights1 = matrix([[0.5]]);

const input2 = matrix([[0.5, 0.1, 0.2, 0.8], [0.75, 0.3, 0.1, 0.9], [0.1, 0.7, 0.6, 0.2]]);
const expectedOutput2 = matrix([[0.1, 0.5, 0.1, 0.7], [1.0, 0.2, 0.3, 0.6], [0.1, -0.5, 0.2, 0.2], [0.0, 0.3, 0.9, -0.1], [-0.1, 0.7, 0.1, 0.8]]);
const weights2 = matrix([[0.1, 0.1, -0.3], [0.1, 0.2, 0.0], [0.0, 0.7, 0.1], [0.2, 0.4, 0.0], [-0.3, 0.5, 0.1]]);

const alpha = 0.1;

const neuralNetworkObj = new network(1);
neuralNetworkObj.layers.push(weights1);

console.log('Zad1', neuralNetworkObj.teach(20, input1, alpha, expectedOutput1));

const neuralNetworkObj2 = new network(3);
neuralNetworkObj2.layers.push(weights2);

console.log('Zad2', neuralNetworkObj2.teach(1000, input2, alpha, expectedOutput2));

