type IpSegment = Array<string>;
type SegmentedIp = [IpSegment, IpSegment];

const splitIp = (ip: string): SegmentedIp => {
  const segments = ip.replaceAll("[", "-").replaceAll("]", "-").split("-");
  const standardSegments: IpSegment = [];
  const hypernetSegments: IpSegment = [];

  for (let i = 0; i < segments.length; i++) {
    if (i % 2 === 0) {
      standardSegments.push(segments[i]);
    } else {
      hypernetSegments.push(segments[i]);
    }
  }

  return [standardSegments, hypernetSegments];
};

export const containsAbbaSequence = (segment: string): boolean => {
  for (let i = 0; i < segment.length - 3; i++) {
    if (
      segment[i] === segment[i + 3] &&
      segment[i + 1] === segment[i + 2] &&
      segment[i] !== segment[i + 1]
    ) {
      return true;
    }
  }

  return false;
};

export const getNumberOfIps = (input: string): number => {
  const ips = input.split("\n");
  let numberOfValidIps = 0;

  for (const ip of ips) {
    const [standardSegments, hypernetSegments] = splitIp(ip);

    if (
      !hypernetSegments.some(containsAbbaSequence) &&
      standardSegments.some(containsAbbaSequence)
    ) {
      numberOfValidIps++;
    }
  }

  return numberOfValidIps;
};
