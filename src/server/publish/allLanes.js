import changeHandler from './changeHandler';
import thinky from '../database/models/thinky'
const {r} = thinky;

export default function allLanes(channel, query) {
  r.table('lanes')
    .changes({
      squash: 4.0,
      includeInitial: true
    })
    .run({cursor: true}, changeHandler.call(this,channel));
}



