import { getInput } from "../../utils";

const input = getInput();
const markers = [];

for (let i = 3; i < input.length; i++) {
  markers.push(input[i - 3]);
  markers.push(input[i - 2]);
  markers.push(input[i - 1]);
  markers.push(input[i]);

  if (new Set(markers).size === 4) {
    console.log("🎄 Solution:", i + 1);
    break;
  }

  markers.length = 0;
}
