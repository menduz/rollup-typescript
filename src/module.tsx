import { Component } from 'react';
import * as React from 'react';

export async function xxx() {
  return await test();
}

function* test() {
  yield <div>{'{a\\-a}'}</div>;
}

export class Xxx extends Component {

}
