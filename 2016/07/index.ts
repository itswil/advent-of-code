type IpSegment = string;
type IpSegments = Array<IpSegment>;
type SegmentedIp = [IpSegments, IpSegments];

const splitIp = (ip: string): SegmentedIp => {
  const segments = ip.replaceAll("[", "-").replaceAll("]", "-").split("-");
  const standardSegments: IpSegments = [];
  const hypernetSegments: IpSegments = [];

  for (let i = 0; i < segments.length; i++) {
    if (i % 2 === 0) {
      standardSegments.push(segments[i]);
    } else {
      hypernetSegments.push(segments[i]);
    }
  }

  return [standardSegments, hypernetSegments];
};

export const containsABBASequence = (segment: string): boolean => {
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

export const getNumberOfTlsIps = (input: string): number => {
  const ips = input.split("\n");
  let numberOfValidIps = 0;

  for (const ip of ips) {
    const [standardSegments, hypernetSegments] = splitIp(ip);

    if (
      !hypernetSegments.some(containsABBASequence) &&
      standardSegments.some(containsABBASequence)
    ) {
      numberOfValidIps++;
    }
  }

  return numberOfValidIps;
};

type BAB = string;
type BABs = Array<BAB>;
const getAllBABs = (segments: IpSegments): BABs => {
  const allBABs: BABs = [];

  for (const segment of segments) {
    for (let i = 0; i < segment.length - 2; i++) {
      if (segment[i] === segment[i + 2] && segment[i] !== segment[i + 1]) {
        allBABs.push(segment.slice(i, i + 3));
      }
    }
  }

  return allBABs;
};

const containsAnyABASequence = (segment: IpSegment, allBABs: BABs): boolean => {
  for (const bab of allBABs) {
    const ABA = bab[1] + bab[0] + bab[1];
    if (segment.includes(ABA)) {
      return true;
    }
  }

  return false;
};

export const getNumberOfSslIps = (input: string): number => {
  const ips = input.split("\n");
  let numberOfValidIps = 0;

  for (const ip of ips) {
    const [standardSegments, hypernetSegments] = splitIp(ip);

    const allBABs = getAllBABs(hypernetSegments);

    if (
      standardSegments.some((segment) =>
        containsAnyABASequence(segment, allBABs)
      )
    ) {
      numberOfValidIps++;
    }
  }

  return numberOfValidIps;
};
