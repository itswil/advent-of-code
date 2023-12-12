const CARDS = {
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  T: 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14,
} as const;

export const HANDS = {
  HIGH_CARD: 1,
  ONE_PAIR: 2,
  TWO_PAIR: 3,
  THREE_KIND: 4,
  FULL_HOUSE: 5,
  FOUR_KIND: 6,
  FIVE_KIND: 7,
} as const;

type Hand = keyof typeof HANDS;
type HandStrength = (typeof HANDS)[Hand];

export const getHighestHandStrength = (hand: string): HandStrength => {
  let highestHand = 0 as HandStrength;

  for (const card of hand) {
    const trimmedHand = hand.replaceAll(card, "");
    if (trimmedHand.length === 0) {
      if (HANDS.FIVE_KIND > highestHand) {
        highestHand = HANDS.FIVE_KIND;
      }
    } else if (trimmedHand.length === 1) {
      if (HANDS.FOUR_KIND > highestHand) {
        highestHand = HANDS.FOUR_KIND;
      }
    } else if (trimmedHand.length === 2) {
      const [a, b] = trimmedHand.split("");
      if (a === b) {
        if (HANDS.FULL_HOUSE > highestHand) {
          highestHand = HANDS.FULL_HOUSE;
        }
      } else {
        if (HANDS.THREE_KIND > highestHand) {
          highestHand = HANDS.THREE_KIND;
        }
      }
    } else if (trimmedHand.length === 3) {
      const [a, b, c] = trimmedHand.split("");
      if (a === b || a === c || b === a || b === c) {
        if (HANDS.TWO_PAIR > highestHand) {
          highestHand = HANDS.TWO_PAIR;
        }
      } else {
        if (HANDS.ONE_PAIR > highestHand) {
          highestHand = HANDS.ONE_PAIR;
        }
      }
    }
  }

  if (highestHand === (0 as HandStrength)) {
    return HANDS.HIGH_CARD;
  }

  return highestHand;
};

export const compareHands = (a: string, b: string) => {
  const aStrength = getHighestHandStrength(a);
  const bStrength = getHighestHandStrength(b);

  if (aStrength !== bStrength) {
    return aStrength < bStrength ? -1 : 1;
  }

  for (let i = 0; i < a.length; i++) {
    const aCharValue = CARDS[a[i] as keyof typeof CARDS];
    const bCharValue = CARDS[b[i] as keyof typeof CARDS];

    if (aCharValue < bCharValue) {
      return -1;
    } else if (aCharValue > bCharValue) {
      return 1;
    }
  }
};

export const getTotalWinnings = (input: string): number => {
  const unformattedHands = input.split("\n");
  const hands: Array<[string, number]> = unformattedHands.map((h) => {
    const [hand, bid] = h.split(" ");
    return [hand, parseInt(bid)];
  });

  const sortedHands = hands.toSorted((a, b) => compareHands(a[0], b[0])!);

  return sortedHands.reduce((a, c, i) => a + c[1] * (i + 1), 0);
};
