import idGeneration from '../utils/id_generation';
import dateProcessing from '../utils/date_processing';
import { sanitize } from '../utils/diacritics';

export default class Play {
  id;
  letter;
  playedAt;
  status;

  constructor(id, letter, playedAt, status) {
    this.id = id;
    this.letter = letter && sanitize(letter);
    this.playedAt = playedAt;
    this.status = status;
  }

  toJSON() {
    return {
      id: this.id,
      letter: this.letter,
      playedAt: this.playedAt,
      status: this.status,
    };
  }

  static newInstance({ id = idGeneration.generateId(), letter, playedAt = dateProcessing.toISOString(), status } = {}) {
    return new Play(id, letter, playedAt, status);
  }

  static fromJSON({ id, letter, playedAt, status }) {
    return new Play(id, letter, playedAt, status);
  }
}
