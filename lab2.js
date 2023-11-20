import { neuralNetwork, deepNeuralNetwork } from './neuralNetwork.js'
import network from './neuralNetwork.js'
import { matrix } from "mathjs";

const input = matrix([[0.5, 0.75, 0.1], [0.1, 0.3, 0.7], [0.2, 0.1, 0.6], [0.9, 0.9, 0.2]]);
const weightsH = matrix([[0.5]]);
const expectedOutput = matrix([[0.1, 1.0, 0.1, 0.0, -0.1], [0.5, 0.2, -0.5, 0.3, 0.7], [0.1, 0.3, 0.2, 0.9, 0.1], [0.7, 0.6, 0.2, -0.1, 0.8]]);
// const weightsY = matrix([[0.7, 0.9, -0.4, 0.8, 0.1], [0.8, 0.5, 0.3, 0.1, 0.0], [-0.3, 0.9, 0.3, 0.1, -0.2]]);
const alpha = 0.1;


// const neuralNetworkObj = new network(1);
// neuralNetworkObj.layers.push(weightsH);
//
// console.log('Zad1', neuralNetworkObj.teach(20, input, alpha, expectedOutput));

const neuralNetworkObj2 = new network(3);
neuralNetworkObj2.addLayer(5);

console.log('Zad2', neuralNetworkObj2.teach(20, input, alpha, expectedOutput));

