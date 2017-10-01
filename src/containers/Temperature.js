import { observable, computed } from 'mobx';

// import { observer } from 'mobx-react';

// import React from 'react';

export default class Temperature {
  id = Math.random();

  @observable unit = 'C';
  @observable temperatureCelsius = 25;

  @computed
  get temperatureKelvin() {
    return this.temperatureCelsius + 273.15;
  }

  @computed
  get temperatureFahrenheit() {
    return this.temperatureCelsius * (9 / 5) + 32;
  }
  @computed
  get temperature() {
    switch (this.unit) {
      case 'K':
        return this.temperatureKelvin + 'K';
      case 'F':
        return this.temperatureFahrenheit + 'F';
      case 'C':
        return this.temperatureCelsius + 'C';
      default:
        return this.temperatureCelsius + 'C';
    }
  }
}
