import { getInput } from "../../utils";

const input = getInput();

const [drawnNumbersRaw, ...ticketsRaw] = input.split("\n");
const drawnNumbers = drawnNumbersRaw.split(",").map((num) => parseInt(num, 10));
const ticketHolder = [];
const tempArray = [];

ticketsRaw.map((ticketLine) => {
  if (ticketLine === "" && tempArray.length > 0) {
    ticketHolder.push([...tempArray]);
    tempArray.length = 0;
  } else if (ticketLine !== "") {
    tempArray.push(
      ticketLine
        .split(" ")
        .filter(Boolean)
        .map((num) => parseInt(num, 10))
    );
  }
});

console.log("🚀 ~ drawnNumbers", ticketHolder);

console.log("🎄 Solution:");
