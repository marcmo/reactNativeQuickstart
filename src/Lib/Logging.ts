import * as T from '../Types';

export const object2string = (o: object | null | undefined): string => {
  if (o == null) {
    return 'null';
  }
  const seen: Array<any> = [];
  const replacer = (key, value) => {
    if (value != null && typeof value === 'object') {
      if (seen.indexOf(value) >= 0) {
        return 'has cycles';
      }
      seen.push(value);
    }
    return value;
  };
  if (typeof o === 'function') {
    return `type is: ${(typeof o)}`;
  }
  return `type is: ${(typeof o)} : ${JSON.stringify(o, replacer)}`;
};

export const log = (component: string) => {
  return {
    v: (s: string, o?: object) => {
      if (undefined === o) {
        // eslint-disable-next-line
        console.log(`V [applog:${component}] ${s}`); // tslint:disable-line
      } else {
        // eslint-disable-next-line
        console.log(`V [applog:${component}] ${s} "${object2string(o)}"`); // tslint:disable-line
      }
    },
    d: (s: string, o?: object) => {
      if (undefined === o) {
        // eslint-disable-next-line
        console.log(`D [applog:${component}] ${s}`); // tslint:disable-line
      } else {
        // eslint-disable-next-line
        console.log(`D [applog:${component}] ${s} "${object2string(o)}"`); // tslint:disable-line
      }
    },
    w: (s: string, o?: object) => {
      if (undefined === o) {
        console.warn(`W [applog:${component}] ${s}`);
      } else {
        console.warn(`W [applog:${component}] ${s} ${object2string(o)}`);
      }
    },
    e: (s: string) => {
      console.error(`E [applog:${component}] ${s}`);
    },
  };
};
