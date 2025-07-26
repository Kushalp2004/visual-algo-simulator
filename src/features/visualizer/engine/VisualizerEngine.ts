import type { VisualStep } from "../context/VisualizerContext";

type Callback = (step: VisualStep, index: number) => void;

export class VisualizerEngine {
  private steps: VisualStep[];
  private onUpdate: Callback;
  private speed: number;
  private currentStep: number;
  private intervalId: number | null;

  constructor(steps: VisualStep[], onUpdate: Callback, speed = 500) {
    this.steps = steps;
    this.onUpdate = onUpdate;
    this.speed = speed;
    this.currentStep = 0;
    this.intervalId = null;
  }

  start() {
    this.stop();
    this.intervalId = window.setInterval(() => {
      if (this.currentStep >= this.steps.length) {
        this.stop();
        return;
      }
      this.onUpdate(this.steps[this.currentStep], this.currentStep);
      this.currentStep++;
    }, this.speed);
  }

  pause() {
    this.stop();
  }

  next() {
    if (this.currentStep < this.steps.length) {
      this.onUpdate(this.steps[this.currentStep], this.currentStep);
      this.currentStep++;
    }
  }

  prev() {
    if (this.currentStep > 0) {
      this.currentStep--;
      this.onUpdate(this.steps[this.currentStep], this.currentStep);
    }
  }

  reset() {
    this.stop();
    this.currentStep = 0;
    this.onUpdate(this.steps[0], 0);
  }

  changeSpeed(newSpeed: number) {
    this.speed = newSpeed;
    if (this.intervalId !== null) {
      this.start();
    }
  }

  private stop() {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}
